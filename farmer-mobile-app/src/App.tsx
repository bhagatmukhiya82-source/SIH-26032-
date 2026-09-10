import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Calendar, 
  Clock, 
  IndianRupee, 
  MapPin, 
  CheckCircle, 
  Bell, 
  User, 
  ChevronRight, 
  AlertTriangle, 
  PlayCircle,
  QrCode,
  ShieldCheck,
  Truck,
  FileText,
  Download,
  LogOut,
  Globe,
  Sparkles,
  RefreshCw,
  Check,
  UserCheck,
  BadgeCheck,
  PhoneCall,
  Activity,
  TrendingUp,
  Image as ImageIcon,
  Building2,
  ExternalLink,
  Shield,
  Droplets,
  Layers,
  FileCheck,
  Warehouse,
  Gift,
  Newspaper,
  ChevronLeft,
  Send
} from 'lucide-react';
import { I18N_DICT, tHelper, translateDOM } from './i18nData';

// --- TYPES & INTERFACES ---
type Status = 
  | 'BOOKED' 
  | 'CHECKED_IN' 
  | 'WEIGHING_GROSS' 
  | 'QUALITY_LAB' 
  | 'WEIGHING_TARE' 
  | 'PROCUREMENT_COMPLETED' 
  | 'PAYMENT_PROCESSING' 
  | 'PAID';

type Lang = 'EN' | 'HI' | 'PA';
type View = 'AUTH' | 'DASHBOARD' | 'BOOKING' | 'QUEUE' | 'PAYMENT' | 'PROFILE' | 'GALLERY' | 'OFFERS';
type AuthTab = 'LOGIN' | 'REGISTER';

interface FarmerProfile {
  name: string;
  phone: string;
  aadhaar: string;
  pmKisanId: string;
  landSizeHa: number;
  landCategory: 'MARGINAL' | 'SMALL' | 'MEDIUM' | 'LARGE';
  district: string;
  state: string;
  village: string;
  vehicleType: string;
  vehicleNo: string;
  bankName: string;
  accountNo: string;
  ifsc: string;
}

interface Booking {
  id: string;
  token: string;
  produce: string;
  mspPerQtl: number;
  quantityQtl: number;
  centre: string;
  date: string;
  slot: string;
  gate: string;
  weighbridge: string;
  status: Status;
  queuePosition: number;
  estWait: number;
  isFairSharePriority: boolean;
  moisturePercent?: number;
  grossWeightMT?: number;
  tareWeightMT?: number;
  netWeightMT?: number;
  paymentAmount?: number;
  txnId?: string;
  bookedAt: string;
}

// --- PRODUCE & MSP DATABASE (Official e-NAM Commodities) ---
const CROPS = [
  { id: 'wheat', nameEn: 'Wheat (गेहूं)', nameHi: 'गेहूं', namePa: 'ਕਣਕ (Wheat)', msp: 2275, change: '+₹150 ▲', trend: 'up', icon: '🌾' },
  { id: 'paddy', nameEn: 'Paddy / Rice (धान)', nameHi: 'धान', namePa: 'ਝੋਨਾ / ਚੌਲ (Paddy)', msp: 2300, change: '+₹117 ▲', trend: 'up', icon: '🍚' },
  { id: 'mustard', nameEn: 'Mustard (सरसों)', nameHi: 'सरसों', namePa: 'ਸਰ੍ਹੋਂ (Mustard)', msp: 5650, change: '+₹200 ▲', trend: 'up', icon: '🌻' },
  { id: 'cotton', nameEn: 'Cotton (कपास)', nameHi: 'कपास', namePa: 'ਨਰਮਾ / ਕਪਾਹ (Cotton)', msp: 7121, change: '+₹340 ▲', trend: 'up', icon: '☁️' },
  { id: 'maize', nameEn: 'Maize / Corn (मक्का)', nameHi: 'मक्का', namePa: 'ਮੱਕੀ (Maize)', msp: 2090, change: '+₹90 ▲', trend: 'up', icon: '🌽' },
  { id: 'chana', nameEn: 'Gram / Chana (चना)', nameHi: 'चना', namePa: 'ਛੋਲੇ / ਚਣਾ (Gram)', msp: 5440, change: '+₹105 ▲', trend: 'up', icon: '🧆' },
];

const CENTRES = [
  { 
    id: 'c1', 
    nameEn: 'Khanna Grain Market (Asia No. 1 APMC)', 
    nameHi: 'खन्ना अनाज मंडी (एशिया की सबसे बड़ी मंडी)', 
    namePa: 'ਖੰਨਾ ਅਨਾਜ ਮੰਡੀ (ਏਸ਼ੀਆ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਮੰਡੀ)', 
    distance: '6 km', 
    gates: ['Gate 1 (Smallholder Express)', 'Gate 2 (General)'], 
    queue: 4, 
    wait: 15, 
    recommended: true 
  },
  { 
    id: 'c2', 
    nameEn: 'Ludhiana APMC Terminal Market', 
    nameHi: 'लुधियाना मुख्य एपीएमसी मंडी', 
    namePa: 'ਲੁਧਿਆਣਾ ਮੁੱਖ ਮੰਡੀ (APMC)', 
    distance: '18 km', 
    gates: ['Gate A', 'Gate B'], 
    queue: 9, 
    wait: 30, 
    recommended: false 
  },
];

const SLOTS = [
  '08:00 AM - 09:00 AM',
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM'
];

// Documentary Photo Gallery
const GALLERY_ITEMS = [
  {
    title: 'APMC Mandi Electronic Gate Lane',
    titlePa: 'ਮੰਡੀ ਐਂਟਰੀ ਗੇਟ ਤੇ LED ਟੋਕਨ ਡਿਸਪਲੇ',
    img: '/images/mandi_entry_gate.jpg',
    desc: 'Automated boom barriers and real-time electronic LED token displays guiding incoming tractor trolleys without traffic gridlocks.'
  },
  {
    title: 'Farmer Digital Token at Gate',
    titlePa: 'ਗੇਟ ਤੇ ਕਿਸਾਨ ਦਾ ਡਿਜੀਟਲ ਟੋਕਨ',
    img: '/images/farmer_token.jpg',
    desc: 'Instant QR code verification at Mandi Entry Gate eliminating manual bribery, middlemen extortion, and paperwork.'
  },
  {
    title: 'Touch-Screen Farmer Facilitation Kiosk',
    titlePa: 'ਟੱਚ-ਸਕ੍ਰੀਨ ਕਿਸਾਨ ਸੁਵਿਧਾ ਕੇਂਦਰ',
    img: '/images/farmer_kiosk.jpg',
    desc: 'Assisted walk-in digital terminal at mandi entrance providing on-the-spot physical token printouts and multilingual guidance.'
  },
  {
    title: 'Certified Electronic Weighbridge',
    titlePa: 'ਤਸਦੀਕਸ਼ੁਦਾ ਇਲੈਕਟ੍ਰਾਨਿਕ ਕੰਡਾ',
    img: '/images/mandi_weighbridge.jpg',
    desc: 'Automated Gross and Tare weighing directly logged onto e-NAM server to eliminate manual weight manipulation and dockage fraud.'
  },
  {
    title: 'Scientific Grain Assaying Lab',
    titlePa: 'ਵਿਗਿਆਨਕ ਅਨਾਜ ਗੁਣਵੱਤਾ ਲੈਬ',
    img: '/images/grain_assaying_lab.jpg',
    desc: 'Government certified assaying laboratory with digital infrared moisture meters ensuring transparent grading and fair pricing.'
  },
  {
    title: 'NABL Moisture & Dockage Testing',
    titlePa: 'ਨਮੀ ਅਤੇ ਗੁਣਵੱਤਾ ਟੈਸਟਿੰਗ ਲੈਬ',
    img: '/images/moisture_lab.jpg',
    desc: 'Digital moisture meters ensure fair dockage calculation strictly compliant with FCI ≤12% moisture procurement standard.'
  },
  {
    title: 'Mechanical Silo Unloading Hopper',
    titlePa: 'ਮਕੈਨੀਕਲ ਸਾਈਲੋ ਅਨਲੋਡਿੰਗ ਹੌਪਰ',
    img: '/images/mandi_silo_unloading.jpg',
    desc: 'High-speed hydraulic tipping platforms and pneumatic bucket elevators unloading 10-tonne wheat trolleys in under 7 minutes.'
  },
  {
    title: 'Weather-Protected Grain Silo Complex',
    titlePa: 'ਮੀਂਹ ਤੋਂ ਸੁਰੱਖਿਅਤ ਅਨਾਜ ਸਾਈਲੋ',
    img: '/images/covered_silo.jpg',
    desc: 'Automated Doppler weather radar alerts redirect inbound tractor queues into covered steel silos during sudden storms.'
  }
];

// --- DEFAULT SEED FARMER ---
const DEFAULT_FARMER: FarmerProfile = {
  name: 'Gurpreet Singh',
  phone: '9826011223',
  aadhaar: 'XXXX-XXXX-8821',
  pmKisanId: 'PB-PK-2026-9941',
  landSizeHa: 1.4,
  landCategory: 'MARGINAL',
  district: 'Ludhiana',
  state: 'Punjab',
  village: 'Samrala, Khanna',
  vehicleType: 'Tractor Trolley',
  vehicleNo: 'PB10TA9981',
  bankName: 'Punjab National Bank',
  accountNo: '3099824432',
  ifsc: 'PUNB0014200'
};

export default function KisanQApp() {
  const [lang, setLang] = useState<Lang>('EN');
  const [view, setView] = useState<View>('AUTH');
  const [authTab, setAuthTab] = useState<AuthTab>('LOGIN');
  const [currentTime, setCurrentTime] = useState<string>('');

  // Live Clock Effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Login form state
  const [loginPhone, setLoginPhone] = useState('9826011223');
  const [loginOtp, setLoginOtp] = useState('1234');
  const [otpSent, setOtpSent] = useState(false);

  // Registration form state
  const [regForm, setRegForm] = useState({
    name: 'Harpreet Singh',
    phone: '9876543210',
    aadhaar: '4532-8876-1249',
    pmKisanId: 'PB-PK-2026-7731',
    landSizeHa: '1.2',
    landCategory: 'MARGINAL' as 'MARGINAL' | 'SMALL' | 'MEDIUM' | 'LARGE',
    district: 'Ludhiana',
    village: 'Doraha, Khanna',
    vehicleType: 'Tractor Trolley',
    vehicleNo: 'PB10BK4421',
    bankName: 'Punjab National Bank',
    accountNo: '60129988443',
    ifsc: 'PUNB0000123'
  });

  // Current active farmer & booking
  const [farmer, setFarmer] = useState<FarmerProfile>(DEFAULT_FARMER);
  const [booking, setBooking] = useState<Booking | null>({
    id: 'BKG-1049',
    token: 'KQ-1049',
    produce: 'Wheat (ਕਣਕ)',
    mspPerQtl: 2275,
    quantityQtl: 10,
    centre: 'Khanna Grain Market (Asia No. 1 APMC)',
    date: 'Today',
    slot: '09:00 AM - 10:00 AM',
    gate: 'Gate 1 (Smallholder Express)',
    weighbridge: 'WB-01 (Entry Gross)',
    status: 'BOOKED',
    queuePosition: 4,
    estWait: 15,
    isFairSharePriority: true,
    grossWeightMT: 14.2,
    tareWeightMT: 4.2,
    netWeightMT: 10.0,
    moisturePercent: 11.4,
    paymentAmount: 22750,
    txnId: 'TXN-DBT-20260910-8841',
    bookedAt: 'Today, 08:15 AM'
  });

  const [notifications, setNotifications] = useState<string[]>([
    'Welcome to e-NAM KISAN-Q! Fair-Share Gate 1 priority lane reserved.'
  ]);
  const [showDemoControls, setShowDemoControls] = useState(false);

  // External API Integrations (NewsAPI & Fast2SMS) & Mandi Offers State
  const [newsList, setNewsList] = useState<any[]>([]);
  const [offersList, setOffersList] = useState<any[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [claimSuccess, setClaimSuccess] = useState<string | null>(null);

  // Auto-Slide Effect for Mandi Infrastructure Photos
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % GALLERY_ITEMS.length);
    }, 4000);
    return () => clearInterval(slideTimer);
  }, []);

  // Fetch Live News (NEWS_KEY) & Mandi Offers (SMS_KEY)
  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.articles) {
          setNewsList(data.articles);
        }
      })
      .catch(err => console.warn('News API fetch note:', err));

    fetch('/api/mandi-offers')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.offers) {
          setOffersList(data.offers);
        }
      })
      .catch(err => console.warn('Offers API fetch note:', err));
  }, []);

  const handleClaimOffer = async (offer: any, claimQty: number) => {
    try {
      const res = await fetch('/api/mandi-offers/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offerId: offer.id,
          farmerName: farmer.name,
          phone: farmer.phone,
          crop: offer.commodity,
          quantity: claimQty
        })
      });
      const data = await res.json();
      if (data.success) {
        setClaimSuccess(`Token: ${data.claim.claimCode} • Dispatched via Fast2SMS to ${farmer.phone}`);
        addNotification(`Offer Claimed! ${offer.title} (${offer.bonus}) pass reserved.`);
      }
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
  };

  // Multi-lingual Helper (EN, HI, PA) with automatic dictionary fallback
  const t = (en: string, hi?: string, pa?: string) => {
    return tHelper(lang, en, hi, pa);
  };

  // Universal DOM TextNode and Placeholder Translator to guarantee 100% translation coverage
  useEffect(() => {
    const timer = setTimeout(() => {
      translateDOM(document.body, lang);
    }, 15);
    return () => clearTimeout(timer);
  }, [lang, view, authTab, booking, currentTime, showDemoControls]);

  const addNotification = (msg: string) => {
    setNotifications(prev => [msg, ...prev.slice(0, 5)]);
  };

  // --- AUTH ACTIONS ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpSent) {
      setOtpSent(true);
      addNotification("Demo OTP 1234 sent to " + loginPhone);
      return;
    }
    setView('DASHBOARD');
    addNotification("Logged in as " + farmer.name + " (" + farmer.district + ")");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newProfile: FarmerProfile = {
      name: regForm.name,
      phone: regForm.phone,
      aadhaar: regForm.aadhaar,
      pmKisanId: regForm.pmKisanId,
      landSizeHa: parseFloat(regForm.landSizeHa) || 1.0,
      landCategory: regForm.landCategory,
      district: regForm.district,
      state: 'Punjab',
      village: regForm.village,
      vehicleType: regForm.vehicleType,
      vehicleNo: regForm.vehicleNo,
      bankName: regForm.bankName,
      accountNo: regForm.accountNo,
      ifsc: regForm.ifsc
    };
    setFarmer(newProfile);
    setBooking(null);
    setView('DASHBOARD');
    addNotification("Farmer profile registered! PM-KISAN verified for " + newProfile.name);
  };

  // --- DEMO PIPELINE STEP ADVANCEMENT ---
  const advanceQueue = () => {
    if (!booking) return;
    setBooking(prev => {
      if (!prev) return prev;
      if (prev.status === 'BOOKED') {
        addNotification("RFID Gate Pass Scanned: Welcome at " + prev.gate);
        return { ...prev, status: 'CHECKED_IN', queuePosition: 3, estWait: 12 };
      }
      if (prev.status === 'CHECKED_IN' && prev.queuePosition > 1) {
        return { ...prev, queuePosition: prev.queuePosition - 1, estWait: prev.estWait - 4 };
      }
      if (prev.status === 'CHECKED_IN' && prev.queuePosition <= 1) {
        addNotification("Tractor called to Weighbridge 1 (Gross Weight)");
        return { ...prev, status: 'WEIGHING_GROSS', queuePosition: 0, estWait: 0 };
      }
      if (prev.status === 'WEIGHING_GROSS') {
        addNotification("Gross weight recorded (14.2 MT). Proceed to QC Lab.");
        return { ...prev, status: 'QUALITY_LAB' };
      }
      if (prev.status === 'QUALITY_LAB') {
        addNotification("Moisture tested: 11.4% (Grade A FCI Pass). Unload grain.");
        return { ...prev, status: 'WEIGHING_TARE' };
      }
      if (prev.status === 'WEIGHING_TARE') {
        const net = (prev.grossWeightMT || 14.2) - (prev.tareWeightMT || 4.2);
        const payout = (prev.quantityQtl || 10) * (prev.mspPerQtl || 2275);
        addNotification("Tare weighing complete! Net grain: " + net.toFixed(1) + " MT.");
        return { 
          ...prev, 
          status: 'PROCUREMENT_COMPLETED',
          netWeightMT: net,
          paymentAmount: payout
        };
      }
      if (prev.status === 'PROCUREMENT_COMPLETED') {
        addNotification("Initiating Direct Benefit Transfer (DBT) via PFMS to " + farmer.bankName);
        return { ...prev, status: 'PAYMENT_PROCESSING' };
      }
      if (prev.status === 'PAYMENT_PROCESSING') {
        addNotification("Success! ₹" + (prev.paymentAmount || 22750).toLocaleString() + " credited to linked A/C ending in " + farmer.accountNo.slice(-4));
        return { ...prev, status: 'PAID' };
      }
      return prev;
    });
  };

  // ==========================================
  // VIEW 1: AUTHENTICATION (SIGN IN & REGISTER)
  // ==========================================
  const AuthView = () => (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between pb-8">
      {/* Top Tricolor Strip (Like enam.gov.in) */}
      <div className="tricolor-bar"></div>

      <div className="p-4">
        {/* Top Header: Govt Identity + Live Ticker */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <div className="bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded text-[11px] shadow-sm">
              e-NAM 2.0
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 leading-none">Govt. of India • Ministry of Agriculture</p>
              <h2 className="text-xs font-black text-emerald-900 tracking-tight">National Agriculture Market</h2>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex bg-slate-200 rounded-lg p-0.5 text-xs font-bold shadow-inner">
            <button 
              onClick={() => setLang('EN')} 
              className={`px-2 py-1 rounded transition ${lang === 'EN' ? 'bg-emerald-700 text-white shadow' : 'text-slate-600'}`}>
              EN
            </button>
            <button 
              onClick={() => setLang('HI')} 
              className={`px-2 py-1 rounded transition ${lang === 'HI' ? 'bg-emerald-700 text-white shadow' : 'text-slate-600'}`}>
              हिन्दी
            </button>
            <button 
              onClick={() => setLang('PA')} 
              className={`px-2 py-1 rounded transition ${lang === 'PA' ? 'bg-emerald-700 text-white shadow' : 'text-slate-600'}`}>
              ਪੰਜਾਬੀ
            </button>
          </div>
        </div>

        {/* Brand Banner with Image & Slogan */}
        <div className="mt-3 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white p-5 rounded-3xl shadow-xl relative overflow-hidden mb-4 border border-emerald-700/50">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <span className="inline-block bg-amber-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                एक राष्ट्र, एक बाजार • ਇੱਕ ਰਾਸ਼ਟਰ, ਇੱਕ ਮੰਡੀ
              </span>
              <div className="flex items-center gap-2.5 mb-1">
                <img src="/kisan_q_icon.svg" alt="KISAN-Q Logo" className="w-9 h-9 rounded-2xl shadow-lg border border-amber-400/80" />
                <h1 className="text-3xl font-black tracking-tight leading-tight">KISAN<span className="text-amber-400">-Q</span></h1>
              </div>
              <p className="text-emerald-200 text-xs font-medium mt-1">
                {t(
                  "Smart Slot Booking & Fair-Share Mandi Procurement",
                  "स्मार्ट मंडी स्लॉट बुकिंग व पारदर्शी खरीद प्रणाली",
                  "ਸਮਾਰਟ ਮੰਡੀ ਸਲਾਟ ਬੁਕਿੰਗ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਅਨਾਜ ਖਰੀਦ ਪ੍ਰਣਾਲੀ"
                )}
              </p>
            </div>
            
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-lg flex-shrink-0 ml-3">
              <img src="/images/farmer_token.jpg" alt="Farmer" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-emerald-700/60 text-[10px] text-emerald-200">
            <span className="flex items-center gap-1">
              <ShieldCheck size={13} className="text-amber-300" /> e-NAM & APMC Certified
            </span>
            <span className="flex items-center gap-1 text-amber-300 font-bold">
              <PhoneCall size={11} /> Helpline: 1800-270-0224
            </span>
          </div>
        </div>

        {/* Official e-NAM Live Stats Strip */}
        <div className="grid grid-cols-4 gap-1.5 mb-4 text-center">
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[9px] text-slate-500 font-bold uppercase">Farmers</p>
            <p className="text-xs font-black text-emerald-700">1.77+ Cr</p>
          </div>
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[9px] text-slate-500 font-bold uppercase">Mandis</p>
            <p className="text-xs font-black text-emerald-700">1,361+</p>
          </div>
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[9px] text-slate-500 font-bold uppercase">Wait Cut</p>
            <p className="text-xs font-black text-amber-600">96% ↓</p>
          </div>
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[9px] text-slate-500 font-bold uppercase">DBT Pay</p>
            <p className="text-xs font-black text-emerald-700">100% Direct</p>
          </div>
        </div>

        {/* Dual Tab Card: Sign In vs Register */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="flex border-b border-slate-200 bg-slate-100/70">
            <button
              onClick={() => { setAuthTab('LOGIN'); setOtpSent(false); }}
              className={`flex-1 py-3 text-center text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                authTab === 'LOGIN' 
                  ? 'bg-white text-emerald-800 border-b-2 border-emerald-600 shadow-sm font-black' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}>
              <UserCheck size={16} />
              {t("Farmer Sign In", "किसान लॉग इन", "ਕਿਸਾਨ ਲੌਗ ਇਨ")}
            </button>
            <button
              onClick={() => setAuthTab('REGISTER')}
              className={`flex-1 py-3 text-center text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                authTab === 'REGISTER' 
                  ? 'bg-white text-emerald-800 border-b-2 border-emerald-600 shadow-sm font-black' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}>
              <BadgeCheck size={16} />
              {t("New Registration", "नया पंजीकरण", "ਨਵੀਂ ਰਜਿਸਟ੍ਰੇਸ਼ਨ")}
            </button>
          </div>

          {/* TAB A: LOGIN */}
          {authTab === 'LOGIN' && (
            <form onSubmit={handleLogin} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t("Registered Mobile Number", "पंजीकृत मोबाइल नंबर", "ਰਜਿਸਟਰਡ ਮੋਬਾਈਲ ਨੰਬਰ")}
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-slate-400 text-sm font-bold">+91</span>
                  <input 
                    type="tel"
                    value={loginPhone}
                    onChange={e => setLoginPhone(e.target.value)}
                    placeholder="9826011223"
                    className="w-full pl-12 pr-4 py-2.5 border border-slate-300 rounded-xl text-sm font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {otpSent && (
                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl animate-in fade-in">
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold text-emerald-900">
                      {t("Enter 4-Digit OTP", "4-अंकों का ओटीपी दर्ज करें", "4-ਅੰਕਾਂ ਦਾ ਓਟੀਪੀ ਦਰਜ ਕਰੋ")}
                    </label>
                    <span className="text-[10px] bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Demo: 1234</span>
                  </div>
                  <input 
                    type="text"
                    value={loginOtp}
                    onChange={e => setLoginOtp(e.target.value)}
                    className="w-full py-2 text-center tracking-widest text-xl font-bold font-mono border border-emerald-300 rounded-lg bg-white"
                    maxLength={4}
                    required
                  />
                  <p className="text-[11px] text-emerald-700 mt-1">
                    {t("SMS sent to linked farmer SIM", "किसान के सिम पर ओटीपी भेजा गया", "ਕਿਸਾਨ ਦੇ ਮੋਬਾਈਲ 'ਤੇ ਓਟੀਪੀ ਭੇਜਿਆ ਗਿਆ")}
                  </p>
                </div>
              )}

              <button 
                type="submit"
                className="w-full shimmer-btn text-slate-950 font-black py-3.5 rounded-xl text-sm shadow-lg transition flex items-center justify-center gap-2">
                {otpSent ? (
                  <>
                    <Check size={18} /> {t("Verify OTP & Open Dashboard", "ओटीपी सत्यापित कर आगे बढ़ें", "ਓਟੀਪੀ ਤਸਦੀਕ ਕਰੋ ਅਤੇ ਸ਼ੁਰੂ ਕਰੋ")}
                  </>
                ) : (
                  <>
                    <Sparkles size={18} /> {t("Send OTP (Instant Demo)", "ओटीपी भेजें (डेमो लॉग इन)", "ਓਟੀਪੀ ਭੇਜੋ (ਡੈਮੋ ਲੌਗ ਇਨ)")}
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <button 
                  type="button" 
                  onClick={() => setAuthTab('REGISTER')}
                  className="text-xs text-emerald-700 font-bold hover:underline">
                  {t("Don't have an account? Register as New Farmer →", "खाता नहीं है? नया किसान पंजीकरण करें →", "ਖਾਤਾ ਨਹੀਂ ਹੈ? ਨਵਾਂ ਕਿਸਾਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕਰੋ →")}
                </button>
              </div>
            </form>
          )}

          {/* TAB B: REGISTRATION */}
          {authTab === 'REGISTER' && (
            <form onSubmit={handleRegister} className="p-5 space-y-3.5 max-h-[460px] overflow-y-auto">
              <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-[11px] text-amber-900 flex items-start gap-2">
                <ShieldCheck size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span>
                  {t(
                    "Government e-NAM & PM-KISAN database auto-link for direct DBT grain payments.",
                    "सरकारी ई-नाम व पीएम-किसान डेटाबेस से प्रत्यक्ष बैंक ट्रांसफर (DBT) हेतु लिंक।",
                    "ਸਰਕਾਰੀ ਈ-ਨਾਮ ਅਤੇ ਪੀਐਮ-ਕਿਸਾਨ ਖਾਤੇ ਨਾਲ ਸਿੱਧੇ ਭੁਗਤਾਨ (DBT) ਲਈ ਲਿੰਕ।"
                  )}
                </span>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                  {t("Farmer Full Name", "किसान का पूरा नाम", "ਕਿਸਾਨ ਦਾ ਪੂਰਾ ਨਾਮ")} *
                </label>
                <input 
                  type="text"
                  value={regForm.name}
                  onChange={e => setRegForm({ ...regForm, name: e.target.value })}
                  placeholder="Gurpreet Singh"
                  className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    {t("Mobile No.", "मोबाइल नं.", "ਮੋਬਾਈਲ ਨੰ.")} *
                  </label>
                  <input 
                    type="tel"
                    value={regForm.phone}
                    onChange={e => setRegForm({ ...regForm, phone: e.target.value })}
                    placeholder="9876543210"
                    className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    {t("Aadhaar Number", "आधार क्रमांक", "ਆਧਾਰ ਨੰਬਰ")}
                  </label>
                  <input 
                    type="text"
                    value={regForm.aadhaar}
                    onChange={e => setRegForm({ ...regForm, aadhaar: e.target.value })}
                    placeholder="XXXX-XXXX-1234"
                    className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    {t("PM-KISAN Reg. ID", "पीएम-किसान आईडी", "ਪੀਐਮ-ਕਿਸਾਨ ਆਈਡੀ")}
                  </label>
                  <input 
                    type="text"
                    value={regForm.pmKisanId}
                    onChange={e => setRegForm({ ...regForm, pmKisanId: e.target.value })}
                    placeholder="PB-PK-9821"
                    className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    {t("Landholding (Ha)", "जमीन (हेक्टेयर)", "ਜ਼ਮੀਨ (ਹੈਕਟੇਅਰ)")} *
                  </label>
                  <input 
                    type="number"
                    step="0.1"
                    value={regForm.landSizeHa}
                    onChange={e => setRegForm({ ...regForm, landSizeHa: e.target.value })}
                    placeholder="1.2"
                    className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                  {t("Farmer Category (Fair-Share Priority)", "किसान श्रेणी (प्राथमिकता कोटा)", "ਕਿਸਾਨ ਸ਼੍ਰੇਣੀ (ਤਰਜੀਹੀ ਕੋਟਾ)")}
                </label>
                <select 
                  value={regForm.landCategory}
                  onChange={e => setRegForm({ ...regForm, landCategory: e.target.value as any })}
                  className="w-full p-2.5 border border-emerald-400 bg-emerald-50/50 rounded-xl text-xs font-bold text-emerald-950">
                  <option value="MARGINAL">★ Small & Marginal (&lt; 2 Hectares) - Express Priority Lane</option>
                  <option value="MEDIUM">Medium Farmer (2 - 10 Hectares) - General Gate Lane</option>
                  <option value="LARGE">Large Commercial Farmer (&gt; 10 Hectares) - Bulk Lane</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    {t("District (Punjab / Region)", "जिला", "ਜ਼ਿਲ੍ਹਾ (ਪੰਜਾਬ)")}
                  </label>
                  <select 
                    value={regForm.district}
                    onChange={e => setRegForm({ ...regForm, district: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold">
                    <option value="Ludhiana">Ludhiana (ਲੁਧਿਆਣਾ / ਖੰਨਾ)</option>
                    <option value="Patiala">Patiala (ਪਟਿਆਲਾ)</option>
                    <option value="Sangrur">Sangrur (ਸੰਗਰੂਰ)</option>
                    <option value="Bathinda">Bathinda (ਬਠਿੰਡਾ)</option>
                    <option value="Jalandhar">Jalandhar (ਜਲੰਧਰ)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    {t("Village / Taluka", "गांव / तहसील", "ਪਿੰਡ / ਤਹਿਸੀਲ")}
                  </label>
                  <input 
                    type="text"
                    value={regForm.village}
                    onChange={e => setRegForm({ ...regForm, village: e.target.value })}
                    placeholder="Samrala, Khanna"
                    className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    {t("Transport Vehicle", "परिवहन वाहन", "ਵਾਹਨ ਕਿਸਮ")}
                  </label>
                  <select 
                    value={regForm.vehicleType}
                    onChange={e => setRegForm({ ...regForm, vehicleType: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold">
                    <option value="Tractor Trolley">Tractor Trolley (ਟਰੈਕਟਰ-ਟਰਾਲੀ)</option>
                    <option value="Pickup / Bolero">Pickup / Bolero (ਪਿਕਅੱਪ)</option>
                    <option value="10-Wheeler Truck">10-Wheeler Truck (ਟਰੱਕ)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">
                    {t("Vehicle Number", "गाड़ी नंबर", "ਗੱਡੀ ਨੰਬਰ")}
                  </label>
                  <input 
                    type="text"
                    value={regForm.vehicleNo}
                    onChange={e => setRegForm({ ...regForm, vehicleNo: e.target.value.toUpperCase() })}
                    placeholder="PB10TA9981"
                    className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-mono font-bold"
                    required
                  />
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl space-y-2">
                <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                  <IndianRupee size={14} className="text-emerald-700" />
                  <span>{t("DBT Bank Account for Grain Payout", "डीबीटी बैंक खाता (सीधा भुगतान)", "ਡੀਬੀਟੀ ਬੈਂਕ ਖਾਤਾ (ਸਿੱਧਾ ਭੁਗਤਾਨ)")}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="text"
                    value={regForm.bankName}
                    onChange={e => setRegForm({ ...regForm, bankName: e.target.value })}
                    placeholder="Bank Name (e.g. PNB)"
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs"
                  />
                  <input 
                    type="text"
                    value={regForm.accountNo}
                    onChange={e => setRegForm({ ...regForm, accountNo: e.target.value })}
                    placeholder="Account Number"
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs font-mono"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full shimmer-btn text-slate-950 font-black py-3.5 rounded-xl text-sm shadow-xl transition flex items-center justify-center gap-2">
                <CheckCircle size={18} />
                {t("Complete Registration & Enter", "पंजीकरण पूर्ण करें व शुरू करें", "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪੂਰੀ ਕਰੋ ਅਤੇ ਸ਼ੁਰੂ ਕਰੋ")}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="text-center pt-2 text-[10px] text-slate-400">
        © National Agriculture Market (e-NAM) • KISAN-Q Smart Mandi System
      </div>
    </div>
  );

  // ==========================================
  // VIEW 2: FARMER DASHBOARD
  // ==========================================
  const DashboardView = () => (
    <div className="pb-24 bg-slate-100 min-h-screen">
      {/* Top Tricolor Strip */}
      <div className="tricolor-bar"></div>

      {/* Official Government e-NAM Header */}
      <header className="bg-gradient-to-r from-emerald-950 via-emerald-800 to-teal-900 text-white p-4 rounded-b-3xl shadow-xl relative">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-2.5">
            <img src="/kisan_q_icon.svg" alt="KISAN-Q Logo" className="w-8 h-8 rounded-xl shadow-md border border-amber-400/60 flex-shrink-0" />
            <div>
              <p className="text-[9px] text-emerald-200 uppercase tracking-widest font-bold">National Agriculture Market</p>
              <h3 className="text-xs font-black text-white">KISAN<span className="text-amber-400">-Q</span></h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Live Clock */}
            <div className="bg-emerald-950/80 px-2 py-1 rounded-lg border border-emerald-700/60 text-[10px] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-amber-300 font-bold">{currentTime}</span>
            </div>

            {/* Lang switcher */}
            <div className="flex bg-emerald-950/90 rounded-lg p-0.5 text-[10px] font-bold border border-emerald-700">
              <button onClick={() => setLang('EN')} className={`px-1.5 py-0.5 rounded ${lang === 'EN' ? 'bg-emerald-600 text-white' : 'text-slate-300'}`}>EN</button>
              <button onClick={() => setLang('HI')} className={`px-1.5 py-0.5 rounded ${lang === 'HI' ? 'bg-emerald-600 text-white' : 'text-slate-300'}`}>HI</button>
              <button onClick={() => setLang('PA')} className={`px-1.5 py-0.5 rounded ${lang === 'PA' ? 'bg-emerald-600 text-white' : 'text-slate-300'}`}>ਪੰਜਾਬੀ</button>
            </div>

            {/* Demo Controller Bell */}
            <button 
              onClick={() => setShowDemoControls(!showDemoControls)}
              className="relative p-2 bg-emerald-700 hover:bg-emerald-600 rounded-full transition shadow"
              title="Demo Simulator">
              <Bell size={16} />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-amber-400 rounded-full"></span>
              )}
            </button>
          </div>
        </div>

        {/* Farmer Welcome Profile Card with Real Photo */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shadow-md">
              <img src="/images/farmer_token.jpg" alt="Farmer Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-lg font-black">{farmer.name}</h2>
                <span className="bg-emerald-400/20 text-emerald-300 text-[9px] px-1.5 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-0.5">
                  <CheckCircle size={10} /> KYC Verified
                </span>
              </div>
              <p className="text-[11px] text-emerald-200">
                {farmer.village} • {farmer.district}, {farmer.state}
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded shadow">
              {farmer.landCategory === 'MARGINAL' ? '★ PRIORITY (<2 Ha)' : 'GENERAL TIER'}
            </span>
            <p className="text-[10px] text-emerald-300 font-mono mt-0.5">{farmer.vehicleNo}</p>
          </div>
        </div>
      </header>

      {/* CONTINUOUS RUNNING BREAKING NEWS MARQUEE (e-NAM Style) */}
      <div className="bg-slate-900 text-amber-300 text-[11px] font-bold py-1.5 px-3 overflow-hidden border-b border-amber-500/40 flex items-center">
        <span className="bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded mr-2 flex-shrink-0 animate-pulse">
          LIVE TICKER
        </span>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="animate-marquee">
            🌾 Wheat (ਕਣਕ) MSP ₹2,275/Qtl ▲ &nbsp;&bull;&nbsp; 
            🍚 Paddy (ਝੋਨਾ) MSP ₹2,300/Qtl ▲ &nbsp;&bull;&nbsp; 
            🌻 Mustard (ਸਰ੍ਹੋਂ) ₹5,650/Qtl ▲ &nbsp;&bull;&nbsp; 
            🚜 Khanna Mandi Gate 1: 14 min wait &nbsp;&bull;&nbsp; 
            ⛈️ IMD Doppler Radar: Clear weather across Punjab APMC yards &nbsp;&bull;&nbsp; 
            💰 1.77+ Crore Farmers paid via e-NAM PFMS Direct Benefit Transfer &nbsp;&bull;&nbsp; 
            🏛️ 1,361+ Mandis Integrated Nationwide
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-4 space-y-4">
        
        {/* Active Booking Card OR Book Slot CTA */}
        {booking && booking.status !== 'PAID' ? (
          <div className="bg-white rounded-3xl shadow-xl border-2 border-emerald-500/40 p-4 relative overflow-hidden pulse-glow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  {t("Active Mandi Token", "सक्रिय मंडी टोकन", "ਸਰਗਰਮ ਮੰਡੀ ਟੋਕਨ")}
                </span>
                <h3 className="text-3xl font-black text-emerald-800 font-mono">{booking.token}</h3>
              </div>
              <span className="bg-amber-100 text-amber-900 border border-amber-400 px-3 py-1 rounded-full text-xs font-black animate-pulse flex items-center gap-1 shadow-sm">
                <Clock size={12} />
                {booking.status.replace(/_/g, ' ')}
              </span>
            </div>

            <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 mb-3 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">{t("Produce", "फसल", "ਫਸਲ")}:</span>
                <span className="font-bold text-slate-900">{booking.produce} ({booking.quantityQtl} Qtl)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t("Procurement Centre", "खरीद केंद्र", "ਖਰੀਦ ਕੇਂਦਰ")}:</span>
                <span className="font-bold text-slate-900">{booking.centre}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t("Assigned Gate & Slot", "गेट व समय", "ਗੇਟ ਅਤੇ ਸਮਾਂ")}:</span>
                <span className="font-bold text-emerald-700">{booking.gate} • {booking.slot}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setView('QUEUE')}
                className="bg-emerald-700 hover:bg-emerald-800 text-white py-2.5 rounded-xl font-bold text-xs flex justify-center items-center gap-1.5 shadow transition">
                <Clock size={15} /> {t("Live Queue Tracker", "लाइव कतार देखें", "ਲਾਈਵ ਕਤਾਰ ਦੇਖੋ")}
              </button>
              <button 
                onClick={() => setShowDemoControls(true)}
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 py-2.5 rounded-xl font-black text-xs flex justify-center items-center gap-1 shadow transition">
                <PlayCircle size={15} /> {t("Advance State", "स्थिति आगे बढ़ाएं", "ਅਗਲਾ ਪੜਾਅ")}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-md p-6 text-center border border-slate-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Calendar size={32} />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-1">
              {t("No Upcoming Mandi Visit", "कोई आगामी मंडी यात्रा नहीं", "ਕੋਈ ਆਉਣ ਵਾਲੀ ਮੰਡੀ ਫੇਰੀ ਨਹੀਂ")}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {t(
                "Book your grain slot in advance to avoid 18-hour highway tractor traffic.",
                "18 घंटे के ट्रैफिक जाम से बचने के लिए अभी समय स्लॉट बुक करें।",
                "ਸੜਕੀ ਜਾਮ ਤੋਂ ਬਚਣ ਲਈ ਆਪਣਾ ਮੰਡੀ ਸਲਾਟ ਪਹਿਲਾਂ ਤੋਂ ਬੁੱਕ ਕਰੋ।"
              )}
            </p>
            <button 
              onClick={() => setView('BOOKING')}
              className="w-full shimmer-btn text-slate-950 py-3.5 rounded-xl font-black text-sm shadow-lg transition flex items-center justify-center gap-2">
              <Calendar size={18} />
              {t("Book a Mandi Slot Now", "नया मंडी स्लॉट बुक करें", "ਨਵਾਂ ਮੰਡੀ ਸਲਾਟ ਬੁੱਕ ਕਰੋ")}
            </button>
          </div>
        )}

        {/* Live Mandi MSP Price Board with Trends */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-xs font-black uppercase text-slate-800 flex items-center gap-1.5">
              <Activity size={14} className="text-emerald-600" />
              {t("e-NAM Daily Mandi MSP Benchmarks", "आज का सरकारी न्यूनतम समर्थन मूल्य (MSP)", "ਅੱਜ ਦਾ ਸਰਕਾਰੀ ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ (MSP)")}
            </h4>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
              Daily Live
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {CROPS.slice(0, 3).map(c => (
              <div key={c.id} className="bg-slate-50 p-2.5 rounded-2xl border border-slate-200 text-center hover:border-emerald-400 transition shadow-sm">
                <span className="text-xl">{c.icon}</span>
                <p className="text-[11px] font-bold text-slate-900 truncate mt-1">
                  {lang === 'PA' ? c.namePa.split(' ')[0] : lang === 'HI' ? c.nameHi : c.nameEn.split(' ')[0]}
                </p>
                <p className="text-xs font-black text-emerald-700">₹{c.msp.toLocaleString()}</p>
                <span className="text-[9px] font-bold text-emerald-600">{c.change}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Action Navigation Grid */}
        <h4 className="text-xs font-black uppercase text-slate-600 px-1 pt-1">
          {t("e-NAM Mandi Services", "ई-नाम मंडी सेवाएं", "ਈ-ਨਾਮ ਮੰਡੀ ਸੇਵਾਵਾਂ")}
        </h4>
        <div class="grid grid-cols-3 gap-2.5">
          <button 
            onClick={() => setView('BOOKING')}
            className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center gap-1.5 hover:border-emerald-500 hover:shadow-md transition group">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition shadow-inner">
              <Calendar size={20} />
            </div>
            <span className="text-[11px] font-bold text-slate-800">{t("New Slot", "नई बुकिंग", "ਨਵੀਂ ਬੁਕਿੰਗ")}</span>
          </button>

          <button 
            onClick={() => setView('OFFERS')}
            className="bg-gradient-to-br from-amber-50 to-amber-100 p-3 rounded-2xl shadow-sm border-2 border-amber-400 flex flex-col items-center gap-1.5 hover:shadow-md transition group relative overflow-hidden">
            <span className="absolute top-1 right-1 bg-red-600 text-white text-[8px] font-black px-1 rounded-full animate-bounce">NEW</span>
            <div className="w-10 h-10 bg-amber-400 text-slate-950 rounded-xl flex items-center justify-center group-hover:scale-110 transition shadow-inner">
              <Gift size={20} />
            </div>
            <span className="text-[11px] font-black text-amber-950">{t("Mandi Offers", "मंडी ऑफर", "ਮੰਡੀ ਆਫਰ")}</span>
          </button>

          <button 
            onClick={() => setView('QUEUE')}
            disabled={!booking}
            className={`bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center gap-1.5 transition group ${!booking ? 'opacity-50' : 'hover:border-emerald-500 hover:shadow-md'}`}>
            <div className="w-10 h-10 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition shadow-inner">
              <Clock size={20} />
            </div>
            <span className="text-[11px] font-bold text-slate-800">{t("Live Queue", "कतार", "ਕਤਾਰ")}</span>
          </button>

          <button 
            onClick={() => setView('PAYMENT')}
            className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center gap-1.5 hover:border-emerald-500 hover:shadow-md transition group">
            <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition shadow-inner">
              <IndianRupee size={20} />
            </div>
            <span className="text-[11px] font-bold text-slate-800">{t("DBT Pay", "भुगतान", "ਭੁਗਤਾਨ")}</span>
          </button>

          <button 
            onClick={() => setView('GALLERY')}
            className="col-span-2 bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center gap-3 hover:border-emerald-500 hover:shadow-md transition group">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition shadow-inner flex-shrink-0">
              <ImageIcon size={20} />
            </div>
            <div className="text-left">
              <span className="text-[11px] font-black text-slate-900 block">{t("APMC Mandi Photos & QC Labs", "मंडी फोटो व लैब", "ਮੰਡੀ ਫੋਟੋਆਂ ਤੇ ਲੈਬ")}</span>
              <span className="text-[10px] text-slate-500">8 Pillars of Modern Mandi Infra</span>
            </div>
          </button>
        </div>

        {/* Real Ground APMC Mandi Infrastructure Slider Carousel with Slide Effect */}
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden border-2 border-slate-800 shadow-xl relative group">
          <div className="relative h-44 w-full overflow-hidden">
            <div 
              className="flex h-full w-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {GALLERY_ITEMS.map((item, idx) => (
                <div key={idx} className="relative h-full w-full flex-shrink-0">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-emerald-600/90 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full backdrop-blur flex items-center gap-1 shadow">
                    <ShieldCheck size={12} /> Pillar #{idx + 1} • {t("APMC Verified", "एपीएमसी प्रमाणित", "ਮੰਡੀ ਪ੍ਰਮਾਣਿਤ")}
                  </div>
                  <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
                    <div className="max-w-[75%]">
                      <p className="text-amber-400 font-mono text-[9px] font-bold uppercase tracking-wider">Khanna Mandi Yard</p>
                      <h5 className="text-xs sm:text-sm font-black text-white truncate">{t(item.title, undefined, item.titlePa)}</h5>
                    </div>
                    <button 
                      onClick={() => setView('GALLERY')}
                      className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow">
                      {t("View", "देखें", "ਦੇਖੋ")} <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Arrow Controls */}
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveSlide(prev => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 hover:bg-emerald-600 text-white flex items-center justify-center border border-slate-700 z-10 transition">
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveSlide(prev => (prev + 1) % GALLERY_ITEMS.length); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/70 hover:bg-emerald-600 text-white flex items-center justify-center border border-slate-700 z-10 transition">
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Dots Indicator & Features bar */}
          <div className="p-2.5 bg-slate-950/90 flex items-center justify-between border-t border-slate-800 text-[11px]">
            <div className="flex items-center gap-1.5">
              {GALLERY_ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-5 bg-emerald-400' : 'w-1.5 bg-slate-600'}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-slate-400 font-mono font-bold">
              {activeSlide + 1} / {GALLERY_ITEMS.length} Pillars
            </span>
          </div>
        </div>

        {/* Live NewsAPI Agriculture News Card */}
        {newsList.length > 0 && (
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 space-y-2.5">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h4 className="text-xs font-black uppercase text-slate-800 flex items-center gap-1.5">
                <Newspaper size={14} className="text-emerald-600" />
                {t("Live Mandi Market News", "लाइव मंडी समाचार", "ਲਾਈਵ ਮੰਡੀ ਖਬਰਾਂ")}
              </h4>
              <span className="text-[9px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span> NewsAPI Live
              </span>
            </div>
            <div className="space-y-2">
              {newsList.slice(0, 2).map((art, idx) => (
                <a 
                  key={idx} 
                  href={art.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 p-2 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-100 transition group">
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <img src={art.urlToImage || '/images/mandi_entry_gate.jpg'} alt="" className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition line-clamp-1">
                      {art.title}
                    </p>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {art.source}
                    </span>
                  </div>
                  <ChevronRight size={14} className="text-slate-400 group-hover:text-emerald-600 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );

  // ==========================================
  // VIEW 3: 4-STEP BOOKING WIZARD
  // ==========================================
  const BookingView = () => {
    const [step, setStep] = useState(1);
    const [selectedCrop, setSelectedCrop] = useState(CROPS[0]);
    const [quantity, setQuantity] = useState('10');
    const [selectedCentre, setSelectedCentre] = useState(CENTRES[0]);
    const [selectedSlot, setSelectedSlot] = useState(SLOTS[1]);

    const handleConfirmBooking = () => {
      const qtl = parseFloat(quantity) || 10;
      const payout = qtl * selectedCrop.msp;
      const tokenNum = 'KQ-' + Math.floor(Math.random() * 900 + 100);
      
      const newBooking: Booking = {
        id: 'BKG-' + Math.floor(Math.random() * 9000 + 1000),
        token: tokenNum,
        produce: selectedCrop.nameEn,
        mspPerQtl: selectedCrop.msp,
        quantityQtl: qtl,
        centre: selectedCentre.nameEn,
        date: 'Tomorrow',
        slot: selectedSlot,
        gate: farmer.landCategory === 'MARGINAL' ? 'Gate 1 (Smallholder Express)' : 'Gate 2 (General Entry)',
        weighbridge: 'WB-01 (Entry Gross)',
        status: 'BOOKED',
        queuePosition: selectedCentre.queue,
        estWait: selectedCentre.wait,
        isFairSharePriority: farmer.landCategory === 'MARGINAL',
        grossWeightMT: (qtl * 0.1) + 4.2,
        tareWeightMT: 4.2,
        netWeightMT: qtl * 0.1,
        moisturePercent: 11.2,
        paymentAmount: payout,
        txnId: 'TXN-DBT-2026-' + Math.floor(Math.random() * 900000 + 100000),
        bookedAt: 'Just Now'
      };

      setBooking(newBooking);
      addNotification("Slot booked! Token " + tokenNum + " generated for " + selectedCrop.nameEn);

      // Fast2SMS Gateway integration - Dispatches official e-NAM SMS Token
      fetch('/api/send-sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: farmer.phone,
          message: `Kisan Q: Token ${tokenNum} confirmed for ${farmer.name}. Crop: ${selectedCrop.nameEn}, ${quantity} Qtl. Gate: ${newBooking.gate}, Slot: ${selectedSlot}. Track: mandi.gov.in`
        })
      }).catch(err => console.log('SMS dispatch notice:', err));

      setView('QUEUE');
    };

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col pb-20">
        <div className="tricolor-bar"></div>

        <header className="bg-white p-4 border-b border-slate-200 flex items-center justify-between shadow-sm sticky top-0 z-20">
          <div className="flex items-center space-x-3">
            <button onClick={() => setView('DASHBOARD')} className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100">
              <ChevronRight className="rotate-180" size={20} />
            </button>
            <h2 className="font-extrabold text-base text-slate-900">
              {t("Book Mandi Arrival Slot", "मंडी स्लॉट बुक करें", "ਮੰਡੀ ਸਲਾਟ ਬੁਕਿੰਗ")}
            </h2>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Step {step} of 4
          </span>
        </header>

        {/* Step Progress Bar */}
        <div className="px-4 pt-3 pb-1">
          <div className="flex gap-1.5">
            {[1, 2, 3, 4].map(i => (
              <div 
                key={i} 
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  step >= i ? 'bg-emerald-600 shadow-sm' : 'bg-slate-200'
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Step 1: Crop Selection */}
        {step === 1 && (
          <div className="p-4 flex-1 space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900">
              {t("1. Select Grain / Commodity", "1. अपनी फसल चुनें", "੧. ਆਪਣੀ ਫਸਲ ਚੁਣੋ")}
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {CROPS.map(crop => (
                <button
                  key={crop.id}
                  onClick={() => { setSelectedCrop(crop); setStep(2); }}
                  className={`p-4 rounded-3xl border text-left transition-all duration-200 shadow-sm flex flex-col justify-between hover:scale-[1.02] ${
                    selectedCrop.id === crop.id 
                      ? 'border-emerald-600 bg-emerald-50/90 ring-2 ring-emerald-500 shadow-md' 
                      : 'border-slate-200 bg-white hover:border-emerald-300'
                  }`}>
                  <div className="text-3xl mb-1">{crop.icon}</div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 leading-tight">
                      {lang === 'HI' ? crop.nameHi : lang === 'PA' ? crop.namePa : crop.nameEn}
                    </h4>
                    <p className="text-sm font-black text-emerald-700 mt-1">₹{crop.msp.toLocaleString()}</p>
                    <span className="text-[10px] font-bold text-emerald-600">{crop.change}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Quantity */}
        {step === 2 && (
          <div className="p-4 flex-1 space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900">
              {t("2. Estimated Grain Quantity (Quintals)", "2. अनुमानित मात्रा (क्विंटल)", "੨. ਅੰਦਾਜ਼ਨ ਮਾਤਰਾ (ਕੁਇੰਟਲ)")}
            </h3>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md text-center">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">{selectedCrop.nameEn}</span>
              <div className="my-4">
                <input 
                  type="number"
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                  className="w-40 text-center text-5xl font-black font-mono border-b-2 border-emerald-600 focus:outline-none p-1 text-slate-900"
                  min="1"
                />
                <span className="text-sm font-bold text-slate-400 ml-2">Quintals</span>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {['5', '10', '20', '50'].map(q => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setQuantity(q)}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold hover:bg-emerald-50 hover:border-emerald-500 transition">
                    {q} Qtl
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">
                  {t("Est. Govt MSP Payout", "अनुमानित सरकारी भुगतान", "ਅੰਦਾਜ਼ਨ ਸਰਕਾਰੀ ਭੁਗਤਾਨ")}
                </span>
                <h4 className="text-3xl font-black text-emerald-900 font-mono">
                  ₹{((parseFloat(quantity) || 0) * selectedCrop.msp).toLocaleString()}
                </h4>
              </div>
              <div className="text-right text-[11px] text-emerald-700">
                Direct DBT Credit to<br /><strong>{farmer.bankName}</strong>
              </div>
            </div>

            <button 
              onClick={() => setStep(3)}
              className="w-full shimmer-btn text-slate-950 font-black py-4 rounded-2xl text-sm shadow-xl transition">
              {t("Next: Choose Mandi Centre →", "आगे बढ़ें: खरीद केंद्र चुनें →", "ਅੱਗੇ: ਖਰੀਦ ਕੇਂਦਰ ਚੁਣੋ →")}
            </button>
          </div>
        )}

        {/* Step 3: Mandi Selection */}
        {step === 3 && (
          <div className="p-4 flex-1 space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900">
              {t("3. Choose Procurement Centre & Gate", "3. खरीद केंद्र व गेट चुनें", "੩. ਖਰੀਦ ਕੇਂਦਰ ਅਤੇ ਗੇਟ ਚੁਣੋ")}
            </h3>

            <div className="space-y-3">
              {CENTRES.map((centre) => (
                <div
                  key={centre.id}
                  onClick={() => setSelectedCentre(centre)}
                  className={`p-4 rounded-3xl border-2 transition cursor-pointer ${
                    selectedCentre.id === centre.id 
                      ? 'border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-400/40' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">
                        {lang === 'HI' ? centre.nameHi : lang === 'PA' ? centre.namePa : centre.nameEn}
                      </h4>
                      <p className="text-xs text-slate-500">{centre.distance} away from {farmer.village}</p>
                    </div>
                    {centre.recommended && (
                      <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold text-slate-700 pt-1">
                    <span className="flex items-center gap-1 text-amber-700">
                      <Clock size={13} /> Current Queue: {centre.queue} tractors
                    </span>
                    <span className="text-emerald-700">~{centre.wait} min turnaround</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-700 mb-2">
                {t("Preferred Arrival Time Window", "पसंदीदा आगमन समय", "ਪਸੰਦੀਦਾ ਪਹੁੰਚਣ ਦਾ ਸਮਾਂ")}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SLOTS.map(slot => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border text-center transition ${
                      selectedSlot === slot 
                        ? 'border-emerald-600 bg-emerald-700 text-white shadow' 
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}>
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setStep(4)}
              className="w-full shimmer-btn text-slate-950 font-black py-4 rounded-2xl text-sm shadow-xl transition mt-2">
              {t("Review & Confirm Token →", "समीक्षा करें व टोकन बनाएं →", "ਜਾਂਚ ਕਰੋ ਅਤੇ ਟੋਕਨ ਬਣਾਓ →")}
            </button>
          </div>
        )}

        {/* Step 4: Review & Generate */}
        {step === 4 && (
          <div className="p-4 flex-1 space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900">
              {t("4. Final Verification & QR Gate Pass", "4. सत्यापन व डिजिटल गेट पास", "੪. ਤਸਦੀਕ ਅਤੇ ਡਿਜੀਟਲ ਗੇਟ ਪਾਸ")}
            </h3>

            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-md space-y-3">
              <div className="flex justify-between border-b pb-2 text-xs">
                <span className="text-slate-500">Farmer:</span>
                <span className="font-bold text-slate-900">{farmer.name} ({farmer.phone})</span>
              </div>
              <div className="flex justify-between border-b pb-2 text-xs">
                <span className="text-slate-500">Produce & Qty:</span>
                <span className="font-bold text-slate-900">{selectedCrop.nameEn} • {quantity} Qtl</span>
              </div>
              <div className="flex justify-between border-b pb-2 text-xs">
                <span className="text-slate-500">Centre:</span>
                <span className="font-bold text-slate-900">{selectedCentre.nameEn}</span>
              </div>
              <div className="flex justify-between border-b pb-2 text-xs">
                <span className="text-slate-500">Arrival Window:</span>
                <span className="font-bold text-emerald-700">{selectedSlot}</span>
              </div>
              <div className="flex justify-between border-b pb-2 text-xs">
                <span className="text-slate-500">Assigned Gate:</span>
                <span className="font-bold text-slate-900">
                  {farmer.landCategory === 'MARGINAL' ? 'Gate 1 (Smallholder Priority)' : 'Gate 2 (General)'}
                </span>
              </div>
              <div className="flex justify-between text-xs pt-1">
                <span className="text-slate-500">Estimated Payout:</span>
                <span className="font-black text-base text-emerald-800">
                  ₹{((parseFloat(quantity) || 0) * selectedCrop.msp).toLocaleString()}
                </span>
              </div>
            </div>

            {farmer.landCategory === 'MARGINAL' && (
              <div className="bg-amber-50 border border-amber-300 rounded-2xl p-3.5 flex items-center gap-2.5 text-xs text-amber-950 shadow-sm">
                <ShieldCheck size={22} className="text-amber-600 flex-shrink-0" />
                <div>
                  <strong>Fair-Share Priority Active:</strong> Fast-track weighbridge entry granted for smallholder farmer under 2 hectares.
                </div>
              </div>
            )}

            <button 
              onClick={handleConfirmBooking}
              className="w-full shimmer-btn text-slate-950 font-black py-4 rounded-2xl text-base shadow-xl transition flex items-center justify-center gap-2">
              <QrCode size={22} />
              {t("Generate QR Gate Pass & Confirm", "क्यूआर गेट पास बनाएं व पुष्टि करें", "ਕਿਊਆਰ ਗੇਟ ਪਾਸ ਬਣਾਓ ਅਤੇ ਪੁਸ਼ਟੀ ਕਰੋ")}
            </button>
          </div>
        )}
      </div>
    );
  };

  // ==========================================
  // VIEW 4: LIVE QUEUE & MANDI PIPELINE
  // ==========================================
  const QueueView = () => {
    if (!booking) return (
      <div className="p-8 text-center min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center">
        <Clock size={48} className="text-slate-600 mb-3" />
        <p className="text-slate-400 mb-4">{t("No active booking to track.", "ट्रैक करने के लिए कोई सक्रिय बुकिंग नहीं है।", "ਟਰੈਕ ਕਰਨ ਲਈ ਕੋਈ ਸਰਗਰਮ ਬੁਕਿੰਗ ਨਹੀਂ ਹੈ।")}</p>
        <button onClick={() => setView('BOOKING')} className="bg-emerald-600 px-4 py-2 rounded-xl font-bold text-xs">
          {t("Book a Slot", "स्लॉट बुक करें", "ਸਲਾਟ ਬੁੱਕ ਕਰੋ")}
        </button>
      </div>
    );

    const stages = [
      { key: 'BOOKED', label: t('Slot Confirmed', 'स्लॉट पुष्ट', 'ਸਲਾਟ ਪੁਸ਼ਟ'), desc: t('Gate reserved', 'गेट आरक्षित', 'ਗੇਟ ਰਾਖਵਾਂ') },
      { key: 'CHECKED_IN', label: t('Checked In', 'चेक इन सम्पन्न', 'ਚੈੱਕ ਇਨ ਸੰਪੰਨ'), desc: t('RFID / QR Scanned at Gate', 'गेट पर आरएफआईडी / क्यूआर स्कैन', 'ਗੇਟ \'ਤੇ ਆਰਐਫਆਈਡੀ / ਕਿਊਆਰ ਸਕੈਨ') },
      { key: 'WEIGHING_GROSS', label: t('Gross Weighing', 'सकल तौल (Gross)', 'ਕੁੱਲ ਤੋਲ (Gross)'), desc: t('Weighbridge 1 (Tractor + Grain)', 'धर्मकांटा 1 (ट्रैक्टर + अनाज)', 'ਕੰਡਾ 1 (ਟਰੈਕਟਰ + ਅਨਾਜ)') },
      { key: 'QUALITY_LAB', label: t('Moisture QC Testing', 'नमी व गुणवत्ता जांच', 'ਨਮੀ ਤੇ ਗੁਣਵੱਤਾ ਜਾਂਚ'), desc: t('Lab analysis (≤12% FCI Pass)', 'लैब विश्लेषण (≤12% मानक पास)', 'ਲੈਬ ਵਿਸ਼ਲੇਸ਼ਣ (≤12% ਮਿਆਰੀ ਪਾਸ)') },
      { key: 'WEIGHING_TARE', label: t('Tare Weighing', 'खाली ट्रॉली तौल (Tare)', 'ਖਾਲੀ ਟਰਾਲੀ ਤੋਲ (Tare)'), desc: t('Empty trolley weight deduction', 'खाली वाहन का वजन घटाना', 'ਖਾਲੀ ਟਰਾਲੀ ਦਾ ਵਜ਼ਨ ਘਟਾਉਣਾ') },
      { key: 'PROCUREMENT_COMPLETED', label: t('Procurement Done', 'खरीद पूर्ण', 'ਖਰੀਦ ਮੁਕੰਮਲ'), desc: t('Grain transferred to covered silo', 'अनाज सुरक्षित साइलो में हस्तांतरित', 'ਅਨਾਜ ਸੁਰੱਖਿਅਤ ਸਾਈਲੋ ਵਿੱਚ ਜਮ੍ਹਾਂ') },
      { key: 'PAID', label: t('DBT Payment Done', 'डीबीटी भुगतान सफल', 'ਡੀਬੀਟੀ ਭੁਗਤਾਨ ਸਫਲ'), desc: t('Credited to linked bank account', 'सीधे बैंक खाते में राशि जमा', 'ਸਿੱਧਾ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਜਮ੍ਹਾਂ') },
    ];

    const currentStageIndex = stages.findIndex(s => s.key === booking.status);

    return (
      <div className="min-h-screen bg-slate-950 text-white p-4 pb-24">
        <div className="tricolor-bar mb-3"></div>

        <header className="flex justify-between items-center mb-4">
          <button onClick={() => setView('DASHBOARD')} className="text-slate-400 hover:text-white p-1">
            <ChevronRight className="rotate-180" size={24} />
          </button>
          <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest animate-pulse flex items-center gap-1.5 shadow-lg shadow-red-500/30">
            <span className="w-2 h-2 bg-white rounded-full"></span> {t("LIVE WEIGHBRIDGE TELEMETRY", "लाइव धर्मकांटा टेलीमेट्री", "ਲਾਈਵ ਕੰਡਾ ਟੈਲੀਮੈਟਰੀ")}
          </span>
        </header>

        {/* Big Digital Gate Token Card */}
        <div className="bg-slate-900 border-2 border-emerald-500/60 rounded-3xl p-5 text-center shadow-2xl relative overflow-hidden mb-4 pulse-glow">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
            {t("Mandi Digital Gate Token", "मंडी डिजिटल गेट टोकन", "ਮੰਡੀ ਡਿਜੀਟਲ ਗੇਟ ਟੋਕਨ")}
          </p>
          <h1 className="text-6xl font-black text-emerald-400 font-mono tracking-tight my-1">
            {booking.token}
          </h1>
          <p className="text-xs text-slate-300 font-medium">{booking.centre}</p>
          
          <div className="inline-block mt-3 px-3 py-1 bg-slate-800 rounded-full border border-slate-700 text-amber-300 font-mono text-xs font-bold">
            {booking.gate} • {booking.slot}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-left text-xs">
            <div>
              <span className="text-slate-500 block text-[10px]">{t("Produce", "फसल", "ਫਸਲ")}:</span>
              <span className="font-bold text-slate-200">{booking.produce} ({booking.quantityQtl} Qtl)</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">{t("Vehicle", "वाहन", "ਵਾਹਨ")}:</span>
              <span className="font-bold text-slate-200">{booking.vehicleNo}</span>
            </div>
          </div>
        </div>

        {/* Live Queue Depth & Estimated Wait */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800 text-center shadow-md">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
              {t("Tractors Ahead", "आगे कतार में ट्रैक्टर", "ਅੱਗੇ ਕਤਾਰ 'ਚ ਟਰੈਕਟਰ")}
            </p>
            <p className="text-3xl font-black text-white font-mono">{booking.queuePosition}</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800 text-center shadow-md">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
              {t("Est. Wait Time", "अनुमानित प्रतीक्षा", "ਅੰਦਾਜ਼ਨ ਉਡੀਕ ਸਮਾਂ")}
            </p>
            <p className="text-3xl font-black text-amber-400 font-mono">{booking.estWait} <span className="text-sm">{t("min", "मिनट", "ਮਿੰਟ")}</span></p>
          </div>
        </div>

        {/* Live Mandi Yard Gate Telemetry */}
        <div className="bg-slate-900/90 rounded-3xl p-4 border border-slate-800 shadow-md mb-4 space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-black text-white uppercase tracking-wide">
                {t("Live Mandi Yard Gate Telemetry", "मंडी गेट व लेन की स्थिति", "ਮੰਡੀ ਗੇਟ ਅਤੇ ਲੇਨ ਦੀ ਸਥਿਤੀ")}
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-700/50">
              {t("FLOW SMOOTH", "सुचारू प्रवाह", "ਨਿਰਵਿਘਨ")}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-950 p-3 rounded-2xl border border-emerald-500/30">
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                <span className="font-bold text-emerald-300">{t("Gate 1 (Smallholder Express)", "गेट 1 (लघु किसान एक्सप्रेस)", "ਗੇਟ 1 (ਛੋਟੇ ਕਿਸਾਨ ਐਕਸਪ੍ਰੈਸ)")}</span>
              </div>
              <p className="font-mono font-black text-sm text-white">3 {t("trolleys", "ट्रॉली", "ਟਰਾਲੀਆਂ")}</p>
              <p className="text-[10px] text-slate-400">~12 {t("min turnaround", "मिनट निकासी", "ਮਿੰਟ ਨਿਕਾਸੀ")}</p>
            </div>

            <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                <span className="font-bold text-slate-300">{t("Gate 2 (Heavy Commercial)", "गेट 2 (भारी वाणिज्यिक वाहन)", "ਗੇਟ 2 (ਵੱਡੇ ਵਪਾਰਕ ਟਰੱਕ)")}</span>
              </div>
              <p className="font-mono font-black text-sm text-amber-400">7 {t("trucks", "ट्रक", "ਟਰੱਕ")}</p>
              <p className="text-[10px] text-slate-400">~35 {t("min turnaround", "मिनट निकासी", "ਮਿੰਟ ਨਿਕਾਸੀ")}</p>
            </div>
          </div>
        </div>

        {/* Live Assaying & Moisture Meter */}
        <div className="bg-slate-900/90 rounded-3xl p-4 border border-slate-800 shadow-md mb-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Droplets size={16} className="text-cyan-400" />
              <span className="text-xs font-black text-white uppercase tracking-wide">
                {t("Scientific Assaying & Moisture QC", "वैज्ञानिक गुणवत्ता व नमी जांच", "ਵਿਗਿਆਨਕ ਗੁਣਵੱਤਾ ਤੇ ਨਮੀ ਜਾਂਚ")}
              </span>
            </div>
            <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-800/50">
              {t("FCI FAQ GRADE A", "एफसीआई ग्रेड ए पास", "ਐਫਸੀਆਈ ਗ੍ਰੇਡ ਏ ਪਾਸ")}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">{t("Moisture", "नमी", "ਨਮੀ")}</span>
              <span className="text-sm font-black text-emerald-400 font-mono">{booking.moisturePercent || 11.4}%</span>
              <span className="text-[9px] text-slate-500 block">≤ 12.0% {t("Safe", "सुरक्षित", "ਸੁਰੱਖਿਅਤ")}</span>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">{t("Foreign Matter", "अपद्रव्य", "ਬਾਹਰੀ ਕੂੜਾ")}</span>
              <span className="text-sm font-black text-emerald-400 font-mono">0.4%</span>
              <span className="text-[9px] text-slate-500 block">≤ 0.75% {t("Clean", "स्वच्छ", "ਸਾਫ਼")}</span>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">{t("Shriveled", "सिकुड़े दाने", "ਸੁੰਗੜੇ ਦਾਣੇ")}</span>
              <span className="text-sm font-black text-emerald-400 font-mono">1.1%</span>
              <span className="text-[9px] text-slate-500 block">≤ 2.0% {t("Passed", "पास", "ਪਾਸ")}</span>
            </div>
          </div>
        </div>

        {/* Assigned Silo & Yard Assistance */}
        <div className="bg-slate-900/90 rounded-3xl p-4 border border-slate-800 shadow-md mb-4 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Warehouse size={14} className="text-amber-400" />
              {t("Assigned Covered Silo Bay:", "आवंटित ढका हुआ साइलो शेड:", "ਅਲਾਟ ਕੀਤਾ ਸੁਰੱਖਿਅਤ ਸਾਈਲੋ ਸ਼ੈੱਡ:")}
            </span>
            <span className="font-bold text-amber-300 font-mono">{t("Bay #4 (Conveyor A-2)", "शेड #4 (कन्वेयर ए-2)", "ਸ਼ੈੱਡ #4 (ਕਨਵੇਅਰ ਏ-2)")}</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[11px]">
            <span className="text-slate-400 flex items-center gap-1.5">
              <PhoneCall size={13} className="text-emerald-400" />
              {t("Yard Incharge Hotline:", "मंडी यार्ड प्रभारी फोन:", "ਮੰਡੀ ਯਾਰਡ ਇੰਚਾਰਜ ਫੋਨ:")}
            </span>
            <span className="font-mono text-slate-300 font-bold">Er. Vikram Singh (+91 98140-55421)</span>
          </div>
        </div>

        {/* 7-Stage Live Procurement Pipeline */}
        <div className="bg-slate-900 rounded-3xl p-4 border border-slate-800 space-y-3 mb-5">
          <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">
            {t("Physical Mandi Pipeline Telemetry", "मंडी भौतिक खरीद प्रक्रिया स्थिति", "ਮੰਡੀ ਖਰੀਦ ਪ੍ਰਕਿਰਿਆ ਦੀ ਲਾਈਵ ਸਥਿਤੀ")}
          </h4>

          {stages.map((stage, idx) => {
            const isCompleted = currentStageIndex > idx || booking.status === 'PAID';
            const isCurrent = currentStageIndex === idx && booking.status !== 'PAID';

            return (
              <div key={stage.key} className="flex items-start gap-3">
                <div className="pt-0.5">
                  {isCompleted ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-md">
                      ✓
                    </div>
                  ) : isCurrent ? (
                    <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs animate-ping">
                      ●
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-slate-700 text-slate-600 flex items-center justify-center text-xs">
                      {idx + 1}
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h5 className={`text-xs font-bold ${isCurrent ? 'text-amber-400' : isCompleted ? 'text-white' : 'text-slate-500'}`}>
                    {stage.label}
                  </h5>
                  <p className="text-[11px] text-slate-400">{stage.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advance State CTA */}
        <div className="space-y-2">
          {booking.status === 'PAID' ? (
            <button 
              onClick={() => setView('PAYMENT')}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl text-sm shadow-xl transition flex items-center justify-center gap-2">
              <FileText size={18} /> {t("View Payment Receipt & Bank UTR", "भुगतान रसीद व बैंक यूटीआर देखें", "ਭੁਗਤਾਨ ਰਸੀਦ ਅਤੇ ਬੈਂਕ ਯੂਟੀਆਰ ਵੇਖੋ")}
            </button>
          ) : (
            <button 
              onClick={advanceQueue}
              className="w-full shimmer-btn text-slate-950 font-black py-4 rounded-2xl text-sm shadow-xl transition flex items-center justify-center gap-2">
              <PlayCircle size={18} />
              {t("Simulate Mandi Staff Next Step", "मंडी स्टाफ अगला कदम सिमुलेट करें", "ਮੰਡੀ ਸਟਾਫ ਅਗਲਾ ਕਦਮ ਸਿਮੂਲੇਟ ਕਰੋ")} ({booking.status})
            </button>
          )}
        </div>
      </div>
    );
  };

  // ==========================================
  // VIEW 5: DBT PAYMENT & OFFICIAL RECEIPT
  // ==========================================
  const PaymentView = () => {
    const PAST_SETTLEMENTS = [
      {
        id: 'PAY-2025-05-12',
        crop: t('Wheat (Kanak)', 'गेहूं (कनक)', 'ਕਣਕ'),
        date: '12 May 2025',
        qty: '85.00 Qtl',
        rate: '₹2,275 / Qtl',
        amount: 193375,
        utr: 'PFMS998342110291',
        status: t('DBT SETTLED', 'डीबीटी सफल', 'ਡੀਬੀਟੀ ਸਫਲ')
      },
      {
        id: 'PAY-2024-11-18',
        crop: t('Paddy (1121 Basmati)', 'धान (1121 बासमती)', 'ਝੋਨਾ (1121 ਬਾਸਮਤੀ)'),
        date: '18 Nov 2024',
        qty: '120.00 Qtl',
        rate: '₹3,850 / Qtl',
        amount: 462000,
        utr: 'PFMS887219904231',
        status: t('DBT SETTLED', 'डीबीटी सफल', 'ਡੀਬੀਟੀ ਸਫਲ')
      },
      {
        id: 'PAY-2024-03-24',
        crop: t('Mustard (Sarson)', 'सरसों', 'ਸਰ੍ਹੋਂ'),
        date: '24 Mar 2024',
        qty: '40.00 Qtl',
        rate: '₹5,650 / Qtl',
        amount: 226000,
        utr: 'PFMS776100234182',
        status: t('DBT SETTLED', 'डीबीटी सफल', 'ਡੀਬੀਟੀ ਸਫਲ')
      }
    ];

    return (
      <div className="min-h-screen bg-slate-100 p-4 pb-24 space-y-4">
        <div className="tricolor-bar mb-1"></div>

        <header className="flex items-center justify-between mb-2">
          <button onClick={() => setView('DASHBOARD')} className="p-1 text-slate-600 hover:bg-slate-200 rounded-lg">
            <ChevronRight className="rotate-180" size={22} />
          </button>
          <h2 className="font-extrabold text-base text-slate-900">
            {t("Direct Benefit Transfer (DBT) & Accounts", "डीबीटी बैंक भुगतान व रसीदें", "ਡੀਬੀਟੀ ਬੈਂਕ ਭੁਗਤਾਨ ਤੇ ਰਸੀਦਾਂ")}
          </h2>
          <div className="w-6"></div>
        </header>

        {/* Lifetime MSP Proceeds Summary Card */}
        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-5 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono tracking-widest text-emerald-300 uppercase font-bold">
              {t("LIFETIME MANDI MSP DISBURSEMENTS", "कुल मंडी एमएसपी भुगतान विवरण", "ਕੁੱਲ ਮੰਡੀ ਐਮਐਸਪੀ ਭੁਗਤਾਨ ਵੇਰਵਾ")}
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-400/40">
              100% {t("0% Middleman", "0% बिचौलिया", "0% ਵਿਚੋਲਾ")}
            </span>
          </div>
          <h3 className="text-3xl font-black font-mono text-amber-300 mb-1">₹8,81,375</h3>
          <p className="text-xs text-slate-300">
            {t("Directly credited to linked Aadhaar Bank Account via PFMS Treasury", "पीएफएमएस ट्रेजरी द्वारा सीधे आधार से जुड़े बैंक खाते में जमा", "ਪੀਐਫਐਮਐਸ ਖਜ਼ਾਨੇ ਰਾਹੀਂ ਸਿੱਧਾ ਆਧਾਰ ਲਿੰਕਡ ਬੈਂਕ ਖਾਤੇ 'ਚ ਜਮ੍ਹਾਂ")}
          </p>

          <div className="mt-4 pt-3 border-t border-emerald-800/80 grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <span className="text-[10px] text-emerald-200/70 block">{t("Total Grain", "कुल फसल", "ਕੁੱਲ ਫਸਲ")}</span>
              <span className="font-bold text-white font-mono">245.00 Qtl</span>
            </div>
            <div>
              <span className="text-[10px] text-emerald-200/70 block">{t("Settlements", "भुगतान", "ਭੁਗਤਾਨ")}</span>
              <span className="font-bold text-white font-mono">4 {t("Rounds", "चक्र", "ਗੇੜ")}</span>
            </div>
            <div>
              <span className="text-[10px] text-emerald-200/70 block">{t("Mandi Fee", "मंडी शुल्क", "ਮੰਡੀ ਫੀਸ")}</span>
              <span className="font-bold text-emerald-400 font-mono">₹0 {t("Free", "निशुल्क", "ਮੁਫ਼ਤ")}</span>
            </div>
          </div>
        </div>

        {/* DBT Banking Linkage Status Card */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b">
            <div className="flex items-center space-x-2">
              <ShieldCheck size={18} className="text-emerald-600" />
              <span className="text-xs font-black text-slate-900 uppercase">
                {t("NPCI Aadhaar Bank Linkage", "एनपीसीआई आधार बैंक सीडिंग स्थिति", "ਐਨਪੀਸੀਆਈ ਆਧਾਰ ਬੈਂਕ ਲਿੰਕ ਸਥਿਤੀ")}
              </span>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
              ✓ {t("ACTIVE & SEEDED", "सक्रिय व प्रमाणित", "ਸਰਗਰਮ ਤੇ ਪ੍ਰਮਾਣਿਤ")}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] text-slate-400 block">{t("Primary Bank", "प्राथमिक बैंक", "ਮੁੱਖ ਬੈਂਕ")}</span>
              <span className="font-bold text-slate-800">{farmer.bankName}</span>
              <span className="text-[10px] font-mono text-slate-500 block">**** {farmer.accountNo.slice(-4)}</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] text-slate-400 block">{t("PFMS Scheme Code", "पीएफएमएस योजना कोड", "ਪੀਐਫਐਮਐਸ ਸਕੀਮ ਕੋਡ")}</span>
              <span className="font-bold text-slate-800 font-mono">APMC-PB-KRN-04</span>
              <span className="text-[10px] text-emerald-600 font-bold block">{t("0% Deduction Guaranteed", "100% शून्य कटौती", "100% ਜ਼ੀਰੋ ਕਟੌਤੀ")}</span>
            </div>
          </div>
        </div>

        {/* Current Booking Payment (if available) */}
        {booking?.paymentAmount && (
          <div className="bg-white rounded-3xl shadow-xl border-2 border-emerald-500/40 overflow-hidden">
            <div className="bg-emerald-900 text-white p-5 text-center relative overflow-hidden">
              <div className="w-12 h-12 bg-emerald-500/20 text-amber-300 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-emerald-400/50 shadow-lg">
                <CheckCircle size={28} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-emerald-200 uppercase">
                {booking.status === 'PAID' ? t('CURRENT SLIP: DBT SUCCESSFUL', 'वर्तमान रसीद: डीबीटी भुगतान सफल', 'ਮੌਜੂਦਾ ਰਸੀਦ: ਡੀਬੀਟੀ ਭੁਗਤਾਨ ਸਫਲ') : t('PAYMENT IN PROCESSING', 'भुगतान प्रक्रियाधीन है', 'ਭੁਗਤਾਨ ਪ੍ਰਕਿਰਿਆ ਅਧੀਨ ਹੈ')}
              </span>
              <h3 className="text-3xl font-black my-1 font-mono">
                ₹{booking.paymentAmount.toLocaleString()}
              </h3>
              <p className="text-xs text-emerald-200">
                {booking.produce} ({booking.quantityQtl} {t("Quintals", "क्विंटल", "ਕੁਇੰਟਲ")}) • {booking.centre}
              </p>
            </div>

            <div className="p-4 space-y-2.5 text-xs">
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500">{t("Transaction ID (PFMS / DBT):", "लेनदेन आईडी (पीएफएमएस):", "ਲੈਣ-ਦੇਣ ਆਈਡੀ (ਪੀਐਫਐਮਐਸ):")}</span>
                <span className="font-mono font-bold text-slate-900">{booking.txnId}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500">{t("Beneficiary Farmer:", "लाभार्थी किसान:", "ਲਾਭਪਾਤਰੀ ਕਿਸਾਨ:")}</span>
                <span className="font-bold text-slate-900">{farmer.name}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500">{t("Govt MSP Rate Applied:", "लागू एमएसपी दर:", "ਲਾਗੂ ਐਮਐਸਪੀ ਦਰ:")}</span>
                <span className="font-bold text-emerald-700">₹{booking.mspPerQtl.toLocaleString()} / {t("Quintal", "क्विंटल", "ਕੁਇੰਟਲ")}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500">{t("Lab Moisture Reading:", "प्रयोगशाला नमी जांच:", "ਲੈਬ ਨਮੀ ਰਿਪੋਰਟ:")}</span>
                <span className="font-bold text-slate-900">{booking.moisturePercent || 11.4}% (≤12% {t("Standard", "मानक", "ਮਿਆਰੀ")})</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500">{t("Payment Mode:", "भुगतान का प्रकार:", "ਭੁਗਤਾਨ ਦਾ ਤਰੀਕਾ:")}</span>
                <span className="font-bold text-emerald-700">{t("e-NAM PFMS Direct Transfer", "ई-नाम पीएफएमएस प्रत्यक्ष बैंक ट्रांसफर", "ਈ-ਨਾਮ ਪੀਐਫਐਮਐਸ ਸਿੱਧਾ ਬੈਂਕ ਟਰਾਂਸਫਰ")}</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200">
              <button 
                onClick={() => alert(t("Official e-NAM Tax Invoice downloaded as PDF.", "आधिकारिक ई-नाम चालान पीडीएफ डाउनलोड हो गया।", "ਅਧਿਕਾਰਤ ਈ-ਨਾਮ ਚਲਾਨ ਪੀਡੀਐਫ ਡਾਊਨਲੋਡ ਹੋ ਗਿਆ।"))}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md transition">
                <Download size={15} /> {t("Download e-NAM Payment Slip (PDF)", "ई-नाम भुगतान रसीद डाउनलोड करें (PDF)", "ਈ-ਨਾਮ ਭੁਗਤਾਨ ਰਸੀਦ ਡਾਊਨਲੋਡ ਕਰੋ (PDF)")}
              </button>
            </div>
          </div>
        )}

        {/* Past Mandi Procurement Settlements (Audit Trail) */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b">
            <h4 className="text-xs font-black text-slate-900 uppercase">
              {t("Past DBT Procurement Settlements (Audit Trail)", "पूर्व डीबीटी खरीद भुगतान (ऑडिट विवरण)", "ਪਿਛਲੇ ਡੀਬੀਟੀ ਖਰੀਦ ਭੁਗਤਾਨ (ਆਡਿਟ ਵੇਰਵੇ)")}
            </h4>
            <span className="text-[10px] text-slate-500 font-semibold">{t("Verified PFMS Ledger", "सत्यापित पीएफएमएस लेजर", "ਪ੍ਰਮਾਣਿਤ ਪੀਐਫਐਮਐਸ ਖਾਤਾ")}</span>
          </div>

          <div className="space-y-2.5">
            {PAST_SETTLEMENTS.map((item) => (
              <div key={item.id} className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200 transition space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900">{item.crop}</span>
                  <span className="font-mono font-black text-xs text-emerald-700">₹{item.amount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>{item.qty} @ {item.rate}</span>
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center justify-between text-[10px] pt-1 border-t border-slate-200/60 font-mono">
                  <span className="text-slate-400">UTR: {item.utr}</span>
                  <span className="text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded-full">
                    ✓ {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => alert(t("Annual Fiscal Statement (FY 2024-25) generated.", "वार्षिक वित्तीय विवरण जनरेट हो गया।", "ਸਾਲਾਨਾ ਵਿੱਤੀ ਵੇਰਵਾ ਤਿਆਰ ਹੋ ਗਿਆ।"))}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition">
            <FileText size={14} /> {t("Download Annual Mandi Procurement Statement (PDF)", "वार्षिक मंडी खरीद विवरण डाउनलोड करें (PDF)", "ਸਾਲਾਨਾ ਮੰਡੀ ਖਰੀਦ ਵੇਰਵਾ ਡਾਊਨਲੋਡ ਕਰੋ (PDF)")}
          </button>
        </div>
      </div>
    );
  };

  // ==========================================
  // VIEW 6: FARMER PROFILE
  // ==========================================
  // ==========================================
  // VIEW 6: FARMER PROFILE
  // ==========================================
  const ProfileView = () => (
    <div className="min-h-screen bg-slate-100 p-4 pb-24 space-y-4">
      <div className="tricolor-bar mb-1"></div>

      <header className="flex items-center justify-between mb-2">
        <button onClick={() => setView('DASHBOARD')} className="p-1 text-slate-600 hover:bg-slate-200 rounded-lg">
          <ChevronRight className="rotate-180" size={22} />
        </button>
        <h2 className="font-extrabold text-base text-slate-900">
          {t("Farmer KYC & Digital Land Passbook", "किसान प्रोफाइल व डिजिटल भूमि पासबुक", "ਕਿਸਾਨ ਪ੍ਰੋਫਾਈਲ ਤੇ ਡਿਜੀਟਲ ਜ਼ਮੀਨ ਪਾਸਬੁੱਕ")}
        </h2>
        <div className="w-6"></div>
      </header>

      {/* Main Profile Identity Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center space-x-3 pb-3 border-b">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-600 shadow-md flex-shrink-0">
            <img src="/images/farmer_token.jpg" alt="Farmer" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-slate-900 text-base">{farmer.name}</h3>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                ✓ {t("KYC VERIFIED", "केवाईसी सत्यापित", "ਕੇਵਾਈਸੀ ਪ੍ਰਮਾਣਿਤ")}
              </span>
            </div>
            <p className="text-xs text-slate-500">{farmer.village}, {farmer.district}, {farmer.state}</p>
            <span className="inline-block mt-1 bg-amber-100 text-amber-900 text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg border border-amber-300">
              {farmer.pmKisanId}
            </span>
          </div>
        </div>

        {/* Basic Personal Details */}
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-500">{t("Mobile Number:", "मोबाइल नंबर:", "ਮੋਬਾਈਲ ਨੰਬਰ:")}</span>
            <span className="font-bold text-slate-800 font-mono">+91 {farmer.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t("Aadhaar Number:", "आधार संख्या:", "ਆਧਾਰ ਨੰਬਰ:")}</span>
            <span className="font-bold text-slate-800 font-mono">{farmer.aadhaar}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t("Primary Bank Account:", "प्राथमिक बैंक खाता:", "ਮੁੱਖ ਬੈਂਕ ਖਾਤਾ:")}</span>
            <span className="font-bold text-slate-800">{farmer.bankName} (**** {farmer.accountNo.slice(-4)})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t("IFSC Code:", "आईएफएससी कोड:", "ਆਈਐਫਐਸਸੀ ਕੋਡ:")}</span>
            <span className="font-bold text-slate-800 font-mono">{farmer.ifsc}</span>
          </div>
        </div>
      </div>

      {/* Digital Land Registry & Khasra / Khatoni Records */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b">
          <div className="flex items-center space-x-2">
            <Layers size={16} className="text-emerald-700" />
            <span className="text-xs font-black text-slate-900 uppercase">
              {t("Digital Land Records & Quota", "डिजिटल खसरा/खतौनी व मंडी कोटा", "ਡਿਜੀਟਲ ਖਸਰਾ/ਖਤੌਣੀ ਤੇ ਮੰਡੀ ਕੋਟਾ")}
            </span>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
            {t("Jamabandi Verified", "जमाबंदी सत्यापित", "ਜਮ੍ਹਾਂਬੰਦੀ ਪ੍ਰਮਾਣਿਤ")}
          </span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-500">{t("Khasra / Murabba Numbers:", "खसरा / मुरब्बा संख्या:", "ਖਸਰਾ / ਮੁਰੱਬਾ ਨੰਬਰ:")}</span>
            <span className="font-bold text-slate-800 font-mono">142/18, 142/19 (Samrala)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t("Certified Landholding:", "प्रमाणित भूमि रकबा:", "ਪ੍ਰਮਾਣਿਤ ਜ਼ਮੀਨ ਰਕਬਾ:")}</span>
            <span className="font-bold text-emerald-700">{farmer.landSizeHa} {t("Hectares", "हेक्टेयर", "ਹੈਕਟੇਅਰ")} ({farmer.landCategory})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t("Current Rabi Sown Crop:", "वर्तमान रबी बुवाई फसल:", "ਮੌਜੂਦਾ ਹਾੜ੍ਹੀ ਬੀਜੀ ਫਸਲ:")}</span>
            <span className="font-bold text-slate-800">{t("Wheat (PBW 826)", "गेहूं (पीबीडब्ल्यू 826)", "ਕਣਕ (ਪੀਬੀਡਬਲਿਊ 826)")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t("Total Seasonal Quota:", "कुल मौसमी खरीद कोटा:", "ਕੁੱਲ ਮੌਸਮੀ ਖਰੀਦ ਕੋਟਾ:")}</span>
            <span className="font-bold text-slate-800 font-mono">180.00 {t("Qtl", "क्विंटल", "ਕੁਇੰਟਲ")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t("Remaining Mandi Quota:", "शेष खरीद कोटा:", "ਬਾਕੀ ਖਰੀਦ ਕੋਟਾ:")}</span>
            <span className="font-bold text-emerald-700 font-mono">128.00 {t("Qtl", "क्विंटल", "ਕੁਇੰਟਲ")}</span>
          </div>
        </div>

        {/* Quota Progress Bar */}
        <div className="pt-2 border-t">
          <div className="flex justify-between text-[10px] text-slate-500 mb-1">
            <span>{t("Procurement Quota Consumed", "उपयोग किया गया कोटा", "ਵਰਤਿਆ ਗਿਆ ਕੋਟਾ")}</span>
            <span className="font-bold text-emerald-700">52 / 180 Qtl (28.8%)</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
            <div className="bg-emerald-600 h-full rounded-full w-[28.8%]"></div>
          </div>
        </div>
      </div>

      {/* Machinery & Mandi FastTag Asset Details */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b">
          <div className="flex items-center space-x-2">
            <Truck size={16} className="text-slate-700" />
            <span className="text-xs font-black text-slate-900 uppercase">
              {t("Machinery & Transport FastTag", "कृषि मशीनरी व मंडी फास्टटैग", "ਖੇਤੀ ਮਸ਼ੀਨਰੀ ਤੇ ਮੰਡੀ ਫਾਸਟਟੈਗ")}
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
            {t("GPS PAIRED", "जीपीएस संबद्ध", "ਜੀਪੀਐਸ ਲਿੰਕ")}
          </span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-500">{t("Primary Hauler Vehicle:", "प्राथमिक वाहन:", "ਮੁੱਖ ਵਾਹਨ:")}</span>
            <span className="font-bold text-slate-800">{farmer.vehicleType} (Swaraj 855 FE)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t("Registration Number:", "पंजीकरण संख्या:", "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰਬਰ:")}</span>
            <span className="font-mono font-bold text-slate-800">{farmer.vehicleNo}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t("APMC Mandi RFID FastTag:", "एपीएमसी आरएफआईडी फास्टटैग:", "ਮੰਡੀ ਆਰਐਫਆਈਡੀ ਫਾਸਟਟੈਗ:")}</span>
            <span className="font-mono font-bold text-emerald-700">#FT-PB-8849-2026</span>
          </div>
        </div>
      </div>

      {/* Active Government Schemes Linkages */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 space-y-2.5">
        <div className="flex items-center space-x-2 pb-2 border-b">
          <ShieldCheck size={16} className="text-emerald-700" />
          <span className="text-xs font-black text-slate-900 uppercase">
            {t("Verified Government Beneficiary Schemes", "संबद्ध सरकारी कल्याणकारी योजनाएं", "ਸਰਕਾਰੀ ਲਾਭਪਾਤਰੀ ਸਕੀਮਾਂ")}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 bg-emerald-50 rounded-2xl border border-emerald-200/80">
            <span className="font-bold text-emerald-950 block text-[11px]">{t("PM-KISAN Samman", "पीएम-किसान सम्मान", "ਪੀਐਮ-ਕਿਸਾਨ ਸਨਮਾਨ")}</span>
            <span className="text-[10px] text-emerald-700">{t("18th Installment Credited", "18वीं किस्त जमा", "18ਵੀਂ ਕਿਸ਼ਤ ਜਮ੍ਹਾਂ")}</span>
          </div>
          <div className="p-2.5 bg-cyan-50 rounded-2xl border border-cyan-200/80">
            <span className="font-bold text-cyan-950 block text-[11px]">{t("PM Fasal Bima (PMFBY)", "पीएम फसल बीमा", "ਪੀਐਮ ਫਸਲ ਬੀਮਾ")}</span>
            <span className="text-[10px] text-cyan-700">{t("Rabi Policy Active", "रबी बीमा सक्रिय", "ਹਾੜ੍ਹੀ ਬੀਮਾ ਸਰਗਰਮ")}</span>
          </div>
          <div className="p-2.5 bg-amber-50 rounded-2xl border border-amber-200/80">
            <span className="font-bold text-amber-950 block text-[11px]">{t("Soil Health Card", "मृदा स्वास्थ्य कार्ड", "ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ")}</span>
            <span className="text-[10px] text-amber-700">{t("Tested Dec 2024 (Grade A)", "जांच दिसंबर 2024 (ग्रेड ए)", "ਜਾਂਚ ਦਸੰਬਰ 2024 (ਗ੍ਰੇਡ ਏ)")}</span>
          </div>
          <div className="p-2.5 bg-purple-50 rounded-2xl border border-purple-200/80">
            <span className="font-bold text-purple-950 block text-[11px]">{t("Kisan Credit Card (KCC)", "किसान क्रेडिट कार्ड", "ਕਿਸਾਨ ਕ੍ਰੈਡਿਟ ਕਾਰਡ")}</span>
            <span className="text-[10px] text-purple-700">₹3,00,000 {t("Limit Active", "सीमा सक्रिय", "ਲਿਮਿਟ ਸਰਗਰਮ")}</span>
          </div>
        </div>
      </div>

      {/* Language Selection within Profile */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 space-y-2.5">
        <span className="text-xs font-black text-slate-900 uppercase block">
          {t("App Language Preference", "ऐप भाषा प्राथमिकता", "ਐਪ ਭਾਸ਼ਾ ਦੀ ਚੋਣ")}
        </span>
        <div className="grid grid-cols-3 gap-2">
          {(['EN', 'HI', 'PA'] as Lang[]).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`py-2 rounded-xl text-xs font-black border transition ${
                lang === l 
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}>
              {l === 'EN' ? 'English' : l === 'HI' ? 'हिंदी' : 'ਪੰਜਾਬੀ'}
            </button>
          ))}
        </div>
      </div>

      {/* Logout Action */}
      <div className="pt-2">
        <button 
          onClick={() => { setView('AUTH'); setAuthTab('LOGIN'); }}
          className="w-full bg-red-50 hover:bg-red-100 text-red-700 font-bold py-3.5 rounded-2xl text-xs flex items-center justify-center gap-1.5 transition border border-red-200">
          <LogOut size={16} /> {t("Log Out / Switch Farmer Account", "लॉग आउट करें / दूसरा किसान खाता चुनें", "ਲਾਗ ਆਉਟ ਕਰੋ / ਦੂਜਾ ਕਿਸਾਨ ਖਾਤਾ ਚੁਣੋ")}
        </button>
      </div>
    </div>
  );

  // ==========================================
  // VIEW 7: REAL MANDI PHOTO & QC GALLERY
  // ==========================================
  const GalleryView = () => (
    <div className="min-h-screen bg-slate-100 p-4 pb-24 space-y-4">
      <div className="tricolor-bar mb-1"></div>

      <header className="flex items-center justify-between mb-2">
        <button onClick={() => setView('DASHBOARD')} className="p-1 text-slate-600 hover:bg-slate-200 rounded-lg">
          <ChevronRight className="rotate-180" size={22} />
        </button>
        <h2 className="font-extrabold text-base text-slate-900">
          {t("APMC Infrastructure & QC Standards", "मंडी अवसंरचना व गुणवत्ता मानक", "ਮੰਡੀ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਤੇ ਮਿਆਰ")}
        </h2>
        <div className="w-6"></div>
      </header>

      {/* Infrastructure Spec Card */}
      <div className="bg-emerald-950 text-white p-4 rounded-3xl shadow-md border border-emerald-800 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase font-bold">
            {t("MANDI SPECIFICATIONS AUDIT", "मंडी अवसंरचना विनिर्देश ऑडिट", "ਮੰਡੀ ਨਿਰਧਾਰਨ ਆਡਿਟ")}
          </span>
          <span className="bg-emerald-800 text-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
            e-NAM 2.0 Certified
          </span>
        </div>
        <p className="text-xs text-slate-300">
          {t("Direct ground-truth deployment metrics verified across high-volume APMC Mandis (Khanna, Rajpura, Ludhiana).", "एशिया की प्रमुख मंडियों (खन्ना, राजपुरा, लुधियाना) में प्रत्यक्ष फील्ड सत्यापन मानकों के अनुसार।", "ਏਸ਼ੀਆ ਦੀਆਂ ਪ੍ਰਮੁੱਖ ਮੰਡੀਆਂ (ਖੰਨਾ, ਰਾਜਪੁਰਾ, ਲੁਧਿਆਣਾ) ਵਿੱਚ ਪ੍ਰਮਾਣਿਤ ਮਿਆਰ।")}
        </p>
        <div className="grid grid-cols-4 gap-2 pt-2 border-t border-emerald-800/80 text-center text-xs">
          <div>
            <span className="text-[9px] text-emerald-300 block">{t("Weighbridge", "धर्मकांटा", "ਕੰਡਾ")}</span>
            <span className="font-mono font-bold text-white">±0.01%</span>
          </div>
          <div>
            <span className="text-[9px] text-emerald-300 block">{t("Covered Silos", "साइलो क्षमता", "ਸਾਈਲੋ")}</span>
            <span className="font-mono font-bold text-white">25K MT</span>
          </div>
          <div>
            <span className="text-[9px] text-emerald-300 block">{t("Solar Power", "सौर ऊर्जा", "ਸੋਲਰ ਪਾਵਰ")}</span>
            <span className="font-mono font-bold text-white">150 kW</span>
          </div>
          <div>
            <span className="text-[9px] text-emerald-300 block">{t("AI Cameras", "एआई कैमरे", "ਏਆਈ ਕੈਮਰੇ")}</span>
            <span className="font-mono font-bold text-white">48 Nos</span>
          </div>
        </div>
      </div>

      {/* 4 Photo Cards with Field Quality Details */}
      <div className="space-y-4">
        {GALLERY_ITEMS.map((item, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="h-48 w-full overflow-hidden relative">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              <div className="absolute top-3 right-3 bg-slate-950/85 text-amber-300 px-3 py-1 rounded-full text-[10px] font-bold border border-slate-700 backdrop-blur shadow">
                {t("APMC Verified", "एपीएमसी प्रमाणित", "ਮੰਡੀ ਪ੍ਰਮਾਣਿਤ")}
              </div>
              <div className="absolute bottom-3 left-3 bg-emerald-950/85 text-white px-2.5 py-0.5 rounded-lg text-[10px] font-mono backdrop-blur border border-emerald-700/50">
                Pillar #{idx + 1}
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <h4 className="font-black text-sm text-slate-900">
                {t(item.title, undefined, item.titlePa)}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(item.desc)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FCI Assaying QC Guidelines Card */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 space-y-3">
        <h4 className="text-xs font-black text-slate-900 uppercase pb-2 border-b">
          {t("Official FCI Grain Fair Average Quality (FAQ) Norms", "एफसीआई अनाज खरीद गुणवत्ता (FAQ) मानक", "ਐਫਸੀਆਈ ਅਨਾਜ ਖਰੀਦ ਮਿਆਰੀ ਨਿਯਮ")}
        </h4>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between pb-1 border-b border-slate-100">
            <span className="text-slate-600">{t("Maximum Safe Moisture Content:", "अधिकतम अनुमेय नमी स्तर:", "ਵੱਧ ਤੋਂ ਵੱਧ ਨਮੀ ਦੀ ਮਾਤਰਾ:")}</span>
            <span className="font-bold text-emerald-700 font-mono">12.0%</span>
          </div>
          <div className="flex justify-between pb-1 border-b border-slate-100">
            <span className="text-slate-600">{t("Foreign Matter (Chaff, Straw):", "कचरा व बाह्य अशुद्धियां:", "ਬਾਹਰੀ ਕੂੜਾ-ਕਰਕਟ:")}</span>
            <span className="font-bold text-slate-800 font-mono">≤ 0.75%</span>
          </div>
          <div className="flex justify-between pb-1 border-b border-slate-100">
            <span className="text-slate-600">{t("Shriveled & Broken Kernels:", "सिकुड़े व टूटे दाने:", "ਸੁੰਗੜੇ ਤੇ ਟੁੱਟੇ ਦਾਣੇ:")}</span>
            <span className="font-bold text-slate-800 font-mono">≤ 2.0%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">{t("Weighbridge Calibration Tolerance:", "धर्मकांटा प्रमाणन सहनशीलता:", "ਕੰਡੇ ਦੀ ਸ਼ੁੱਧਤਾ ਸਹਿਣਸ਼ੀਲਤਾ:")}</span>
            <span className="font-bold text-emerald-700 font-mono">Legal Metrology Dept Certified</span>
          </div>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // VIEW 8: MANDI OFFERS, TENDERS & INCENTIVES
  // ==========================================
  const OffersView = () => {
    const [offerCategory, setOfferCategory] = useState<'ALL' | 'GRAIN' | 'LOGISTICS' | 'GREEN'>('ALL');
    const [selectedOfferModal, setSelectedOfferModal] = useState<any | null>(null);
    const [claimQty, setClaimQty] = useState(10);
    const [heroSlide, setHeroSlide] = useState(0);

    const defaultOffers = [
      {
        id: 'OFFER-WHEAT-2026',
        title: 'Sharbati & Durum Wheat Procurement Bonus',
        category: 'GRAIN',
        bonus: '+₹125/Qtl Bonus',
        commodity: 'Wheat (Grade-A)',
        validTill: '31 March 2026',
        mandi: 'Khanna & Ludhiana Mandi',
        description: 'Special procurement incentive for moisture content ≤11.5% with zero dockage. Direct DBT credit to your bank account.',
        badge: 'FCI Certified',
        image: '/images/wheat_silo.jpg',
        terms: 'Min 5 Quintals'
      },
      {
        id: 'OFFER-MUSTARD-2026',
        title: 'Yellow Mustard High-Oil Content Incentive',
        category: 'GRAIN',
        bonus: '+₹180/Qtl Incentive',
        commodity: 'Mustard (42%+ Oil)',
        validTill: '15 April 2026',
        mandi: 'Rajpura & Sirhind Mandi',
        description: 'NAFED supported bonus for verified oil content exceeding 42% tested by infrared digital assaying spectrometers.',
        badge: 'NAFED Bonus',
        image: '/images/mustard_field.jpg',
        terms: 'Grade 1 Seed'
      },
      {
        id: 'OFFER-COTTON-2026',
        title: 'Cotton Corporation Long-Staple Premium',
        category: 'GRAIN',
        bonus: '+₹220/Qtl Premium',
        commodity: 'Cotton (Shankar-6)',
        validTill: '28 Feb 2026',
        mandi: 'Abohar & Bathinda APMC',
        description: 'CCI verified extra long staple length (>29mm) bonus with digital moisture certificate issued at gate entry.',
        badge: 'CCI Premium',
        image: '/images/cotton_market.jpg',
        terms: 'Moisture ≤8%'
      },
      {
        id: 'OFFER-EARLY-BIRD',
        title: 'Morning Shift Arrival Logistics Rebate',
        category: 'LOGISTICS',
        bonus: '100% Toll Refund',
        commodity: 'All Commodities',
        validTill: 'Ongoing Rabi Season',
        mandi: 'All 1,361+ e-NAM Mandis',
        description: 'Tractors arriving between 07:00 AM - 09:00 AM receive priority weighbridge gate entry and 100% state toll cashback.',
        badge: 'Express Lane',
        image: '/images/mandi_entry_gate.jpg',
        terms: 'Gate Entry < 09:00'
      },
      {
        id: 'OFFER-SOIL-HEALTH',
        title: 'Bio-Nutrient Soil Health Direct Subsidy',
        category: 'GREEN',
        bonus: '+₹100/Qtl Direct DBT',
        commodity: 'Crop Residue Free',
        validTill: '30 April 2026',
        mandi: 'Punjab & Haryana APMCs',
        description: 'Farmers presenting active Soil Health Cards who did not engage in stubble burning receive direct subsidy upon arrival.',
        badge: 'Green Mandi',
        image: '/images/grain_assaying_lab.jpg',
        terms: 'Soil Card Verified'
      },
      {
        id: 'OFFER-SILO-STORAGE',
        title: 'Silo Moisture Preservation Pass',
        category: 'LOGISTICS',
        bonus: '14-Day Free Holding',
        commodity: 'Stored Wheat & Grain',
        validTill: 'Full Rabi Season',
        mandi: 'State Silo Terminals',
        description: 'Zero warehousing charges for covered silo storage during unexpected rain forecasts detected by Doppler radar.',
        badge: 'Rain Shield',
        image: '/images/covered_silo.jpg',
        terms: 'Radar Triggered'
      }
    ];

    const displayOffers = offersList && offersList.length > 0 ? offersList : defaultOffers;
    const filteredOffers = offerCategory === 'ALL' 
      ? displayOffers 
      : displayOffers.filter((o: any) => o.category === offerCategory || (offerCategory === 'GRAIN' && !['LOGISTICS', 'GREEN'].includes(o.category)));

    const heroItems = displayOffers.slice(0, 4);

    return (
      <div className="min-h-screen bg-slate-50 p-4 pb-28 space-y-4">
        <div className="tricolor-bar mb-2"></div>

        <header className="flex items-center justify-between mb-1">
          <button onClick={() => setView('DASHBOARD')} className="p-1 text-slate-600 hover:bg-slate-200 rounded-lg">
            <ChevronRight className="rotate-180" size={22} />
          </button>
          <div className="text-center">
            <h2 className="font-extrabold text-base text-slate-900 flex items-center justify-center gap-1.5">
              <Gift className="text-amber-600" size={18} />
              {t("Mandi Offers & Tenders", "मंडी विशेष प्रोत्साहन व टेंडर", "ਮੰਡੀ ਵਿਸ਼ੇਸ਼ ਆਫਰ ਤੇ ਟੈਂਡਰ")}
            </h2>
            <p className="text-[11px] text-slate-500">
              {t("Verified government bonuses, logistics rebates & early-arrival passes", "सत्यापित सरकारी बोनस, टोल छूट व त्वरित भुगतान", "ਪ੍ਰਮਾਣਿਤ ਸਰਕਾਰੀ ਬੋਨਸ ਅਤੇ ਟੋਲ ਛੋਟ")}
            </p>
          </div>
          <div className="w-6"></div>
        </header>

        {/* Claim Success Banner (Fast2SMS Confirmation) */}
        {claimSuccess && (
          <div className="bg-emerald-900 text-white p-3.5 rounded-2xl shadow-lg border border-emerald-600 flex items-start justify-between animate-fadeIn">
            <div className="flex items-start gap-2.5">
              <CheckCircle size={20} className="text-emerald-300 flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-amber-300 block">{t("Pass Claimed Successfully via Fast2SMS!", "फास्ट2एसएमएस द्वारा पास सफलतापूर्वक भेजा गया!", "ਫਾਸਟ2ਐਸਐਮਐਸ ਰਾਹੀਂ ਪਾਸ ਭੇਜਿਆ ਗਿਆ!")}</span>
                <p className="text-slate-200 mt-0.5 font-mono">{claimSuccess}</p>
              </div>
            </div>
            <button onClick={() => setClaimSuccess(null)} className="text-emerald-300 hover:text-white text-xs font-bold ml-2">✕</button>
          </div>
        )}

        {/* Panoramic Sliding Carousel with Smooth Slide Animation */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-52 group">
          {heroItems.map((item: any, idx: number) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                idx === heroSlide 
                  ? 'opacity-100 translate-x-0 scale-100 z-10' 
                  : idx < heroSlide 
                    ? 'opacity-0 -translate-x-full scale-95 z-0' 
                    : 'opacity-0 translate-x-full scale-95 z-0'
              }`}>
              <img 
                src={item.image || (GALLERY_ITEMS[idx % GALLERY_ITEMS.length]?.img) || '/images/wheat_silo.jpg'} 
                alt={item.title} 
                className="w-full h-full object-cover brightness-[0.75]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                <Sparkles size={12} /> {item.bonus || '+₹125/Qtl Bonus'}
              </div>
              <div className="absolute top-3 right-3 bg-emerald-600/90 text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-emerald-400/50 backdrop-blur">
                {item.badge || 'Govt Verified'}
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">{item.commodity || 'APMC Procurement'}</p>
                <h3 className="font-black text-sm leading-snug drop-shadow">{item.title}</h3>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}

          {/* Slider Prev / Next Controls */}
          <button 
            onClick={() => setHeroSlide(prev => (prev - 1 + heroItems.length) % heroItems.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-slate-950/60 text-white p-1.5 rounded-full backdrop-blur border border-white/20 hover:bg-slate-950 transition opacity-80 hover:opacity-100">
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={() => setHeroSlide(prev => (prev + 1) % heroItems.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-slate-950/60 text-white p-1.5 rounded-full backdrop-blur border border-white/20 hover:bg-slate-950 transition opacity-80 hover:opacity-100">
            <ChevronRight size={16} />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-1.5 right-3 z-20 flex gap-1.5">
            {heroItems.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setHeroSlide(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === heroSlide ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
          {[
            { id: 'ALL', label: t('All Incentives', 'सभी प्रोत्साहन', 'ਸਾਰੇ ਲਾਭ') },
            { id: 'GRAIN', label: t('Farms & Grains', 'फसल व अनाज', 'ਫਸਲ ਤੇ ਅਨਾਜ') },
            { id: 'LOGISTICS', label: t('Logistics & Toll', 'परिवहन व टोल', 'ਆਵਾਜਾਈ ਤੇ ਟੋਲ') },
            { id: 'GREEN', label: t('Soil & Bio Subsidy', 'मृदा स्वास्थ्य', 'ਮਿੱਟੀ ਸਿਹਤ') },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setOfferCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition border ${
                offerCategory === cat.id
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Live Offers Cards Grid */}
        <div className="space-y-3.5">
          {filteredOffers.map((offer: any) => (
            <div 
              key={offer.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition duration-300">
              <div className="relative h-36 overflow-hidden">
                <img 
                  src={offer.image || '/images/wheat_silo.jpg'} 
                  alt={offer.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-2.5 left-2.5 bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow">
                  {offer.bonus}
                </div>
                <div className="absolute top-2.5 right-2.5 bg-emerald-950/80 text-emerald-200 font-mono text-[9px] px-2 py-0.5 rounded-md backdrop-blur border border-emerald-700/50">
                  {offer.badge || 'APMC Certified'}
                </div>
                <div className="absolute bottom-2 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold text-amber-300">{offer.commodity}</span>
                  <h4 className="font-extrabold text-sm leading-tight text-white">{offer.title}</h4>
                </div>
              </div>

              <div className="p-3.5 space-y-2.5">
                <p className="text-xs text-slate-600 leading-relaxed">{offer.description}</p>

                <div className="bg-slate-50 rounded-2xl p-2.5 text-[11px] border border-slate-100 flex items-center justify-between text-slate-700 font-medium">
                  <div>
                    <span className="text-slate-400 text-[10px] block">{t("Valid Until", "वैधता", "ਮਿਆਦ")}</span>
                    <strong className="text-slate-800">{offer.validTill}</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-[10px] block">{t("Target Yard", "मंडी केंद्र", "ਮੰਡੀ ਕੇਂਦਰ")}</span>
                    <strong className="text-emerald-700">{offer.mandi}</strong>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedOfferModal(offer)}
                    className="flex-1 bg-emerald-700 hover:bg-emerald-600 text-white font-black py-2.5 px-3 rounded-2xl text-xs flex items-center justify-center gap-1.5 shadow transition">
                    <Send size={14} className="text-amber-300" />
                    {t("Claim Pass via Fast2SMS", "फास्ट2एसएमएस द्वारा पास पाएं", "ਫਾਸਟ2ਐਸਐਮਐਸ ਰਾਹੀਂ ਪਾਸ ਲਓ")}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCrop(CROPS[0]);
                      setView('BOOKING');
                    }}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-3 rounded-2xl text-xs border border-slate-200 transition">
                    {t("Book Slot", "स्लॉट बुक", "ਸਲਾਟ")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Claim Modal Dialog */}
        {selectedOfferModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-white rounded-3xl p-5 max-w-sm w-full shadow-2xl border border-slate-200 space-y-4">
              <div className="flex justify-between items-start border-b pb-3">
                <div>
                  <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                    {selectedOfferModal.bonus}
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900 mt-1">{selectedOfferModal.title}</h3>
                </div>
                <button onClick={() => setSelectedOfferModal(null)} className="text-slate-400 hover:text-slate-700 p-1 text-base">✕</button>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-200 space-y-1.5 text-xs text-emerald-950">
                <div className="flex justify-between">
                  <span className="text-emerald-700">Farmer:</span>
                  <strong>{farmer.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-700">Phone (Fast2SMS):</span>
                  <strong>+91 {farmer.phone}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-700">Yard:</span>
                  <strong>{selectedOfferModal.mandi}</strong>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t("Estimated Produce Quantity (Quintals)", "अनुमानित फसल मात्रा (क्विंटल)", "ਅੰਦਾਜ਼ਨ ਮਾਤਰਾ (ਕੁਇੰਟਲ)")}
                </label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number"
                    value={claimQty}
                    onChange={e => setClaimQty(Math.max(1, parseInt(e.target.value) || 1))}
                    className="flex-1 p-2.5 border border-slate-300 rounded-xl text-center font-black font-mono text-base"
                    min="1"
                  />
                  <span className="text-xs font-bold text-slate-500">Quintals</span>
                </div>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-start gap-1.5">
                <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  {t("Fast2SMS Gateway will transmit an authenticated digital gate pass token directly to your mobile phone.", "फास्ट2एसएमएस गेटवे आपके मोबाइल पर प्रमाणित डिजिटल गेट पास टोकन भेजेगा।", "ਫਾਸਟ2ਐਸਐਮਐਸ ਤੁਹਾਡੇ ਮੋਬਾਈਲ ਤੇ ਡਿਜੀਟਲ ਗੇਟ ਪਾਸ ਟੋਕਨ ਭੇਜੇਗਾ।")}
                </span>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedOfferModal(null)}
                  className="flex-1 py-3 rounded-2xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100">
                  {t("Cancel", "रद्द करें", "ਰੱਦ ਕਰੋ")}
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    const offer = selectedOfferModal;
                    setSelectedOfferModal(null);
                    await handleClaimOffer(offer, claimQty);
                  }}
                  className="flex-1 bg-emerald-700 hover:bg-emerald-600 text-white font-black py-3 rounded-2xl text-xs flex items-center justify-center gap-1 shadow-lg">
                  <Send size={14} className="text-amber-300" />
                  {t("Confirm & Send SMS", "पुष्टि करें व SMS भेजें", "ਪੁਸ਼ਟੀ ਕਰੋ ਤੇ SMS ਭੇਜੋ")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative shadow-2xl overflow-hidden font-sans border-x border-slate-200">
      
      {/* Dynamic View Controller */}
      {view === 'AUTH' && <AuthView />}
      {view === 'DASHBOARD' && <DashboardView />}
      {view === 'BOOKING' && <BookingView />}
      {view === 'OFFERS' && <OffersView />}
      {view === 'QUEUE' && <QueueView />}
      {view === 'PAYMENT' && <PaymentView />}
      {view === 'PROFILE' && <ProfileView />}
      {view === 'GALLERY' && <GalleryView />}

      {/* Mobile Bottom Navigation */}
      {view !== 'AUTH' && (
        <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-200 flex justify-around py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] z-30">
          <button 
            onClick={() => setView('DASHBOARD')} 
            className={`flex flex-col items-center transition ${view === 'DASHBOARD' ? 'text-emerald-700 font-black' : 'text-slate-400'}`}>
            <Home size={20} />
            <span className="text-[10px] mt-0.5">{t("Home", "होम", "ਮੁੱਖ")}</span>
          </button>

          <button 
            onClick={() => setView('BOOKING')} 
            className={`flex flex-col items-center transition ${view === 'BOOKING' ? 'text-emerald-700 font-black' : 'text-slate-400'}`}>
            <Calendar size={20} />
            <span className="text-[10px] mt-0.5">{t("Book", "बुकिंग", "ਬੁਕਿੰਗ")}</span>
          </button>

          <button 
            onClick={() => setView('OFFERS')} 
            className={`flex flex-col items-center transition relative ${view === 'OFFERS' ? 'text-emerald-700 font-black' : 'text-slate-400'}`}>
            <Gift size={20} />
            <span className="text-[10px] mt-0.5">{t("Offers", "ऑफर", "ਆਫਰ")}</span>
            <span className="absolute -top-0.5 right-2 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
          </button>

          <button 
            onClick={() => booking && setView('QUEUE')} 
            disabled={!booking}
            className={`flex flex-col items-center transition ${view === 'QUEUE' ? 'text-emerald-700 font-black' : 'text-slate-400'} ${!booking ? 'opacity-40' : ''}`}>
            <Clock size={20} />
            <span className="text-[10px] mt-0.5">{t("Queue", "कतार", "ਕਤਾਰ")}</span>
          </button>

          <button 
            onClick={() => setView('GALLERY')} 
            className={`flex flex-col items-center transition ${view === 'GALLERY' ? 'text-emerald-700 font-black' : 'text-slate-400'}`}>
            <ImageIcon size={20} />
            <span className="text-[10px] mt-0.5">{t("Gallery", "फोटो", "ਫੋਟੋਆਂ")}</span>
          </button>

          <button 
            onClick={() => setView('PROFILE')} 
            className={`flex flex-col items-center transition ${view === 'PROFILE' ? 'text-emerald-700 font-black' : 'text-slate-400'}`}>
            <User size={20} />
            <span className="text-[10px] mt-0.5">{t("Profile", "प्रोफाइल", "ਪ੍ਰੋਫਾਈਲ")}</span>
          </button>
        </nav>
      )}

      {/* Floating Demo Simulator Panel */}
      {showDemoControls && (
        <div className="fixed top-16 right-4 bg-slate-900/95 text-white p-4 rounded-3xl shadow-2xl border border-slate-700 z-50 w-72 text-xs backdrop-blur">
          <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800">
            <h4 className="font-bold flex items-center gap-1.5 text-amber-400">
              <PlayCircle size={16} /> {t("e-NAM Mandi Simulation Console")}
            </h4>
            <button onClick={() => setShowDemoControls(false)} className="text-slate-400 hover:text-white">✕</button>
          </div>
          
          <p className="text-[11px] text-slate-400 mb-3">
            {t("Simulate real-time mandi yard operations & stage progression:")}
          </p>

          <div className="space-y-2">
            <button 
              onClick={advanceQueue}
              disabled={!booking || booking.status === 'PAID'}
              className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white py-2.5 rounded-xl font-bold transition flex items-center justify-center gap-1.5 shadow">
              <PlayCircle size={14} /> Next Pipeline Step ({booking ? booking.status : 'No Booking'})
            </button>

            <button 
              onClick={() => {
                setFarmer({
                  name: 'Jaswant Singh',
                  phone: '9872099112',
                  aadhaar: 'XXXX-XXXX-9912',
                  pmKisanId: 'PB-PK-2026-1142',
                  landSizeHa: 0.8,
                  landCategory: 'MARGINAL',
                  district: 'Ludhiana',
                  state: 'Punjab',
                  village: 'Samrala Road, Khanna',
                  vehicleType: 'Tractor Trolley',
                  vehicleNo: 'PB10AB7781',
                  bankName: 'Punjab National Bank',
                  accountNo: '992144312',
                  ifsc: 'PUNB0014200'
                });
                setBooking(null);
                setView('DASHBOARD');
                addNotification("Switched demo farmer to Jaswant Singh (Khanna, 0.8 Ha)");
              }}
              className="w-full bg-slate-800 hover:bg-slate-700 text-amber-300 py-2 rounded-xl font-semibold transition">
              Switch to Small Farmer (Khanna Mandi)
            </button>

            <button 
              onClick={() => {
                setBooking(null);
                setNotifications([]);
                setView('DASHBOARD');
              }}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded-xl font-semibold transition text-[11px]">
              Reset Demo Booking State
            </button>
          </div>
        </div>
      )}

    </div>
  );
}