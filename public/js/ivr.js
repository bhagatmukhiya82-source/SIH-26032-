// Zero-Smartphone Access (Keypad IVR Simulator)
let dialedNumber = "";
let callState = "IDLE"; // IDLE, DIALING, CONNECTED, INCOMING, COMPLETED
let ivrStep = 0;
let ivrLang = "hi";
let currentIVRToken = null;

// Simple Web Audio API DTMF beep tone generator
function playDTMF(freq1 = 697, freq2 = 1209) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc1.frequency.value = freq1;
    osc2.frequency.value = freq2;
    gain.gain.value = 0.1;

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(audioCtx.destination);

    osc1.start();
    osc2.start();

    setTimeout(() => {
      osc1.stop();
      osc2.stop();
      audioCtx.close();
    }, 120);
  } catch (e) {
    // AudioContext may be restricted before user gesture
  }
}

let cachedVoices = [];
if ("speechSynthesis" in window) {
  cachedVoices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

function speakVoice(text, targetLang = "hi-IN") {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.92;
  utter.pitch = 1.0;

  const voices = cachedVoices.length ? cachedVoices : window.speechSynthesis.getVoices();

  const code = (targetLang || "hi").slice(0, 2);
  const langTagMap = {
    hi: "hi-IN",
    pa: "pa-IN",
    mr: "mr-IN",
    gu: "gu-IN",
    bn: "bn-IN",
    te: "te-IN",
    ta: "ta-IN",
    kn: "kn-IN",
    en: "en-IN"
  };
  utter.lang = langTagMap[code] || "hi-IN";

  let selectedVoice = voices.find(v => v.lang === utter.lang || v.lang.startsWith(code));
  if (!selectedVoice && code !== "en") {
    selectedVoice = voices.find(v => v.lang.startsWith("hi") || v.lang.startsWith("en"));
  }
  if (selectedVoice) {
    utter.voice = selectedVoice;
  }

  window.speechSynthesis.speak(utter);
}

function pressKey(val) {
  playDTMF();
  if (callState === "CONNECTED") {
    handleIVRInput(val);
    return;
  }

  if (dialedNumber.length < 15) {
    dialedNumber += val;
    updatePhoneDisplay(dialedNumber);
  }
}

function clearKey() {
  playDTMF(440, 440);
  if (dialedNumber.length > 0) {
    dialedNumber = dialedNumber.slice(0, -1);
    updatePhoneDisplay(dialedNumber || "READY");
  }
}

function updatePhoneDisplay(text, subtext = "") {
  const display = document.getElementById("phoneLcdText");
  const sub = document.getElementById("phoneLcdSub");
  if (display) display.textContent = text;
  if (sub) sub.textContent = subtext;
}

function quickFillTollFree() {
  dialedNumber = "18005472600";
  updatePhoneDisplay("1800-547-2600", "KISAN-Q TOLL-FREE");
}

async function startCall() {
  if (!dialedNumber) {
    quickFillTollFree();
  }

  callState = "DIALING";
  updatePhoneDisplay("DIALING...", dialedNumber);

  setTimeout(async () => {
    // Simulate Missed Call Protocol or Direct IVR
    updatePhoneDisplay("CALL DROPPED", "MISSED CALL DETECTED");
    await new Promise(r => setTimeout(r, 900));

    updatePhoneDisplay("INCOMING CALL", "MANDI IVR BOT");
    callState = "INCOMING";

    // Auto answer after ring
    setTimeout(() => {
      answerCall();
    }, 1200);
  }, 1500);
}

async function triggerMissedCallOnly() {
  const phone = "98260" + Math.floor(10000 + Math.random() * 90000);
  updatePhoneDisplay("CALLING 1800...", "GIVING MISSED CALL");

  try {
    const res = await fetch("/api/ivr/missed-call", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ callerPhone: phone, language: ivrLang })
    });
    const data = await res.json();

    setTimeout(() => {
      updatePhoneDisplay("CALL DISCONNECTED", "1 RING REGISTERED");
      setTimeout(() => {
        displaySMSReceived(data.smsMessage);
        speakVoice(data.voiceScript, ivrLang === "hi" ? "hi-IN" : (ivrLang === "pa" ? "pa-IN" : "en-IN"));
        updatePhoneDisplay("SMS RECEIVED ✉️", `TOKEN #${data.token.tokenNumber}`);
        loadSlots();
        loadDashboardTelemetry();
      }, 1500);
    }, 1200);
  } catch (err) {
    updatePhoneDisplay("ERROR", err.message);
  }
}

function answerCall() {
  callState = "CONNECTED";
  ivrStep = 1;
  updatePhoneDisplay("CALL CONNECTED", "00:01 - IVR ACTIVE");

  const prompts = {
    hi: "नमस्कार किसान भाई! किसान-क्यू मंडी स्लॉट बुकिंग सेवा में आपका स्वागत है। नया टोकन लेने के लिए 1 दबाएं। मौजूदा टोकन की स्थिति जानने के लिए 2 दबाएं।",
    pa: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ! ਕਿਸਾਨ-ਕਿਊ ਮੰਡੀ ਸਲਾਟ ਬੁਕਿੰਗ ਸੇਵਾ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ। ਨਵਾਂ ਟੋਕਨ ਲੈਣ ਲਈ 1 ਦਬਾਓ। ਟੋਕਨ ਦੀ ਸਥਿਤੀ ਜਾਣਨ ਲਈ 2 ਦਬਾਓ।",
    mr: "नमस्कार शेतकरी बंधूंनो! किसान-क्यू मंडी स्लॉट बुकिंग सेवेत आपले स्वागत आहे. नवीन टोकनसाठी 1 दाबा. टोकन स्थितीसाठी 2 दाबा.",
    gu: "નમસ્તે ખેડૂત મિત્ર! કિસાન-Q માર્કેટ યાર્ડ સ્लोટ બુકિંગ સેવામાં સ્વાગત છે. નવો ટોકન લેવા 1 દબાવો. ટોકન સ્થિતિ માટે 2 દબાવો.",
    bn: "নমস্কার কৃষক বন্ধু! কিষাণ-Q মান্ডি স্লট বুকিং সেবায় স্বাগতম। নতুন টোকেনের জন্য ১ টিপুন। টোকেন জানতে ২ টিপুন।",
    te: "నమస్కారం రైతు సోదరులారా! కిసాన్-Q మార్కెట్ స్లాట్ బుకింగ్ సేవలకు స్వాగతం. కొత్త టోకెన్ కోసం 1 నొక్కండి. స్థితి కోసం 2 నొక్కండి.",
    ta: "வணக்கம் உழவர் தோழரே! கிசான்-Q மண்டி முன்பதிவு சேவைக்கு நல்வரவு. புதிய டோக்கனுக்கு 1 அழுத்தவும். நிலைக்கு 2 அழுத்தவும்.",
    kn: "ನಮಸ್ಕಾರ ರೈತ ಬಾಂಧವರೇ! ಕಿಸಾನ್-Q ಮಾರುಕಟ್ಟೆ ಸ್ಲಾಟ್ ಬುಕಿಂಗ್ ಸೇವೆಗೆ ಸ್ವಾಗತ. ಹೊಸ ಟೋಕನ್‌ಗೆ 1 ಒತ್ತಿ. ಸ್ಥಿತಿಗಾಗಿ 2 ಒತ್ತಿ.",
    en: "Welcome to Kisan-Q automated toll-free mandi system. Press 1 for new slot booking. Press 2 for token status."
  };
  const prompt = prompts[ivrLang] || prompts.en;

  speakVoice(prompt, ivrLang);
  updatePhoneDisplay("PRESS 1: BOOK", "PRESS 2: STATUS");
}

async function handleIVRInput(digit) {
  if (ivrStep === 1) {
    if (digit === "1") {
      // Book Slot
      updatePhoneDisplay("PROCESSING...", "BOOKING SLOT");
      const phone = "9826" + Math.floor(100000 + Math.random() * 900000);
      const res = await fetch("/api/ivr/missed-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callerPhone: phone, language: ivrLang })
      });
      const data = await res.json();
      currentIVRToken = data.token;

      updatePhoneDisplay(`TOKEN #${data.token.tokenNumber}`, `${data.token.slot}`);
      speakVoice(data.voiceScript, ivrLang === "hi" ? "hi-IN" : (ivrLang === "pa" ? "pa-IN" : "en-IN"));
      displaySMSReceived(data.smsMessage);
      ivrStep = 2;
      loadSlots();
      loadDashboardTelemetry();
    } else if (digit === "2") {
      // Check status
      updatePhoneDisplay("FETCHING...", "ACTIVE TOKENS");
      const res = await fetch("/api/token/42");
      const data = await res.json();
      const speech = ivrLang === "hi"
        ? "आपका टोकन नंबर 42 सक्रिय है। गेट 2 पर समय 10 बजे पहुंचें। आपसे आगे केवल 1 ट्रैक्टर है। धन्यवाद!"
        : ivrLang === "pa"
        ? "ਤੁਹਾਡਾ ਟੋਕਨ ਨੰਬਰ 42 ਚੱਲ ਰਿਹਾ ਹੈ। ਗੇਟ 2 'ਤੇ ਸਮਾਂ 10 ਵਜੇ ਆਓ। ਤੁਹਾਡੇ ਤੋਂ ਅੱਗੇ ਕੇਵਲ 1 ਟਰੈਕਟਰ ਹੈ। ਧੰਨਵਾਦ!"
        : "Your Token #42 is active. Arrive at Gate 2 by 10:00 AM. 1 vehicle ahead of you.";
      speakVoice(speech, ivrLang === "hi" ? "hi-IN" : (ivrLang === "pa" ? "pa-IN" : "en-IN"));
      updatePhoneDisplay("TOKEN #42", "AHEAD: 1 TRACTOR");
      ivrStep = 2;
    }
  } else {
    // Hangup
    hangupCall();
  }
}

function hangupCall() {
  playDTMF(440, 350);
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  callState = "IDLE";
  dialedNumber = "";
  updatePhoneDisplay("CALL ENDED", "KISAN-Q READY");
}

function displaySMSReceived(sms) {
  const smsBox = document.getElementById("phoneSmsBox");
  const smsText = document.getElementById("phoneSmsContent");
  if (smsBox && smsText) {
    smsText.textContent = sms;
    smsBox.classList.remove("hidden");
    smsBox.classList.add("animate-bounce");
    setTimeout(() => smsBox.classList.remove("animate-bounce"), 1500);
  }
}

function setIVRLanguage(lang) {
  ivrLang = lang;
  document.querySelectorAll(".ivr-lang-btn").forEach(b => {
    if (b.getAttribute("data-ivrlang") === lang) {
      b.classList.add("bg-emerald-600", "text-white");
      b.classList.remove("bg-slate-200", "text-slate-800");
    } else {
      b.classList.remove("bg-emerald-600", "text-white");
      b.classList.add("bg-slate-200", "text-slate-800");
    }
  });
}
