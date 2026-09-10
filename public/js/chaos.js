// Chaos Simulation & Operational Resilience Engine (KISAN-Q Resilience #2 & #3)
let chaosState = {
  gateBreakdown: false,
  cloudOutage: false,
  humanDelayBufferMins: 0,
  divertedTractorsCount: 0
};

let chaosAudioEnabled = true;

// Emergency Synthesizer for High-Alert Audio Beacons
function playEmergencyAlarmSound(isDanger = true) {
  if (!chaosAudioEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    if (isDanger) {
      // Urgent siren warble
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(920, now);
      osc.frequency.exponentialRampToValueAtTime(460, now + 0.22);
      osc.frequency.exponentialRampToValueAtTime(920, now + 0.44);
      osc.frequency.exponentialRampToValueAtTime(460, now + 0.66);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.75);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.75);
    } else {
      // Resolution chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.25);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    }
  } catch (e) {
    console.warn("Audio synthesis error:", e);
  }
}

function toggleChaosSound() {
  chaosAudioEnabled = !chaosAudioEnabled;
  const soundBtn = document.getElementById("chaosSoundToggleBtn");
  if (soundBtn) {
    if (chaosAudioEnabled) {
      soundBtn.className = "px-2.5 py-2 bg-slate-800 text-slate-200 border border-emerald-500/50 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow hover:bg-slate-700 transition";
      soundBtn.innerHTML = `<i data-lucide="volume-2" class="w-3.5 h-3.5 text-emerald-400"></i><span class="text-xs">Audio: ON</span>`;
      playEmergencyAlarmSound(false);
    } else {
      soundBtn.className = "px-2.5 py-2 bg-slate-900 text-slate-400 border border-red-500/40 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow hover:bg-slate-800 transition";
      soundBtn.innerHTML = `<i data-lucide="volume-x" class="w-3.5 h-3.5 text-red-400"></i><span class="text-xs">Audio: MUTED</span>`;
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

async function fetchChaosState() {
  try {
    const res = await fetch("/api/chaos");
    const data = await res.json();
    chaosState = data;
    updateChaosUI();
  } catch (e) {
    console.error("Chaos fetch error:", e);
  }
}

// Distinctive Alert Hazard Symbol Generator
function getAlertSymbolSVG(size = 24) {
  return `<svg class="chaos-danger-symbol-svg" style="width:${size}px;height:${size}px;" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="17" stroke="#ef4444" stroke-width="1" stroke-dasharray="3 3" opacity="0.65" class="chaos-spin-slow"/>
    <polygon points="12,3 24,3 33,12 33,24 24,33 12,33 3,24 3,12" fill="#1c0305" stroke="#facc15" stroke-width="2.2" stroke-linejoin="round"/>
    <polygon points="13,5.5 23,5.5 30.5,13 30.5,23 23,30.5 13,30.5 5.5,23 5.5,13" stroke="#ef4444" stroke-width="1.2" opacity="0.85"/>
    <path d="M19.5 8 L13 18.5 H19 L16.5 28 L24 16.5 H18 L21 8 Z" fill="#facc15" stroke="#fff" stroke-width="0.75" stroke-linejoin="round"/>
    <circle cx="8" cy="18" r="1.5" fill="#ef4444"/>
    <circle cx="28" cy="18" r="1.5" fill="#ef4444"/>
    <circle cx="18" cy="8" r="1.2" fill="#facc15"/>
  </svg>`;
}

// Floating Alert Management
function dismissFloatingAlert(e) {
  if (e) e.stopPropagation();
  const alertEl = document.getElementById("chaosFloatingAlert");
  const miniPill = document.getElementById("chaosAlertMiniPill");
  if (alertEl) alertEl.classList.add("dismissed");
  if (miniPill) miniPill.classList.remove("hidden");
}

function restoreFloatingAlert() {
  const alertEl = document.getElementById("chaosFloatingAlert");
  const miniPill = document.getElementById("chaosAlertMiniPill");
  if (alertEl) alertEl.classList.remove("dismissed");
  if (miniPill) miniPill.classList.add("hidden");
}

function toggleFloatingAlert() {
  const alertEl = document.getElementById("chaosFloatingAlert");
  if (!alertEl) return;
  if (alertEl.classList.contains("dismissed")) {
    restoreFloatingAlert();
  } else {
    dismissFloatingAlert();
  }
}

function scrollToChaosConsole() {
  const card = document.getElementById("chaosConsoleCard");
  if (card) {
    if (typeof switchTab === "function") {
      switchTab("matrix");
    }
    setTimeout(() => {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("ring-4", "ring-red-500");
      setTimeout(() => card.classList.remove("ring-4", "ring-red-500"), 2000);
    }, 100);
  }
}

function handleFloatingAlertAction() {
  if (chaosState.gateBreakdown) {
    triggerChaosBreakdown();
  } else if (chaosState.cloudOutage) {
    triggerCloudOutage();
  } else {
    // In normal state, allow instant crisis drill simulation
    triggerChaosBreakdown();
  }
}

function updateFloatingAlert() {
  const alertEl = document.getElementById("chaosFloatingAlert");
  const alertFab = document.getElementById("chaosAlertFab");
  const alertFabBadge = document.getElementById("chaosAlertFabBadge");
  const symbolWrap = document.getElementById("chaosFloatingSymbolWrap");
  const miniPill = document.getElementById("chaosAlertMiniPill");
  const titleEl = document.getElementById("chaosFloatingTitle");
  const subEl = document.getElementById("chaosFloatingSub");
  const badgeEl = document.getElementById("chaosFloatingBadge");
  const actionBtn = document.getElementById("chaosFloatingActionBtn");
  const metricEl = document.getElementById("chaosFloatingMetric");

  const isEmergency = chaosState.gateBreakdown || chaosState.cloudOutage;

  // Update Floating Alert FAB button directly above chatbot
  if (alertFab) {
    if (isEmergency) {
      alertFab.classList.add("crisis-active");
      if (alertFabBadge) {
        alertFabBadge.textContent = "!";
        alertFabBadge.style.background = "#ff003c";
        alertFabBadge.style.color = "#fff";
      }
    } else {
      alertFab.classList.remove("crisis-active");
      if (alertFabBadge) {
        alertFabBadge.textContent = "!";
        alertFabBadge.style.background = "#facc15";
        alertFabBadge.style.color = "#000";
      }
    }
    const iconContainer = alertFab.querySelector(".fab-icon-holder");
    if (iconContainer && !iconContainer.innerHTML.trim()) {
      iconContainer.innerHTML = getAlertSymbolSVG(30);
    }
  }

  // Update Symbol in notification card header
  if (symbolWrap) {
    symbolWrap.innerHTML = getAlertSymbolSVG(26);
  }

  if (!alertEl) return;

  if (isEmergency) {
    // If an emergency just started, always show the alert (undismiss)
    alertEl.classList.remove("dismissed");
    alertEl.classList.add("alert-active");
    if (miniPill) miniPill.classList.add("hidden");

    if (chaosState.gateBreakdown) {
      if (titleEl) titleEl.textContent = "DEFCON-1: GATE 1 AXLE BREAKDOWN!";
      if (subEl) subEl.textContent = "Multi-Gate Incident Compensator Rerouting Live Traffic";
      if (badgeEl) {
        badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-600 text-white animate-pulse flex items-center gap-1.5";
        badgeEl.innerHTML = `<span>${getAlertSymbolSVG(14)}</span><span>HIGH SEVERITY</span>`;
      }
      if (metricEl) {
        metricEl.innerHTML = `<span class="text-amber-400 font-black">18 Tractors Rerouted</span> to Gate 2 • <span class="text-red-300 font-bold">+15m Buffer</span>`;
      }
      if (actionBtn) {
        actionBtn.className = "w-full py-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-black rounded-xl shadow-lg border border-red-300 flex items-center justify-center gap-1.5 transition transform hover:scale-[1.02] cursor-pointer";
        actionBtn.innerHTML = `<span>Clear Obstruction & Reopen Gate 1</span>`;
      }
    } else if (chaosState.cloudOutage) {
      if (titleEl) titleEl.textContent = "DEFCON-1: CENTRAL CLOUD OUTAGE (503)";
      if (subEl) subEl.textContent = "e-NAM & Aadhaar KYC Unreachable • Zero Gate Halt";
      if (badgeEl) {
        badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-purple-600 text-white animate-pulse flex items-center gap-1.5";
        badgeEl.innerHTML = `<span>${getAlertSymbolSVG(14)}</span><span>OFFLINE OVERRIDE</span>`;
      }
      if (metricEl) {
        metricEl.innerHTML = `<span class="text-purple-300 font-black">Local SHA-256 HMAC</span> Provisional Passes Active`;
      }
      if (actionBtn) {
        actionBtn.className = "w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-black rounded-xl shadow-lg border border-purple-300 flex items-center justify-center gap-1.5 transition transform hover:scale-[1.02] cursor-pointer";
        actionBtn.innerHTML = `<span>Restore State Cloud & Sync Records</span>`;
      }
    }
  } else {
    // Normal vigilance state
    alertEl.classList.remove("alert-active");
    if (titleEl) titleEl.textContent = "MANDI RESILIENCE ENGINE: READY";
    if (subEl) subEl.textContent = "High-Traffic Vigilance & Physical Jam Mitigation Active";
    if (badgeEl) {
      badgeEl.className = "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-700/80 text-emerald-200 flex items-center gap-1.5";
      badgeEl.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span><span>MONITORING</span>`;
    }
    if (metricEl) {
      metricEl.innerHTML = `Gate 1: <span class="text-emerald-400 font-bold">50 Tr/h</span> • Cloud: <span class="text-emerald-400 font-bold">Online</span>`;
    }
    if (actionBtn) {
      actionBtn.className = "w-full py-2 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-slate-950 text-xs font-black rounded-xl shadow-lg border border-amber-300 flex items-center justify-center gap-1.5 transition transform hover:scale-[1.02] cursor-pointer";
      actionBtn.innerHTML = `<span>Test Gate 1 Breakdown Simulation</span>`;
    }
  }

  if (miniPill) {
    if (isEmergency) {
      miniPill.innerHTML = `<span>${getAlertSymbolSVG(16)}</span><span>ALERT: CRISIS ACTIVE</span>`;
    } else {
      miniPill.innerHTML = `<span>${getAlertSymbolSVG(14)}</span><span>Resilience Monitor</span>`;
    }
  }

  if (window.lucide) window.lucide.createIcons();
}

function updateChaosUI() {
  const breakdownBanner = document.getElementById("chaosBreakdownBanner");
  const cloudOutageBanner = document.getElementById("chaosCloudOutageBanner");
  const chaosBtn = document.getElementById("chaosBreakdownBtn");
  const outageBtn = document.getElementById("chaosCloudOutageBtn");
  const gatePill = document.getElementById("chaosGateStatusPill");
  const cloudPill = document.getElementById("chaosCloudStatusPill");

  // Gate breakdown state
  if (chaosState.gateBreakdown) {
    if (breakdownBanner) breakdownBanner.classList.remove("hidden");
    if (chaosBtn) {
      chaosBtn.className = "px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black shadow-xl border-2 border-red-200 animate-pulse flex items-center space-x-2";
      chaosBtn.innerHTML = `<i data-lucide="alert-octagon" class="w-4 h-4 text-amber-300"></i><span>🚨 Gate 1 Blocked! Click to Clear Obstruction</span>`;
    }
    if (gatePill) {
      gatePill.className = "px-2.5 py-1 bg-red-950 text-red-300 rounded-lg border-2 border-red-500 font-black flex items-center space-x-1.5 animate-pulse";
      gatePill.innerHTML = `<span class="w-2 h-2 rounded-full bg-red-500"></span><span>Gate 1: BLOCKED (0 Tr/h) → Gate 2 +15m</span>`;
    }
  } else {
    if (breakdownBanner) breakdownBanner.classList.add("hidden");
    if (chaosBtn) {
      chaosBtn.className = "px-4 py-2.5 chaos-btn-danger rounded-xl text-xs font-black shadow-lg flex items-center space-x-2 transition hover:scale-105";
      chaosBtn.innerHTML = `<i data-lucide="alert-triangle" class="w-4 h-4 text-amber-300"></i><span data-i18n="simBreakdownBtn">Simulate 10-Wheeler Breakdown at Gate 1</span>`;
    }
    if (gatePill) {
      gatePill.className = "px-2.5 py-1 bg-emerald-950/80 text-emerald-300 rounded-lg border border-emerald-700 font-bold flex items-center space-x-1.5";
      gatePill.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span><span>Gate 1: Optimal (50 Tr/h)</span>`;
    }
  }

  // Cloud outage state
  if (chaosState.cloudOutage) {
    if (cloudOutageBanner) cloudOutageBanner.classList.remove("hidden");
    if (outageBtn) {
      outageBtn.className = "px-4 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-black shadow-xl border-2 border-purple-200 animate-pulse flex items-center space-x-2";
      outageBtn.innerHTML = `<i data-lucide="shield-alert" class="w-4 h-4 text-amber-300"></i><span>🔐 Offline Override Active! Reconnect Cloud</span>`;
    }
    if (cloudPill) {
      cloudPill.className = "px-2.5 py-1 bg-purple-950 text-purple-200 rounded-lg border-2 border-purple-400 font-black flex items-center space-x-1.5 animate-pulse";
      cloudPill.innerHTML = `<span class="w-2 h-2 rounded-full bg-purple-400"></span><span>Cloud: OFFLINE (SHA-256 HMAC Active)</span>`;
    }
  } else {
    if (cloudOutageBanner) cloudOutageBanner.classList.add("hidden");
    if (outageBtn) {
      outageBtn.className = "px-4 py-2.5 chaos-btn-cloud rounded-xl text-xs font-black shadow-lg flex items-center space-x-2 transition hover:scale-105";
      outageBtn.innerHTML = `<i data-lucide="cloud-off" class="w-4 h-4 text-purple-200"></i><span data-i18n="simCloudBtn">Simulate State Cloud Server Outage</span>`;
    }
    if (cloudPill) {
      cloudPill.className = "px-2.5 py-1 bg-emerald-950/80 text-emerald-300 rounded-lg border border-emerald-700 font-bold flex items-center space-x-1.5";
      cloudPill.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span><span>State Cloud: Online (0ms)</span>`;
    }
  }

  updateFloatingAlert();

  if (window.lucide) window.lucide.createIcons();
  if (typeof setLanguage === "function" && typeof currentLang !== "undefined") {
    setLanguage(currentLang);
  }
}

async function triggerChaosBreakdown() {
  try {
    const res = await fetch("/api/chaos/toggle-gate-breakdown", { method: "POST" });
    const data = await res.json();
    chaosState = data.chaosState;
    updateChaosUI();
    if (typeof loadDashboardTelemetry === "function") loadDashboardTelemetry();
    if (typeof loadSlots === "function") loadSlots();

    if (chaosState.gateBreakdown) {
      playEmergencyAlarmSound(true);
      if ("speechSynthesis" in window) {
        const u = new SpeechSynthesisUtterance("Emergency alert. 10 wheeler breakdown at Gate 1. Dynamic chaos compensation engaged. Diverting 18 incoming tractors to Gate 2 with 15 minute delay buffer.");
        u.rate = 1.0;
        window.speechSynthesis.speak(u);
      }
    } else {
      playEmergencyAlarmSound(false);
    }
  } catch (e) {
    alert("Chaos trigger error: " + e.message);
  }
}

async function triggerCloudOutage() {
  try {
    const res = await fetch("/api/chaos/toggle-cloud-outage", { method: "POST" });
    const data = await res.json();
    chaosState = data.chaosState;
    updateChaosUI();

    if (chaosState.cloudOutage) {
      playEmergencyAlarmSound(true);
      if ("speechSynthesis" in window) {
        const u = new SpeechSynthesisUtterance("State identity server outage detected. Cryptographic offline override engaged. Local SHA-256 HMAC provisional passes active. Zero gate halt.");
        u.rate = 1.0;
        window.speechSynthesis.speak(u);
      }
    } else {
      playEmergencyAlarmSound(false);
    }
  } catch (e) {
    alert("Outage trigger error: " + e.message);
  }
}

// Attach globally
window.triggerChaosBreakdown = triggerChaosBreakdown;
window.triggerCloudOutage = triggerCloudOutage;
window.toggleChaosSound = toggleChaosSound;
window.dismissFloatingAlert = dismissFloatingAlert;
window.restoreFloatingAlert = restoreFloatingAlert;
window.toggleFloatingAlert = toggleFloatingAlert;
window.getAlertSymbolSVG = getAlertSymbolSVG;
window.handleFloatingAlertAction = handleFloatingAlertAction;
window.scrollToChaosConsole = scrollToChaosConsole;

document.addEventListener("DOMContentLoaded", () => {
  fetchChaosState();
  if (window.location.hash === "#chaosConsoleCard") {
    setTimeout(scrollToChaosConsole, 250);
  }
});
