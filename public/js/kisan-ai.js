/**
 * 🌾 KISAN-Q AI Voice Assistant ("Kisan Sahayak / कृषि मित्र")
 * Interactive Bilingual (Hindi & English) Voice Chat for Farmers & Mandi Officers
 */

(function () {
  const KNOWLEDGE = [
    {
      keywords: ['msp', 'bhav', 'rate', 'price', 'wheat', 'gehu', 'गेहूं', 'भाव', 'दाम', 'एमएसपी'],
      replyHi: 'वर्ष 2025-26 के लिए गेहूं का सरकारी न्यूनतम समर्थन मूल्य (MSP) ₹2,275 प्रति क्विंटल है, जो पिछले वर्ष से ₹150 अधिक है। खन्ना मंडी में वर्तमान में गेहूं की पूरी खरीद इसी दर पर हो रही है।',
      replyEn: 'The official Minimum Support Price (MSP) for Wheat for 2025-26 is ₹2,275 per quintal (₹150 higher than last year). Full payment is guaranteed through e-NAM direct bank transfer.'
    },
    {
      keywords: ['paddy', 'dhan', 'chawal', 'rice', 'धान', 'चावल'],
      replyHi: 'धान (Paddy) का सरकारी समर्थन मूल्य (MSP) ₹2,300 प्रति क्विंटल है। ग्रेड-A धान का मूल्य ₹2,320 प्रति क्विंटल है।',
      replyEn: 'The government MSP for common Paddy is ₹2,300 per quintal, and ₹2,320 per quintal for Grade-A paddy.'
    },
    {
      keywords: ['mustard', 'sarso', 'sarson', 'सरसों'],
      replyHi: 'सरसों (Mustard) का सरकारी एमएसपी ₹5,650 प्रति क्विंटल निर्धारित है। गुणवत्ता जांच में तेल की मात्रा न्यूनतम 38% होनी चाहिए।',
      replyEn: 'The MSP for Mustard is ₹5,650 per quintal. Minimum oil content required in assaying is 38%.'
    },
    {
      keywords: ['moisture', 'nami', 'reject', 'pass', 'गीला', 'नमी', 'रिजेक्ट', 'पास'],
      replyHi: 'मंडी के नियमानुसार: 12% तक नमी होने पर पूरा 100% MSP मिलता है। 12% से 14% नमी होने पर नाममात्र कटौती (Dockage) होती है। 14% से अधिक नमी होने पर दाना रिजेक्ट हो सकता है। कृपया ट्रॉली लाने से पहले अनाज को 4 घंटे धूप में सुखा लें।',
      replyEn: 'Mandi Moisture Guidelines: Up to 12% moisture receives 100% full MSP. Between 12%-14% attracts minor dockage deduction. Over 14% moisture risks rejection. We recommend sun-drying for 4 hours before arriving.'
    },
    {
      keywords: ['book', 'slot', 'token', 'pass', 'स्लॉट', 'बुक', 'टोकन', 'गेट पास', 'पंजीकरण'],
      replyHi: 'आप KISAN-Q में सीधे डिजिटल स्लॉट बुक कर सकते हैं! छोटे और सीमांत किसानों (2 हेक्टेयर से कम) के लिए 60% स्लॉट सुरक्षित हैं। फार्मर पोर्टल टैब पर जाएं।',
      replyEn: 'You can book your digital mandi slot right now! 60% of hourly capacity is reserved for marginal farmers under 2 hectares.',
      actionTab: 'farmer'
    },
    {
      keywords: ['queue', 'wait', 'time', 'bheed', 'katare', 'कतार', 'भीड़', 'समय', 'इंतजार', 'नंबर'],
      replyHi: 'वर्तमान में मंडी में औसत प्रतीक्षा समय 15 मिनट है। 4 ट्रॉलियां कतार में हैं। KISAN-Q के स्टैगर्ड स्लॉट के कारण आपको हाईवे पर 3 दिन इंतजार नहीं करना पड़ेगा!',
      replyEn: 'Current mandi average turnaround is only 15 minutes with 4 trolleys in queue. Staggered slots have slashed waiting from 72 hours down to under 60 minutes.',
      actionTab: 'command'
    },
    {
      keywords: ['payment', 'dbt', 'paisa', 'paise', 'bank', 'khata', 'पैसे', 'भुगतान', 'खाता', 'बैंक', 'रुपये'],
      replyHi: 'मंडी में तौल और गुणवत्ता जांच पूरी होते ही डिजिटल MSP पर्ची जारी होती है और 24 से 48 घंटे के भीतर PFMS-DBT द्वारा सीधे आपके आधार से जुड़े बैंक खाते में पैसा पहुंच जाता है।',
      replyEn: 'Payments are disbursed directly to your Aadhaar-linked bank account via PFMS Direct Benefit Transfer (DBT) within 24–48 hours after weighment slip generation.'
    },
    {
      keywords: ['rain', 'weather', 'barish', 'mausam', 'radar', 'बारिश', 'मौसम', 'बादल', 'पानी'],
      replyHi: 'IMD डॉपलर वेदर रडार से मंडी जुड़ी हुई है। यदि बारिश की संभावना होती है, तो सिस्टम खुली ट्रॉलियों को कवर्ड शेड (Covered Silo Shed B) में डाइवर्ट कर देता है ताकि आपकी फसल भीगने से बचे।',
      replyEn: 'Our system is connected to live IMD Doppler Weather Radar. If rain is detected, open tractor trolleys are automatically re-routed to covered silos to prevent moisture damage.',
      actionTab: 'weather'
    },
    {
      keywords: ['namaste', 'hello', 'hi', 'help', 'मदद', 'नमस्ते', 'प्रणाम', 'नमस्कार'],
      replyHi: 'नमस्ते किसान भाई! मैं आपका KISAN-Q कृषि मित्र हूँ। आप मुझसे बोलकर गेहूं/धान का MSP भाव, मंडी में भीड़, नमी के नियम, या स्लॉट बुकिंग के बारे में पूछ सकते हैं।',
      replyEn: 'Namaskar! I am your KISAN-Q AI Assistant. Ask me aloud about live MSP rates, mandi queue wait times, moisture rules, or booking your delivery slot.'
    }
  ];

  let isListening = false;
  let isSpeaking = false;
  let isMuted = false;
  let currentLang = 'HI';
  let recognition = null;

  function initUI() {
    // Merged into main chatbot in index.html
    return;
    // Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
      .kisan-ai-fab {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 10px;
        background: linear-gradient(135deg, #059669, #0d9488);
        color: white;
        padding: 12px 20px;
        border-radius: 9999px;
        box-shadow: 0 10px 25px -5px rgba(5, 150, 105, 0.5), 0 8px 10px -6px rgba(5, 150, 105, 0.4);
        cursor: pointer;
        border: 2px solid rgba(254, 240, 138, 0.4);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: inherit;
      }
      .kisan-ai-fab:hover {
        transform: scale(1.05) translateY(-2px);
        box-shadow: 0 15px 30px -5px rgba(5, 150, 105, 0.6);
      }
      .kisan-ai-modal {
        display: none;
        position: fixed;
        bottom: 90px;
        right: 24px;
        width: 380px;
        max-width: calc(100vw - 48px);
        height: 520px;
        max-height: calc(100vh - 120px);
        background: #0f172a;
        color: #f8fafc;
        border-radius: 24px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        border: 1px solid #1e293b;
        z-index: 10000;
        flex-direction: column;
        overflow: hidden;
      }
      .kisan-ai-modal.active { display: flex; }
      .kisan-ai-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .kisan-ai-msg {
        max-width: 85%;
        padding: 10px 14px;
        border-radius: 16px;
        font-size: 12px;
        line-height: 1.5;
      }
      .kisan-ai-msg.user {
        align-self: flex-end;
        background: #059669;
        color: white;
        border-bottom-right-radius: 4px;
      }
      .kisan-ai-msg.ai {
        align-self: flex-start;
        background: #1e293b;
        color: #f1f5f9;
        border: 1px solid #334155;
        border-bottom-left-radius: 4px;
      }
      .kisan-ai-pulse {
        animation: pulseRing 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
      }
      @keyframes pulseRing {
        0% { transform: scale(0.95); opacity: 1; }
        50% { transform: scale(1.08); opacity: 0.8; }
        100% { transform: scale(0.95); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    // Floating Button
    const fab = document.createElement('div');
    fab.className = 'kisan-ai-fab';
    fab.id = 'kisanAiFab';
    fab.innerHTML = `
      <span style="font-size: 20px;">🎙️</span>
      <div style="text-align: left; line-height: 1.2;">
        <div style="font-weight: 800; font-size: 13px; color: #fef08a;">कृषि मित्र AI</div>
        <div style="font-size: 10px; color: #a7f3d0;">बोलकर पूछें (Voice Assistant)</div>
      </div>
    `;
    document.body.appendChild(fab);

    // Modal
    const modal = document.createElement('div');
    modal.className = 'kisan-ai-modal';
    modal.id = 'kisanAiModal';
    modal.innerHTML = `
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #064e3b, #0f766e); padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="background: #fef08a; color: #064e3b; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px;">🌾</div>
          <div>
            <div style="font-weight: 700; font-size: 13px; color: white;">कृषि मित्र (Kisan AI)</div>
            <div style="font-size: 10px; color: #a7f3d0;">e-NAM मंडी और फसल सलाहकार</div>
          </div>
        </div>
        <div style="display: flex; gap: 6px;">
          <button id="kisanAiMuteBtn" style="background: transparent; border: none; color: #a7f3d0; cursor: pointer; font-size: 15px; padding: 4px;">🔊</button>
          <button id="kisanAiCloseBtn" style="background: transparent; border: none; color: #cbd5e1; cursor: pointer; font-size: 16px; padding: 4px;">✕</button>
        </div>
      </div>

      <!-- Quick Chips -->
      <div style="background: #090d16; padding: 8px 12px; display: flex; gap: 6px; overflow-x: auto; border-bottom: 1px solid #1e293b;" class="no-scrollbar">
        <button class="kisan-ai-chip" data-q="गेहूं का एमएसपी क्या है?" style="white-space: nowrap; font-size: 10px; background: #1e293b; color: #e2e8f0; border: 1px solid #334155; padding: 4px 10px; border-radius: 9999px; cursor: pointer;">🌾 गेहूं MSP</button>
        <button class="kisan-ai-chip" data-q="नमी 14% हो तो क्या होगा?" style="white-space: nowrap; font-size: 10px; background: #1e293b; color: #e2e8f0; border: 1px solid #334155; padding: 4px 10px; border-radius: 9999px; cursor: pointer;">💧 नमी नियम</button>
        <button class="kisan-ai-chip" data-q="मंडी में कितनी भीड़ है?" style="white-space: nowrap; font-size: 10px; background: #1e293b; color: #e2e8f0; border: 1px solid #334155; padding: 4px 10px; border-radius: 9999px; cursor: pointer;">⏱️ कतार भीड़</button>
        <button class="kisan-ai-chip" data-q="स्लॉट कैसे बुक करें?" style="white-space: nowrap; font-size: 10px; background: #1e293b; color: #e2e8f0; border: 1px solid #334155; padding: 4px 10px; border-radius: 9999px; cursor: pointer;">📅 स्लॉट बुक</button>
      </div>

      <!-- Messages Area -->
      <div class="kisan-ai-messages" id="kisanAiMessages">
        <div class="kisan-ai-msg ai">
          नमस्ते किसान भाई! 🌾 मैं आपका KISAN-Q कृषि मित्र हूँ। नीचे दिया गया माइक बटन दबाकर बोलें — जैसे <strong>"गेहूं का भाव क्या है?"</strong> या <strong>"स्लॉट बुक करो"</strong>।
        </div>
      </div>

      <!-- Bottom Audio & Input Bar -->
      <div style="background: #090d16; padding: 12px; border-top: 1px solid #1e293b; display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <div style="display: flex; width: 100%; gap: 6px;">
          <input type="text" id="kisanAiTextInput" placeholder="यहाँ प्रश्न लिखें या माइक दबाएँ..." style="flex: 1; background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 8px 12px; font-size: 11px; color: white; outline: none;" />
          <button id="kisanAiSendBtn" style="background: #059669; border: none; border-radius: 12px; color: white; padding: 8px 14px; cursor: pointer; font-size: 12px;">➤</button>
        </div>
        
        <button id="kisanAiMicBtn" style="width: 54px; height: 54px; border-radius: 50%; background: linear-gradient(135deg, #059669, #10b981); border: none; color: white; font-size: 22px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(5, 150, 105, 0.4); transition: all 0.2s;">
          🎙️
        </button>
        <div id="kisanAiStatus" style="font-size: 10px; color: #94a3b8;">माइक दबाकर हिंदी या अंग्रेजी में बोलें</div>
      </div>
    `;
    document.body.appendChild(modal);

    // Event Listeners
    fab.addEventListener('click', () => {
      modal.classList.toggle('active');
    });

    document.getElementById('kisanAiCloseBtn').addEventListener('click', () => {
      modal.classList.remove('active');
      stopSpeaking();
    });

    document.getElementById('kisanAiMuteBtn').addEventListener('click', (e) => {
      isMuted = !isMuted;
      e.target.innerText = isMuted ? '🔇' : '🔊';
      if (isMuted) stopSpeaking();
    });

    document.querySelectorAll('.kisan-ai-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        handleQuery(btn.getAttribute('data-q'));
      });
    });

    const sendBtn = document.getElementById('kisanAiSendBtn');
    const input = document.getElementById('kisanAiTextInput');

    sendBtn.addEventListener('click', () => {
      if (input.value.trim()) {
        handleQuery(input.value.trim());
        input.value = '';
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        handleQuery(input.value.trim());
        input.value = '';
      }
    });

    document.getElementById('kisanAiMicBtn').addEventListener('click', toggleListening);
  }

  function toggleListening() {
    stopSpeaking();
    const micBtn = document.getElementById('kisanAiMicBtn');
    const status = document.getElementById('kisanAiStatus');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('आपके ब्राउज़र में वॉइस इनपुट सपोर्ट नहीं है। कृपया टाइप करें।');
      return;
    }

    if (isListening) {
      try { recognition && recognition.stop(); } catch(e){}
      isListening = false;
      micBtn.classList.remove('kisan-ai-pulse');
      micBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
      status.innerText = 'माइक दबाकर हिंदी या अंग्रेजी में बोलें';
      return;
    }

    try {
      recognition = new SpeechRecognition();
      recognition.lang = currentLang === 'HI' ? 'hi-IN' : 'en-IN';
      recognition.interimResults = false;

      recognition.onstart = () => {
        isListening = true;
        micBtn.classList.add('kisan-ai-pulse');
        micBtn.style.background = '#e11d48';
        status.innerText = 'सुन रहा हूँ... बोलिए';
      };

      recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        isListening = false;
        micBtn.classList.remove('kisan-ai-pulse');
        micBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
        status.innerText = 'माइक दबाकर हिंदी या अंग्रेजी में बोलें';
        handleQuery(text);
      };

      recognition.onerror = () => {
        isListening = false;
        micBtn.classList.remove('kisan-ai-pulse');
        micBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
        status.innerText = 'माइक दबाकर हिंदी या अंग्रेजी में बोलें';
      };

      recognition.onend = () => {
        isListening = false;
        micBtn.classList.remove('kisan-ai-pulse');
        micBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
        status.innerText = 'माइक दबाकर हिंदी या अंग्रेजी में बोलें';
      };

      recognition.start();
    } catch(e) {
      isListening = false;
      micBtn.classList.remove('kisan-ai-pulse');
      status.innerText = 'माइक दबाकर हिंदी या अंग्रेजी में बोलें';
    }
  }

  function handleQuery(text) {
    const messages = document.getElementById('kisanAiMessages');

    // Add user message
    const userDiv = document.createElement('div');
    userDiv.className = 'kisan-ai-msg user';
    userDiv.innerText = text;
    messages.appendChild(userDiv);

    // Find answer
    const q = text.toLowerCase();
    let matched = KNOWLEDGE.find(k => k.keywords.some(kw => q.includes(kw.toLowerCase())));
    let reply = '';
    let actionTab = null;

    if (matched) {
      reply = currentLang === 'HI' ? matched.replyHi : matched.replyEn;
      actionTab = matched.actionTab;
    } else {
      reply = currentLang === 'HI' 
        ? 'मैंने समझा: "' + text + '"। KISAN-Q में आप गेहूं/धान का MSP भाव, मंडी भीड़, नमी नियम, या स्लॉट बुकिंग के बारे में पूछ सकते हैं।'
        : 'I heard: "' + text + '". You can ask about MSP rates, queue waiting time, moisture rules, or booking slots.';
    }

    // Add AI message
    setTimeout(() => {
      const aiDiv = document.createElement('div');
      aiDiv.className = 'kisan-ai-msg ai';
      aiDiv.innerHTML = reply;

      if (actionTab) {
        const btn = document.createElement('button');
        btn.style.cssText = 'display: block; width: 100%; margin-top: 8px; background: #fef08a; color: #022c22; font-weight: bold; border: none; padding: 6px; border-radius: 8px; cursor: pointer; font-size: 11px;';
        btn.innerText = actionTab === 'farmer' ? '📅 गो टू फार्मर स्लॉट बुकिंग' : (actionTab === 'command' ? '⏱️ गो टू लाइव कतार' : '🌧️ वेदर रडार देखें');
        btn.onclick = () => {
          if (window.switchTab) window.switchTab(actionTab);
          document.getElementById('kisanAiModal').classList.remove('active');
          stopSpeaking();
        };
        aiDiv.appendChild(btn);
      }

      messages.appendChild(aiDiv);
      messages.scrollTop = messages.scrollHeight;
      speak(reply);
    }, 300);

    messages.scrollTop = messages.scrollHeight;
  }

  function speak(text) {
    if (isMuted || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = currentLang === 'HI' ? 'hi-IN' : 'en-IN';
      u.rate = 0.95;
      window.speechSynthesis.speak(u);
    } catch(e){}
  }

  function stopSpeaking() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
  } else {
    initUI();
  }
})();
