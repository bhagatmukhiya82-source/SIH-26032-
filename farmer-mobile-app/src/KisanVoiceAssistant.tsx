import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, X, Sparkles, Send, ArrowRight } from 'lucide-react';

interface Props {
  lang: 'EN' | 'HI' | 'PA';
  onNavigate: (view: 'AUTH' | 'DASHBOARD' | 'BOOKING' | 'QUEUE' | 'PAYMENT' | 'PROFILE' | 'GALLERY' | 'OFFERS') => void;
  booking?: any;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  actionView?: 'BOOKING' | 'QUEUE' | 'PAYMENT';
  actionLabel?: string;
  timestamp: string;
}

// Agricultural Knowledge Base & Intent Matching
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
    replyHi: 'आप KISAN-Q में सीधे डिजिटल स्लॉट बुक कर सकते हैं! छोटे और सीमांत किसानों (2 हेक्टेयर से कम) के लिए 60% स्लॉट सुरक्षित हैं। क्या आप अभी स्लॉट बुकिंग फॉर्म पर जाना चाहते हैं?',
    replyEn: 'You can book your digital mandi slot right now! 60% of hourly capacity is reserved for marginal farmers under 2 hectares. Would you like to open the booking page?',
    actionView: 'BOOKING' as const,
    actionLabelHi: '📅 स्लॉट बुकिंग खोलें',
    actionLabelEn: '📅 Open Slot Booking'
  },
  {
    keywords: ['queue', 'wait', 'time', 'bheed', 'katare', 'कतार', 'भीड़', 'समय', 'इंतजार', 'नंबर'],
    replyHi: 'वर्तमान में मंडी में औसत प्रतीक्षा समय 15 मिनट है। 4 ट्रॉलियां कतार में हैं। KISAN-Q के स्टैगर्ड स्लॉट के कारण आपको हाईवे पर 3 दिन इंतजार नहीं करना पड़ेगा!',
    replyEn: 'Current mandi average turnaround is only 15 minutes with 4 trolleys in queue. Staggered slots have slashed waiting from 72 hours down to under 60 minutes.',
    actionView: 'QUEUE' as const,
    actionLabelHi: '⏱️ लाइव कतार देखें',
    actionLabelEn: '⏱️ View Live Queue'
  },
  {
    keywords: ['payment', 'dbt', 'paisa', 'paise', 'bank', 'khata', 'पैसे', 'भुगतान', 'खाता', 'बैंक', 'रुपये'],
    replyHi: 'मंडी में तौल और गुणवत्ता जांच पूरी होते ही डिजिटल MSP पर्ची जारी होती है और 24 से 48 घंटे के भीतर PFMS-DBT द्वारा सीधे आपके आधार से जुड़े बैंक खाते में पैसा पहुंच जाता है।',
    replyEn: 'Payments are disbursed directly to your Aadhaar-linked bank account via PFMS Direct Benefit Transfer (DBT) within 24–48 hours after weighment slip generation.',
    actionView: 'PAYMENT' as const,
    actionLabelHi: '💳 पेमेंट रसीद देखें',
    actionLabelEn: '💳 View Payment Slip'
  },
  {
    keywords: ['rain', 'weather', 'barish', 'mausam', 'radar', 'बारिश', 'मौसम', 'बादल', 'पानी'],
    replyHi: 'IMD डॉपलर वेदर रडार से मंडी जुड़ी हुई है। यदि बारिश की संभावना होती है, तो सिस्टम खुली ट्रॉलियों को कवर्ड शेड (Covered Silo Shed B) में डाइवर्ट कर देता है ताकि आपकी फसल भीगने से बचे।',
    replyEn: 'Our system is connected to live IMD Doppler Weather Radar. If rain is detected, open tractor trolleys are automatically re-routed to covered silos to prevent moisture damage.'
  },
  {
    keywords: ['pm-kisan', 'kisan', 'subsidy', 'yojna', 'योजना', 'सब्सिडी'],
    replyHi: 'पीएम-किसान योजना के तहत पात्र किसानों को प्रतिवर्ष ₹6,000 तीन किश्तों में दिए जाते हैं। KISAN-Q में आपकी PM-Kisan ID लिंक करने पर स्वतः प्राथमिकता टोकन मिलता है।',
    replyEn: 'Under PM-Kisan, eligible farmers receive ₹6,000 annually. Linking your PM-Kisan ID in KISAN-Q automatically verifies your farmer credentials for priority booking.'
  },
  {
    keywords: ['namaste', 'hello', 'hi', 'kaise', 'help', 'मदद', 'नमस्ते', 'प्रणाम', 'नमस्कार'],
    replyHi: 'नमस्ते किसान भाई! मैं आपका KISAN-Q कृषि मित्र हूँ। आप मुझसे बोलकर गेहूं/धान का MSP भाव, मंडी में भीड़, नमी के नियम, या स्लॉट बुकिंग के बारे में पूछ सकते हैं।',
    replyEn: 'Namaskar! I am your KISAN-Q AI Assistant. Ask me aloud about live MSP rates, mandi queue wait times, moisture rules, or booking your delivery slot.'
  }
];

export const KisanVoiceAssistant: React.FC<Props> = ({ lang, onNavigate, booking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: lang === 'HI' 
        ? 'नमस्ते किसान भाई! 🌾 मैं आपका KISAN-Q AI सहायक हूँ। नीचे माइक बटन दबाकर बोलें — जैसे "गेहूं का भाव क्या है?", या "स्लॉट बुक करो"।'
        : 'Welcome! 🌾 I am your KISAN-Q AI Assistant. Tap the microphone and speak — e.g. "What is the wheat MSP?", or "Book my slot".',
      timestamp: 'Just now'
    }
  ]);

  const recognitionRef = useRef<any>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isListening]);

  // Speech Synthesis (Audio Output)
  const speakText = (text: string) => {
    if (isMuted || typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'HI' ? 'hi-IN' : 'en-IN';
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      setIsSpeaking(false);
    }
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Process User Query
  const processQuery = (rawQuery: string) => {
    const q = rawQuery.trim().toLowerCase();
    if (!q) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: rawQuery,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);

    // Find best match in knowledge base
    let matchedItem = KNOWLEDGE.find(item => 
      item.keywords.some(kw => q.includes(kw.toLowerCase()))
    );

    let replyText = '';
    let actionView: 'BOOKING' | 'QUEUE' | 'PAYMENT' | undefined = undefined;
    let actionLabel: string | undefined = undefined;

    if (matchedItem) {
      replyText = lang === 'HI' ? matchedItem.replyHi : matchedItem.replyEn;
      if (matchedItem.actionView) {
        actionView = matchedItem.actionView;
        actionLabel = lang === 'HI' ? (matchedItem as any).actionLabelHi : (matchedItem as any).actionLabelEn;
      }
    } else {
      replyText = lang === 'HI'
        ? `मैंने समझा: "${rawQuery}"। KISAN-Q में आप MSP भाव, नमी नियम, स्लॉट बुकिंग और लाइव कतार के बारे में पूछ सकते हैं। सहायता के लिए नीचे दिए गए विकल्पों पर टैप करें।`
        : `I understood: "${rawQuery}". You can ask about government MSP rates, moisture rules, slot booking, or mandi queues.`;
    }

    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'ai',
      text: replyText,
      actionView,
      actionLabel,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setTimeout(() => {
      setMessages(prev => [...prev, aiMsg]);
      speakText(replyText);
    }, 400);
  };

  // Speech Recognition (Audio Input)
  const toggleListening = () => {
    stopSpeaking();

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert(lang === 'HI' 
        ? 'आपके ब्राउज़र में वॉइस इनपुट समर्थित नहीं है। कृपया टाइप करके प्रश्न पूछें।' 
        : 'Voice input is not supported in this browser. Please type your query.');
      return;
    }

    if (isListening) {
      try {
        recognitionRef.current?.stop();
      } catch (e) {}
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = lang === 'HI' ? 'hi-IN' : 'en-IN';
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognition.continuous = false;

      recognition.onstart = () => {
        setIsListening(true);
        setTranscript(lang === 'HI' ? 'सुन रहा हूँ... बोलिए' : 'Listening... speak now');
      };

      recognition.onresult = (event: any) => {
        const current = event.resultIndex;
        const text = event.results[current][0].transcript;
        setTranscript(text);
        if (event.results[current].isFinal) {
          setIsListening(false);
          setTranscript('');
          processQuery(text);
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
        setTranscript('');
      };

      recognition.onend = () => {
        setIsListening(false);
        setTranscript('');
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      setIsListening(false);
      setTranscript('');
    }
  };

  const quickQuestions = lang === 'HI' ? [
    '🌾 गेहूं का सरकारी MSP क्या है?',
    '💧 नमी 14% हो तो क्या करें?',
    '⏱️ मंडी में अभी कितनी भीड़ है?',
    '📅 स्लॉट कैसे बुक करें?',
    '🌧️ क्या आज बारिश का अलर्ट है?'
  ] : [
    '🌾 What is Wheat MSP for 2025-26?',
    '💧 What happens if moisture is 14%?',
    '⏱️ How long is the queue wait?',
    '📅 How to book a mandi slot?',
    '🌧️ Is there a rain warning today?'
  ];

  return (
    <>
      {/* Floating Glowing Voice Assistant Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          stopSpeaking();
        }}
        className="fixed bottom-20 right-4 z-40 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white px-4 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 font-bold border-2 border-emerald-300/40 hover:scale-105 active:scale-95 transition group animate-bounce duration-1000">
        <div className="relative">
          <Mic size={20} className="text-amber-300" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
          </span>
        </div>
        <div className="text-left leading-tight pr-1">
          <div className="text-[12px] font-black tracking-wide text-amber-200">
            {lang === 'HI' ? 'कृषि मित्र AI' : 'Kisan AI'}
          </div>
          <div className="text-[9px] text-emerald-100 font-medium">
            {lang === 'HI' ? 'बोलकर पूछें 🎙️' : 'Voice Assistant 🎙️'}
          </div>
        </div>
      </button>

      {/* Voice Assistant Full Modal Sheet */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
          <div className="bg-slate-900 text-white w-full sm:max-w-md h-[90vh] sm:h-[650px] rounded-t-3xl sm:rounded-3xl flex flex-col shadow-2xl border border-slate-800 overflow-hidden animate-in slide-in-from-bottom duration-300">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-900 to-teal-900 p-4 flex items-center justify-between border-b border-emerald-800/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-black shadow">
                  🌾
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                    {lang === 'HI' ? 'कृषि मित्र (Kisan AI Assistant)' : 'Kisan AI Voice Assistant'}
                    <Sparkles size={14} className="text-amber-300" />
                  </h3>
                  <p className="text-[11px] text-emerald-200">
                    {lang === 'HI' ? 'e-NAM मंडी और फसल सलाहकार' : 'Live e-NAM Mandi & Crop Advisor'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    if (isSpeaking) stopSpeaking();
                    setIsMuted(!isMuted);
                  }}
                  className="p-2 rounded-full hover:bg-emerald-800/60 text-emerald-200 transition">
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className={isSpeaking ? 'text-amber-300 animate-pulse' : ''} />}
                </button>
                <button 
                  onClick={() => {
                    stopSpeaking();
                    if (isListening) recognitionRef.current?.stop();
                    setIsOpen(false);
                  }}
                  className="p-2 rounded-full hover:bg-emerald-800/60 text-slate-300 hover:text-white transition">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Quick Questions Horizontal Scroll */}
            <div className="bg-slate-950/70 px-3 py-2.5 border-b border-slate-800 overflow-x-auto flex gap-2 no-scrollbar">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => processQuery(q.replace(/^[^\s]+\s/, ''))}
                  className="whitespace-nowrap text-[11px] bg-slate-800/90 hover:bg-emerald-900/60 text-slate-200 hover:text-white px-3 py-1.5 rounded-full border border-slate-700 transition">
                  {q}
                </button>
              ))}
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m) => (
                <div 
                  key={m.id} 
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed shadow ${
                      m.sender === 'user' 
                        ? 'bg-emerald-600 text-white rounded-br-none' 
                        : 'bg-slate-800 text-slate-100 rounded-bl-none border border-slate-700'
                    }`}>
                    {m.text}

                    {/* Action Button inside AI reply */}
                    {m.actionView && m.actionLabel && (
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          stopSpeaking();
                          onNavigate(m.actionView!);
                        }}
                        className="mt-2.5 w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-1.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5 shadow text-[11px]">
                        {m.actionLabel} <ArrowRight size={13} />
                      </button>
                    )}
                  </div>
                  <span className="text-[9px] text-slate-500 mt-1 px-1">{m.timestamp}</span>
                </div>
              ))}

              {/* Listening Visualizer */}
              {isListening && (
                <div className="flex items-center gap-2 p-3 bg-emerald-950/60 rounded-2xl border border-emerald-600/50 text-emerald-300 text-xs animate-pulse">
                  <Mic size={16} className="text-amber-400 animate-bounce" />
                  <span>{transcript || (lang === 'HI' ? 'सुन रहा हूँ... बोलिए' : 'Listening... speak now')}</span>
                  <div className="flex gap-1 ml-auto">
                    <span className="w-1.5 h-4 bg-emerald-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-6 bg-emerald-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-3 bg-emerald-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Speaking indicator */}
            {isSpeaking && (
              <div className="bg-emerald-900/40 px-4 py-1.5 text-[11px] text-emerald-300 flex items-center justify-between border-t border-emerald-900/60">
                <span className="flex items-center gap-1.5">
                  <Volume2 size={13} className="animate-pulse text-amber-300" />
                  {lang === 'HI' ? 'AI बोल रहा है...' : 'AI speaking aloud...'}
                </span>
                <button onClick={stopSpeaking} className="text-amber-300 hover:underline text-[10px]">
                  {lang === 'HI' ? 'रोकें (Stop)' : 'Stop'}
                </button>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="bg-slate-950 p-3 border-t border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputText.trim()) {
                      processQuery(inputText);
                      setInputText('');
                    }
                  }}
                  placeholder={lang === 'HI' ? 'यहाँ प्रश्न टाइप करें या माइक दबाएँ...' : 'Type question or tap mic...'}
                  className="flex-1 bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
                />
                {inputText.trim() && (
                  <button
                    onClick={() => {
                      if (inputText.trim()) {
                        processQuery(inputText);
                        setInputText('');
                      }
                    }}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-xl">
                    <Send size={15} />
                  </button>
                )}
              </div>

              {/* Big Central Mic Button */}
              <div className="flex items-center justify-center">
                <button
                  onClick={toggleListening}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition shadow-2xl ${
                    isListening 
                      ? 'bg-rose-600 text-white ring-4 ring-rose-400/50 animate-pulse scale-105' 
                      : 'bg-gradient-to-tr from-emerald-600 to-teal-500 text-white hover:scale-105 ring-4 ring-emerald-500/20'
                  }`}>
                  {isListening ? <MicOff size={28} /> : <Mic size={28} />}
                </button>
              </div>
              <p className="text-center text-[10px] text-slate-400 mt-1.5">
                {isListening 
                  ? (lang === 'HI' ? 'बोलना समाप्त करने के लिए टैप करें' : 'Tap to stop listening')
                  : (lang === 'HI' ? 'माइक दबाकर हिंदी या अंग्रेजी में बोलें' : 'Tap mic and speak in Hindi or English')}
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
