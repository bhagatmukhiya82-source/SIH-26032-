// Main Application Controller

const SECTION_THEMES = {
  preview: {
    themeClass: "header-theme-preview",
    title: "Mandi Preview",
    badge: "👁️ MANDI PREVIEW",
    badgeClass: "bg-amber-400/20 text-amber-300 border-amber-400/40"
  },
  farmer: {
    themeClass: "header-theme-farmer",
    title: "Farmer Portal",
    badge: "🌾 FARMER PORTAL",
    badgeClass: "bg-emerald-400/20 text-emerald-300 border-emerald-400/40"
  },
  ivr: {
    themeClass: "header-theme-ivr",
    title: "Zero-Smartphone IVR",
    badge: "📱 IVR & SMS ENGINE",
    badgeClass: "bg-cyan-400/20 text-cyan-300 border-cyan-400/40"
  },
  weather: {
    themeClass: "header-theme-weather",
    title: "IMD Weather Radar",
    badge: "🛰️ DOPPLER RADAR",
    badgeClass: "bg-cyan-400/20 text-cyan-300 border-cyan-400/40"
  },
  impact: {
    themeClass: "header-theme-impact",
    title: "Impact & Benefits",
    badge: "📊 IMPACT MATRIX",
    badgeClass: "bg-teal-400/20 text-teal-300 border-teal-400/40"
  },
  matrix: {
    themeClass: "header-theme-matrix",
    title: "APMC Standards & Resilience",
    badge: "🏛️ DEFCON RESILIENCE",
    badgeClass: "bg-red-500/20 text-red-300 border-red-500/40"
  },
  offers: {
    themeClass: "header-theme-offers",
    title: "Mandi Offers & Tenders",
    badge: "🎁 LIVE MSP OFFERS",
    badgeClass: "bg-orange-400/20 text-orange-300 border-orange-400/40"
  },
  timeline: {
    themeClass: "header-theme-timeline",
    title: "Price Timeline & Trends",
    badge: "📈 6-YEAR INTELLIGENCE",
    badgeClass: "bg-purple-400/20 text-purple-300 border-purple-400/40"
  },
  dashboard: {
    themeClass: "header-theme-matrix",
    title: "APMC Command Operator",
    badge: "⚙️ OPERATOR CONSOLE",
    badgeClass: "bg-slate-400/20 text-slate-300 border-slate-400/40"
  }
};

function switchTab(tabId) {
  // Hide all tab panels
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.add("hidden");
  });

  // Remove active styling from all nav tabs
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.classList.remove("active");
  });

  // Show selected panel
  const activePanel = document.getElementById(`panel-${tabId}`);
  if (activePanel) {
    activePanel.classList.remove("hidden");
  }

  // Highlight active nav tab
  const activeNav = document.getElementById(`tab-${tabId}`);
  if (activeNav) {
    activeNav.classList.add("active");
  }

  // Dynamically update section header color scheme
  const themeInfo = SECTION_THEMES[tabId] || SECTION_THEMES.preview;
  document.body.className = document.body.className.replace(/\bheader-theme-\w+/g, "").trim();
  document.body.classList.add(themeInfo.themeClass);

  const badgeEl = document.getElementById("headerSectionBadge");
  if (badgeEl) {
    badgeEl.textContent = themeInfo.badge;
    badgeEl.className = `inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-black tracking-wider uppercase border shadow-sm transition-all duration-300 ${themeInfo.badgeClass}`;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Trigger refresh if needed
  if (tabId === "dashboard") {
    loadDashboardTelemetry();
  } else if (tabId === "farmer") {
    loadSlots();
  } else if (tabId === "weather") {
    loadWeatherState(window.CURRENT_WEATHER_STATE || "Punjab");
  } else if (tabId === "offers") {
    loadMandiOffers();
    loadMandiNews();
  } else if (tabId === "impact") {
    initMandiSlider();
  } else if (tabId === "timeline") {
    if (typeof initTimelineCharts === "function") {
      setTimeout(initTimelineCharts, 80);
    }
  } else if (tabId === "preview") {
    initPreviewSlider();
  }

  // Re-translate dynamic content if a language is selected
  if (typeof translateFullPage === "function" && typeof currentLang !== "undefined" && currentLang !== "en") {
    setTimeout(() => {
      translateFullPage(currentLang);
    }, 120);
  }
}

// ── MANDI PREVIEW HERO SLIDER CONTROLLER ──
let currentPreviewSlide = 0;
let previewSliderTimer = null;

function initPreviewSlider() {
  updatePreviewSlideView();
  if (previewSliderTimer) clearInterval(previewSliderTimer);
  previewSliderTimer = setInterval(() => {
    changePreviewSlide(1);
  }, 4500);
}

function updatePreviewSlideView() {
  const slides = document.querySelectorAll(".preview-hero-slide");
  const dots = document.querySelectorAll(".preview-dot");
  if (!slides.length) return;

  slides.forEach((slide, idx) => {
    if (idx === currentPreviewSlide) {
      slide.classList.remove("opacity-0", "scale-105");
      slide.classList.add("opacity-100", "scale-100");
    } else {
      slide.classList.remove("opacity-100", "scale-100");
      slide.classList.add("opacity-0", "scale-105");
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === currentPreviewSlide) {
      dot.classList.remove("bg-white/50", "scale-100");
      dot.classList.add("bg-amber-400", "scale-125");
    } else {
      dot.classList.remove("bg-amber-400", "scale-125");
      dot.classList.add("bg-white/50", "scale-100");
    }
  });
}

function changePreviewSlide(dir) {
  const slides = document.querySelectorAll(".preview-hero-slide");
  if (!slides.length) return;
  currentPreviewSlide = (currentPreviewSlide + dir + slides.length) % slides.length;
  updatePreviewSlideView();
}

function goToPreviewSlide(idx) {
  currentPreviewSlide = idx;
  updatePreviewSlideView();
  if (previewSliderTimer) {
    clearInterval(previewSliderTimer);
    previewSliderTimer = setInterval(() => { changePreviewSlide(1); }, 4500);
  }
}

window.changePreviewSlide = changePreviewSlide;
window.goToPreviewSlide = goToPreviewSlide;
window.initPreviewSlider = initPreviewSlider;

// Update live clock
function updateClock() {
  const clock = document.getElementById("liveClock");
  if (clock) {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString("en-IN", { hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Start Clock
  setInterval(updateClock, 1000);
  updateClock();

  // Load initial datasets
  initPreviewSlider();
  loadSlots();
  loadDashboardTelemetry();
  loadNetworkInfo();
  initMandiSlider();
  loadMandiOffers();
  loadMandiNews();

  // Check URL hash or query param for direct tab navigation
  const hashTab = (window.location.hash || "").replace("#", "");
  const urlParams = new URLSearchParams(window.location.search);
  const urlTab = urlParams.get("tab");
  const urlState = urlParams.get("state");
  const initialTab = hashTab || urlTab;

  // Initialize weather state (respecting ?state= query param if present)
  const targetState = urlState || (typeof CURRENT_WEATHER_STATE !== "undefined" ? CURRENT_WEATHER_STATE : "Punjab");
  loadWeatherState(targetState);

  if (initialTab && document.getElementById(`panel-${initialTab}`)) {
    switchTab(initialTab);
  }

  // Periodic telemetry refresh
  setInterval(() => {
    loadDashboardTelemetry();
  }, 10000);
});

async function loadNetworkInfo() {
  try {
    const res = await fetch("/api/network");
    const data = await res.json();
    const modalUrl = document.getElementById("wifiModalUrl");
    if (modalUrl) {
      modalUrl.textContent = data.wifiUrl;
      modalUrl.href = data.wifiUrl;
    }
    const qrContainer = document.getElementById("wifiQrCode");
    if (qrContainer && window.QRCode) {
      qrContainer.innerHTML = "";
      new QRCode(qrContainer, {
        text: data.wifiUrl,
        width: 160,
        height: 160,
        colorDark: "#15803d",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  } catch (err) {
    console.error("Network info error:", err);
  }
}

function toggleWifiModal(show) {
  const modal = document.getElementById("wifiModal");
  if (!modal) return;
  if (show) modal.classList.remove("hidden");
  else modal.classList.add("hidden");
}

function openAppDownloadModal() {
  const modal = document.getElementById("appDownloadModal");
  if (modal) {
    modal.classList.remove("hidden");
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
    // Dynamically update direct URL & QR code with current LAN IP
    fetch("/api/network")
      .then((r) => r.json())
      .then((d) => {
        if (d && d.wifiIp) {
          const directUrlEl = document.getElementById("modalDirectUrl");
          if (directUrlEl) directUrlEl.textContent = `http://${d.wifiIp}:${d.port || 3000}/apk`;
          const qrImg = document.getElementById("modalQrCodeImg");
          if (qrImg) qrImg.src = `/api/qr-code.png?t=${Date.now()}`;
        }
      })
      .catch(() => {});
  }
}

function closeAppDownloadModal() {
  const modal = document.getElementById("appDownloadModal");
  if (modal) modal.classList.add("hidden");
}

// ================================================================
// PANORAMIC IMAGE SLIDER (With Smooth Slide Effect)
// ================================================================
let currentMandiSlide = 0;
const totalMandiSlides = 8;
let mandiSlideTimer = null;

function updateMandiSliderUI() {
  const track = document.getElementById("mandiCarouselTrack");
  const numDisplay = document.getElementById("currentSlideNum");
  const dotsContainer = document.getElementById("carouselDots");

  if (track) {
    track.style.transform = `translateX(-${currentMandiSlide * 100}%)`;
  }

  if (numDisplay) {
    numDisplay.textContent = currentMandiSlide + 1;
  }

  if (dotsContainer) {
    dotsContainer.querySelectorAll(".slide-dot").forEach((dot, idx) => {
      if (idx === currentMandiSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
}

function nextMandiSlide() {
  currentMandiSlide = (currentMandiSlide + 1) % totalMandiSlides;
  updateMandiSliderUI();
  resetMandiSlideTimer();
}

function prevMandiSlide() {
  currentMandiSlide = (currentMandiSlide - 1 + totalMandiSlides) % totalMandiSlides;
  updateMandiSliderUI();
  resetMandiSlideTimer();
}

function goToMandiSlide(idx) {
  currentMandiSlide = Math.max(0, Math.min(totalMandiSlides - 1, idx));
  updateMandiSliderUI();
  resetMandiSlideTimer();
}

function resetMandiSlideTimer() {
  if (mandiSlideTimer) clearInterval(mandiSlideTimer);
  mandiSlideTimer = setInterval(() => {
    nextMandiSlide();
  }, 4500);
}

function initMandiSlider() {
  const dotsContainer = document.getElementById("carouselDots");
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalMandiSlides; i++) {
      const dot = document.createElement("div");
      dot.className = `slide-dot ${i === 0 ? "active" : ""}`;
      dot.onclick = () => goToMandiSlide(i);
      dotsContainer.appendChild(dot);
    }
  }
  updateMandiSliderUI();
  resetMandiSlideTimer();
}

// ================================================================
// MANDI OFFERS ENGINE
// ================================================================
let allMandiOffers = [];
let currentOfferFilter = "all";

async function loadMandiOffers(filter = "all") {
  try {
    currentOfferFilter = filter;
    const res = await fetch("/api/mandi-offers");
    const data = await res.json();
    if (data.success && data.offers) {
      allMandiOffers = data.offers;
      renderMandiOffers();
    }
  } catch (err) {
    console.error("[OFFERS] Failed to load offers:", err);
  }
}

function filterMandiOffers(cat) {
  currentOfferFilter = cat;
  document.querySelectorAll(".offer-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-filter") === cat) {
      btn.className = "offer-filter-btn active px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-bold transition shadow";
    } else {
      btn.className = "offer-filter-btn px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition border border-slate-700";
    }
  });
  renderMandiOffers();
}

function renderMandiOffers() {
  const grid = document.getElementById("mandiOffersGrid");
  if (!grid) return;

  let filtered = allMandiOffers;
  if (currentOfferFilter === "wheat") {
    filtered = allMandiOffers.filter(o => o.commodity.toLowerCase().includes("wheat"));
  } else if (currentOfferFilter === "mustard") {
    filtered = allMandiOffers.filter(o => o.commodity.toLowerCase().includes("mustard"));
  } else if (currentOfferFilter === "cotton") {
    filtered = allMandiOffers.filter(o => o.commodity.toLowerCase().includes("cotton"));
  } else if (currentOfferFilter === "logistics") {
    filtered = allMandiOffers.filter(o => o.id.includes("TR") || o.commodity.toLowerCase().includes("bulk"));
  } else if (currentOfferFilter === "free") {
    filtered = allMandiOffers.filter(o => o.id.includes("SVC") || o.bonus.includes("FREE"));
  }

  grid.innerHTML = filtered.map(offer => {
    return `
      <div class="rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col group">
        <!-- Photo Container with Slide Effect -->
        <div class="relative h-48 overflow-hidden slide-img-container">
          <img src="${offer.img || '/images/mandi_entry_gate.jpg'}" alt="${offer.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30"></div>
          
          <div class="absolute top-3 left-3">
            <span class="px-2.5 py-1 bg-amber-400 text-slate-950 font-black text-[10px] rounded-lg shadow uppercase tracking-wide">
              ${offer.badge}
            </span>
          </div>

          <div class="absolute top-3 right-3 bg-slate-950/80 text-emerald-300 font-mono font-bold text-[10px] px-2 py-0.5 rounded-lg border border-slate-700 backdrop-blur">
            ${offer.slotsLeft} Quotas Left
          </div>

          <div class="absolute bottom-2.5 left-3 right-3 flex items-baseline justify-between text-white">
            <span class="font-bold text-xs truncate max-w-[65%]">${offer.commodity}</span>
            <span class="font-mono font-black text-amber-300 text-sm">${offer.bonus}</span>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-1.5">
            <h4 class="font-black text-slate-900 text-sm group-hover:text-emerald-700 transition">
              ${offer.title}
            </h4>
            <p class="text-[11px] text-slate-500 font-semibold">
              🏛️ ${offer.sponsor}
            </p>
            <p class="text-xs text-slate-600 leading-relaxed pt-1">
              ${offer.terms}
            </p>
          </div>

          <!-- Price & Deadline Bar -->
          <div class="pt-3 border-t border-slate-100 space-y-2.5">
            <div class="flex items-center justify-between text-xs">
              <span class="text-slate-500 font-medium">Effective Payout:</span>
              <span class="font-black text-emerald-700 font-mono text-sm">${offer.effectivePrice}</span>
            </div>
            
            <div class="flex items-center justify-between text-[11px] text-slate-400">
              <span>⏳ ${offer.deadline}</span>
              <span class="text-emerald-600 font-bold">100% PFMS DBT</span>
            </div>

            <button onclick="openClaimOfferModal('${offer.id}', '${offer.title.replace(/'/g, "\\'")}', '${offer.bonus}')" class="w-full py-2.5 px-3 shimmer-btn text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 shadow transition hover:scale-[1.02]">
              <i data-lucide="gift" class="w-3.5 h-3.5"></i>
              <span>Claim Offer &amp; Get SMS Pass</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Modal Handlers
function openClaimOfferModal(offerId, title, bonus) {
  document.getElementById("claimOfferId").value = offerId;
  document.getElementById("claimModalTitle").textContent = title;
  document.getElementById("claimModalBonus").textContent = bonus;
  document.getElementById("claimSuccessBox").classList.add("hidden");
  document.getElementById("claimOfferForm").classList.remove("hidden");
  document.getElementById("claimOfferModal").classList.remove("hidden");
  if (window.lucide) window.lucide.createIcons();
}

function closeClaimOfferModal() {
  document.getElementById("claimOfferModal").classList.add("hidden");
}

async function handleClaimOfferSubmit(event) {
  event.preventDefault();
  const offerId = document.getElementById("claimOfferId").value;
  const farmerName = document.getElementById("claimFarmerName").value;
  const phone = document.getElementById("claimFarmerPhone").value;
  const quantity = document.getElementById("claimQuantity").value;
  const submitBtn = document.getElementById("claimSubmitBtn");

  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span class="animate-spin mr-1">⏳</span> Dispatching via Fast2SMS...`;

  try {
    const res = await fetch("/api/mandi-offers/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ offerId, farmerName, phone, quantity })
    });
    const result = await res.json();

    submitBtn.disabled = false;
    submitBtn.innerHTML = `<i data-lucide="send" class="w-4 h-4"></i><span>Reserve Offer &amp; Send Fast2SMS Gate Pass</span>`;

    if (result.success) {
      document.getElementById("claimOfferForm").classList.add("hidden");
      const successBox = document.getElementById("claimSuccessBox");
      successBox.classList.remove("hidden");
      document.getElementById("claimSuccessMsg").textContent = result.message;
      document.getElementById("claimSuccessToken").textContent = `Token: ${result.claim.claimCode} • Fast2SMS Sent to ${phone}`;
      
      // Refresh offers quota
      loadMandiOffers(currentOfferFilter);
      if (window.lucide) window.lucide.createIcons();
    } else {
      alert("Error claiming offer: " + (result.error || "Unknown error"));
    }
  } catch (err) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<span>Try Again</span>`;
    alert("Network error: " + err.message);
  }
}

// ================================================================
// LIVE AGRICULTURAL NEWS (NewsAPI Integration)
// ================================================================
async function loadMandiNews() {
  const container = document.getElementById("mandiNewsFeed");
  if (!container) return;

  try {
    const res = await fetch("/api/news");
    const data = await res.json();
    if (data.success && data.articles && data.articles.length > 0) {
      container.innerHTML = data.articles.slice(0, 4).map(art => {
        return `
          <a href="${art.url}" target="_blank" class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition bg-slate-50 flex flex-col group p-3.5 space-y-2 hover:border-emerald-500">
            <div class="h-32 w-full rounded-xl overflow-hidden relative slide-img-container">
              <img src="${art.urlToImage || '/images/mandi_entry_gate.jpg'}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
              <span class="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[9px] font-bold px-2 py-0.5 rounded backdrop-blur">
                ${art.source}
              </span>
            </div>
            <h5 class="font-bold text-xs text-slate-900 group-hover:text-emerald-700 transition line-clamp-2 leading-snug">
              ${art.title}
            </h5>
            <p class="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
              ${art.description}
            </p>
            <span class="text-[10px] text-emerald-700 font-bold block pt-1 mt-auto">
              Read Full Report →
            </span>
          </a>
        `;
      }).join("");

      if (window.lucide) window.lucide.createIcons();
    }
  } catch (err) {
    console.warn("[NEWS] Could not load news:", err);
  }
}


