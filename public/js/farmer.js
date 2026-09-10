// Farmer Portal Logic
let activeSlots = [];

async function loadSlots() {
  try {
    const res = await fetch("/api/slots");
    const data = await res.json();
    activeSlots = data.slots;

    const select = document.getElementById("slotSelect");
    if (select) {
      select.innerHTML = "";
      activeSlots.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s.slot;
        const remaining = s.fairShareRemaining + s.generalRemaining;
        opt.textContent = `${s.slot} (${remaining} slots open | ${s.fairShareRemaining} marginal priority reserved)`;
        if (s.isFull) opt.disabled = true;
        select.appendChild(opt);
      });
    }

    // Update Fair-Share Quota Pill
    const quotaInfo = document.getElementById("quotaInfo");
    if (quotaInfo) {
      const quotaText = (typeof currentLang !== 'undefined' && currentLang !== 'en') 
        ? "छोटे किसानों (<2 हे.) हेतु 60% फेयर-शेयर कोटा आरक्षित" 
        : "60% Fair-Share Quota Legally Protected for Small Farmers (<2 ha)";
      quotaInfo.innerHTML = `
        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
          <i data-lucide="shield-check" class="w-3.5 h-3.5 mr-1"></i> ${quotaText}
        </span>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
  } catch (err) {
    console.error("Error loading slots:", err);
  }
}

function handleLandSizeChange(val) {
  const size = parseFloat(val) || 0;
  const badge = document.getElementById("fairShareIndicator");
  if (!badge) return;

  const isHindi = (typeof currentLang !== 'undefined' && currentLang !== 'en');

  if (size <= 0) {
    badge.classList.add("hidden");
  } else if (size <= 2.0) {
    badge.className = "p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-start space-x-2";
    badge.innerHTML = `
      <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5"></i>
      <div>
        <strong>${isHindi ? "✅ फेयर-शेयर प्राथमिकता कोटा के पात्र!" : "✅ Eligible for Fair-Share Priority Quota!"}</strong><br>
        ${isHindi ? "छोटे/सीमांत किसान (<2 हेक्टेयर) होने के नाते आपको दिन के समय सीधी तुलाई की गारंटी है।" : "As a small/marginal farmer (<2 ha), you are guaranteed direct daytime weighment slots to prevent roadside queuing."}
      </div>
    `;
  } else {
    badge.className = "p-3 rounded-lg bg-amber-50 border border-amber-300 text-amber-800 text-sm flex items-start space-x-2";
    badge.innerHTML = `
      <i data-lucide="info" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"></i>
      <div>
        <strong>${isHindi ? "ℹ️ सामान्य कोटा लागू:" : "ℹ️ General Quota Applied:"}</strong><br>
        ${isHindi ? "2.0 हेक्टेयर से अधिक रकबा सामान्य व्यावसायिक स्लॉट में दर्ज किया जाता है।" : "Holdings > 2.0 ha are booked under general commercial lots to ensure equal access for marginal producers."}
      </div>
    `;
  }
  if (window.lucide) window.lucide.createIcons();
  if (typeof setLanguage === 'function' && typeof currentLang !== 'undefined') setLanguage(currentLang);
}

async function handleBookSlot(e) {
  e.preventDefault();
  const btn = document.getElementById("bookSubmitBtn");
  btn.disabled = true;
  btn.innerHTML = `<span class="animate-spin inline-block mr-2">⏳</span> Allocating Optimal Slot...`;

  const payload = {
    farmerName: document.getElementById("farmerName").value,
    phone: document.getElementById("phone").value,
    landSizeHa: document.getElementById("landSize").value,
    crop: document.getElementById("cropSelect").value,
    vehicleNo: document.getElementById("vehicleNo").value,
    vehicleType: document.getElementById("vehicleType").value,
    estWeightMT: document.getElementById("estWeight").value,
    preferredSlot: document.getElementById("slotSelect").value,
    source: "SMARTPHONE_APP"
  };

  try {
    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (!res.ok) {
      alert(data.message || data.error || "Booking failed");
      btn.disabled = false;
      btn.textContent = "Generate Digital Token & Gate Pass";
      return;
    }

    // Display Digital Pass
    displayGatePass(data.token, data.estimatedWaitTimeMins);
    loadSlots();
    loadDashboardTelemetry();
  } catch (err) {
    alert("Network error: " + err.message);
  } finally {
    btn.disabled = false;
    btn.textContent = "Generate Digital Token & Gate Pass";
  }
}

function displayGatePass(token, waitMins = 45) {
  const container = document.getElementById("gatePassContainer");
  if (!container) return;

  container.classList.remove("hidden");
  container.scrollIntoView({ behavior: "smooth" });

  document.getElementById("passTokenNo").textContent = `#${token.tokenNumber}`;
  document.getElementById("passTokenId").textContent = token.id;
  document.getElementById("passFarmerName").textContent = token.farmerName;
  document.getElementById("passVehicleNo").textContent = token.vehicleNo;
  document.getElementById("passCrop").textContent = token.cropName;
  document.getElementById("passSlot").textContent = token.slot;
  document.getElementById("passGate").textContent = token.gate;
  document.getElementById("passEta").textContent = (typeof currentLang !== 'undefined' && currentLang !== 'en') ? `<${waitMins} मिनट` : `<${waitMins} mins`;

  const priorityTag = document.getElementById("passPriorityBadge");
  if (token.priority === "HIGH_FAIRSHARE") {
    priorityTag.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-sm";
    priorityTag.innerHTML = (typeof currentLang !== 'undefined' && currentLang !== 'en') ? `🛡️ फेयर-शेयर प्राथमिकता (<2 हे.)` : `🛡️ FAIR-SHARE PRIORITY (<2 ha)`;
  } else {
    priorityTag.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-600 text-white shadow-sm";
    priorityTag.innerHTML = (typeof currentLang !== 'undefined' && currentLang !== 'en') ? `सामान्य कोटा` : `GENERAL QUOTA`;
  }

  if (typeof setLanguage === 'function' && typeof currentLang !== 'undefined') {
    setLanguage(currentLang);
  }

  // Render QR Code
  const qrDiv = document.getElementById("passQRCode");
  qrDiv.innerHTML = "";
  if (window.QRCode) {
    new QRCode(qrDiv, {
      text: JSON.stringify({
        tId: token.id,
        tNo: token.tokenNumber,
        f: token.farmerName,
        v: token.vehicleNo,
        s: token.slot,
        g: token.gate,
        mandi: "APMC-BHOPAL"
      }),
      width: 140,
      height: 140,
      colorDark: "#15803d",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
}

async function searchToken() {
  const query = document.getElementById("tokenSearchInput").value.trim();
  if (!query) return;

  try {
    const res = await fetch(`/api/token/${encodeURIComponent(query)}`);
    const data = await res.json();
    if (!res.ok) {
      alert("No active token found for " + query);
      return;
    }
    displayGatePass(data.token, data.estimatedWaitMins);
  } catch (err) {
    alert("Lookup error: " + err.message);
  }
}

// Quick Autofill Presets for Registered Farmer Accounts
function fillPreset(type) {
  if (type === "marginal") {
    document.getElementById("farmerName").value = "Radheshyam Meena";
    document.getElementById("phone").value = "9826199887";
    document.getElementById("landSize").value = "0.9";
    document.getElementById("cropSelect").value = "wheat";
    document.getElementById("vehicleNo").value = "MP04TR3344";
    document.getElementById("vehicleType").value = "Tractor Trolley";
    document.getElementById("estWeight").value = "14.5";
    handleLandSizeChange(0.9);
  } else if (type === "small") {
    document.getElementById("farmerName").value = "Baldev Singh";
    document.getElementById("phone").value = "9425012399";
    document.getElementById("landSize").value = "1.6";
    document.getElementById("cropSelect").value = "mustard";
    document.getElementById("vehicleNo").value = "MP04EA8812";
    document.getElementById("vehicleType").value = "Tractor Trolley";
    document.getElementById("estWeight").value = "11.0";
    handleLandSizeChange(1.6);
  } else if (type === "commercial") {
    document.getElementById("farmerName").value = "Singhal Agro Traders";
    document.getElementById("phone").value = "9893044556";
    document.getElementById("landSize").value = "5.5";
    document.getElementById("cropSelect").value = "wheat";
    document.getElementById("vehicleNo").value = "MP04G7719";
    document.getElementById("vehicleType").value = "Double Trolley";
    document.getElementById("estWeight").value = "36.0";
    handleLandSizeChange(5.5);
  }
}

// --- FARMER AUTHENTICATION & PM-KISAN REGISTRATION ---
let currentFarmerProfile = null;

function openAuthModal(mode = 'register') {
  const modal = document.getElementById("authModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  switchAuthTab(mode);
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.add("hidden");
}

function switchAuthTab(mode) {
  const loginTab = document.getElementById("authTabLogin");
  const registerTab = document.getElementById("authTabRegister");
  const loginForm = document.getElementById("authLoginForm");
  const registerForm = document.getElementById("authRegisterForm");

  if (mode === 'login') {
    if (loginTab) {
      loginTab.className = "flex-1 py-2.5 font-black text-xs border-b-2 border-emerald-600 text-emerald-800 bg-emerald-50/50";
    }
    if (registerTab) {
      registerTab.className = "flex-1 py-2.5 font-bold text-xs text-slate-500 hover:text-slate-800 border-b-2 border-transparent";
    }
    if (loginForm) loginForm.classList.remove("hidden");
    if (registerForm) registerForm.classList.add("hidden");
  } else {
    if (registerTab) {
      registerTab.className = "flex-1 py-2.5 font-black text-xs border-b-2 border-emerald-600 text-emerald-800 bg-emerald-50/50";
    }
    if (loginTab) {
      loginTab.className = "flex-1 py-2.5 font-bold text-xs text-slate-500 hover:text-slate-800 border-b-2 border-transparent";
    }
    if (registerForm) registerForm.classList.remove("hidden");
    if (loginForm) loginForm.classList.add("hidden");
  }
}

function sendDemoOtp() {
  const phoneInput = document.getElementById("loginPhone");
  const phone = phoneInput ? phoneInput.value.trim() : "";
  if (!phone || phone.length < 10) {
    alert(currentLang === 'hi' ? "कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।" : "Please enter a valid 10-digit mobile number.");
    return;
  }
  const otpInput = document.getElementById("loginOtp");
  if (otpInput) {
    otpInput.value = "4201";
    const otpNotice = document.getElementById("loginOtpNotice");
    if (otpNotice) {
      otpNotice.classList.remove("hidden");
      otpNotice.textContent = currentLang === 'hi' 
        ? "डेमो OTP: 4201 स्वतः भर दिया गया है!" 
        : "Demo OTP 4201 generated & autofilled!";
    }
  }
}

function handleFarmerLogin(e) {
  e.preventDefault();
  const phone = document.getElementById("loginPhone").value.trim();
  const otp = document.getElementById("loginOtp").value.trim();

  if (!phone || !otp) {
    alert("Please fill mobile number and OTP");
    return;
  }

  let profile = JSON.parse(localStorage.getItem("kisanq_farmer_" + phone) || "null");
  if (!profile) {
    profile = {
      name: "Kisan Bhai (" + phone.slice(-4) + ")",
      phone: phone,
      aadhaar: "XXXX-XXXX-" + phone.slice(-4),
      pmKisanId: "PMK-MP-" + phone.slice(-6),
      landSize: 1.4,
      crop: "wheat",
      vehicleNo: "MP04TR" + phone.slice(-4),
      vehicleType: "Tractor Trolley",
      bankAcc: "State Bank of India (DBT Linked)"
    };
  }

  applyFarmerProfile(profile);
  closeAuthModal();
  alert(currentLang === 'hi' ? `स्वागत है, ${profile.name}! आपकी किसान प्रोफाइल लोड हो गई है।` : `Welcome back, ${profile.name}! Profile loaded.`);
}

function handleFarmerRegister(e) {
  e.preventDefault();
  const name = document.getElementById("regFarmerName").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const aadhaar = document.getElementById("regAadhaar").value.trim();
  const landSize = parseFloat(document.getElementById("regLandSize").value) || 1.2;
  const crop = document.getElementById("regCrop").value;
  const vehicleNo = (document.getElementById("regVehicleNo").value.trim() || "MP04TR9090").toUpperCase();
  const vehicleType = document.getElementById("regVehicleType").value;
  const bankAcc = document.getElementById("regBankAcc").value.trim() || "Aadhaar Seeding Active";

  const profile = {
    name,
    phone,
    aadhaar: aadhaar || "8812-4412-9012",
    pmKisanId: "PMK-" + Math.floor(100000 + Math.random() * 900000),
    landSize,
    crop,
    vehicleNo,
    vehicleType,
    bankAcc
  };

  localStorage.setItem("kisanq_farmer_" + phone, JSON.stringify(profile));
  localStorage.setItem("kisanq_active_farmer", JSON.stringify(profile));

  // Persist to PostgreSQL backend
  fetch("/api/farmer/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profile)
  }).catch(e => console.warn("Farmer backend persist error:", e));

  applyFarmerProfile(profile);
  closeAuthModal();
  alert(currentLang === 'hi' 
    ? `बधाई हो ${profile.name}! आपका ई-नाम व किसान-Q पंजीकरण सफल रहा। स्लॉट बुकिंग फॉर्म स्वतः भर दिया गया है।` 
    : `Registration Successful for ${profile.name}! Booking form autofilled.`);
}

function applyFarmerProfile(profile, shouldSwitchTab = true) {
  currentFarmerProfile = profile;

  if (document.getElementById("farmerName")) document.getElementById("farmerName").value = profile.name;
  if (document.getElementById("phone")) document.getElementById("phone").value = profile.phone;
  if (document.getElementById("landSize")) {
    document.getElementById("landSize").value = profile.landSize;
    handleLandSizeChange(profile.landSize);
  }
  if (document.getElementById("cropSelect") && profile.crop) {
    document.getElementById("cropSelect").value = profile.crop;
  }
  if (document.getElementById("vehicleNo")) document.getElementById("vehicleNo").value = profile.vehicleNo;
  if (document.getElementById("vehicleType") && profile.vehicleType) {
    document.getElementById("vehicleType").value = profile.vehicleType;
  }

  const authContainer = document.getElementById("userAuthHeaderSection");
  if (authContainer) {
    authContainer.innerHTML = `
      <div class="flex items-center space-x-2.5 bg-emerald-950/90 border-2 border-amber-400/80 px-3.5 py-2 rounded-xl text-sm shadow-sm">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-amber-300 font-bold text-sm">${profile.name}</span>
        <span class="bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded text-xs">DBT ✅</span>
        <button onclick="logoutFarmer()" class="text-slate-300 hover:text-white underline text-xs ml-1 font-semibold">Log Out</button>
      </div>
    `;
  }

  if (shouldSwitchTab && typeof switchTab === 'function') {
    switchTab('farmer');
  }
}

function logoutFarmer() {
  localStorage.removeItem("kisanq_active_farmer");
  currentFarmerProfile = null;
  const authContainer = document.getElementById("userAuthHeaderSection");
  if (authContainer) {
    authContainer.innerHTML = `
      <button onclick="openAuthModal('login')" class="px-4 py-2 bg-emerald-900/90 hover:bg-emerald-700 text-amber-300 border-2 border-amber-400/60 font-bold rounded-xl text-sm flex items-center gap-1.5 shadow-sm transition hover:scale-[1.02]">
        <i data-lucide="log-in" class="w-4 h-4"></i> <span data-i18n="signInBtn">Farmer Sign In</span>
      </button>
      <button onclick="openAuthModal('register')" class="px-4 py-2 shimmer-btn text-slate-950 font-black rounded-xl text-sm flex items-center gap-1.5 shadow-md transition hover:scale-[1.03]">
        <i data-lucide="user-plus" class="w-4 h-4"></i> <span data-i18n="registerBtn">New Farmer Register</span>
      </button>
    `;
    if (window.lucide) window.lucide.createIcons();
    if (typeof setLanguage === 'function') setLanguage(currentLang);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("kisanq_active_farmer");
  if (saved) {
    try {
      applyFarmerProfile(JSON.parse(saved), false);
    } catch(e) {}
  }
});
