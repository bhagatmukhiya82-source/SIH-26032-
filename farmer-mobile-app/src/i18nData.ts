// Comprehensive Multilingual Translation Engine for KISAN-Q Farmer Mobile App
export type Lang = 'EN' | 'HI' | 'PA';

export const I18N_DICT: Record<string, { HI: string; PA: string }> = {
  // Govt & Header
  "Govt. of India • Ministry of Agriculture": {
    HI: "भारत सरकार • कृषि एवं किसान कल्याण मंत्रालय",
    PA: "ਭਾਰਤ ਸਰਕਾਰ • ਖੇਤੀਬਾੜੀ ਅਤੇ ਕਿਸਾਨ ਭਲਾਈ ਮੰਤਰਾਲਾ"
  },
  "National Agriculture Market": {
    HI: "राष्ट्रीय कृषि बाज़ार (e-NAM)",
    PA: "ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ ਮੰਡੀ (e-NAM)"
  },
  "e-NAM 2.0": {
    HI: "ई-नाम 2.0",
    PA: "ਈ-ਨਾਮ 2.0"
  },
  "e-NAM & APMC Certified": {
    HI: "ई-नाम व एपीएमसी प्रमाणित",
    PA: "ਈ-ਨਾਮ ਅਤੇ ਮੰਡੀ ਪ੍ਰਮਾਣਿਤ"
  },
  "Helpline: 1800-270-0224": {
    HI: "हेल्पलाइन: 1800-270-0224 (टोल-फ्री)",
    PA: "ਹੈਲਪਲਾਈਨ: 1800-270-0224 (ਟੋਲ-ਫ੍ਰੀ)"
  },
  "एक राष्ट्र, एक बाजार • ਇੱਕ ਰਾਸ਼ਟਰ, ਇੱਕ ਮੰਡੀ": {
    HI: "एक राष्ट्र, एक बाजार (e-NAM)",
    PA: "ਇੱਕ ਰਾਸ਼ਟਰ, ਇੱਕ ਮੰਡੀ (e-NAM)"
  },
  "KISAN-Q": {
    HI: "किसान-Q",
    PA: "ਕਿਸਾਨ-Q"
  },
  "Smart Slot Booking & Fair-Share Mandi Procurement": {
    HI: "स्मार्ट मंडी स्लॉट बुकिंग व पारदर्शी खरीद प्रणाली",
    PA: "ਸਮਾਰਟ ਮੰਡੀ ਸਲਾਟ ਬੁਕਿੰਗ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਅਨਾਜ ਖਰੀਦ ਪ੍ਰਣਾਲੀ"
  },

  // Stats Strip
  "Farmers": {
    HI: "पंजीकृत किसान",
    PA: "ਰਜਿਸਟਰਡ ਕਿਸਾਨ"
  },
  "Mandis": {
    HI: "सक्रिय मंडियां",
    PA: "ਸਰਗਰਮ ਮੰਡੀਆਂ"
  },
  "Wait Cut": {
    HI: "इंतज़ार में कमी",
    PA: "ਉਡੀਕ 'ਚ ਕਟੌਤੀ"
  },
  "DBT Pay": {
    HI: "डीबीटी भुगतान",
    PA: "ਡੀਬੀਟੀ ਭੁਗਤਾਨ"
  },
  "1.77+ Cr": {
    HI: "1.77+ करोड़",
    PA: "1.77+ ਕਰੋੜ"
  },
  "1,361+": {
    HI: "1,361+ मंडियां",
    PA: "1,361+ ਮੰਡੀਆਂ"
  },
  "96% ↓": {
    HI: "96% कमी ↓",
    PA: "96% ਘਟਿਆ ↓"
  },
  "100% Direct": {
    HI: "100% सीधा बैंक",
    PA: "100% ਸਿੱਧਾ ਬੈਂਕ"
  },

  // Auth Tabs & Forms
  "Farmer Sign In": {
    HI: "किसान लॉग इन",
    PA: "ਕਿਸਾਨ ਲੌਗ ਇਨ"
  },
  "New Registration": {
    HI: "नया किसान पंजीकरण",
    PA: "ਨਵੀਂ ਕਿਸਾਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ"
  },
  "Registered Mobile Number": {
    HI: "पंजीकृत मोबाइल नंबर",
    PA: "ਰਜਿਸਟਰਡ ਮੋਬਾਈਲ ਨੰਬਰ"
  },
  "Enter 4-Digit OTP": {
    HI: "4-अंकीय ओटीपी (OTP) दर्ज करें",
    PA: "4-ਅੰਕਾਂ ਦਾ ਓਟੀਪੀ ਦਰਜ ਕਰੋ"
  },
  "Demo: 1234": {
    HI: "डेमो: 1234",
    PA: "ਡੈਮੋ: 1234"
  },
  "SMS sent to linked farmer SIM": {
    HI: "किसान के पंजीकृत मोबाइल पर ओटीपी भेजा गया",
    PA: "ਕਿਸਾਨ ਦੇ ਮੋਬਾਈਲ 'ਤੇ ਓਟੀਪੀ ਭੇਜਿਆ ਗਿਆ"
  },
  "Verify OTP & Open Dashboard": {
    HI: "ओटीपी सत्यापित कर डैशबोर्ड खोलें",
    PA: "ਓਟੀਪੀ ਤਸਦੀਕ ਕਰਕੇ ਡੈਸ਼ਬੋਰਡ ਖੋਲ੍ਹੋ"
  },
  "Send OTP (Instant Demo)": {
    HI: "ओटीपी भेजें (तुरंत डेमो)",
    PA: "ਓਟੀਪੀ ਭੇਜੋ (ਡੈਮੋ ਲੌਗ ਇਨ)"
  },
  "Don't have an account? Register as New Farmer →": {
    HI: "खाता नहीं है? नया किसान पंजीकरण करें →",
    PA: "ਖਾਤਾ ਨਹੀਂ ਹੈ? ਨਵਾਂ ਕਿਸਾਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕਰੋ →"
  },
  "Already registered? Sign in with Mobile OTP →": {
    HI: "पहले से पंजीकृत हैं? मोबाइल ओटीपी से लॉग इन करें →",
    PA: "ਪਹਿਲਾਂ ਹੀ ਰਜਿਸਟਰਡ ਹੋ? ਮੋਬਾਈਲ ਓਟੀਪੀ ਨਾਲ ਲੌਗ ਇਨ ਕਰੋ →"
  },
  "Government e-NAM & PM-KISAN database auto-link for direct DBT grain payments.": {
    HI: "सरकारी ई-नाम व पीएम-किसान डेटाबेस से प्रत्यक्ष बैंक ट्रांसफर (DBT) हेतु लिंक।",
    PA: "ਸਰਕਾਰੀ ਈ-ਨਾਮ ਅਤੇ ਪੀਐਮ-ਕਿਸਾਨ ਖਾਤੇ ਨਾਲ ਸਿੱਧੇ ਭੁਗਤਾਨ (DBT) ਲਈ ਲਿੰਕ।"
  },
  "Farmer Full Name": {
    HI: "किसान का पूरा नाम",
    PA: "ਕਿਸਾਨ ਦਾ ਪੂਰਾ ਨਾਮ"
  },
  "Mobile Number (Linked with Bank)": {
    HI: "मोबाइल नंबर (बैंक से लिंक)",
    PA: "ਮੋਬਾਈਲ ਨੰਬਰ (ਬੈਂਕ ਨਾਲ ਲਿੰਕ)"
  },
  "Aadhaar / PM-KISAN Beneficiary ID": {
    HI: "आधार / पीएम-किसान लाभार्थी संख्या",
    PA: "ਆਧਾਰ / ਪੀਐਮ-ਕਿਸਾਨ ਲਾਭਪਾਤਰੀ ਆਈਡੀ"
  },
  "Total Landholding Size (Hectares)": {
    HI: "कुल जमीन का रकबा (हेक्टेयर)",
    PA: "ਕੁੱਲ ਜ਼ਮੀਨ (ਹੈਕਟੇਅਰ)"
  },
  "Small/Marginal (<2 ha) Fair-Share Priority: YES": {
    HI: "सीमांत/छोटा किसान (<2 हे.) फेयर-शेयर प्राथमिकता: हाँ",
    PA: "ਛੋਟਾ/ਸੀਮਾਂਤ ਕਿਸਾਨ (<2 ਹੈ.) ਤਰਜੀਹ: ਹਾਂ"
  },
  "General Category (>2 ha)": {
    HI: "सामान्य श्रेणी (>2 हेक्टेयर)",
    PA: "ਆਮ ਸ਼੍ਰੇਣੀ (>2 ਹੈਕਟੇਅਰ)"
  },
  "Home Village / Tehsil": {
    HI: "गांव / तहसील",
    PA: "ਪਿੰਡ / ਤਹਿਸੀਲ"
  },
  "Home District (Mandi Region)": {
    HI: "जिला (मंडी क्षेत्र)",
    PA: "ਜ਼ਿਲ੍ਹਾ (ਮੰਡੀ ਖੇਤਰ)"
  },
  "Primary Grain Transport Vehicle": {
    HI: "उपज लाने का वाहन",
    PA: "ਫਸਲ ਲਿਆਉਣ ਵਾਲਾ ਵਾਹਨ"
  },
  "Vehicle Registration Number": {
    HI: "वाहन पंजीकरण नंबर",
    PA: "ਵਾਹਨ ਨੰਬਰ"
  },
  "DBT Linked Bank Name": {
    HI: "डीबीटी से जुड़ा बैंक",
    PA: "ਡੀਬੀਟੀ ਲਿੰਕਡ ਬੈਂਕ"
  },
  "Bank Account Number": {
    HI: "बैंक खाता संख्या",
    PA: "ਬੈਂਕ ਖਾਤਾ ਨੰਬਰ"
  },
  "Bank IFSC Code": {
    HI: "बैंक आईएफएससी (IFSC) कोड",
    PA: "ਬੈਂਕ ਆਈਐਫਐਸਸੀ ਕੋਡ"
  },
  "Register Farmer & Enter Dashboard": {
    HI: "पंजीकरण पूर्ण करें व डैशबोर्ड में जाएं",
    PA: "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪੂਰੀ ਕਰੋ ਅਤੇ ਸ਼ੁਰੂ ਕਰੋ"
  },

  // Dashboard & Ticker
  "LIVE TICKER": {
    HI: "ई-नाम लाइव टिकर",
    PA: "ਈ-ਨਾਮ ਲਾਈਵ ਟਿਕਰ"
  },
  "Active Mandi Token": {
    HI: "सक्रिय मंडी टोकन",
    PA: "ਸਰਗਰਮ ਮੰਡੀ ਟੋਕਨ"
  },
  "Produce": {
    HI: "उपज / फसल",
    PA: "ਫਸਲ"
  },
  "Procurement Centre": {
    HI: "सरकारी खरीद केंद्र",
    PA: "ਸਰਕਾਰੀ ਖਰੀਦ ਕੇਂਦਰ"
  },
  "Assigned Gate & Slot": {
    HI: "आवंटित गेट व समय",
    PA: "ਮਿਲਿਆ ਗੇਟ ਅਤੇ ਸਮਾਂ"
  },
  "Live Queue Tracker": {
    HI: "लाइव कतार देखें",
    PA: "ਲਾਈਵ ਕਤਾਰ ਦੇਖੋ"
  },
  "Advance State": {
    HI: "अगला चरण चलाएं",
    PA: "ਅਗਲਾ ਪੜਾਅ ਚਲਾਓ"
  },
  "No Upcoming Mandi Visit": {
    HI: "कोई आगामी मंडी यात्रा नहीं है",
    PA: "ਕੋਈ ਆਉਣ ਵਾਲੀ ਮੰਡੀ ਫੇਰੀ ਨਹੀਂ"
  },
  "Book your grain slot in advance to avoid 18-hour highway tractor traffic.": {
    HI: "हाईवे पर 18 घंटे के जाम से बचने के लिए समय से पहले स्लॉट बुक करें।",
    PA: "ਸੜਕੀ ਜਾਮ ਤੋਂ ਬਚਣ ਲਈ ਆਪਣਾ ਮੰਡੀ ਸਲਾਟ ਪਹਿਲਾਂ ਤੋਂ ਬੁੱਕ ਕਰੋ।"
  },
  "Book a Mandi Slot Now": {
    HI: "नया मंडी स्लॉट बुक करें",
    PA: "ਨਵਾਂ ਮੰਡੀ ਸਲਾਟ ਬੁੱਕ ਕਰੋ"
  },
  "e-NAM Daily Mandi MSP Benchmarks": {
    HI: "आज का सरकारी न्यूनतम समर्थन मूल्य (MSP)",
    PA: "ਅੱਜ ਦਾ ਸਰਕਾਰੀ ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ (MSP)"
  },
  "Daily Live": {
    HI: "आज का लाइव भाव",
    PA: "ਰੋਜ਼ਾਨਾ ਲਾਈਵ"
  },
  "e-NAM Mandi Services": {
    HI: "ई-नाम मंडी सेवाएं",
    PA: "ਈ-ਨਾਮ ਮੰਡੀ ਸੇਵਾਵਾਂ"
  },
  "New Slot Booking": {
    HI: "नई स्लॉट बुकिंग",
    PA: "ਨਵੀਂ ਸਲਾਟ ਬੁਕਿੰਗ"
  },
  "Track Live Queue": {
    HI: "लाइव कतार देखें",
    PA: "ਲਾਈਵ ਕਤਾਰ ਦੇਖੋ"
  },
  "DBT Payments": {
    HI: "डीबीटी भुगतान",
    PA: "ਡੀਬੀਟੀ ਭੁਗਤਾਨ"
  },
  "Mandi Photos & QC": {
    HI: "मंडी फोटो व लैब",
    PA: "ਮੰਡੀ ਫੋਟੋਆਂ ਤੇ ਲੈਬ"
  },
  "NABL Quality Testing Labs": {
    HI: "एनएबीएल गुणवत्ता परीक्षण लैब",
    PA: "ਐਨਏਬੀਐਲ ਗੁਣਵੱਤਾ ਟੈਸਟਿੰਗ ਲੈਬ"
  },
  "Scientific moisture assaying & electronic weighbridges": {
    HI: "वैज्ञानिक नमी परीक्षण व स्वचालित धर्मकांटा",
    PA: "ਵਿਗਿਆਨਕ ਨਮੀ ਪਰਖ ਅਤੇ ਇਲੈਕਟ੍ਰਾਨਿਕ ਕੰਡੇ"
  },

  // Booking Wizard
  "Book Mandi Arrival Slot": {
    HI: "मंडी आगमन स्लॉट बुक करें",
    PA: "ਮੰਡੀ ਸਲਾਟ ਬੁਕਿੰਗ"
  },
  "Step 1 of 4": {
    HI: "चरण 1 / 4",
    PA: "ਕਦਮ ੧ / ੪"
  },
  "Step 2 of 4": {
    HI: "चरण 2 / 4",
    PA: "ਕਦਮ ੨ / ੪"
  },
  "Step 3 of 4": {
    HI: "चरण 3 / 4",
    PA: "ਕਦਮ ੩ / ੪"
  },
  "Step 4 of 4": {
    HI: "चरण 4 / 4",
    PA: "ਕਦਮ ੪ / ੪"
  },
  "1. Select Grain / Commodity": {
    HI: "1. अपनी फसल / अनाज चुनें",
    PA: "੧. ਆਪਣੀ ਫਸਲ / ਅਨਾਜ ਚੁਣੋ"
  },
  "2. Estimated Grain Quantity (Quintals)": {
    HI: "2. अनुमानित मात्रा (क्विंटल)",
    PA: "੨. ਅੰਦਾਜ਼ਨ ਮਾਤਰਾ (ਕੁਇੰਟਲ)"
  },
  "Quintals": {
    HI: "क्विंटल",
    PA: "ਕੁਇੰਟਲ"
  },
  "Est. Govt MSP Payout": {
    HI: "अनुमानित सरकारी एमएसपी भुगतान",
    PA: "ਅੰਦਾਜ਼ਨ ਸਰਕਾਰੀ ਐਮਐਸਪੀ ਭੁਗਤਾਨ"
  },
  "Next: Choose Mandi Centre →": {
    HI: "आगे बढ़ें: खरीद केंद्र चुनें →",
    PA: "ਅੱਗੇ: ਖਰੀਦ ਕੇਂਦਰ ਚੁਣੋ →"
  },
  "3. Choose Procurement Centre & Gate": {
    HI: "3. खरीद केंद्र व गेट चुनें",
    PA: "੩. ਖਰੀਦ ਕੇਂਦਰ ਅਤੇ ਗੇਟ ਚੁਣੋ"
  },
  "RECOMMENDED": {
    HI: "अनुशंसित (नजदीकी)",
    PA: "ਸਿਫਾਰਸ਼ੀ (ਨੇੜੇ)"
  },
  "Current Queue:": {
    HI: "वर्तमान कतार:",
    PA: "ਮੌਜੂਦਾ ਕਤਾਰ:"
  },
  "tractors": {
    HI: "ट्रैक्टर",
    PA: "ਟਰੈਕਟਰ"
  },
  "min turnaround": {
    HI: "मिनट में तुलाई पूर्ण",
    PA: "ਮਿੰਟ 'ਚ ਕੰਮ ਮੁਕੰਮਲ"
  },
  "Preferred Arrival Time Window": {
    HI: "पसंदीदा आगमन समय (1 घंटा)",
    PA: "ਪਸੰਦੀਦਾ ਪਹੁੰਚਣ ਦਾ ਸਮਾਂ"
  },
  "Review & Confirm Token →": {
    HI: "समीक्षा करें व टोकन बनाएं →",
    PA: "ਜਾਂਚ ਕਰੋ ਅਤੇ ਟੋਕਨ ਬਣਾਓ →"
  },
  "4. Final Verification & QR Gate Pass": {
    HI: "4. सत्यापन व डिजिटल गेट पास",
    PA: "੪. ਤਸਦੀਕ ਅਤੇ ਡਿਜੀਟਲ ਗੇਟ ਪਾਸ"
  },
  "Farmer:": {
    HI: "किसान:",
    PA: "ਕਿਸਾਨ:"
  },
  "Produce & Qty:": {
    HI: "फसल व मात्रा:",
    PA: "ਫਸਲ ਅਤੇ ਮਾਤਰਾ:"
  },
  "Centre:": {
    HI: "खरीद केंद्र:",
    PA: "ਖਰੀਦ ਕੇਂਦਰ:"
  },
  "Arrival Window:": {
    HI: "आगमन समय:",
    PA: "ਪਹੁੰਚਣ ਦਾ ਸਮਾਂ:"
  },
  "Assigned Gate:": {
    HI: "आवंटित प्रवेश गेट:",
    PA: "ਮਿਲਿਆ ਐਂਟਰੀ ਗੇਟ:"
  },
  "Estimated Payout:": {
    HI: "अनुमानित भुगतान:",
    PA: "ਅੰਦਾਜ਼ਨ ਭੁਗਤਾਨ:"
  },
  "Fair-Share Priority Active:": {
    HI: "फेयर-शेयर प्राथमिकता सक्रिय:",
    PA: "ਫੇਅਰ-ਸ਼ੇਅਰ ਤਰਜੀਹ ਸਰਗਰਮ:"
  },
  "Fast-track weighbridge entry granted for smallholder farmer under 2 hectares.": {
    HI: "2 हेक्टेयर से कम भूमि वाले छोटे किसानों को सीधे दिन में फास्ट-ट्रैक तुलाई की गारंटी।",
    PA: "2 ਹੈਕਟੇਅਰ ਤੋਂ ਘੱਟ ਜ਼ਮੀਨ ਵਾਲੇ ਛੋਟੇ ਕਿਸਾਨਾਂ ਨੂੰ ਸਿੱਧੀ ਫਾਸਟ-ਟਰੈਕ ਤੁਲਾਈ ਦੀ ਗਾਰੰਟੀ।"
  },
  "Generate QR Gate Pass & Confirm": {
    HI: "डिजिटल क्यूआर गेट पास जारी करें",
    PA: "ਡਿਜੀਟਲ ਕਿਊਆਰ ਗੇਟ ਪਾਸ ਜਾਰੀ ਕਰੋ"
  },

  // Queue View
  "LIVE WEIGHBRIDGE TELEMETRY": {
    HI: "लाइव धर्मकांटा व मंडी स्थिति",
    PA: "ਲਾਈਵ ਕੰਡਾ ਅਤੇ ਮੰਡੀ ਸਥਿਤੀ"
  },
  "Mandi Digital Gate Token": {
    HI: "मंडी डिजिटल गेट टोकन",
    PA: "ਮੰਡੀ ਡਿਜੀਟਲ ਗੇਟ ਟੋਕਨ"
  },
  "Tractors Ahead": {
    HI: "आगे कतार में वाहन",
    PA: "ਅੱਗੇ ਕਤਾਰ 'ਚ ਟਰੈਕਟਰ"
  },
  "Est. Wait Time": {
    HI: "अनुमानित प्रतीक्षा समय",
    PA: "ਅੰਦਾਜ਼ਨ ਉਡੀਕ ਸਮਾਂ"
  },
  "min": {
    HI: "मिनट",
    PA: "ਮਿੰਟ"
  },
  "Physical Mandi Pipeline Telemetry": {
    HI: "भौतिक मंडी तुलाई व भुगतान पाइपलाइन",
    PA: "ਮੰਡੀ ਤੁਲਾਈ ਅਤੇ ਭੁਗਤਾਨ ਪੜਾਅ"
  },
  "Slot Confirmed": {
    HI: "स्लॉट कन्फर्म",
    PA: "ਸਲਾਟ ਪੱਕਾ"
  },
  "Gate reserved": {
    HI: "गेट आरक्षित",
    PA: "ਗੇਟ ਰਾਖਵਾਂ"
  },
  "Checked In": {
    HI: "गेट चेक-इन पूर्ण",
    PA: "ਗੇਟ ਚੈੱਕ-ਇਨ ਮੁਕੰਮਲ"
  },
  "RFID / QR Scanned at Gate": {
    HI: "गेट पर आरएफआईडी/क्यूआर स्कैन",
    PA: "ਗੇਟ 'ਤੇ ਆਰਐਫਆਈਡੀ/ਕਿਊਆਰ ਸਕੈਨ"
  },
  "Gross Weighing": {
    HI: "भरा वजन (तुलाई 1)",
    PA: "ਭਰਿਆ ਵਜ਼ਨ (ਤੁਲਾਈ ੧)"
  },
  "Weighbridge 1 (Tractor + Grain)": {
    HI: "धर्मकांटा 1 (ट्रैक्टर + फसल)",
    PA: "ਕੰਡਾ ੧ (ਟਰੈਕਟਰ + ਅਨਾਜ)"
  },
  "Moisture QC Testing": {
    HI: "नमी गुणवत्ता परीक्षण",
    PA: "ਨਮੀ ਗੁਣਵੱਤਾ ਜਾਂਚ"
  },
  "Lab analysis (≤12% FCI Pass)": {
    HI: "लैब विश्लेषण (≤12% मानक पास)",
    PA: "ਲੈਬ ਟੈਸਟ (≤12% ਮਿਆਰੀ ਪਾਸ)"
  },
  "Tare Weighing": {
    HI: "खाली वजन (तुलाई 2)",
    PA: "ਖਾਲੀ ਵਜ਼ਨ (ਤੁਲਾਈ ੨)"
  },
  "Empty trolley weight deduction": {
    HI: "खाली ट्रॉली वजन कटौती",
    PA: "ਖਾਲੀ ਟਰਾਲੀ ਕਟੌਤੀ"
  },
  "Procurement Done": {
    HI: "सरकारी खरीद पूर्ण",
    PA: "ਸਰਕਾਰੀ ਖਰੀਦ ਮੁਕੰਮਲ"
  },
  "Grain transferred to covered silo": {
    HI: "अनाज सुरक्षित साइलो में स्थानांतरित",
    PA: "ਅਨਾਜ ਸੁਰੱਖਿਅਤ ਸਾਈਲੋ 'ਚ ਪਹੁੰਚਿਆ"
  },
  "DBT Payment Done": {
    HI: "डीबीटी भुगतान सफल",
    PA: "ਡੀਬੀਟੀ ਭੁਗਤਾਨ ਸਫਲ"
  },
  "Credited to linked bank account": {
    HI: "लिंक बैंक खाते में क्रेडिट",
    PA: "ਲਿੰਕ ਬੈਂਕ ਖਾਤੇ 'ਚ ਜਮ੍ਹਾਂ"
  },
  "View Payment Receipt & Bank UTR": {
    HI: "भुगतान रसीद व बैंक यूटीआर देखें",
    PA: "ਭੁਗਤਾਨ ਰਸੀਦ ਅਤੇ ਬੈਂਕ ਯੂਟੀਆਰ ਦੇਖੋ"
  },
  "Simulate Mandi Staff Next Step": {
    HI: "मंडी स्टाफ का अगला कदम चलाएं",
    PA: "ਮੰਡੀ ਸਟਾਫ ਦਾ ਅਗਲਾ ਕਦਮ ਚਲਾਓ"
  },

  // Payment View
  "DBT Procurement Payment": {
    HI: "प्रत्यक्ष लाभ अंतरण (DBT) भुगतान रसीद",
    PA: "ਡੀਬੀਟੀ ਅਨਾਜ ਖਰੀਦ ਭੁਗਤਾਨ ਰਸੀਦ"
  },
  "DIRECT BENEFIT TRANSFER SUCCESSFUL": {
    HI: "प्रत्यक्ष बैंक अंतरण (DBT) सफलतापूर्वक संपन्न",
    PA: "ਡੀਬੀਟੀ ਬੈਂਕ ਟਰਾਂਸਫਰ ਸਫਲਤਾਪੂਰਵਕ ਮੁਕੰਮਲ"
  },
  "PAYMENT IN PROCESSING": {
    HI: "भुगतान प्रक्रियाधीन है",
    PA: "ਭੁਗਤਾਨ ਪ੍ਰਕਿਰਿਆ ਅਧੀਨ ਹੈ"
  },
  "Transaction ID (PFMS / DBT):": {
    HI: "लेनदेन संख्या (PFMS / DBT):",
    PA: "ਲੈਣ-ਦੇਣ ਆਈਡੀ (PFMS / DBT):"
  },
  "Beneficiary Farmer:": {
    HI: "लाभार्थी किसान:",
    PA: "ਲਾਭਪਾਤਰੀ ਕਿਸਾਨ:"
  },
  "Aadhaar & PM-KISAN:": {
    HI: "आधार व पीएम-किसान संख्या:",
    PA: "ਆਧਾਰ ਅਤੇ ਪੀਐਮ-ਕਿਸਾਨ:"
  },
  "Credited Bank Account:": {
    HI: "जमा बैंक खाता:",
    PA: "ਜਮ੍ਹਾਂ ਬੈਂਕ ਖਾਤਾ:"
  },
  "Govt MSP Rate Applied:": {
    HI: "लागू सरकारी एमएसपी दर:",
    PA: "ਲਾਗੂ ਸਰਕਾਰੀ ਐਮਐਸਪੀ ਦਰ:"
  },
  "Lab Moisture Reading:": {
    HI: "लैब नमी परिणाम:",
    PA: "ਲੈਬ ਨਮੀ ਰਿਪੋਰਟ:"
  },
  "Payment Mode:": {
    HI: "भुगतान का माध्यम:",
    PA: "ਭੁਗਤਾਨ ਮੋਡ:"
  },
  "e-NAM PFMS Direct Transfer": {
    HI: "ई-नाम PFMS प्रत्यक्ष बैंक अंतरण",
    PA: "ਈ-ਨਾਮ PFMS ਸਿੱਧਾ ਬੈਂਕ ਟਰਾਂਸਫਰ"
  },
  "Download e-NAM Payment Slip (PDF)": {
    HI: "आधिकारिक ई-नाम भुगतान पर्ची (PDF) डाउनलोड करें",
    PA: "ਅਧਿਕਾਰਤ ਈ-ਨਾਮ ਭੁਗਤਾਨ ਪਰਚੀ (PDF) ਡਾਊਨਲੋਡ ਕਰੋ"
  },
  "No completed payments yet. Book a slot and complete grain delivery.": {
    HI: "अभी कोई पूर्ण भुगतान नहीं है। स्लॉट बुक करें और तुलाई पूर्ण करें।",
    PA: "ਅਜੇ ਕੋਈ ਮੁਕੰਮਲ ਭੁਗਤਾਨ ਨਹੀਂ ਹੈ। ਸਲਾਟ ਬੁੱਕ ਕਰੋ ਅਤੇ ਅਨਾਜ ਦੀ ਤੁਲਾਈ ਪੂਰੀ ਕਰੋ।"
  },

  // Profile View
  "Farmer KYC Profile": {
    HI: "किसान प्रोफाइल व बैंक विवरण",
    PA: "ਕਿਸਾਨ ਪ੍ਰੋਫਾਈਲ ਅਤੇ ਬੈਂਕ ਵੇਰਵੇ"
  },
  "PM-KISAN Active Beneficiary": {
    HI: "पीएम-किसान सक्रिय लाभार्थी",
    PA: "ਪੀਐਮ-ਕਿਸਾਨ ਸਰਗਰਮ ਲਾਭਪਾਤਰੀ"
  },
  "Mobile:": {
    HI: "मोबाइल नंबर:",
    PA: "ਮੋਬਾਈਲ ਨੰਬਰ:"
  },
  "Aadhaar:": {
    HI: "आधार संख्या:",
    PA: "ਆਧਾਰ ਨੰਬਰ:"
  },
  "PM-KISAN ID:": {
    HI: "पीएम-किसान संख्या:",
    PA: "ਪੀਐਮ-ਕਿਸਾਨ ਆਈਡੀ:"
  },
  "Landholding Size:": {
    HI: "जमीन का रकबा:",
    PA: "ਜ਼ਮੀਨ ਦਾ ਆਕਾਰ:"
  },
  "Transport:": {
    HI: "वाहन विवरण:",
    PA: "ਵਾਹਨ ਦਾ ਵੇਰਵਾ:"
  },
  "Bank Account:": {
    HI: "बैंक खाता:",
    PA: "ਬੈਂਕ ਖਾਤਾ:"
  },
  "Log Out / Switch Farmer Account": {
    HI: "लॉग आउट करें / दूसरा किसान खाता बदलें",
    PA: "ਲੌਗ ਆਉਟ / ਦੂਜਾ ਕਿਸਾਨ ਖਾਤਾ ਚੁਣੋ"
  },

  // Gallery View
  "Real Mandi Infrastructure & QC": {
    HI: "जमीनी मंडी अवसंरचना व गुणवत्ता जांच",
    PA: "ਮੰਡੀ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਤੇ ਗੁਣਵੱਤਾ ਜਾਂਚ"
  },
  "Farmer Digital Token at Gate": {
    HI: "मंडी गेट पर किसान डिजिटल टोकन",
    PA: "ਗੇਟ ਤੇ ਕਿਸਾਨ ਦਾ ਡਿਜੀਟਲ ਟੋਕਨ"
  },
  "Instant QR code verification at Mandi Entry Gate eliminating manual bribery and paperwork.": {
    HI: "मंडी प्रवेश द्वार पर त्वरित क्यूआर कोड सत्यापन, कागजी कार्रवाई व बिचौलियों से मुक्ति।",
    PA: "ਮੰਡੀ ਐਂਟਰੀ ਗੇਟ 'ਤੇ ਤੁਰੰਤ ਕਿਊਆਰ ਕੋਡ ਤਸਦੀਕ, ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਅਤੇ ਵਿਚੋਲਿਆਂ ਤੋਂ ਮੁਕਤੀ।"
  },
  "Certified Electronic Weighbridge": {
    HI: "प्रमाणित इलेक्ट्रॉनिक धर्मकांटा",
    PA: "ਤਸਦੀਕਸ਼ੁਦਾ ਇਲੈਕਟ੍ਰਾਨਿਕ ਕੰਡਾ"
  },
  "Automated Gross and Tare weighing directly logged onto e-NAM server to prevent weight manipulation.": {
    HI: "सटीक भरा व खाली वजन सीधे ई-नाम सर्वर पर दर्ज, घटतौली की कोई गुंजाइश नहीं।",
    PA: "ਸਹੀ ਭਰਿਆ ਅਤੇ ਖਾਲੀ ਵਜ਼ਨ ਸਿੱਧਾ ਈ-ਨਾਮ ਸਰਵਰ 'ਤੇ ਦਰਜ, ਵਜ਼ਨ ਘੱਟ-ਵੱਧ ਹੋਣ ਦਾ ਕੋਈ ਖ਼ਤਰਾ ਨਹੀਂ।"
  },
  "Scientific QC Moisture Testing Lab": {
    HI: "वैज्ञानिक नमी परीक्षण प्रयोगशाला",
    PA: "ਵਿਗਿਆਨਕ ਨਮੀ ਟੈਸਟਿੰਗ ਲੈਬ"
  },
  "Digital moisture meters ensure fair dockage calculation compliant with FCI ≤12% moisture standard.": {
    HI: "डिजिटल नमी मीटर से 15 सेकंड में निष्पक्ष जांच, एफसीआई के 12% मानक के अनुरूप।",
    PA: "ਡਿਜੀਟਲ ਨਮੀ ਮੀਟਰ ਨਾਲ 15 ਸਕਿੰਟਾਂ ਵਿੱਚ ਜਾਂਚ, ਐਫਸੀਆਈ ਦੇ 12% ਮਿਆਰ ਅਨੁਸਾਰ।"
  },
  "Weather-Protected Grain Silo Complex": {
    HI: "मौसम से सुरक्षित कवर्ड साइलो गोदाम",
    PA: "ਮੀਂਹ ਤੋਂ ਸੁਰੱਖਿਅਤ ਅਨਾਜ ਸਾਈਲੋ"
  },
  "Automated weather radar alerts redirect inbound tractor queues into covered silos during storms.": {
    HI: "मौसम रडार चेतावनी से बारिश शुरू होने से पहले ही खुली ट्रॉलियों को कवर्ड शेड में भेजा जाता है।",
    PA: "ਮੌਸਮ ਰਡਾਰ ਚੇਤਾਵਨੀ ਨਾਲ ਮੀਂਹ ਪੈਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਖੁੱਲ੍ਹੀਆਂ ਟਰਾਲੀਆਂ ਨੂੰ ਢਕੇ ਸ਼ੈੱਡਾਂ ਵਿੱਚ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ।"
  },

  // Bottom Navigation
  "Home": {
    HI: "होम",
    PA: "ਮੁੱਖ"
  },
  "Book": {
    HI: "बुकिंग",
    PA: "ਬੁਕਿੰਗ"
  },
  "Queue": {
    HI: "कतार",
    PA: "ਕਤਾਰ"
  },
  "Gallery": {
    HI: "गैलरी",
    PA: "ਗੈਲਰੀ"
  },
  "Profile": {
    HI: "प्रोफाइल",
    PA: "ਪ੍ਰੋਫਾਈਲ"
  },

  // Mandi Simulation Console
  "e-NAM Mandi Simulation Console": {
    HI: "ई-नाम मंडी सिमुलेशन कंसोल",
    PA: "ਈ-ਨਾਮ ਮੰਡੀ ਸਿਮੂਲੇਸ਼ਨ ਕੰਸੋਲ"
  },
  "Simulate real-time mandi yard operations & stage progression:": {
    HI: "मंडी प्रांगण संचालन एवं चरणबद्ध प्रगति का वास्तविक समय सिमुलेशन:",
    PA: "ਮੰਡੀ ਯਾਰਡ ਕਾਰਜਪ੍ਰਣਾਲੀ ਅਤੇ ਪੜਾਅਵਾਰ ਪ੍ਰਗਤੀ ਲਾਈਵ ਦੇਖੋ:"
  },
  "Switch to Small Farmer (Khanna Mandi)": {
    HI: "छोटे किसान (खन्ना मंडी) पर स्विच करें",
    PA: "ਛੋਟੇ ਕਿਸਾਨ (ਖੰਨਾ ਮੰਡੀ) 'ਤੇ ਸਵਿੱਚ ਕਰੋ"
  },
  "Reset Demo Booking State": {
    HI: "डेमो स्थिति रीसेट करें",
    PA: "ਡੈਮੋ ਸਥਿਤੀ ਰੀਸੈਟ ਕਰੋ"
  }
};

export function tHelper(lang: Lang, en: string, hi?: string, pa?: string): string {
  if (lang === 'HI') {
    if (hi) return hi;
    return I18N_DICT[en]?.HI || en;
  }
  if (lang === 'PA') {
    if (pa) return pa;
    return I18N_DICT[en]?.PA || en;
  }
  return en;
}

// Universal DOM TextNode Translator to guarantee 100% translation coverage
export function translateDOM(container: HTMLElement | Document, lang: Lang) {
  if (lang === 'EN') {
    // Restore all cached original texts
    container.querySelectorAll('[data-orig-text]').forEach(el => {
      el.textContent = el.getAttribute('data-orig-text') || el.textContent;
    });
    container.querySelectorAll('[data-orig-placeholder]').forEach(el => {
      const orig = el.getAttribute('data-orig-placeholder');
      if (orig) (el as HTMLInputElement).placeholder = orig;
    });
    return;
  }

  // 1. Text Nodes
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
  let node: Text | null;
  while ((node = walker.nextNode() as Text | null)) {
    const raw = node.nodeValue?.trim();
    if (raw && I18N_DICT[raw]) {
      const trans = I18N_DICT[raw][lang];
      if (trans && node.nodeValue) {
        const parent = node.parentElement;
        if (parent && !parent.hasAttribute('data-orig-text')) {
          parent.setAttribute('data-orig-text', node.nodeValue);
        }
        node.nodeValue = node.nodeValue.replace(raw, trans);
      }
    }
  }

  // 2. Input Placeholders
  container.querySelectorAll('input, textarea').forEach(el => {
    const input = el as HTMLInputElement;
    const ph = input.placeholder?.trim();
    if (ph) {
      if (!input.hasAttribute('data-orig-placeholder')) {
        input.setAttribute('data-orig-placeholder', ph);
      }
      const orig = input.getAttribute('data-orig-placeholder') || ph;
      if (I18N_DICT[orig] && I18N_DICT[orig][lang]) {
        input.placeholder = I18N_DICT[orig][lang];
      }
    }
  });
}
