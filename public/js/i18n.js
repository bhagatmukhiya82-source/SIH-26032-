// Multilingual support for KISAN-Q (Comprehensive e-NAM National Standard)
const translations = {
  en: {
    govtOfIndia: "GOVT OF INDIA",
    govtTitle: "Ministry of Agriculture & Farmers Welfare • National Agriculture Market (e-NAM)",
    appTitle: "KISAN-Q: Smart Slot Booking",
    tagline: "Restoring Time, Money & Dignity to the Indian Farmer",
    langLabel: "Language:",
    helplineText: "Helpline: 1800-270-0224 (Toll Free)",
    openMobileApp: "📱 Farmer Mobile App (Port 8443)",
    signInBtn: "Farmer Sign In",
    registerBtn: "New Farmer Register",
    downloadAppBtn: "📲 Download App",
    appDownloadModalTitle: "KISAN-Q Mobile App Download",
    liveTimeLabel: "Live Time:",
    wifiLabel: "Wi-Fi:",

    tabFarmer: "🌾 Farmer Portal",
    tabIVR: "📱 Zero-Smartphone IVR",
    tabWeather: "🛰️ IMD Weather Radar",
    tabImpact: "📊 Impact & Benefits",
    tabMatrix: "🏛️ APMC Standards & SOP",
    tabOffers: "🎁 Mandi Offers & Tenders",
    tabTimeline: "📈 Price Timeline & Hikes/Lows",
    tabPreview: "👁️ Mandi Preview",
    handbookPdf: "📄 Handbook PDF",

    liveTickerBadge: "e-NAM LIVE TICKER",
    tickerContent: "🌾 Wheat MSP ₹2,275/Qtl ▲ (+₹150) • 🍚 Paddy MSP ₹2,300/Qtl ▲ (+₹117) • 🌻 Mustard MSP ₹5,650/Qtl ▲ (+₹200) • 🚜 APMC Mandi #042: Gate 1 Smallholder Express Turnaround: 18 min • ⛈️ IMD Doppler Radar: Clear weather across North Indian mandis • 💰 1.77+ Crore Farmers paid via PFMS Direct Benefit Transfer • 🏛️ 1,361+ e-NAM Mandis Nationwide",
    statFarmers: "1.77+ Crore",
    statFarmersSub: "Registered Farmers",
    statMandis: "1,361+ Mandis",
    statMandisSub: "Nationwide e-NAM",
    statWait: "96% Wait Cut",
    statWaitSub: "18h → 45m Turnaround",
    statDbt: "100% DBT",
    statDbtSub: "Direct Bank Payout",

    chaosConsoleBadge: "CHAOS CONSOLE",
    chaosTitle: "Mandi Field Resilience & Stress Testing",
    chaosSubtitle: "Demonstrating how KISAN-Q recovers automatically when physical mandi operations or network links fail",
    simBreakdownBtn: "Simulate 10-Wheeler Breakdown at Gate 1",
    simCloudBtn: "Simulate State Cloud Server Outage",

    quickPresetsLabel: "Quick Demo Presets",
    quickPresetsSub: "Click to instantly populate realistic farmer data:",
    presetMarginal: "Marginal Farmer (<1 ha Wheat)",
    presetSmall: "Small Farmer (1.6 ha Mustard)",
    presetCommercial: "Commercial Trader (5.5 ha)",

    bookSlotTitle: "Book Your Grain Procurement Slot",
    bookSlotSubtitle: "Staggered 1-hour slots matched to weighbridge throughput",
    farmerNameLabel: "Farmer Full Name",
    phoneLabel: "Mobile Number",
    landSizeLabel: "Landholding Size (Hectares)",
    cropLabel: "Crop Type (MSP Guaranteed)",
    vehicleLabel: "Vehicle Number",
    vehicleTypeLabel: "Vehicle Type",
    estWeightLabel: "Estimated Load (Metric Tonnes)",
    preferredSlotLabel: "Select 1-Hour Time Window",
    slotHelpText: "Slots are dynamically regulated to prevent highway tractor queues.",
    bookButton: "Generate Digital Token & Gate Pass",
    marginalBadge: "Fair-Share Quota: Marginal Farmer (<2 ha) Priority Enabled",

    lookupTitle: "Lookup Existing Token",
    lookupBtn: "Search",
    searchPlaceholder: "Enter Token # (e.g. 42) or Phone",
    gatePassTitle: "Krishi Mandi Gate Pass",
    farmerLabel: "Farmer:",
    vehicleNoLabel: "Vehicle:",
    cropTypeLabel: "Crop:",
    assignedGateLabel: "Assigned Gate:",
    arrivalWindowLabel: "Arrival Window:",
    assignedSlotLabel: "Assigned Slot:",
    slotArrivalWindow: "Please arrive within this 60-min window for instant direct weighment.",
    liveEstTurnaround: "Live Est. Turnaround:",
    roadsideWaitSlashed: "Roadside wait slashed by 96%",
    tatLabel: "Turnaround Time Meter",
    tatSubtitle: "Expected time from physical gate arrival to gross/tare weighment and direct payment receipt.",
    printPass: "Print / Save Pass",

    authModalTitle: "Farmer Portal Access (e-NAM / PM-KISAN)",
    tabSignIn: "Farmer Sign In",
    tabRegister: "New Farmer Registration",
    loginPhoneLabel: "Registered Mobile Number",
    loginOtpLabel: "4-Digit OTP",
    sendOtpBtn: "Send OTP (Demo)",
    loginSubmitBtn: "Verify & Sign In",
    regNameLabel: "Farmer Full Name",
    regPhoneLabel: "Mobile Number",
    regAadhaarLabel: "Aadhaar / PM-KISAN ID",
    regLandLabel: "Landholding Size (Hectares)",
    regCropLabel: "Primary Crop to Sell",
    regVehicleLabel: "Vehicle Registration No",
    regVehicleTypeLabel: "Vehicle Type",
    regBankLabel: "DBT Linked Bank / IFSC",
    regSubmitBtn: "Register & Auto-Fill Booking Form",

    ivrTitle: "Zero-Smartphone Access: Feature Phone IVR Simulator",
    ivrSubtitle: "Works on basic ₹800 keypad phones without internet or Android/iOS",
    ivrDialectLabel: "Simulate Farmer Dialect / Voice:",
    ivrMissedCallBtn: "Simulate 1-Ring Missed Call (Instant SMS Token)",
    ivrTollFreeBtn: "Load Toll-Free 1800-547-2600",
    ivrSmsTitle: "Incoming Government SMS Notification Received:",
    ivrSmsSub: "Farmer shows this 5-character SMS to the Gate Guard for rapid entry pass scan.",

    selectStateLabel: "Select Agricultural State / Mandi Hub:",
    weatherTitle: "Weather-Aware Queue Pause & Silo Rerouting",
    weatherSubtitle: "Real-time sync with India Meteorological Department (IMD) Doppler Radar nowcasting",
    tempLabel: "Mandi Yard Temperature",
    rainRiskLabel: "Precipitation Radar Probability",
    skyCondLabel: "Atmospheric Sky Condition",
    siloBannerTitle: "Covered Transit Silo Sheds: 14 Tractors Protected Before Rain Hits",
    siloBannerDesc: "When Doppler radar detects precipitation risk >70%, KISAN-Q automatically halts open trolley dispatches and diverts en-route tractors into covered high-canopy transit silos, preventing ₹10+ Crores in annual post-harvest rain spoilage.",
    simulateRainBtn: "Simulate Severe Rain Warning (Trigger Auto-Pause & Covered Reroute)",
    simulateClearBtn: "Restore Clear Weather (Resume Pacing)",

    impactTitle: "Multi-Dimensional Impact Matrix",
    impactSubtitle: "Quantified benefits for farmers, transporters, and APMC administration",
    metricWaitTitle: "Reduction in Waiting Time",
    metricWaitDesc: "Slashes highway tractor gridlocks from 48–72 hours down to under 60 minutes from gate arrival to tare weighment exit.",
    metricSavedTitle: "Per Farmer Per Trip",
    metricSavedDesc: "Eliminates 3 days of tractor-trolley rental penalties (₹1,500/day) and stops coercive distress sales below MSP.",
    metricSpoilageTitle: "Post-Harvest Spoilage",
    metricSpoilageDesc: "Weather-triggered IMD radar diversion shields exposed grains from unexpected downpours, protecting farmer income."
  },

  hi: {
    govtOfIndia: "भारत सरकार",
    govtTitle: "कृषि एवं किसान कल्याण मंत्रालय • भारत सरकार • राष्ट्रीय कृषि बाज़ार (e-NAM)",
    appTitle: "किसान-Q: स्मार्ट स्लॉट बुकिंग",
    tagline: "भारतीय किसान के समय, धन और सम्मान की सुरक्षा",
    langLabel: "भाषा चुनें:",
    helplineText: "हेल्पलाइन: 1800-270-0224 (टोल फ्री)",
    openMobileApp: "📱 किसान मोबाइल ऐप (पोर्ट 8443)",
    signInBtn: "किसान लॉग इन",
    registerBtn: "नया किसान पंजीकरण",
    downloadAppBtn: "📲 मोबाइल ऐप डाउनलोड",
    appDownloadModalTitle: "किसान-Q मोबाइल ऐप डाउनलोड केंद्र",
    liveTimeLabel: "लाइव समय:",
    wifiLabel: "वाई-फ़ाई:",

    tabFarmer: "🌾 किसान पोर्टल",
    tabIVR: "📱 कीपैड फोन (IVR)",
    tabWeather: "🛰️ मौसम रडार",
    tabImpact: "📊 लाभ एवं प्रभाव",
    tabMatrix: "🏛️ एपीएमसी मानक व एसओपी",
    tabOffers: "🎁 मंडी विशेष ऑफर व टेंडर",
    tabTimeline: "📈 भाव टाइमलाइन व तेजी-मंदी",
    tabPreview: "👁️ मंडी पूर्वावलोकन व टूर",
    handbookPdf: "📄 हैंडबुक (PDF)",

    liveTickerBadge: "ई-नाम लाइव टिकर",
    tickerContent: "🌾 गेहूं MSP ₹2,275/क्विंटल ▲ (+₹150) • 🍚 धान MSP ₹2,300/क्विंटल ▲ (+₹117) • 🌻 सरसों MSP ₹5,650/क्विंटल ▲ (+₹200) • 🚜 एपीएमसी मंडी: गेट 1 छोटे किसानों का टर्नअराउंड: 18 मिनट • ⛈️ आईएमडी डॉपलर रडार: मौसम साफ • 💰 1.77+ करोड़ किसानों को डीबीटी भुगतान • 🏛️ 1,361+ ई-नाम मंडियां सक्रिय",
    statFarmers: "1.77+ करोड़",
    statFarmersSub: "पंजीकृत किसान",
    statMandis: "1,361+ मंडियां",
    statMandisSub: "देशभर में ई-नाम",
    statWait: "96% इंतज़ार खत्म",
    statWaitSub: "18 घंटे → मात्र 45 मिनट",
    statDbt: "100% डीबीटी",
    statDbtSub: "सीधे बैंक खाते में भुगतान",

    chaosConsoleBadge: "केओस कंसोल",
    chaosTitle: "जजों के लिए लाइव सिस्टम रेजिलिएंस टेस्ट",
    chaosSubtitle: "जांचें कि गेट खराबी या राज्य क्लाउड सर्वर डाउन होने पर किसान-Q कैसे तुरंत रिकवर करता है",
    simBreakdownBtn: "गेट 1 पर 10-चक्का ट्रॉली ब्रेकडाउन सिमुलेट करें",
    simCloudBtn: "राज्य क्लाउड सर्वर आउटेज सिमुलेट करें (लोकल मोड)",

    quickPresetsLabel: "त्वरित डेमो प्रीसेट",
    quickPresetsSub: "क्लिक करके तुरंत किसान का डेटा भरें:",
    presetMarginal: "सीमांत किसान (<1 हेक्टेयर गेहूं)",
    presetSmall: "छोटा किसान (1.6 हेक्टेयर सरसों)",
    presetCommercial: "बड़ा किसान (5.5 हेक्टेयर)",

    bookSlotTitle: "अपनी फसल तुलाई का समय (स्लॉट) बुक करें",
    bookSlotSubtitle: "धर्मकांटा क्षमता के अनुसार 1-1 घंटे के व्यवस्थित स्लॉट",
    farmerNameLabel: "किसान का पूरा नाम",
    phoneLabel: "मोबाइल नंबर",
    landSizeLabel: "जमीन का रकबा (हेक्टेयर)",
    cropLabel: "फसल का प्रकार (एमएसपी गारंटी)",
    vehicleLabel: "वाहन / ट्रैक्टर नंबर",
    vehicleTypeLabel: "वाहन का प्रकार",
    estWeightLabel: "अनुमानित वजन (मीट्रिक टन)",
    preferredSlotLabel: "1 घंटे का समय विंडो चुनें",
    slotHelpText: "सड़क पर जाम न लगे इसलिए स्लॉट स्वचालित नियंत्रित होते हैं।",
    bookButton: "डिजिटल टोकन व गेट पास जारी करें",
    marginalBadge: "फेयर-शेयर कोटा: छोटे व सीमांत किसानों (<2 हे.) को प्राथमिकता सक्रिय",

    lookupTitle: "पुराना टोकन खोजें",
    lookupBtn: "खोजें",
    searchPlaceholder: "टोकन नंबर (उदा. 42) या फोन नंबर दर्ज करें",
    gatePassTitle: "कृषि उपज मंडी डिजिटल गेट पास",
    farmerLabel: "किसान:",
    vehicleNoLabel: "वाहन नंबर:",
    cropTypeLabel: "फसल:",
    assignedGateLabel: "आवंटित गेट:",
    arrivalWindowLabel: "आगमन समय:",
    assignedSlotLabel: "आवंटित स्लॉट:",
    slotArrivalWindow: "कृपया दिए गए 60 मिनट के अंतराल में पहुंचें ताकि तुरंत तुलाई हो सके।",
    liveEstTurnaround: "अनुमानित कुल समय:",
    roadsideWaitSlashed: "सड़क पर इंतजार 96% घटा",
    tatLabel: "मंडी टर्नअराउंड समय मीटर",
    tatSubtitle: "गेट आगमन से लेकर तुलाई और भुगतान रसीद मिलने का समय।",
    printPass: "गेट पास प्रिंट / सेव करें",

    authModalTitle: "किसान पोर्टल लॉगिन (e-NAM / PM-KISAN)",
    tabSignIn: "किसान लॉग इन",
    tabRegister: "नया किसान पंजीकरण",
    loginPhoneLabel: "पंजीकृत मोबाइल नंबर",
    loginOtpLabel: "4-अंकीय ओटीपी (OTP)",
    sendOtpBtn: "ओटीपी भेजें (डेमो)",
    loginSubmitBtn: "सत्यापित करें और लॉग इन करें",
    regNameLabel: "किसान का पूरा नाम",
    regPhoneLabel: "मोबाइल नंबर",
    regAadhaarLabel: "आधार / पीएम-किसान आईडी",
    regLandLabel: "जमीन का रकबा (हेक्टेयर)",
    regCropLabel: "बेची जाने वाली प्रमुख फसल",
    regVehicleLabel: "वाहन / ट्रैक्टर नंबर",
    regVehicleTypeLabel: "वाहन का प्रकार",
    regBankLabel: "डीबीटी बैंक खाता / IFSC कोड",
    regSubmitBtn: "पंजीकृत करें व फॉर्म भरें",

    ivrTitle: "बिना स्मार्टफोन सुविधा: सामान्य कीपैड फोन आईवीआर (IVR) सिम्युलेटर",
    ivrSubtitle: "₹800 वाले साधारण कीपैड फोन पर बिना इंटरनेट और बिना टचस्क्रीन काम करता है",
    ivrDialectLabel: "किसान बोली / भाषा चुनें:",
    ivrMissedCallBtn: "1-घंटी मिस्ड कॉल सिमुलेट करें (तुरंत एसएमएस टोकन)",
    ivrTollFreeBtn: "टोल-फ्री नंबर 1800-547-2600 डायल करें",
    ivrSmsTitle: "आधिकारिक सरकारी एसएमएस संदेश प्राप्त हुआ:",
    ivrSmsSub: "किसान मंडी गेट पर यह 5-अक्षर का कोड सुरक्षा गार्ड को दिखाकर सीधे प्रवेश कर सकते हैं।",

    selectStateLabel: "कृषि राज्य / मंडी हब चुनें:",
    weatherTitle: "मौसम आधारित कतार नियंत्रण और साइलो डायवर्जन",
    weatherSubtitle: "भारतीय मौसम विज्ञान विभाग (IMD) डॉपलर रडार से रियल-टाइम सिंक",
    tempLabel: "मंडी प्रांगण तापमान",
    rainRiskLabel: "बारिश की संभावना",
    skyCondLabel: "आसमानी स्थिति",
    siloBannerTitle: "कवर्ड साइलो शेड: बारिश आने से पहले 14 ट्रॉली सुरक्षित",
    siloBannerDesc: "जब रडार 70% से अधिक बारिश का संकेत देता है, किसान-Q खुली ट्रॉलियों को तुरंत ढके हुए शेड में भेज देता है, जिससे फसल भीगने से बचती है।",
    simulateRainBtn: "भारी बारिश की चेतावनी सिमुलेट करें (कवर्ड शेड डायवर्जन)",
    simulateClearBtn: "मौसम साफ सिमुलेट करें (सामान्य संचालन)",

    impactTitle: "ज़मीनी प्रभाव एवं सामाजिक-आर्थिक लाभ",
    impactSubtitle: "किसानों, व्यापारियों और मंडी प्रशासन के लिए प्रमाणित बचत",
    metricWaitTitle: "इंतज़ार के समय में 96% कमी",
    metricWaitDesc: "हाईवे पर 48-72 घंटे के लंबे जाम से मुक्ति, अब केवल 45 मिनट में तुलाई पूरी।",
    metricSavedTitle: "प्रति किसान प्रति चक्कर बचत",
    metricSavedDesc: "ट्रॉली का 3 दिन का किराया (₹1,500/दिन) बचा और औने-पौने दाम पर फसल बेचने की मजबूरी खत्म।",
    metricSpoilageTitle: "फसल सड़न का नुकसान 0%",
    metricSpoilageDesc: "मौसम रडार चेतावनी से खुली उपज को भीगने से पहले सुरक्षित गोदामों में भेजा जाता है।"
  },

  pa: {
    govtOfIndia: "ਭਾਰਤ ਸਰਕਾਰ",
    govtTitle: "ਖੇਤੀਬਾੜੀ ਅਤੇ ਕਿਸਾਨ ਭਲਾਈ ਮੰਤਰਾਲਾ • ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ ਮੰਡੀ (e-NAM)",
    appTitle: "ਕਿਸਾਨ-Q: ਸਮਾਰਟ ਸਲਾਟ ਬੁਕਿੰਗ",
    tagline: "ਭਾਰਤੀ ਕਿਸਾਨ ਦੇ ਸਮੇਂ, ਪੈਸੇ ਅਤੇ ਸਤਿਕਾਰ ਦੀ ਰਾਖੀ",
    langLabel: "ਭਾਸ਼ਾ ਚੁਣੋ:",
    helplineText: "ਹੈਲਪਲਾਈਨ: 1800-270-0224 (ਟੋਲ ਫ੍ਰੀ)",
    openMobileApp: "📱 ਕਿਸਾਨ ਮੋਬਾਈਲ ਐਪ (ਪੋਰਟ 8443)",
    signInBtn: "ਕਿਸਾਨ ਲੌਗ ਇਨ",
    registerBtn: "ਨਵਾਂ ਕਿਸਾਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
    downloadAppBtn: "📲 ਮੋਬਾਈਲ ਐਪ ਡਾਊਨਲੋਡ",
    appDownloadModalTitle: "ਕਿਸਾਨ-Q ਮੋਬਾਈਲ ਐਪ ਡਾਊਨਲੋਡ ਕੇਂਦਰ",
    liveTimeLabel: "ਲਾਈਵ ਸਮਾਂ:",
    wifiLabel: "ਵਾਈ-ਫਾਈ:",

    tabFarmer: "🌾 ਕਿਸਾਨ ਪੋਰਟਲ",
    tabIVR: "📱 ਕੀਪੈਡ ਫੋਨ (IVR)",
    tabWeather: "🛰️ ਮੌਸਮ ਰਾਡਾਰ",
    tabImpact: "📊 ਲਾਭ ਅਤੇ ਪ੍ਰਭਾਵ",
    tabMatrix: "🏛️ ਮੰਡੀ ਮਿਆਰ ਤੇ ਐਸਓਪੀ",
    tabOffers: "🎁 ਮੰਡੀ ਆਫਰ ਤੇ ਟੈਂਡਰ",
    tabTimeline: "📈 ਭਾਅ ਟਾਈਮਲਾਈਨ ਤੇ ਵਾਧੇ-ਘਾਟੇ",
    tabPreview: "👁️ ਮੰਡੀ ਝਲਕ ਤੇ ਟੂਰ",
    handbookPdf: "📄 ਹੈਂਡਬੁੱਕ (PDF)",

    liveTickerBadge: "ਈ-ਨਾਮ ਲਾਈਵ ਟਿਕਰ",
    tickerContent: "🌾 ਕਣਕ MSP ₹2,275/ਕੁਇੰਟਲ ▲ (+₹150) • 🍚 ਝੋਨਾ MSP ₹2,300/ਕੁਇੰਟਲ ▲ (+₹117) • 🌻 ਸਰ੍ਹੋਂ MSP ₹5,650/ਕੁਇੰਟਲ ▲ (+₹200) • 🚜 ਏਪੀਐਮਸੀ ਮੰਡੀ: ਗੇਟ 1 ਟਰਨਅਰਾਊਂਡ: 18 ਮਿੰਟ • ⛈️ ਮੌਸਮ ਸਾਫ਼ • 💰 1.77+ ਕਰੋੜ ਕਿਸਾਨਾਂ ਨੂੰ ਡੀਬੀਟੀ ਭੁਗਤਾਨ",
    statFarmers: "1.77+ ਕਰੋੜ",
    statFarmersSub: "ਰਜਿਸਟਰਡ ਕਿਸਾਨ",
    statMandis: "1,361+ ਮੰਡੀਆਂ",
    statMandisSub: "ਦੇਸ਼ ਭਰ ਵਿੱਚ ਈ-ਨਾਮ",
    statWait: "96% ਉਡੀਕ ਘਟੀ",
    statWaitSub: "18 ਘੰਟੇ → ਸਿਰਫ਼ 45 ਮਿੰਟ",
    statDbt: "100% ਡੀਬੀਟੀ",
    statDbtSub: "ਸਿੱਧੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਭੁਗਤਾਨ",

    chaosConsoleBadge: "ਕੈਓਸ ਕੰਸੋਲ",
    chaosTitle: "ਸਿਸਟਮ ਰੀਜ਼ੀਲੀਅੰਸ ਟੈਸਟ",
    chaosSubtitle: "ਵੇਖੋ ਕਿ ਗੇਟ ਜਾਮ ਜਾਂ ਸਰਵਰ ਡਾਊਨ ਹੋਣ 'ਤੇ ਕਿਸਾਨ-Q ਕਿਵੇਂ ਤੁਰੰਤ ਕੰਮ ਜਾਰੀ ਰੱਖਦਾ ਹੈ",
    simBreakdownBtn: "ਗੇਟ 1 'ਤੇ ਟਰਾਲੀ ਬ੍ਰੇਕਡਾਊਨ ਸਿਮੂਲੇਟ ਕਰੋ",
    simCloudBtn: "ਕਲਾਊਡ ਸਰਵਰ ਆਊਟੇਜ ਸਿਮੂਲੇਟ ਕਰੋ (ਆਫਲਾਈਨ ਮੋਡ)",

    quickPresetsLabel: "ਡੈਮੋ ਪ੍ਰੀਸੈੱਟ",
    quickPresetsSub: "ਕਲਿੱਕ ਕਰਕੇ ਤੁਰੰਤ ਕਿਸਾਨ ਡਾਟਾ ਭਰੋ:",
    presetMarginal: "ਛੋਟਾ ਕਿਸਾਨ (<1 ਹੈਕਟੇਅਰ ਕਣਕ)",
    presetSmall: "ਦਰਮਿਆਨਾ ਕਿਸਾਨ (1.6 ਹੈਕਟੇਅਰ ਸਰ੍ਹੋਂ)",
    presetCommercial: "ਵੱਡਾ ਕਿਸਾਨ (5.5 ਹੈਕਟੇਅਰ)",

    bookSlotTitle: "ਆਪਣੀ ਫਸਲ ਤੁਲਾਈ ਦਾ ਸਮਾਂ (ਸਲਾਟ) ਬੁੱਕ ਕਰੋ",
    bookSlotSubtitle: "ਕੰਡੇ ਦੀ ਸਮਰੱਥਾ ਅਨੁਸਾਰ 1-1 ਘੰਟੇ ਦੇ ਸਲਾਟ",
    farmerNameLabel: "ਕਿਸਾਨ ਦਾ ਪੂਰਾ ਨਾਮ",
    phoneLabel: "ਮੋਬਾਈਲ ਨੰਬਰ",
    landSizeLabel: "ਜ਼ਮੀਨ ਦਾ ਰਕਬਾ (ਹੈਕਟੇਅਰ)",
    cropLabel: "ਫਸਲ ਦੀ ਕਿਸਮ (MSP ਗਾਰੰਟੀ)",
    vehicleLabel: "ਵਾਹਨ / ਟਰੈਕਟਰ ਨੰਬਰ",
    vehicleTypeLabel: "ਵਾਹਨ ਦੀ ਕਿਸਮ",
    estWeightLabel: "ਅਨੁਮਾਨਿਤ ਵਜ਼ਨ (ਮੀਟ੍ਰਿਕ ਟਨ)",
    preferredSlotLabel: "1 ਘੰਟੇ ਦਾ ਸਮਾਂ ਚੁਣੋ",
    slotHelpText: "ਸੜਕ 'ਤੇ ਜਾਮ ਨਾ ਲੱਗੇ ਇਸ ਲਈ ਸਲਾਟ ਆਟੋ-ਨਿਯੰਤਰਿਤ ਹੁੰਦੇ ਹਨ।",
    bookButton: "ਡਿਜੀਟਲ ਟੋਕਨ ਅਤੇ ਗੇਟ ਪਾਸ ਜਾਰੀ ਕਰੋ",
    marginalBadge: "ਫੇਅਰ-ਸ਼ੇਅਰ ਕੋਟਾ: ਛੋਟੇ ਕਿਸਾਨਾਂ (<2 ਹੈ.) ਨੂੰ ਤਰਜੀਹ ਸਰਗਰਮ",

    lookupTitle: "ਪੁਰਾਣਾ ਟੋਕਨ ਲੱਭੋ",
    lookupBtn: "ਖੋਜੋ",
    searchPlaceholder: "ਟੋਕਨ ਨੰਬਰ (ਜਿਵੇਂ 42) ਜਾਂ ਫੋਨ ਦਰਜ ਕਰੋ",
    gatePassTitle: "ਮੰਡੀ ਡਿਜੀਟਲ ਗੇਟ ਪਾਸ",
    farmerLabel: "ਕਿਸਾਨ:",
    vehicleNoLabel: "ਵਾਹਨ ਨੰਬਰ:",
    cropTypeLabel: "ਫਸਲ:",
    assignedGateLabel: "ਅਲਾਟ ਕੀਤਾ ਗੇਟ:",
    arrivalWindowLabel: "ਪਹੁੰਚਣ ਦਾ ਸਮਾਂ:",
    assignedSlotLabel: "ਅਲਾਟ ਕੀਤਾ ਸਲਾਟ:",
    slotArrivalWindow: "ਕਿਰਪਾ ਕਰਕੇ ਦਿੱਤੇ 60 ਮਿੰਟ ਵਿੱਚ ਪਹੁੰਚੋ ਤਾਂ ਜੋ ਤੁਰੰਤ ਤੁਲਾਈ ਹੋ ਸਕੇ।",
    liveEstTurnaround: "ਅਨੁਮਾਨਿਤ ਸਮਾਂ:",
    roadsideWaitSlashed: "ਸੜਕ 'ਤੇ ਉਡੀਕ 96% ਘਟੀ",
    tatLabel: "ਟਰਨਅਰਾਊਂਡ ਟਾਈਮ ਮੀਟਰ",
    tatSubtitle: "ਗੇਟ ਪਹੁੰਚਣ ਤੋਂ ਲੈ ਕੇ ਤੁਲਾਈ ਅਤੇ ਭੁਗਤਾਨ ਰਸੀਦ ਤੱਕ ਦਾ ਸਮਾਂ।",
    printPass: "ਪਾਸ ਪ੍ਰਿੰਟ / ਸੇਵ ਕਰੋ",

    authModalTitle: "ਕਿਸਾਨ ਪੋਰਟਲ ਲੌਗਇਨ (e-NAM / PM-KISAN)",
    tabSignIn: "ਕਿਸਾਨ ਲੌਗ ਇਨ",
    tabRegister: "ਨਵਾਂ ਕਿਸਾਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
    loginPhoneLabel: "ਰਜਿਸਟਰਡ ਮੋਬਾਈਲ ਨੰਬਰ",
    loginOtpLabel: "4-ਅੰਕਾਂ ਦਾ ਓਟੀਪੀ (OTP)",
    sendOtpBtn: "ਓਟੀਪੀ ਭੇਜੋ (ਡੈਮੋ)",
    loginSubmitBtn: "ਤਸਦੀਕ ਕਰੋ ਅਤੇ ਲੌਗ ਇਨ ਕਰੋ",
    regNameLabel: "ਕਿਸਾਨ ਦਾ ਪੂਰਾ ਨਾਮ",
    regPhoneLabel: "ਮੋਬਾਈਲ ਨੰਬਰ",
    regAadhaarLabel: "ਆਧਾਰ / ਪੀਐਮ-ਕਿਸਾਨ ਆਈਡੀ",
    regLandLabel: "ਜ਼ਮੀਨ ਦਾ ਰਕਬਾ (ਹੈਕਟੇਅਰ)",
    regCropLabel: "ਵੇਚਣ ਵਾਲੀ ਮੁੱਖ ਫਸਲ",
    regVehicleLabel: "ਵਾਹਨ / ਟਰੈਕਟਰ ਨੰਬਰ",
    regVehicleTypeLabel: "ਵਾਹਨ ਦੀ ਕਿਸਮ",
    regBankLabel: "ਡੀਬੀਟੀ ਬੈਂਕ ਖਾਤਾ / IFSC",
    regSubmitBtn: "ਰਜਿਸਟਰ ਕਰੋ ਅਤੇ ਫਾਰਮ ਭਰੋ",

    ivrTitle: "ਬਿਨਾਂ ਸਮਾਰਟਫੋਨ ਸੁਵਿਧਾ: ਸਾਧਾਰਨ ਕੀਪੈਡ ਫੋਨ ਆਈਵੀਆਰ (IVR)",
    ivrSubtitle: "ਸਸਤੇ ₹800 ਵਾਲੇ ਕੀਪੈਡ ਫੋਨ 'ਤੇ ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਕੰਮ ਕਰਦਾ ਹੈ",
    ivrDialectLabel: "ਕਿਸਾਨ ਬੋਲੀ / ਆਵਾਜ਼ ਚੁਣੋ:",
    ivrMissedCallBtn: "1-ਘੰਟੀ ਮਿਸਡ ਕਾਲ ਸਿਮੂਲੇਟ ਕਰੋ (ਤੁਰੰਤ ਐਸਐਮਐਸ)",
    ivrTollFreeBtn: "ਟੋਲ-ਫ੍ਰੀ ਨੰਬਰ 1800-547-2600 ਮਿਲਾਓ",
    ivrSmsTitle: "ਸਰਕਾਰੀ ਐਸਐਮਐਸ ਸੁਨੇਹਾ ਪ੍ਰਾਪਤ ਹੋਇਆ:",
    ivrSmsSub: "ਕਿਸਾਨ ਗੇਟ ਗਾਰਡ ਨੂੰ ਇਹ 5-ਅੱਖਰ ਦਾ ਕੋਡ ਦਿਖਾ ਕੇ ਸਿੱਧਾ ਦਾਖਲਾ ਲੈ ਸਕਦੇ ਹਨ।",

    selectStateLabel: "ਖੇਤੀਬਾੜੀ ਰਾਜ / ਮੰਡੀ ਹੱਬ ਚੁਣੋ:",
    weatherTitle: "ਮੌਸਮ ਅਨੁਕੂਲ ਕਤਾਰ ਨਿਯੰਤਰਣ ਅਤੇ ਸਾਈਲੋ ਡਾਇਵਰਸ਼ਨ",
    weatherSubtitle: "ਭਾਰਤੀ ਮੌਸਮ ਵਿਭਾਗ (IMD) ਡੌਪਲਰ ਰਾਡਾਰ ਨਾਲ ਰੀਅਲ-ਟਾਈਮ ਸਿੰਕ",
    tempLabel: "ਮੰਡੀ ਤਾਪਮਾਨ",
    rainRiskLabel: "ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ",
    skyCondLabel: "ਮੌਸਮ ਦੀ ਸਥਿਤੀ",
    siloBannerTitle: "ਢੱਕੇ ਹੋਏ ਸਾਈਲੋ ਸ਼ੈੱਡ: ਮੀਂਹ ਤੋਂ ਪਹਿਲਾਂ 14 ਟਰੈਕਟਰ ਸੁਰੱਖਿਅਤ",
    siloBannerDesc: "ਰਾਡਾਰ ਚੇਤਾਵਨੀ ਨਾਲ ਮੀਂਹ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਟਰਾਲੀਆਂ ਢੱਕੇ ਹੋਏ ਗੋਦਾਮਾਂ 'ਚ ਭੇਜੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।",
    simulateRainBtn: "ਭਾਰੀ ਮੀਂਹ ਦੀ ਚੇਤਾਵਨੀ ਸਿਮੂਲੇਟ ਕਰੋ",
    simulateClearBtn: "ਮੌਸਮ ਸਾਫ਼ ਸਿਮੂਲੇਟ ਕਰੋ",

    impactTitle: "ਜ਼ਮੀਨੀ ਪ੍ਰਭਾਵ ਅਤੇ ਸਮਾਜਿਕ-ਆਰਥਿਕ ਲਾਭ",
    impactSubtitle: "ਕਿਸਾਨਾਂ, ਵਪਾਰੀਆਂ ਅਤੇ ਮੰਡੀ ਪ੍ਰਸ਼ਾਸਨ ਲਈ ਪ੍ਰਮਾਣਿਤ ਬਚਤ",
    metricWaitTitle: "ਉਡੀਕ ਸਮੇਂ ਵਿੱਚ 96% ਕਟੌਤੀ",
    metricWaitDesc: "18-72 ਘੰਟਿਆਂ ਦੇ ਜਾਮ ਤੋਂ ਘਟ ਕੇ ਸਿਰਫ਼ 45 ਮਿੰਟ ਵਿੱਚ ਕੰਮ ਪੂਰਾ।",
    metricSavedTitle: "ਪ੍ਰਤੀ ਕਿਸਾਨ ਪ੍ਰਤੀ ਗੇੜਾ ਬਚਤ",
    metricSavedDesc: "ਟਰੈਕਟਰ ਕਿਰਾਇਆ, ਡੀਜ਼ਲ ਅਤੇ ਫਸਲ ਖਰਾਬੀ ਦੀ ਬਚਤ।",
    metricSpoilageTitle: "0% ਫਸਲ ਗਲਣ ਦਾ ਨੁਕਸਾਨ",
    metricSpoilageDesc: "ਰਾਡਾਰ ਚੇਤਾਵਨੀ ਨਾਲ ਮੀਂਹ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਟਰਾਲੀਆਂ ਢੱਕੇ ਹੋਏ ਗੋਦਾਮਾਂ 'ਚ ਭੇਜੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।"
  },

  mr: {
    govtOfIndia: "भारत सरकार",
    govtTitle: "कृषी आणि शेतकरी कल्याण मंत्रालय • भारत सरकार • राष्ट्रीय कृषी बाजार (e-NAM)",
    appTitle: "किसान-Q: स्मार्ट स्लॉट बुकिंग",
    tagline: "भारतीय शेतकऱ्यांच्या वेळेची, पैशांची आणि सन्मानाची सुरक्षा",
    langLabel: "भाषा निवडा:",
    helplineText: "हेल्पलाईन: 1800-270-0224 (टोल फ्री)",
    openMobileApp: "📱 शेतकरी मोबाईल ॲप (पोर्ट 8443)",
    signInBtn: "शेतकरी लॉगिन",
    registerBtn: "नवीन शेतकरी नोंदणी",
    downloadAppBtn: "📲 मोबाईल ॲप डाउनलोड",
    appDownloadModalTitle: "किसान-Q मोबाईल ॲप डाउनलोड केंद्र",
    liveTimeLabel: "थेट वेळ:",
    wifiLabel: "वाय-फाय:",

    tabFarmer: "🌾 शेतकरी पोर्टल",
    tabIVR: "📱 कीपॅड फोन (IVR)",
    tabWeather: "🛰️ हवामान रडार",
    tabImpact: "📊 नफा आणि फायदे",
    tabMatrix: "⚔️ फील्ड आर्किटेक्चर मॅट्रिक्स",
    handbookPdf: "📄 हँडबुक (PDF)",

    liveTickerBadge: "ई-नाम लाईव्ह टिकर",
    tickerContent: "🌾 गहू हमीभाव ₹2,275/क्विंटल ▲ (+₹150) • 🍚 भात हमीभाव ₹2,300/क्विंटल ▲ (+₹117) • 🌻 मोहरी हमीभाव ₹5,650/क्विंटल ▲ (+₹200) • 🚜 एपीएमसी मंडी: गेट 1 टर्नअराउंड: 18 मिनिटे • ⛈️ हवामान स्वच्छ • 💰 1.77+ कोटी शेतकऱ्यांना थेट बँक खात्यात पैसे जमा",
    statFarmers: "1.77+ कोटी",
    statFarmersSub: "नोंदणीकृत शेतकरी",
    statMandis: "1,361+ मंडया",
    statMandisSub: "देशभरात ई-नाम मंडया",
    statWait: "96% प्रतीक्षा कमी",
    statWaitSub: "18 तास → फक्त 45 मिनिटे",
    statDbt: "100% डीबीटी",
    statDbtSub: "थेट बँक खात्यात पैसे",

    chaosConsoleBadge: "कॅओस कन्सोल",
    chaosTitle: "लाईव्ह सिस्टम रेझिलियन्स चाचणी",
    chaosSubtitle: "गेट जाम किंवा राज्य क्लाउड सर्व्हर बंद झाल्यावर किसान-Q कसे सुरळीत चालते ते तपासा",
    simBreakdownBtn: "गेट 1 वर ट्रॉली बिघाड सिम्युलेट करा",
    simCloudBtn: "क्लाउड सर्व्हर आउटेज सिम्युलेट करा (स्थानिक मोड)",

    quickPresetsLabel: "झटपट डेमो प्रीसेट",
    quickPresetsSub: "क्लिक करून थेट शेतकऱ्यांची माहिती भरा:",
    presetMarginal: "अल्पभूधारक शेतकरी (<1 हे. गहू)",
    presetSmall: "लहान शेतकरी (1.6 हे. मोहरी)",
    presetCommercial: "मोठा शेतकरी (5.5 हे.)",

    bookSlotTitle: "तुमचा धान्य वजन स्लॉट बुक करा",
    bookSlotSubtitle: "काट्याच्या क्षमतेनुसार 1-1 तासाचे नियोजित स्लॉट",
    farmerNameLabel: "शेतकऱ्याचे पूर्ण नाव",
    phoneLabel: "मोबाईल नंबर",
    landSizeLabel: "जमीन क्षेत्र (हेक्टर)",
    cropLabel: "पीक प्रकार (हमीभाव हमी)",
    vehicleLabel: "वाहन / ट्रॅक्टर नंबर",
    vehicleTypeLabel: "वाहनाचा प्रकार",
    estWeightLabel: "अंदाजे वजन (मेट्रिक टन)",
    preferredSlotLabel: "1 तासाची वेळ निवडा",
    slotHelpText: "रस्त्यावर ट्रॅक्टरची रांग लागू नये म्हणून स्लॉट नियंत्रित केले जातात.",
    bookButton: "डिजिटल टोकन आणि गेट पास तयार करा",
    marginalBadge: "फेअर-शेअर कोटा: अल्पभूधारक शेतकऱ्यांना (<2 हे.) प्राधान्य सक्रिय",

    lookupTitle: "जुने टोकन शोधा",
    lookupBtn: "शोधा",
    searchPlaceholder: "टोकन नंबर किंवा मोबाईल नंबर टाका",
    gatePassTitle: "कृषी उत्पन्न बाजार समिती डिजिटल गेट पास",
    farmerLabel: "शेतकरी:",
    vehicleNoLabel: "वाहन नंबर:",
    cropTypeLabel: "पीक:",
    assignedGateLabel: "दिलेला गेट:",
    arrivalWindowLabel: "आगमनाची वेळ:",
    assignedSlotLabel: "दिलेला स्लॉट:",
    slotArrivalWindow: "थेट वजनासाठी कृपया दिलेल्या 60 मिनिटांतच उपस्थित राहा.",
    liveEstTurnaround: "अंदाजे वेळ:",
    roadsideWaitSlashed: "रस्त्यावरील प्रतीक्षा 96% कमी",
    tatLabel: "टर्नअराउंड टाईम मीटर",
    tatSubtitle: "गेटवर पोहोचल्यापासून वजन आणि पावती मिळेपर्यंतचा वेळ.",
    printPass: "गेट पास प्रिंट / सेव्ह करा",

    authModalTitle: "शेतकरी पोर्टल लॉगिन (e-NAM / PM-KISAN)",
    tabSignIn: "शेतकरी लॉगिन",
    tabRegister: "नवीन शेतकरी नोंदणी",
    loginPhoneLabel: "नोंदणीकृत मोबाईल नंबर",
    loginOtpLabel: "4-अंकी ओटीपी (OTP)",
    sendOtpBtn: "ओटीपी पाठवा (डेमो)",
    loginSubmitBtn: "सत्यापित करा आणि लॉगिन करा",
    regNameLabel: "शेतकऱ्याचे पूर्ण नाव",
    regPhoneLabel: "मोबाईल नंबर",
    regAadhaarLabel: "आधार / पीएम-किसान आयडी",
    regLandLabel: "जमीन क्षेत्र (हेक्टर)",
    regCropLabel: "विक्रीचे मुख्य पीक",
    regVehicleLabel: "वाहन / ट्रॅक्टर नंबर",
    regVehicleTypeLabel: "वाहनाचा प्रकार",
    regBankLabel: "डीबीटी बँक खाते / IFSC",
    regSubmitBtn: "नोंदणी करा आणि फॉर्म भरा",

    ivrTitle: "स्मार्टफोन नसलेल्या शेतकऱ्यांसाठी: साधा कीपॅड फोन IVR सिम्युलेटर",
    ivrSubtitle: "साध्या ₹800 च्या कीपॅड फोनवर इंटरनेटशिवाय काम करते",
    ivrDialectLabel: "शेतकरी भाषा / बोली निवडा:",
    ivrMissedCallBtn: "1-रिंग मिस्ड कॉल सिम्युलेट करा (तात्काळ एसएमएस टोकन)",
    ivrTollFreeBtn: "टोल-फ्री नंबर 1800-547-2600 डायल करा",
    ivrSmsTitle: "अधिकृत सरकारी एसएमएस संदेश मिळाला:",
    ivrSmsSub: "शेतकरी मंडी गेटवर हा 5-अक्षरी कोड दाखवून थेट प्रवेश करू शकतात.",

    selectStateLabel: "कृषी राज्य / कृषी उत्पन्न बाजार समिती हब निवडा:",
    weatherTitle: "हवामान आधारित रांग नियंत्रण आणि सायलो वळवणे",
    weatherSubtitle: "भारतीय हवामान खात्याच्या (IMD) डॉपलर रडारशी थेट जोडणी",
    tempLabel: "मंडी आवार तापमान",
    rainRiskLabel: "पावसाची शक्यता",
    skyCondLabel: "हवामान स्थिती",
    siloBannerTitle: "कव्हर्ड सायलो शेड: पाऊस येण्यापूर्वी 14 ट्रॅक्टर सुरक्षित",
    siloBannerDesc: "रडारवर 70% पेक्षा जास्त पाऊस दिसल्यास किसान-Q उघड्या ट्रॉल्यांना कव्हर्ड शेडमध्ये वळवते.",
    simulateRainBtn: "मुसळधार पावसाचा इशारा सिम्युलेट करा",
    simulateClearBtn: "हवामान स्वच्छ सिम्युलेट करा",

    impactTitle: "शेतकऱ्यांचा फायदा आणि आर्थिक बचत",
    impactSubtitle: "शेतकरी, वाहतूकदार आणि एपीएमसीसाठी सिद्ध झालेली बचत",
    metricWaitTitle: "प्रतीक्षा वेळेत 96% घट",
    metricWaitDesc: "हायवेवरील 2-3 दिवसांच्या त्रासातून मुक्ती, फक्त 45 मिनिटांत काम पूर्ण.",
    metricSavedTitle: "प्रति शेतकरी प्रति फेरी बचत",
    metricSavedDesc: "ट्रॉली भाडे (₹1,500/दिवस) वाचले आणि कमी भावात माल विकण्याची वेळ येत नाही.",
    metricSpoilageTitle: "धान्य नासाडी 0%",
    metricSpoilageDesc: "पाऊस येण्यापूर्वीच माल सुरक्षित शेडमध्ये हलवला जातो."
  },

  gu: {
    govtOfIndia: "ભારત સરકાર",
    govtTitle: "કૃષિ અને ખેડૂત કલ્યાણ મંત્રાલય • ભારત સરકાર • રાષ્ટ્રીય કૃષિ બજાર (e-NAM)",
    appTitle: "કિસાન-Q: સ્માર્ટ સ્લોટ બુકિંગ",
    tagline: "ભારતીય ખેડૂતના સમય, નાણાં અને ગૌરવનું રક્ષણ",
    langLabel: "ભાષા પસંદ કરો:",
    helplineText: "હેલ્પલાઇન: 1800-270-0224 (ટોલ ફ્રી)",
    openMobileApp: "📱 કિસાન મોબાઈલ એપ (પોર્ટ 8443)",
    signInBtn: "ખેડૂત સાઇન ઇન",
    registerBtn: "નવા ખેડૂતની નોંધણી",
    downloadAppBtn: "📲 મોબાઈલ એપ ડાઉનલોડ",
    appDownloadModalTitle: "કિસાન-Q એપ ડાઉનલોડ સેન્ટર",
    liveTimeLabel: "લાઈવ સમય:",
    wifiLabel: "વાઇ-ફાઇ:",

    tabFarmer: "🌾 ખેડૂત પોર્ટલ",
    tabIVR: "📱 કીપેડ ફોન (IVR)",
    tabWeather: "🛰️ હવામાન રડાર",
    tabImpact: "📊 ફાયદા અને પ્રભાવ",
    tabMatrix: "⚔️ ફીલ્ડ આર્કિટેક્ચર મેટ્રિક્સ",
    handbookPdf: "📄 હેન્ડબુક (PDF)",

    liveTickerBadge: "ઈ-નામ લાઈવ ટીકર",
    tickerContent: "🌾 ઘઉં ટેકાનો ભાવ ₹2,275/ક્વિન્ટલ ▲ (+₹150) • 🍚 ડાંગર ₹2,300/ક્વિન્ટલ ▲ (+₹117) • 🌻 રાયડો/સરસવ ₹5,650/ક્વિન્ટલ ▲ (+₹200) • 🚜 યાર્ડ ગેટ 1 ટર્નઅરાઉન્ડ: 18 મિનિટ • ⛈️ હવામાન ચોખ્ખું • 💰 1.77+ કરોડ ખેડૂતોને સીધા ખાતામાં ચૂકવણી",
    statFarmers: "1.77+ કરોડ",
    statFarmersSub: "નોંધાયેલા ખેડૂતો",
    statMandis: "1,361+ માર્કેટ યાર્ડ",
    statMandisSub: "સમગ્ર દેશમાં ઈ-નામ",
    statWait: "96% રાહ જોવામાં ઘટાડો",
    statWaitSub: "18 કલાક → માત્ર 45 મિનિટ",
    statDbt: "100% ડીબીટી",
    statDbtSub: "સીધા બેંક ખાતામાં ચૂકવણી",

    chaosConsoleBadge: "કેઓસ કન્સોલ",
    chaosTitle: "લાઈવ સિસ્ટમ કાર્યક્ષમતા ટેસ્ટ",
    chaosSubtitle: "ગેટ બગડે કે સર્વર ડાઉન થાય ત્યારે પણ કિસાન-Q કેવી રીતે સતત કામ ચાલુ રાખે છે તે જુઓ",
    simBreakdownBtn: "ગેટ 1 પર ટ્રેક્ટર બ્રેકડાઉન સિમ્યુલેટ કરો",
    simCloudBtn: "ક્લાઉડ આઉટેજ સિમ્યુલેટ કરો (ઓફલાઇન એજ મોડ)",

    quickPresetsLabel: "ઝડપી ડેમો પ્રીસેટ્સ",
    quickPresetsSub: "એક ક્લિકથી ખેડૂતની વિગતો ભરો:",
    presetMarginal: "નાનો ખેડૂત (<1 હેક્ટર ઘઉં)",
    presetSmall: "મધ્યમ ખેડૂત (1.6 હેક્ટર રાયડો)",
    presetCommercial: "મોટો ખેડૂત (5.5 હેક્ટર)",

    bookSlotTitle: "તમારો પાક તોલવાનો સ્લોટ બુક કરો",
    bookSlotSubtitle: "કાંટાની ક્ષમતા અનુસાર 1-1 કલાકના સુવ્યવસ્થિત સ્લોટ",
    farmerNameLabel: "ખેડૂતનું પૂરું નામ",
    phoneLabel: "મોબાઈલ નંબર",
    landSizeLabel: "જમીનનું માપ (હેક્ટર)",
    cropLabel: "પાકનો પ્રકાર (ટેકાના ભાવની ગેરંટી)",
    vehicleLabel: "વાહન / ટ્રેક્ટર નંબર",
    vehicleTypeLabel: "વાહનનો પ્રકાર",
    estWeightLabel: "અંદાજિત વજન (મેટ્રિક ટન)",
    preferredSlotLabel: "1 કલાકની સમય વિન્ડો પસંદ કરો",
    slotHelpText: "હાઈવે પર ટ્રાફિક ન થાય તે માટે સ્લોટ ઓટોમેટીક નિયંત્રિત થાય છે.",
    bookButton: "ડિજિટલ ટોકન અને ગેટ પાસ જનરેટ કરો",
    marginalBadge: "ફેર-શેર ક્વોટા: નાના ખેડૂતો (<2 હે.) ને પ્રાથમિકતા સક્રિય",

    lookupTitle: "જૂનો ટોકન શોધો",
    lookupBtn: "શોધો",
    searchPlaceholder: "ટોકન નંબર અથવા મોબાઈલ દાખલ કરો",
    gatePassTitle: "એપીએમસી માર્કેટ યાર્ડ ગેટ પાસ",
    farmerLabel: "ખેડૂત:",
    vehicleNoLabel: "વાહન નંબર:",
    cropTypeLabel: "પાક:",
    assignedGateLabel: "ફાળવેલ ગેટ:",
    arrivalWindowLabel: "પહોંચવાનો સમય:",
    assignedSlotLabel: "ફાળવેલ સ્લોટ:",
    slotArrivalWindow: "સીધા વજન માટે કૃપા કરીને આપેલ 60 મિનિટમાં જ પહોંચો.",
    liveEstTurnaround: "અંદાજિત સમય:",
    roadsideWaitSlashed: "રસ્તા પર રાહ જોવામાં 96% ઘટાડો",
    tatLabel: "ટર્નઅરાઉન્ડ સમય મીટર",
    tatSubtitle: "ગેટ પર પ્રવેશથી લઈને વજન અને પાવતી મળવા સુધીનો સમય.",
    printPass: "પાસ પ્રિન્ટ / સેવ કરો",

    authModalTitle: "ખેડૂત પોર્ટલ સાઇન ઇન (e-NAM / PM-KISAN)",
    tabSignIn: "ખેડૂત સાઇન ઇન",
    tabRegister: "નવા ખેડૂતની નોંધણી",
    loginPhoneLabel: "નોંધાયેલ મોબાઈલ નંબર",
    loginOtpLabel: "4-અંકનો ઓટીપી (OTP)",
    sendOtpBtn: "ઓટીપી મોકલો (ડેમો)",
    loginSubmitBtn: "ચકાસો અને સાઇન ઇન કરો",
    regNameLabel: "ખેડૂતનું પૂરું નામ",
    regPhoneLabel: "મોબાઈલ નંબર",
    regAadhaarLabel: "આધાર / પીએમ-કિસાન આઈડી",
    regLandLabel: "જમીનનું માપ (હેક્ટર)",
    regCropLabel: "વેચવા માટેનો મુખ્ય પાક",
    regVehicleLabel: "વાહન / ટ્રેક્ટર નંબર",
    regVehicleTypeLabel: "વાહનનો પ્રકાર",
    regBankLabel: "ડીબીટી બેંક ખાતું / IFSC",
    regSubmitBtn: "નોંધણી કરો અને ફોર્મ ભરો",

    ivrTitle: "સ્માર્ટફોન વગરની સુવિધા: સામાન્ય કીપેડ ફોન IVR સિમ્યુલેટર",
    ivrSubtitle: "સામાન્ય ₹800 ના કીપેડ ફોન પર ઈન્ટરનેટ વગર કામ કરે છે",
    ivrDialectLabel: "ખેડૂત બોલી / અવાજ પસંદ કરો:",
    ivrMissedCallBtn: "1-રિંગ મિસ્ડ કોલ સિમ્યુલેટ કરો (તરત જ એસએમએસ)",
    ivrTollFreeBtn: "ટોલ-ફ્રી નંબર 1800-547-2600 ડાયલ કરો",
    ivrSmsTitle: "સરકારી એસએમએસ સંદેશ મળ્યો:",
    ivrSmsSub: "ખેડૂતો યાર્ડ ગેટ પર આ 5-અક્ષરનો કોડ બતાવીને સીધો પ્રવેશ મેળવી શકે છે.",

    selectStateLabel: "કૃષિ રાજ્ય / માર્કેટ યાર્ડ પસંદ કરો:",
    weatherTitle: "હવામાન આધારિત કતાર નિયંત્રણ અને શેડ ડાયવર્ઝન",
    weatherSubtitle: "ભારતીય હવામાન વિભાગ (IMD) ડોપ્લર રડાર સાથે સીધું જોડાણ",
    tempLabel: "યાર્ડનું તાપમાન",
    rainRiskLabel: "વરસાદની સંભાવના",
    skyCondLabel: "હવામાનની સ્થિતિ",
    siloBannerTitle: "કવર્ડ સાયલો શેડ: વરસાદ પહેલાં 14 ટ્રેક્ટર સુરક્ષિત",
    siloBannerDesc: "રડાર પર વરસાદની ચેતવણી મળતાં જ ખુલ્લી ટ્રોલીઓને ઢંકાયેલા શેડમાં મોકલી દેવાય છે.",
    simulateRainBtn: "ભારે વરસાદની ચેતવણી સિમ્યુલેટ કરો",
    simulateClearBtn: "ચોખ્ખું હવામાન સિમ્યુલેટ કરો",

    impactTitle: "ખેડૂતોને સીધો આર્થિક ફાયદો",
    impactSubtitle: "ખેડૂતો અને માર્કેટ યાર્ડ માટે પુરાવા સાથે બચત",
    metricWaitTitle: "રાહ જોવામાં 96% ઘટાડો",
    metricWaitDesc: "હાઈવે પર 2-3 દિવસના જામમાંથી મુક્તિ, ફક્ત 45 મિનિટમાં વજન પૂરું.",
    metricSavedTitle: "ફેરી દીઠ ખેડૂતની બચત",
    metricSavedDesc: "ટ્રોલીનું ભાડું (₹1,500/દિવસ) બચે છે અને પાક સસ્તા ભાવે વેચવો પડતો નથી.",
    metricSpoilageTitle: "પાક બગડવાનું જોખમ 0%",
    metricSpoilageDesc: "વરસાદ પડે તે પહેલાં જ અનાજ સુરક્ષિત ગોડાઉનમાં પહોંચી જાય છે."
  },

  bn: {
    govtOfIndia: "ভারত সরকার",
    govtTitle: "কৃষি ও কৃষক কল্যাণ মন্ত্রক • ভারত সরকার • জাতীয় কৃষি বাজার (e-NAM)",
    appTitle: "কিষাণ-Q: স্মার্ট স্লট বুকিং",
    tagline: "ভারতীয় কৃষকের সময়, অর্থ ও সম্মানের সুরক্ষা",
    langLabel: "ভাষা নির্বাচন করুন:",
    helplineText: "হেল্পলাইন: 1800-270-0224 (টোল ফ্রি)",
    openMobileApp: "📱 কৃষক মোবাইল অ্যাপ (পোর্ট 8443)",
    signInBtn: "কৃষক সাইন ইন",
    registerBtn: "নতুন কৃষক নিবন্ধন",
    downloadAppBtn: "📲 মোবাইল অ্যাপ ডাউনলোড",
    appDownloadModalTitle: "কিষাণ-Q অ্যাপ ডাউনলোড কেন্দ্র",
    liveTimeLabel: "লাইভ সময়:",
    wifiLabel: "ওয়াই-ফাই:",

    tabFarmer: "🌾 কৃষক পোর্টাল",
    tabIVR: "📱 কিপ্যাড ফোন (IVR)",
    tabWeather: "🛰️ আবহাওয়া রাডার",
    tabImpact: "📊 লাভ ও প্রভাব",
    tabMatrix: "⚔️ ফিল্ড আর্কিটেকচার ম্যাট্রিক্স",
    handbookPdf: "📄 হ্যান্ডবুক (PDF)",

    liveTickerBadge: "ই-নাম লাইভ টিকার",
    tickerContent: "🌾 গম MSP ₹২,২৭৫/কুইন্টাল ▲ (+₹১৫০) • 🍚 ধান MSP ₹২,৩০০/কুইন্টাল ▲ (+₹১১৭) • 🌻 সরিষা MSP ₹৫,৬৫০/কুইন্টাল ▲ (+₹২০০) • 🚜 এপিএমসি মান্ডি: গেট ১ টার্নঅ্যারাউন্ড: ১৮ মিনিট • ⛈️ পরিষ্কার আবহাওয়া • 💰 ১.৭৭+ কোটি কৃষকের ব্যাংক অ্যাকাউন্টে সরাসরি টাকা স্থানান্তর",
    statFarmers: "১.৭৭+ কোটি",
    statFarmersSub: "নিবন্ধিত কৃষক",
    statMandis: "১,৩৬১+ মান্ডি",
    statMandisSub: "দেশব্যাপী ই-নাম মান্ডি",
    statWait: "৯৬% অপেক্ষা হ্রাস",
    statWaitSub: "১৮ ঘণ্টা → মাত্র ৪৫ মিনিট",
    statDbt: "১০০% ডিবিটি",
    statDbtSub: "সরাসরি ব্যাংক অ্যাকাউন্টে টাকা",

    chaosConsoleBadge: "কেওস কনসোল",
    chaosTitle: "সিস্টেম স্থিতিস্থাপকতা পরীক্ষা",
    chaosSubtitle: "গেট জ্যাম বা ক্লাউড সার্ভার বন্ধ হলেও কিষাণ-Q কীভাবে অবিরাম চলে তা দেখুন",
    simBreakdownBtn: "গেট ১-এ ট্রলি বিকল সিমুলেট করুন",
    simCloudBtn: "ক্লাউড সার্ভার বিভ্রাট সিমুলেট করুন (লোকাল মোড)",

    quickPresetsLabel: "দ্রুত ডেমো প্রিসেট",
    quickPresetsSub: "এক ক্লিকে কৃষকের তথ্য পূরণ করুন:",
    presetMarginal: "প্রান্তিক কৃষক (<১ হেক্টর গম)",
    presetSmall: "ক্ষুদ্র কৃষক (১.৬ হেক্টর সরিষা)",
    presetCommercial: "বড় কৃষক (৫.৫ হেক্টর)",

    bookSlotTitle: "শস্য ওজনের জন্য স্লট বুক করুন",
    bookSlotSubtitle: "ওজন সেতুর ক্ষমতা অনুসারে ১ ঘণ্টার সুবিন্যস্ত স্লট",
    farmerNameLabel: "কৃষকের পুরো নাম",
    phoneLabel: "মোবাইল নম্বর",
    landSizeLabel: "জমির পরিমাণ (হেক্টর)",
    cropLabel: "ফসলের ধরন (MSP গ্যারান্টি)",
    vehicleLabel: "গাড়ির নম্বর",
    vehicleTypeLabel: "যানবাহনের ধরন",
    estWeightLabel: "আনুমানিক ওজন (মেট্রিক টন)",
    preferredSlotLabel: "১ ঘণ্টার সময় বেছে নিন",
    slotHelpText: "রাস্তায় যাতে জ্যাম না হয় সেজন্য স্লট নিয়ন্ত্রিত হয়।",
    bookButton: "ডিজিটাল টোকেন ও গেট পাস তৈরি করুন",
    marginalBadge: "ফেয়ার-শেয়ার কোটা: প্রান্তিক কৃষকদের (<২ হে.) অগ্রাধিকার সক্রিয়",

    lookupTitle: "পুরোনো টোকেন খুঁজুন",
    lookupBtn: "অনুসন্ধান",
    searchPlaceholder: "টোকেন নম্বর বা মোবাইল নম্বর লিখুন",
    gatePassTitle: "কৃষি মান্ডি ডিজিটাল গেট পাস",
    farmerLabel: "কৃষক:",
    vehicleNoLabel: "যানবাহন:",
    cropTypeLabel: "ফসল:",
    assignedGateLabel: "বরাদ্দ গেট:",
    arrivalWindowLabel: "আগমনের সময়:",
    assignedSlotLabel: "বরাদ্দ স্লট:",
    slotArrivalWindow: "সরাসরি ওজনের জন্য দয়া করে নির্ধারিত ৬০ মিনিটের মধ্যে উপস্থিত হন।",
    liveEstTurnaround: "আনুমানিক সময়:",
    roadsideWaitSlashed: "রাস্তায় অপেক্ষা ৯৬% কমেছে",
    tatLabel: "টার্নঅ্যারাউন্ড সময় মিটার",
    tatSubtitle: "গেটে পৌঁছানো থেকে ওজন ও রসিদ পাওয়া পর্যন্ত সময়।",
    printPass: "গেট পাস প্রিন্ট / সেভ করুন",

    authModalTitle: "কৃষক পোর্টাল লগইন (e-NAM / PM-KISAN)",
    tabSignIn: "কৃষক সাইন ইন",
    tabRegister: "নতুন কৃষক নিবন্ধন",
    loginPhoneLabel: "নিবন্ধিত মোবাইল নম্বর",
    loginOtpLabel: "৪-সংখ্যার ওটিপি (OTP)",
    sendOtpBtn: "ওটিপি পাঠান (ডেমো)",
    loginSubmitBtn: "যাচাই ও সাইন ইন করুন",
    regNameLabel: "কৃষকের পুরো নাম",
    regPhoneLabel: "মোবাইল নম্বর",
    regAadhaarLabel: "আধার / পিএম-কিষাণ আইডি",
    regLandLabel: "জমির পরিমাণ (হেক্টর)",
    regCropLabel: "বিক্রির প্রধান ফসল",
    regVehicleLabel: "গাড়ির নম্বর",
    regVehicleTypeLabel: "যানবাহনের ধরন",
    regBankLabel: "ডিবিটি ব্যাংক অ্যাকাউন্ট / IFSC",
    regSubmitBtn: "নিবন্ধন করুন ও ফর্ম পূরণ করুন",

    ivrTitle: "স্মার্টফোন ছাড়া সুবিধা: সাধারণ কিপ্যাড ফোন IVR সিমুলেটর",
    ivrSubtitle: "কমদামি ₹৮০০ টাকার কিপ্যাড ফোনে ইন্টারনেট ছাড়াই কাজ করে",
    ivrDialectLabel: "কৃষক ভাষা / স্বর নির্বাচন:",
    ivrMissedCallBtn: "১-রিং মিসড কল সিমুলেট করুন (তাত্ক্ষণিক এসএমএস)",
    ivrTollFreeBtn: "টোল-ফ্রি নম্বর 1800-547-2600 কল করুন",
    ivrSmsTitle: "সরকারি এসএমএস বার্তা প্রাপ্ত হয়েছে:",
    ivrSmsSub: "কৃষকরা মান্ডি গেটে এই ৫-অক্ষরের কোড দেখিয়ে সরাসরি প্রবেশ করতে পারবেন।",

    selectStateLabel: "কৃষি রাজ্য / মান্ডি হাব নির্বাচন করুন:",
    weatherTitle: "আবহাওয়া সচেতন সারি নিয়ন্ত্রণ ও সাইলো ডাইভার্সন",
    weatherSubtitle: "ভারতীয় আবহাওয়া দপ্তরের (IMD) ডপলার রাডারের সাথে রিয়েল-টাইম সংযোগ",
    tempLabel: "মান্ডির তাপমাত্রা",
    rainRiskLabel: "বৃষ্টির সম্ভাবনা",
    skyCondLabel: "আকাশের অবস্থা",
    siloBannerTitle: "কভার্ড সাইলো শেড: বৃষ্টির আগে ১৪টি ট্র্যাক্টর সুরক্ষিত",
    siloBannerDesc: "রাডারে বৃষ্টির পূর্বাভাস পেলেই খোলা ট্রলিগুলিকে সুরক্ষিত ছাউনিতে পাঠিয়ে দেওয়া হয়।",
    simulateRainBtn: "ভারী বৃষ্টির সতর্কতা সিমুলেট করুন",
    simulateClearBtn: "পরিষ্কার আবহাওয়া সিমুলেট করুন",

    impactTitle: "কৃষকের নিশ্চিত অর্থনৈতিক লাভ",
    impactSubtitle: "কৃষক ও মান্ডির প্রমাণিত সাশ্রয়",
    metricWaitTitle: "অপেক্ষার সময় ৯৬% হ্রাস",
    metricWaitDesc: "হাইওয়েতে ২-৩ দিনের অসহনীয় জ্যাম থেকে মুক্তি, মাত্র ৪৫ মিনিটে কাজ শেষ।",
    metricSavedTitle: "প্রতি সফরে কৃষকের সাশ্রয়",
    metricSavedDesc: "ট্রলি ভাড়া বাঁচে এবং কম দামে ফসল বিক্রি করার বাধ্যবাধকতা দূর হয়।",
    metricSpoilageTitle: "শস্য নষ্টের হার ০%",
    metricSpoilageDesc: "বৃষ্টির আগেই নিরাপদে গুদামে শস্য পৌঁছে যায়।"
  },

  te: {
    govtOfIndia: "భారత ప్రభుత్వం",
    govtTitle: "వ్యవసాయ & రైతు సంక్షేమ మంత్రిత్వ శాఖ • భారత ప్రభుత్వం • జాతీయ వ్యవసాయ మార్కెట్ (e-NAM)",
    appTitle: "కిసాన్-Q: స్మార్ట్ స్లాట్ బుకింగ్",
    tagline: "భారతీయ రైతు సమయం, ధనం మరియు గౌరవానికి భరోసా",
    langLabel: "భాషను ఎంచుకోండి:",
    helplineText: "హెల్ప్‌లైన్: 1800-270-0224 (టోల్ ఫ్రీ)",
    openMobileApp: "📱 రైతు మొబైల్ యాప్ (పోర్ట్ 8443)",
    signInBtn: "రైతు లాగిన్",
    registerBtn: "కొత్త రైతు నమోదు",
    downloadAppBtn: "📲 మొబైల్ యాప్ డౌన్‌లోడ్",
    appDownloadModalTitle: "కిసాన్-Q మొబైల్ యాప్ డౌన్‌లోడ్ కేంద్రం",
    liveTimeLabel: "లైవ్ సమయం:",
    wifiLabel: "వై-ఫై:",

    tabFarmer: "🌾 రైతు పోర్టల్",
    tabIVR: "📱 కీప్యాడ్ ఫోన్ (IVR)",
    tabWeather: "🛰️ వాతావరణ రాడార్",
    tabImpact: "📊 ప్రయోజనాలు & ప్రభావం",
    tabMatrix: "⚔️ ఫీల్డ్ ఆర్కిటెక్చర్ మ్యాట్రిక్స్",
    handbookPdf: "📄 హ్యాండ్‌బుక్ (PDF)",

    liveTickerBadge: "ఈ-నామ్ లైవ్ టిక్కర్",
    tickerContent: "🌾 గోధుమల మద్దతు ధర ₹2,275/క్వింటా ▲ (+₹150) • 🍚 ధాన్యం మద్దతు ధర ₹2,300/క్వింటా ▲ (+₹117) • 🌻 ఆవాలు ₹5,650/క్వింటా ▲ (+₹200) • 🚜 మార్కెట్ యార్డ్ గేట్ 1 టర్న్‌అరౌండ్: 18 నిమిషాలు • ⛈️ వాతావరణం అనుకూలం • 💰 1.77+ కోట్ల మంది రైతులకు నేరుగా ఖాతాల్లోకి నగదు",
    statFarmers: "1.77+ కోట్లు",
    statFarmersSub: "నమోదిత రైతులు",
    statMandis: "1,361+ మార్కెట్ యార్డులు",
    statMandisSub: "దేశవ్యాప్తంగా ఈ-నామ్",
    statWait: "96% వేచి ఉండే సమయం తగ్గింపు",
    statWaitSub: "18 గంటలు → కేవలం 45 నిమిషాలు",
    statDbt: "100% డిబిటి",
    statDbtSub: "నేరుగా బ్యాంక్ ఖాతాలోకి నగదు",

    chaosConsoleBadge: "ఖోస్ కన్సోల్",
    chaosTitle: "లైవ్ సిస్టమ్ పరీక్ష",
    chaosSubtitle: "గేట్ సమస్య లేదా సర్వర్ డౌన్ అయినా కిసాన్-Q ఎలా నిరంతరాయంగా పనిచేస్తుందో చూడండి",
    simBreakdownBtn: "గేట్ 1 వద్ద ట్రాక్టర్ బ్రేక్‌డౌన్ సిమ్యులేట్ చేయండి",
    simCloudBtn: "క్లౌడ్ సర్వర్ అంతరాయం సిమ్యులేట్ చేయండి (లోకల్ మోడ్)",

    quickPresetsLabel: "త్వరిత డెమో ప్రీసెట్లు",
    quickPresetsSub: "ఒకే క్లిక్‌తో రైతుల వివరాలను నింపండి:",
    presetMarginal: "చిన్న రైతు (<1 హెక్టార్ గోధుమలు)",
    presetSmall: "మధ్య తరహా రైతు (1.6 హెక్టార్లు)",
    presetCommercial: "పెద్ద రైతు (5.5 హెక్టార్లు)",

    bookSlotTitle: "మీ ధాన్యం తూకం స్లాట్‌ను బుక్ చేసుకోండి",
    bookSlotSubtitle: "కాటా సామర్థ్యం ఆధారంగా 1 గంట క్రమబద్ధీకరించిన స్లాట్లు",
    farmerNameLabel: "రైతు పూర్తి పేరు",
    phoneLabel: "మొబైల్ నంబర్",
    landSizeLabel: "భూమి విస్తీర్ణం (హెక్టార్లు)",
    cropLabel: "పంట రకం (కనీస మద్దతు ధర భరోసా)",
    vehicleLabel: "వాహనం / ట్రాక్టర్ నంబర్",
    vehicleTypeLabel: "వాహనం రకం",
    estWeightLabel: "అంచనా బరువు (మెట్రిక్ టన్నులు)",
    preferredSlotLabel: "1 గంట సమయం ఎంచుకోండి",
    slotHelpText: "హైవేపై ట్రాఫిక్ నివారించేందుకు స్లాట్లు నియంత్రించబడతాయి.",
    bookButton: "డిజిటల్ టోకెన్ & గేట్ పాస్ పొందండి",
    marginalBadge: "ఫెయిర్-షేర్ కోటా: చిన్న రైతులకు (<2 హెక్టార్లు) ప్రాధాన్యత సక్రియం",

    lookupTitle: "పాత టోకెన్ వెతకండి",
    lookupBtn: "వెతకండి",
    searchPlaceholder: "టోకెన్ నంబర్ లేదా మొబైల్ నంబర్ నమోదు చేయండి",
    gatePassTitle: "వ్యవసాయ మార్కెట్ యార్డ్ డిజిటల్ గేట్ పాస్",
    farmerLabel: "రైతు:",
    vehicleNoLabel: "వాహనం:",
    cropTypeLabel: "పంట:",
    assignedGateLabel: "కేటాయించిన గేట్:",
    arrivalWindowLabel: "రావలసిన సమయం:",
    assignedSlotLabel: "కేటాయించిన స్లాట్:",
    slotArrivalWindow: "నేరుగా తూకం వేయడానికి దయచేసి కేటాయించిన 60 నిమిషాల్లోనే రండి.",
    liveEstTurnaround: "అంచనా సమయం:",
    roadsideWaitSlashed: "రోడ్డుపై వేచి ఉండే సమయం 96% తగ్గింది",
    tatLabel: "టర్న్‌అరౌండ్ సమయ మీటర్",
    tatSubtitle: "గేట్ ప్రవేశం నుండి తూకం మరియు రసీదు అందే వరకు సమయం.",
    printPass: "పాస్ ప్రింట్ / సేవ్ చేయండి",

    authModalTitle: "రైతు పోర్టల్ లాగిన్ (e-NAM / PM-KISAN)",
    tabSignIn: "రైతు లాగిన్",
    tabRegister: "కొత్త రైతు నమోదు",
    loginPhoneLabel: "నమోదిత మొబైల్ నంబర్",
    loginOtpLabel: "4-అంకెల ఓటీపీ (OTP)",
    sendOtpBtn: "ఓటీపీ పంపండి (డెమో)",
    loginSubmitBtn: "ధృవీకరించి లాగిన్ అవ్వండి",
    regNameLabel: "రైతు పూర్తి పేరు",
    regPhoneLabel: "మొబైల్ నంబర్",
    regAadhaarLabel: "ఆధార్ / పిఎం-కిసాన్ ఐడీ",
    regLandLabel: "భూమి విస్తీర్ణం (హెక్టార్లు)",
    regCropLabel: "అమ్మదలచిన ప్రధాన పంట",
    regVehicleLabel: "వాహనం నంబర్",
    regVehicleTypeLabel: "వాహనం రకం",
    regBankLabel: "డిబిటి బ్యాంక్ ఖాతా / IFSC",
    regSubmitBtn: "నమోదు చేసి ఫారమ్ నింపండి",

    ivrTitle: "స్మార్ట్‌ఫోన్ లేని రైతుల కోసం: సాధారణ కీప్యాడ్ ఫోన్ IVR సిమ్యులేటర్",
    ivrSubtitle: "₹800 సాధారణ కీప్యాడ్ ఫోన్‌పై ఇంటర్నెట్ లేకుండా పనిచేస్తుంది",
    ivrDialectLabel: "రైతు యాస / భాషను ఎంచుకోండి:",
    ivrMissedCallBtn: "1-రింగ్ మిస్డ్ కాల్ సిమ్యులేట్ చేయండి (వెంటనే ఎస్ఎంఎస్ టోకెన్)",
    ivrTollFreeBtn: "టోల్-ఫ్రీ 1800-547-2600 కు డయల్ చేయండి",
    ivrSmsTitle: "అధికారిక ప్రభుత్వ ఎస్ఎంఎస్ సందేశం అందింది:",
    ivrSmsSub: "రైతులు యార్డ్ గేట్ వద్ద ఈ 5-అక్షరాల కోడ్‌ను చూపించి నేరుగా లోపలికి వెళ్లవచ్చు.",

    selectStateLabel: "వ్యవసాయ రాష్ట్రం / మార్కెట్ యార్డ్ ఎంచుకోండి:",
    weatherTitle: "వాతావరణ ఆధారిత క్యూ నియంత్రణ & షెడ్ మళ్లింపు",
    weatherSubtitle: "భారత వాతావరణ శాఖ (IMD) డాప్లర్ రాడార్‌తో ప్రత్యక్ష అనుసంధానం",
    tempLabel: "యార్డ్ ఉష్ణోగ్రత",
    rainRiskLabel: "వర్షం పడే అవకాశం",
    skyCondLabel: "ఆకాశ పరిస్థితి",
    siloBannerTitle: "రక్షిత సైలో షెడ్లు: వర్షం రాకముందే 14 ట్రాక్టర్లు భద్రం",
    siloBannerDesc: "రాడార్‌లో వర్ష సూచన రాగానే తెరిచి ఉన్న ట్రాక్టర్లను వెంటనే పైకప్పు ఉన్న షెడ్లలోకి మళ్లిస్తారు.",
    simulateRainBtn: "భారీ వర్షపు హెచ్చరికను సిమ్యులేట్ చేయండి",
    simulateClearBtn: "వాతావరణం స్వచ్ఛంగా సిమ్యులేట్ చేయండి",

    impactTitle: "రైతులకు స్పష్టమైన ఆర్థిక ప్రయోజనం",
    impactSubtitle: "రైతులు మరియు మార్కెట్ కమిటీకి నిరూపితమైన ఆదా",
    metricWaitTitle: "వేచి ఉండే సమయంలో 96% తగ్గింపు",
    metricWaitDesc: "రోడ్డుపై 2-3 రోజుల ట్రాఫిక్ జామ్‌ల నుండి విముక్తి, 45 నిమిషాల్లో పని పూర్తి.",
    metricSavedTitle: "ప్రతి ట్రిప్పుకు రైతుకు ఆదా",
    metricSavedDesc: "ట్రాక్టర్ అద్దె ఖర్చులు ఆదా అవుతాయి మరియు తక్కువ ధరకు అమ్ముకోవాల్సిన అవసరం ఉండదు.",
    metricSpoilageTitle: "ధాన్యం తడిసి పాడయ్యే ప్రమాదం 0%",
    metricSpoilageDesc: "వర్షం పడేలోపే ధాన్యం రక్షిత గోదాములకు చేరుతుంది."
  },

  ta: {
    govtOfIndia: "இந்திய அரசு",
    govtTitle: "வேளாண்மை மற்றும் உழவர் நல அமைச்சகம் • இந்திய அரசு • தேசிய வேளாண் சந்தை (e-NAM)",
    appTitle: "கிசான்-Q: ஸ்மார்ட் ஸ்லாட் முன்பதிவு",
    tagline: "இந்திய விவசாயிகளின் நேரம், பணம் மற்றும் கண்ணியத்தின் பாதுகாப்பு",
    langLabel: "மொழியைத் தேர்வு செய்க:",
    helplineText: "உதவி எண்: 1800-270-0224 (கட்டணமில்லா)",
    openMobileApp: "📱 உழவர் மொபைல் செயலி (போர்ட் 8443)",
    signInBtn: "விவசாயி உள்நுழைவு",
    registerBtn: "புதிய விவசாயி பதிவு",
    downloadAppBtn: "📲 மொபைல் செயலி பதிவிறக்கம்",
    appDownloadModalTitle: "கிசான்-Q செயலி பதிவிறக்க மையம்",
    liveTimeLabel: "நேரலை நேரம்:",
    wifiLabel: "வை-ஃபை:",

    tabFarmer: "🌾 உழவர் தளம்",
    tabIVR: "📱 விசைப்பலகை போன் (IVR)",
    tabWeather: "🛰️ வானிலை ரேடார்",
    tabImpact: "📊 பலன்கள் & தாக்கம்",
    tabMatrix: "⚔️ கள கட்டமைப்பு அணி",
    handbookPdf: "📄 கையேடு (PDF)",

    liveTickerBadge: "இ-நாம் நேரலை தகவல்",
    tickerContent: "🌾 கோதுமை ஆதரவு விலை ₹2,275/குவிண்டால் ▲ (+₹150) • 🍚 நெல் ஆதரவு விலை ₹2,300/குவிண்டால் ▲ (+₹117) • 🌻 கடுகு ₹5,650/குவிண்டால் ▲ (+₹200) • 🚜 மண்டி கேட் 1 பணி நேரம்: 18 நிமிடங்கள் • ⛈️ தெளிவான வானிலை • 💰 1.77+ கோடி விவசாயிகளுக்கு நேரடி வங்கிப் பரிமாற்றம்",
    statFarmers: "1.77+ கோடி",
    statFarmersSub: "பதிவுசெய்த விவசாயிகள்",
    statMandis: "1,361+ மண்டிகள்",
    statMandisSub: "நாடு தழுவிய இ-நாம்",
    statWait: "96% காத்திருப்பு குறைவு",
    statWaitSub: "18 மணிநேரம் → வெறும் 45 நிமிடம்",
    statDbt: "100% நேரடி மானியம்",
    statDbtSub: "நேரடி வங்கி பரிமாற்றம்",

    chaosConsoleBadge: "கேயாஸ் கன்சோல்",
    chaosTitle: "நேரலை கணினி தாங்கும் திறன் சோதனை",
    chaosSubtitle: "கேட் நெரிசல் அல்லது சர்வர் செயலிழந்தாலும் கிசான்-Q எவ்வாறு தொடர்ந்து இயங்குகிறது என்பதைச் சோதிக்கவும்",
    simBreakdownBtn: "கேட் 1-ல் டிராக்டர் பழுதை உருவகப்படுத்துங்கள்",
    simCloudBtn: "கிளவுட் சர்வர் முடக்கத்தை உருவகப்படுத்துங்கள் (உள்ளூர் முறை)",

    quickPresetsLabel: "விரைவு மாதிரி விவரங்கள்",
    quickPresetsSub: "ஒரே கிளிக்கில் விவசாயி விவரங்களை நிரப்புக:",
    presetMarginal: "சிறு விவசாயி (<1 ஹெக்டேர்)",
    presetSmall: "குறு விவசாயி (1.6 ஹெக்டேர்)",
    presetCommercial: "பெரிய விவசாயி (5.5 ஹெக்டேர்)",

    bookSlotTitle: "தானிய எடை போடும் நேரத்தை முன்பதிவு செய்க",
    bookSlotSubtitle: "எடை மேடை திறனுக்கு ஏற்ப 1 மணி நேர ஒழுங்கமைக்கப்பட்ட ஸ்லாட்டுகள்",
    farmerNameLabel: "விவசாயியின் முழுப் பெயர்",
    phoneLabel: "கைபேசி எண்",
    landSizeLabel: "நிலப் பரப்பளவு (ஹெக்டேர்)",
    cropLabel: "பயிர் வகை (ஆதரவு விலை உத்தரவாதம்)",
    vehicleLabel: "வாகனம் / டிராக்டர் எண்",
    vehicleTypeLabel: "வாகன வகை",
    estWeightLabel: "மதிப்பிடப்பட்ட எடை (மெட்ரிக் டன்)",
    preferredSlotLabel: "1 மணி நேரத்தை தேர்வு செய்க",
    slotHelpText: "நெடுஞ்சாலையில் நெரிசலைத் தவிர்க்க நேரங்கள் தானாகக் கட்டுப்படுத்தப்படுகின்றன.",
    bookButton: "டிஜிட்டல் டோக்கன் & கேட் பாஸ் பெறுக",
    marginalBadge: "சிறு விவசாயிகளுக்கு (<2 ஹெக்.) முன்னுரிமை இயக்கப்பட்டது",

    lookupTitle: "பழைய டோக்கனைத் தேடுக",
    lookupBtn: "தேடுக",
    searchPlaceholder: "டோக்கன் எண் அல்லது மொபைல் எண்ணை உள்ளிடவும்",
    gatePassTitle: "வேளாண் ஒழுங்குமுறை விற்பனைக்கூட கேட் பாஸ்",
    farmerLabel: "விவசாயி:",
    vehicleNoLabel: "வாகனம்:",
    cropTypeLabel: "பயிர்:",
    assignedGateLabel: "ஒதுக்கப்பட்ட கேட்:",
    arrivalWindowLabel: "வரவேண்டிய நேரம்:",
    assignedSlotLabel: "ஒதுக்கப்பட்ட ஸ்லாட்:",
    slotArrivalWindow: "நேரடி எடைக்கு ஒதுக்கப்பட்ட 60 நிமிடங்களுக்குள் வரவும்.",
    liveEstTurnaround: "மதிப்பிடப்பட்ட நேரம்:",
    roadsideWaitSlashed: "சாலையில் காத்திருக்கும் நேரம் 96% குறைந்தது",
    tatLabel: "மொத்த பணி நேர மீட்டர்",
    tatSubtitle: "கேட் வருகையிலிருந்து எடை போட்டு ரசீது பெறும் வரை ஆகும் நேரம்.",
    printPass: "கேட் பாஸ் அச்சிடுக / சேமிக்க",

    authModalTitle: "விவசாயி தளம் உள்நுழைவு (e-NAM / PM-KISAN)",
    tabSignIn: "விவசாயி உள்நுழைவு",
    tabRegister: "புதிய விவசாயி பதிவு",
    loginPhoneLabel: "பதிவுசெய்த கைபேசி எண்",
    loginOtpLabel: "4-இலக்க OTP",
    sendOtpBtn: "OTP அனுப்புக (டெமோ)",
    loginSubmitBtn: "சரிபார்த்து உள்நுழைக",
    regNameLabel: "விவசாயியின் முழுப் பெயர்",
    regPhoneLabel: "கைபேசி எண்",
    regAadhaarLabel: "ஆதார் / PM-KISAN எண்",
    regLandLabel: "நிலப் பரப்பளவு (ஹெக்டேர்)",
    regCropLabel: "விற்பனை செய்யும் முதன்மைப் பயிர்",
    regVehicleLabel: "வாகன எண்",
    regVehicleTypeLabel: "வாகன வகை",
    regBankLabel: "வங்கி கணக்கு எண் / IFSC",
    regSubmitBtn: "பதிவு செய்து படிவத்தை நிரப்புக",

    ivrTitle: "ஸ்மார்ட்போன் தேவையில்லை: சாதாரண விசைப்பலகை போன் IVR முறை",
    ivrSubtitle: "விலை குறைந்த ₹800 விசைப்பலகை போனில் இணையம் இல்லாமலே இயங்கும்",
    ivrDialectLabel: "உள்ளூர் மொழி / குரலைத் தேர்வு செய்க:",
    ivrMissedCallBtn: "1-ரிங் மிஸ்டு கால் செய்க (உடனடி எஸ்எம்எஸ் டோக்கன்)",
    ivrTollFreeBtn: "இலவச எண் 1800-547-2600-ஐ அழைக்கவும்",
    ivrSmsTitle: "அரசு எஸ்எம்எஸ் செய்தி பெறப்பட்டது:",
    ivrSmsSub: "விவசாயிகள் மண்டி வாயிலில் இந்த 5-எழுத்துக் குறியீட்டைக் காட்டி நேரடியாக நுழையலாம்.",

    selectStateLabel: "விவசாய மாநிலம் / மண்டி மையத்தைத் தேர்ந்தெடுக்கவும்:",
    weatherTitle: "வானிலை அடிப்படையிலான வரிசைக் கட்டுப்பாடு",
    weatherSubtitle: "இந்திய வானிலை ஆய்வுத் துறை (IMD) ரேடாரோடு நேரடி இணைப்பு",
    tempLabel: "மண்டி வெப்பநிலை",
    rainRiskLabel: "மழைக்கான வாய்ப்பு",
    skyCondLabel: "வானிலை நிலை",
    siloBannerTitle: "கூரையிடப்பட்ட கிடங்கு: மழைக்கு முன் 14 டிராக்டர்கள் பாதுகாப்பு",
    siloBannerDesc: "ரேடாரில் மழை எச்சரிக்கை வந்தவுடன் திறந்தவெளி டிராக்டர்கள் உடனே கூரையுள்ள கொட்டகைக்கு மாற்றப்படும்.",
    simulateRainBtn: "கனமழை எச்சரிக்கையை உருவகப்படுத்துக",
    simulateClearBtn: "தெளிவான வானிலையை உருவகப்படுத்துக",

    impactTitle: "விவசாயிகளுக்கு நேரடிப் பொருளாதார லாபம்",
    impactSubtitle: "விவசாயிகள் மற்றும் சந்தைக்கு நிரூபிக்கப்பட்ட சேமிப்பு",
    metricWaitTitle: "காத்திருப்பு நேரத்தில் 96% குறைப்பு",
    metricWaitDesc: "நெடுஞ்சாலை 2-3 நாள் நெரிசலில் இருந்து விடுதலை, 45 நிமிடங்களில் வேலை முடிகிறது.",
    metricSavedTitle: "விவசாயிக்கு ஒரு முறைக்கு ஆகும் சேமிப்பு",
    metricSavedDesc: "டிராக்டர் வாடகை மிச்சமாகிறது, குறைந்த விலைக்கு விற்க வேண்டிய கட்டாயம் இல்லை.",
    metricSpoilageTitle: "பயிர் அழுகும் இழப்பு 0%",
    metricSpoilageDesc: "மழை பெய்யும் முன்பே பாதுகாப்பான கிடங்குகளுக்கு தானியங்கள் மாற்றப்படுகின்றன."
  },

  kn: {
    govtOfIndia: "ಭಾರತ ಸರ್ಕಾರ",
    govtTitle: "ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ • ಭಾರತ ಸರ್ಕಾರ • ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ (e-NAM)",
    appTitle: "ಕಿಸಾನ್-Q: ಸ್ಮಾರ್ಟ್ ಸ್ಲಾಟ್ ಬುಕಿಂಗ್",
    tagline: "ಭಾರತೀಯ ರೈತರ ಸಮಯ, ಹಣ ಮತ್ತು ಘನತೆಯ ರಕ್ಷಣೆ",
    langLabel: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ:",
    helplineText: "ಸಹಾಯವಾಣಿ: 1800-270-0224 (ಉಚಿತ ಕರೆ)",
    openMobileApp: "📱 ರೈತ ಮೊಬೈಲ್ ಆ್ಯಪ್ (ಪೋರ್ಟ್ 8443)",
    signInBtn: "ರೈತರ ಲಾಗಿನ್",
    registerBtn: "ಹೊಸ ರೈತರ ನೋಂದಣಿ",
    downloadAppBtn: "📲 ಮೊಬೈಲ್ ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್",
    appDownloadModalTitle: "ಕಿಸಾನ್-Q ಮೊಬೈಲ್ ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್ ಕೇಂದ್ರ",
    liveTimeLabel: "ಲೈವ್ ಸಮಯ:",
    wifiLabel: "ವೈ-ಫೈ:",

    tabFarmer: "🌾 ರೈತ ಪೋರ್ಟಲ್",
    tabIVR: "📱 ಕೀಪ್ಯಾಡ್ ಫೋನ್ (IVR)",
    tabWeather: "🛰️ ಹವಾಮಾನ ರೇಡಾರ್",
    tabImpact: "📊 ಲಾಭ ಮತ್ತು ಪರಿಣಾಮ",
    tabMatrix: "⚔️ ಫೀಲ್ಡ್ ಆರ್ಕಿಟೆಕ್ಚರ್ ಮ್ಯಾಟ್ರಿಕ್ಸ್",
    handbookPdf: "📄 ಕೈಪಿಡಿ (PDF)",

    liveTickerBadge: "ಇ-ನಾಮ್ ಲೈವ್ ಟಿಕ್ಕರ್",
    tickerContent: "🌾 ಗೋಧಿ ಬೆಂಬಲ ಬೆಲೆ ₹2,275/ಕ್ವಿಂಟಾಲ್ ▲ (+₹150) • 🍚 ಭತ್ತ ₹2,300/ಕ್ವಿಂಟಾಲ್ ▲ (+₹117) • 🌻 ಸಾಸಿವೆ ₹5,650/ಕ್ವಿಂಟಾಲ್ ▲ (+₹200) • 🚜 ಎಪಿಎಂಸಿ ಗೇಟ್ 1 ಸರದಿ ಸಮಯ: 18 ನಿಮಿಷ • ⛈️ ಹವಾಮಾನ ಸ್ವಚ್ಛ • 💰 1.77+ ಕೋಟಿ ರೈತರಿಗೆ ನೇರ ನಗದು ವರ್ಗಾವಣೆ",
    statFarmers: "1.77+ ಕೋಟಿ",
    statFarmersSub: "ನೋಂದಾಯಿತ ರೈತರು",
    statMandis: "1,361+ ಮಾರುಕಟ್ಟೆಗಳು",
    statMandisSub: "ದೇಶಾದ್ಯಂತ ಇ-ನಾಮ್",
    statWait: "96% ಕಾಯುವಿಕೆ ಕಡಿತ",
    statWaitSub: "18 ಗಂಟೆ → ಕೇವಲ 45 ನಿಮಿಷ",
    statDbt: "100% ಡಿಬಿಟಿ",
    statDbtSub: "ನೇರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ",

    chaosConsoleBadge: "ಕೇಯಾಸ್ ಕನ್ಸೋಲ್",
    chaosTitle: "ಲೈವ್ ಸಿಸ್ಟಮ್ ಪರೀಕ್ಷೆ",
    chaosSubtitle: "ಗೇಟ್ ಅಡಚಣೆ ಅಥವಾ ಸರ್ವರ್ ಸ್ಥಗಿತಗೊಂಡರೂ ಕಿಸಾನ್-Q ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ನೋಡಿ",
    simBreakdownBtn: "ಗೇಟ್ 1 ರಲ್ಲಿ ಟ್ರಾಕ್ಟರ್ ಸ್ಥಗಿತವನ್ನು ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ",
    simCloudBtn: "ಕ್ಲೌಡ್ ಸರ್ವರ್ ಸ್ಥಗಿತವನ್ನು ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ (ಸ್ಥಳೀಯ ಮೋಡ್)",

    quickPresetsLabel: "ತ್ವರಿತ ಡೆಮೊ ಪ್ರಿಸೆಟ್‌ಗಳು",
    quickPresetsSub: "ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ರೈತರ ಮಾಹಿತಿ ಭರ್ತಿ ಮಾಡಿ:",
    presetMarginal: "ಸಣ್ಣ ರೈತ (<1 ಹೆಕ್ಟೇರ್ ಗೋಧಿ)",
    presetSmall: "ಮಧ್ಯಮ ರೈತ (1.6 ಹೆಕ್ಟೇರ್)",
    presetCommercial: "ದೊಡ್ಡ ರೈತ (5.5 ಹೆಕ್ಟೇರ್)",

    bookSlotTitle: "ಧಾನ್ಯ ತೂಕದ ಸ್ಲಾಟ್ ಕಾಯ್ದಿರಿಸಿ",
    bookSlotSubtitle: "ತೂಕದ ಯಂತ್ರ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ 1 ಗಂಟೆಯ ವ್ಯವಸ್ಥಿತ ಸ್ಲಾಟ್‌ಗಳು",
    farmerNameLabel: "ರೈತರ ಪೂರ್ಣ ಹೆಸರು",
    phoneLabel: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    landSizeLabel: "ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ (ಹೆಕ್ಟೇರ್)",
    cropLabel: "ಬೆಳೆ ಪ್ರಕಾರ (ಬೆಂಬಲ ಬೆಲೆ ಭರವಸೆ)",
    vehicleLabel: "ವಾಹನ / ಟ್ರಾಕ್ಟರ್ ಸಂಖ್ಯೆ",
    vehicleTypeLabel: "ವಾಹನದ ಪ್ರಕಾರ",
    estWeightLabel: "ಅಂದಾಜು ತೂಕ (ಮೆಟ್ರಿಕ್ ಟನ್)",
    preferredSlotLabel: "1 ಗಂಟೆಯ ಸಮಯ ಆಯ್ಕೆಮಾಡಿ",
    slotHelpText: "ಹೆದ್ದಾರಿಯಲ್ಲಿ ಟ್ರಾಫಿಕ್ ಆಗದಂತೆ ಸ್ಲಾಟ್‌ಗಳನ್ನು ನಿಯಂತ್ರಿಸಲಾಗುತ್ತದೆ.",
    bookButton: "ಡಿಜಿಟಲ್ ಟೋಕನ್ ಮತ್ತು ಗೇಟ್ ಪಾಸ್ ಪಡೆಯಿರಿ",
    marginalBadge: "ಸಣ್ಣ ರೈತರಿಗೆ (<2 ಹೆಕ್ಟೇರ್) ಆದ್ಯತೆಯ ಕೋಟಾ ಸಕ್ರಿಯ",

    lookupTitle: "ಹಳೆಯ ಟೋಕನ್ ಹುಡುಕಿ",
    lookupBtn: "ಹುಡುಕಿ",
    searchPlaceholder: "ಟೋಕನ್ ಸಂಖ್ಯೆ ಅಥವಾ ಮೊಬೈಲ್ ನಮೂದಿಸಿ",
    gatePassTitle: "ಎಪಿಎಂಸಿ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ಗೇಟ್ ಪಾಸ್",
    farmerLabel: "ರೈತ:",
    vehicleNoLabel: "ವಾಹನ:",
    cropTypeLabel: "ಬೆಳೆ:",
    assignedGateLabel: "ನಿಗದಿಪಡಿಸಿದ ಗೇಟ್:",
    arrivalWindowLabel: "ಆಗಮನದ ಸಮಯ:",
    assignedSlotLabel: "ನಿಗದಿಪಡಿಸಿದ ಸ್ಲಾಟ್:",
    slotArrivalWindow: "ನೇರ ತೂಕಕ್ಕಾಗಿ ದಯವಿಟ್ಟು ನಿಗದಿಪಡಿಸಿದ 60 ನಿಮಿಷಗಳಲ್ಲಿ ಬನ್ನಿ.",
    liveEstTurnaround: "ಅಂದಾಜು ಸಮಯ:",
    roadsideWaitSlashed: "ರಸ್ತೆಯಲ್ಲಿ ಕಾಯುವಿಕೆ 96% ಇಳಿಕೆ",
    tatLabel: "ಟರ್ನ್‌ಅರೌಂಡ್ ಟೈಮ್ ಮೀಟರ್",
    tatSubtitle: "ಗೇಟ್ ಪ್ರವೇಶದಿಂದ ತೂಕ ಮತ್ತು ರಸೀದಿ ಸಿಗುವವರೆಗೆ ತಗಲುವ ಸಮಯ.",
    printPass: "ಪಾಸ್ ಪ್ರಿಂಟ್ / ಸೇವ್ ಮಾಡಿ",

    authModalTitle: "ರೈತರ ಪೋರ್ಟಲ್ ಲಾಗಿನ್ (e-NAM / PM-KISAN)",
    tabSignIn: "ರೈತರ ಲಾಗಿನ್",
    tabRegister: "ಹೊಸ ರೈತರ ನೋಂದಣಿ",
    loginPhoneLabel: "ನೋಂದಾಯಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    loginOtpLabel: "4-ಅಂಕಿಯ ಒಟಿಪಿ (OTP)",
    sendOtpBtn: "ಒಟಿಪಿ ಕಳುಹಿಸಿ (ಡೆಮೊ)",
    loginSubmitBtn: "ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಲಾಗಿನ್ ಮಾಡಿ",
    regNameLabel: "ರೈತರ ಪೂರ್ಣ ಹೆಸರು",
    regPhoneLabel: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    regAadhaarLabel: "ಆಧಾರ್ / ಪಿಎಂ-ಕಿಸಾನ್ ಐಡಿ",
    regLandLabel: "ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ (ಹೆಕ್ಟೇರ್)",
    regCropLabel: "ಮಾರಾಟದ ಮುಖ್ಯ ಬೆಳೆ",
    regVehicleLabel: "ವಾಹನದ ಸಂಖ್ಯೆ",
    regVehicleTypeLabel: "ವಾಹನದ ಪ್ರಕಾರ",
    regBankLabel: "ಡಿಬಿಟಿ ಬ್ಯಾಂಕ್ ಖಾತೆ / IFSC",
    regSubmitBtn: "ನೋಂದಾಯಿಸಿ ಮತ್ತು ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ",

    ivrTitle: "ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಇಲ್ಲದ ರೈತರಿಗೆ: ಸರಳ ಕೀಪ್ಯಾಡ್ ಫೋನ್ IVR ವ್ಯವಸ್ಥೆ",
    ivrSubtitle: "ಸಾಮಾನ್ಯ ₹800 ಕೀಪ್ಯಾಡ್ ಫೋನ್‌ನಲ್ಲಿ ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    ivrDialectLabel: "ಸ್ಥಳೀಯ ಭಾಷೆ / ಧ್ವನಿ ಆಯ್ಕೆಮಾಡಿ:",
    ivrMissedCallBtn: "1-ರಿಂಗ್ ಮಿಸ್ಡ್ ಕಾಲ್ ನೀಡಿ (ತಕ್ಷಣವೇ SMS ಟೋಕನ್)",
    ivrTollFreeBtn: "ಉಚಿತ ಸಂಖ್ಯೆ 1800-547-2600 ಗೆ ಕರೆ ಮಾಡಿ",
    ivrSmsTitle: "ಸರ್ಕಾರಿ SMS ಸಂದೇಶ ಬಂದಿದೆ:",
    ivrSmsSub: "ರೈತರು ಮಾರುಕಟ್ಟೆ ಗೇಟ್‌ನಲ್ಲಿ ಈ 5-ಅಕ್ಷರದ ಕೋಡ್ ತೋರಿಸಿ ನೇರವಾಗಿ ಪ್ರವೇಶಿಸಬಹುದು.",

    selectStateLabel: "ಕೃಷಿ ರಾಜ್ಯ / ಮಂಡಿ ಕೇಂದ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    weatherTitle: "ಹವಾಮಾನ ಆಧಾರಿತ ಸರದಿ ನಿಯಂತ್ರಣ ಮತ್ತು ಶೆಡ್ ಡೈವರ್ಶನ್",
    weatherSubtitle: "ಭಾರತೀಯ ಹವಾಮಾನ ಇಲಾಖೆ (IMD) ಡಾಪ್ಲರ್ ರೇಡಾರ್‌ನೊಂದಿಗೆ ನೇರ ಸಂಪರ್ಕ",
    tempLabel: "ಮಾರುಕಟ್ಟೆ ತಾಪಮಾನ",
    rainRiskLabel: "ಮಳೆಯ ಸಂಭವನೀಯತೆ",
    skyCondLabel: "ಆಕಾಶದ ಸ್ಥಿತಿ",
    siloBannerTitle: "ಮುಚ್ಚಿದ ಸೈಲೋ ಶೆಡ್‌ಗಳು: ಮಳೆಗೂ ಮುನ್ನ 14 ಟ್ರಾಕ್ಟರ್ ಸುರಕ್ಷಿತ",
    siloBannerDesc: "ರೇಡಾರ್‌ನಲ್ಲಿ ಮಳೆ ಮುನ್ಸೂಚನೆ ಬಂದ ಕೂಡಲೇ ತೆರೆದ ಟ್ರಾಕ್ಟರ್‌ಗಳನ್ನು ಮುಚ್ಚಿದ ಶೆಡ್‌ಗಳಿಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.",
    simulateRainBtn: "ಭಾರಿ ಮಳೆ ಮುನ್ಸೂಚನೆ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ",
    simulateClearBtn: "ಸ್ವಚ್ಛ ಹವಾಮಾನ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ",

    impactTitle: "ರೈತರಿಗೆ ನೇರ ಆರ್ಥಿಕ ಲಾಭ",
    impactSubtitle: "ರೈತರು ಮತ್ತು ಮಾರುಕಟ್ಟೆಗೆ ದೃಢೀಕೃತ ಉಳಿತಾಯ",
    metricWaitTitle: "ಕಾಯುವ ಸಮಯದಲ್ಲಿ 96% ಇಳಿಕೆ",
    metricWaitDesc: "ಹೆದ್ದಾರಿಯಲ್ಲಿ 2-3 ದಿನಗಳ ಟ್ರಾಫಿಕ್ ಕಿರಿಕಿರಿ ಇಲ್ಲ, 45 ನಿಮಿಷಗಳಲ್ಲಿ ಕೆಲಸ ಪೂರ್ಣ.",
    metricSavedTitle: "ಪ್ರತಿ ಟ್ರಿಪ್‌ಗೆ ರೈತನ ಉಳಿತಾಯ",
    metricSavedDesc: "ಟ್ರಾಕ್ಟರ್ ಬಾಡಿಗೆ ಉಳಿತಾಯ ಮತ್ತು ಕಡಿಮೆ ಬೆಲೆಗೆ ಮಾರುವ ಅನಿವಾರ್ಯತೆ ಇರುವುದಿಲ್ಲ.",
    metricSpoilageTitle: "ಬೆಳೆ ಹಾಳಾಗುವ ನಷ್ಟ 0%",
    metricSpoilageDesc: "ಮಳೆ ಬರುವ ಮುನ್ನವೇ ಧಾನ್ಯ ಸುರಕ್ಷಿತ ಗೋದಾಮಿಗೆ ತಲುಪುತ್ತದೆ."
  }
};

let currentLang = 'en';

// Master Comprehensive Translation Dictionary for 100% UI Coverage
const MASTER_DOM_DICT = {
  "GOVT OF INDIA": {
    "hi": "भारत सरकार",
    "pa": "ਭਾਰਤ ਸਰਕਾਰ",
    "mr": "भारत सरकार",
    "gu": "ભારત સરકાર",
    "bn": "ভারত সরকার",
    "te": "భారత ప్రభుత్వం",
    "ta": "இந்திய அரசு",
    "kn": "ಭಾರತ ಸರ್ಕಾರ"
  },
  "Ministry of Agriculture & Farmers Welfare • National Agriculture Market (e-NAM)": {
    "hi": "कृषि एवं किसान कल्याण मंत्रालय • भारत सरकार • राष्ट्रीय कृषि बाज़ार (e-NAM)",
    "pa": "ਖੇਤੀਬਾੜੀ ਅਤੇ ਕਿਸਾਨ ਭਲਾਈ ਮੰਤਰਾਲਾ • ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ ਮੰਡੀ (e-NAM)",
    "mr": "कृषी आणि शेतकरी कल्याण मंत्रालय • भारत सरकार • राष्ट्रीय कृषी बाजार (e-NAM)",
    "gu": "કૃષિ અને ખેડૂત કલ્યાણ મંત્રાલય • ભારત સરકાર • રાષ્ટ્રીય કૃષિ બજાર (e-NAM)",
    "bn": "কৃষি ও কৃষক কল্যাণ মন্ত্রক • ভারত সরকার • জাতীয় কৃষি বাজার (e-NAM)",
    "te": "వ్యవసాయ & రైతు సంక్షేమ మంత్రిత్వ శాఖ • భారత ప్రభుత్వం • జాతీయ వ్యవసాయ మార్కెట్ (e-NAM)",
    "ta": "வேளாண்மை மற்றும் உழவர் நல அமைச்சகம் • இந்திய அரசு • தேசிய வேளாண் சந்தை (e-NAM)",
    "kn": "ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ • ಭಾರತ ಸರ್ಕಾರ • ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ (e-NAM)"
  },
  "KISAN-Q: Smart Slot Booking": {
    "hi": "किसान-Q: स्मार्ट स्लॉट बुकिंग",
    "pa": "ਕਿਸਾਨ-Q: ਸਮਾਰਟ ਸਲਾਟ ਬੁਕਿੰਗ",
    "mr": "किसान-Q: स्मार्ट स्लॉट बुकिंग",
    "gu": "કિસાન-Q: સ્માર્ટ સ્લોટ બુકિંગ",
    "bn": "কিষাণ-Q: স্মার্ট স্লট বুকিং",
    "te": "కిసాన్-Q: స్మార్ట్ స్లాట్ బుకింగ్",
    "ta": "கிசான்-Q: ஸ்மார்ட் ஸ்லாட் முன்பதிவு",
    "kn": "ಕಿಸಾನ್-Q: ಸ್ಮಾರ್ಟ್ ಸ್ಲಾಟ್ ಬುಕಿಂಗ್"
  },
  "Restoring Time, Money & Dignity to the Indian Farmer": {
    "hi": "भारतीय किसान के समय, धन और सम्मान की सुरक्षा",
    "pa": "ਭਾਰਤੀ ਕਿਸਾਨ ਦੇ ਸਮੇਂ, ਪੈਸੇ ਅਤੇ ਸਤਿਕਾਰ ਦੀ ਰਾਖੀ",
    "mr": "भारतीय शेतकऱ्यांच्या वेळेची, पैशांची आणि सन्मानाची सुरक्षा",
    "gu": "ભારતીય ખેડૂતના સમય, નાણાં અને ગૌરવનું રક્ષણ",
    "bn": "ভারতীয় কৃষকের সময়, অর্থ ও সম্মানের সুরক্ষা",
    "te": "భారతీయ రైతు సమయం, ధనం మరియు గౌరవానికి భరోసా",
    "ta": "இந்திய விவசாயிகளின் நேரம், பணம் மற்றும் கண்ணியத்தின் பாதுகாப்பு",
    "kn": "ಭಾರತೀಯ ರೈತರ ಸಮಯ, ಹಣ ಮತ್ತು ಘನತೆಯ ರಕ್ಷಣೆ"
  },
  "Language:": {
    "hi": "भाषा चुनें:",
    "pa": "ਭਾਸ਼ਾ ਚੁਣੋ:",
    "mr": "भाषा निवडा:",
    "gu": "ભાષા પસંદ કરો:",
    "bn": "ভাষা নির্বাচন করুন:",
    "te": "భాషను ఎంచుకోండి:",
    "ta": "மொழியைத் தேர்வு செய்க:",
    "kn": "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ:"
  },
  "Helpline: 1800-270-0224 (Toll Free)": {
    "hi": "हेल्पलाइन: 1800-270-0224 (टोल फ्री)",
    "pa": "ਹੈਲਪਲਾਈਨ: 1800-270-0224 (ਟੋਲ ਫ੍ਰੀ)",
    "mr": "हेल्पलाईन: 1800-270-0224 (टोल फ्री)",
    "gu": "હેલ્પલાઇન: 1800-270-0224 (ટોલ ફ્રી)",
    "bn": "হেল্পলাইন: 1800-270-0224 (টোল ফ্রি)",
    "te": "హెల్ప్‌లైన్: 1800-270-0224 (టోల్ ఫ్రీ)",
    "ta": "உதவி எண்: 1800-270-0224 (கட்டணமில்லா)",
    "kn": "ಸಹಾಯವಾಣಿ: 1800-270-0224 (ಉಚಿತ ಕರೆ)"
  },
  "📱 Farmer Mobile App (Port 8443)": {
    "hi": "📱 किसान मोबाइल ऐप (पोर्ट 8443)",
    "pa": "📱 ਕਿਸਾਨ ਮੋਬਾਈਲ ਐਪ (ਪੋਰਟ 8443)",
    "mr": "📱 शेतकरी मोबाईल ॲप (पोर्ट 8443)",
    "gu": "📱 કિસાન મોબાઈલ એપ (પોર્ટ 8443)",
    "bn": "📱 কৃষক মোবাইল অ্যাপ (পোর্ট 8443)",
    "te": "📱 రైతు మొబైల్ యాప్ (పోర్ట్ 8443)",
    "ta": "📱 உழவர் மொபைல் செயலி (போர்ட் 8443)",
    "kn": "📱 ರೈತ ಮೊಬೈಲ್ ಆ್ಯಪ್ (ಪೋರ್ಟ್ 8443)"
  },
  "Farmer Sign In": {
    "hi": "किसान लॉग इन",
    "pa": "ਕਿਸਾਨ ਲੌਗ ਇਨ",
    "mr": "शेतकरी लॉगिन",
    "gu": "ખેડૂત સાઇન ઇન",
    "bn": "কৃষক সাইন ইন",
    "te": "రైతు లాగిన్",
    "ta": "விவசாயி உள்நுழைவு",
    "kn": "ರೈತರ ಲಾಗಿನ್"
  },
  "New Farmer Register": {
    "hi": "नया किसान पंजीकरण",
    "pa": "ਨਵਾਂ ਕਿਸਾਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
    "mr": "नवीन शेतकरी नोंदणी",
    "gu": "નવા ખેડૂતની નોંધણી",
    "bn": "নতুন কৃষক নিবন্ধন",
    "te": "కొత్త రైతు నమోదు",
    "ta": "புதிய விவசாயி பதிவு",
    "kn": "ಹೊಸ ರೈತರ ನೋಂದಣಿ"
  },
  "📲 Download App": {
    "hi": "📲 मोबाइल ऐप डाउनलोड",
    "pa": "📲 ਮੋਬਾਈਲ ਐਪ ਡਾਊਨਲੋਡ",
    "mr": "📲 मोबाईल ॲप डाउनलोड",
    "gu": "📲 મોબાઈલ એપ ડાઉનલોડ",
    "bn": "📲 মোবাইল অ্যাপ ডাউনলোড",
    "te": "📲 మొబైల్ యాప్ డౌన్‌లోడ్",
    "ta": "📲 மொபைல் செயலி பதிவிறக்கம்",
    "kn": "📲 ಮೊಬೈಲ್ ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್"
  },
  "KISAN-Q Mobile App Download": {
    "hi": "किसान-Q मोबाइल ऐप डाउनलोड केंद्र",
    "pa": "ਕਿਸਾਨ-Q ਮੋਬਾਈਲ ਐਪ ਡਾਊਨਲੋਡ ਕੇਂਦਰ",
    "mr": "किसान-Q मोबाईल ॲप डाउनलोड केंद्र",
    "gu": "કિસાન-Q એપ ડાઉનલોડ સેન્ટર",
    "bn": "কিষাণ-Q অ্যাপ ডাউনলোড কেন্দ্র",
    "te": "కిసాన్-Q మొబైల్ యాప్ డౌన్‌లోడ్ కేంద్రం",
    "ta": "கிசான்-Q செயலி பதிவிறக்க மையம்",
    "kn": "ಕಿಸಾನ್-Q ಮೊಬೈಲ್ ಆ್ಯಪ್ ಡೌನ್‌ಲೋಡ್ ಕೇಂದ್ರ"
  },
  "Live Time:": {
    "hi": "लाइव समय:",
    "pa": "ਲਾਈਵ ਸਮਾਂ:",
    "mr": "थेट वेळ:",
    "gu": "લાઈવ સમય:",
    "bn": "লাইভ সময়:",
    "te": "లైవ్ సమయం:",
    "ta": "நேரலை நேரம்:",
    "kn": "ಲೈವ್ ಸಮಯ:"
  },
  "Wi-Fi:": {
    "hi": "वाई-फ़ाई:",
    "pa": "ਵਾਈ-ਫਾਈ:",
    "mr": "वाय-फाय:",
    "gu": "વાઇ-ફાઇ:",
    "bn": "ওয়াই-ফাই:",
    "te": "వై-ఫై:",
    "ta": "வை-ஃபை:",
    "kn": "ವೈ-ಫೈ:"
  },
  "🌾 Farmer Portal": {
    "hi": "🌾 किसान पोर्टल",
    "pa": "🌾 ਕਿਸਾਨ ਪੋਰਟਲ",
    "mr": "🌾 शेतकरी पोर्टल",
    "gu": "🌾 ખેડૂત પોર્ટલ",
    "bn": "🌾 কৃষক পোর্টাল",
    "te": "🌾 రైతు పోర్టల్",
    "ta": "🌾 உழவர் தளம்",
    "kn": "🌾 ರೈತ ಪೋರ್ಟಲ್"
  },
  "📱 Zero-Smartphone IVR": {
    "hi": "📱 कीपैड फोन (IVR)",
    "pa": "📱 ਕੀਪੈਡ ਫੋਨ (IVR)",
    "mr": "📱 कीपॅड फोन (IVR)",
    "gu": "📱 કીપેડ ફોન (IVR)",
    "bn": "📱 কিপ্যাড ফোন (IVR)",
    "te": "📱 కీప్యాడ్ ఫోన్ (IVR)",
    "ta": "📱 விசைப்பலகை போன் (IVR)",
    "kn": "📱 ಕೀಪ್ಯಾಡ್ ಫೋನ್ (IVR)"
  },
  "🛰️ IMD Weather Radar": {
    "hi": "🛰️ मौसम रडार",
    "pa": "🛰️ ਮੌਸਮ ਰਾਡਾਰ",
    "mr": "🛰️ हवामान रडार",
    "gu": "🛰️ હવામાન રડાર",
    "bn": "🛰️ আবহাওয়া রাডার",
    "te": "🛰️ వాతావరణ రాడార్",
    "ta": "🛰️ வானிலை ரேடார்",
    "kn": "🛰️ ಹವಾಮಾನ ರೇಡಾರ್"
  },
  "📊 Impact & Benefits": {
    "hi": "📊 लाभ एवं प्रभाव",
    "pa": "📊 ਲਾਭ ਅਤੇ ਪ੍ਰਭਾਵ",
    "mr": "📊 नफा आणि फायदे",
    "gu": "📊 ફાયદા અને પ્રભાવ",
    "bn": "📊 লাভ ও প্রভাব",
    "te": "📊 ప్రయోజనాలు & ప్రభావం",
    "ta": "📊 பலன்கள் & தாக்கம்",
    "kn": "📊 ಲಾಭ ಮತ್ತು ಪರಿಣಾಮ"
  },
  "🏛️ APMC Standards & SOP": {
    "hi": "🏛️ एपीएमसी मानक व एसओपी",
    "pa": "🏛️ ਮੰਡੀ ਮਿਆਰ ਤੇ ਐਸਓਪੀ",
    "mr": "⚔️ फील्ड आर्किटेक्चर मॅट्रिक्स",
    "gu": "⚔️ ફીલ્ડ આર્કિટેક્ચર મેટ્રિક્સ",
    "bn": "⚔️ ফিল্ড আর্কিটেকচার ম্যাট্রিক্স",
    "te": "⚔️ ఫీల్డ్ ఆర్కిటెక్చర్ మ్యాట్రిక్స్",
    "ta": "⚔️ கள கட்டமைப்பு அணி",
    "kn": "⚔️ ಫೀಲ್ಡ್ ಆರ್ಕಿಟೆಕ್ಚರ್ ಮ್ಯಾಟ್ರಿಕ್ಸ್"
  },
  "🎁 Mandi Offers & Tenders": {
    "hi": "🎁 मंडी ऑफ़र और टेंड��",
    "pa": "🎁 ਮੰਡੀ ਪੇਸ਼ਕਸ਼ਾਂ ਅਤੇ ਟੈਂਡਰ",
    "mr": "🎁 मंडी ऑफर आणि टेंडर",
    "gu": "🎁 મંડી ઓફર્સ અને ટેન્ડર્સ",
    "bn": "🎁 মান্ডি অফার এবং টেন্ডার",
    "te": "🎁 మండి ఆఫర్లు & టెండర్లు",
    "ta": "🎁 மண்டி சலுகைகள் & டெண்டர்கள்",
    "kn": "🎁 ಮಂಡಿ ಕೊಡುಗೆಗಳು & ಟೆಂಡರ್‌ಗಳು"
  },
  "📈 Price Timeline & Hikes/Lows": {
    "hi": "📈 मूल्य समयरेखा और तेजी/मंदी",
    "pa": "📈 ਮੁੱਲ ਸਮਾਂ-ਰੇਖਾ ਅਤੇ ਵਾਧੇ/ਘਟਾਵੇ",
    "mr": "📈 किंमत कालरेषा आणि वाढ/घसरण",
    "gu": "📈 ભાવ સમયરેખા અને વધારા/ઘટાડા",
    "bn": "📈 দামের সময়রেখা এবং বৃদ্ধি/হ্রাস",
    "te": "📈 ధరల కాలపట్టిక & పెరుగుదలలు/తగ్గుదలలు",
    "ta": "📈 விலை காலவரிசை & உயர்வுகள்/வீழ்ச்சிகள்",
    "kn": "📈 ಬೆಲೆ ಕಾಲಾವಧಿ & ಏರಿಕೆಗಳು/ಇಳಿಕೆಗಳು"
  },
  "👁️ Mandi Preview": {
    "hi": "👁️ मंडी पूर्वावलोकन व टूर",
    "pa": "👁️ ਮੰਡੀ ਝਲਕ ਤੇ ਟੂਰ",
    "mr": "👁️ मंडी पूर्वावलोकन",
    "gu": "👁️ મંડી પૂર્વાવલોકન",
    "bn": "👁️ মান্ডি পূর্বরূপ",
    "te": "👁️ మండి ప్రివ్యూ",
    "ta": "👁️ மண்டி முன்னோட்டம்",
    "kn": "👁️ ಮಂ��ಿ ಮುನ್ನೋಟ"
  },
  "📄 Handbook PDF": {
    "hi": "📄 हैंडबुक (PDF)",
    "pa": "📄 ਹੈਂਡਬੁੱਕ (PDF)",
    "mr": "📄 हँडबुक (PDF)",
    "gu": "📄 હેન્ડબુક (PDF)",
    "bn": "📄 হ্যান্ডবুক (PDF)",
    "te": "📄 హ్యాండ్‌బుక్ (PDF)",
    "ta": "📄 கையேடு (PDF)",
    "kn": "📄 ಕೈಪಿಡಿ (PDF)"
  },
  "e-NAM LIVE TICKER": {
    "hi": "ई-नाम लाइव टिकर",
    "pa": "ਈ-ਨਾਮ ਲਾਈਵ ਟਿਕਰ",
    "mr": "ई-नाम लाईव्ह टिकर",
    "gu": "ઈ-નામ લાઈવ ટીકર",
    "bn": "ই-নাম লাইভ টিকার",
    "te": "ఈ-నామ్ లైవ్ టిక్కర్",
    "ta": "இ-நாம் நேரலை தகவல்",
    "kn": "ಇ-ನಾಮ್ ಲೈವ್ ಟಿಕ್ಕರ್"
  },
  "🌾 Wheat MSP ₹2,275/Qtl ▲ (+₹150) • 🍚 Paddy MSP ₹2,300/Qtl ▲ (+₹117) • 🌻 Mustard MSP ₹5,650/Qtl ▲ (+₹200) • 🚜 APMC Mandi #042: Gate 1 Smallholder Express Turnaround: 18 min • ⛈️ IMD Doppler Radar: Clear weather across North Indian mandis • 💰 1.77+ Crore Farmers paid via PFMS Direct Benefit Transfer • 🏛️ 1,361+ e-NAM Mandis Nationwide": {
    "hi": "🌾 गेहूं MSP ₹2,275/क्विंटल ▲ (+₹150) • 🍚 धान MSP ₹2,300/क्विंटल ▲ (+₹117) • 🌻 सरसों MSP ₹5,650/क्विंटल ▲ (+₹200) • 🚜 एपीएमसी मंडी: गेट 1 छोटे किसानों का टर्नअराउंड: 18 मिनट • ⛈️ आईएमडी डॉपलर रडार: मौसम साफ • 💰 1.77+ करोड़ किसानों को डीबीटी भुगतान • 🏛️ 1,361+ ई-नाम मंडियां सक्रिय",
    "pa": "🌾 ਕਣਕ MSP ₹2,275/ਕੁਇੰਟਲ ▲ (+₹150) • 🍚 ਝੋਨਾ MSP ₹2,300/ਕੁਇੰਟਲ ▲ (+₹117) • 🌻 ਸਰ੍ਹੋਂ MSP ₹5,650/ਕੁਇੰਟਲ ▲ (+₹200) • 🚜 ਏਪੀਐਮਸੀ ਮੰਡੀ: ਗੇਟ 1 ਟਰਨਅਰਾਊਂਡ: 18 ਮਿੰਟ • ⛈️ ਮੌਸਮ ਸਾਫ਼ • 💰 1.77+ ਕਰੋੜ ਕਿਸਾਨਾਂ ਨੂੰ ਡੀਬੀਟੀ ਭੁਗਤਾਨ",
    "mr": "🌾 गहू हमीभाव ₹2,275/क्विंटल ▲ (+₹150) • 🍚 भात हमीभाव ₹2,300/क्विंटल ▲ (+₹117) • 🌻 मोहरी हमीभाव ₹5,650/क्विंटल ▲ (+₹200) • 🚜 एपीएमसी मंडी: गेट 1 टर्नअराउंड: 18 मिनिटे • ⛈️ हवामान स्वच्छ • 💰 1.77+ कोटी शेतकऱ्यांना थेट बँक खात्यात पैसे जमा",
    "gu": "🌾 ઘઉં ટેકાનો ભાવ ₹2,275/ક્વિન્ટલ ▲ (+₹150) • 🍚 ડાંગર ₹2,300/ક્વિન્ટલ ▲ (+₹117) • 🌻 રાયડો/સરસવ ₹5,650/ક્વિન્ટલ ▲ (+₹200) • 🚜 યાર્ડ ગેટ 1 ટર્નઅરાઉન્ડ: 18 મિનિટ • ⛈️ હવામાન ચોખ્ખું • 💰 1.77+ કરોડ ખેડૂતોને સીધા ખાતામાં ચૂકવણી",
    "bn": "🌾 গম MSP ₹২,২৭৫/কুইন্টাল ▲ (+₹১৫০) • 🍚 ধান MSP ₹২,৩০০/কুইন্টাল ▲ (+₹১১৭) • 🌻 সরিষা MSP ₹৫,৬৫০/কুইন্টাল ▲ (+₹২০০) • 🚜 এপিএমসি মান্ডি: গেট ১ টার্নঅ্যারাউন্ড: ১৮ মিনিট • ⛈️ পরিষ্কার আবহাওয়া • 💰 ১.৭৭+ কোটি কৃষকের ব্যাংক অ্যাকাউন্টে সরাসরি টাকা স্থানান্তর",
    "te": "🌾 గోధుమల మద్దతు ధర ₹2,275/క్వింటా ▲ (+₹150) • 🍚 ధాన్యం మద్దతు ధర ₹2,300/క్వింటా ▲ (+₹117) • 🌻 ఆవాలు ₹5,650/క్వింటా ▲ (+₹200) • 🚜 మార్కెట్ యార్డ్ గేట్ 1 టర్న్‌అరౌండ్: 18 నిమిషాలు • ⛈️ వాతావరణం అనుకూలం • 💰 1.77+ కోట్ల మంది రైతులకు నేరుగా ఖాతాల్లోకి నగదు",
    "ta": "🌾 கோதுமை ஆதரவு விலை ₹2,275/குவிண்டால் ▲ (+₹150) • 🍚 நெல் ஆதரவு விலை ₹2,300/குவிண்டால் ▲ (+₹117) • 🌻 கடுகு ₹5,650/குவிண்டால் ▲ (+₹200) • 🚜 மண்டி கேட் 1 பணி நேரம்: 18 நிமிடங்கள் • ⛈️ தெளிவான வானிலை • 💰 1.77+ கோடி விவசாயிகளுக்கு நேரடி வங்கிப் பரிமாற்றம்",
    "kn": "🌾 ಗೋಧಿ ಬೆಂಬಲ ಬೆಲೆ ₹2,275/ಕ್ವಿಂಟಾಲ್ ▲ (+₹150) • 🍚 ಭತ್ತ ₹2,300/ಕ್ವಿಂಟಾಲ್ ▲ (+₹117) • 🌻 ಸಾಸಿವೆ ₹5,650/ಕ್ವಿಂಟಾಲ್ ▲ (+₹200) • 🚜 ಎಪಿಎಂಸಿ ಗೇಟ್ 1 ಸರದಿ ಸಮಯ: 18 ನಿಮಿಷ • ⛈️ ಹವಾಮಾನ ಸ್ವಚ್ಛ • 💰 1.77+ ಕೋಟಿ ರೈತರಿಗೆ ನೇರ ನಗದು ವರ್ಗಾವಣೆ"
  },
  "1.77+ Crore": {
    "hi": "1.77+ करोड़",
    "pa": "1.77+ ਕਰੋੜ",
    "mr": "1.77+ कोटी",
    "gu": "1.77+ કરોડ",
    "bn": "১.৭৭+ কোটি",
    "te": "1.77+ కోట్లు",
    "ta": "1.77+ கோடி",
    "kn": "1.77+ ಕೋಟಿ"
  },
  "Registered Farmers": {
    "hi": "पंजीकृत किसान",
    "pa": "ਰਜਿਸਟਰਡ ਕਿਸਾਨ",
    "mr": "नोंदणीकृत शेतकरी",
    "gu": "નોંધાયેલા ખેડૂતો",
    "bn": "নিবন্ধিত কৃষক",
    "te": "నమోదిత రైతులు",
    "ta": "பதிவுசெய்த விவசாயிகள்",
    "kn": "ನೋಂದಾಯಿತ ರೈತರು"
  },
  "1,361+ Mandis": {
    "hi": "1,361+ मंडियां",
    "pa": "1,361+ ਮੰਡੀਆਂ",
    "mr": "1,361+ मंडया",
    "gu": "1,361+ માર્કેટ યાર્ડ",
    "bn": "১,৩৬১+ মান্ডি",
    "te": "1,361+ మార్కెట్ యార్డులు",
    "ta": "1,361+ மண்டிகள்",
    "kn": "1,361+ ಮಾರುಕಟ್ಟೆಗಳು"
  },
  "Nationwide e-NAM": {
    "hi": "देशभर में ई-नाम",
    "pa": "ਦੇਸ਼ ਭਰ ਵਿੱਚ ਈ-ਨਾਮ",
    "mr": "देशभरात ई-नाम मंडया",
    "gu": "સમગ્ર દેશમાં ઈ-નામ",
    "bn": "দেশব্যাপী ই-নাম মান্ডি",
    "te": "దేశవ్యాప్తంగా ఈ-నామ్",
    "ta": "நாடு தழுவிய இ-நாம்",
    "kn": "ದೇಶಾದ್ಯಂತ ಇ-ನಾಮ್"
  },
  "96% Wait Cut": {
    "hi": "96% इंतज़ार खत्म",
    "pa": "96% ਉਡੀਕ ਘਟੀ",
    "mr": "96% प्रतीक्षा कमी",
    "gu": "96% રાહ જોવામાં ઘટાડો",
    "bn": "৯৬% অপেক্ষা হ্রাস",
    "te": "96% వేచి ఉండే సమయం తగ్గింపు",
    "ta": "96% காத்திருப்பு குறைவு",
    "kn": "96% ಕಾಯುವಿಕೆ ಕಡಿತ"
  },
  "18h → 45m Turnaround": {
    "hi": "18 घंटे → मात्र 45 मिनट",
    "pa": "18 ਘੰਟੇ → ਸਿਰਫ਼ 45 ਮਿੰਟ",
    "mr": "18 तास → फक्त 45 मिनिटे",
    "gu": "18 કલાક → માત્ર 45 મિનિટ",
    "bn": "১৮ ঘণ্টা → মাত্র ৪৫ মিনিট",
    "te": "18 గంటలు → కేవలం 45 నిమిషాలు",
    "ta": "18 மணிநேரம் → வெறும் 45 நிமிடம்",
    "kn": "18 ಗಂಟೆ → ಕೇವಲ 45 ನಿಮಿಷ"
  },
  "100% DBT": {
    "hi": "100% डीबीटी",
    "pa": "100% ਡੀਬੀਟੀ",
    "mr": "100% डीबीटी",
    "gu": "100% ડીબીટી",
    "bn": "১০০% ডিবিটি",
    "te": "100% డిబిటి",
    "ta": "100% நேரடி மானியம்",
    "kn": "100% ಡಿಬಿಟಿ"
  },
  "Direct Bank Payout": {
    "hi": "सीधे बैंक खाते में भुगतान",
    "pa": "ਸਿੱਧੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਭੁਗਤਾਨ",
    "mr": "थेट बँक खात्यात पैसे",
    "gu": "સીધા બેંક ખાતામાં ચૂકવણી",
    "bn": "সরাসরি ব্যাংক অ্যাকাউন্টে টাকা",
    "te": "నేరుగా బ్యాంక్ ఖాతాలోకి నగదు",
    "ta": "நேரடி வங்கி பரிமாற்றம்",
    "kn": "ನೇರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ"
  },
  "CHAOS CONSOLE": {
    "hi": "केओस कंसोल",
    "pa": "ਕੈਓਸ ਕੰਸੋਲ",
    "mr": "कॅओस कन्सोल",
    "gu": "કેઓસ કન્સોલ",
    "bn": "কেওস কনসোল",
    "te": "ఖోస్ కన్సోల్",
    "ta": "கேயாஸ் கன்சோல்",
    "kn": "ಕೇಯಾಸ್ ಕನ್ಸೋಲ್"
  },
  "Mandi Field Resilience & Stress Testing": {
    "hi": "जजों के लिए लाइव सिस्टम रेजिलिएंस टेस्ट",
    "pa": "ਸਿਸਟਮ ਰੀਜ਼ੀਲੀਅੰਸ ਟੈਸਟ",
    "mr": "लाईव्ह सिस्टम रेझिलियन्स चाचणी",
    "gu": "લાઈવ સિસ્ટમ કાર્યક્ષમતા ટેસ્ટ",
    "bn": "সিস্টেম স্থিতিস্থাপকতা পরীক্ষা",
    "te": "లైవ్ సిస్టమ్ పరీక్ష",
    "ta": "நேரலை கணினி தாங்கும் திறன் சோதனை",
    "kn": "ಲೈವ್ ಸಿಸ್ಟಮ್ ಪರೀಕ್ಷೆ"
  },
  "Demonstrating how KISAN-Q recovers automatically when physical mandi operations or network links fail": {
    "hi": "जांचें कि गेट खराबी या राज्य क्लाउड सर्वर डाउन होने पर किसान-Q कैसे तुरंत रिकवर करता है",
    "pa": "ਵੇਖੋ ਕਿ ਗੇਟ ਜਾਮ ਜਾਂ ਸਰਵਰ ਡਾਊਨ ਹੋਣ 'ਤੇ ਕਿਸਾਨ-Q ਕਿਵੇਂ ਤੁਰੰਤ ਕੰਮ ਜਾਰੀ ਰੱਖਦਾ ਹੈ",
    "mr": "गेट जाम किंवा राज्य क्लाउड सर्व्हर बंद झाल्यावर किसान-Q कसे सुरळीत चालते ते तपासा",
    "gu": "ગેટ બગડે કે સર્વર ડાઉન થાય ત્યારે પણ કિસાન-Q કેવી રીતે સતત કામ ચાલુ રાખે છે તે જુઓ",
    "bn": "গেট জ্যাম বা ক্লাউড সার্ভার বন্ধ হলেও কিষাণ-Q কীভাবে অবিরাম চলে তা দেখুন",
    "te": "గేట్ సమస్య లేదా సర్వర్ డౌన్ అయినా కిసాన్-Q ఎలా నిరంతరాయంగా పనిచేస్తుందో చూడండి",
    "ta": "கேட் நெரிசல் அல்லது சர்வர் செயலிழந்தாலும் கிசான்-Q எவ்வாறு தொடர்ந்து இயங்குகிறது என்பதைச் சோதிக்கவும்",
    "kn": "ಗೇಟ್ ಅಡಚಣೆ ಅಥವಾ ಸರ್ವರ್ ಸ್ಥಗಿತಗೊಂಡರೂ ಕಿಸಾನ್-Q ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ನೋಡಿ"
  },
  "Simulate 10-Wheeler Breakdown at Gate 1": {
    "hi": "गेट 1 पर 10-चक्का ट्रॉली ब्रेकडाउन सिमुलेट करें",
    "pa": "ਗੇਟ 1 'ਤੇ ਟਰਾਲੀ ਬ੍ਰੇਕਡਾਊਨ ਸਿਮੂਲੇਟ ਕਰੋ",
    "mr": "गेट 1 वर ट्रॉली बिघाड सिम्युलेट करा",
    "gu": "ગેટ 1 પર ટ્રેક્ટર બ્રેકડાઉન સિમ્યુલેટ કરો",
    "bn": "গেট ১-এ ট্রলি বিকল সিমুলেট করুন",
    "te": "గేట్ 1 వద్ద ట్రాక్టర్ బ్రేక్‌డౌన్ సిమ్యులేట్ చేయండి",
    "ta": "கேட் 1-ல் டிராக்டர் பழுதை உருவகப்படுத்துங்கள்",
    "kn": "ಗೇಟ್ 1 ರಲ್ಲಿ ಟ್ರಾಕ್ಟರ್ ಸ್ಥಗಿತವನ್ನು ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ"
  },
  "Simulate State Cloud Server Outage": {
    "hi": "राज्य क्लाउड सर्वर आउटेज सिमुलेट करें (लोकल मोड)",
    "pa": "ਕਲਾਊਡ ਸਰਵਰ ਆਊਟੇਜ ਸਿਮੂਲੇਟ ਕਰੋ (ਆਫਲਾਈਨ ਮੋਡ)",
    "mr": "क्लाउड सर्व्हर आउटेज सिम्युलेट करा (स्थानिक मोड)",
    "gu": "ક્લાઉડ આઉટેજ સિમ્યુલેટ કરો (ઓફલાઇન એજ મોડ)",
    "bn": "ক্লাউড সার্ভার বিভ্রাট সিমুলেট করুন (লোকাল মোড)",
    "te": "క్లౌడ్ సర్వర్ అంతరాయం సిమ్యులేట్ చేయండి (లోకల్ మోడ్)",
    "ta": "கிளவுட் சர்வர் முடக்கத்தை உருவகப்படுத்துங்கள் (உள்ளூர் முறை)",
    "kn": "ಕ್ಲೌಡ್ ಸರ್ವರ್ ಸ್ಥಗಿತವನ್ನು ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ (ಸ್ಥಳೀಯ ಮೋಡ್)"
  },
  "Quick Demo Presets": {
    "hi": "त्वरित डेमो प्रीसेट",
    "pa": "ਡੈਮੋ ਪ੍ਰੀਸੈੱਟ",
    "mr": "झटपट डेमो प्रीसेट",
    "gu": "ઝડપી ડેમો પ્રીસેટ્સ",
    "bn": "দ্রুত ডেমো প্রিসেট",
    "te": "త్వరిత డెమో ప్రీసెట్లు",
    "ta": "விரைவு மாதிரி விவரங்கள்",
    "kn": "ತ್ವರಿತ ಡೆಮೊ ಪ್ರಿಸೆಟ್‌ಗಳು"
  },
  "Click to instantly populate realistic farmer data:": {
    "hi": "क्लिक करके तुरंत किसान का डेटा भरें:",
    "pa": "ਕਲਿੱਕ ਕਰਕੇ ਤੁਰੰਤ ਕਿਸਾਨ ਡਾਟਾ ਭਰੋ:",
    "mr": "क्लिक करून थेट शेतकऱ्यांची माहिती भरा:",
    "gu": "એક ક્લિકથી ખેડૂતની વિગતો ભરો:",
    "bn": "এক ক্লিকে কৃষকের তথ্য পূরণ করুন:",
    "te": "ఒకే క్లిక్‌తో రైతుల వివరాలను నింపండి:",
    "ta": "ஒரே கிளிக்கில் விவசாயி விவரங்களை நிரப்புக:",
    "kn": "ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ರೈತರ ಮಾಹಿತಿ ಭರ್ತಿ ಮಾಡಿ:"
  },
  "Marginal Farmer (<1 ha Wheat)": {
    "hi": "सीमांत किसान (<1 हेक्टेयर गेहूं)",
    "pa": "ਛੋਟਾ ਕਿਸਾਨ (<1 ਹੈਕਟੇਅਰ ਕਣਕ)",
    "mr": "अल्पभूधारक शेतकरी (<1 हे. गहू)",
    "gu": "નાનો ખેડૂત (<1 હેક્ટર ઘઉં)",
    "bn": "প্রান্তিক কৃষক (<১ হেক্টর গম)",
    "te": "చిన్న రైతు (<1 హెక్టార్ గోధుమలు)",
    "ta": "சிறு விவசாயி (<1 ஹெக்டேர்)",
    "kn": "ಸಣ್ಣ ರೈತ (<1 ಹೆಕ್ಟೇರ್ ಗೋಧಿ)"
  },
  "Small Farmer (1.6 ha Mustard)": {
    "hi": "छोटा किसान (1.6 हेक्टेयर सरसों)",
    "pa": "ਦਰਮਿਆਨਾ ਕਿਸਾਨ (1.6 ਹੈਕਟੇਅਰ ਸਰ੍ਹੋਂ)",
    "mr": "लहान शेतकरी (1.6 हे. मोहरी)",
    "gu": "મધ્યમ ખેડૂત (1.6 હેક્ટર રાયડો)",
    "bn": "ক্ষুদ্র কৃষক (১.৬ হেক্টর সরিষা)",
    "te": "మధ్య తరహా రైతు (1.6 హెక్టార్లు)",
    "ta": "குறு விவசாயி (1.6 ஹெக்டேர்)",
    "kn": "ಮಧ್ಯಮ ರೈತ (1.6 ಹೆಕ್ಟೇರ್)"
  },
  "Commercial Trader (5.5 ha)": {
    "hi": "बड़ा किसान (5.5 हेक्टेयर)",
    "pa": "ਵੱਡਾ ਕਿਸਾਨ (5.5 ਹੈਕਟੇਅਰ)",
    "mr": "मोठा शेतकरी (5.5 हे.)",
    "gu": "મોટો ખેડૂત (5.5 હેક્ટર)",
    "bn": "বড় কৃষক (৫.৫ হেক্টর)",
    "te": "పెద్ద రైతు (5.5 హెక్టార్లు)",
    "ta": "பெரிய விவசாயி (5.5 ஹெக்டேர்)",
    "kn": "ದೊಡ್ಡ ರೈತ (5.5 ಹೆಕ್ಟೇರ್)"
  },
  "Book Your Grain Procurement Slot": {
    "hi": "अपनी फसल तुलाई का समय (स्लॉट) बुक करें",
    "pa": "ਆਪਣੀ ਫਸਲ ਤੁਲਾਈ ਦਾ ਸਮਾਂ (ਸਲਾਟ) ਬੁੱਕ ਕਰੋ",
    "mr": "तुमचा धान्य वजन स्लॉट बुक करा",
    "gu": "તમારો પાક તોલવાનો સ્લોટ બુક કરો",
    "bn": "শস্য ওজনের জন্য স্লট বুক করুন",
    "te": "మీ ధాన్యం తూకం స్లాట్‌ను బుక్ చేసుకోండి",
    "ta": "தானிய எடை போடும் நேரத்தை முன்பதிவு செய்க",
    "kn": "ಧಾನ್ಯ ತೂಕದ ಸ್ಲಾಟ್ ಕಾಯ್ದಿರಿಸಿ"
  },
  "Staggered 1-hour slots matched to weighbridge throughput": {
    "hi": "धर्मकांटा क्षमता के अनुसार 1-1 घंटे के व्यवस्थित स्लॉट",
    "pa": "ਕੰਡੇ ਦੀ ਸਮਰੱਥਾ ਅਨੁਸਾਰ 1-1 ਘੰਟੇ ਦੇ ਸਲਾਟ",
    "mr": "काट्याच्या क्षमतेनुसार 1-1 तासाचे नियोजित स्लॉट",
    "gu": "કાંટાની ક્ષમતા અનુસાર 1-1 કલાકના સુવ્યવસ્થિત સ્લોટ",
    "bn": "ওজন সেতুর ক্ষমতা অনুসারে ১ ঘণ্টার সুবিন্যস্ত স্লট",
    "te": "కాటా సామర్థ్యం ఆధారంగా 1 గంట క్రమబద్ధీకరించిన స్లాట్లు",
    "ta": "எடை மேடை திறனுக்கு ஏற்ப 1 மணி நேர ஒழுங்கமைக்கப்பட்ட ஸ்லாட்டுகள்",
    "kn": "ತೂಕದ ಯಂತ್ರ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ 1 ಗಂಟೆಯ ವ್ಯವಸ್ಥಿತ ಸ್ಲಾಟ್‌ಗಳು"
  },
  "Farmer Full Name": {
    "hi": "किसान का पूरा नाम",
    "pa": "ਕਿਸਾਨ ਦਾ ਪੂਰਾ ਨਾਮ",
    "mr": "शेतकऱ्याचे पूर्ण नाव",
    "gu": "ખેડૂતનું પૂરું નામ",
    "bn": "কৃষকের পুরো নাম",
    "te": "రైతు పూర్తి పేరు",
    "ta": "விவசாயியின் முழுப் பெயர்",
    "kn": "ರೈತರ ಪೂರ್ಣ ಹೆಸರು"
  },
  "Mobile Number": {
    "hi": "मोबाइल नंबर",
    "pa": "ਮੋਬਾਈਲ ਨੰਬਰ",
    "mr": "मोबाईल नंबर",
    "gu": "મોબાઈલ નંબર",
    "bn": "মোবাইল নম্বর",
    "te": "మొబైల్ నంబర్",
    "ta": "கைபேசி எண்",
    "kn": "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
  },
  "Landholding Size (Hectares)": {
    "hi": "जमीन का रकबा (हेक्टेयर)",
    "pa": "ਜ਼ਮੀਨ ਦਾ ਰਕਬਾ (ਹੈਕਟੇਅਰ)",
    "mr": "जमीन क्षेत्र (हेक्टर)",
    "gu": "જમીનનું માપ (હેક્ટર)",
    "bn": "জমির পরিমাণ (হেক্টর)",
    "te": "భూమి విస్తీర్ణం (హెక్టార్లు)",
    "ta": "நிலப் பரப்பளவு (ஹெக்டேர்)",
    "kn": "ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ (ಹೆಕ್ಟೇರ್)"
  },
  "Crop Type (MSP Guaranteed)": {
    "hi": "फसल का प्रकार (एमएसपी गारंटी)",
    "pa": "ਫਸਲ ਦੀ ਕਿਸਮ (MSP ਗਾਰੰਟੀ)",
    "mr": "पीक प्रकार (हमीभाव हमी)",
    "gu": "પાકનો પ્રકાર (ટેકાના ભાવની ગેરંટી)",
    "bn": "ফসলের ধরন (MSP গ্যারান্টি)",
    "te": "పంట రకం (కనీస మద్దతు ధర భరోసా)",
    "ta": "பயிர் வகை (ஆதரவு விலை உத்தரவாதம்)",
    "kn": "ಬೆಳೆ ಪ್ರಕಾರ (ಬೆಂಬಲ ಬೆಲೆ ಭರವಸೆ)"
  },
  "Vehicle Number": {
    "hi": "वाहन / ट्रैक्टर नंबर",
    "pa": "ਵਾਹਨ / ਟਰੈਕਟਰ ਨੰਬਰ",
    "mr": "वाहन / ट्रॅक्टर नंबर",
    "gu": "વાહન / ટ્રેક્ટર નંબર",
    "bn": "গাড়ির নম্বর",
    "te": "వాహనం / ట్రాక్టర్ నంబర్",
    "ta": "வாகனம் / டிராக்டர் எண்",
    "kn": "ವಾಹನ / ಟ್ರಾಕ್ಟರ್ ಸಂಖ್ಯೆ"
  },
  "Vehicle Type": {
    "hi": "वाहन का प्रकार",
    "pa": "ਵਾਹਨ ਦੀ ਕਿਸਮ",
    "mr": "वाहनाचा प्रकार",
    "gu": "વાહનનો પ્રકાર",
    "bn": "যানবাহনের ধরন",
    "te": "వాహనం రకం",
    "ta": "வாகன வகை",
    "kn": "ವಾಹನದ ಪ್ರಕಾರ"
  },
  "Estimated Load (Metric Tonnes)": {
    "hi": "अनुमानित वजन (मीट्रिक टन)",
    "pa": "ਅਨੁਮਾਨਿਤ ਵਜ਼ਨ (ਮੀਟ੍ਰਿਕ ਟਨ)",
    "mr": "अंदाजे वजन (मेट्रिक टन)",
    "gu": "અંદાજિત વજન (મેટ્રિક ટન)",
    "bn": "আনুমানিক ওজন (মেট্রিক টন)",
    "te": "అంచనా బరువు (మెట్రిక్ టన్నులు)",
    "ta": "மதிப்பிடப்பட்ட எடை (மெட்ரிக் டன்)",
    "kn": "ಅಂದಾಜು ತೂಕ (ಮೆಟ್ರಿಕ್ ಟನ್)"
  },
  "Select 1-Hour Time Window": {
    "hi": "1 घंटे का समय विंडो चुनें",
    "pa": "1 ਘੰਟੇ ਦਾ ਸਮਾਂ ਚੁਣੋ",
    "mr": "1 तासाची वेळ निवडा",
    "gu": "1 કલાકની સમય વિન્ડો પસંદ કરો",
    "bn": "১ ঘণ্টার সময় বেছে নিন",
    "te": "1 గంట సమయం ఎంచుకోండి",
    "ta": "1 மணி நேரத்தை தேர்வு செய்க",
    "kn": "1 ಗಂಟೆಯ ಸಮಯ ಆಯ್ಕೆಮಾಡಿ"
  },
  "Slots are dynamically regulated to prevent highway tractor queues.": {
    "hi": "हाईवे पर जाम रोकने के लिए स्लॉट स्वचालित विनियमित होते हैं।",
    "pa": "ਹਾਈਵੇਅ 'ਤੇ ਜਾਮ ਰੋਕਣ ਲਈ ਸਲਾਟ ਆਟੋਮੈਟਿਕ ਨਿਯੰਤਰਿਤ ਹੁੰਦੇ ਹਨ।",
    "mr": "महामार्गावर ट्रॅक्टरच्या रांगा रोखण्यासाठी स्लॉट स्वयंचलितपणे नियंत्रित केले जातात.",
    "gu": "હાઇવે પર ટ્રેક્ટરની કતારો રોકવા માટે સ્લોટ્સ આપોઆપ નિયંત્રિત થાય છે.",
    "bn": "হাইওয়েতে ট্র্যাক্টরের লাইন রোধ করতে স্লটগুলি স্বয়ংক্রিয়ভাবে নিয়ন্ত্রিত হয়।",
    "te": "హైవే ట్రాక్టర్ క్యూలను నివారించడానికి స్లాట్‌లు డైనమిక్‌గా నియంత్రించబడతాయి.",
    "ta": "நெடுஞ்சாலை டிராக்டர் வரிசைகளைத் தடுக்க ஸ்லாட்டுகள் தானாகவே கட்டுப்படுத்தப்படுகின்றன.",
    "kn": "ಹೆದ್ದಾರಿ ಟ್ರಾಕ್ಟರ್ ಸರತಿ ಸಾಲುಗಳನ್ನು ತಡೆಯಲು ಸ್ಲಾಟ್‌ಗಳನ್ನು ಕ್ರಿಯಾತ್ಮಕವಾಗಿ ನಿಯಂತ್ರಿಸಲಾಗುತ್ತದೆ."
  },
  "Generate Digital Token & Gate Pass": {
    "hi": "डिजिटल टोकन व गेट पास जारी करें",
    "pa": "ਡਿਜੀਟਲ ਟੋਕਨ ਅਤੇ ਗੇਟ ਪਾਸ ਜਾਰੀ ਕਰੋ",
    "mr": "डिजिटल टोकन आणि गेट पास तयार करा",
    "gu": "ડિજિટલ ટોકન અને ગેટ પાસ જનરેટ કરો",
    "bn": "ডিজিটাল টোকেন ও গেট পাস তৈরি করুন",
    "te": "డిజిటల్ టోకెన్ & గేట్ పాస్ పొందండి",
    "ta": "டிஜிட்டல் டோக்கன் & கேட் பாஸ் பெறுக",
    "kn": "ಡಿಜಿಟಲ್ ಟೋಕನ್ ಮತ್ತು ಗೇಟ್ ಪಾಸ್ ಪಡೆಯಿರಿ"
  },
  "Fair-Share Quota: Marginal Farmer (<2 ha) Priority Enabled": {
    "hi": "फेयर-शेयर कोटा: छोटे व सीमांत किसानों (<2 हे.) को प्राथमिकता सक्रिय",
    "pa": "ਫੇਅਰ-ਸ਼ੇਅਰ ਕੋਟਾ: ਛੋਟੇ ਕਿਸਾਨਾਂ (<2 ਹੈ.) ਨੂੰ ਤਰਜੀਹ ਸਰਗਰਮ",
    "mr": "फेअर-शेअर कोटा: अल्पभूधारक शेतकऱ्यांना (<2 हे.) प्राधान्य सक्रिय",
    "gu": "ફેર-શેર ક્વોટા: નાના ખેડૂતો (<2 હે.) ને પ્રાથમિકતા સક્રિય",
    "bn": "ফেয়ার-শেয়ার কোটা: প্রান্তিক কৃষকদের (<২ হে.) অগ্রাধিকার সক্রিয়",
    "te": "ఫెయిర్-షేర్ కోటా: చిన్న రైతులకు (<2 హెక్టార్లు) ప్రాధాన్యత సక్రియం",
    "ta": "சிறு விவசாயிகளுக்கு (<2 ஹெக்.) முன்னுரிமை இயக்கப்பட்டது",
    "kn": "ಸಣ್ಣ ರೈತರಿಗೆ (<2 ಹೆಕ್ಟೇರ್) ಆದ್ಯತೆಯ ಕೋಟಾ ಸಕ್ರಿಯ"
  },
  "Lookup Existing Token": {
    "hi": "पुराना टोकन खोजें",
    "pa": "ਪੁਰਾਣਾ ਟੋਕਨ ਲੱਭੋ",
    "mr": "जुने टोकन शोधा",
    "gu": "જૂનો ટોકન શોધો",
    "bn": "পুরোনো টোকেন খুঁজুন",
    "te": "పాత టోకెన్ వెతకండి",
    "ta": "பழைய டோக்கனைத் தேடுக",
    "kn": "ಹಳೆಯ ಟೋಕನ್ ಹುಡುಕಿ"
  },
  "Search": {
    "hi": "खोजें",
    "pa": "ਖੋਜੋ",
    "mr": "शोधा",
    "gu": "શોધો",
    "bn": "অনুসন্ধান",
    "te": "వెతకండి",
    "ta": "தேடுக",
    "kn": "ಹುಡುಕಿ"
  },
  "Enter Token # (e.g. 42) or Phone": {
    "hi": "टोकन नंबर (उदा. 42) या फोन नंबर दर्ज करें",
    "pa": "ਟੋਕਨ ਨੰਬਰ (ਜਿਵੇਂ 42) ਜਾਂ ਫੋਨ ਦਰਜ ਕਰੋ",
    "mr": "टोकन नंबर किंवा मोबाईल नंबर टाका",
    "gu": "ટોકન નંબર અથવા મોબાઈલ દાખલ કરો",
    "bn": "টোকেন নম্বর বা মোবাইল নম্বর লিখুন",
    "te": "టోకెన్ నంబర్ లేదా మొబైల్ నంబర్ నమోదు చేయండి",
    "ta": "டோக்கன் எண் அல்லது மொபைல் எண்ணை உள்ளிடவும்",
    "kn": "ಟೋಕನ್ ಸಂಖ್ಯೆ ಅಥವಾ ಮೊಬೈಲ್ ನಮೂದಿಸಿ"
  },
  "Krishi Mandi Gate Pass": {
    "hi": "कृषि उपज मंडी डिजिटल गेट पास",
    "pa": "ਮੰਡੀ ਡਿਜੀਟਲ ਗੇਟ ਪਾਸ",
    "mr": "कृषी उत्पन्न बाजार समिती डिजिटल गेट पास",
    "gu": "એપીએમસી માર્કેટ યાર્ડ ગેટ પાસ",
    "bn": "কৃষি মান্ডি ডিজিটাল গেট পাস",
    "te": "వ్యవసాయ మార్కెట్ యార్డ్ డిజిటల్ గేట్ పాస్",
    "ta": "வேளாண் ஒழுங்குமுறை விற்பனைக்கூட கேட் பாஸ்",
    "kn": "ಎಪಿಎಂಸಿ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ಗೇಟ್ ಪಾಸ್"
  },
  "Farmer:": {
    "hi": "किसान:",
    "pa": "ਕਿਸਾਨ:",
    "mr": "शेतकरी:",
    "gu": "ખેડૂત:",
    "bn": "কৃষক:",
    "te": "రైతు:",
    "ta": "விவசாயி:",
    "kn": "ರೈತ:"
  },
  "Vehicle:": {
    "hi": "वाहन नंबर:",
    "pa": "ਵਾਹਨ ਨੰਬਰ:",
    "mr": "वाहन नंबर:",
    "gu": "વાહન નંબર:",
    "bn": "যানবাহন:",
    "te": "వాహనం:",
    "ta": "வாகனம்:",
    "kn": "ವಾಹನ:"
  },
  "Crop:": {
    "hi": "फसल:",
    "pa": "ਫਸਲ:",
    "mr": "पीक:",
    "gu": "પાક:",
    "bn": "ফসল:",
    "te": "పంట:",
    "ta": "பயிர்:",
    "kn": "ಬೆಳೆ:"
  },
  "Assigned Gate:": {
    "hi": "आवंटित गेट:",
    "pa": "ਅਲਾਟ ਕੀਤਾ ਗੇਟ:",
    "mr": "दिलेला गेट:",
    "gu": "ફાળવેલ ગેટ:",
    "bn": "বরাদ্দ গেট:",
    "te": "కేటాయించిన గేట్:",
    "ta": "ஒதுக்கப்பட்ட கேட்:",
    "kn": "ನಿಗದಿಪಡಿಸಿದ ಗೇಟ್:"
  },
  "Arrival Window:": {
    "hi": "आगमन समय:",
    "pa": "ਪਹੁੰਚਣ ਦਾ ਸਮਾਂ:",
    "mr": "आगमनाची वेळ:",
    "gu": "પહોંચવાનો સમય:",
    "bn": "আগমনের সময়:",
    "te": "రావలసిన సమయం:",
    "ta": "வரவேண்டிய நேரம்:",
    "kn": "ಆಗಮನದ ಸಮಯ:"
  },
  "Assigned Slot:": {
    "hi": "आवंटित स्लॉट:",
    "pa": "ਅਲਾਟ ਕੀਤਾ ਸਲਾਟ:",
    "mr": "दिलेला स्लॉट:",
    "gu": "ફાળવેલ સ્લોટ:",
    "bn": "বরাদ্দ স্লট:",
    "te": "కేటాయించిన స్లాట్:",
    "ta": "ஒதுக்கப்பட்ட ஸ்லாட்:",
    "kn": "ನಿಗದಿಪಡಿಸಿದ ಸ್ಲಾಟ್:"
  },
  "Please arrive within this 60-min window for instant direct weighment.": {
    "hi": "कृपया दिए गए 60 मिनट के अंतराल में पहुंचें ताकि तुरंत तुलाई हो सके।",
    "pa": "ਕਿਰਪਾ ਕਰਕੇ ਦਿੱਤੇ 60 ਮਿੰਟ ਵਿੱਚ ਪਹੁੰਚੋ ਤਾਂ ਜੋ ਤੁਰੰਤ ਤੁਲਾਈ ਹੋ ਸਕੇ।",
    "mr": "थेट वजनासाठी कृपया दिलेल्या 60 मिनिटांतच उपस्थित राहा.",
    "gu": "સીધા વજન માટે કૃપા કરીને આપેલ 60 મિનિટમાં જ પહોંચો.",
    "bn": "সরাসরি ওজনের জন্য দয়া করে নির্ধারিত ৬০ মিনিটের মধ্যে উপস্থিত হন।",
    "te": "నేరుగా తూకం వేయడానికి దయచేసి కేటాయించిన 60 నిమిషాల్లోనే రండి.",
    "ta": "நேரடி எடைக்கு ஒதுக்கப்பட்ட 60 நிமிடங்களுக்குள் வரவும்.",
    "kn": "ನೇರ ತೂಕಕ್ಕಾಗಿ ದಯವಿಟ್ಟು ನಿಗದಿಪಡಿಸಿದ 60 ನಿಮಿಷಗಳಲ್ಲಿ ಬನ್ನಿ."
  },
  "Live Est. Turnaround:": {
    "hi": "अनुमानित कुल समय:",
    "pa": "ਅਨੁਮਾਨਿਤ ਸਮਾਂ:",
    "mr": "अंदाजे वेळ:",
    "gu": "અંદાજિત સમય:",
    "bn": "আনুমানিক সময়:",
    "te": "అంచనా సమయం:",
    "ta": "மதிப்பிடப்பட்ட நேரம்:",
    "kn": "ಅಂದಾಜು ಸಮಯ:"
  },
  "Roadside wait slashed by 96%": {
    "hi": "सड़क पर इंतजार 96% घटा",
    "pa": "ਸੜਕ 'ਤੇ ਉਡੀਕ 96% ਘਟੀ",
    "mr": "रस्त्यावरील प्रतीक्षा 96% कमी",
    "gu": "રસ્તા પર રાહ જોવામાં 96% ઘટાડો",
    "bn": "রাস্তায় অপেক্ষা ৯৬% কমেছে",
    "te": "రోడ్డుపై వేచి ఉండే సమయం 96% తగ్గింది",
    "ta": "சாலையில் காத்திருக்கும் நேரம் 96% குறைந்தது",
    "kn": "ರಸ್ತೆಯಲ್ಲಿ ಕಾಯುವಿಕೆ 96% ಇಳಿಕೆ"
  },
  "Turnaround Time Meter": {
    "hi": "मंडी टर्नअराउंड समय मीटर",
    "pa": "ਟਰਨਅਰਾਊਂਡ ਟਾਈਮ ਮੀਟਰ",
    "mr": "टर्नअराउंड टाईम मीटर",
    "gu": "ટર્નઅરાઉન્ડ સમય મીટર",
    "bn": "টার্নঅ্যারাউন্ড সময় মিটার",
    "te": "టర్న్‌అరౌండ్ సమయ మీటర్",
    "ta": "மொத்த பணி நேர மீட்டர்",
    "kn": "ಟರ್ನ್‌ಅರೌಂಡ್ ಟೈಮ್ ಮೀಟರ್"
  },
  "Expected time from physical gate arrival to gross/tare weighment and direct payment receipt.": {
    "hi": "गेट आगमन से लेकर तुलाई और भुगतान रसीद मिलने का समय।",
    "pa": "ਗੇਟ ਪਹੁੰਚਣ ਤੋਂ ਲੈ ਕੇ ਤੁਲਾਈ ਅਤੇ ਭੁਗਤਾਨ ਰਸੀਦ ਤੱਕ ਦਾ ਸਮਾਂ।",
    "mr": "गेटवर पोहोचल्यापासून वजन आणि पावती मिळेपर्यंतचा वेळ.",
    "gu": "ગેટ પર પ્રવેશથી લઈને વજન અને પાવતી મળવા સુધીનો સમય.",
    "bn": "গেটে পৌঁছানো থেকে ওজন ও রসিদ পাওয়া পর্যন্ত সময়।",
    "te": "గేట్ ప్రవేశం నుండి తూకం మరియు రసీదు అందే వరకు సమయం.",
    "ta": "கேட் வருகையிலிருந்து எடை போட்டு ரசீது பெறும் வரை ஆகும் நேரம்.",
    "kn": "ಗೇಟ್ ಪ್ರವೇಶದಿಂದ ತೂಕ ಮತ್ತು ರಸೀದಿ ಸಿಗುವವರೆಗೆ ತಗಲುವ ಸಮಯ."
  },
  "Print / Save Pass": {
    "hi": "गेट पास प्रिंट / सेव करें",
    "pa": "ਪਾਸ ਪ੍ਰਿੰਟ / ਸੇਵ ਕਰੋ",
    "mr": "गेट पास प्रिंट / सेव्ह करा",
    "gu": "પાસ પ્રિન્ટ / સેવ કરો",
    "bn": "গেট পাস প্রিন্ট / সেভ করুন",
    "te": "పాస్ ప్రింట్ / సేవ్ చేయండి",
    "ta": "கேட் பாஸ் அச்சிடுக / சேமிக்க",
    "kn": "ಪಾಸ್ ಪ್ರಿಂಟ್ / ಸೇವ್ ಮಾಡಿ"
  },
  "Farmer Portal Access (e-NAM / PM-KISAN)": {
    "hi": "किसान पोर्टल लॉगिन (e-NAM / PM-KISAN)",
    "pa": "ਕਿਸਾਨ ਪੋਰਟਲ ਲੌਗਇਨ (e-NAM / PM-KISAN)",
    "mr": "शेतकरी पोर्टल लॉगिन (e-NAM / PM-KISAN)",
    "gu": "ખેડૂત પોર્ટલ સાઇન ઇન (e-NAM / PM-KISAN)",
    "bn": "কৃষক পোর্টাল লগইন (e-NAM / PM-KISAN)",
    "te": "రైతు పోర్టల్ లాగిన్ (e-NAM / PM-KISAN)",
    "ta": "விவசாயி தளம் உள்நுழைவு (e-NAM / PM-KISAN)",
    "kn": "ರೈತರ ಪೋರ್ಟಲ್ ಲಾಗಿನ್ (e-NAM / PM-KISAN)"
  },
  "New Farmer Registration": {
    "hi": "नया किसान पंजीकरण",
    "pa": "ਨਵਾਂ ਕਿਸਾਨ ਰਜਿਸਟ੍ਰੇਸ਼ਨ",
    "mr": "नवीन शेतकरी नोंदणी",
    "gu": "નવા ખેડૂતની નોંધણી",
    "bn": "নতুন কৃষক নিবন্ধন",
    "te": "కొత్త రైతు నమోదు",
    "ta": "புதிய விவசாயி பதிவு",
    "kn": "ಹೊಸ ರೈತರ ನೋಂದಣಿ"
  },
  "Registered Mobile Number": {
    "hi": "पंजीकृत मोबाइल नंबर",
    "pa": "ਰਜਿਸਟਰਡ ਮੋਬਾਈਲ ਨੰਬਰ",
    "mr": "नोंदणीकृत मोबाईल नंबर",
    "gu": "નોંધાયેલ મોબાઈલ નંબર",
    "bn": "নিবন্ধিত মোবাইল নম্বর",
    "te": "నమోదిత మొబైల్ నంబర్",
    "ta": "பதிவுசெய்த கைபேசி எண்",
    "kn": "ನೋಂದಾಯಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
  },
  "4-Digit OTP": {
    "hi": "4-अंकीय ओटीपी (OTP)",
    "pa": "4-ਅੰਕਾਂ ਦਾ ਓਟੀਪੀ (OTP)",
    "mr": "4-अंकी ओटीपी (OTP)",
    "gu": "4-અંકનો ઓટીપી (OTP)",
    "bn": "৪-সংখ্যার ওটিপি (OTP)",
    "te": "4-అంకెల ఓటీపీ (OTP)",
    "ta": "4-இலக்க OTP",
    "kn": "4-ಅಂಕಿಯ ಒಟಿಪಿ (OTP)"
  },
  "Send OTP (Demo)": {
    "hi": "ओटीपी भेजें (डेमो)",
    "pa": "ਓਟੀਪੀ ਭੇਜੋ (ਡੈਮੋ)",
    "mr": "ओटीपी पाठवा (डेमो)",
    "gu": "ઓટીપી મોકલો (ડેમો)",
    "bn": "ওটিপি পাঠান (ডেমো)",
    "te": "ఓటీపీ పంపండి (డెమో)",
    "ta": "OTP அனுப்புக (டெமோ)",
    "kn": "ಒಟಿಪಿ ಕಳುಹಿಸಿ (ಡೆಮೊ)"
  },
  "Verify & Sign In": {
    "hi": "सत्यापित करें और लॉग इन करें",
    "pa": "ਤਸਦੀਕ ਕਰੋ ਅਤੇ ਲੌਗ ਇਨ ਕਰੋ",
    "mr": "सत्यापित करा आणि लॉगिन करा",
    "gu": "ચકાસો અને સાઇન ઇન કરો",
    "bn": "যাচাই ও সাইন ইন করুন",
    "te": "ధృవీకరించి లాగిన్ అవ్వండి",
    "ta": "சரிபார்த்து உள்நுழைக",
    "kn": "ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಲಾಗಿನ್ ಮಾಡಿ"
  },
  "Aadhaar / PM-KISAN ID": {
    "hi": "आधार / पीएम-किसान आईडी",
    "pa": "ਆਧਾਰ / ਪੀਐਮ-ਕਿਸਾਨ ਆਈਡੀ",
    "mr": "आधार / पीएम-किसान आयडी",
    "gu": "આધાર / પીએમ-કિસાન આઈડી",
    "bn": "আধার / পিএম-কিষাণ আইডি",
    "te": "ఆధార్ / పిఎం-కిసాన్ ఐడీ",
    "ta": "ஆதார் / PM-KISAN எண்",
    "kn": "ಆಧಾರ್ / ಪಿಎಂ-ಕಿಸಾನ್ ಐಡಿ"
  },
  "Primary Crop to Sell": {
    "hi": "बेची जाने वाली प्रमुख फसल",
    "pa": "ਵੇਚਣ ਵਾਲੀ ਮੁੱਖ ਫਸਲ",
    "mr": "विक्रीचे मुख्य पीक",
    "gu": "વેચવા માટેનો મુખ્ય પાક",
    "bn": "বিক্রির প্রধান ফসল",
    "te": "అమ్మదలచిన ప్రధాన పంట",
    "ta": "விற்பனை செய்யும் முதன்மைப் பயிர்",
    "kn": "ಮಾರಾಟದ ಮುಖ್ಯ ಬೆಳೆ"
  },
  "Vehicle Registration No": {
    "hi": "वाहन / ट्रैक्टर नंबर",
    "pa": "ਵਾਹਨ / ਟਰੈਕਟਰ ਨੰਬਰ",
    "mr": "वाहन / ट्रॅक्टर नंबर",
    "gu": "વાહન / ટ્રેક્ટર નંબર",
    "bn": "গাড়ির নম্বর",
    "te": "వాహనం నంబర్",
    "ta": "வாகன எண்",
    "kn": "ವಾಹನದ ಸಂಖ್ಯೆ"
  },
  "DBT Linked Bank / IFSC": {
    "hi": "डीबीटी बैंक खाता / IFSC कोड",
    "pa": "ਡੀਬੀਟੀ ਬੈਂਕ ਖਾਤਾ / IFSC",
    "mr": "डीबीटी बँक खाते / IFSC",
    "gu": "ડીબીટી બેંક ખાતું / IFSC",
    "bn": "ডিবিটি ব্যাংক অ্যাকাউন্ট / IFSC",
    "te": "డిబిటి బ్యాంక్ ఖాతా / IFSC",
    "ta": "வங்கி கணக்கு எண் / IFSC",
    "kn": "ಡಿಬಿಟಿ ಬ್ಯಾಂಕ್ ಖಾತೆ / IFSC"
  },
  "Register & Auto-Fill Booking Form": {
    "hi": "पंजीकृत करें व फॉर्म भरें",
    "pa": "ਰਜਿਸਟਰ ਕਰੋ ਅਤੇ ਫਾਰਮ ਭਰੋ",
    "mr": "नोंदणी करा आणि फॉर्म भरा",
    "gu": "નોંધણી કરો અને ફોર્મ ભરો",
    "bn": "নিবন্ধন করুন ও ফর্ম পূরণ করুন",
    "te": "నమోదు చేసి ఫారమ్ నింపండి",
    "ta": "பதிவு செய்து படிவத்தை நிரப்புக",
    "kn": "ನೋಂದಾಯಿಸಿ ಮತ್ತು ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ"
  },
  "Zero-Smartphone Access: Feature Phone IVR Simulator": {
    "hi": "बिना स्मार्टफोन सुविधा: सामान्य कीपैड फोन आईवीआर (IVR) सिम्युलेटर",
    "pa": "ਬਿਨਾਂ ਸਮਾਰਟਫੋਨ ਸੁਵਿਧਾ: ਸਾਧਾਰਨ ਕੀਪੈਡ ਫੋਨ ਆਈਵੀਆਰ (IVR)",
    "mr": "स्मार्टफोन नसलेल्या शेतकऱ्यांसाठी: साधा कीपॅड फोन IVR सिम्युलेटर",
    "gu": "સ્માર્ટફોન વગરની સુવિધા: સામાન્ય કીપેડ ફોન IVR સિમ્યુલેટર",
    "bn": "স্মার্টফোন ছাড়া সুবিধা: সাধারণ কিপ্যাড ফোন IVR সিমুলেটর",
    "te": "స్మార్ట్‌ఫోన్ లేని రైతుల కోసం: సాధారణ కీప్యాడ్ ఫోన్ IVR సిమ్యులేటర్",
    "ta": "ஸ்மார்ட்போன் தேவையில்லை: சாதாரண விசைப்பலகை போன் IVR முறை",
    "kn": "ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಇಲ್ಲದ ರೈತರಿಗೆ: ಸರಳ ಕೀಪ್ಯಾಡ್ ಫೋನ್ IVR ವ್ಯವಸ್ಥೆ"
  },
  "Works on basic ₹800 keypad phones without internet or Android/iOS": {
    "hi": "₹800 वाले साधारण कीपैड फोन पर बिना इंटरनेट और बिना टचस्क्रीन काम करता है",
    "pa": "ਸਸਤੇ ₹800 ਵਾਲੇ ਕੀਪੈਡ ਫੋਨ 'ਤੇ ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਕੰਮ ਕਰਦਾ ਹੈ",
    "mr": "साध्या ₹800 च्या कीपॅड फोनवर इंटरनेटशिवाय काम करते",
    "gu": "સામાન્ય ₹800 ના કીપેડ ફોન પર ઈન્ટરનેટ વગર કામ કરે છે",
    "bn": "কমদামি ₹৮০০ টাকার কিপ্যাড ফোনে ইন্টারনেট ছাড়াই কাজ করে",
    "te": "₹800 సాధారణ కీప్యాడ్ ఫోన్‌పై ఇంటర్నెట్ లేకుండా పనిచేస్తుంది",
    "ta": "விலை குறைந்த ₹800 விசைப்பலகை போனில் இணையம் இல்லாமலே இயங்கும்",
    "kn": "ಸಾಮಾನ್ಯ ₹800 ಕೀಪ್ಯಾಡ್ ಫೋನ್‌ನಲ್ಲಿ ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ"
  },
  "Simulate Farmer Dialect / Voice:": {
    "hi": "किसान बोली / भाषा चुनें:",
    "pa": "ਕਿਸਾਨ ਬੋਲੀ / ਆਵਾਜ਼ ਚੁਣੋ:",
    "mr": "शेतकरी भाषा / बोली निवडा:",
    "gu": "ખેડૂત બોલી / અવાજ પસંદ કરો:",
    "bn": "কৃষক ভাষা / স্বর নির্বাচন:",
    "te": "రైతు యాస / భాషను ఎంచుకోండి:",
    "ta": "உள்ளூர் மொழி / குரலைத் தேர்வு செய்க:",
    "kn": "ಸ್ಥಳೀಯ ಭಾಷೆ / ಧ್ವನಿ ಆಯ್ಕೆಮಾಡಿ:"
  },
  "Simulate 1-Ring Missed Call (Instant SMS Token)": {
    "hi": "1-घंटी मिस्ड कॉल सिमुलेट करें (तुरंत एसएमएस टोकन)",
    "pa": "1-ਘੰਟੀ ਮਿਸਡ ਕਾਲ ਸਿਮੂਲੇਟ ਕਰੋ (ਤੁਰੰਤ ਐਸਐਮਐਸ)",
    "mr": "1-रिंग मिस्ड कॉल सिम्युलेट करा (तात्काळ एसएमएस टोकन)",
    "gu": "1-રિંગ મિસ્ડ કોલ સિમ્યુલેટ કરો (તરત જ એસએમએસ)",
    "bn": "১-রিং মিসড কল সিমুলেট করুন (তাত্ক্ষণিক এসএমএস)",
    "te": "1-రింగ్ మిస్డ్ కాల్ సిమ్యులేట్ చేయండి (వెంటనే ఎస్ఎంఎస్ టోకెన్)",
    "ta": "1-ரிங் மிஸ்டு கால் செய்க (உடனடி எஸ்எம்எஸ் டோக்கன்)",
    "kn": "1-ರಿಂಗ್ ಮಿಸ್ಡ್ ಕಾಲ್ ನೀಡಿ (ತಕ್ಷಣವೇ SMS ಟೋಕನ್)"
  },
  "Load Toll-Free 1800-547-2600": {
    "hi": "टोल-फ्री नंबर 1800-547-2600 डायल करें",
    "pa": "ਟੋਲ-ਫ੍ਰੀ ਨੰਬਰ 1800-547-2600 ਮਿਲਾਓ",
    "mr": "टोल-फ्री नंबर 1800-547-2600 डायल करा",
    "gu": "ટોલ-ફ્રી નંબર 1800-547-2600 ડાયલ કરો",
    "bn": "টোল-ফ্রি নম্বর 1800-547-2600 কল করুন",
    "te": "టోల్-ఫ్రీ 1800-547-2600 కు డయల్ చేయండి",
    "ta": "இலவச எண் 1800-547-2600-ஐ அழைக்கவும்",
    "kn": "ಉಚಿತ ಸಂಖ್ಯೆ 1800-547-2600 ಗೆ ಕರೆ ಮಾಡಿ"
  },
  "Incoming Government SMS Notification Received:": {
    "hi": "आधिकारिक सरकारी एसएमएस संदेश प्राप्त हुआ:",
    "pa": "ਸਰਕਾਰੀ ਐਸਐਮਐਸ ਸੁਨੇਹਾ ਪ੍ਰਾਪਤ ਹੋਇਆ:",
    "mr": "अधिकृत सरकारी एसएमएस संदेश मिळाला:",
    "gu": "સરકારી એસએમએસ સંદેશ મળ્યો:",
    "bn": "সরকারি এসএমএস বার্তা প্রাপ্ত হয়েছে:",
    "te": "అధికారిక ప్రభుత్వ ఎస్ఎంఎస్ సందేశం అందింది:",
    "ta": "அரசு எஸ்எம்எஸ் செய்தி பெறப்பட்டது:",
    "kn": "ಸರ್ಕಾರಿ SMS ಸಂದೇಶ ಬಂದಿದೆ:"
  },
  "Farmer shows this 5-character SMS to the Gate Guard for rapid entry pass scan.": {
    "hi": "किसान मंडी गेट पर यह 5-अक्षर का कोड सुरक्षा गार्ड को दिखाकर सीधे प्रवेश कर सकते हैं।",
    "pa": "ਕਿਸਾਨ ਗੇਟ ਗਾਰਡ ਨੂੰ ਇਹ 5-ਅੱਖਰ ਦਾ ਕੋਡ ਦਿਖਾ ਕੇ ਸਿੱਧਾ ਦਾਖਲਾ ਲੈ ਸਕਦੇ ਹਨ।",
    "mr": "शेतकरी मंडी गेटवर हा 5-अक्षरी कोड दाखवून थेट प्रवेश करू शकतात.",
    "gu": "ખેડૂતો યાર્ડ ગેટ પર આ 5-અક્ષરનો કોડ બતાવીને સીધો પ્રવેશ મેળવી શકે છે.",
    "bn": "কৃষকরা মান্ডি গেটে এই ৫-অক্ষরের কোড দেখিয়ে সরাসরি প্রবেশ করতে পারবেন।",
    "te": "రైతులు యార్డ్ గేట్ వద్ద ఈ 5-అక్షరాల కోడ్‌ను చూపించి నేరుగా లోపలికి వెళ్లవచ్చు.",
    "ta": "விவசாயிகள் மண்டி வாயிலில் இந்த 5-எழுத்துக் குறியீட்டைக் காட்டி நேரடியாக நுழையலாம்.",
    "kn": "ರೈತರು ಮಾರುಕಟ್ಟೆ ಗೇಟ್‌ನಲ್ಲಿ ಈ 5-ಅಕ್ಷರದ ಕೋಡ್ ತೋರಿಸಿ ನೇರವಾಗಿ ಪ್ರವೇಶಿಸಬಹುದು."
  },
  "Weather-Aware Queue Pause & Silo Rerouting": {
    "hi": "मौसम आधारित कतार नियंत्रण और साइलो डायवर्जन",
    "pa": "ਮੌਸਮ ਅਨੁਕੂਲ ਕਤਾਰ ਨਿਯੰਤਰਣ ਅਤੇ ਸਾਈਲੋ ਡਾਇਵਰਸ਼ਨ",
    "mr": "हवामान आधारित रांग नियंत्रण आणि सायलो वळवणे",
    "gu": "હવામાન આધારિત કતાર નિયંત્રણ અને શેડ ડાયવર્ઝન",
    "bn": "আবহাওয়া সচেতন সারি নিয়ন্ত্রণ ও সাইলো ডাইভার্সন",
    "te": "వాతావరణ ఆధారిత క్యూ నియంత్రణ & షెడ్ మళ్లింపు",
    "ta": "வானிலை அடிப்படையிலான வரிசைக் கட்டுப்பாடு",
    "kn": "ಹವಾಮಾನ ಆಧಾರಿತ ಸರದಿ ನಿಯಂತ್ರಣ ಮತ್ತು ಶೆಡ್ ಡೈವರ್ಶನ್"
  },
  "Real-time sync with India Meteorological Department (IMD) Doppler Radar nowcasting": {
    "hi": "भारतीय मौसम विज्ञान विभाग (IMD) डॉपलर रडार से रियल-टाइम सिंक",
    "pa": "ਭਾਰਤੀ ਮੌਸਮ ਵਿਭਾਗ (IMD) ਡੌਪਲਰ ਰਾਡਾਰ ਨਾਲ ਰੀਅਲ-ਟਾਈਮ ਸਿੰਕ",
    "mr": "भारतीय हवामान खात्याच्या (IMD) डॉपलर रडारशी थेट जोडणी",
    "gu": "ભારતીય હવામાન વિભાગ (IMD) ડોપ્લર રડાર સાથે સીધું જોડાણ",
    "bn": "ভারতীয় আবহাওয়া দপ্তরের (IMD) ডপলার রাডারের সাথে রিয়েল-টাইম সংযোগ",
    "te": "భారత వాతావరణ శాఖ (IMD) డాప్లర్ రాడార్‌తో ప్రత్యక్ష అనుసంధానం",
    "ta": "இந்திய வானிலை ஆய்வுத் துறை (IMD) ரேடாரோடு நேரடி இணைப்பு",
    "kn": "ಭಾರತೀಯ ಹವಾಮಾನ ಇಲಾಖೆ (IMD) ಡಾಪ್ಲರ್ ರೇಡಾರ್‌ನೊಂದಿಗೆ ನೇರ ಸಂಪರ್ಕ"
  },
  "Mandi Yard Temperature": {
    "hi": "मंडी प्रांगण तापमान",
    "pa": "ਮੰਡੀ ਤਾਪਮਾਨ",
    "mr": "मंडी आवार तापमान",
    "gu": "યાર્ડનું તાપમાન",
    "bn": "মান্ডির তাপমাত্রা",
    "te": "యార్డ్ ఉష్ణోగ్రత",
    "ta": "மண்டி வெப்பநிலை",
    "kn": "ಮಾರುಕಟ್ಟೆ ತಾಪಮಾನ"
  },
  "Precipitation Radar Probability": {
    "hi": "बारिश की संभावना",
    "pa": "ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ",
    "mr": "पावसाची शक्यता",
    "gu": "વરસાદની સંભાવના",
    "bn": "বৃষ্টির সম্ভাবনা",
    "te": "వర్షం పడే అవకాశం",
    "ta": "மழைக்கான வாய்ப்பு",
    "kn": "ಮಳೆಯ ಸಂಭವನೀಯತೆ"
  },
  "Atmospheric Sky Condition": {
    "hi": "आसमानी स्थिति",
    "pa": "ਮੌਸਮ ਦੀ ਸਥਿਤੀ",
    "mr": "हवामान स्थिती",
    "gu": "હવામાનની સ્થિતિ",
    "bn": "আকাশের অবস্থা",
    "te": "ఆకాశ పరిస్థితి",
    "ta": "வானிலை நிலை",
    "kn": "ಆಕಾಶದ ಸ್ಥಿತಿ"
  },
  "Covered Transit Silo Sheds: 14 Tractors Protected Before Rain Hits": {
    "hi": "कवर्ड साइलो शेड: बारिश आने से पहले 14 ट्रॉली सुरक्षित",
    "pa": "ਢੱਕੇ ਹੋਏ ਸਾਈਲੋ ਸ਼ੈੱਡ: ਮੀਂਹ ਤੋਂ ਪਹਿਲਾਂ 14 ਟਰੈਕਟਰ ਸੁਰੱਖਿਅਤ",
    "mr": "कव्हर्ड सायलो शेड: पाऊस येण्यापूर्वी 14 ट्रॅक्टर सुरक्षित",
    "gu": "કવર્ડ સાયલો શેડ: વરસાદ પહેલાં 14 ટ્રેક્ટર સુરક્ષિત",
    "bn": "কভার্ড সাইলো শেড: বৃষ্টির আগে ১৪টি ট্র্যাক্টর সুরক্ষিত",
    "te": "రక్షిత సైలో షెడ్లు: వర్షం రాకముందే 14 ట్రాక్టర్లు భద్రం",
    "ta": "கூரையிடப்பட்ட கிடங்கு: மழைக்கு முன் 14 டிராக்டர்கள் பாதுகாப்பு",
    "kn": "ಮುಚ್ಚಿದ ಸೈಲೋ ಶೆಡ್‌ಗಳು: ಮಳೆಗೂ ಮುನ್ನ 14 ಟ್ರಾಕ್ಟರ್ ಸುರಕ್ಷಿತ"
  },
  "When Doppler radar detects precipitation risk >70%, KISAN-Q automatically halts open trolley dispatches and diverts en-route tractors into covered high-canopy transit silos, preventing ₹10+ Crores in annual post-harvest rain spoilage.": {
    "hi": "जब रडार 70% से अधिक बारिश का संकेत देता है, किसान-Q खुली ट्रॉलियों को तुरंत ढके हुए शेड में भेज देता है, जिससे फसल भीगने से बचती है।",
    "pa": "ਰਾਡਾਰ ਚੇਤਾਵਨੀ ਨਾਲ ਮੀਂਹ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਟਰਾਲੀਆਂ ਢੱਕੇ ਹੋਏ ਗੋਦਾਮਾਂ 'ਚ ਭੇਜੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।",
    "mr": "रडारवर 70% पेक्षा जास्त पाऊस दिसल्यास किसान-Q उघड्या ट्रॉल्यांना कव्हर्ड शेडमध्ये वळवते.",
    "gu": "રડાર પર વરસાદની ચેતવણી મળતાં જ ખુલ્લી ટ્રોલીઓને ઢંકાયેલા શેડમાં મોકલી દેવાય છે.",
    "bn": "রাডারে বৃষ্টির পূর্বাভাস পেলেই খোলা ট্রলিগুলিকে সুরক্ষিত ছাউনিতে পাঠিয়ে দেওয়া হয়।",
    "te": "రాడార్‌లో వర్ష సూచన రాగానే తెరిచి ఉన్న ట్రాక్టర్లను వెంటనే పైకప్పు ఉన్న షెడ్లలోకి మళ్లిస్తారు.",
    "ta": "ரேடாரில் மழை எச்சரிக்கை வந்தவுடன் திறந்தவெளி டிராக்டர்கள் உடனே கூரையுள்ள கொட்டகைக்கு மாற்றப்படும்.",
    "kn": "ರೇಡಾರ್‌ನಲ್ಲಿ ಮಳೆ ಮುನ್ಸೂಚನೆ ಬಂದ ಕೂಡಲೇ ತೆರೆದ ಟ್ರಾಕ್ಟರ್‌ಗಳನ್ನು ಮುಚ್ಚಿದ ಶೆಡ್‌ಗಳಿಗೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ."
  },
  "Simulate Severe Rain Warning (Trigger Auto-Pause & Covered Reroute)": {
    "hi": "भारी बारिश की चेतावनी सिमुलेट करें (कवर्ड शेड डायवर्जन)",
    "pa": "ਭਾਰੀ ਮੀਂਹ ਦੀ ਚੇਤਾਵਨੀ ਸਿਮੂਲੇਟ ਕਰੋ",
    "mr": "मुसळधार पावसाचा इशारा सिम्युलेट करा",
    "gu": "ભારે વરસાદની ચેતવણી સિમ્યુલેટ કરો",
    "bn": "ভারী বৃষ্টির সতর্কতা সিমুলেট করুন",
    "te": "భారీ వర్షపు హెచ్చరికను సిమ్యులేట్ చేయండి",
    "ta": "கனமழை எச்சரிக்கையை உருவகப்படுத்துக",
    "kn": "ಭಾರಿ ಮಳೆ ಮುನ್ಸೂಚನೆ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ"
  },
  "Restore Clear Weather (Resume Pacing)": {
    "hi": "मौसम साफ सिमुलेट करें (सामान्य संचालन)",
    "pa": "ਮੌਸਮ ਸਾਫ਼ ਸਿਮੂਲੇਟ ਕਰੋ",
    "mr": "हवामान स्वच्छ सिम्युलेट करा",
    "gu": "ચોખ્ખું હવામાન સિમ્યુલેટ કરો",
    "bn": "পরিষ্কার আবহাওয়া সিমুলেট করুন",
    "te": "వాతావరణం స్వచ్ఛంగా సిమ్యులేట్ చేయండి",
    "ta": "தெளிவான வானிலையை உருவகப்படுத்துக",
    "kn": "ಸ್ವಚ್ಛ ಹವಾಮಾನ ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ"
  },
  "Multi-Dimensional Impact Matrix": {
    "hi": "ज़मीनी प्रभाव एवं सामाजिक-आर्थिक लाभ",
    "pa": "ਜ਼ਮੀਨੀ ਪ੍ਰਭਾਵ ਅਤੇ ਸਮਾਜਿਕ-ਆਰਥਿਕ ਲਾਭ",
    "mr": "शेतकऱ्यांचा फायदा आणि आर्थिक बचत",
    "gu": "ખેડૂતોને સીધો આર્થિક ફાયદો",
    "bn": "কৃষকের নিশ্চিত অর্থনৈতিক লাভ",
    "te": "రైతులకు స్పష్టమైన ఆర్థిక ప్రయోజనం",
    "ta": "விவசாயிகளுக்கு நேரடிப் பொருளாதார லாபம்",
    "kn": "ರೈತರಿಗೆ ನೇರ ಆರ್ಥಿಕ ಲಾಭ"
  },
  "Quantified benefits for farmers, transporters, and APMC administration": {
    "hi": "किसानों, व्यापारियों और मंडी प्रशासन के लिए प्रमाणित बचत",
    "pa": "ਕਿਸਾਨਾਂ, ਵਪਾਰੀਆਂ ਅਤੇ ਮੰਡੀ ਪ੍ਰਸ਼ਾਸਨ ਲਈ ਪ੍ਰਮਾਣਿਤ ਬਚਤ",
    "mr": "शेतकरी, वाहतूकदार आणि एपीएमसीसाठी सिद्ध झालेली बचत",
    "gu": "ખેડૂતો અને માર્કેટ યાર્ડ માટે પુરાવા સાથે બચત",
    "bn": "কৃষক ও মান্ডির প্রমাণিত সাশ্রয়",
    "te": "రైతులు మరియు మార్కెట్ కమిటీకి నిరూపితమైన ఆదా",
    "ta": "விவசாயிகள் மற்றும் சந்தைக்கு நிரூபிக்கப்பட்ட சேமிப்பு",
    "kn": "ರೈತರು ಮತ್ತು ಮಾರುಕಟ್ಟೆಗೆ ದೃಢೀಕೃತ ಉಳಿತಾಯ"
  },
  "Reduction in Waiting Time": {
    "hi": "इंतज़ार के समय में 96% कमी",
    "pa": "ਉਡੀਕ ਸਮੇਂ ਵਿੱਚ 96% ਕਟੌਤੀ",
    "mr": "प्रतीक्षा वेळेत 96% घट",
    "gu": "રાહ જોવામાં 96% ઘટાડો",
    "bn": "অপেক্ষার সময় ৯৬% হ্রাস",
    "te": "వేచి ఉండే సమయంలో 96% తగ్గింపు",
    "ta": "காத்திருப்பு நேரத்தில் 96% குறைப்பு",
    "kn": "ಕಾಯುವ ಸಮಯದಲ್ಲಿ 96% ಇಳಿಕೆ"
  },
  "Slashes highway tractor gridlocks from 48–72 hours down to under 60 minutes from gate arrival to tare weighment exit.": {
    "hi": "हाईवे पर 48-72 घंटे के लंबे जाम से मुक्ति, अब केवल 45 मिनट में तुलाई पूरी।",
    "pa": "18-72 ਘੰਟਿਆਂ ਦੇ ਜਾਮ ਤੋਂ ਘਟ ਕੇ ਸਿਰਫ਼ 45 ਮਿੰਟ ਵਿੱਚ ਕੰਮ ਪੂਰਾ।",
    "mr": "हायवेवरील 2-3 दिवसांच्या त्रासातून मुक्ती, फक्त 45 मिनिटांत काम पूर्ण.",
    "gu": "હાઈવે પર 2-3 દિવસના જામમાંથી મુક્તિ, ફક્ત 45 મિનિટમાં વજન પૂરું.",
    "bn": "হাইওয়েতে ২-৩ দিনের অসহনীয় জ্যাম থেকে মুক্তি, মাত্র ৪৫ মিনিটে কাজ শেষ।",
    "te": "రోడ్డుపై 2-3 రోజుల ట్రాఫిక్ జామ్‌ల నుండి విముక్తి, 45 నిమిషాల్లో పని పూర్తి.",
    "ta": "நெடுஞ்சாலை 2-3 நாள் நெரிசலில் இருந்து விடுதலை, 45 நிமிடங்களில் வேலை முடிகிறது.",
    "kn": "ಹೆದ್ದಾರಿಯಲ್ಲಿ 2-3 ದಿನಗಳ ಟ್ರಾಫಿಕ್ ಕಿರಿಕಿರಿ ಇಲ್ಲ, 45 ನಿಮಿಷಗಳಲ್ಲಿ ಕೆಲಸ ಪೂರ್ಣ."
  },
  "Per Farmer Per Trip": {
    "hi": "प्रति किसान प्रति चक्कर बचत",
    "pa": "ਪ੍ਰਤੀ ਕਿਸਾਨ ਪ੍ਰਤੀ ਗੇੜਾ ਬਚਤ",
    "mr": "प्रति शेतकरी प्रति फेरी बचत",
    "gu": "ફેરી દીઠ ખેડૂતની બચત",
    "bn": "প্রতি সফরে কৃষকের সাশ্রয়",
    "te": "ప్రతి ట్రిప్పుకు రైతుకు ఆదా",
    "ta": "விவசாயிக்கு ஒரு முறைக்கு ஆகும் சேமிப்பு",
    "kn": "ಪ್ರತಿ ಟ್ರಿಪ್‌ಗೆ ರೈತನ ಉಳಿತಾಯ"
  },
  "Eliminates 3 days of tractor-trolley rental penalties (₹1,500/day) and stops coercive distress sales below MSP.": {
    "hi": "ट्रॉली का 3 दिन का किराया (₹1,500/दिन) बचा और औने-पौने दाम पर फसल बेचने की मजबूरी खत्म।",
    "pa": "ਟਰੈਕਟਰ ਕਿਰਾਇਆ, ਡੀਜ਼ਲ ਅਤੇ ਫਸਲ ਖਰਾਬੀ ਦੀ ਬਚਤ।",
    "mr": "ट्रॉली भाडे (₹1,500/दिवस) वाचले आणि कमी भावात माल विकण्याची वेळ येत नाही.",
    "gu": "ટ્રોલીનું ભાડું (₹1,500/દિવસ) બચે છે અને પાક સસ્તા ભાવે વેચવો પડતો નથી.",
    "bn": "ট্রলি ভাড়া বাঁচে এবং কম দামে ফসল বিক্রি করার বাধ্যবাধকতা দূর হয়।",
    "te": "ట్రాక్టర్ అద్దె ఖర్చులు ఆదా అవుతాయి మరియు తక్కువ ధరకు అమ్ముకోవాల్సిన అవసరం ఉండదు.",
    "ta": "டிராக்டர் வாடகை மிச்சமாகிறது, குறைந்த விலைக்கு விற்க வேண்டிய கட்டாயம் இல்லை.",
    "kn": "ಟ್ರಾಕ್ಟರ್ ಬಾಡಿಗೆ ಉಳಿತಾಯ ಮತ್ತು ಕಡಿಮೆ ಬೆಲೆಗೆ ಮಾರುವ ಅನಿವಾರ್ಯತೆ ಇರುವುದಿಲ್ಲ."
  },
  "Post-Harvest Spoilage": {
    "hi": "फसल सड़न का नुकसान 0%",
    "pa": "0% ਫਸਲ ਗਲਣ ਦਾ ਨੁਕਸਾਨ",
    "mr": "धान्य नासाडी 0%",
    "gu": "પાક બગડવાનું જોખમ 0%",
    "bn": "শস্য নষ্টের হার ০%",
    "te": "ధాన్యం తడిసి పాడయ్యే ప్రమాదం 0%",
    "ta": "பயிர் அழுகும் இழப்பு 0%",
    "kn": "ಬೆಳೆ ಹಾಳಾಗುವ ನಷ್ಟ 0%"
  },
  "Weather-triggered IMD radar diversion shields exposed grains from unexpected downpours, protecting farmer income.": {
    "hi": "मौसम रडार चेतावनी से खुली उपज को भीगने से पहले सुरक्षित गोदामों में भेजा जाता है।",
    "pa": "ਰਾਡਾਰ ਚੇਤਾਵਨੀ ਨਾਲ ਮੀਂਹ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਟਰਾਲੀਆਂ ਢੱਕੇ ਹੋਏ ਗੋਦਾਮਾਂ 'ਚ ਭੇਜੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।",
    "mr": "पाऊस येण्यापूर्वीच माल सुरक्षित शेडमध्ये हलवला जातो.",
    "gu": "વરસાદ પડે તે પહેલાં જ અનાજ સુરક્ષિત ગોડાઉનમાં પહોંચી જાય છે.",
    "bn": "বৃষ্টির আগেই নিরাপদে গুদামে শস্য পৌঁছে যায়।",
    "te": "వర్షం పడేలోపే ధాన్యం రక్షిత గోదాములకు చేరుతుంది.",
    "ta": "மழை பெய்யும் முன்பே பாதுகாப்பான கிடங்குகளுக்கு தானியங்கள் மாற்றப்படுகின்றன.",
    "kn": "ಮಳೆ ಬರುವ ಮುನ್ನವೇ ಧಾನ್ಯ ಸುರಕ್ಷಿತ ಗೋದಾಮಿಗೆ ತಲುಪುತ್ತದೆ."
  },
  "Mandi Field Resilience & Chaos Simulator": {
    "hi": "मंडी फील्ड रेजिलिएंस एवं केओस सिम्युलेटर",
    "pa": "ਮੰਡੀ ਫੀਲਡ ਰੇਜ਼ੀਲੀਅੈਂਸ ਅਤੇ ਕੇਓਸ ਸਿਮੂਲੇਟਰ",
    "mr": "मंडी क्षेत्रीय लवचिकता आणि केओस सिम्युलेटर",
    "gu": "મંડી ફિલ્ડ સ્થિતિસ્થાપકતા અને કેઓસ સિમ્યુલેટર",
    "bn": "মান্ডি মাঠ স্থিতিস্থাপকতা ও কেওস সিমুলেটর",
    "te": "మండి క్షేత్ర స్థితిస్థాపకత మరియు కెయోస్ సిమ్యులేటర్",
    "ta": "மண்டி கள மீள்திறன் மற்றும் கேயாஸ் சிமுலேட்டர்",
    "kn": "ಮಂಡಿ ಕ್ಷೇತ್ರ ಸ್ಥಿತಿಸ್ಥಾಪಕತ್ವ ಮತ್ತು ಅವ್ಯವಸ್ಥೆ ಸಿಮ್ಯುಲೇಟರ್"
  },
  "Test live physical bottleneck recovery (10-wheeler gate jam) and cloud identity outages": {
    "hi": "जांचें कि गेट खराबी (10-चक्का ट्रॉली जाम) या क्लाउड सर्वर डाउन होने पर किसान-Q कैसे तुरंत रिकवर करता है",
    "pa": "ਜਾਂਚੋ ਕਿ ਗੇਟ ਜਾਮ ਜਾਂ ਕਲਾਉਡ ਸਰਵਰ ਡਾਊਨ ਹੋਣ 'ਤੇ ਕਿਸਾਨ-Q ਕਿਵੇਂ ਤੁਰੰਤ ਰਿਕਵਰ ਕਰਦਾ ਹੈ",
    "mr": "गेट बिघाड किंवा क्लाउड सर्व्हर बंद पडल्यास किसान-Q कसा तत्काळ रिकव्हर होतो ते तपासा",
    "gu": "તપાસો કે ગેટ ખરાબી અથવા ક્લાઉડ સર્વર ડાઉન થવા પર કિસાન-Q કેવી રીતે તાત્કાલિક પુનઃપ્રાપ્ત થાય છે",
    "bn": "গেট জ্যাম বা ক্লাউড সার্ভার বন্ধ হলে কিষাণ-Q কীভাবে দ্রুত স্বাভাবিক হয় তা পরীক্ষা করুন",
    "te": "గేట్ జామ్ లేదా క్లౌడ్ సర్వర్ డౌన్ అయినప్పుడు కిసాన్-Q ఎలా తక్షణమే రికవర్ అవుతుందో పరీక్షించండి",
    "ta": "கேட் நெரிசல் அல்லது கிளவுட் செயலிழப்பின் போது கிசான்-Q எவ்வாறு உடனடியாக மீள்கிறது என்பதை சோதிக்கவும்",
    "kn": "ಗೇಟ್ ಜಾಮ್ ಅಥವಾ ಕ್ಲೌಡ್ ಸರ್ವರ್ ಡೌನ್ ಆದಾಗ ಕಿಸಾನ್-Q ಹೇಗೆ ತಕ್ಷಣ ಚೇತರಿಸಿಕೊಳ್ಳುತ್ತದೆ ಎಂಬುದನ್ನು ಪರೀಕ್ಷಿಸಿ"
  },
  "Gate 1: Optimal (50 Tr/h)": {
    "hi": "गेट 1: सामान्य (50 ट्र/घंटा)",
    "pa": "ਗੇਟ 1: ਆਮ (50 ਟਰੈ/ਘੰਟਾ)",
    "mr": "गेट 1: सुरळीत (50 ट्रॅ/तास)",
    "gu": "ગેટ 1: સામાન્ય (50 ટ્રે/કલાક)",
    "bn": "গেট ১: স্বাভাবিক (৫০ ট্রা/ঘণ্টা)",
    "te": "గేట్ 1: సాధారణం (50 ట్రా/గంట)",
    "ta": "கேட் 1: வழக்கம் (50 டிராக்டர்/மணி)",
    "kn": "ಗೇಟ್ 1: ಸಾಮಾನ್ಯ (50 ಟ್ರ್ಯಾ/ಗಂಟೆ)"
  },
  "State Cloud: Online (0ms)": {
    "hi": "राज्य क्लाउड: ऑनलाइन (0ms)",
    "pa": "ਰਾਜ ਕਲਾਉਡ: ਔਨਲਾਈਨ (0ms)",
    "mr": "राज्य क्लाउड: ऑनलाइन (0ms)",
    "gu": "રાજ્ય ક્લાઉડ: ઓનલાઇન (0ms)",
    "bn": "রাজ্য ক্লাউড: অনলাইন (0ms)",
    "te": "రాష్ట్ర క్లౌడ్: ఆన్‌లైన్ (0ms)",
    "ta": "மாநில கிளவுட்: ஆன்லைன் (0ms)",
    "kn": "ರಾಜ್ಯ ಕ್ಲೌಡ್: ಆನ್‌ಲೈನ್ (0ms)"
  },
  "Audio: ON": {
    "hi": "ध्वनि: चालू",
    "pa": "ਆਵਾਜ਼: ਚਾਲੂ",
    "mr": "ध्वनी: चालू",
    "gu": "અવાજ: ચાલુ",
    "bn": "শব্দ: চালু",
    "te": "శబ్దం: ఆన్",
    "ta": "ஒலி: ஆன்",
    "kn": "ಧ್ವನಿ: ಆನ್"
  },
  "Audio: OFF": {
    "hi": "ध्वनि: बंद",
    "pa": "ਆਵਾਜ਼: ਬੰਦ",
    "mr": "ध्वनी: बंद",
    "gu": "અવાજ: બંધ",
    "bn": "শব্দ: বন্ধ",
    "te": "శబ్దం: ఆఫ్",
    "ta": "ஒலி: ஆஃப்",
    "kn": "ಧ್ವನಿ: ಆಫ್"
  },
  "🚨 MANDI OPERATIONAL CRISIS ACTIVE": {
    "hi": "🚨 मंडी परिचालन संकट सक्रिय",
    "pa": "🚨 ਮੰਡੀ ਸੰਕਟ ਸਰਗਰਮ",
    "mr": "🚨 मंडी परिचालन आणीबाणी सक्रिय",
    "gu": "🚨 મંડી કામગીરી કટોકટી સક્રિય",
    "bn": "🚨 মান্ডি অপারেশনাল সংকট সক্রিয়",
    "te": "🚨 మండి కార్యాచరణ సంక్షోభం క్రియాశీలకం",
    "ta": "🚨 மண்டி செயல்பாட்டு நெருக்கடி செயலில்",
    "kn": "🚨 ಮಂಡಿ ಕಾರ್ಯಾಚರಣೆಯ ಬಿಕ್ಕಟ್ಟು ಸಕ್ರಿಯ"
  },
  "Multi-Gate Incident Compensator": {
    "hi": "मल्टी-गेट आपातकालीन नियंत्रक",
    "pa": "ਮਲਟੀ-ਗੇਟ ਹੰਗਾਮੀ ਕੰਟਰੋਲਰ",
    "mr": "मल्टी-गेट आणीबाणी नियंत्रक",
    "gu": "મલ્ટી-ગેટ કટોકટી નિયંત્રક",
    "bn": "মাল্টি-গেট জরুরি নিয়ন্ত্রক",
    "te": "మల్టీ-గేట్ అత్యవసర కంట్రోలర్",
    "ta": "மல்டி-கேட் அவசரகால கட்டுப்படுத்தி",
    "kn": "ಮಲ್ಟಿ-ಗೇಟ್ ತುರ್ತು ನಿಯಂತ್ರಕ"
  },
  "10-WHEELER AXLE SNAPPED AT GATE 1 INWARD RAMP!": {
    "hi": "गेट 1 इनवर्ड रैंप पर 10-चक्का ट्रॉली का एक्सल टूटा!",
    "pa": "ਗੇਟ 1 'ਤੇ 10-ਟਾਇਰੀ ਟਰਾਲੀ ਦਾ ਐਕਸਲ ਟੁੱਟਿਆ!",
    "mr": "गेट 1 च्या रॅम्पवर 10 चाकी वाहनाचा एक्सल तुटला!",
    "gu": "ગેટ 1 ઇનવર્ડ રેમ્પ પર 10-વ્હીલર એક્સલ તૂટી ગયો!",
    "bn": "গেট ১ ইনওয়ার্ড র‍্যাম্পে ১০ চাকার এক্সেল ভেঙে গেছে!",
    "te": "గేట్ 1 వద్ద 10-వీలర్ యాక్సిల్ విరిగిపోయింది!",
    "ta": "கேட் 1 நுழைவுப் பாதையில் 10 சக்கர வாகன அச்சு முறிந்தது!",
    "kn": "ಗೇಟ್ 1 ಇನ್‌ವರ್ಡ್ ಇಳಿಜಾರಿನಲ್ಲಿ 10 ಚಕ್ರಗಳ ವಾಹನದ ಆಕ್ಸಲ್ ಮುರಿದಿದೆ!"
  },
  "Clear Obstruction & Reopen Gate 1": {
    "hi": "अवरोध हटाएं व गेट 1 पुनः खोलें",
    "pa": "ਰੁਕਾਵਟ ਹਟਾਓ ਅਤੇ ਗੇਟ 1 ਮੁੜ ਖੋਲ੍ਹੋ",
    "mr": "अडथळा दूर करा आणि गेट 1 पुन्हा उघडा",
    "gu": "અવરોધ દૂર કરો અને ગેટ 1 ફરીથી ખોલો",
    "bn": "বাধা দূর করুন এবং গেট ১ পুনরায় খুলুন",
    "te": "అడ్డంకిని తొలగించి గేట్ 1ని మళ్లీ తెరవండి",
    "ta": "தடையை அகற்றி கேட் 1-ஐ மீண்டும் திறக்கவும்",
    "kn": "ಅಡಚಣೆಯನ್ನು ತೆರವುಗೊಳಿಸಿ ಗೇಟ್ 1 ಅನ್ನು ಮತ್ತೆ ತೆರೆಯಿರಿ"
  },
  "🚨 CENTRAL SERVER OUTAGE (HTTP 503)": {
    "hi": "🚨 केंद्रीय सर्वर आउटेज (HTTP 503)",
    "pa": "🚨 ਕੇਂਦਰੀ ਸਰਵਰ ਆਊਟੇਜ (HTTP 503)",
    "mr": "🚨 केंद्रीय सर्व्हर बंद (HTTP 503)",
    "gu": "🚨 કેન્દ્રીય સર્વર આઉટેજ (HTTP 503)",
    "bn": "🚨 কেন্দ্রীয় সার্ভার বন্ধ (HTTP 503)",
    "te": "🚨 కేంద్ర సర్వర్ అంతరాయం (HTTP 503)",
    "ta": "🚨 மத்திய சர்வர் செயலிழப்பு (HTTP 503)",
    "kn": "🚨 ಕೇಂದ್ರ ಸರ್ವರ್ ಸ್ಥಗಿತ (HTTP 503)"
  },
  "Cryptographic Offline Override Active": {
    "hi": "क्रिप्टोग्राफिक ऑफलाइन ओवरराइड सक्रिय",
    "pa": "ਕ੍ਰਿਪਟੋਗ੍ਰਾਫਿਕ ਔਫਲਾਈਨ ਓਵਰਰਾਈਡ ਸਰਗਰਮ",
    "mr": "क्रिप्टोग्राफिक ऑफलाइन ओव्हरराइड सक्रिय",
    "gu": "ક્રિપ્ટોગ્રાફિક ઑફલાઇન ઓવરરાઇડ સક્રિય",
    "bn": "ক্রিপ্টোগ্রাফিক অফলাইন ওভাররাইড সক্রিয়",
    "te": "క్రిప్టోగ్రాఫిక్ ఆఫ్‌లైన్ ఓవర్‌రైడ్ యాక్టివ్",
    "ta": "கிரிப்டோகிராஃபிக் ஆஃப்லைன் மீறல் செயலில்",
    "kn": "ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ ಆಫ್‌ಲೈನ್ ಓವರ್‌ರೈಡ್ ಸಕ್ರಿಯ"
  },
  "STATE IDENTITY & e-NAM CLOUD SERVERS UNREACHABLE": {
    "hi": "राज्य पहचान व ई-नाम क्लाउड सर्वर अनुपलब्ध",
    "pa": "ਸਟੇਟ ਪਛਾਣ ਅਤੇ ਈ-ਨਾਮ ਕਲਾਉਡ ਸਰਵਰ ਅਣਉਪਲਬਧ",
    "mr": "राज्य ओळख व ई-नाम क्लाउड सर्व्हर अनुपलब्ध",
    "gu": "રાજ્ય ઓળખ અને ઈ-નામ ક્લાઉડ સર્વર્સ અપ્રાપ્ય",
    "bn": "রাজ্য পরিচয় ও ই-নাম ক্লাউড সার্ভার সংযোগহীন",
    "te": "రాష్ట్ర గుర్తింపు & e-NAM క్లౌడ్ సర్వర్లు అందుబాటులో లేవు",
    "ta": "மாநில அடையாளம் & e-NAM கிளவுட் சர்வர்கள் இணைக்கப்படவில்லை",
    "kn": "ರಾಜ್ಯ ಗುರುತು ಮತ್ತು e-NAM ಕ್ಲೌಡ್ ಸರ್ವರ್‌ಗಳು ಲಭ್ಯವಿಲ್ಲ"
  },
  "Restore State Cloud Sync": {
    "hi": "राज्य क्लाउड सिंक बहाल करें",
    "pa": "ਸਟੇਟ ਕਲਾਉਡ ਸਿੰਕ ਬਹਾਲ ਕਰੋ",
    "mr": "राज्य क्लाउड सिंक पूर्ववत करा",
    "gu": "રાજ્ય ક્લાઉડ સિંક પુનઃસ્થાપિત કરો",
    "bn": "রাজ্য ক্লাউড সিঙ্ক পুনরুদ্ধার করুন",
    "te": "రాష్ట్ర క్లౌడ్ సింక్‌ను పునరుద్ధరించండి",
    "ta": "மாநில கிளவுட் ஒத்திசைவை மீட்டமைக்கவும்",
    "kn": "ರಾಜ್ಯ ಕ್ಲೌಡ್ ಸಿಂಕ್ ಅನ್ನು ಮರುಸ್ಥಾಪಿಸಿ"
  },
  "Clear Rain Alert": {
    "hi": "बारिश अलर्ट हटाएं",
    "pa": "ਮੀਂਹ ਅਲਰਟ ਹਟਾਓ",
    "mr": "पाऊस सूचना हटवा",
    "gu": "વરસાદ ચેતવણી દૂર કરો",
    "bn": "বৃষ্টির সতর্কতা সরান",
    "te": "వర్షం హెచ్చరికను తొలగించండి",
    "ta": "மழை எச்சரிக்கையை நீக்கு",
    "kn": "ಮಳೆ ಎಚ್ಚರಿಕೆಯನ್ನು ತೆರವುಗೊಳಿಸಿ"
  },
  "Under 2.0 ha qualifies for reserved Fair-Share priority.": {
    "hi": "2.0 हेक्टेयर से कम रकबा फेयर-शेयर प्राथमिकता के लिए योग्य है।",
    "pa": "2.0 ਹੈਕਟੇਅਰ ਤੋਂ ਘੱਟ ਜ਼ਮੀਨ ਫੇਅਰ-ਸ਼ੇਅਰ ਤਰਜੀਹ ਲਈ ਯੋਗ ਹੈ।",
    "mr": "2.0 हेक्टरपेक्षा कमी क्षेत्र फेअर-शेअर प्राधान्यासाठी पात्र आहे.",
    "gu": "2.0 હેક્ટરથી ઓછી જમીન ફેર-શેર અગ્રતા માટે પાત્ર છે.",
    "bn": "২.০ হেক্টরের কম জমি ফেয়ার-শেয়ার অগ্রাধিকারের জন্য যোগ্য।",
    "te": "2.0 హెక్టార్ల కంటే తక్కువ భూమి ఫెయిర్-షేర్ ప్రాధాన్యతకు అర్హమైనది.",
    "ta": "2.0 ஹெக்டేருக்கு குறைவான நிலம் நியாய-பங்கு முன்னுரிமைக்கு தகுதியானது.",
    "kn": "2.0 ಹೆಕ್ಟೇರ್‌ಗಿಂತ ಕಡಿಮೆ ಭೂಮಿ ನ್ಯಾಯಯುತ ಪಾಲು ಆದ್ಯತೆಗೆ ಅರ್ಹವಾಗಿದೆ."
  },
  "Tractor Trolley": {
    "hi": "ट्रैक्टर ट्रॉली (Tractor Trolley)",
    "pa": "ਟਰੈਕਟਰ ਟਰਾਲੀ (Tractor Trolley)",
    "mr": "ट्रॅक्टर ट्रॉली",
    "gu": "ટ્રેક્ટર ટ્રોલી",
    "bn": "ট্র্যাক্টর ট্রলি",
    "te": "ట్రాక్టర్ ట్రాలీ",
    "ta": "டிராக்டர் டிராலி",
    "kn": "ಟ್ರಾಕ್ಟರ್ ಟ್ರಾಲಿ"
  },
  "Double Trolley": {
    "hi": "डबल ट्रॉली (Double Trolley)",
    "pa": "ਡਬਲ ਟਰਾਲੀ (Double Trolley)",
    "mr": "डबल ट्रॉली",
    "gu": "ડબલ ટ્રોલી",
    "bn": "ডাবল ট্রলি",
    "te": "డబుల్ ట్రాలీ",
    "ta": "இரட்டை டிராலி",
    "kn": "ಡಬಲ್ ಟ್ರಾಲಿ"
  },
  "Mini Truck / Pick-up": {
    "hi": "मिनी ट्रक / पिक-अप",
    "pa": "ਮਿੰਨੀ ਟਰੱਕ / ਪਿਕ-ਅੱਪ",
    "mr": "मिनी ट्रक / पिक-अप",
    "gu": "મિની ટ્રક / પિક-અપ",
    "bn": "মিনি ট্রাক / পিক-আপ",
    "te": "మినీ ట్రక్ / పికప్",
    "ta": "மினி டிரக் / பிக்-அப்",
    "kn": "ಮಿನಿ ಟ್ರಕ್ / ಪಿಕ್-ಅಪ್"
  },
  "Bullock Cart (Traditional)": {
    "hi": "बैलगाड़ी (पारंपरिक)",
    "pa": "ਬਲਦ ਗੱਡੀ (ਰਵਾਇਤੀ)",
    "mr": "बैलगाडी (पारंपारिक)",
    "gu": "બળદ ગાડું (પરંપરાગત)",
    "bn": "গরুর গাড়ি (ঐতিহ্যবাহী)",
    "te": "ఎడ్ల బండి (సాంప్రదాయ)",
    "ta": "மாட்டு வண்டி (பாரம்பரிய)",
    "kn": "ಎತ್ತಿನ ಬಂಡಿ (ಸಾಂಪ್ರದಾಯಿಕ)"
  },
  "Bullock Cart": {
    "hi": "बैलगाड़ी",
    "pa": "ਬਲਦ ਗੱਡੀ",
    "mr": "बैलगाडी",
    "gu": "બળદ ગાડું",
    "bn": "গরুর গাড়ি",
    "te": "ఎడ్ల బండి",
    "ta": "மாட்டு வண்டி",
    "kn": "ಎತ್ತಿನ ಬಂಡಿ"
  },
  "Instant Gate Entry & Paperless QR Check-In": {
    "hi": "त्वरित गेट प्रवेश व पेपरलेस क्यूआर चेक-इन",
    "pa": "ਤੁਰੰਤ ਗੇਟ ਐਂਟਰੀ ਅਤੇ ਪੇਪਰ ਰਹਿਤ ਕਿਊਆਰ ਚੈੱਕ-ਇਨ",
    "mr": "झटपट गेट प्रवेश आणि पेपरलेस क्यूआर चेक-इन",
    "gu": "ત્વરિત ગેટ પ્રવેશ અને પેપરલેસ QR ચેક-ઇન",
    "bn": "তাত্ক্ষণিক গেট এন্ট্রি এবং পেপারলেস কিউআর চেক-ইন",
    "te": "తక్షణ గేట్ ప్రవేశం & పేపర్‌లెస్ QR చెక్-ఇన్",
    "ta": "உடனடி கேட் நுழைவு & காகிதமற்ற QR செக்-இன்",
    "kn": "ತ್ವರಿತ ಗೇಟ್ ಪ್ರವೇಶ ಮತ್ತು ಪೇಪರ್‌ಲೆಸ್ QR ಚೆಕ್-ಇನ್"
  },
  "Universal Rural Inclusivity Service": {
    "hi": "सार्वभौमिक ग्रामीण समावेशिता सेवा",
    "pa": "ਸਰਵਵਿਆਪੀ ਪੇਂਡੂ ਸਮਾਵੇਸ਼ੀ ਸੇਵਾ",
    "mr": "सार्वत्रिक ग्रामीण सर्वसमावेशकता सेवा",
    "gu": "સાર્વત્રિક ગ્રામીણ સમાવેશી સેવા",
    "bn": "সার্বজনীন গ্রামীণ অন্তর্ভুক্তি পরিষেবা",
    "te": "సార్వత్రిక గ్రామీణ సమ్మిళిత సేవ",
    "ta": "உலகளாவிய கிராமப்புற உள்ளடக்கல் சேவை",
    "kn": "ಸಾರ್ವತ್ರಿಕ ಗ್ರಾಮೀಣ ಒಳಗೊಳ್ಳುವಿಕೆ ಸೇವೆ"
  },
  "🟢 RADAR CLEAR: ACTIVE PACING": {
    "hi": "🟢 मौसम साफ: सामान्य तुलाई जारी",
    "pa": "🟢 ਮੌਸਮ ਸਾਫ਼: ਆਮ ਤੁਲਾਈ ਜਾਰੀ",
    "mr": "🟢 हवामान स्वच्छ: सुरळीत कामकाज",
    "gu": "🟢 હવામાન ચોખ્ખું: સામાન્ય કામગીરી",
    "bn": "🟢 আকাশ পরিষ্কার: নিয়মিত ওজন চলছে",
    "te": "🟢 వాతావరణం క్లియర్: సాధారణ వేగం",
    "ta": "🟢 வானிலை தெளிவு: வழக்கமான செயல்பாடு",
    "kn": "🟢 ಹವಾಮಾನ ಸ್ಪಷ್ಟ: ಸಾಮಾನ್ಯ ಕಾರ್ಯಾಚರಣೆ"
  },
  "Normal procurement condition": {
    "hi": "सामान्य खरीद स्थिति",
    "pa": "ਆਮ ਖਰੀਦ ਸਥਿਤੀ",
    "mr": "सामान्य खरेदी परिस्थिती",
    "gu": "સામાન્ય ખરીદી સ્થિતિ",
    "bn": "স্বাভাবিক সংগ্রহ পরিস্থিতি",
    "te": "సాధారణ సేకరణ పరిస్థితి",
    "ta": "வழக்கமான கொள்முதல் நிலை",
    "kn": "ಸಾಮಾನ್ಯ ಖರೀದಿ ಪರಿಸ್ಥಿತಿ"
  },
  "Threshold for pause: >70%": {
    "hi": "रोक की सीमा: >70%",
    "pa": "ਰੋਕਣ ਦੀ ਸੀਮਾ: >70%",
    "mr": "थांब्याची मर्यादा: >70%",
    "gu": "વિરામ માટે મર્યાદા: >70%",
    "bn": "স্থগিতের মাত্রা: >৭০%",
    "te": "విరామం కోసం పరిమితి: >70%",
    "ta": "நிறுத்த வரம்பு: >70%",
    "kn": "ವಿರಾಮದ ಮಿತಿ: >70%"
  },
  "Partly Cloudy": {
    "hi": "आंशिक बादल",
    "pa": "ਅੰਸ਼ਕ ਬੱਦਲਵਾਈ",
    "mr": "अंशतः ढगाळ",
    "gu": "અંશતઃ વાદળછાયું",
    "bn": "আংশিক মেঘলা",
    "te": "పాక్షికంగా మేఘావృతం",
    "ta": "பகுதி மேகமூட்டம்",
    "kn": "ಭಾಗಶಃ ಮೋಡ"
  },
  "Doppler nowcast active": {
    "hi": "डॉपलर लाइव मॉनिटरिंग सक्रिय",
    "pa": "ਡੌਪਲਰ ਲਾਈਵ ਨਿਗਰਾਨੀ ਸਰਗਰਮ",
    "mr": "डॉपलर लाइव्ह मॉनिटरिंग सक्रिय",
    "gu": "ડોપ્લર લાઇવ મોનિટરિંગ સક્રિય",
    "bn": "ডপলার লাইভ পর্যবেক্ষণ সক্রিয়",
    "te": "డాప్లర్ లైవ్ మానిటరింగ్ యాక్టివ్",
    "ta": "டாப்ளர் நேரலை கண்காணிப்பு செயலில்",
    "kn": "ಡಾಪ್ಲರ್ ಲೈವ್ ಮಾನಿಟರಿಂಗ್ ಸಕ್ರಿಯ"
  },
  "Zero-Spoilage Climate Shield": {
    "hi": "शून्य-सड़न मौसम सुरक्षा कवच",
    "pa": "ਜ਼ੀਰੋ-ਖਰਾਬੀ ਮੌਸਮ ਸੁਰੱਖਿਆ ਸ਼ੀਲਡ",
    "mr": "शून्य-नासाडी हवामान कवच",
    "gu": "શૂન્ય-બગાડ આબોહવા કવચ",
    "bn": "শূন্য-নষ্ট আবহাওয়া সুরক্ষা কবচ",
    "te": "జీరో-స్పాయిలేజ్ వాతావరణ కవచం",
    "ta": "பூஜ்ஜிய-பாதிப்பு காலநிலை கவசம்",
    "kn": "ಶೂನ್ಯ-ಹಾಳಾಗುವಿಕೆ ಹವಾಮಾನ ಕವಚ"
  },
  "IMD Doppler Radar Automated Pacing": {
    "hi": "आईएमडी डॉपलर रडार स्वचालित नियंत्रण",
    "pa": "ਆਈਐਮਡੀ ਡੌਪਲਰ ਰਡਾਰ ਆਟੋਮੈਟਿਕ ਨਿਯੰਤਰਣ",
    "mr": "आयएमडी डॉपलर रडार स्वयंचलित नियंत्रण",
    "gu": "IMD ડોપ્લર રડાર આપમેળે નિયંત્રણ",
    "bn": "আইএমডি ডপলার রাডার স্বয়ংক্রিয় পেসিং",
    "te": "IMD డాప్లర్ రాడార్ ఆటోమేటెడ్ పేసింగ్",
    "ta": "IMD டாப்ளர் ரேடார் தானியங்கி வேகம்",
    "kn": "IMD ಡಾಪ್ಲರ್ ರಾಡಾರ್ ಸ್ವಯಂಚಾಲಿತ ನಿಯಂತ್ರಣ"
  },
  "⚡ Live Simulation Console: Operational Climate Resilience": {
    "hi": "⚡ लाइव सिमुलेशन कंसोल: परिचालन एवं मौसमी लचीलापन",
    "pa": "⚡ ਲਾਈਵ ਸਿਮੂਲੇਸ਼ਨ ਕੰਸੋਲ: ਕਾਰਜਸ਼ੀਲ ਅਤੇ ਮੌਸਮੀ ਲਚਕੀਲਾਪਨ",
    "mr": "⚡ थेट सिम्युलेशन कन्सोल: ऑपरेशनल आणि हवामान लवचिकता",
    "gu": "⚡ લાઇવ સિમ્યુલેશન કન્સોલ: ઓપરેશનલ અને ક્લાઇમેટ સ્થિતિસ્થાપકતા",
    "bn": "⚡ লাইভ সিমুলেশন কনসোল: অপারেশনাল ও জলবায়ু স্থিতিস্থাপকতা",
    "te": "⚡ లైవ్ సిమ్యులేషన్ కన్సోల్: కార్యాచరణ & వాతావరణ స్థిరత్వం",
    "ta": "⚡ நேரலை சிமுலேஷன் கன்சோல்: செயல்பாட்டு மற்றும் காலநிலை மீள்தன்மை",
    "kn": "⚡ ಲೈವ್ ಸಿಮ್ಯುಲೇಶನ್ ಕನ್ಸೋಲ್: ಕಾರ್ಯಾಚರಣೆಯ ಮತ್ತು ಹವಾಮಾನ ಸ್ಥಿತಿಸ್ಥಾಪಕತ್ವ"
  },
  "Economic & Farmer Benefits": {
    "hi": "किसानों के आर्थिक लाभ",
    "pa": "ਕਿਸਾਨਾਂ ਦੇ ਆਰਥਿਕ ਲਾਭ",
    "mr": "शेतकऱ्यांचे आर्थिक फायदे",
    "gu": "ખેડૂતોના આર્થિક ફાયદા",
    "bn": "কৃষকদের অর্থনৈতিক সুবিধা",
    "te": "రైతులకు ఆర్థిక ప్రయోజనాలు",
    "ta": "விவசாயிகளின் பொருளாதார நன்மைகள்",
    "kn": "ರೈತರಿಗೆ ಆರ್ಥಿಕ ಪ್ರಯೋಜನಗಳು"
  },
  "Government & FCI Benefits": {
    "hi": "सरकार व एफसीआई के लाभ",
    "pa": "ਸਰਕਾਰ ਅਤੇ ਐਫਸੀਆਈ ਦੇ ਲਾਭ",
    "mr": "शासन आणि एफसीआयचे फायदे",
    "gu": "સરકાર અને એફસીઆઈના ફાયદા",
    "bn": "সরকার ও এফসিআই এর সুবিধা",
    "te": "ప్రభుత్వ & FCI ప్రయోజనాలు",
    "ta": "அரசு மற்றும் FCI நன்மைகள்",
    "kn": "ಸರ್ಕಾರ ಮತ್ತು ಎಫ್‌ಸಿಐ ಪ್ರಯೋಜನಗಳು"
  },
  "Environmental & Social Benefits": {
    "hi": "पर्यावरणीय व सामाजिक लाभ",
    "pa": "ਵਾਤਾਵਰਣ ਅਤੇ ਸਮਾਜਿਕ ਲਾਭ",
    "mr": "पर्यावरणीय आणि सामाजिक फायदे",
    "gu": "પર્યાવરણીય અને સામાજિક ફાયદા",
    "bn": "পরিবেশগত ও সামাজিক সুবিধা",
    "te": "పర్యావరణ మరియు సామాజಿಕ ప్రయోజనాలు",
    "ta": "சுற்றுச்சூழல் மற்றும் சமூக நன்மைகள்",
    "kn": "ಪರಿಸರ ಮತ್ತು ಸಾಮಾಜಿಕ ಪ್ರಯೋಜನಗಳು"
  },
  "e-NAM APMC Ground Verification": {
    "hi": "ई-नाम एपीएमसी जमीनी फील्ड सत्यापन",
    "pa": "ਈ-ਨਾਮ ਏਪੀਐਮਸੀ ਜ਼ਮੀਨੀ ਫੀਲਡ ਪੜਤਾਲ",
    "mr": "ई-नाम एपीएमसी प्रत्यक्ष क्षेत्रीय पडताळणी",
    "gu": "ઇ-નામ એપીએમસી ગ્રાઉન્ડ ફિલ્ડ વેરિફિકેશન",
    "bn": "ই-নাম এপিএমসি মাঠ পর্যায় যাচাইকরণ",
    "te": "ఇ-నామ్ ఏపీఎంసీ ఫీల్డ్ ధృవీకరణ",
    "ta": "இ-நாம் ஏபிஎம்சி கள சரிபார்ப்பு",
    "kn": "ಇ-ನಾಮ್ ಎಪಿಎಂಸಿ ಕ್ಷೇತ್ರ ಪರಿಶೀಲನೆ"
  },
  "Engineered for 2,400+ APMC Mandis Nationwide": {
    "hi": "देशभर की 2,400+ एपीएमसी मंडियों के लिए तैयार",
    "pa": "ਦੇਸ਼ ਭਰ ਦੀਆਂ 2,400+ ਮੰਡੀਆਂ ਲਈ ਤਿਆਰ",
    "mr": "देशभरातील 2,400+ एपीएमसी मंड्यांसाठी डिझाइन केलेले",
    "gu": "દેશભરની 2,400+ APMC મંડીઓ માટે તૈયાર",
    "bn": "দেশব্যাপী ২,৪০০+ এপিএমসি মান্ডির জন্য প্রস্তুত",
    "te": "దేశవ్యాప్తంగా 2,400+ APMC మండీల కోసం రూపొందించబడింది",
    "ta": "நாடு முழுவதும் உள்ள 2,400+ APMC மண்டிகளுக்காக உருவாக்கப்பட்டது",
    "kn": "ದೇಶಾದ್ಯಂತ 2,400+ APMC ಮಂಡಿಗಳಿಗೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ"
  },
  "Strategic Differentiation Matrix": {
    "hi": "रणनीतिक तुलनात्मक मैट्रिक्स",
    "pa": "ਰਣਨੀਤਕ ਤੁਲਨਾਤਮਕ ਮੈਟ੍ਰਿਕਸ",
    "mr": "धोरणात्मक तुलनात्मक मॅट्रिक्स",
    "gu": "વ્યૂહાત્મક તુલનાત્મક મેટ્રિક્સ",
    "bn": "কৌশলগত তুলনামূলক ম্যাট্রিক্স",
    "te": "వ్యూహాత్మక పోలిక మాతృక",
    "ta": "மூலோபாய ஒப்பீட்டு மேட்ரிக்ஸ்",
    "kn": "ಕಾರ್ಯತಂತ್ರದ ತುಲನಾತ್ಮಕ ಮ್ಯಾಟ್ರಿಕ್ಸ್"
  },
  "Theoretical Software vs. KISAN-Q Field Architecture": {
    "hi": "किताबी सॉफ्टवेयर बनाम किसान-क्यू जमीनी आर्किटेक्चर",
    "pa": "ਕਿਤਾਬੀ ਸਾਫਟਵੇਅਰ ਬਨਾਮ ਕਿਸਾਨ-ਕਿਊ ਜ਼ਮੀਨੀ ਆਰਕੀਟੈਕਚਰ",
    "mr": "सैद्धांतिक सॉफ्टवेअर वि. किसान-क्यू फील्ड आर्किटेक्चर",
    "gu": "સૈદ્ધાંતિક સોફ્ટવેર વિ. કિસાન-ક્યૂ ફિલ્ડ આર્કિટેક્ચર",
    "bn": "তাত্ত্বিক সফটওয়্যার বনাম কিষাণ-কিউ ফিল্ড আর্কিটেকচার",
    "te": "సైద్ధాంతిక సాఫ్ట్‌వేర్ వర్సెస్ కిసాన్-క్యూ ఫీల్డ్ ఆర్కిటెక్చర్",
    "ta": "கோட்பாட்டு மென்பொருள் vs கிசான்-கியூ கள கட்டமைப்பு",
    "kn": "ಸೈದ್ಧಾಂತಿಕ ಸಾಫ್ಟ್‌ವೇರ್ ವಿರುದ್ಧ ಕಿಸಾನ್-ಕ್ಯೂ ಫೀಲ್ಡ್ ಆರ್ಕಿಟೆಕ್ಚರ್"
  },
  "Operational Audit Grade": {
    "hi": "ऑपरेशनल ऑडिट ग्रेड",
    "pa": "ਆਪ੍ਰੇਸ਼ਨਲ ਆਡਿਟ ਗ੍ਰੇਡ",
    "mr": "ऑपरेशनल ऑडिट ग्रेड",
    "gu": "ઓપરેશનલ ઓડિટ ગ્રેડ",
    "bn": "অপারেশনাল অডিট গ্রেড",
    "te": "ఆపరేషనల్ ఆడిట్ గ్రేడ్",
    "ta": "செயல்பாட்டு தணிக்கை தரம்",
    "kn": "ಕಾರ್ಯಾಚರಣೆಯ ಲೆಕ್ಕಪರಿಶೋಧನಾ ಶ್ರೇಣಿ"
  },
  "Operational Dimension": {
    "hi": "परिचालन आयाम",
    "pa": "ਕਾਰਜਸ਼ੀਲ ਪਹਿਲੂ",
    "mr": "परिचालन पैलू",
    "gu": "કામગીરી પરિમાણ",
    "bn": "অপারেশনাল মাত্রা",
    "te": "కార్యాచరణ పరిమాణం",
    "ta": "செயல்பாட்டு பரிமாணம்",
    "kn": "ಕಾರ್ಯಾಚರಣೆಯ ಆಯಾಮ"
  },
  "❌ Typical Theoretical Software (Fails in Field)": {
    "hi": "❌ सामान्य किताबी सॉफ्टवेयर (जमीन पर फेल)",
    "pa": "❌ ਆਮ ਕਿਤਾਬੀ ਸਾਫਟਵੇਅਰ (ਜ਼ਮੀਨ 'ਤੇ ਫੇਲ੍ਹ)",
    "mr": "❌ सामान्य सैद्धांतिक सॉफ्टवेअर (जमिनीवर अपयशी)",
    "gu": "❌ સામાન્ય સૈદ્ધાંતિક સોફ્ટવેર (જમીન પર નિષ્ફળ)",
    "bn": "❌ সাধারণ তাত্ত্বিক সফটওয়্যার (মাঠে ব্যর্থ)",
    "te": "❌ సాధారణ సైద్ధాంతిక సాఫ్ట్‌వేర్ (క్షేత్రంలో విఫలం)",
    "ta": "❌ பொதுவான கோட்பாட்டு மென்பொருள் (களத்தில் தோல்வி)",
    "kn": "❌ ಸಾಮಾನ್ಯ ಸೈದ್ಧಾಂತಿಕ ಸಾಫ್ಟ್‌ವೇರ್ (ಕ್ಷೇತ್ರದಲ್ಲಿ ವಿಫಲ)"
  },
  "✅ KISAN-Q Field-Hardened Architecture": {
    "hi": "✅ किसान-क्यू फील्ड आर्किटेक्चर (जमीन पर सफल)",
    "pa": "✅ ਕਿਸਾਨ-ਕਿਊ ਜ਼ਮੀਨੀ ਆਰਕੀਟੈਕਚਰ (ਕਾਮਯਾਬ)",
    "mr": "✅ किसान-क्यू फील्ड-हार्डन्ड आर्किटेक्चर (यशस्वी)",
    "gu": "✅ કિસાન-ક્યૂ ફિલ્ડ આર્કિટેક્ચર (સફળ)",
    "bn": "✅ কিষাণ-কিউ ফিল্ড-হার্ডেন্ড আর্কিটেকচার (সফল)",
    "te": "✅ కిసాన్-క్యూ ఫీల్డ్-హార్డెన్డ్ ఆర్కిటెక్చర్ (విజయవంతం)",
    "ta": "✅ கிசான்-கியூ கள-சான்றளிக்கப்பட்ட கட்டமைப்பு (வெற்றி)",
    "kn": "✅ ಕಿಸಾನ್-ಕ್ಯೂ ಫೀಲ್ಡ್-ಹಾರ್ಡನ್ಡ್ ಆರ್ಕಿಟೆಕ್ಚರ್ (ಯಶಸ್ವಿ)"
  },
  "APMC Yard Standard Operating Procedures (SOP) & Redundancy Protocols": {
    "hi": "एपीएमसी मंडी मानक संचालन प्रक्रिया (SOP) एवं आकस्मिक प्रोटोकॉल",
    "pa": "ਏਪੀਐਮਸੀ ਮੰਡੀ ਸਟੈਂਡਰਡ ਓਪਰੇਟਿੰਗ ਪ੍ਰਕਿਰਿਆਵਾਂ (SOP) ਅਤੇ ਬੈਕਅੱਪ ਪ੍ਰੋਟੋਕੋਲ",
    "mr": "एपीएमसी मार्केट मानक कार्यप्रणाली (SOP) आणि बॅकअप प्रोटोकॉल",
    "gu": "APMC મંડી માનક સંચાલન પ્રક્રિયાઓ (SOP) અને બેકઅપ પ્રોટોકોલ",
    "bn": "এপিএমসি মান্ডি স্ট্যান্ডার্ড অপারেটিং পদ্ধতি (এসওপি) ও ব্যাকআপ প্রোটোকল",
    "te": "APMC మార్కెట్ ప్రామాణిక నిర్వహణ విధానాలు (SOP) & బ్యాకప్ ప్రోటోకాల్స్",
    "ta": "APMC மண்டி நிலையான செயல்பாட்டு நடைமுறைகள் (SOP) & காப்பு நெறிமுறைகள்",
    "kn": "APMC ಮಾರುಕಟ್ಟೆ ಪ್ರಮಾಣಿತ ಕಾರ್ಯಾಚರಣಾ ಕಾರ್ಯವಿಧಾನಗಳು (SOP) ಮತ್ತು ಬ್ಯಾಕಪ್ ಪ್ರೋಟೋಕಾಲ್ಗಳು"
  },
  "Official KISAN-Q Farmer Procurement App": {
    "hi": "आधिकारिक KISAN-Q किसान खरीद मोबाइल ऐप",
    "pa": "ਅਧਿਕਾਰਤ KISAN-Q ਕਿਸਾਨ ਖਰੀਦ ਮੋਬਾਈਲ ਐਪ",
    "mr": "अधिकृत KISAN-Q शेतकरी खरेदी मोबाईल ॲप",
    "gu": "સત્તાવાર KISAN-Q ખેડૂત ખરીદી મોબાઇલ એપ્લિકેશન",
    "bn": "অফিসিয়াল KISAN-Q কৃষক সংগ্রহ মোবাইল অ্যাপ",
    "te": "అధికారిక KISAN-Q రైతు సేకరణ మొబైల్ యాప్",
    "ta": "அதிகாரப்பூர்வ KISAN-Q விவசாயி கொள்முதல் மொபைல் ஆப்",
    "kn": "ಅಧಿಕೃತ KISAN-Q ರೈತ ಖರೀದಿ ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್"
  },
  "Android Package": {
    "hi": "एंड्रॉइड पैकेज",
    "pa": "ਐਂਡਰਾਇਡ ਪੈਕੇਜ",
    "mr": "अँड्रॉइड पॅकेज",
    "gu": "એન્ડ્રોઇડ પેકેજ",
    "bn": "অ্যান্ড্রয়েড প্যাকেজ",
    "te": "ఆండ్రాయిడ్ ప్యాకేజీ",
    "ta": "ஆண்ட்ராய்டு தொகுப்பு",
    "kn": "ಆಂಡ್ರಾಯ್ಡ್ ಪ್ಯಾಕೇಜ್"
  },
  "Native Android app package for farmers & mandi operators": {
    "hi": "किसानों व मंडी ऑपरेटरों हेतु नेटिव एंड्रॉइड ऐप पैकेज",
    "pa": "ਕਿਸਾਨਾਂ ਅਤੇ ਮੰਡੀ ਸਟਾਫ ਲਈ ਐਂਡਰਾਇਡ ਐਪ ਪੈਕੇਜ",
    "mr": "शेतकरी आणि मंडी ऑपरेटर्ससाठी नेटिव्ह अँड्रॉइड ॲप पॅकेज",
    "gu": "ખેડૂતો અને મંડી ઓપરેટરો માટે નેટિવ એન્ડ્રોઇડ એપ્લિકેશન",
    "bn": "কৃষক ও মান্ডি অপারেটরদের জন্য নেটিভ অ্যান্ড্রয়েড অ্যাপ",
    "te": "రైతులు మరియు మండి ఆపరేటర్ల కోసం ఆండ్రాయిడ్ యాప్ ప్యాకేజీ",
    "ta": "விவசாயிகள் மற்றும் மண்டி ஆபரேட்டர்களுக்கான நேட்டிவ் ஆண்ட்ராய்டு ஆப்",
    "kn": "ರೈತರು ಮತ್ತು ಮಂಡಿ ಆಪರೇಟರ್‌ಗಳಿಗಾಗಿ ಸ್ಥಳೀಯ ಆಂಡ್ರಾಯ್ಡ್ ಅಪ್ಲಿಕೇಶನ್"
  },
  "Download APK": {
    "hi": "APK डाउनलोड करें",
    "pa": "APK ਡਾਊਨਲੋਡ ਕਰੋ",
    "mr": "APK डाउनलोड करा",
    "gu": "APK ડાઉનલોડ કરો",
    "bn": "APK ডাউনলোড করুন",
    "te": "APK డౌన్‌లోడ్ చేయండి",
    "ta": "APK பதிவிறக்கவும்",
    "kn": "APK ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
  },
  "Live Mobile PWA": {
    "hi": "लाइव मोबाइल PWA",
    "pa": "ਲਾਈਵ ਮੋਬਾਈਲ PWA",
    "mr": "थेट मोबाइल PWA",
    "gu": "લાઈવ મોબાઈલ PWA",
    "bn": "লাইভ মোবাইল PWA",
    "te": "లైవ్ మొబైల్ PWA",
    "ta": "நேரலை மொபைல் PWA",
    "kn": "ಲೈವ್ ಮೊಬೈಲ್ PWA"
  },
  "Run Live in Mobile Browser": {
    "hi": "मोबाइल ब्राउज़र में सीधे चलाएं",
    "pa": "ਮੋਬਾਈਲ ਬ੍ਰਾਊਜ਼ਰ 'ਚ ਸਿੱਧਾ ਚਲਾਓ",
    "mr": "मोबाईल ब्राउझरमध्ये थेट चालवा",
    "gu": "મોબાઈલ બ્રાઉઝરમાં લાઈવ ચલાવો",
    "bn": "মোবাইল ব্রাউজারে সরাসরি চালান",
    "te": "మొబైల్ బ్రౌజర్‌లో నేరుగా అమలు చేయండి",
    "ta": "மொபைல் உலாவியில் நேரடியாக இயக்கவும்",
    "kn": "ಮೊಬೈಲ್ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ನೇರವಾಗಿ ರನ್ ಮಾಡಿ"
  },
  "Open Vite Farmer Procurement App on Port 8443": {
    "hi": "पोर्ट 8443 पर किसान मोबाइल ऐप खोलें",
    "pa": "ਪੋਰਟ 8443 'ਤੇ ਕਿਸਾਨ ਮੋਬਾਈਲ ਐਪ ਖੋਲ੍ਹੋ",
    "mr": "पोर्ट 8443 वर शेतकरी मोबाइल ॲप उघडा",
    "gu": "પોર્ટ 8443 પર ખેડૂત મોબાઇલ એપ્લિકેશન ખોલો",
    "bn": "পোর্ট ৮৪৪৩ এ কৃষক মোবাইল অ্যাপ খুলুন",
    "te": "పోర్ట్ 8443లో రైతు మొబైల్ యాప్‌ను తెరవండి",
    "ta": "போர்ட் 8443 இல் விவசாயி மொபைல் பயன்பாட்டைத் திறக்கவும்",
    "kn": "ಪೋರ್ಟ್ 8443 ನಲ್ಲಿ ರೈತ ಮೊಬೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ತೆರೆಯಿರಿ"
  },
  "Port 8443 • Zero Install": {
    "hi": "पोर्ट 8443 • बिना इंस्टॉल सीधे चालू",
    "pa": "ਪੋਰਟ 8443 • ਬਿਨਾਂ ਇੰਸਟਾਲ ਸਿੱਧਾ",
    "mr": "पोर्ट 8443 • इन्स्टॉलची गरज नाही",
    "gu": "પોર્ટ 8443 • ઇન્સ્ટોલ વગર સીધું",
    "bn": "পোর্ট ৮৪৪৩ • ইনস্টল ছাড়াই সরাসরি",
    "te": "పోర్ట్ 8443 • ఇన్‌స్టాలేషన్ అవసరం లేదు",
    "ta": "போர்ட் 8443 • நிறுவல் தேவையில்லை",
    "kn": "ಪೋರ್ಟ್ 8443 • ಇನ್‌ಸ್ಟಾಲ್ ಅಗತ್ಯವಿಲ್ಲ"
  },
  "Open App": {
    "hi": "ऐप खोलें",
    "pa": "ਐਪ ਖੋਲ੍ਹੋ",
    "mr": "ॲप उघडा",
    "gu": "એપ ખોલો",
    "bn": "অ্যাপ খুলুন",
    "te": "యాప్ తెరవండి",
    "ta": "பயன்பாட்டைத் திறக்கவும்",
    "kn": "ಅಪ್ಲಿಕೇಶನ್ ತೆರೆಯಿರಿ"
  },
  "Download ZIP": {
    "hi": "ZIP डाउनलोड करें",
    "pa": "ZIP ਡਾਊਨਲੋਡ ਕਰੋ",
    "mr": "ZIP डाउनलोड करा",
    "gu": "ZIP ડાઉનલોડ કરો",
    "bn": "ZIP ডাউনলোড করুন",
    "te": "ZIP డౌన్‌లోడ్ చేయండి",
    "ta": "ZIP பதிவிறக்கவும்",
    "kn": "ZIP ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
  },
  "Close Window": {
    "hi": "खिड़की बंद करें",
    "pa": "ਵਿੰਡੋ ਬੰਦ ਕਰੋ",
    "mr": "विंडो बंद करा",
    "gu": "વિન્ડો બંધ કરો",
    "bn": "উইন্ডো বন্ধ করুন",
    "te": "విండో మూసివేయండి",
    "ta": "சாளரத்தை மூடுக",
    "kn": "ವಿಂಡೋ ಮುಚ್ಚಿ"
  },
  "Close": {
    "hi": "बंद करें",
    "pa": "ਬੰਦ ਕਰੋ",
    "mr": "बंद करा",
    "gu": "બંધ કરો",
    "bn": "বন্ধ করুন",
    "te": "మూసివేయి",
    "ta": "மூடு",
    "kn": "ಮುಚ್ಚಿ"
  },
  "PostgreSQL Database Engine & Data Explorer": {
    "hi": "पोस्टग्रेसक्यूएल डेटाबेस इंजन व एक्सप्लोरर",
    "pa": "ਪੋਸਟਗ੍ਰੇਸ-ਕਿਊਐਲ ਡਾਟਾਬੇਸ ਇੰਜਨ",
    "mr": "पोस्टग्रेसक्यूएल डेटाबेस इंजिन",
    "gu": "પોસ્ટગ્રેસ-SQL ડેટાબેઝ એન્જિન",
    "bn": "পোস্টগ্রেসকিউএল ডাটাবেস ইঞ্জিন",
    "te": "పోస్ట్‌గ్రేస్-SQL డేటాబేస్ ఇంజిన్",
    "ta": "போஸ்ட்கிரெஸ்க்யூஎல் தரவுத்தள இயந்திரம்",
    "kn": "ಪೋಸ್ಟ್‌ಗ್ರೆಸ್-SQL ಡೇಟಾಬೇಸ್ ಎಂಜಿನ್"
  },
  "Live Relational Tables & Interactive SQL Query Console": {
    "hi": "लाइव रिलेशनल टेबल व इंटरएक्टिव एसक्यूएल क्वेरी कंसोल",
    "pa": "ਲਾਈਵ ਰਿਲੇਸ਼ਨਲ ਟੇਬਲ ਅਤੇ ਇੰਟਰਐਕਟਿਵ SQL ਕੰਸੋਲ",
    "mr": "थेट रिलेशनल टेबल्स आणि परस्परसंवादी SQL कन्सोल",
    "gu": "લાઇવ રિલેશનલ ટેબલ્સ અને ઇન્ટરેક્ટિવ SQL ક્વેરી કન્સોલ",
    "bn": "লাইভ রিলেশনাল টেবিল এবং ইন্টারেক্টিভ এসকিউএল কনসোল",
    "te": "లైవ్ రిలేషనల్ టేబుల్స్ & ఇంటరాక్టివ్ SQL క్వెరీ కన్సోల్",
    "ta": "நேரலை அட்டவணைகள் & ஊடாடும் SQL கன்சோல்",
    "kn": "ಲೈವ್ ರಿಲೇಶನಲ್ ಕೋಷ್ಟಕಗಳು ಮತ್ತು ಇಂಟರ್ಯಾಕ್ಟಿವ್ SQL ಕನ್ಸೋಲ್"
  },
  "Engine Status": {
    "hi": "इंजन स्थिति",
    "pa": "ਇੰਜਣ ਸਥਿਤੀ",
    "mr": "इंजिन स्थिती",
    "gu": "એન્જિન સ્થિતિ",
    "bn": "ইঞ্জিন স্থিতি",
    "te": "ఇంజిన్ స్థితి",
    "ta": "இயந்திர நிலை",
    "kn": "ಎಂಜಿನ್ ಸ್ಥಿತಿ"
  },
  "Database Location / URL": {
    "hi": "डेटाबेस स्थान / यूआरएल",
    "pa": "ਡਾਟਾਬੇਸ ਸਥਾਨ / URL",
    "mr": "डेटाबेस स्थान / URL",
    "gu": "ડેટાબેઝ સ્થાન / URL",
    "bn": "ডাটাবেস অবস্থান / URL",
    "te": "డేటాబేస్ స్థానం / URL",
    "ta": "தரவுத்தள இருப்பிடம் / URL",
    "kn": "ಡೇಟಾಬೇಸ್ ಸ್ಥಳ / URL"
  },
  "Persistent Disk-Backed": {
    "hi": "सुरक्षित डिस्क-संग्रहित",
    "pa": "ਸੁਰੱਖਿਅਤ ਡਿਸਕ-ਬੈਕਡ",
    "mr": "सुरक्षित डिस्क-समर्थित",
    "gu": "સુરક્ષિત ડિસ્ક-સમર્થિત",
    "bn": "সুরক্ষিত ডিস্ক-ব্যাকড",
    "te": "శాశ్వత డిస్క్-మద్దతు",
    "ta": "நிரந்தர வட்டு-ஆதரிக்கப்பட்டது",
    "kn": "ಶಾಶ್ವತ ಡಿಸ್ಕ್-ಬೆಂಬಲಿತ"
  },
  "Checking connection...": {
    "hi": "कनेक्शन जांचा जा रहा है...",
    "pa": "ਕਨੈਕਸ਼ਨ ਦੀ ਜਾਂਚ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ...",
    "mr": "कनेक्शन तपासत आहे...",
    "gu": "કનેક્શન તપાસી રહ્યું છે...",
    "bn": "সংযোগ পরীক্ষা করা হচ্ছে...",
    "te": "కనెక్షన్‌ని తనిಖీ చేస్తోంది...",
    "ta": "இணைப்பு சோதிக்கப்படுகிறது...",
    "kn": "ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ..."
  },
  "Live SQL Table Browser:": {
    "hi": "लाइव एसक्यूएल टेबल ब्राउज़र:",
    "pa": "ਲਾਈਵ SQL ਟੇਬਲ ਬ੍ਰਾਊਜ਼ਰ:",
    "mr": "थेट SQL टेबल ब्राउझर:",
    "gu": "લાઇવ SQL ટેબલ બ્રાઉઝર:",
    "bn": "লাইভ এসকিউএল টেবিল ব্রাউজার:",
    "te": "లైవ్ SQL టేబుల్ బ్రౌజర్:",
    "ta": "நேரலை SQL அட்டவணை உலாவி:",
    "kn": "ಲೈವ್ SQL ಟೇಬಲ್ ಬ್ರೌಸರ್:"
  },
  "Run SQL": {
    "hi": "एसक्यूएल चलाएं",
    "pa": "SQL ਚਲਾਓ",
    "mr": "SQL चालवा",
    "gu": "SQL ચલાવો",
    "bn": "SQL চালান",
    "te": "SQL అమలు చేయండి",
    "ta": "SQL இயக்கவும்",
    "kn": "SQL ರನ್ ಮಾಡಿ"
  },
  "Connect Remote Cloud Database (Neon / Supabase / AWS RDS)": {
    "hi": "रिमोट क्लाउड डेटाबेस जोड़ें (Neon / Supabase / AWS RDS)",
    "pa": "ਰਿਮੋਟ ਕਲਾਉਡ ਡਾਟਾਬੇਸ ਜੋੜੋ (Neon / Supabase / AWS RDS)",
    "mr": "रिमोट क्लाउड डेटाबेस जोडा (Neon / Supabase / AWS RDS)",
    "gu": "રિમોટ ક્લાઉડ ડેટાબેઝ કનેક્ટ કરો (Neon / Supabase / AWS RDS)",
    "bn": "রিমোট ক্লাউড ডাটাবেস সংযুক্ত করুন (Neon / Supabase / AWS RDS)",
    "te": "రిమోట్ క్లౌడ్ డేటాబేస్‌ను కనెక్ట్ చేయండి (Neon / Supabase / AWS RDS)",
    "ta": "தொலை கிளவுட் தரவுத்தளத்தை இணைக்கவும் (Neon / Supabase / AWS RDS)",
    "kn": "ರಿಮೋಟ್ ಕ್ಲೌಡ್ ಡೇಟಾಬೇಸ್ ಸಂಪರ್ಕಿಸಿ (Neon / Supabase / AWS RDS)"
  },
  "PostgreSQL Connection URI:": {
    "hi": "पोस्टग्रेसक्यूएल कनेक्शन यूआरआई:",
    "pa": "ਪੋਸਟਗ੍ਰੇਸ-ਕਿਊਐਲ ਕਨੈਕਸ਼ਨ URI:",
    "mr": "पोस्टग्रेसक्यूएल कनेक्शन URI:",
    "gu": "પોસ્ટગ્રેસ-SQL કનેક્શન URI:",
    "bn": "পোস্টগ্রেসকিউএল সংযোগ URI:",
    "te": "పోస్ట్‌గ్రేస్-SQL కనెక్షన్ URI:",
    "ta": "போஸ்ட்கிரெஸ்க்யூஎல் இணைப்பு URI:",
    "kn": "ಪೋಸ್ಟ್‌ಗ್ರೆಸ್-SQL ಸಂಪರ್ಕ URI:"
  },
  "Connect & Sync PostgreSQL": {
    "hi": "पोस्टग्रेसक्यूएल कनेक्ट व सिंक करें",
    "pa": "ਕਨੈਕਟ ਅਤੇ ਸਿੰਕ ਕਰੋ",
    "mr": "पोस्टग्रेसक्यूएल कनेक्ट आणि सिंक करा",
    "gu": "કનેક્ટ અને સિંક કરો",
    "bn": "কানেক্ট এবং সিঙ্ক করুন",
    "te": "కనెక్ట్ & సింక్ చేయండి",
    "ta": "இணைத்து ஒத்திசைக்கவும்",
    "kn": "ಸಂಪರ್ಕಿಸಿ & ಸಿಂಕ್ ಮಾಡಿ"
  },
  "Refresh": {
    "hi": "ताज़ा करें",
    "pa": "ਤਾਜ਼ਾ ਕਰੋ",
    "mr": "रिफ्रेश करा",
    "gu": "તાજું કરો",
    "bn": "রিফ্রেশ করুন",
    "te": "రిఫ్రెష్ చేయండి",
    "ta": "புதுப்பிக்கவும்",
    "kn": "ರಿಫ್ರೆಶ್ ಮಾಡಿ"
  },
  "Terminal command to view DB tables:": {
    "hi": "डेटाबेस टेबल देखने का टर्मिनल कमांड:",
    "pa": "ਡਾਟਾਬੇਸ ਟੇਬਲ ਦੇਖਣ ਲਈ ਕਮਾਂਡ:",
    "mr": "डेटाबेस पाहण्यासाठी टर्मिनल कमांड:",
    "gu": "ડેટાબેઝ ટેબલ જોવા માટે કમાન્ડ:",
    "bn": "ডাটাবেস টেবিল দেখার টার্মিনাল কমান্ড:",
    "te": "డేటాబೇస్ చూడటానికి టెర్మినల్ కమాండ్:",
    "ta": "தரவுத்தள அட்டவணைகளைக் காண டெர்மினல் கட்டளை:",
    "kn": "ಡೇಟಾಬೇಸ್ ಕೋಷ್ಟಕಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಟರ್ಮಿನಲ್ ಆಜ್ಞೆ:"
  },
  "PostgreSQL Schema: farmers, tokens, weighbridge_receipts, mandi_events": {
    "hi": "डेटाबेस स्कीमा: किसान, टोकन, धर्मकांटा रसीदें, मंडी इवेंट",
    "pa": "ਡਾਟਾਬੇਸ ਸਕੀਮਾ: ਕਿਸਾਨ, ਟੋਕਨ, ਵਜ਼ਨ ਰਸੀਦਾਂ, ਮੰਡੀ ਇਵੈਂਟ",
    "mr": "डेटाबेस स्कीमा: शेतकरी, टोकन, पावती, मंडी इव्हेंट",
    "gu": "ડેટાબેઝ સ્કીમા: ખેડૂતો, ટોકન, રસીદો, મંડી ઇવેન્ટ્સ",
    "bn": "ডাটাবেস স্কিমা: কৃষক, টোকেন, ওজন রসিদ, মান্ডি ইভেন্ট",
    "te": "డేటాబేస్ స్కీమా: రైతులు, టోకెన్లు, రసీదులు, ఈవెంట్లు",
    "ta": "தரவுத்தள திட்டம்: விவசாயிகள், டோக்கன்கள், ரசீதுகள், நிகழ்வுகள்",
    "kn": "ಡೇಟಾಬೇಸ್ ಸ್ಕೀಮಾ: ರೈತರು, ಟೋಕನ್‌ಗಳು, ತೂಕದ ರಸೀದಿಗಳು, ಈವೆಂಟ್‌ಗಳು"
  },
  "Engineered for real-world deployment across 2,400+ APMC mandis nationwide • 0% Middlemen • 100% Direct DBT": {
    "hi": "देशभर की 2,400+ कृषि उपज मंडियों में तैनाती हेतु निर्मित • 0% बिचौलिया • 100% प्रत्यक्ष डीबीटी",
    "pa": "ਦੇਸ਼ ਭਰ ਦੀਆਂ 2,400+ ਮੰਡੀਆਂ ਵਿੱਚ ਤਾਇਨਾਤੀ ਲਈ ਤਿਆਰ • 0% ਵਿਚੋਲਾ • 100% ਸਿੱਧਾ ਡੀਬੀਟੀ",
    "mr": "देशभरातील 2,400+ एपीएमसी मंड्यांसाठी तयार • 0% मध्यस्थ • 100% थेट डीबीटी",
    "gu": "દેશભરની 2,400+ મંડીઓ માટે તૈયાર • 0% વચેટિયા • 100% સીધું ડીબીટી",
    "bn": "দেশব্যাপী ২,৪০০+ এপিএমসি মান্ডির জন্য তৈরি • ০% মধ্যস্থতাকারী • ১০০% সরাসরি ডিবিটি",
    "te": "దేశవ్యాప్తంగా 2,400+ APMC మండీలలో విస్తరణ కోసం రూపొందించబడింది • 0% మధ్యవర్తులు • 100% ప్రత్యక్ష DBT",
    "ta": "நாடு முழுவதும் 2,400+ ஏபிஎம்சி மண்டிகளில் பயன்படுத்த வடிவமைக்கப்பட்டது • 0% இடைத்தரகர்கள் • 100% நேரடி DBT",
    "kn": "ದೇಶಾದ್ಯಂತ 2,400+ APMC ಮಂಡಿಗಳಲ್ಲಿ ನಿಯೋಜನೆಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ • 0% ಮಧ್ಯವರ್ತಿಗಳು • 100% ನೇರ DBT"
  },
  "KISAN-Q: Smart Slot Booking & e-NAM Mandi Procurement": {
    "hi": "KISAN-Q: स्मार्ट स्लॉट बुकिंग और ई-नाम मंडी खरीद",
    "pa": "KISAN-Q: ਸਮਾਰਟ ਸਲਾਟ ਬੁਕਿੰਗ ਅਤੇ ਈ-ਨਾਮ ਮੰਡੀ ਖریਦ",
    "mr": "KISAN-Q: स्मार्ट स्लॉट बुकिंग आणि ई-नाम मंडी खरेदी",
    "gu": "KISAN-Q: સ્માર્ટ સ્લોટ બુકિંગ અને ઇ-નામ મંડી ખરીદી",
    "bn": "KISAN-Q: স্মার্ট স্লট বুকিং এবং ই-নাম মান্ডি ক্রয়",
    "te": "KISAN-Q: స్మార్ట్ స్లాట్ బుకింగ్ & ఇ-నామ్ మండి కొనుగోలు",
    "ta": "KISAN-Q: ஸ்மார்ட் ஸ்லாட் புக்கிங் & இ-நாம் மண்டி கொள்முதல்",
    "kn": "KISAN-Q: ಸ್ಮಾರ್ಟ್ ಸ್ಲಾಟ್ ಬುಕಿಂಗ್ ಮತ್ತು ಇ-ನಾಮ್ ಮಂಡಿ ಖರೀದಿ"
  },
  "📱 Farmer Mobile App": {
    "hi": "📱 किसान मोबाइल ऐप",
    "pa": "📱 ਕਿਸਾਨ ਮੋਬਾਈਲ ਐਪ",
    "mr": "📱 शेतकरी मोबाईल अॅप",
    "gu": "📱 ખેડૂત મોબાઇલ એપ્લિકેશન",
    "bn": "📱 কৃষক মোবাইল অ্যাপ",
    "te": "📱 రైతు మొబైల్ యాప్",
    "ta": "📱 விவசாயி மொபைல் செயலி",
    "kn": "📱 ರೈತ ಮೊಬೈಲ್ ಆಪ್"
  },
  "Download App": {
    "hi": "ऐप डाउनलोड करें",
    "pa": "ਐਪ ਡਾਊਨਲੋਡ ਕਰੋ",
    "mr": "अॅप डाउनलोड करा",
    "gu": "એપ્લિકેશન ડાઉનલોડ કરો",
    "bn": "��্যাপ ডাউনলোড করুন",
    "te": "యాప్‌ను డౌన్‌లోడ్ చేయండి",
    "ta": "செயலியை பதிவிறக்கவும்",
    "kn": "ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
  },
  "KISAN-Q": {
    "hi": "KISAN-Q",
    "pa": "KISAN-Q",
    "mr": "KISAN-Q",
    "gu": "KISAN-Q",
    "bn": "KISAN-Q",
    "te": "KISAN-Q",
    "ta": "KISAN-Q",
    "kn": "KISAN-Q"
  },
  "| Smart Mandi Platform": {
    "hi": "| स्मार्ट मंडी प्लेटफॉर्म",
    "pa": "| ਸਮਾਰਟ ਮੰਡੀ ਪਲੇਟਫਾਰਮ",
    "mr": "| स्मार्ट मंडी प्लॅटफॉर्म",
    "gu": "| સ્માર્ટ મંડી પ્લેટફોર્મ",
    "bn": "| স্মার্ট মান্ডি প্ল্যাটফর্ম",
    "te": "| స్మార్ట్ మండి ప్లాట్‌ఫారమ్",
    "ta": "| ஸ்மார்ட் மண்டி தளம்",
    "kn": "| ಸ್ಮಾರ್ಟ್ ಮಂಡಿ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್"
  },
  "e-NAM 2.0 APMC": {
    "hi": "ई-नाम 2.0 एपीएमसी",
    "pa": "ਈ-ਨਾਮ 2.0 ਏ.ਪੀ.ਐੱਮ.ਸੀ.",
    "mr": "ई-नाम 2.0 एपीएमसी",
    "gu": "ઇ-નામ 2.0 એપીએમસી",
    "bn": "ই-নাম ২.০ এপিএমসি",
    "te": "ఇ-నామ్ 2.0 APMC",
    "ta": "இ-நாம் 2.0 APMC",
    "kn": "ಇ-ನಾಮ್ 2.0 APMC"
  },
  "★ MoAFW Certified": {
    "hi": "★ MoAFW प्रमाणित",
    "pa": "★ MoAFW ਪ੍ਰਮਾਣਿਤ",
    "mr": "★ MoAFW प्रमाणित",
    "gu": "★ MoAFW પ્રમાણિત",
    "bn": "★ MoAFW প্রত্যয়িত",
    "te": "★ MoAFW ధృవీకరించబడింది",
    "ta": "★ MoAFW சான்றளிக்கப்பட்டவை",
    "kn": "★ MoAFW ಪ್ರಮಾಣೀಕೃತ"
  },
  "National Agriculture Market": {
    "hi": "राष्ट्रीय कृषि बाजार",
    "pa": "ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ ਬਾਜ਼ਾਰ",
    "mr": "राष्ट्रीय कृषी बाजार",
    "gu": "રાષ્ટ્રીય કૃષિ બજાર",
    "bn": "জাতীয় কৃষি বাজার",
    "te": "జాతీయ వ్యవసాయ మార్కెట్",
    "ta": "தேசிய விவசாய சந்தை",
    "kn": "ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ"
  },
  "AI Fair-Share Weighbridge Queue": {
    "hi": "एआई फेयर-शेयर वेटब्रिज कतार",
    "pa": "ਏ.ਆਈ. ਫੇਅਰ-ਸ਼ੇਅਰ ਵੇਅਬ੍ਰਿਜ ਕਤਾਰ",
    "mr": "एआय फेअर-शेअर वेटब्रिज रांग",
    "gu": "એઆઈ ફેેર-શેર વેઇબ્રિજ કતાર",
    "bn": "এআই ফেয়ার-শেয়ার ওয়েজব্রিজ কিউ",
    "te": "AI ఫెయిర్-షేర్ వేబ్రిడ్జ్ క్యూ",
    "ta": "AI ஃபேர்-ஷேர் எடைமேடை வரிசை",
    "kn": "AI ಫೇರ್-ಶೇರ್ ವೇಬ್ರಿಡ್ಜ್ ಸರತಿ ಸಾಲು"
  },
  "NABL Infrared Grain Assaying": {
    "hi": "एनएबीएल इन्फ्रारेड ग्रेन एसेइंग",
    "pa": "NABL ਇਨਫਰਾਰੈੱਡ ਗ੍ਰੇਨ ���ਸੇਇੰਗ",
    "mr": "NABL इन्फ्रारेड ग्रेन असेसिंग",
    "gu": "NABL ઇન્ફ્રારેડ ગ્રેન અસેઇંગ",
    "bn": "NABL ইনফ্রারেড গ্রেন এসেয়িং",
    "te": "NABL ఇన్‌ఫ్రారెడ్ గ్రెయిన్ అసెయింగ్",
    "ta": "NABL இன்ஃப்ராரெட் தானிய மதிப்பீடு",
    "kn": "NABL ಇನ್ಫ್ರಾರೆಡ್ ಧಾನ್ಯ ಅಸೆಯಿಂಗ್"
  },
  "Direct PFMS-DBT Payouts": {
    "hi": "प्रत्यक्ष पीएफएमएस-डीबीटी भुगतान",
    "pa": "ਸਿੱਧੇ PFMS-DBT ਭੁਗਤਾਨ",
    "mr": "थेट PFMS-DBT पेमेंट",
    "gu": "સીધા PFMS-DBT ચૂકવણી",
    "bn": "সরাসরি PFMS-DBT পেআউট",
    "te": "ప్రత్యక్ష PFMS-DBT చెల్లింపులు",
    "ta": "நேரடி PFMS-DBT செலுத்துதல்கள்",
    "kn": "ನೇರ PFMS-DBT ಪಾವತಿಗಳು"
  },
  "Time:": {
    "hi": "समय:",
    "pa": "ਸਮਾਂ:",
    "mr": "वेळ:",
    "gu": "સમય:",
    "bn": "সময়:",
    "te": "సమయం:",
    "ta": "நேரம்:",
    "kn": "ಸಮಯ:"
  },
  "Sign In": {
    "hi": "साइन इन करें",
    "pa": "ਸਾਈਨ ਇਨ ਕਰੋ",
    "mr": "साइन इन करा",
    "gu": "સાઇન ઇન કરો",
    "bn": "সাইন ইন করুন",
    "te": "సైన్ ఇన్ చేయండి",
    "ta": "உள்நுழைய",
    "kn": "ಸೈನ್ ಇನ್ ಮಾಡಿ"
  },
  "Register": {
    "hi": "पंजीकरण करें",
    "pa": "ਰਜਿਸਟਰ ਕਰੋ",
    "mr": "नोंदणी करा",
    "gu": "નોંધણી કરો",
    "bn": "নিবন্ধন করুন",
    "te": "నమోదు చేసుకోండి",
    "ta": "பதிவு செய்யவும்",
    "kn": "ನೋಂದಾಯಿಸಿ"
  },
  "English (EN)": {
    "hi": "English (EN)",
    "pa": "English (EN)",
    "mr": "English (EN)",
    "gu": "English (EN)",
    "bn": "English (EN)",
    "te": "English (EN)",
    "ta": "English (EN)",
    "kn": "English (EN)"
  },
  "हिन्दी (Hindi)": {
    "hi": "हिन्दी (Hindi)",
    "pa": "हिन्दी (Hindi)",
    "mr": "हिन्दी (Hindi)",
    "gu": "हिन्दी (Hindi)",
    "bn": "हिन्दी (Hindi)",
    "te": "हिन्दी (Hindi)",
    "ta": "हिन्दी (Hindi)",
    "kn": "हिन्दी (Hindi)"
  },
  "ਪੰਜਾਬੀ (Punjabi)": {
    "hi": "ਪੰਜਾਬੀ (Punjabi)",
    "pa": "ਪੰਜਾਬੀ (Punjabi)",
    "mr": "ਪੰਜਾਬੀ (Punjabi)",
    "gu": "ਪੰਜਾਬੀ (Punjabi)",
    "bn": "ਪੰਜਾਬੀ (Punjabi)",
    "te": "ਪੰਜਾਬੀ (Punjabi)",
    "ta": "ਪੰਜਾਬੀ (Punjabi)",
    "kn": "ਪੰਜਾਬੀ (Punjabi)"
  },
  "मराठी (Marathi)": {
    "hi": "मराठी (Marathi)",
    "pa": "मराठी (Marathi)",
    "mr": "मराठी (Marathi)",
    "gu": "मराठी (Marathi)",
    "bn": "मराठी (Marathi)",
    "te": "मराठी (Marathi)",
    "ta": "मराठी (Marathi)",
    "kn": "मराठी (Marathi)"
  },
  "ગુજરાતી (Gujarati)": {
    "hi": "ગુજરાતી (Gujarati)",
    "pa": "ગુજરાતી (Gujarati)",
    "mr": "ગુજરાતી (Gujarati)",
    "gu": "ગુજરાતી (Gujarati)",
    "bn": "ગુજરાતી (Gujarati)",
    "te": "ગુજરાતી (Gujarati)",
    "ta": "ગુજરાતી (Gujarati)",
    "kn": "ગુજરાતી (Gujarati)"
  },
  "বাংলা (Bengali)": {
    "hi": "বাংলা (Bengali)",
    "pa": "বাংলা (Bengali)",
    "mr": "বাংলা (Bengali)",
    "gu": "বাংলা (Bengali)",
    "bn": "বাংলা (Bengali)",
    "te": "বাংলা (Bengali)",
    "ta": "বাংলা (Bengali)",
    "kn": "বাংলা (Bengali)"
  },
  "తెలుగు (Telugu)": {
    "hi": "తెలుగు (Telugu)",
    "pa": "తెలుగు (Telugu)",
    "mr": "తెలుగు (Telugu)",
    "gu": "తెలుగు (Telugu)",
    "bn": "తెలుగు (Telugu)",
    "te": "తెలుగు (Telugu)",
    "ta": "తెలుగు (Telugu)",
    "kn": "తెలుగు (Telugu)"
  },
  "தமிழ் (Tamil)": {
    "hi": "தமிழ் (Tamil)",
    "pa": "தமிழ் (Tamil)",
    "mr": "தமிழ் (Tamil)",
    "gu": "தமிழ் (Tamil)",
    "bn": "தமிழ் (Tamil)",
    "te": "தமிழ் (Tamil)",
    "ta": "தமிழ் (Tamil)",
    "kn": "தமிழ் (Tamil)"
  },
  "ಕನ್ನಡ (Kannada)": {
    "hi": "ಕನ್ನಡ (Kannada)",
    "pa": "ಕನ್ನಡ (Kannada)",
    "mr": "ಕನ್ನಡ (Kannada)",
    "gu": "ಕನ್ನಡ (Kannada)",
    "bn": "ಕನ್ನಡ (Kannada)",
    "te": "ಕನ್ನಡ (Kannada)",
    "ta": "ಕನ್ನಡ (Kannada)",
    "kn": "ಕನ್ನಡ (Kannada)"
  },
  "TOUR": {
    "hi": "टूर",
    "pa": "ਟੂਰ",
    "mr": "टूर",
    "gu": "ટૂર",
    "bn": "ট্যুর",
    "te": "టూర్",
    "ta": "சுற்றுலா",
    "kn": "ಸುತ್ತಾಟ"
  },
  "🎴 Zero-Smartphone IVR": {
    "hi": "🎴 ज़ीरो-स्मार्टफोन IVR",
    "pa": "🎴 ਬਿਨਾਂ-ਸਮਾਰਟਫੋਨ IVR",
    "mr": "🎴 विना-स्मार्टफोन IVR",
    "gu": "🎴 ઝીરો-સ્માર્ટફોન IVR",
    "bn": "🎴 শূন্য-স্মার্টফোন IVR",
    "te": "🎴 జీరో-స్మార్ట్‌ఫోన్ IVR",
    "ta": "🎴 ஸ்மார்ட்ஃபோன் இல்லா IVR",
    "kn": "🎴 ಜೀರೋ-ಸ್ಮಾರ್ಟ್‌ಫೋನ್ IVR"
  },
  "🔥 LIVE BONUS": {
    "hi": "🔥 लाइव बोनस",
    "pa": "🔥 ਲਾਈਵ ਬੋਨਸ",
    "mr": "🔥 लाईव्ह बोनस",
    "gu": "🔥 લાઈવ બોનસ",
    "bn": "🔥 লাইভ বোনাস",
    "te": "🔥 లైవ్ బోనస్",
    "ta": "🔥 நேரலை போனஸ்",
    "kn": "🔥 ಲೈವ್ ಬೋನಸ್"
  },
  "NEW": {
    "hi": "नया",
    "pa": "ਨਵਾਂ",
    "mr": "नवीन",
    "gu": "નવું",
    "bn": "নতুন",
    "te": "కొత్తది",
    "ta": "புதியது",
    "kn": "ಹೊಸದು"
  },
  "🌾 Wheat (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •": {
    "hi": "🌾 गेहूं (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "pa": "🌾 ਕਣਕ (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "mr": "🌾 गहू (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "gu": "🌾 ઘઉં (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "bn": "🌾 গম (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "te": "🌾 గోధుమలు (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "ta": "🌾 கோதுமை (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "kn": "🌾 ಗೋಧಿ (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •"
  },
  "🍚 Paddy (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •": {
    "hi": "🍚 धान (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "pa": "🍚 ਝੋਨਾ (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "mr": "🍚 भात (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "gu": "🍚 ડાંગર (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "bn": "🍚 ধান (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "te": "🍚 ధాన్యం (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "ta": "🍚 நெல் (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "kn": "🍚 ಭತ್ತ (धान / ਝੋਨ���) MSP ₹2,300/Qtl ▲ (+₹117) •"
  },
  "🌻 Mustard (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •": {
    "hi": "🌻 सरसों (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "pa": "🌻 ਸਰ੍ਹੋਂ (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "mr": "🌻 मोहरी (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "gu": "🌻 રાઈ (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "bn": "🌻 সরিষা (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "te": "🌻 ఆవాలు (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "ta": "🌻 கடுகு (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "kn": "🌻 ಸಾಸಿವೆ (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •"
  },
  "🚜 APMC Mandi #042: Gate 1 Smallholder Express Turnaround: 18 min •": {
    "hi": "🚜 APMC मंडी #042: गेट 1 छोटे किसानों का एक्सप्रेस टर्नअराउंड: 18 मिनट •",
    "pa": "���� APMC ਮੰਡੀ #042: ਗੇਟ 1 ਛੋਟੇ ਕਿਸਾਨਾਂ ਦਾ ਐਕਸਪ੍ਰੈੱਸ ਟਰਨਅਰਾਊਂਡ: 18 ਮਿੰਟ •",
    "mr": "🚜 APMC मंडी #042: गेट 1 अल्पभूधारक एक्सप्रेस टर्नअराउंड: 18 मिनिटे •",
    "gu": "🚜 APMC મંડી #042: ગેટ 1 નાના ખેડૂતોનું એક્સપ્રેસ ટર્નઅરાઉન્ડ: 18 મિનિટ •",
    "bn": "🚜 APMC মান্ডি #042: গেট 1 ক্ষুদ্র কৃষক এক্সপ্রেস টার্নঅ্যারাউন্ড: 18 মিনিট •",
    "te": "🚜 APMC మండి #042: గేట్ 1 సన్నకారు రైతుల ఎక్స్ప్రెస్ టర్న్‌అరౌండ్: 18 నిమిషాలు •",
    "ta": "🚜 APMC மண்டி #042: கேட் 1 சிறு விவசாயிகளின் எக்ஸ்பிரஸ் டர்ன்அரவுண்ட்: 18 நிமிடம் •",
    "kn": "🚜 APMC ಮಂಡಿ #042: ಗೇಟ್ 1 ಸಣ್ಣ ರೈತರ ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಟರ್ನ್‌ಅರೌಂಡ್: 18 ನಿಮಿಷಗಳು •"
  },
  "⛈️ IMD Doppler Radar: Clear weather across North Indian mandis •": {
    "hi": "⛈️ IMD डॉपलर रडार: उत्तर भारतीय मंडियों में साफ मौसम •",
    "pa": "⛈️ IMD ਡੌਪਲਰ ਰਡਾਰ: ਉੱਤਰੀ ਭਾਰਤੀ ਮੰਡੀਆਂ ਵਿੱਚ ਸਾਫ਼ ਮੌਸਮ •",
    "mr": "⛈️ IMD डॉपलर रडार: उत्तर भारतीय मंड्यांमध्ये स्वच्छ हवामान •",
    "gu": "⛈️ IMD ડોપ્લર રડાર: ઉત્તર ભારતીય મંડીઓમાં ચોખ્ખું વાતાવરણ •",
    "bn": "⛈️ IMD ডপলার রাডার: উত্তর ভারতীয় মান্ডিগুলিতে পরিষ্কার আবহাওয়া •",
    "te": "⛈️ IMD డాప్లర్ రాడార్: ఉత్తర భారత మండిలలో స్పష్టమైన వాతావరణం •",
    "ta": "⛈️ IMD டாப்ளர் ரேடார்: வட இந்திய மண்டிகளில் தெளிவான வானிலை •",
    "kn": "⛈️ IMD ಡಾಪ್ಲರ್ ರಾಡಾರ್: ಉತ್ತರ ಭಾರತದ ಮಂಡಿಗಳಲ್ಲಿ ಸ್ಪಷ್ಟ ಹವಾಮಾನ •"
  },
  "💰 1.77+ Crore Farmers paid via PFMS Direct Benefit Transfer •": {
    "hi": "💰 PFMS डायरेक्ट बेनिफिट ट्रांसफर के माध्यम से 1.77+ करोड़ किसानों को भुगतान •",
    "pa": "💰 PFMS ਡਾਇਰੈਕਟ ਬੈਨਿਫિટ ਟਰਾਂਸਫਰ ਰਾਹੀਂ 1.77+ ਕਰੋੜ ਕਿਸਾਨਾਂ ਨੂੰ ਭੁਗਤਾਨ •",
    "mr": "💰 PFMS डायरेक्ट बेनिफिट ट्रान्सफरद्वारे 1.77+ कोटी शेतकऱ्यांना पैसे दिले •",
    "gu": "💰 PFMS ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર દ્વારા 1.77+ કરોડ ખેડૂતોને ચૂકવણી •",
    "bn": "💰 PFMS ডিরেক্ট বেনিফিট ট্রান্সফারের মাধ্যমে ১.৭৭+ কোটি কৃষককে পেমেন্ট দেওয়া হয়েছে •",
    "te": "💰 PFMS డైరెక్ట్ బెనిఫిట్ ట్రాన్స్‌ఫర్ ద్వారా 1.77+ కోట్ల మంది రైతులకు చెల్లింపులు •",
    "ta": "💰 PFMS நேரடிப் பயன் பரிமாற்றம் (DBT) மூலம் 1.77+ கோடி விவசாயிகளுக்குப் பணம் செலுத்தப்பட்டுள்ளது •",
    "kn": "💰 PFMS ನೇರ ಲಾಭ ವರ್ಗಾವಣೆ (DBT) ಮೂಲಕ 1.77+ ಕೋಟಿ ರೈತರಿಗೆ ಪಾವತಿ •"
  },
  "🏛️ 1,361+ e-NAM Mandis Nationwide": {
    "hi": "🏛️ देश भर में 1,361+ e-NAM मंडियां",
    "pa": "🏛️ ਦੇਸ਼ ਭਰ ਵਿੱਚ 1,361+ e-NAM ਮੰਡੀਆਂ",
    "mr": "🏛️ देशभरात 1,361+ e-NAM मोंड्या",
    "gu": "🏛️ દેશભરમાં 1,361+ e-NAM મંડીઓ",
    "bn": "🏛️ দেশজুড়ে ১,৩৬১+ e-NAM মান্ডি",
    "te": "🏛️ దేశవ్యాప్తంగా 1,361+ e-NAM మండిలు",
    "ta": "🏛️ நாடு முழுவதும் 1,361+ e-NAM Mandis",
    "kn": "🏛️ ದೇಶಾದ್ಯಂತ 1,361+ e-NAM ಮಂಡಿಗಳು"
  },
  "🌾": {
    "hi": "🌾",
    "pa": "🌾",
    "mr": "🌾",
    "gu": "🌾",
    "bn": "🌾",
    "te": "🌾",
    "ta": "🌾",
    "kn": "🌾"
  },
  "🏛️": {
    "hi": "🏛️",
    "pa": "🏛️",
    "mr": "🏛️",
    "gu": "🏛️",
    "bn": "🏛️",
    "te": "🏛️",
    "ta": "🏛️",
    "kn": "🏛️"
  },
  "💳": {
    "hi": "💳",
    "pa": "💳",
    "mr": "💳",
    "gu": "💳",
    "bn": "💳",
    "te": "💳",
    "ta": "💳",
    "kn": "💳"
  },
  "Dynamic Chaos Engine Engaged:": {
    "hi": "डायनेमिक केओस इंजन सक्रिय:",
    "pa": "ਡਾਇਨਾਮਿਕ ਕੇਓਸ ਇੰਜਣ ਐਕტიਵੇਟ ਹੋ ਗਿਆ:",
    "mr": "डायनॅमिक केओस इंजिन सुरू केले:",
    "gu": "ડાયનેમિક કેઓસ ઇંજિન સક્રિય:",
    "bn": "ডাইনামিক কেওস ইঞ্জিন সক্রিয় করা হয়েছে:",
    "te": "డైనమిక్ కేయోస్ ఇంజిన్ సక్రియం చేయబడింది:",
    "ta": "டைனமிக் கேயாஸ் என்ஜின் இயக்கப்பட்டது:",
    "kn": "ಡೈನಾಮಿಕ್ ಕೆಯೋಸ್ ಇಂಜಿನ್ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ:"
  },
  "System automatically rerouted": {
    "hi": "सिस्टम ने स्वचालित रूप से रूट बदल दिया",
    "pa": "ਸਿਸਟਮ ਨੇ ਆਪਣੇ ਆਪ ਰਸਤਾ ਬਦਲ ਦਿੱਤਾ",
    "mr": "सिस्टमने आपोआप मार्ग बदलला",
    "gu": "સિસ્ટમે આપમેળે રૂટ બદલ્યો",
    "bn": "সিস্টেম স্বয়ংক্রিয়ভাবে রুট পরিবর্তন করেছে",
    "te": "సిస్టమ్ స్వయంచాలకంగా మళ్ళించబడింది",
    "ta": "சிஸ்டம் தானாகவே வழிமாற்றியது",
    "kn": "ಸಿಸ್ಟಮ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮಾರ್ಪಾಟು ಮಾಡಿದೆ"
  },
  "18 incoming tractors to Gate 2 (South Yard)": {
    "hi": "18 आने वाले ट्रैक्टरों को गेट 2 (साउथ यार्ड) की ओर",
    "pa": "18 ਆਉਣ ਵਾਲੇ ਟਰੈਕਟਰਾਂ ਨੂੰ ਗੇਟ 2 (ਸਾਊਥ ਯਾਰਡ)",
    "mr": "गेट 2 (साउथ यार्ड) कडे येणारी 18 ट्रॅक्टर",
    "gu": "ગેટ 2 (સાઉથ યાર્ડ) પર આવતા 18 ટ્રેક્ટર",
    "bn": "গেট ২ (সাউথ ইয়ার্ড)-এ আগত ১৮টি ট্রাক্টর",
    "te": "గేట్ 2 (సౌత్ యార్డ్)కి వచ్చే 18 ట్రాక్టర్లు",
    "ta": "கேட் 2 (தெற்கு யார்ட்) நோக்கி வரும் 18 டிராக்டர்கள்",
    "kn": "ಗೇಟ್ 2 (ದಕ್ಷಿಣ യാರ್ಡ್) ಗೆ ಬರುತ್ತಿರುವ 18 ಟ್ರ್ಯಾಕ���ಟರ್‌ಗಳು"
  },
  "and injected a": {
    "hi": "और इसमें शामिल किया गया",
    "pa": "ਅਤੇ ਸ਼ਾਮਲ ਕੀਤਾ",
    "mr": "आणि समाविष्ट केले",
    "gu": "અને ઉમેર્યું",
    "bn": "এবং যোগ করা হয়েছে",
    "te": "మరియు జోడించబడింది",
    "ta": "மற்றும் சேர்க்கப்பட்டது",
    "kn": "ಮತ್ತು ಸೇರಿಸಲಾಗಿದೆ"
  },
  "+15 minute Human Delay Buffer": {
    "hi": "+15 मिनट का ह्यूमन डिले बफर",
    "pa": "+15 ਮਿੰਟ ਦਾ ਹਿਊਮਨ ਡਿਲੇ ਬਫਰ",
    "mr": "+15 मिनिटांचा ह्युमन डिले बफर",
    "gu": "+15 મિનિટનો હ્યુમન ડિલે બફર",
    "bn": "+১৫ মিনিটের হিউম্যান ডিলে বাফার",
    "te": "+15 నిమిషాల హ్యూమన్ డిలే బఫర్",
    "ta": "+15 நிமிட மனித தாமத பஃபர் (Human Delay Buffer)",
    "kn": "+15 ನಿಮ���ಷಗಳ ಹ್ಯೂಮನ್ ಡಿಲೇ ಬಫರ್"
  },
  "to prevent highway gridlocks. Drivers notified via SMS.": {
    "hi": "राजमार्ग जाम को रोकने के लिए। चालकों को एसएमएस के माध्यम से सूचित किया गया।",
    "pa": "ਹਾਈਵੇਅ ਜਾಮ್ ਨੂੰ ਰੋਕਣ için। ਡਰਾਈਵਰਾਂ ਨੂੰ ਐਸ.ਐਮ.ਐਸ. ਰਾਹੀਂ ਸੂਚਿਤ ਕੀਤਾ ਗਿਆ।",
    "mr": "महामार्ग जाम रोखण्यासाठी. चालकांना एसएमएसद्वारे सूचित केले.",
    "gu": "હાઇવે જામ અટકાવવા માટે. ડ્રાઇવરોને SMS દ્વ���રા સૂચિત કરવામાં આવ્યા.",
    "bn": "হাইওয়ে যানজট রোধ করতে। ড্রাইভারদের এসএমএসের মাধ্যমে জানানো হয়েছে।",
    "te": "హైవే జామ్‌లను నివారించడానికి. డ్రైవర్‌లకు SMS ద్వారా సమాచారం అందించబడింది.",
    "ta": "highway gridlocks-ஐ தவிர்க்க. ஓட்டுநர்களுக்கு SMS மூலம் தகவல் தெரிவிக்கப்பட்டது.",
    "kn": "highway gridlocks ತಡೆಯಲು. ಚಾಲಕರಿಗೆ SMS ಮೂಲಕ ತಿಳಿಸಲಾಗಿದೆ."
  },
  "Zero Farmer Lockout Policy:": {
    "hi": "जीरो किसान लॉकआउट पॉलिसी:",
    "pa": "ਜ਼ੀਰੋ ਫਾਰਮਰ ਲਾਕਆਊਟ ਪਾਲیسی:",
    "mr": "झिरो फार्मर लॉकआउट धोरण:",
    "gu": "ઝીરો ફાર્મર લોકઆઉટ પોલિસી:",
    "bn": "জিরো ফার্মার লকআউট পলিসি:",
    "te": "జీరో ఫార్మర్ లాకౌట్ పాలసీ:",
    "ta": "Zero Farmer Lockout கொள்கை:",
    "kn": "ಜೀರೋ ಫಾರ್ಮರ್ ಲಾಕ್‌ಔಟ್ ಪಾಲಿಸಿ:"
  },
  "Local Mandi Edge PC generated tamper-proof": {
    "hi": "स्थानीय मंडी एज पीसी द्वारा जेनरेटेड टैम्पर-प्रूफ",
    "pa": "ਸਥਾਨਕ ਮੰਡੀ ਐਜ ਪੀਸੀ ਦੁਆਰਾ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਛੇੜਛਾੜ-ਰਹਿਤ",
    "mr": "स्थानिक मंडी एज पीसी द्वारे तयार केलेले छेडछाड-विरहित",
    "gu": "સ્થાનિક મંડી એજ પીસી દ્વારા જનરેટ થયેલ ટેમ્પર-પ્રૂફ",
    "bn": "স্থানীয় মান্ডি এজ পিসি দ্বারা জেনারেট করা টেম্পার-প্রুফ",
    "te": "స్థానిక మండి ఎడ్జ్ PC రూపొందించిన ట్యాంపర్-ప్రూఫ్",
    "ta": "உள்ளூர் Mandi Edge PC உருவாக்கிய tamper-proof",
    "kn": "ಸ್ಥಳೀಯ ಮಂಡಿ ಎಡ��ಜ್ PC ರಚಿಸಿದ tamper-proof"
  },
  "SHA-256 HMAC": {
    "hi": "SHA-256 HMAC",
    "pa": "SHA-256 HMAC",
    "mr": "SHA-256 HMAC",
    "gu": "SHA-256 HMAC",
    "bn": "SHA-256 HMAC",
    "te": "SHA-256 HMAC",
    "ta": "SHA-256 HMAC",
    "kn": "SHA-256 HMAC"
  },
  "offline provisional tokens. Gate boom barriers continue processing tractors uninterrupted. Manifests will auto-reconcile once state cloud is restored.": {
    "hi": "ऑफ़लाइन प्रोविजनल टोकन। गेट बूम बैरियर बिना किसी रुकावट के ट्रैक्टरों की प्रोसेसिंग जारी रखते हैं। राज्य का क्लाउड बहाल होने पर मेनिफेस्ट स्वतः रीकंसाइल हो जाएंगे।",
    "pa": "ਆਫਲਾਈਨ ਪ੍ਰੋਵਿਜ਼ਨਲ ਟੋਕਨ। ਗੇਟ ਬੂਮ ਬੈਰੀਅਰ ਬਿਨਾਂ ਕਿਸੇ ਰੁਕਾਵਟ ਦੇ ਟਰੈਕਟਰਾਂ ਦੀ ਪ੍ਰੋਸੈਸਿੰਗ ਜਾਰੀ ਰੱਖਦੇ ਹਨ। ਰਾਜ ਦਾ ਕਲਾਉਡ ਬਹਾਲ ਹੋਣ 'ਤੇ ਮੈਨੀਫੈਸਟ ਆਪਣੇ ਆਪ ��ੇਲ खा ਜਾਣਗੇ।",
    "mr": "ऑफलाइन तात्पुरते टोकन. गेट बूम बॅरियर्स ट्रॅक्टरची प्रक्रिया अखंडितपणे सुरू ठेवतात. राज्य क्लाउड पूर्ववत झाल्यावर मॅनिफेस्ट स्वयंचलितपणे जुळवले जातील.",
    "gu": "ઓફલાઇન પ્રોવિઝનલ ટોકન્સ. ગેટ બૂમ બેરિયર્સ ટ્રેક્ટરોની પ્રક્રિયા અવિરત ચાલુ રાખે છે. સ્ટેટ ક્લાઉડ પુનઃસ્થાપિત થાય એટલે મેનિફેસ્ટ્સ આપમેળે રિકન્સાઇલ થઈ જશે.",
    "bn": "অফলাইন প্রভিশনাল টোকেন। গেট বুম ব্যরিয়ার কোনো বাধা ছাড়াই ট্রাক্টর প্রসেসিং চালিয়ে যাচ্ছে। স্টেট ক্লাউড রিস্টোর হলে ম্যানিফেস্ট স্বয়ংক্রিয়ভাবে রিকনসাইল হয়ে যাবে।",
    "te": "ఆఫ్‌లైన్ ప్రొవిజనల్ టోకెన్‌లు. గేట్ బూమ్ बैरियర్లు ట్రాక్టర్ల ప్రాసెసింగ్‌ను నిరంతరాయంగా కొనసాగిస్తాయి. స్టేట్ క్లౌడ్ పునరుద్ధరించబడిన తర్వాత మేనిఫెస్ట్‌లు ఆటో-రీకన్సైల్ అవుతాయి.",
    "ta": "offline provisional tokens. Gate boom barriers தடையின்றி tractors-ஐ process செய்கின்றன. State cloud மீட்டமைக்கப்பட்டதும் Manifests auto-reconcile ஆகும்.",
    "kn": "ಆಫ್‌ಲೈನ್ ತಾತ್ಕಾಲಿಕ ಟೋಕನ್‌ಗಳು. ಗೇಟ್ ಬೂಮ್ ಬ್ಯಾರಿಯರ್‌ಗಳು ಟ್ರ್ಯಾಕ್ಟರ್‌ಗಳ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಯಾವುದೇ ಅಡೆತಡೆಯಿಲ್ಲದೆ ಮುಂದುವರಿಸುತ್ತವೆ. ರಾಜ್ಯ ಕ್ಲೌಡ್ ಮರುಸ್ಥಾಪನೆಯಾದ ಕೂಡಲೇ ಮ್ಯಾನಿಫೆಸ್ಟ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸರಿಹೊಂದಿಸಲ್ಪಡುತ್ತದೆ."
  },
  "⚠️ IMD DOPPLER RADAR EMERGENCY WEATHER PAUSE ACTIVATED": {
    "hi": "⚠️ IMD डॉपलर रडार इमरजेंसी वेदर पॉज एक्टिवेटेड",
    "pa": "⚠️ IMD ਡੌਪਲਰ ਰਡਾਰ ਐਮਰਜੈਂਸੀ ਵੈਦਰ ਪੌਜ਼ ਐਕਟੀਵੇਟਿਡ",
    "mr": "⚠️ IMD डॉपलर रडार इमर्जन्सी वेदर पॉज ॲक्टिव्हेटेड",
    "gu": "⚠️ IMD ડોપ્લર રાડર ઇમરજન્સી વેધર પોઝ એક્ટિવિટેડ",
    "bn": "⚠️ IMD ডপলার রাডার ইমার্জেন্সি ওয়েদার পজ অ্যাক্টিভেটেড",
    "te": "⚠️ IMD డాప్లర్ రాడార్ ఎమర్జెన్సీ వెదర్ పాజ్ యాక్టివేటెడ్",
    "ta": "⚠️ IMD DOPPLER RADAR EMERGENCY WEATHER PAUSE ACTIVATED",
    "kn": "⚠️ IMD ಡಾಪ್ಲರ್ ರಡಾರ್ ಎಮರ್ಜೆನ್ಸಿ ವೆದರ್ ಪಾಸ್ ಆಕ್ಟಿವೇಟೆಡ್"
  },
  "High rain probability detected. Open tractor trolleys are paused to protect grain from moisture spoilage. Rerouting to covered silos in progress.": {
    "hi": "भारी बारिश की संभावना का पता चला है। नमी से अनाज को बचाने के लिए खुले ट्रैक्टर ट्रॉलियों को रोक दिया गया है। ढके हुए साइलो की ओर मार्ग बदला जा रहा है।",
    "pa": "ਭਾਰੀ ਬਾਰਸ਼ ਦੀ ਸੰਭਾਵਨਾ ਪਾਈ ਗਈ ਹੈ। ਨਮੀ ਤੋਂ ਅਨਾਜ ਨੂੰ ਬਚਾਉਣ ਲਈ ਖੁੱਲ੍ਹੇ ਟਰੈਕਟਰ ਟਰਾਲੀਆਂ ਨੂੰ ਰੋਕ ਦਿੱਤਾ ਗਿਆ ਹੈ। ਕਵਰ ਕੀਤੇ ਸਾਈਲੋ ਵੱਲ ਰਸਤਾ ਬਦਲਿਆ ਜਾ ਰਿਹਾ ਹੈ।",
    "mr": "मुसळधार पावसाची शक्यता आढळली आहे. ओलाव्यापासून धान्याचे संरक्षण करण्यासाठी उघड्या ट्रॅक्टर ट्रॉलीज थांबवण्यात आल्या आहेत. कव्हर केलेल्या सायलोच्या दिशेने मार्ग बदलण्याचे काम सुरू आहे.",
    "gu": "વરસાદની સંભ���વના વધુ જણાઈ છે. ભેજથી અનાજને બચાવવા માટે ખુલ્લી ટ્રેક્ટર ટ્રોલીઓ અટકાવવામાં આવી છે. કવર કરેલા સાયલો તરફ રીરાઉટિંગ ચાલુ છે.",
    "bn": "ভারী বৃষ্টির সম্ভাবনা সনাক্ত করা হয়েছে। আর্দ্রতা থেকে শস্য রক্ষা করতে খোলা ট্রাক্টর ট্রলিগুলি স্থগিত করা হয়েছে। কভার করা সাইলোর দিকে রিরাউটিং চলছে।",
    "te": "భారీ వర్షపాతం సూచన గుర్తించబడింది. తేమ నుండి ధాన్యాన్ని రక్షించడానికి తెరిచిన ట్రాక్టర్ ట్రాలీలు ఆపివేయబడ్డాయి. కవర్ చేయబడిన సైలోలకు మళ్లించడం జరుగుతోంది.",
    "ta": "அதிக மழை பெய்ய வாய்ப்புள்ளது கண்டறியப்பட்டுள்ளது. ஈரப்பதத்திலி���ுந்து தானியங்களைப் பாதுகாக்க திறந்தவெளி tractor trolleys தற்காலிகமாக நிறுத்தப்பட்டுள்ளன. மூடப்பட்ட silos-க்கு மாற்றும் பணி நடைபெறுகிறது.",
    "kn": "ಹೆಚ್ಚಿನ ಮಳೆಯಾಗುವ ಸಾಧ್ಯತೆ ಪತ್ತೆಯಾಗಿದೆ. ತೇವಾಂಶದಿಂದ ಧಾನ್ಯವನ್ನು ರಕ್ಷಿಸಲು ತೆರೆದ ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರಾಲಿಗಳನ್ನು ನಿಲ್ಲಿಸಲಾಗಿದೆ. ಮುಚ್ಚಿದ ಸೈಲೋಗಳಿಗೆ ಮರುಮಾರ್ಗ ಕಲ್ಪಿಸುವ ಕೆಲಸ ನಡೆಯುತ್ತಿದೆ."
  },
  "FROM YOUR FARM TO THE MANDI": {
    "hi": "आपके खेत से मंडी तक",
    "pa": "ਤੁਹਾਡੇ ਖੇਤ ਤੋਂ ਮੰਡੀ ਤੱਕ",
    "mr": "तुमच्या शेतातून मंडीपर्यंत",
    "gu": "તમારા ખેતરથી મંડી સુધી",
    "bn": "আপনার খামার থেকে মান্ডি পর্যন্ত",
    "te": "మీ పొలం నుండి మండ��� వరకు",
    "ta": "உங்கள் பண்ணையிலிருந்து மண்டிக்கு",
    "kn": "ನಿಮ್ಮ ಜಮೀನಿನಿಂದ ಮಂಡಿಗೆ"
  },
  "More time farming.": {
    "hi": "खेती के लिए अधिक समय।",
    "pa": "ਖੇਤੀ ਲਈ ਵਧੇਰੇ ਸਮਾਂ।",
    "mr": "शेतीसाठी अधिक वेळ.",
    "gu": "ખેતી માટે વધુ સમય.",
    "bn": "চাষাবাদের জন্য আরও বেশি সময়।",
    "te": "వ్యవసాయం చేయడానికి ఎక్కువ సమయం.",
    "ta": "விவசாயம் செய்ய அதிக நேரம்.",
    "kn": "ಕೃಷಿ ಮಾಡಲು ಹೆಚ್ಚು ಸಮಯ."
  },
  "Less time waiting.": {
    "hi": "इंतजार में कम समय।",
    "pa": "ਉਡੀਕਣ ਵਿੱਚ ਘੱਟ ਸਮਾਂ।",
    "mr": "प्रतीक्षेत कमी वेळ.",
    "gu": "પ્રતીક્ષાનો ઓછો સમય.",
    "bn": "অপেক্ষার সময় কম।",
    "te": "వేచి ఉండే సమ���ం తక్కువ.",
    "ta": "காத்திருக்கும் நேரம் குறைவு.",
    "kn": "ಕಾಯುವ ಸಮಯ ಕಡಿಮೆ."
  },
  "Plan your mandi visit with a booked time slot, carry a digital gate pass, and follow your grain through procurement. A simpler, transparent harvest journey starts here.": {
    "hi": "बुक्ड टाइम स्लॉट के साथ अपनी मंडी यात्रा की योजना बनाएं, डिजिटल गेट पास साथ रखें और खरीद प्रक्रिया के दौरान अपने अनाज पर नज़र रखें। एक सरल, पारदर्शी फसल यात्रा यहाँ से शुरू होती है।",
    "pa": "ਬੁക്ക് ਕੀਤੇ ਸਮੇਂ ਦੇ ਸਲਾਟ ਨਾਲ ਆਪਣੀ ਮੰਡੀ ��ੇਰੀ ਦੀ ਯੋਜਨਾ ਬਣਾਓ, ਡਿਜੀਟਲ ਗੇਟ ਪਾਸ ਨਾਲ ਰੱਖੋ, ਅਤੇ ਖਰੀਦ ਦੌਰਾਨ ਆਪਣੇ ਅਨਾਜ ਦੀ ਪਾਲਣਾ ਕਰੋ। ਇੱਕ ਸਰਲ, ਪਾਰਦਰਸ਼ੀ ਫਸਲ ਯਾਤਰਾ ਇੱਥੋਂ ਸ਼ुरू ਹੁੰਦੀ ਹੈ।",
    "mr": "बुकिंग केलेल्या वेळช่องसह तुमच्या मंडी भेटीचे नियोजन करा, डिजिटल गेट पास बाळगा आणि खरेदी प्रक्रियेदरम्यान तुमच्या धान्याचा मागोवा घ्या. एक सोपा, पारदर्शक पीक प्रवास येथून सुरू होतो.",
    "gu": "બુક કરેલા સમય સ્લોટ સાથે તમારી મંડી મુલાકાતનું આયોજન કરો, ડિજિટલ ગેટ પાસ સાથે રાખો, અને ખરીદી દરમિયાન તમારા અનાજને અનુસરો. એક સરળ, પારદર્શક પાકની યાત્રા અહીંથી શરૂ થાય છે.",
    "bn": "বুক করা সময়ের স্লট নিয়ে আপনার মান্ডি ভিজিট পরিকল্পনা করুন, একটি ডিজিটাল গেট পাস সাথে রাখুন এবং সংগ্রহের মাধ্যমে আপনার শস্যকে অনুসরণ করুন। একটি সহজ, স্বচ্ছ ফসল কাটার যাত্রা এখান থেকেই শুরু হয়।",
    "te": "బుక్ చేసిన టైమ్ స్లాట్‌తో మీ మండి సందర్శనను ప్లాన్ చేయండి, డిజిటల్ గేట్ పాస్‌ను తీసుకెళ్లండి మరియు కొనుగోలు ద్వారా మీ ధాన్యాన్ని ట్రాక్ చేయండి. సరళమైన, పారదర్శకమైన పంట ప్రయాణం ఇక్కడ నుండి ప్రారంభమవుతుంది.",
    "ta": "புக்கிங் செய்யப்பட்ட நேர ஸ்லாட்டுடன் உங்கள் மண்டி வருகையைத் திட்டமிடுங்கள், டிஜிட்டல் கேட் பாஸை உங்களுடன் வைத்திருங்கள், மே���ும் கொள்முதல் முழுவதும் உங்கள் தானியத்தைக் கண்காணிக்கவும். எளிய, வெளிப்படையான அறுவடை பயணம் இங்கே தொடங்குகிறது.",
    "kn": "ಬುಕ್ ಮಾಡಲಾದ ಸಮಯದ ಸ್ಲಾಟ್‌ನೊಂದಿಗೆ ನಿಮ್ಮ ಮಂಡಿ ಭೇಟಿಯನ್ನು ಯೋಜಿಸಿ, ಡಿಜಿಟಲ್ ಗೇಟ್ ಪಾಸ್ ಅನ್ನು ಒಯ್ಯಿರಿ ಮತ್ತು ಖರೀದಿ ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ನಿಮ್ಮ ಧಾನ್ಯವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ. ಸರಳವಾದ, ಪಾರದರ್ಶಕವಾದ ಬೆಳೆ ಪ್ರಯಾಣವು ಇಲ್ಲಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ."
  },
  "Book a Mandi Slot": {
    "hi": "मंडी स्लॉट बुक करें",
    "pa": "ਮੰਡੀ ਸਲਾਟ ਬੁੱਕ ਕਰੋ",
    "mr": "मंडी स्लॉट बुक करा",
    "gu": "મંડી સ્લોટ બુક કરો",
    "bn": "একটি মান্ডি স্লট বুক করুন",
    "te": "మండి స్లాట్ బుక్ ���ేయండి",
    "ta": "மண்டி ஸ்லாட்டை புக் செய்யவும்",
    "kn": "ಮಂಡಿ ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿ"
  },
  "Price Timeline": {
    "hi": "मूल्य समयरेखा",
    "pa": "ਕੀਮਤ ਸਮਾਂ-ਰੇਖਾ",
    "mr": "किंमत कालरेषा",
    "gu": "કિંમત સમયરેખા",
    "bn": "মূল্য টাইমলাইন",
    "te": "ధర కాలక్రమం",
    "ta": "விலை காலவரிசை",
    "kn": "ಬೆಲೆ ಕಾಲಾವಧಿ"
  },
  "Fullscreen Tour ↗": {
    "hi": "फुलस्क्रीन टूर ↗",
    "pa": "ਫੁੱਲਸਕ੍ਰੀਨ ਟੂਰ ↗",
    "mr": "फुलस्क्रीन टूर ↗",
    "gu": "ફુલસ્ક્રીન ટૂર ↗",
    "bn": "ফুলস্ক্রিন ট্যুর ↗",
    "te": "ఫుల్‌స్క్రీన్ టూర్ ↗",
    "ta": "முழுத்திரை சுற்றுப்பயணம் ↗",
    "kn": "ಫುಲ್‌ಸ್ಕ್ರೀನ್ ಪ್ರವಾಸ ↗"
  },
  "&#10094;": {
    "hi": "&#10094;",
    "pa": "&#10094;",
    "mr": "&#10094;",
    "gu": "&#10094;",
    "bn": "&#10094;",
    "te": "&#10094;",
    "ta": "&#10094;",
    "kn": "&#10094;"
  },
  "&#10095;": {
    "hi": "&#10095;",
    "pa": "&#10095;",
    "mr": "&#10095;",
    "gu": "&#10095;",
    "bn": "&#10095;",
    "te": "&#10095;",
    "ta": "&#10095;",
    "kn": "&#10095;"
  },
  "📢": {
    "hi": "📢",
    "pa": "📢",
    "mr": "📢",
    "gu": "📢",
    "bn": "📢",
    "te": "📢",
    "ta": "📢",
    "kn": "📢"
  },
  "What's New:": {
    "hi": "नया क्या है:",
    "pa": "ਨਵਾਂ ਕੀ ਹੈ:",
    "mr": "नवीन काय आहे:",
    "gu": "નવું શું છે:",
    "bn": "নতুন কী:",
    "te": "క్రొత్తది ఏమిటి:",
    "ta": "புதியது என்ன:",
    "kn": "ಹೊಸದೇನಿದೆ:"
  },
  "Local slot booking now works without internet &mdash; come directly to the mandi gate kiosk for instant token generation. Government MSP 2025-26 rates & 6-year price hike timeline are live.": {
    "hi": "स्थानीय स्लॉट बुकिंग अब बिना इंटरनेट के काम करती है &mdash; तत्काल टोकन जनरेशन के लिए सीधे मंडी गेट कियोस्क पर आएं। सरकार की MSP 2025-26 दरें और 6 साल की मूल्य वृद्धि की समयरेखा लाइव हैं।",
    "pa": "ਸਥਾਨਕ ਸਲਾਟ ਬੁਕਿੰਗ ਹੁਣ ਬਿਨਾਂ ਇੰਟਰਨੈਟ ਤੋਂ ਕੰਮ ਕਰਦੀ ਹੈ &mdash; ਤੁਰੰਤ ਟੋਕਨ ਬਣਾਉਣ ਲਈ ਸਿੱਧੇ ਮੰਡੀ ਗੇਟ ਕਿਓਸਕ 'ਤੇ ਆਓ। ਸਰਕਾਰੀ MSP 2025-26 ਦਰਾਂ ਅਤੇ 6 ਸਾਲਾਂ ਦੀ ਕੀਮਤ ਵਾਧੇ ਦੀ ਸਮਾਂ-ਰੇਖਾ ਲਾਈਵ ਹਨ।",
    "mr": "स्थानिक स्लॉट बुकिंग आता इंटरनेटशिवाय कार्य करते &mdash; त्वरित टोकन जनरेशनसाठी थेट मंडी गेट किऑस्कवर या. सरकारी MSP 2025-26 दर आणि 6 वर्षांची किंमत वाढ कालरेषा ला���வ் आहेत.",
    "gu": "સ્થાનિક સ્લોટ બુકિંગ હવે ઇન્ટરનેટ વિના કામ કરે છે &mdash; ત્વરિત ટોકન જનરેશન માટે સીધા મંડી ગેટ કિઓસ્ક પર આવો. સરકારી MSP 2025-26 દરો અને 6 વર્ષની કિંમત વૃદ્ધિ સમયરેખા લાઇવ છે.",
    "bn": "স্থানীয় স্লট বুকিং এখন ইন্টারনেট ছাড়াই কাজ করে &mdash; তাৎক্ষণিক টোকেন তৈরি করতে সরাসরি মান্ডি গেট কিওস্কে আসুন। সরকারি MSP ২০২৫-২৬ হার এবং ৬ বছরের মূল্য বৃদ্ধির টাইমলাইন লাইভ রয়েছে।",
    "te": "స్థానిక స్లాట్ బుకింగ్ ఇప్పుడు ఇంటర్నెట్ లేకుండా పనిచేస్తుంది &mdash; తక్షణ టోకన్ జనరేషన్ కోసం నేరుగా మండి గేట్ కియోస్క్‌కి రండి. ప్రభుత్వ MSP 2025-26 రేట్లు & 6 ���ంవత్సరాల ధరల పెరుగుదల కాలక్రమం లైవ్‌లో ఉన్నాయి.",
    "ta": "உள்ளூர் ஸ்லாட் புக்கிங் இப்போது இன்டர்நெட் இல்லாமல் செயல்படுகிறது &mdash; உடனடி டோக்கன் உருவாக்க நேரடியாக மண்டி கேட் கியோஸ்க்கிற்கு வரவும். அரசு MSP 2025-26 விலைகள் மற்றும் 6 ஆண்டு விலை உயர்வு காலவரிசை லைவ்வில் உள்ளன.",
    "kn": "ಸ್ಥಳೀಯ ಸ್ಲಾಟ್ ಬುಕಿಂಗ್ ಈಗ ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ &mdash; ತತ್ಕ್ಷಣದ ಟೋಕನ್ ಜನರೇಷನ್‌ಗಾಗಿ ನೇರವಾಗಿ ಮಂಡಿ ಗೇಟ್ ಕಿಯೋಸ್ಕ್‌ಗೆ ಬನ್ನಿ. ಸರ್ಕಾರದ MSP 2025-26 ದರಗಳು ಮತ್ತು 6 ವರ್ಷಗಳ ಬೆಲೆ ಏರಿಕೆಯ ಕಾಲಾವಧಿ ಲೈವ್ ಆಗಿದೆ."
  },
  "View Price Timeline": {
    "hi": "मूल्य समयरेखा देख��ं",
    "pa": "ਕੀਮਤ ਸਮਾਂ-ਰੇਖਾ ਦੇਖੋ",
    "mr": "किंमत कालरेषा पहा",
    "gu": "કિંમત સમયરેખા જુઓ",
    "bn": "মূল্য টাইমলাইন দেখুন",
    "te": "ధర కాలక్రమాన్ని వీక్షించండి",
    "ta": "விலை காலவரிசையைக் காண்க",
    "kn": "ಬೆಲೆ ಕಾಲಾವಧಿಯನ್ನು ವೀಕ್ಷಿಸಿ"
  },
  "&rarr;": {
    "hi": "&rarr;",
    "pa": "&rarr;",
    "mr": "&rarr;",
    "gu": "&rarr;",
    "bn": "&rarr;",
    "te": "&rarr;",
    "ta": "&rarr;",
    "kn": "&rarr;"
  },
  "MARKET WATCH": {
    "hi": "मार्केट वॉच",
    "pa": "ਮਾਰਕੀਟ ਵ๊ਾਚ",
    "mr": "मार्केट वॉच",
    "gu": "માર્કેટ વોચ",
    "bn": "মারket ওয়াচ",
    "te": "మార్కెట్ వాచ్",
    "ta": "சந்தை கண்காணிப்பு",
    "kn": "ಮಾರುಕಟ್ಟೆ ವೀಕ್ಷಣೆ"
  },
  "Grain Price Bulletin • Current Procurement Window": {
    "hi": "अनाज मूल्य बुलेटिन • वर्तमान खरीद विंडो",
    "pa": "ਅਨਾਜ ਮੁੱਲ ਬੁਲੇਟਿਨ • ਮੌਜੂਦਾ ਖਰੀਦ ਵਿੰਡੋ",
    "mr": "धान्य किंमत बुलेटिन • वर्तमान खरेदी विंडो",
    "gu": "અનાજ ભાવ બુલેટિન • વર્તમાન ખરીદી વિન્ડો",
    "bn": "শস্যের দাম বুলেটিন • বর্তমান সংগ্রহ উইন্ডো",
    "te": "ధాన్యం ధరల బులెటిన్ • ప్రస్తుత సేకరణ విండో",
    "ta": "தானிய விலை புல்லட்டின் • தற்போதைய கொள்முதல் சாளரம்",
    "kn": "ಧಾನ್ಯ ಬೆಲೆ ಬುಲೆಟಿನ್ • ಪ್ರಸ್ತುತ ಖರೀದಿ ವಿಂಡೋ"
  },
  "View 6-Year History & Hikes": {
    "hi": "6-वर्षीय इतिहास और बढ़ोतरी देखें",
    "pa": "6-ਸਾਲ ਦਾ ਇਤਿਹਾਸ ਅਤੇ ਵਾਧਾ ਦੇਖੋ",
    "mr": "६-वर्��ाचा इतिहास आणि वाढ पहा",
    "gu": "६-વર્ષનો ઇતિહાસ અને વધારો જુઓ",
    "bn": "৬ বছরের ইতিহাস এবং বৃদ্ধি দেখুন",
    "te": "6-సంవత్సరాల చరిత్ర & పెరుగుదలలను చూడండి",
    "ta": "6 ஆண்டு வரலாறு மற்றும் உயர்வுகளைப் காண்க",
    "kn": "6-ವರ್ಷದ ಇತಿಹಾಸ ಮತ್ತು ಹೆಚ್ಚಳವನ್ನು ವೀಕ್ಷಿಸಿ"
  },
  "Bajra (बाजरा)": {
    "hi": "बाजरा (बाजरा)",
    "pa": "ਬਾਜਰਾ (बाजरा)",
    "mr": "बाजरी (बाजरा)",
    "gu": "બાજરી (बाजरा)",
    "bn": "বাজরা (बाजरा)",
    "te": "సజ్జలు (बाजरा)",
    "ta": "கம்பு (बाजरा)",
    "kn": "ಸಜ್ಜೆ (बाजरा)"
  },
  "per quintal": {
    "hi": "प्रति क्विंटल",
    "pa": "ਪ੍ਰਤੀ ਕੁਇੰਟਲ",
    "mr": "प्रति क्विंटल",
    "gu": "प्रत��� क्विंटल",
    "bn": "প্রতি কুইন্টাল",
    "te": "క్వింటాల్‌కు",
    "ta": "ஒரு குவிண்டாலுக்கு",
    "kn": "ಪ್ರತಿ ಕ್ವಿಂಟಾಲ್"
  },
  "▲ +₹125 MSP": {
    "hi": "▲ +₹125 MSP",
    "pa": "▲ +₹125 MSP",
    "mr": "▲ +₹125 MSP",
    "gu": "▲ +₹125 MSP",
    "bn": "▲ +₹125 MSP",
    "te": "▲ +₹125 MSP",
    "ta": "▲ +₹125 MSP",
    "kn": "▲ +₹125 MSP"
  },
  "Barley (जौ)": {
    "hi": "जौ (जौ)",
    "pa": "ਜੌਂ (जौ)",
    "mr": "सातू / बार्ली (जौ)",
    "gu": "जौ (जौ)",
    "bn": "যব (जौ)",
    "te": "బಾರ್లీ (जौ)",
    "ta": "பார்லி (जौ)",
    "kn": "ಯಾರ್ವಿ / ಬಾರ್ಲಿ (जौ)"
  },
  "▲ +₹115 MSP": {
    "hi": "▲ +₹115 MSP",
    "pa": "▲ +₹115 MSP",
    "mr": "▲ +₹115 MSP",
    "gu": "▲ +₹115 MSP",
    "bn": "▲ +₹115 MSP",
    "te": "▲ +₹115 MSP",
    "ta": "▲ +₹115 MSP",
    "kn": "▲ +₹115 MSP"
  },
  "🌽": {
    "hi": "🌽",
    "pa": "🌽",
    "mr": "🌽",
    "gu": "🌽",
    "bn": "🌽",
    "te": "🌽",
    "ta": "🌽",
    "kn": "🌽"
  },
  "Maize (मक्का)": {
    "hi": "मक्का (Maize)",
    "pa": "ਮੱਕਾ (Maize)",
    "mr": "मका (Maize)",
    "gu": "मक्का (Maize)",
    "bn": "ভুট্টা (Maize)",
    "te": "మక్కజొన్న (Maize)",
    "ta": "மக்காச்சோளம் (Maize)",
    "kn": "ಮುಕ್ಕೆಜೋಳ (Maize)"
  },
  "▲ +₹135 MSP": {
    "hi": "▲ +₹135 MSP",
    "pa": "▲ +₹135 MSP",
    "mr": "▲ +₹135 MSP",
    "gu": "▲ +₹135 MSP",
    "bn": "▲ +₹135 MSP",
    "te": "▲ +₹135 MSP",
    "ta": "▲ +₹135 MSP",
    "kn": "▲ +₹135 MSP"
  },
  "🍚": {
    "hi": "🍚",
    "pa": "🍚",
    "mr": "🍚",
    "gu": "🍚",
    "bn": "🍚",
    "te": "🍚",
    "ta": "🍚",
    "kn": "🍚"
  },
  "Paddy Common": {
    "hi": "धान (कॉमन)",
    "pa": "ਝੋਨਾ (ਆਮ)",
    "mr": "धान (सामान्य)",
    "gu": "डंगार (ಸಾમાન્ય/Common)",
    "bn": "ধান (সাধারণ)",
    "te": "వరి సాధారణ",
    "ta": "நெல் பொது",
    "kn": "ಭತ್ತ (ಸಾಮಾನ್ಯ)"
  },
  "▲ +₹117 MSP": {
    "hi": "▲ +₹117 MSP",
    "pa": "▲ +₹117 MSP",
    "mr": "▲ +₹117 MSP",
    "gu": "▲ +₹117 MSP",
    "bn": "▲ +₹117 MSP",
    "te": "▲ +₹117 MSP",
    "ta": "▲ +₹117 MSP",
    "kn": "▲ +₹117 MSP"
  },
  "Wheat (गेहूं)": {
    "hi": "गेहूं (Wheat)",
    "pa": "ਕਣਕ (Wheat)",
    "mr": "गहू (Wheat)",
    "gu": "ઘઉં (Wheat)",
    "bn": "গম (Wheat)",
    "te": "గోధుమ (Wheat)",
    "ta": "கோதுமை (Wheat)",
    "kn": "ಗೋಧಿ (Wheat)"
  },
  "▲ +₹100 MSP": {
    "hi": "▲ +₹100 MSP",
    "pa": "▲ +₹100 MSP",
    "mr": "▲ +₹100 MSP",
    "gu": "▲ +₹100 MSP",
    "bn": "▲ +₹100 MSP",
    "te": "▲ +₹100 MSP",
    "ta": "▲ +₹100 MSP",
    "kn": "▲ +₹100 MSP"
  },
  "🌻": {
    "hi": "🌻",
    "pa": "🌻",
    "mr": "🌻",
    "gu": "🌻",
    "bn": "🌻",
    "te": "🌻",
    "ta": "🌻",
    "kn": "🌻"
  },
  "Mustard (सरसों)": {
    "hi": "सरसों (Mustard)",
    "pa": "सर੍ਹੋਂ (Mustard)",
    "mr": "मोहरी (Mustard)",
    "gu": "राई (Mustard)",
    "bn": "সরিষা (Mustard)",
    "te": "ఆవాలు (Mustard)",
    "ta": "கடுகு (Mustard)",
    "kn": "ಸಾಸಿವೆ (Mustard)"
  },
  "▲ +₹200 MSP": {
    "hi": "▲ +₹200 MSP",
    "pa": "▲ +₹200 MSP",
    "mr": "▲ +₹200 MSP",
    "gu": "▲ +₹200 MSP",
    "bn": "▲ +₹200 MSP",
    "te": "▲ +₹200 MSP",
    "ta": "▲ +₹200 MSP",
    "kn": "▲ +₹200 MSP"
  },
  "01 / Slot Scheduling": {
    "hi": "01 / स्लॉट शेड्यूलिंग",
    "pa": "01 / ਸਲਾਟ ਸ਼ਡਿਊਲਿੰग",
    "mr": "01 / स्लॉट शेड्यूलिंग",
    "gu": "01 / સ્લોટ શેડ્યુલિંગ",
    "bn": "01 / স্লট সময়সূচী",
    "te": "01 / స్లాట్ షెడ్యూలింగ్",
    "ta": "01 / ஸ்லாட் திட்டமிடல்",
    "kn": "01 / ಸ್ಲಾಟ್ ವೇಳಾಪಟ್ಟಿ"
  },
  "Pre-Book Your Mandi Arrival": {
    "hi": "अपनी मंडी आवक पहले से बुक करें",
    "pa": "ਆਪਣ��� ਮੰਡੀ ਆਮਦ ਪਹਿਲਾਂ ਹੀ ਬੁੱਕ ਕਰੋ",
    "mr": "तुमची मंडी आवक आधीच बुक करा",
    "gu": "તમારી મંડી આવક અગાઉથી બુક કરો",
    "bn": "আপনার মান্ডি আগমন আগে থেকেই বুক করুন",
    "te": "మీ మండి రాకను ముందే బుక్ చేసుకోండి",
    "ta": "உங்கள் மண்டி வருகையை முன்கூட்டியே பதிவு செய்யவும்",
    "kn": "ನಿಮ್ಮ ಮಂಡಿ ಆಗಮನವನ್ನು ಮುಂಚಿತವಾಗಿ ಬುಕ್ ಮಾಡಿ"
  },
  "Pick a 1-hour unloading window up to 7 days ahead. Receive a secure QR gate pass on your phone so you skip the 18-hour highway queue.": {
    "hi": "7 दिन पहले तक 1 घंटे की अनलोडिंग विंडो चुनें। अपने फोन पर एक सुरक्षित QR गेट पास प्राप्त करें ताकि आप 18 घंटे की हाईवे लाइन से बच सकें।",
    "pa": "7 ਦਿਨ ਪਹਿਲਾਂ ਤੱਕ 1 ਘੰਟੇ ਦੀ ਅਨਲੋਡਿੰਗ ਵਿੰਡੋ ਚੁਣੋ। ਆਪਣੇ ਫ਼ੋਨ 'ਤੇ ਇੱਕ ਸੁਰੱਖਿਅਤ QR ਗੇਟ ਪਾਸ ਪ੍ਰਾਪਤ ਕਰੋ ਤਾਂ ਜੋ ਤੁਸੀਂ 18 ਘੰਟੇ ਦੀ ਹਾਈਵੇਅ ਲਾਈਨ ਤੋਂ ਬੱਚ ਸਕੋ।",
    "mr": "7 दिवस अगोदरपर्यंत 1 तासाची अनलोडिंग विंडो निवडा. तुमच्या फोनवर सुरक्षित QR गेट पास मिळवा जेणेकरून तुम्ही 18 तासांच्या हायवे रांगेतून सुटू शकाल.",
    "gu": "7 દિવસ અગાઉ સુધી 1 કલાકની અનલોડિંગ વિન્ડો પસંદ કરો. તમારા ફોન પર સુરક્ષિત QR ગેટ પાસ મેળવો જેથી તમે 18 કલાકની હાઇવે ક્યૂ છોડી શકો.",
    "bn": "৭ দিন পর্যন্ত এগিয়ে ১ ঘণ্টার আনলোডিং উইন্ডো বেছে নিন। আপনার ফোনে একটি নিরাপদ QR গেট পাস পান যাতে আপনি ১৮ ঘণ্টার হাইওয়ে লাইন এড়াতে পারেন।",
    "te": "7 రోజుల ముందు వరకు 1 గంట అన్‌లాడింగ్ విండోను ఎంచుకోండి. మీ ఫోన్‌లో సురక్షితమైన QR గేట్ పాస్‌ను స్వీకరించండి తద్వారా మీరు 18 గంటల హైవే క్యూను దాటవేయవచ్చు.",
    "ta": "7 நாட்களுக்கு முன்பு வரை 1 மணி நேர இறக்குமதி சாளரத்தைத் தேர்ந்தெடுக்கவும். உங்கள் தொலைபேசியில் பாதுகாப்பான QR கேட் பாஸைப் பெறுங்கள், இதனால் நீங்கள் 18 மணி நேர நெடுஞ்சாலை வரிசையைத் தவிர்க்கலாம்.",
    "kn": "7 ದಿನಗಳ ಮುಂಚಿತವಾಗಿ 1 ಗಂಟೆಯ ಅನ್ಲೋಡಿಂಗ್ ವಿಂಡೋವನ್ನು ಆಯ್ಕೆಮಾಡಿ. ನಿಮ್ಮ ಫೋನ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತ QR ಗೇಟ್ ಪಾಸ್ ಅನ್ನು ಸ್ವೀಕರಿಸಿ ಇದರಿಂದ ನೀವು 18 ಗಂಟೆಗಳ ಹೆದ್ದಾರಿ ಸರತಿಯನ್ನು ತಪ್ಪಿಸಬಹುದು."
  },
  "02 / Quality Assaying": {
    "hi": "02 / गुणवत्ता परीक्षण",
    "pa": "02 / ਗੁਣਵੱਤਾ ਜਾਂਚ",
    "mr": "02 / गुणवत्ता चाचणी",
    "gu": "02 / ગુણવત્તા ચકાસણી",
    "bn": "02 / মান পরীক্ষা",
    "te": "02 / నాణ్యత పరీక్ష",
    "ta": "02 / தரப் பரிசோதனை",
    "kn": "02 / ಗುಣಮಟ್ಟ ಪರೀಕ್ಷೆ"
  },
  "NABL Infrared Grain Testing": {
    "hi": "NABL इन्फ्रारेड अनाज परीक्षण",
    "pa": "NABL ਇਨਫਰਾਰੈੱਡ ਅਨਾਜ ਟੈਸਟਿੰਗ",
    "mr": "NABL इन्फ्रारेड धान्य चाचणी",
    "gu": "NABL ઇન્ફ્રારેડ અનાજ પરીક્ષણ",
    "bn": "NABL ইনফ্রারেড শস্য পরীক্ষা",
    "te": "NABL ఇన్‌ఫ్రారెడ్ ధాన్యం పరీక్ష",
    "ta": "NABL அகச்சிவப்பு தானிய சோதனை",
    "kn": "NABL ಇನ್ಫ್ರಾರೆಡ್ ಧಾನ್ಯ ಪರೀಕ್ಷೆ"
  },
  "Instant digital assessment of moisture, foreign matter, and broken grain percentage at Gate 1. Grade A grain earns guaranteed zero dispute clearance.": {
    "hi": "गेट 1 पर नमी, बाहरी पदार्थों और टूटे हुए अनाज के प्रतिशत का तत्काल डिजिटल मूल्यांकन। ग्रेड A अनाज को गारंटीड शून्य विवाद निकासी मिलती है।",
    "pa": "ਗੇਟ 1 'ਤੇ ਨਮੀ, ਬਾਹਰੀ ਪਦਾਰਥਾਂ ਅਤੇ ਟੁੱਟੇ ਹੋਏ ਦਾਣਿਆਂ ਦੀ ਪ੍ਰਤੀਸ਼ਤਤਾ ਦਾ ਤੁਰੰਤ ਡਿਜੀਟਲ ਮੁਲਾਂਕਣ। ਗ੍ਰੇਡ A ਅਨਾਜ ਨੂੰ ਗਰੰਟੀਸ਼ੁਦਾ ਜ਼ੀਰੋ ਵਿਵਾਦ ਕਲੀਅਰੈਂਸ ਮਿਲਦੀ ਹੈ।",
    "mr": "गेट 1 वर ओलावा, परकीय पदार्थ आणि तुटलेल्या धान्याच्या टक्केवारीचे त्वरित डिजिटल मूल्यांकन. ग्रेड A धान्याला हमीदार शून्य वाद मंजुर�� मिळते.",
    "gu": "ગેટ 1 પર ભેજ, વિદેશી પદાર્થો અને તૂટેલા અનાજની ટકાવારીનું ત્વરિત ડિજિટલ મૂલ્યાંકન. ગ્રેડ A અનાજને ગેરંટીડ શૂન્ય વિવાદ ક્લિયરન્સ મળે છે.",
    "bn": "গেট ১-এ আর্দ্রতা, বৈদেশিক বস্তু এবং ভাঙা দানার শতাংশের তাৎক্ষণিক ডিজিটাল মূল্যায়ন। গ্রেড A শস্য গ্যারান্টিযুক্ত শূন্য বিরোধ ছাড়পত্র পায়।",
    "te": "గేట్ 1 వద్ద తేమ, విదేశీ పదార్థాలు మరియు విరిగిన ధాన్యం శాతం యొక్క తక్షణ డిజిటల్ అంచనా. గ్రేడ్ A ధాన్యం హామీతో కూడిన సున్నా వివాద క్లియరెన్స్‌ను పొందుతుంది.",
    "ta": "கேட் 1 இல் ஈரப்பதம், வெளிநாட்டு பொருட்கள் மற்றும் உடைந்��� தானிய சதவீதத்தின் உடனடி டிஜிட்டல் மதிப்பீடு. கிரேடு A தானியம் உத்தரவாதம் அளிக்கப்பட்ட பூஜ்ஜிய தகராறு அனுமதியைப் பெறுகிறது.",
    "kn": "ಗೇಟ್ 1 ನಲ್ಲಿ ತೇವಾಂಶ, ಬಾಹ್ಯ ವಸ್ತುಗಳು ಮತ್ತು ಮುರಿದ ಧಾನ್ಯದ ಶೇಕಡಾವಾರು ತಕ್ಷಣದ ಡಿಜಿಟಲ್ ಮೌಲ್ಯಮಾಪನ. ಗ್ರೇಡ್ A ಧಾನ್ಯವು ಖಾತರಿಯ ಶೂನ್ಯ ವಿವಾದ ತೆರವು ಪಡೆಯುತ್ತದೆ."
  },
  "03 / Market Intelligence": {
    "hi": "03 / बाजार खुफिया (मार्केट इंटेलिजेंस)",
    "pa": "03 / ਬਾਜ਼ਾਰ ਖੁਫੀਆ (ਮਾਰਕੀਟ ਇੰਟੈਲੀਜੈਂਸ)",
    "mr": "03 / बाजार माहिती (मार्केट इंटेलिजेंस)",
    "gu": "03 / બજાર ગુપ્તચર (માર્કેટ ઇન્ટેલિજન્સ)",
    "bn": "03 / বাজার গোয়েন্দা (মার্কেট ইন্টেলিজেন্স)",
    "te": "03 / మార్కెట్ ఇంటెలిజెన్స్",
    "ta": "03 / சந்தை நுண்ணறிவு",
    "kn": "03 / ಮಾರುಕಟ್ಟೆ ಗುಪ್ತಚರ (ಮಾರ್ಕೆಟ್ ಇಂಟೆಲಿಜೆನ್ಸ್)"
  },
  "Live Multi-Mandi Price Feeds": {
    "hi": "लाइव बहु-मंडी मूल्य फ़ीड",
    "pa": "ਲਾਈਵ ਬਹੁ-ਮੰਡੀ ਕੀਮਤ ਫ਼ੀਡ",
    "mr": "लाइव्ह बहु-मंडी किंमत फीड",
    "gu": "લાઇવ બહુ-મંડી કિંમત ફીડ",
    "bn": "লাইভ বহু-মান্ডি মূল্য ফিড",
    "te": "లైవ్ మల్టీ-మండి ధర ఫీడ్స్",
    "ta": "லைவ் பல-மண்டி விலை ஊட்டங்கள்",
    "kn": "ಲೈವ್ ಬಹು-ಮಂಡಿ ಬೆಲೆ ಫೀಡ್‌ಗಳು"
  },
  "Real-time APMC arrivals, daily clearing rates, 6-year MSP historical timelines, and algorithmic right-to-sell advisories.": {
    "hi": "वास्तविक समय APMC आवक, दैनिक समाशोधन दरें, 6-वर्षीय MSP ऐतिहासिक समयरेखा, और एल्गोरिथम बेचने के अधिकार की सलाह।",
    "pa": "ਅਸਲ-ਸਮੇਂ ਦੀਆਂ APMC ਆਮਦ, ਰੋਜ਼ਾਨਾ ਕਲੀਅਰਿੰਗ ਦਰਾਂ, 6-ਸਾਲਾ MSP ਇਤਿਹਾਸਕ ਸਮਾਂ-ਸਾਰਣੀ, ਅਤੇ ਐਲਗੋਰਿਦਮਿਕ ਵੇਚਣ ਦੇ ਅਧਿਕਾਰ ਦੀ ਸਲਾਹ।",
    "mr": "रिअल-टाइम APMC आवक, दैनिक क्लिअरिंग दर, 6-वर्षीय MSP ऐतिहासिक कालरेषा, आणि अल्गोरिदमिक विक्रीचा अधिकार सल्ला.",
    "gu": "વાસ્તવિક સમયની APMC આવક, દૈનિક ક્લિયરિંગ દરો, 6-વર્ષીય MSP ಐતિહાસિક સમયરેખા, અને એલ્ગોરિધમિક વેચવાના અધિકારની સલાહ.",
    "bn": "রিয়েল-টাইম APMC আগমন, দৈনিক ক্লিয়ারিং হার, ৬-বছরের MSP ঐতিহাসিক সময়রেখা এবং অ্যালগরিদমিক বিক্রয়ের অধিকার পরামর্শ।",
    "te": "నిజ-��మయ APMC రాకలు, రోజువారీ క్లియరింగ్ రేట్లు, 6-సంవత్సరాల MSP చారిత్రక కాలపట్టికలు మరియు అల్గోరిథమిక్ విక్రయ హక్కు సలహాలు.",
    "ta": "நிகழ்நேர APMC வருகைகள், தினசரி தீர்வு விகிதங்கள், 6 ஆண்டு MSP வரலாற்று காலவரிசைகள் மற்றும் வழிமுறை விற்கும் உரிமை ஆலோசனைகள்.",
    "kn": "ರಿಯಲ್-ಟೈಮ್ APMC ಆಗಮನಗಳು, ದೈನಂದಿನ ಕ್ಲಿಯರಿಂಗ್ ದರಗಳು, 6-ವರ್ಷದ MSP ಐತಿಹಾಸಿಕ ಟೈಮ್‌ಲೈನ್‌ಗಳು ಮತ್ತು ಅಲ್ಗಾರಿದಮಿಕ್ ಮಾರಾಟ ಹಕ್ಕು ಸಲಹೆಗಳು."
  },
  "04 / Direct Payment": {
    "hi": "04 / प्रत्यक्ष भुगतान",
    "pa": "04 / ਸਿੱਧਾ ਭੁਗਤਾਨ",
    "mr": "04 / थेट पेमेंट",
    "gu": "04 / પ્રત્યક્ષ ચુકવણી",
    "bn": "04 / সরাসরি পেমেন্ট",
    "te": "04 / నేరుగా చెల్లింపు",
    "ta": "04 / நேரடி செலுத்துதல்",
    "kn": "04 / ನೇರ ಪಾವತಿ"
  },
  "Direct PFMS-DBT Bank Credit": {
    "hi": "प्रत्यक्ष PFMS-DBT बैंक क्रेडिट",
    "pa": "ਸਿੱھا PFMS-DBT ਬੈਂਕ ਕ੍ਰੈਡਿट",
    "mr": "थेट PFMS-DBT बँक क्रेडिट",
    "gu": "प्रत्यक्ष PFMS-DBT बैंक क्रेडिट",
    "bn": "সরাসরি PFMS-DBT ব্যাংক ক্রেডিট",
    "te": "ప్రత్యక్ష PFMS-DBT బ్యాంకు క్రెడిట్",
    "ta": "நேரடி PFMS-DBT வங்கி வரவு",
    "kn": "நேரடி PFMS-DBT ಬ್ಯಾಂಕ್ ಕ್ರೆಡಿಟ್"
  },
  "Payment is automatically deposited into your Aadhaar-seeded bank account within 24 hours of weighbridge weigh-out. Zero middlemen cuts.": {
    "hi": "धर्मकाँटे (वेब्रिज) पर तौल समाप्त होने के 24 घंटे के भीतर भुगतान स्वचालित रूप से आपके आधार-लिंक्ड बैंक खाते में जमा हो जाता है। बिचौलियों की कटौतिकारी शून्य।",
    "pa": "ਧਰਮਕਾਂਡੇ (ਵੇਬ੍ਰਿਜ) 'ਤੇ ਤੋਲ ਪੂरा ਹੋਣ ਦੇ 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਭੁਗਤਾਨ ਆਪਣੇ ਆਪ ਤੁਹਾਡੇ ਆਧਾਰ-ਸੰਯੁਕਤ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਜਮ੍ਹਾ ਹੋ ਜਾਂਦਾ ਹੈ। ਵਿਚੋਲਿਆਂ ਦੀ ਕੋਈ ਕਟੌਤੀ ਨਹੀਂ।",
    "mr": "धर्मकाट्यावर (वेब्रिज) वजन केल्यापासून २४ तासांच्या आत पेमेंट आपोआप तुमच्या आधार-सीडेड बँक खात्यात जमा केले जाते. मध्यस्थांचे शून्य कमिशन.",
    "gu": "વેબ્રિજ પર વ��ન પૂર્ણ થયાના 24 કલાકની અંદર ચુકવણી આપમેળે તમારા આધાર-સંલગ્ન બેંક ખાતામાં જમા થાય છે. વચેટિયાઓની શૂન્ય કપાત.",
    "bn": "ওয়েবব্রিজে ওজন সমাপ্ত হওয়ার ২৪ ঘণ্টার মধ্যে পেমেন্ট স্বয়ংক্রিয়ভাবে আপনার আধার-সংযুক্ত ব্যাংক অ্যাকাউন্টে জমা হয়। কোনো মধ্যস্বত্বভোগী নেই।",
    "te": "వేబ్రిడ్జ్ వద్ద తూకం వేసిన 24 గంటలలోపు చెల్లింపు మీ ఆధార్-లింక్డ్ బ్యాంకు ఖాతాలో స్వయంచాలకంగా జమ చేయబడుతుంది. మధ్యవర్తుల ప్రమేయం సున్నా.",
    "ta": "எடைமேடையில் (weighbridge) எடை முடிக்கப்பட்ட 24 மணி நேரத்திற்குள் பணம் தானாகவே உங்கள் ஆதார் இணைக்கப்பட்ட வங்கிக் கணக���கில் வரவு வைக்கப்படும். இடைத்தரகர்களுக்கு இடமில்லை.",
    "kn": "ತೂಕದ ಸೇತುವೆಯಲ್ಲಿ (weighbridge) ತೂಕ ಪೂರ್ಣಗೊಂಡ 24 ಗಂಟೆಗಳ ಒಳಗೆ ಪಾವತಿಯು ನಿಮ್ಮ ಆಧಾರ್-ಸಂಯೋಜಿತ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಜಮಾ ಆಗುತ್ತದೆ. ಮಧ್ಯವರ್ತಿಗಳ ಕಡಿತ ಶೂನ್ಯ."
  },
  "05 / Offline Resilience": {
    "hi": "05 / ऑफलाइन लचीलापन (रेसिलिएंस)",
    "pa": "05 / ਆਫਲਾਈਨ ਲਚਕਤਾ",
    "mr": "०५ / ऑफलाइन लवचिकता",
    "gu": "05 / ઓફલાઇન સ્થિતિસ્થાપકતા",
    "bn": "০৫ / অফলাইন স্থিতিস্থাপকতা",
    "te": "05 / ఆఫ్‌లైన్ రెసిడెన్స్",
    "ta": "05 / ஆஃப்லைன் மீளுருவாக்கம்",
    "kn": "05 / ಆಫ್‌ಲೈನ್ ಮರುಪಡೆಯುವಿಕೆ"
  },
  "Works Without Internet": {
    "hi": "इंटरनेट के बिना काम करता है",
    "pa": "ਇੰਟਰਨੈਟ ਤੋਂ ਬਿਨਾਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    "mr": "इंटरनेटशिवाय चालते",
    "gu": "ઇન્ટરનેટ વગર કામ કરે છે",
    "bn": "ইন্টারনেট ছাড়াই কাজ করে",
    "te": "ఇంటర్నెట్ లేకుండా పనిచేస్తుంది",
    "ta": "இணையம் இல்லாமல் செயல்படும்",
    "kn": "ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ"
  },
  "No internet on the farm? Dial the toll-free IVR, or arrive at the mandi gate kiosk where physical tokens are issued locally without network dependence.": {
    "hi": "खेत पर इंटरनेट नहीं है? टोल-फ्री IVR डायल करें, या मंडी गेट कियोस्क पर आएं जहाँ नेटवर्क पर निर्भरता के बिना स्थानीय रूप से भौतिक टोकन जारी किए जाते हैं।",
    "pa": "ਖੇਤ ਵਿੱਚ ਇੰਟਰਨੈਟ ਨਹੀਂ ਹੈ? ਟੋਲ-ਫ్��ీ IVR ਡਾਇਲ ਕਰੋ, ਜਾਂ ਮੰਡੀ ਗੇਟ ਕਿਓਸਕ 'ਤੇ ਪਹੁੰਚੋ ਜਿੱਥੇ ਬਿਨਾਂ ਨੈੱਟਵਰਕ ਨਿਰਭਰਤਾ ਦੇ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਭੌਤਿਕ ਟੋਕਨ ਜਾਰੀ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।",
    "mr": "शेतात इंटरनेट नाही? टोल-फ्री IVR डायल करा, किंवा मंडी गेट किऑस्कवर पोहोचा जिथे नेटवर्कशिवाय स्थानिक पातळीवर भौतिक टोकन दिले जातात.",
    "gu": "ખેતરમાં ઇન્ટરનેટ નથી? ટોલ-ફ્રી IVR ડાયલ કરો, અથવા મંડી ગેટ કિઓસ્ક પર આવો જ્યાં નેટવર્ક પર આધાર રાખ્યા વગર સ્થાનિક રીતે ભૌતિક ટોકન જારી કરવામાં આવે છે.",
    "bn": "খামারে ইন্টারনেট নেই? টোল-ফ্রি IVR ডায়াল করুন, অথবা মান্ডি গেট কিওস্কে আসুন যেখানে নেটওয়ার্কের ওপর নির্ভরতা ছাড়াই স্থানীয়ভাবে ফিজিক্যাল টোকেন দেওয়া হয়।",
    "te": "పొలంలో ఇంటర్నెట్ లేదా? టోల్-ఫ్రీ IVR కి కాల్ చేయండి లేదా మండి గేట్ కియోస్క్‌కి రాండి, అక్కడ నెట్‌వర్క్‌తో సంబంధం లేకుండా స్థానికంగా ఫిజికల్ టోకెన్‌లు జారీ చేయబడతాయి.",
    "ta": "பண்ணையில் இணையம் இல்லையா? கட்டணமில்லா IVR-ஐ அழைக்கவும், அல்லது மண்டி கேட் கியோஸ்கிற்கு வரவும், அங்கு நெட்வொர்க் இல்லாமலேயே உள்ளூர் டோக்கன்கள் வழங்கப்படுகின்றன.",
    "kn": "ಹೊಲದಲ್ಲಿ ಇಂಟರ್ನೆಟ್ ಇಲ್ಲವೇ? ಟೋಲ್-ಫ್ರೀ IVR ಗೆ ಕರೆ ಮಾಡಿ, ಅಥವಾ ಮಂಡಿ ಗೇಟ್ ಕಿಯೋಸ್ಕ್‌ಗೆ ಬನ್ನಿ, ಅಲ್ಲಿ ನೆಟ್‌ವರ್ಕ್ ಅವಲಂಬನೆ ಇಲ್ಲದೆ ಸ್ಥಳೀಯವಾಗ�� ಭೌತಿಕ ಟೋಕನ್‌ಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ."
  },
  "06 / Support & Help": {
    "hi": "06 / सहायता और मदद",
    "pa": "06 / ਸਹਾਇਤਾ ਅਤੇ ਮਦਦ",
    "mr": "०६ / सहाय्य आणि मदत",
    "gu": "06 / સપોર્ટ અને મદદ",
    "bn": "০৬ / সহায়তা ও সাহায্য",
    "te": "06 / మద్దతు & సహాయం",
    "ta": "06 / ஆதரவு & உதவி",
    "kn": "06 / ಬೆಂಬಲ ಮತ್ತು ಸಹಾಯ"
  },
  "24x7 Multi-Lingual Helpline": {
    "hi": "24x7 बहुभाषी हेल्पलाइन",
    "pa": "24x7 ਬਹੁ-ਭਾਸ਼ਾਈ ਹੈਲਪਲਾਈਨ",
    "mr": "२४x७ बहुभाषिक हेल्पलाइन",
    "gu": "24x7 બહુભાષી હેલ્પલાઇন",
    "bn": "২৪x৭ বহুলভাষিক হেল্পলাইন",
    "te": "24x7 బహుభాషా హెల్ప్‌లైన్",
    "ta": "24x7 பன்மொழி உதவி எண்",
    "kn": "24x7 ಬಹುಭಾಷಾ ಸಹಾಯವಾಣಿ"
  },
  "Call toll-free": {
    "hi": "टोल-फ्री कॉल करें",
    "pa": "ਟੋਲ-ਫ੍ਰੀ ਕਾਲ ਕਰੋ",
    "mr": "टोल-फ्री कॉल करा",
    "gu": "ટોલ-ફ્રી કોલ કરો",
    "bn": "টোল-ফ্রি কল করুন",
    "te": "టోల్-ఫ్రీకి కాల్ చేయండి",
    "ta": "கட்டணமில்லா எண்ணிற்கு அழைக்கவும்",
    "kn": "ಟೋಲ್-ಫ್ರೀಗೆ ಕರೆ ಮಾಡಿ"
  },
  "anytime in Hindi, Punjabi, Marathi, Bengali, Telugu, Tamil, Kannada, Gujarati, or English.": {
    "hi": "हिंदी, पंजाबी, मराठी, बंगाली, तेलुगु, तमिल, कन्नड़, गुजराती या अंग्रेजी में किसी भी समय।",
    "pa": "ਕਿਸੇ ਵੀ ਸਮੇਂ ਹਿੰਦੀ, ਪੰਜਾਬੀ, ਮਰਾਠੀ, ਬੰਗਾਲੀ, ਤੇਲਗੂ, ਤਾਮਿਲ, ਕੰਨੜ, ਗੁਜਰਾਤੀ ਜਾਂ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ।",
    "mr": "हिंदी, पंजाबी, मराठी, बंगाली, तेलगू, तमिळ, कन्नड, गुजराती ��िंवा इंग्रजीमध्ये कधीही.",
    "gu": "કોઈપણ સમયે હિન્દી, પંજાબી, મરાઠી, બંગાળી, તેલુગુ, તમિલ, કન્નડ, ગુજરાતી અથવા અંગ્રેજીમાં.",
    "bn": "যেকোনো সময় হিন্দি, পাঞ্জাবি, মারাঠি, বাঙালি, তেলেগু, তামিল, কন্নড়, গুজরাটি বা ইংরেজিতে।",
    "te": "హిందీ, పంజాబీ, మరాఠీ, బెంగాలీ, తెలుగు, తమిళం, కన్నడ, గుజరాતી లేదా ఇంగ్లీషులో ఎప్పుడైనా.",
    "ta": "இந்தி, பஞ்சாபி, மராத்தி, பெங்காலி, தெலுங்கு, தமிழ், கன்னடம், குஜராத்தி அல்லது ஆங்கிலத்தில் எப்போது வேண்டுமானாலும்.",
    "kn": "ಹಿಂದಿ, ಪಂಜಾಬಿ, ಮರಾಠಿ, ಬಂಗಾಳಿ, ತೆಲುಗು, ತಮಿಳು, ಕನ್ನಡ, ಗುಜರಾತಿ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಯಾವುದೇ ಸಮ���ದಲ್ಲಿ."
  },
  "Live Mandi Yard Gate #1": {
    "hi": "लाइव मंडी यार्ड गेट #1",
    "pa": "ਲਾਈਵ ਮੰਡੀ ਯਾਰਡ ਗੇਟ #1",
    "mr": "लाइव्ह मंडी यार गेट #१",
    "gu": "લાઇવ મંડી યાર્ડ ગેટ #1",
    "bn": "লাইভ মান্ডি ইয়ার্ড গেট #১",
    "te": "లైవ్ మండి యార్డ్ గేట్ #1",
    "ta": "நேரலை மண்டி யார்டு கேட் #1",
    "kn": "ಲೈವ್ ಮಂಡಿ ಯಾರ್ಡ್ ಗೇಟ್ #1"
  },
  "Fast-Track RFID Boom Barrier & Automated Weighbridge Telemetry": {
    "hi": "फास्ट-ट्रैक RFID बूम बैरियर और स्वचालित वेटब्रिज टेलीमेट्री",
    "pa": "ਫाਸਟ-ਟਰੈਕ RFID ਬੂਮ ਬੈਰੀਅਰ ਅਤੇ ਸਵੈਚਾਲਿਤ ਵੇਟਬ੍ਰਿਜ ਟੈਲੀਮੈਟਰੀ",
    "mr": "फास्ट-ट्रॅक RFID बूम बॅरियर आणि स्वयंचलित वेजब्रिज टेलिमेट्री",
    "gu": "ફાસ્ટ-ટ્રેક RFID બૂમ બેરિયર અને સ્વચાલિત વેજબ્રિજ ટેલિમેટ્રી",
    "bn": "ফাস্ট-ট্র্যাক RFID বুম ব্যারিয়ার এবং স্বয়ংক্রিয় ওয়েজব্রিজ টেলিমেট্রি",
    "te": "ఫాస్ట్-ట్రాక్ RFID బూమ్ బేరియర్ & ఆటోమేಟೆడ్ వేజ్‌బ్రిడ్జ్ టెలిమెట्री",
    "ta": "பாஸ்ட்-டிராக் RFID பூம் பேரியர் & தானியங்கி வெயிபிரிட்ஜ் டெலிமெட்ரி",
    "kn": "ಫಾಸ್ಟ್-ಟ್ರ್ಯಾಕ್ RFID ಬೂಮ್ ಬ್ಯಾರಿಯರ್ ಮತ್ತು ಸ್ವಯಂಚಾಲಿತ ತೂಕದ ಸೇತುವೆ ಟೆಲಿಮೆಟ್ರಿ"
  },
  "e-NAM APMC Slot Reservation": {
    "hi": "e-NAM APMC स्लॉट आरक्षण",
    "pa": "e-NAM APMC ਸਲਾਟ ਰਿਜ਼ਰਵੇਸ਼ਨ",
    "mr": "e-NAM APMC स्लॉट आरक्षण",
    "gu": "e-NAM APMC સ્લોટ આરક્ષણ",
    "bn": "e-NAM APMC স্লট সংরক্ষণ",
    "te": "e-NAM APMC స్లాట్ రిజర్వేషన్",
    "ta": "e-NAM APMC ஸ்லாட் முன்பதிவு",
    "kn": "e-NAM APMC ಸ್ಲಾಟ್ ಮೀಸಲಾತಿ"
  },
  "Turnaround: <45 min": {
    "hi": "टर्नअराउंड: <45 मिनट",
    "pa": "ਟਰਨਅਰਾਊਂਡ: <45 ਮਿੰਟ",
    "mr": "टर्नअराउंड: <45 मिनिटे",
    "gu": "ટર્નઅરાઉન્ડ: <45 મિનિટ",
    "bn": "টার্নঅ্যারাউন্ড: <45 মিনিট",
    "te": "టర్న్‌అరౌండ్: <45 నిమిషాలు",
    "ta": "டர்ன்அரவுண்ட்: <45 நிமிடம்",
    "kn": "ಟರ್ನ್‌ಅರೌಂಡ್: <45 ನಿಮಿಷ"
  },
  "Paperless Grain Procurement & Direct Bank Transfer (DBT)": {
    "hi": "पेपरलेस अनाज खरीद और प्रत्यक्ष बैंक हस्तांतरण (DBT)",
    "pa": "ਪੇਪਰਲੈੱਸ ਅਨਾਜ ਖਰੀਦ ਅਤੇ ਸਿੱਧਾ ਬੈਂਕ ਟ੍ਰਾਂਸਫਰ (DBT)",
    "mr": "पेपरलेस धान्य खरेदी आणि थेट बँक हस्तांतरण (DBT)",
    "gu": "પેપરલેસ અનાજ ખરીદી અને પ્રત્ય���્ષ બેંક હસ્તાંતરણ (DBT)",
    "bn": "পেপারলেস শস্য ক্রয় এবং সরাসরি ব্যাংক স্থানান্তর (DBT)",
    "te": "పేపర్‌లెస్ ధాన్యం సేకరణ & డైరెక్ట్ బ్యాంక్ ట్రాన్స్‌ఫర్ (DBT)",
    "ta": "பேப்பர்லெஸ் தானிய கொள்முதல் & நேரடி வங்கி பரிமாற்றம் (DBT)",
    "kn": "ಪೇಪರ್‌ಲೆಸ್ ಧಾನ್ಯ ಖರೀದಿ ಮತ್ತು ನೇರ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ (DBT)"
  },
  "Book a guaranteed time slot to bypass highway queues. Grains are weighed directly on anti-tamper electronic scales and credited directly to your Aadhaar-linked bank account within 24-48 hours.": {
    "hi": "राजमार्ग की कतारों से बचने के लिए एक निश्चित समय स्लॉट बुक करें। अनाज का वजन सीधे छेड़छाड़-रोधी इलेक्ट्रॉनिक तराजू पर किया जाता है और 24-48 घंटों के भीतर सीधे आ��के आधार-लिंक बैंक खाते में जमा कर दिया जाता है।",
    "pa": "ਹਾਈਵੇਅ ਦੀਆਂ ਲਾਈਨਾਂ ਤੋਂ ਬਚਣ ਲਈ ਇੱਕ ਗਰੰਟੀਸ਼ੁਦਾ ਸਮਾਂ ਸਲਾਟ ਬੁੱਕ ਕਰੋ। ਅਨਾਜ ਦਾ ਵਜ਼ਨ ਸਿੱਧਾ ਛੇੜਛਾੜ-ਰੋਧਕ ਇਲੈਕਟ੍ਰਾਨਿਕ ਸਕੇਲਾਂ 'ਤੇ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ 24-48 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਸਿੱਧਾ ਤੁਹਾਡੇ ਆਧਾਰ-ਲਿੰਕ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਜਮ੍ਹਾਂ ਕਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।",
    "mr": "महामार्गावरील रांगा टाळण्यासाठी निश्चित वेळ स्लॉट बुक करा. धान्याचे वजन थेट छेडछाड-विरोधी इलेक्ट्रॉनिक तराजूवर केले जाते आणि २४-४८ तासांच्या आत थेट तुमच्या आधार-संलग्न बँक खात्यात जमा केले जाते.",
    "gu": "હાઈવેની કતારો ટાળવા માટે નિશ્ચિત સમય સ્લોટ ���ુક કરો. અનાજનું વજન સીધું છેડછાડ-વિરોધી ઇલેક્ટ્રોનિક ત્રાજવા પર કરવામાં આવે છે અને 24-48 કલાકની અંદર સીધા તમારા આધાર-લિંક બેંક ખાતામાં જમા કરવામાં આવે છે.",
    "bn": "হাইওয়ের লাইন এড়াতে একটি নিশ্চিত সময়ের স্লট বুক করুন। শস্য সরাসরি টেম্পার-প্রুফ ইলেকট্রনিক স্কেলে ওজন করা হয় এবং ২৪-৪৮ ঘণ্টার মধ্যে সরাসরি আপনার আধার-সংযুক্ত ব্যাংক অ্যাকাউন্টে জমা করা হয়।",
    "te": "హైవే క్యూలను నివారించడానికి గ్యారెంటీడ్ టైమ్ స్లాట్‌ను బుక్ చేయండి. ధాన్యం నేరుగా ట్యాంపర్-ప్రూఫ్ ఎలక్ట్రానిక్ త్రాసులపై తూకం వేయబడుతుంది మరియు 24-48 గంటలలోపు నేరుగా మీ ఆధార్-లింక్డ్ బ్యాంక్ ఖాతాకు జమ చేయబడుతుంది.",
    "ta": "நெஞ்சாலை வரிசைகளை தவிர்க்க உறுதியளிக்கப்பட்ட நேர ஸ்லாட்டை முன்பதிவு செய்யுங்கள். தானியங்கள் நேரடியாக டேம்பர்-ப்ரூஃப் எலக்ட்ரானிக் செதில்களில் எடைபோடப்பட்டு 24-48 மணி நேரத்திற்குள் நேரடியாக உங்கள் ஆதார் இணைக்கப்பட்ட வங்கி கணக்கில் வரவு வைக்கப்படும்.",
    "kn": "ಹೈವೇ ಸರತಿ ಸಾಲುಗಳನ್ನು ತಪ್ಪಿಸಲು ಖಚಿತಪಡಿಸಿದ ಸಮಯದ ಸ್ಲಾಟ್ ಅನ್ನು ಬುಕ್ ಮಾಡಿ. ಧಾನ್ಯಗಳನ್ನು ನೇರವಾಗಿ ಟ್ಯಾಂಪರ್-ಪ್ರೂಫ್ ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಮಾಪಕಗಳಲ್ಲಿ ತೂಕ ಮಾಡಲಾಗುತ್ತದೆ ಮತ್ತು 24-48 ಗಂಟೆಗಳ ಒಳಗೆ ನೇರವಾಗಿ ನಿಮ್ಮ ಆಧಾರ್-ಸಂಯೋಜಿತ ���್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮಾ ಮಾಡಲಾಗುತ್ತದೆ."
  },
  "Quick Autofill Test Profiles:": {
    "hi": "त्वरित स्वतः-भराव परीक्षण प्रोफ़ाइल:",
    "pa": "ਤੁਰੰਤ ਆਟੋਫਿਲ ਟੈਸਟ ਪ੍ਰੋਫਾਈਲਾਂ:",
    "mr": "जलद स्वयंपूर्ण चाचणी प्रोफाइल:",
    "gu": "ઝડપી ઓટોફિલ ટેસ્ટ પ્રોફાઇલ્સ:",
    "bn": "দ্রুত অটোফিল টেস্ট প্রোফাইল:",
    "te": "త్వరిత ఆటోఫిల్ టెస్ట్ ప్రొఫైల్స్:",
    "ta": "விரைவான ஆட்டோஃபில் சோதனை சுயவிவரங்கள்:",
    "kn": "ತ್ವರಿತ ಆಟೋಫಿಲ್ ಪರೀಕ್ಷಾ ಪ್ರೊಫೈಲ್‌ಗಳು:"
  },
  "🌾 Marginal (Wheat)": {
    "hi": "🌾 सीमांत (गेहूं)",
    "pa": "🌾 ਸੀਮਾਂਤ (ਕਣਕ)",
    "mr": "🌾 अत्यल्प भूधारक (गहू)",
    "gu": "🌾 સીમાંત (ઘઉં)",
    "bn": "🌾 প্রান্ত��ক (গম)",
    "te": "🌾 సన్నకారు (గోధుమ)",
    "ta": "🌾 குறு விவசாயி (கோதுமை)",
    "kn": "🌾 ಅತಿ ಸಣ್ಣ (ಗೋಧಿ)"
  },
  "🌻 Small (Mustard)": {
    "hi": "🌻 लघु (सरसों)",
    "pa": "🌻 ਛੋਟਾ (ਸੋਇਆਬੀਨ/ਰਾਇਆ)",
    "mr": "🌻 लहान (मोहरी)",
    "gu": "🌻 નાનું (રાય)",
    "bn": "🌻 ক্ষুদ্র (সরিষা)",
    "te": "🌻 చిన్నకారు (ఆవాలు)",
    "ta": "🌻 சிறு விவசாயி (கடுகு)",
    "kn": "🌻 ಸಣ್ಣ (ಸಾಸಿವೆ)"
  },
  "🚜 Commercial (5.5 ha)": {
    "hi": "🚜 व्यावसायिक (5.5 हे)",
    "pa": "🚜 ਵਪਾਰਕ (5.5 ਹੈਕਟੇਅਰ)",
    "mr": "🚜 व्यावसायिक (5.5 हे)",
    "gu": "🚜 વ્યાપારી (5.5 હે)",
    "bn": "🚜 বাণিজ্যিক (5.5 হেক্টর)",
    "te": "🚜 వాణిజ్య (5.5 హెక్టార్లు)",
    "ta": "🚜 வணிக விவசாயி (5.5 ஹெக்டேர்)",
    "kn": "🚜 ವಾಣಿಜ್ಯ (5.5 ಹೆ)."
  },
  "Wheat (गेहूं) - MSP ₹2,275/qtl": {
    "hi": "गेहूं (Wheat) - MSP ₹2,275/क्विंटल",
    "pa": "ਕਣਕ (Wheat) - MSP ₹2,275/ਕੁਇੰਟਲ",
    "mr": "गहू (Wheat) - MSP ₹2,275/क्विंटल",
    "gu": "ઘઉં (Wheat) - MSP ₹2,275/ક્વિન્ટલ",
    "bn": "গম (Wheat) - MSP ₹২,২৭৫/কুইন্টাল",
    "te": "గోధుమ (Wheat) - MSP ₹2,275/క్వింటాల్",
    "ta": "கோதுமை (Wheat) - MSP ₹2,275/குவிண்டால்",
    "kn": "ಗೋಧಿ (Wheat) - MSP ₹2,275/ಕ್ವಿಂಟಾಲ್"
  },
  "Paddy / Rice (धान) - MSP ₹2,300/qtl": {
    "hi": "धान / चावल (धान) - MSP ₹2,300/qtl",
    "pa": "ਝona / ਚੌਲ (धान) - MSP ₹2,300/qtl",
    "mr": "भात / तांदूळ (धान) - MSP ₹2,300/qtl",
    "gu": "ડાંગર / ચોખા (धान) - MSP ₹2,300/qtl",
    "bn": "ধান / চাল (धान) - MSP ₹2,300/qtl",
    "te": "వరి / బియ్యం (धान) - MSP ₹2,300/qtl",
    "ta": "நெல் / அரிசி (धान) - MSP ₹2,300/qtl",
    "kn": "ಭತ್ತ / ಅಕ್ಕಿ (धान) - MSP ₹2,300/qtl"
  },
  "Mustard (सरसों) - MSP ₹5,650/qtl": {
    "hi": "सरस���ं (सरसों) - MSP ₹5,650/qtl",
    "pa": "सरसों (सरसों) - MSP ₹5,650/qtl",
    "mr": "मोहरी (सरसों) - MSP ₹5,650/qtl",
    "gu": "राई (सरसों) - MSP ₹5,650/qtl",
    "bn": "সর্ষে (सरसों) - MSP ₹5,650/qtl",
    "te": "ఆవాలు (सरसों) - MSP ₹5,650/qtl",
    "ta": "கடுகு (सरसों) - MSP ₹5,650/qtl",
    "kn": "ಸಾಸಿವೆ (सरसों) - MSP ₹5,650/qtl"
  },
  "Chana (चना) - MSP ₹5,440/qtl": {
    "hi": "चना (चना) - MSP ₹5,440/qtl",
    "pa": "चना (चना) - MSP ₹5,440/qtl",
    "mr": "हरभरा (चना) - MSP ₹5,440/qtl",
    "gu": "ચણા (चना) - MSP ₹5,440/qtl",
    "bn": "ছোলা (चना) - MSP ₹5,440/qtl",
    "te": "శనగలు (चना) - MSP ₹5,440/qtl",
    "ta": "சுண்டல் / கடலை (चना) - MSP ₹5,440/qtl",
    "kn": "ಕಡಲೆ (चना) - MSP ₹5,440/qtl"
  },
  "Soybean (सोयाबीन) - MSP ₹4,892/qtl": {
    "hi": "सोयाबीन (सोयाबीन) - MSP ₹4,892/qtl",
    "pa": "सोयाबीन (सोयाबीन) - MSP ₹4,892/qtl",
    "mr": "सोयाबीन (सोयाबीन) - MSP ₹4,892/qtl",
    "gu": "સોયાબીન (सोयाबीन) - MSP ₹4,892/qtl",
    "bn": "সয়াবিন (सोयाबीन) - MSP ₹4,892/qtl",
    "te": "సోయాబీన్ (सोयाबीन) - MSP ₹4,892/qtl",
    "ta": "சோயாபீன்ஸ் (सोयाबीन) - MSP ₹4,892/qtl",
    "kn": "ಸೋಯಾಬಿನ್ (सोयाबीन) - MSP ₹4,892/qtl"
  },
  "Estimated Load (MT)": {
    "hi": "अनुमानित लोड (MT)",
    "pa": "अनुमानित लोड (MT)",
    "mr": "अंदाजे लोड (MT)",
    "gu": "અંદાજિત લોડ (MT)",
    "bn": "আনুমানিক লোড (MT)",
    "te": "అంచనా వేయబడిన లోడ్ (MT)",
    "ta": "மதிப்பிடப்பட்ட சுமை (MT)",
    "kn": "ಅಂದೇ ಅಂದಾಜು ಹೊರೆ (MT)"
  },
  "KT-1042": {
    "hi": "KT-1042",
    "pa": "KT-1042",
    "mr": "KT-1042",
    "gu": "KT-1042",
    "bn": "KT-1042",
    "te": "KT-1042",
    "ta": "KT-1042",
    "kn": "KT-1042"
  },
  "🛡️ FAIR-SHARE PRIORITY (<2 ha)": {
    "hi": "🛡️ फेयर-शेयर प्राथमिकता (<2 ha)",
    "pa": "🛡️ फेयर-शेयर प्राथमिकता (<2 ha)",
    "mr": "🛡️ फेअर-शेअर प्राधान्य (<2 ha)",
    "gu": "🛡️ ફેેર-શેર અગ્રતા (<2 ha)",
    "bn": "🛡️ ফেয়ার-শেয়ার অগ্রাধিকার (<2 ha)",
    "te": "🛡️ ఫెయిర్-షేర్ ప్రాధాన్యత (<2 ha)",
    "ta": "🛡️ நியாயமான-பங்கு முன்னுரிமை (<2 ha)",
    "kn": "🛡️ ಫೇರ್-ಶೇರ್ ಪ್ರಾಮುಖ್ಯತೆ (<2 ha)"
  },
  "Devendra Verma": {
    "hi": "देवेन्द्र वर्मा",
    "pa": "ਦੇਵੇਂਦਰ ਵਰਮਾ",
    "mr": "देवेन्द्र वर्मा",
    "gu": "દેવેન્દ્ર વર્મા",
    "bn": "দেবেন্দ্র বর্মা",
    "te": "దేవేంద్ర వర్మ",
    "ta": "தேவேந்திர வர்மா",
    "kn": "ದೇವೇಂದ್ರ ವರ್ಮ"
  },
  "MP04TR4412": {
    "hi": "MP04TR4412",
    "pa": "MP04TR4412",
    "mr": "MP04TR4412",
    "gu": "MP04TR4412",
    "bn": "MP04TR4412",
    "te": "MP04TR4412",
    "ta": "MP04TR4412",
    "kn": "MP04TR4412"
  },
  "Gate 2 (South Yard)": {
    "hi": "गेट 2 (साउथ यार्ड)",
    "pa": "गेट 2 (साउथ यार्ड)",
    "mr": "गेट 2 (साउथ यार्ड)",
    "gu": "ગેટ 2 (સાઉથ યાર્ડ)",
    "bn": "গেট ২ (সাউথ ইয়ার্ড)",
    "te": "గేట్ 2 (సౌత్ యార్డ్)",
    "ta": "கேட் 2 (தெற்கு யார்ட்)",
    "kn": "ಗೇಟ್ 2 (ಸೌತ್ ಯಾರ್ಡ್)"
  },
  "<45 mins": {
    "hi": "<45 मि.",
    "pa": "<45 ਮਿੰਟ",
    "mr": "<45 मि.",
    "gu": "<45 મિનિટ",
    "bn": "<45 মিনিট",
    "te": "<45 నిమి.",
    "ta": "<45 நிமி",
    "kn": "<45 ನಿಮಿ"
  },
  "Ground-Truth Deployment": {
    "hi": "ग्राउंड-ट्रूथ डिप्लॉयमेंट",
    "pa": "ਗ્રાਊਂਡ-ਟਰੂਥ ਡਿਪਲਾਇਮੈਂਟ",
    "mr": "ग्राउंड-ट्रूथ डिप्लॉयमेंट",
    "gu": "ગ્રાઉન્ડ-ટ્રુથ ડિપ્લોયમેન્ટ",
    "bn": "গ্রাউন্ড-ট্রুথ ডিপ্লয়মেন্ট",
    "te": "గ్రౌండ్-ట్రూత్ డిప్లాయ్‌మెంట్",
    "ta": "கிரவுண்ட்-ட்ரூத் டிப்ளாய்மென்ட்",
    "kn": "ಗ್ರೌಂಡ್-ಟ್ರೂತ್ ನಿಯೋಜನೆ"
  },
  "Bhopal Central APMC Gate 2": {
    "hi": "भोपाल सेंट्रल APMC गेट 2",
    "pa": "ਭੋਪਾਲ ਸੈਂਟਰਲ APMC ਗੇਟ 2",
    "mr": "भोपाळ सेंट्रल APMC गेट 2",
    "gu": "ભોપાલ સેન્ટ્રલ APMC গেট 2",
    "bn": "ভোপাল সেন্ট্রাল APMC গেট 2",
    "te": "భోపాల్ సెంట్రల్ APMC గేట్ 2",
    "ta": "போபால் சென்ட்ரல் APMC கேட் 2",
    "kn": "ಭೋಪಾಲ್ ಸೆಂಟ್ರಲ್ APMC ಗೇಟ್ 2"
  },
  "Tractor trolleys with active digital slot tokens are scanned at the inward boom barrier in under": {
    "hi": "सक्रिय डिजिटल स्लॉट टोकन वाली ट्रैक्टर ट्रॉलियों को अंदर आने वाले बूम बैरियर पर स्कैन किया जाता है",
    "pa": "ਸਰਗਰਮ ਡਿਜੀਟਲ ਸਲਾਟ ਟੋਕਨਾਂ ਵਾਲੀਆਂ ਟਰੈਕਟਰ ਟ්‍රਾਲੀਆਂ ਨੂੰ ਅੰਦਰੂਨੀ ਬੂਮ ਬੈਰੀਅਰ 'ਤੇ ਸਕੈਨ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
    "mr": "सक्रिय डिजिटल स्लॉट टोकन असलेल्या ट्रॅक्टर ट्रॉली इनवर्ड बूम बॅरियरवर स्कॅन केल्या जातात",
    "gu": "સક્રિય ડિજિટલ સ્લોટ ટોકનવાળી ટ્રેક્ટર ટ્રોલીઓને ઇનવર્ડ બૂમ બેરિયર પર સ્કેન કરવામાં આવે છે",
    "bn": "সক্রিয় ডিজিটাল স্লট টোকেন সহ ট্রাক্টর ট্রলিগুলি ইনওয়ার্ড বুম ব্যারিয়ারে স্ক্যান করা হয়",
    "te": "యాక్టివ్ డిజిటల్ స్లాట్ టోకెన్‌లతో కూడిన ట్రాక్టర్ ట్రాలీలు ఇన్‌వార్��్ బూమ్ బేరియర్ వద్ద స్కాన్ చేయబడతాయి",
    "ta": "செயலில் உள்ள டிஜிட்டல் ஸ்லாட் டோக்கன்களைக் கொண்ட டிராக்டர் ட்ராலிகள் இன்வார்ட் பூம் பேரியரில் ஸ்கேன் செய்யப்படுகின்றன",
    "kn": "ಸಕ್ರಿಯ ಡಿಜಿಟಲ್ ಸ್ಲಾಟ್ ಟೋಕನ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರ್ಯಾಲಿಗಳನ್ನು ಇನ್ವರ್ಡ್ ಬೂಮ್ ತಡೆಗೋಡೆಯಲ್ಲಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಲಾಗುತ್ತದೆ"
  },
  "45 seconds": {
    "hi": "45 सेकंड",
    "pa": "45 ਸਕਿੰਟ",
    "mr": "45 सेकंद",
    "gu": "45 સેકન્ડ",
    "bn": "45 সেকেন্ড",
    "te": "45 సెకన్లు",
    "ta": "45 வினாடிகள்",
    "kn": "45 ಸೆಕೆಂಡುಗಳು"
  },
  ", slashing highway deadlocks from 72 hours to zero.": {
    "hi": ", हाईवे पर लगने वाले जाम को 72 घं���े से घटाकर शून्य कर देता है।",
    "pa": ", ਹਾਈਵੇਅ ਜਾಮ್ ਨੂੰ 72 ਘੰਟਿਆਂ ਤੋਂ ਘਟਾ ਕੇ ਸਿਫ਼ਰ ਕਰ ਦਿੰਦਾ ਹੈ।",
    "mr": ", महामार्गावरील वाहतूक कोंडी 72 तासांवरून शून्यावर आणते.",
    "gu": ", હાઇવેના ટ્રાફિક જામને 72 કલાકથી ઘટાડીને શૂન્ય પર લાવી દે છે.",
    "bn": ", হাইওয়ের যানজট ৭২ ঘণ্টা থেকে কমিয়ে শূন্যে নামিয়ে আনে।",
    "te": ", హైవే ట్రాఫిక్ జామ్‌లను 72 గంటల నుండి సున్నాకి తగ్గిస్తుంది.",
    "ta": ", நெடுஞ்சாலை முடக்கம் 72 மணி நேரத்திலிருந்து சுழியமாகக் குறைக்கப் படுகிறது.",
    "kn": ", ಹೆದ್ದಾರಿ ದಟ್ಟಣೆಯನ್ನು 72 ಗಂಟೆಗಳಿಂದ ಸೊನ್ನೆಗೆ ತಗ್ಗಿಸುತ್ತದೆ."
  },
  "Zero-Smartphone Access (Toll-Free IVR)": {
    "hi": "बिना स्मार्टफोन के एक्सेस (टोल-फ्री IVR)",
    "pa": "ਬਿਨਾਂ-ਸਮਾਰਟਫ਼ੋਨ ਪਹੁੰਚ (ਟੋਲ-ਫ੍ਰੀ IVR)",
    "mr": "स्मार्टफोनशिवाय प्रवेश (टोल-फ्री IVR)",
    "gu": "સ્માર્ટફોન વગર એક્સેસ (ટોલ-ફ્રી IVR)",
    "bn": "স্মার্টফোন ছাড়াই অ্যাক্সেস (টোল-ফ্রি IVR)",
    "te": "స్మార్ట్‌ఫోన్ లేకుండా యాక్సెస్ (టోల్-ఫ్రీ IVR)",
    "ta": "ஸ்மார்ட்போன் தேவையில்லை (கட்டணமில்லா IVR)",
    "kn": "ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಇಲ್ಲದೆ ಪ್ರವೇಶ (ಟೋಲ್-ಫ್ರೀ IVR)"
  },
  "Over": {
    "hi": "से अधिक",
    "pa": "ਤੋਂ ਵੱਧ",
    "mr": "पेक्षा जास्त",
    "gu": "કરતાં વધુ",
    "bn": "এর বেশি",
    "te": "కంటే ఎక్కువ",
    "ta": "விட அதிகம்",
    "kn": "ಗಿಂತ ಹೆಚ್ಚು"
  },
  "60% of marginal Indian farmers": {
    "hi": "60% सीमांत भारतीय किसान",
    "pa": "60% ਸੀਮਾਂਤ ਭਾਰਤੀ ਕਿਸਾਨ",
    "mr": "60% सीमांत भारतीय शेतकरी",
    "gu": "60% સીમાંત ભારતીય ખેડૂતો",
    "bn": "৬০% প্রান্তিক ভারতীয় কৃষক",
    "te": "60% సన్నకారు భారతీయ రైతులు",
    "ta": "60% சிறு விவசாய இந்திய விவசாயிகள்",
    "kn": "60% ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ಭಾರತೀಯ ರೈತರು"
  },
  "use ₹800 basic feature keypad phones and cannot use English portals or e-NAM apps.": {
    "hi": "₹800 के बेसिक फीचर कीपैड फोन का उपयोग करते हैं और अंग्रेजी पोर्टल या e-NAM ऐप का उपयोग नहीं कर सकते।",
    "pa": "₹800 ਵਾਲੇ ਬੇਸਿਕ ਫੀਚਰ ਕੀਪੈਡ ਫ਼ೋನ್ ਵਰਤਦੇ ਹਨ ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਪੋਰਟਲ ਜਾਂ e-NAM ਐਪ ਨਹੀਂ ਵਰਤ ਸਕਦੇ।",
    "mr": "₹800 चे बेसिक फीचर कीपड फोन वापरतात आणि इंग्रजी पोर्टल किंवा e-NAM ॲप वापरू शकत नाहीत.",
    "gu": "₹800 ના બેઝિક ફીચર કીપેડ ફોન વાપરે છે અને અંગ્રેજી પોર્ટલ કે e-NAM એપ્લિકેશન વાપરી શકતા નથી.",
    "bn": "₹৮০০ মূল্যের বেসিক ফিচার কিপ্যাড ফোন ব্যবহার করেন এবং ইংরেজি পোর্টাল বা e-NAM অ্যাপ ব্যবহার করতে পারেন না।",
    "te": "₹800 బేసిక్ ఫీచర్ కీప్యాడ్ ఫోన్‌లను ఉపయోగిస్తారు మరియు ఇంగ్లీష్ పోర్టల్‌లను లేదా e-NAM యాప్‌లను ఉపయోగించలేరు.",
    "ta": "₹800 அடிப்படை கீபேட் போன்களைப் பயன்படுத்துகின்றனர், மேலும் ஆங்கிலப் போர்ட்டல்களையோ அல்லது e-NAM செயலிகளையோ பயன்படுத்த முடியாது.",
    "kn": "₹800 ರ ಮೂಲ ಫೀಚರ್ ಕೀಪ್ಯಾಡ್ ಫೋನ್‌ಗಳನ್ನು ಬಳಸುತ್ತಾರೆ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಪೋರ್ಟಲ್‌ಗಳನ್ನು ಅಥವಾ e-NAM ಆಪ್‌ಗಳನ್ನು ಬಳಸಲು ಸಾಧ್ಯವಿಲ್ಲ."
  },
  "With KISAN-Q, any farmer dials a": {
    "hi": "KISAN-Q के साथ, कोई भी किसान डायल करता है एक",
    "pa": "KISAN-Q ਨਾਲ, ਕੋਈ ਵੀ ਕਿਸਾਨ ਡਾਇਲ ਕਰਦਾ ਹੈ ਇੱਕ",
    "mr": "KISAN-Q सह, कोणताही शेतकरी डायल करतो",
    "gu": "KISAN-Q સાથે, કોઈપણ ખેડૂત ડાયલ કરે છે",
    "bn": "KISAN-Q-এর সাথে, যেকোনো কৃষক ডায়াল করে একটি",
    "te": "KISAN-Q తో, ఏ రైతు అయినా డయల్ చేస్తారు",
    "ta": "KISAN-Q உடன், எந்த ஒரு விவச���யியும் டயல் செய்கிறார்",
    "kn": "KISAN-Q ನೊಂದಿಗೆ, ಯಾವುದೇ ರೈತರು ಡಯಲ್ ಮಾಡುತ್ತಾರೆ"
  },
  "toll-free missed call to 1800-547-2600": {
    "hi": "टोल-फ्री मिस्ड कॉल 1800-547-2600 पर",
    "pa": "ਟੋਲ-ਫ੍ਰੀ ਮਿਸਡ ਕਾਲ 1800-547-2600 'ਤੇ",
    "mr": "टोल-फ्री मिस कॉल 1800-547-2600 वर",
    "gu": "ટોલ-ફ્રી મિસ્ડ કૉલ 1800-547-2600 પર",
    "bn": "টোল-ফ্রি মিসড কল 1800-547-2600 নম্বরে",
    "te": "టోల్ ఫ్రీ మిస్డ్ కాల్ 1800-547-2600 కు",
    "ta": "கட்டணமில்லா மிஸ்டு கால் 1800-547-2600 எண்ணுக்கு",
    "kn": "ಟೋಲ್-ಫ್ರೀ ಮಿಸ್ಡ್ ಕಾಲ್ 1800-547-2600 ಗೆ"
  },
  ", receives an instant automated callback in": {
    "hi": ", और तुरंत एक स्वचालित कॉलबैक प्राप्त करता है",
    "pa": ", ਅਤੇ ਤੁਰੰਤ ਇੱਕ ਆਟੋਮੈਟੇਡ ਕਾਲਬੈਕ ਪ੍ਰਾਪਤ ਕਰਦ�� ਹੈ",
    "mr": ", आणि त्वरित स्वयंचलित कॉलबॅक मिळवतो",
    "gu": ", અને તરત જ સ્વચાલિત કોલબેક પ્રાપ્ત કરે છે",
    "bn": ", এবং তাত্ক্ষণিক স্বয়ংক্রিয় কলব্যাক পান",
    "te": ", మరియు తక్షణ స్వయంచాలక కాల్‌బ్యాక్ పొందుతారు",
    "ta": ", மற்றும் உடனடி தானியங்கி கால்பேக் பெறுகிறார்",
    "kn": ", ಮತ್ತು ತಕ್ಷಣದ ಸ್ವಯಂಚಾಲಿತ ಕಾಲ್‌ಬ್ಯಾಕ್ ಪಡೆಯುತ್ತಾರೆ"
  },
  "Hindi or Punjabi": {
    "hi": "हिंदी या पंजाबी में",
    "pa": "ਹਿੰਦੀ ਜਾਂ ਪੰਜਾਬੀ ਵਿੱਚ",
    "mr": "हिंदी किंवा पंजाबी मध्ये",
    "gu": "હિન્દી અથવા પંજાબીમાં",
    "bn": "হিন্দি বা পাঞ্জাবিতে",
    "te": "హిందీ లేదా పంజాబీలో",
    "ta": "இந்த�� அல்லது பஞ்சாபியில்",
    "kn": "ಹಿಂದಿ ಅಥವಾ ಪಂಜಾಬಿಯಲ್ಲಿ"
  },
  ", and gets their digital token sent via SMS.": {
    "hi": ", और SMS के माध्यम से अपना डिजिटल टोकन प्राप्त करता है।",
    "pa": ", ਅਤੇ SMS ਰਾਹੀਂ ਆਪਣਾ ਡਿਜੀਟਲ ਟੋਕਨ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ।",
    "mr": ", आणि SMS द्वारे आपले डिजिटल टोकन मिळवतो.",
    "gu": ", અને SMS દ્વારા તેનું ડિજિટલ ટોકન મેળવે છે.",
    "bn": ", এবং SMS এর মাধ্যমে তাদের ডিজিটাল টোকেন পান।",
    "te": ", మరియు SMS ద్వారా వారి డిజిటల్ టోకెన్‌ను పొందుతారు.",
    "ta": ", மற்றும் SMS மூலம் அவர்களின் டிஜிட்டல் டோக்கனைப் பெறுகின்றனர்.",
    "kn": ", ಮತ್ತು SMS ಮೂಲಕ ತಮ್ಮ ಡಿಜಿಟಲ್ ಟೋಕನ್ ಪಡೆಯುತ್ತಾರೆ."
  },
  "🇮🇳 Hindi (हिन्दी)": {
    "hi": "🇮🇳 हिंदी (हिन्दी)",
    "pa": "🇮🇳 ਹਿੰਦੀ (हिन्दी)",
    "mr": "🇮🇳 हिंदी (हिन्दी)",
    "gu": "🇮🇳 હિન્દી (हिन्दी)",
    "bn": "🇮🇳 হিন্দি (हिन्दी)",
    "te": "🇮🇳 హిందీ (हिन्दी)",
    "ta": "🇮🇳 இந்தி (हिन्दी)",
    "kn": "🇮🇳 ಹಿಂದಿ (हिन्दी)"
  },
  "🌾 Punjabi (ਪੰਜਾਬੀ)": {
    "hi": "🌾 पंजाबी (ਪੰਜਾਬੀ)",
    "pa": "🌾 ਪੰਜਾਬੀ (ਪੰਜਾਬੀ)",
    "mr": "🌾 पंजाबी (ਪੰਜਾਬੀ)",
    "gu": "🌾 પંજાબી (ਪੰਜਾਬੀ)",
    "bn": "🌾 পাঞ্জাবি (ਪੰਜਾਬੀ)",
    "te": "🌾 పంజాబీ (ਪੰਜਾਬੀ)",
    "ta": "🌾 பஞ்சாபி (ਪੰਜਾਬੀ)",
    "kn": "🌾 ಪಂಜಾಬಿ (ਪੰਜਾਬੀ)"
  },
  "🚩 Marathi (मराठी)": {
    "hi": "🚩 मराठी (मराठी)",
    "pa": "🚩 ਮਰਾਠੀ (मराठी)",
    "mr": "��� मराठी (मराठी)",
    "gu": "🚩 મરાઠી (मराठी)",
    "bn": "🚩 মারাঠি (मराठी)",
    "te": "🚩 మరాఠీ (मराठी)",
    "ta": "🚩 மராத்தி (मराठी)",
    "kn": "🚩 ಮರಾಠಿ (मराठी)"
  },
  "🦁 Gujarati (ગુજરાતી)": {
    "hi": "🦁 गुजराती (ગુજરાતી)",
    "pa": "🦁 ਗੁਜਰਾਤੀ (ગુજરાતી)",
    "mr": "🦁 गुजराती (ગુજરાતી)",
    "gu": "🦁 ગુજરાતી (ગુજરાતી)",
    "bn": "🦁 গুজরাটি (ગુજરાતી)",
    "te": "🦁 గుజరాతీ (ગુજરાતી)",
    "ta": "🦁 குஜராத்தி (ગુજરાતી)",
    "kn": "🦁 ಗುಜರಾತಿ (ગુજરાતી)"
  },
  "🐟 Bengali (বাংলা)": {
    "hi": "🐟 बंगाली (বাংলা)",
    "pa": "🐟 ਬੰਗਾਲੀ (বাংলা)",
    "mr": "🐟 बंगाली (বাংলা)",
    "gu": "🐟 બંગાળી (বাংলা)",
    "bn": "🐟 বাংলা (বাংলা)",
    "te": "🐟 బెంగాలీ (বাংলা)",
    "ta": "🐟 பெங்காலி (বাংলা)",
    "kn": "🐟 ಬಂಗಾಳಿ (বাংলা)"
  },
  "🌶️ Telugu (తెలుగు)": {
    "hi": "🌶️ तेलुगु (తెలుగు)",
    "pa": "🌶️ ਤੇਲਗੂ (తెలుగు)",
    "mr": "🌶️ तेलगू (తెలుగు)",
    "gu": "🌶️ તેલુગુ (తెలుగు)",
    "bn": "🌶️ তেলেগু (తెలుగు)",
    "te": "🌶️ తెలుగు (తెలుగు)",
    "ta": "🌶️ தெலுங்கு (తెలుగు)",
    "kn": "🌶️ ತೆಲುಗು (తెలుగు)"
  },
  "🌴 Tamil (தமிழ்)": {
    "hi": "🌴 तमिल (தமிழ்)",
    "pa": "🌴 ਤਾਮਿਲ (தமிழ்)",
    "mr": "🌴 तमिळ (தமிழ்)",
    "gu": "🌴 તામિલ (தமிழ்)",
    "bn": "🌴 তামিল (தமிழ்)",
    "te": "🌴 తమిళ (தமிழ்)",
    "ta": "🌴 தமிழ் (தமிழ்)",
    "kn": "🌴 ತಮಿಳು (தமிழ்)"
  },
  "☕ Kannada (ಕನ್ನಡ)": {
    "hi": "☕ कन्नड़ (ಕನ್ನಡ)",
    "pa": "☕ ਕੰਨੜ (ಕನ್ನಡ)",
    "mr": "☕ कन्नड (ಕನ್ನಡ)",
    "gu": "☕ કન્નડ (ಕನ್ನಡ)",
    "bn": "☕ কন্নড় (ಕನ್ನಡ)",
    "te": "☕ కన్నడ (ಕನ್ನಡ)",
    "ta": "☕ கன்னடம் (ಕನ್ನಡ)",
    "kn": "☕ ಕನ್ನಡ (ಕನ್ನಡ)"
  },
  "🌐 English": {
    "hi": "🌐 अंग्रेज़ी",
    "pa": "🌐 ਅੰਗਰੇਜ਼ੀ",
    "mr": "🌐 इंग्रजी",
    "gu": "🌐 અંગ્રેજી",
    "bn": "🌐 ইংরেজি",
    "te": "🌐 ఇంగ్లీష్",
    "ta": "🌐 ஆங்கிலம்",
    "kn": "🌐 ಇಂಗ್ಲಿಷ್"
  },
  "[KISAN-Q] Token #42 confirmed. Slot: 10:00-11:00 AM, Gate 2. Turnaround: <45m. Fair-share priority granted. Helpline: 1800-547-2600": {
    "hi": "[KISAN-Q] टोकन #42 कन्फर्म हो गया है। स्लॉट: 10:00-11:00 AM, गेट 2। टर्नअराउंड: <45m। फेयर-शेयर प्राथमिकता दी गई है। हेल्पलाइन: 1800-547-2600",
    "pa": "[KISAN-Q] ਟੋਕਨ #42 ਪੱਕਾ ਹੋ ਗਿਆ ਹੈ। ਸਲਾਟ: 10:00-11:00 AM, ਗੇਟ 2। ਟਰਨਅਰਾਊਂਡ: <45m। ਨ્યાਇਕ ਹਿੱਸੇਦਾਰੀ ਤਰجیਹ ਦਿੱਤੀ ਗਈ ਹੈ। ਹੈਲਪਲਾਈਨ: 1800-547-2600",
    "mr": "[KISAN-Q] टोकन #42 कन्फर्म झाले आहे. स्लॉट: 10:00-11:00 AM, गेट 2. टर्नअराउंड: <45m. फेअर-शेअर प्राधान्य मंजूर केले आहे. हेल्पलाइन: 1800-547-2600",
    "gu": "[KISAN-Q] ટોકન #42 કન્ફર્મ થઈ ગયું છે. સ્લોટ: 10:00-11:00 AM, ગેટ 2. ટર્નઅરાઉન્ડ: <45m. ફેર-શેર અગ્રતા આપવામાં આવી છે. હેલ્પલાઇન: 1800-547-2600",
    "bn": "[KISAN-Q] টোকেন #42 নিশ্চিত করা হয়েছে। স্লট: 10:00-11:00 AM, গেট 2। টার্নঅ্যারাউন্ড: <45m। ন্যায্য অংশ অগ্রাধিকার দেওয়া হয়েছে। হেল্পলাইন: 1800-547-2600",
    "te": "[KISAN-Q] టోకెన్ #42 నిర్ధారించబడింది. స్లాట్: 10:00-11:00 AM, గేట్ 2. టర్న్‌అరౌండ్: <45m. ఫెయిర్-షేర్ ప్రాధాన్యత మంజూరు చేయబడింది. హెల్ప్‌లైన్: 1800-547-2600",
    "ta": "[KISAN-Q] டோக்கன் #42 உறுதிப்படுத்தப்பட்டது. ஸ்லாட்: 10:00-11:00 AM, கேட் 2. டர்ன்அரவுண்ட்: <45m. நியாயமான பங்கு முன்னுரிமை வழங்கப்பட்டுள்ளது. உதவி எண்: 1800-547-2600",
    "kn": "[KISAN-Q] ಟೋಕನ್ #42 ದೃಢೀಕರಿಸಲಾಗಿದೆ. ಸ್ಲಾಟ್: 10:00-11:00 AM, ಗೇಟ್ 2. ಟರ್ನ್‌ಅರೌಂಡ್: <45m. ನ್ಯಾಯಯುತ ಪಾಲು ಮುನ್ನೆಡೆ ಮಂಜೂರು ಮಾಡಲಾಗಿದೆ. ಸಹಾಯವಾಣ��: 1800-547-2600"
  },
  "e-NAM APMC Helpdesk Kiosk": {
    "hi": "e-NAM APMC हेल्पडेस्क कियोस्क",
    "pa": "e-NAM APMC ਹੈਲਪਡੈਸਕ ਕਿਓਸਕ",
    "mr": "e-NAM APMC हेल्पडेस्क किओस्क",
    "gu": "e-NAM APMC હેલ્પડેસ્ક કિઓસ્ક",
    "bn": "e-NAM APMC হেল্পডেস্ক কিওস্ক",
    "te": "e-NAM APMC హెల్ప్‌డెస్క్ కియోస్క్",
    "ta": "e-NAM APMC உதவி மையம் கியோஸ்க்",
    "kn": "e-NAM APMC ಸಹಾಯ ಕೇಂದ್ರ ಕಿಯೋಸ್ಕ್"
  },
  "Physical Touch-Screen Token Terminals for Walk-in Farmers": {
    "hi": "वॉक-इन किसानों के लिए फिजिकल टच-स्क्रीन टोकन टर्मिनल",
    "pa": "ਪੈਦਲ ਆਉਣ ਵਾਲੇ ਕਿਸਾਨਾਂ ਲਈ ਫਿਜ਼ੀਕਲ ਟੱਚ-ਸਕ੍ਰੀਨ ਟੋਕਨ ਟਰਮੀਨਲ",
    "mr": "वॉक-इन शेतकऱ्यांसाठी फिजिकल टच-स्क्रीन टोकन टर्मिनल्स",
    "gu": "વોક-ઇન ખેડૂતો ���ાટે ફિઝિકલ ટચ-સ્ક્રીન ટોકન ટર્મિનલ્સ",
    "bn": "ওয়াক-ইন কৃষকদের জন্য ফিজিক্যাল টাচ-স্ক্রিন টোকেন টার্মিনাল",
    "te": "వాక్-ఇన్ రైతుల కోసం ఫిజికల్ టచ్-స్క్రీన్ టోకెన్ టెర్మినల్స్",
    "ta": "நேரில் வரும் விவசாயிகளுக்கான பிசிகல் டச்-ஸ்கிரீன் டோக்கன் டெர்மினல்கள்",
    "kn": "ನೇರವಾಗಿ ಬರುವ ರೈತರಿಗಾಗಿ ಫಿಸಿಕಲ್ ಟಚ್-ಸ್ಕ್ರೀನ್ ಟೋಕನ್ ಟರ್ಮಿನಲ್‌ಗಳು"
  },
  "For farmers without mobile connectivity, Mandi Helpdesk Kiosks print instant physical QR gate passes with designated weighbridge bay routing.": {
    "hi": "मोबाइल कनेक्टिविटी के बिना किसानों के लिए, मंडी हेल्पडेस्क कियोस्क निर्धारित वीब्रिज बे रूटिंग के साथ तुरंत फिजिकल QR गेट पास प्रिंट करते हैं।",
    "pa": "ਮੋਬਾਈਲ ਕਨੈਕਟੀਵਿਟੀ ਤੋਂ ਬਿਨਾਂ ਕਿਸਾਨਾਂ ਲਈ, ਮੰਡੀ ਹੈਲਪਡੈਸਕ ਕਿਓਸਕ ਨਿਰਧਾਰਤ ਵੇਬਰਿਜ ਬੇ ਰੂਟਿੰਗ ਨਾਲ ਤੁਰੰਤ ਫਿਜ਼ੀਕਲ QR ਗੇਟ ਪਾਸ ਪ੍ਰਿੰਟ ਕਰਦੇ ਹਨ।",
    "mr": "मोबाईल कनेक्टिव्हिटी नसलेल्या शेतकऱ्यांसाठी, मंदी हेल्पडेस्क किओस्क निर्धारित वेब्रिज बे रूटिंगसह त्वरित फिजिकल QR गेट पास प्रिंट करतात.",
    "gu": "મોબાઇલ કનેક્ટિવિટી વગરના ખેડૂતો માટે, મંડી હેલ્પડેસ્ક કિઓસ્ક નિર્ધારિત વેબ્રિજ બે રૂટિંગ સાથે તુરંત ફિઝિકલ QR ગેટ પાસ પ્રિન્ટ કરે છે.",
    "bn": "মোবাইল কানেক্টিভিটি ছাড়া কৃষকদের জন্য, মান্ডি হেল্পডেস্ক কিওস্ক নির্ধারিত ওয়েব্রিজ বে রুটিং সহ তাৎক্ষণিক শারীরিক QR গেট পাস প্রিন্ট করে।",
    "te": "మొబైల్ కనెక్టివిటీ లేని రైతుల కోసం, మండి హెల్ప్‌డెస్క్ కియోస్క్‌లు నిర్దేశిత వేబ్రిడ్జ్ బే రూటింగ్‌తో తక్షణ ఫిజికల్ QR గేట్ పాస్‌లను ప్రింట్ చేస్తాయి.",
    "ta": "மொபைல் இணைப்பு இல்லாத விவசாயிகளுக்கு, மண்டி உதவி மையம் கியோஸ்க்குகள் குறிப்பிட்ட வெயிபிரிட்ஜ் பே ரூட்டிங்குடன் உடனடி பிசிகல் QR கேட் பாஸ்களை அச்சிடுகின்றன.",
    "kn": "ಮೊಬೈಲ್ ಸಂಪರ್ಕವಿಲ್ಲದ ರೈತರಿಗಾಗಿ, ಮಂಡಿ ಸಹಾಯ ಕೇಂದ್ರ ಕಿಯೋಸ್ಕ್‌ಗಳು ನಿಗದಿತ ತೂಕದ ಸೇತುವೆ ಬೇ ರೂಟಿಂಗ್‌ನೊಂದಿಗೆ ತಕ್ಷಣದ ಫಿಸಿಕಲ್ QR ಗೇಟ್ ಪಾಸ್‌ಗಳನ್ನು ಮುದ್ರಿಸುತ್ತವೆ."
  },
  "📶 AIRTEL-4G": {
    "hi": "📶 AIRTEL-4G",
    "pa": "📶 AIRTEL-4G",
    "mr": "📶 AIRTEL-4G",
    "gu": "📶 AIRTEL-4G",
    "bn": "📶 AIRTEL-4G",
    "te": "📶 AIRTEL-4G",
    "ta": "📶 AIRTEL-4G",
    "kn": "📶 AIRTEL-4G"
  },
  "🔋 85%": {
    "hi": "🔋 85%",
    "pa": "🔋 85%",
    "mr": "🔋 85%",
    "gu": "🔋 85%",
    "bn": "🔋 85%",
    "te": "🔋 85%",
    "ta": "🔋 85%",
    "kn": "🔋 85%"
  },
  "KISAN-Q READY": {
    "hi": "KISAN-Q तैयार",
    "pa": "KISAN-Q ਤਿਆਰ",
    "mr": "KISAN-Q तयार",
    "gu": "KISAN-Q તૈયાર",
    "bn": "KISAN-Q প্রস্তুত",
    "te": "KISAN-Q సిద్ధంగా ఉంది",
    "ta": "KISAN-Q தயார்",
    "kn": "KISAN-Q ಸಿದ್ಧವಾಗಿದೆ"
  },
  "DIAL 1800-547-2600": {
    "hi": "DIAL 1800-547-2600",
    "pa": "DIAL 1800-547-2600",
    "mr": "DIAL 1800-547-2600",
    "gu": "DIAL 1800-547-2600",
    "bn": "DIAL 1800-547-2600",
    "te": "DIAL 1800-547-2600",
    "ta": "DIAL 1800-547-2600",
    "kn": "DIAL 1800-547-2600"
  },
  "[MENU]": {
    "hi": "[मेनू]",
    "pa": "[ਮੀਨੂ]",
    "mr": "[मेनू]",
    "gu": "[મેનુ]",
    "bn": "[মেনু]",
    "te": "[మెను]",
    "ta": "[பட்டியல்]",
    "kn": "[ಮೆನು]"
  },
  "[CLEAR]": {
    "hi": "[साफ करें]",
    "pa": "[ਸਾਫ਼ ਕਰੋ]",
    "mr": "[पुसून टाका]",
    "gu": "[સાف કરો]",
    "bn": "[মুছে ফেলুন]",
    "te": "[క్లియర్]",
    "ta": "[அழி]",
    "kn": "[ತೆರವುಗೊಳಿಸಿ]"
  },
  "CALL": {
    "hi": "कॉल",
    "pa": "ਕਾਲ",
    "mr": "कॉल",
    "gu": "કોલ",
    "bn": "কল",
    "te": "కాల్",
    "ta": "அழை",
    "kn": "ಕರೆ"
  },
  "CLR": {
    "hi": "सीएलआर",
    "pa": "ਸੀ.ਐੱਲ.ਆਰ.",
    "mr": "सीएलआर",
    "gu": "સીએલઆર",
    "bn": "সিএলআর",
    "te": "సిఎల్ఆర్",
    "ta": "CLR",
    "kn": "ಸಿಎಲ್ಆರ್"
  },
  "END": {
    "hi": "समाप्त",
    "pa": "ਸਮਾਪਤ",
    "mr": "शेवट",
    "gu": "સમાપ્ત",
    "bn": "শেষ",
    "te": "ముగింపు",
    "ta": "முடி",
    "kn": "ಮುಕ್ತಾಯ"
  },
  "ABC": {
    "hi": "ABC",
    "pa": "ABC",
    "mr": "ABC",
    "gu": "ABC",
    "bn": "ABC",
    "te": "ABC",
    "ta": "ABC",
    "kn": "ABC"
  },
  "DEF": {
    "hi": "DEF",
    "pa": "DEF",
    "mr": "DEF",
    "gu": "DEF",
    "bn": "DEF",
    "te": "DEF",
    "ta": "DEF",
    "kn": "DEF"
  },
  "GHI": {
    "hi": "GHI",
    "pa": "GHI",
    "mr": "GHI",
    "gu": "GHI",
    "bn": "GHI",
    "te": "GHI",
    "ta": "GHI",
    "kn": "GHI"
  },
  "JKL": {
    "hi": "JKL",
    "pa": "JKL",
    "mr": "JKL",
    "gu": "JKL",
    "bn": "JKL",
    "te": "JKL",
    "ta": "JKL",
    "kn": "JKL"
  },
  "MNO": {
    "hi": "MNO",
    "pa": "MNO",
    "mr": "MNO",
    "gu": "MNO",
    "bn": "MNO",
    "te": "MNO",
    "ta": "MNO",
    "kn": "MNO"
  },
  "PQRS": {
    "hi": "PQRS",
    "pa": "PQRS",
    "mr": "PQRS",
    "gu": "PQRS",
    "bn": "PQRS",
    "te": "PQRS",
    "ta": "PQRS",
    "kn": "PQRS"
  },
  "TUV": {
    "hi": "TUV",
    "pa": "TUV",
    "mr": "TUV",
    "gu": "TUV",
    "bn": "TUV",
    "te": "TUV",
    "ta": "TUV",
    "kn": "TUV"
  },
  "WXYZ": {
    "hi": "WXYZ",
    "pa": "WXYZ",
    "mr": "WXYZ",
    "gu": "WXYZ",
    "bn": "WXYZ",
    "te": "WXYZ",
    "ta": "WXYZ",
    "kn": "WXYZ"
  },
  "Keypad sound & regional speech synthesis active": {
    "hi": "कीपैड ध्वनि और क्षेत्रीय वाक् संश्लेषण सक्रिय है",
    "pa": "ਕીਪੈਡ ਆਵਾਜ਼ ਅਤੇ ਖੇਤਰੀ ਬੋਲੀ ਸੰਸ਼্লেষণ ਸਰਗਰਮ ਹੈ",
    "mr": "कीपॅड आवाज आणि प्रादेशिक वाक् संश्लेषण सक्रिय आहे",
    "gu": "કીપૅડ અવાજ અને પ્રાદેશિક વાણી સંશ્લેષણ સક્રિય છે",
    "bn": "কিপ্যাড শব্দ এবং আঞ্চলিক বাক সংশ্লেষণ সক্রিয় আছে",
    "te": "కీప్యాడ్ ధ్వని & ప్రాంతీయ వాక్ సంశ్లేషణ సక్రియంగా ఉంది",
    "ta": "விசப்��லகை ஒலி மற்றும் பிராந்திய பேச்சு தொகுப்பு செயலில் உள்ளது",
    "kn": "ಕೀಪ್ಯಾಡ್ ಧ್ವನಿ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಭಾಷಣ ಸಂಶ್ಲೇಷಣೆ ಸಕ್ರಿಯವಾಗಿದೆ"
  },
  "IMD Radar Integration": {
    "hi": "IMD रडार एकीकरण",
    "pa": "IMD ਰਡਾਰ ਏਕੀਕਰਣ",
    "mr": "IMD रडार एकत्रीकरण",
    "gu": "IMD રડાર ઇન્ટિગ્રેશન",
    "bn": "IMD রাডার ইন্টিগ্রেশন",
    "te": "IMD రాడార్ ఇంటిగ్రేషన్",
    "ta": "IMD ரேடார் ஒருங்கிணைப்பு",
    "kn": "IMD ರಡಾರ್ ಏಕೀಕರಣ"
  },
  "28°C": {
    "hi": "28°C",
    "pa": "28°C",
    "mr": "28°C",
    "gu": "28°C",
    "bn": "28°C",
    "te": "28°C",
    "ta": "28°C",
    "kn": "28°C"
  },
  "IMD Agromet 5-Day Operational Advisory (Khanna / Ludhiana Mandi Hub)": {
    "hi": "IMD एग्रोमेट 5-दिवसीय परिचालन परा��र्श (खन्ना / लुधियाना मंडी हब)",
    "pa": "IMD ਐਗਰੋਮੈਟ 5-ਦਿਨ ਦੀ ਕਾਰਜਸ਼ੀਲ ਸਲਾਹ (ਖੰਨਾ / ਲੁਧਿਆਣਾ ਮੰਡੀ ਹੱਬ)",
    "mr": "IMD ॲग्रोमेट ५-दिवसीय ऑपरेशनल सल्ला (खन्ना / लुधियाना मंडी हब)",
    "gu": "IMD એગ્રોમેટ 5-દિવસીય ઓપરેશનલ સલાહકાર (ખન્ના / લુધિયાણા મંડી હબ)",
    "bn": "IMD অ্যাগ্রোমেট ৫-দিনের অপারেশনাল পরামর্শ (খান্না / লুধিয়ানা মান্ডি হাব)",
    "te": "IMD అగ్రోమెట్ 5-రోజుల కార్యాచరణ సలహా (ఖన్నా / లుధియానా మండి హబ్)",
    "ta": "IMD அக்ரோமெட் 5 நாள் செயல்பாட்டு ஆலோசனை (கன்சா / லூதியானா மண்டி மையம்)",
    "kn": "IMD ಅಗ್ರೋಮೆಟ್ 5-ದಿನದ ಕಾರ್ಯಾಚರಣೆಯ ಸಲಹೆ (ಖನ್ನಾ / ಲುಧಿಯಾನಾ ಮಂಡಿ ಹಬ್)"
  },
  "Updated Every 3 Hours": {
    "hi": "हर 3 घंटे में अपडेट किया जाता है",
    "pa": "ਹਰ 3 ਘੰਟੇ ਬਾਅਦ ਅੱਪਡੇਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
    "mr": "दर ३ तासांनी अपडेट केले जाते",
    "gu": "દરેક 3 કલાકે અપડેટ થાય છે",
    "bn": "প্রতি ৩ ঘণ্টায় আপডেট করা হয়",
    "te": "ప్రతి 3 గంటలకు నవీకరించబడుతుంది",
    "ta": "ஒவ்வொரு 3 மணி நேரத்திற்கும் புதுப்பிக்கப்படும்",
    "kn": "ಪ್ರತಿ 3 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ ನವೀಕರಿಸಲಾಗುತ್ತದೆ"
  },
  "Forecast Day": {
    "hi": "पूर्वानुमान का दिन",
    "pa": "ਪૂર્વાનுமਾਨ ਦਿन",
    "mr": "अंदाजाचा दिवस",
    "gu": "આગાહીનો દિવસ",
    "bn": "পূর্বাভাসের দিন",
    "te": "సూచన రోజు",
    "ta": "முன்னறிவிப்பு நாள்",
    "kn": "ಮುನ್ಸೂಚನೆ ದಿನ"
  },
  "Temp": {
    "hi": "तापमान",
    "pa": "ਤਾਪਮਾਨ",
    "mr": "तापमान",
    "gu": "તાપમાન",
    "bn": "তাপমাত্রা",
    "te": "ఉష్ణో��్రత",
    "ta": "வெப்பநிலை",
    "kn": "ತಾಪಮಾನ"
  },
  "Rain Risk": {
    "hi": "बारिश का जोखिम",
    "pa": "ਮੀਂਹ ਦਾ ਖ਼ਤਰਾ",
    "mr": "पावसाचा धोका",
    "gu": "વરસાદનું જોખમ",
    "bn": "বৃষ্টির ঝুঁকি",
    "te": "వర్షపు ముప్పు",
    "ta": "மழை ஆபத்து",
    "kn": "ಮಳೆಯ ಅಪಾಯ"
  },
  "Wind / Humidity": {
    "hi": "हवा / आर्द्रता",
    "pa": "ਹਵਾ / ਨਮੀ",
    "mr": "वाऱ्याचा वेग / आर्द्रता",
    "gu": "પવન / ભેજ",
    "bn": "বাতাস / আর্দ্রতা",
    "te": "గಾಳಿ / తేమ",
    "ta": "காற்று / ஈரப்பதம்",
    "kn": "ಗಾಳಿ / ತೇವಾಂಶ"
  },
  "Automated Mandi Pacing Action": {
    "hi": "स्वचालित मंडी पेसिंग कार्रवाई",
    "pa": "ਸਵੈਚਾਲਤ ਮੰਡੀ ਪੇਸਿੰਗ ਕਾਰਵਾਈ",
    "mr": "ऑटोमेटेड म���धी पेसिंग कृती",
    "gu": "સ્વચાલિત મંડી પેસિંગ ક્રિયા",
    "bn": "স্বয়ংক্রিয় মান্ডি পেসিং অ্যাকশন",
    "te": "ఆటోమేటెడ్ మండి పేసింగ్ చర్య",
    "ta": "தானியங்கி மண்டி வேக நடவடிக்கை",
    "kn": "स्वಯಂಚಾಲಿತ ಮಂಡಿ ಪೇಸಿಂಗ್ ಕ್ರಿಯೆ"
  },
  "Today (Day 1)": {
    "hi": "आज (दिन 1)",
    "pa": "ਅੱਜ (ਦిన 1)",
    "mr": "आज (दिवस 1)",
    "gu": "આજે (દિવસ 1)",
    "bn": "আজ (দিন ১)",
    "te": "ఈరోజు (రోజు 1)",
    "ta": "இன்று (நாள் 1)",
    "kn": "ಇಂದು (ದಿನ 1)"
  },
  "25% (Low)": {
    "hi": "25% (कम)",
    "pa": "25% (ਘੱਟ)",
    "mr": "25% (कमी)",
    "gu": "25% (ઓછું)",
    "bn": "২৫% (কম)",
    "te": "25% (తక్కువ)",
    "ta": "25% (குறைவு)",
    "kn": "25% (ಕಡಿಮೆ)"
  },
  "12 km/h NW • 48%": {
    "hi": "12 किमी/घं उत्तर-पश्चिम • 48%",
    "pa": "12 ਕਿਮੀ/ਘੰ ਉੱਤਰ-ਪੱਛਮੀ • 48%",
    "mr": "12 किमी/तास उत्तर-पश्चिम • 48%",
    "gu": "12 કિમી/કલાક ઉત્તર-પશ્ચિમ • 48%",
    "bn": "১২ কিমি/ঘণ্টা উত্তর-পশ্চিম • ৪৮%",
    "te": "12 కి.మీ/గంట వాయువ్య • 48%",
    "ta": "12 கிமீ/மணி வடமேற்கு • 48%",
    "kn": "12 ಕಿಮೀ/ಗಂ ವಾಯುವ್ಯ • 48%"
  },
  "🟢 Full Gate Pacing: Open Silos": {
    "hi": "🟢 पूर्ण गेट पेसिंग: साइलो खुले हैं",
    "pa": "🟢 ਪੂਰੀ ਗੇਟ ਪੇਸਿੰਗ: ਸਾਈਲੋ ਖੁੱਲ੍ਹੇ ਹਨ",
    "mr": "🟢 फुल गेट पेसिंग: सिलो खुले आहेत",
    "gu": "🟢 ફુલ ગેટ પેસિંગ: સિલો ખુલ્લા છે",
    "bn": "🟢 ফুল গেট পেসিং: সাইলো খোলা আছে",
    "te": "🟢 పూర్తి గేట్ పేసింగ్: సైలోస్ తెరిచి ఉ��్నాయి",
    "ta": "🟢 முழு கேட் வேகம்: சைலோக்கள் திறக்கப்பட்டுள்ளன",
    "kn": "🟢 ಪೂರ್ಣ ಗೇಟ್ ಪೇಸಿಂಗ್: ಸೈಲೋಗಳು ತೆರೆದಿವೆ"
  },
  "Tomorrow (Day 2)": {
    "hi": "कल (दिन 2)",
    "pa": "ਕੱਲ੍ਹ (ਦిన 2)",
    "mr": "उद्या (दिवस 2)",
    "gu": "કાલે (દિવસ 2)",
    "bn": "আগামীকাল (দিন ২)",
    "te": "రేపు (రోజు 2)",
    "ta": "நாளை (நாள் 2)",
    "kn": "ನಾಳೆ (ದಿನ 2)"
  },
  "29°C": {
    "hi": "29°C",
    "pa": "29°C",
    "mr": "29°C",
    "gu": "29°C",
    "bn": "29°C",
    "te": "29°C",
    "ta": "29°C",
    "kn": "29°C"
  },
  "30% (Moderate)": {
    "hi": "30% (मध्यम)",
    "pa": "30% (मध्यम)",
    "mr": "30% (मध्यम)",
    "gu": "30% (मध्यम)",
    "bn": "30% (মাঝারি)",
    "te": "30% (ಮધ્યಮ)",
    "ta": "30% (மிதமானது)",
    "kn": "30% (ಮಧ್ಯಮ)"
  },
  "14 km/h W • 52%": {
    "hi": "14 किमी/घं प • 52%",
    "pa": "14 ਕਿमी/ਘੰ ਪ • 52%",
    "mr": "14 किमी/ता प • 52%",
    "gu": "14 કિમી/કલાક પ • 52%",
    "bn": "14 কিমি/ঘণ্টা प • 52%",
    "te": "14 కి.मी/గం ప • 52%",
    "ta": "14 கி.மீ/மணி மே • 52%",
    "kn": "14 ಕಿಮೀ/ಗಂ ಪ • 52%"
  },
  "🟢 Normal Inflow: Moisture Assaying": {
    "hi": "🟢 सामान्य आवक: नमी परीक्षण",
    "pa": "🟢 ਆਮ ਆਵਕ: ਨਮੀ ਦੀ ਜਾਂਚ",
    "mr": "🟢 सामान्य आवक: ओलावा तपासणी",
    "gu": "🟢 સામાન્ય આવક: ભેજ ચકાસણી",
    "bn": "🟢 স্বাভাবিক আগমন: আর্দ্রতা পরীক্ষা",
    "te": "🟢 సాధారణ రాక: తేమ పరీక్ష",
    "ta": "🟢 இயல்பான வருகை: ஈரப்பதம் பரிசோதனை",
    "kn": "🟢 ಸಾಮಾನ್ಯ ಒಳಹರಿವು: ತೇವಾಂಶ ಪರಿಶೀಲನೆ"
  },
  "Day 3 (Friday)": {
    "hi": "दिन 3 (शुक्रवार)",
    "pa": "ਦિન 3 (ਸ਼ੁੱਕਰਵਾਰ)",
    "mr": "दिवस 3 (शुक्रवार)",
    "gu": "દિવસ 3 (શુક્રવાર)",
    "bn": "দিন ৩ (শুক্রবার)",
    "te": "రోజు 3 (శుక్రవారం)",
    "ta": "நாள் 3 (வெள்ளிக்கிழமை)",
    "kn": "ದಿನ 3 (शुक्रवार)"
  },
  "26°C": {
    "hi": "26°C",
    "pa": "26°C",
    "mr": "26°C",
    "gu": "26°C",
    "bn": "26°C",
    "te": "26°C",
    "ta": "26°C",
    "kn": "26°C"
  },
  "75% (Severe ⚠️)": {
    "hi": "75% (गंभीर ⚠️)",
    "pa": "75% (ਗੰਭੀਰ ⚠️)",
    "mr": "75% (तीव्र ⚠️)",
    "gu": "75% (ગંભીર ⚠️)",
    "bn": "75% (তীব্র ⚠️)",
    "te": "75% (తీవ్రమైన ⚠️)",
    "ta": "75% (தீவிரமானது ⚠️)",
    "kn": "75% (ತೀವ್ರ ⚠️)"
  },
  "22 km/h E • 85%": {
    "hi": "22 किमी/घं पू • 85%",
    "pa": "22 ਕਿਮੀ/ਘੰ ਪੂ • 85%",
    "mr": "22 किमी/ता पू • 85%",
    "gu": "22 કિમી/કલાક પૂ • 85%",
    "bn": "22 কি��ি/ঘণ্টা পূ • 85%",
    "te": "22 కి.मी/గం తూ • 85%",
    "ta": "22 கி.மீ/மணி கி • 85%",
    "kn": "22 ಕಿಮೀ/ಗಂ ಪೂ • 85%"
  },
  "🚨 Auto-Pause Open Dispatch • Silo Divert": {
    "hi": "🚨 ऑटो-पॉज ओपन डिस्पैच • साइलो डायवर्ट",
    "pa": "🚨 ਆਟੋ-ਪੌਜ਼ ਓਪਨ ਡਿਸਪੈਚ • ਸਾਈਲੋ ਡਾਇਵਰਟ",
    "mr": "🚨 ऑटो-पॉज ओपन डिस्पॅच • सायलो डायव्हर्ट",
    "gu": "🚨 ઓટો-પોઝ ઓપન ડિસ્પેચ • સાયલો ડાયવર્ટ",
    "bn": "🚨 অটো-পজ ওপেন ডিসপ্যাচ • সাইলো ডাইভার্ট",
    "te": "🚨 ఆటో-పాజ్ ఓపెన్ డిస్పాచ్ • సైలో డైవర్ట్",
    "ta": "🚨 ஆட்டோ-பாஸ் ஓபன் டிஸ்பாட்ச் • சைலோ டைவர்ட்",
    "kn": "🚨 ಆಟೋ-ಪಾಸ್ ಓಪನ್ ಡಿಸ್ಪ್ಯಾಚ್ • ಸೈಲೋ ಡೈವರ್ಟ್"
  },
  "Day 4 (Saturday)": {
    "hi": "दिन 4 (शनि��ार)",
    "pa": "ਦિન 4 (ਸ਼ਨੀਵਾਰ)",
    "mr": "दिवस 4 (शनिवार)",
    "gu": "દિવસ 4 (શનિવાર)",
    "bn": "দিন ৪ (শনিবার)",
    "te": "రోజు 4 (శనివారం)",
    "ta": "நாள் 4 (சனி)",
    "kn": "ದಿನ 4 (शनिवार)"
  },
  "25°C": {
    "hi": "25°C",
    "pa": "25°C",
    "mr": "25°C",
    "gu": "25°C",
    "bn": "25°C",
    "te": "25°C",
    "ta": "25°C",
    "kn": "25°C"
  },
  "60% (Elevated)": {
    "hi": "60% (बढ़ा हुआ)",
    "pa": "60% (ਉੱਚा)",
    "mr": "60% (वाढलेले)",
    "gu": "60% (ઉંચું)",
    "bn": "60% (উন্নত)",
    "te": "60% (ಹೆಚ್ಚింది)",
    "ta": "60% (அதிகரித்த)",
    "kn": "60% (ಹೆಚ್ಚಳ)"
  },
  "18 km/h NE • 78%": {
    "hi": "18 किमी/घंटा उत्तर-पूर्व • 78%",
    "pa": "18 ਕਿमी/ਘੰਟਾ ਉੱਤਰ-ਪੂਰਬ • 78%",
    "mr": "18 किमी/तास ईशान्य • 78%",
    "gu": "18 કિમી/કલાક ઉત્તર-પૂર્વ • 78%",
    "bn": "18 কিমি/ঘণ্টা উত্তর-পূর্ব • 78%",
    "te": "18 కి.మీ/గంట ఈశాన్య • 78%",
    "ta": "18 கிமீ/மணி ஈசான்யம் • 78%",
    "kn": "18 ಕಿಮೀ/ಗಂ ಈಶಾನ್ಯ • 78%"
  },
  "🟡 High-Canopy Silo Priority Only": {
    "hi": "🟡 केवल हाई-कैनॉपी साइलो प्राथमिकता",
    "pa": "🟡 ਸਿਰਫ਼ ਹਾਈ-ਕੈਨੋپی ਸਾਈਲੋ ਤਰجیح",
    "mr": "🟡 फक्त हाय-कॅनोपी सायलो प्राधान्य",
    "gu": "🟡 માત્ર હાઇ-કેનોપી સાયલો અગ્રતા",
    "bn": "🟡 শুধুমাত্র হাই-ক্যানোপি সাইলো অগ্রাধিকার",
    "te": "🟡 హై-కనోపీ సైలో ప్రాధాన్యత మాత్రమే",
    "ta": "🟡 உயர்- விதான சைலோ முன்னுர��மை மட்டும்",
    "kn": "🟡 ಹೈ-ಕ್ಯಾನೋಪಿ ಸೈಲೋ ಪ್ರಾಶಸ್ತ್ಯ ಮಾತ್ರ"
  },
  "Day 5 (Sunday)": {
    "hi": "दिन 5 (रविवार)",
    "pa": "ਦিন 5 (ਐਤਵਾਰ)",
    "mr": "दिवस 5 (रविवार)",
    "gu": "દિવસ 5 (રવિવાર)",
    "bn": "দিন ৫ (রবিবার)",
    "te": "రోజు 5 (ఆదివారం)",
    "ta": "நாள் 5 (ஞாயிறு)",
    "kn": "ದಿನ 5 (ಭಾನುವಾರ)"
  },
  "27°C": {
    "hi": "27°C",
    "pa": "27°C",
    "mr": "27°C",
    "gu": "27°C",
    "bn": "27°C",
    "te": "27°C",
    "ta": "27°C",
    "kn": "27°C"
  },
  "15% (Clear)": {
    "hi": "15% (साफ)",
    "pa": "15% (ਸਾਫ਼)",
    "mr": "15% (स्वच्छ)",
    "gu": "15% (ચોખ્ખું)",
    "bn": "15% (পরিষ্কার)",
    "te": "15% (స్పష్టమైన)",
    "ta": "15% (தெளிவான)",
    "kn": "15% (ಸ್ಪಷ್ಟ)"
  },
  "10 km/h NW • 45%": {
    "hi": "10 किमी/घ���टा उत्तर-पश्चिम • 45%",
    "pa": "10 ਕਿਮੀ/ਘੰਟਾ ਉੱਤਰ-ਪੱਛਮ • 45%",
    "mr": "10 किमी/तास वायव्य • 45%",
    "gu": "10 કિમી/કલાક ઉત્તર-પશ્ચિમ • 45%",
    "bn": "10 কিমি/ঘণ্টা উত্তর-পশ্চিম • 45%",
    "te": "10 కి.మీ/గంట వాయవ్య • 45%",
    "ta": "10 கிமீ/மணி வடமேற்கு • 45%",
    "kn": "10 ಕಿಮೀ/ಗಂ ವಾಯುವ್ಯ • 45%"
  },
  "🟢 Resume 100% Express Clearance": {
    "hi": "🟢 100% एक्सप्रेस क्लीयरेंस फिर से शुरू करें",
    "pa": "🟢 100% ਐਕਸਪ੍ਰੈੱਸ ਕਲੀਅਰੈਂਸ ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ",
    "mr": "🟢 100% एक्सप्रेस क्लिरन्स पुन्हा सुरू करा",
    "gu": "🟢 100% એક્સપ્રેસ ક્લિયરન્સ ફરી શરૂ કરો",
    "bn": "🟢 ১০০% এক্সপ্রেস ক্লিয়ারেন্স পুনরায় শুরু করুন",
    "te": "🟢 100% ఎక్స్‌��్రెస్ క్లియరెన్స్‌ని పునఃప్రారంభించండి",
    "ta": "🟢 100% எக்ஸ்பிரஸ் கிளியரன்ஸை மீண்டும் தொடங்கவும்",
    "kn": "🟢 100% ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಅನ್ನು ಪುನರಾರಂಭಿಸಿ"
  },
  "Test how KISAN-Q prevents ₹10+ Crores in annual post-harvest grain spoilage by automatically halting open dispatches before the cloudburst hits:": {
    "hi": "टेस्ट करें कि कैसे KISAN-Q बादल फटने से पहले खुले प्रेषणों (डिस्पैच) को स्वचालित रूप से रोककर वार्षिक कटाई के बाद के अनाज के नुकसान में ₹10+ करोड़ की रोकथाम करता है:",
    "pa": "ਪਰਖੋ ਕਿਵੇਂ KISAN-Q ਬੱਦਲ ਫਟਣ ਤੋਂ ਪਹਿਲਾਂ ਖੁੱਲ੍ਹੇ ਡਿਸਪੈਚਾਂ ਨੂੰ ਆਪਣੇ ਆਪ ਰੋਕ ਕੇ ਸਾਲਾਨਾ ਵਾਢੀ ਤੋਂ ਬਾਅਦ ਦੇ ਅਨਾਜ ਦੇ ਨੁਕسان ਵਿੱਚ ₹10+ ਕਰੋੜ ਦੀ ਬਚਤ ਕਰਦਾ ਹੈ:",
    "mr": "KISAN-Q ढगफुटी होण्यापूर्वी खुल्या डिस्पॅच आपोआप थांबवून वार्षिक काढणीनंतरच्या धान्याच्या नासाडीतून ₹10+ कोटी कसे वाचवते ते तपासा:",
    "gu": "ચકાસો કે કેવી રીતે KISAN-Q વાદળ ફાટતા પહેલા ખુલ્લા ડિસ્પેચને આપમેળે અટકાવીને વાર્ષિક કાપણી પછીના અનાજના બગાડમાંથી ₹10+ કરોડ બચાવે છે:",
    "bn": "পরীক্ষা করে দেখুন কিভাবে KISAN-Q মেঘভাঙা বৃষ্টির আগে খোলা চালানগুলি স্বয়ংক্রিয়ভাবে বন্ধ করে বার্ষিক ফসল কাটার পরবর্তী শস্যের ক্ষতিতে ₹10+ কোটি টাকা বাঁচায়:",
    "te": "మేఘవిస్ఫోటనం సంభవించడానికి ముందే ఓపెన్ డిస్పాచ్‌లను ఆటోమేటిక్‌గా నిలిపివేయ��ం ద్వారా KISAN-Q వార్షిక కోత అనంతర ధాన్యం పాడుకాకుండా ₹10+ కోట్లను ఎలా నివారిస్తుందో పరీక్షించండి:",
    "ta": "மேகவெடிப்பு தாக்கும் முன் திறந்த அனுப்பல்களை தானாகவே நிறுத்துவதன் மூலம் KISAN-Q ஆனது வருடாந்திர அறுவடைக்குப் பிந்தைய தானியச் சேதத்தில் ₹10+ கோடிகளை எவ்வாறு தவிർக்கிறது என்பதைச் சோதிக்கவும்:",
    "kn": "ಮೋಡ ಸ್ಫೋಟಗೊಳ್ಳುವ ಮೊದಲು ಮುಕ್ತ ರವಾನೆಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿಲ್ಲಿಸುವ ಮೂಲಕ KISAN-Q ವಾರ್ಷಿಕ ಕಟಾವಿನ ನಂತರದ ಧಾನ್ಯದ ಹಾಳಾಗುವಿಕೆಯಲ್ಲಿ ₹10+ ಕೋಟಿಗಳನ್ನು ಹೇಗೆ ತಡೆಯುತ್ತದೆ ಎಂಬುದನ್ನು ಪರೀಕ್ಷಿಸಿ:"
  },
  "₹4,500 Saved": {
    "hi": "₹4,500 बचाए गए",
    "pa": "₹4,500 ਬچਾਏ ਗਏ",
    "mr": "₹4,500 वाचवले",
    "gu": "₹4,500 બચાવ્યા",
    "bn": "₹4,500 সাশ্রয় হয়েছে",
    "te": "₹4,500 ఆదా చేయబడ్డాయి",
    "ta": "₹4,500 சேமிக்கப்பட்டது",
    "kn": "₹4,500 ಉಳಿಸಲಾಗಿದೆ"
  },
  "ZERO": {
    "hi": "शून्य",
    "pa": "ਜ਼ੀਰੋ",
    "mr": "शून्य",
    "gu": "શૂન્ય",
    "bn": "শূন্য",
    "te": "సున్నా",
    "ta": "பூஜ்ஜியம்",
    "kn": "ಶೂನ್ಯ"
  },
  "Direct 100% MSP value preservation": {
    "hi": "प्रत्यक्ष 100% MSP मूल्य संरक्षण",
    "pa": "ਸਿੱద్ధਾ 100% MSP ਮੁੱਲ ਸੰਭਾਲ",
    "mr": "थेट 100% MSP मूल्य जतन",
    "gu": "સીધી 100% MSP મૂલ્ય જાળવણી",
    "bn": "সরাসরি ১০০% MSP মূল্য সংরক্ষণ",
    "te": "ప్రత్యక్ష 100% MSP విలువ పరిరక్షణ",
    "ta": "நேரடி 100% MSP மதிப்பு பாதுகாப்பு",
    "kn": "ನೇರ 100% MSP ಮೌಲ್ಯ ಸಂರಕ್ಷಣೆ"
  },
  "Saves ₹1,500/day tractor rental penalty": {
    "hi": "₹1,500/दिन ट्रैक्टर किराया जुर्माना बचाता है",
    "pa": "₹1,500/ਦਿਨ ਟਰੈਕਟਰ ਕਿਰਾਏ ਦਾ ਜੁਰਮਾਨਾ ਬਚਾਉਂਦਾ ਹੈ",
    "mr": "₹1,500/दिवस ट्रॅक्टर भाडे दंड वाचवतो",
    "gu": "₹1,500/દિવસ ટ્રેક્ટર ભાડા દંડ બચાવે છે",
    "bn": "প্রতিদিন ₹1,500 ট্র্যাক্টর ভাড়ার জরিমানা বাঁচায়",
    "te": "₹1,500/రోజు ట్రాక్టర్ అద్దె జరిಮಾನాను ఆదా చేస్తుంది",
    "ta": "₹1,500/நாள் டிராக்டர் வாடகை அபராதத்தை சேமிக்கிறது",
    "kn": "₹1,500/ದಿನ ಟ್ರ್ಯಾಕ್ಟರ್ ಬಾಡಿಗೆ ದಂಡವನ್ನು ಉಳಿಸುತ್ತದೆ"
  },
  "Lowers diesel burn during idling queues": {
    "hi": "लंबी लाइनों में खड़े रहने के दौरान डीजल की खपत कम करता है",
    "pa": "ਲੰਬੀਆਂ ਲਾਈਨਾਂ ਵਿੱਚ ਖੜ੍ਹੇ ਹੋਣ ਦੌਰਾਨ ਡੀਜ਼ਲ ਦੀ ਖਪਤ ਘਟਾਉਂਦਾ ਹੈ",
    "mr": "रांगेत उभे असताना डिझेलचा वापर कमी करतो",
    "gu": "લાઈનમાં ઊભા રહેતી વખતે ડીઝલનો બગાડ ઘટાડે છે",
    "bn": "লাইন্সে দাঁড়িয়ে থাকার সময় ডিজেল পোড়ানো কম���য়",
    "te": "క్యూలలో నిలబడి ఉన్నప్పుడు డీజిల్ ఖర్చును తగ్గిస్తుంది",
    "ta": "வரிசையில் காத்திருக்கும்போது டீசல் எரிதலைக் குறைக்கிறது",
    "kn": "ಸಾಲಿನಲ್ಲಿ ನಿಂತಿರುವಾಗ ಡೀಸೆಲ್ ಬಳಕೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ"
  },
  "Instant digital weighment receipt on phone": {
    "hi": "फ़ोन पर तुरंत डिजिटल तौल रसीद",
    "pa": "ਫੋਨ 'ਤੇ ਤੁਰੰਤ ਡਿਜੀਟਲ ਤੋਲ ਰਸੀਦ",
    "mr": "फोनवर झटपट डिजिटल वजन पावती",
    "gu": "ફોન પર તુરંત ડિજિટલ વજનની રસીદ",
    "bn": "ফোনে তাৎক্ষণিক ডিজিটাল ওজন রসিদ",
    "te": "ఫోన్‌లో తక్షణ డిజిటల్ తూకం రసీదు",
    "ta": "தொலைபேசியில் உடனடி டிஜிட்டல் எடை ரசீது",
    "kn": "ಫೋನ್‌ನಲ್ಲಿ ತಕ್ಷ���ದ ಡಿಜಿಟಲ್ ತೂಕದ ರಶೀದಿ"
  },
  "Real-time district telemetry across all APMCs": {
    "hi": "सभी APMC में वास्तविक समय जिला टेलीमेट्री",
    "pa": "ਸਾਰੇ APMC ਵਿੱਚ ਰੀਅਲ-ਟਾਈਮ ਜ਼ਿਲ੍ਹਾ ਟੈਲੀਮੈਟਰੀ",
    "mr": "सर्व APMC मध्ये रिअल-टाइम जिल्हा टेलीमेट्री",
    "gu": "બધા APMC માં રીઅલ-ટાઇમ જિલ્લા ટેલિમેટ્રી",
    "bn": "সমস্ত APMC জুড়ে রিয়েল-টাইম জেলা টেলিমেট্রি",
    "te": "అన్ని APMCలలో రియల్ టైమ్ జిల్లా టెలిమెట్రీ",
    "ta": "அனைத்து APMC-களிலும் நிகழ்நேர மாவட்ட டெலிமெட்ரி",
    "kn": "ಎಲ್ಲಾ APMC ಗಳಲ್ಲಿ ನೈಜ-ಸಮಯದ ಜಿಲ್ಲಾ ದೂರದರ್ಶಕ (ಟೆಲಿಮೆಟ್ರಿ)"
  },
  "Eliminates ghost procurement scams": {
    "hi": "फर्जी खरीद घोटालों को समाप्त करता है",
    "pa": "ਫਰਜ਼ੀ ਖਰੀਦ ਘੁਟਾਲਿਆਂ ਨੂੰ ਖਤਮ ਕਰਦਾ ਹੈ",
    "mr": "बोगस खरेदी घोटाळे संपवतो",
    "gu": "ખોટી ખરીદીના ભ્રष्टाચારને નાબૂદ કરે છે",
    "bn": "জাল প্রকিউরমেন্ট কেলেঙ্কারি দূর করে",
    "te": "దొంగ కొనుగోలు కుంభకోణాలను తొలగిస్తుంది",
    "ta": "போலி கொள்முதல் முறைகேடுகளை ஒழிக்கிறது",
    "kn": "ನಕಲಿ ಖರೀದಿ ಹಗರಣಗಳನ್ನು ನಿರ್ಮೂಲನೆ ಮಾಡುತ್ತದೆ"
  },
  "40% higher truck turnaround speed": {
    "hi": "40% अधिक ट्रक आवाजाही गति",
    "pa": "40% ਵੱਧ ਟਰੱਕ ਆਵਾਜਾਈ ਗਤੀ",
    "mr": "40% जास्त ट्रक टर्नअराउंड वेग",
    "gu": "40% વધુ ટ્રક અવરજવર ઝડપ",
    "bn": "৪০% বেশি ট্রাক টার্নঅ্যারাউন্ড গতি",
    "te": "40% ఎక్కువ ��్రక్ టర్న్‌అరౌండ్ వేగం",
    "ta": "40% அதிகமான லாரி இயக்க வேகம்",
    "kn": "40% ಹೆಚ್ಚಿನ ಟ್ರಕ್ ವಾಪಸಾತಿ ವೇಗ"
  },
  "Direct Aadhaar DBT bank payout verification": {
    "hi": "प्रत्यक्ष आधार DBT बैंक भुगतान सत्यापन",
    "pa": "ਸਿੱਧਾ ਆਧਾਰ DBT ਬੈਂਕ ਭੁਗਤਾਨ ਤਸਦੀਕ",
    "mr": "थेट आधार DBT बँक पेमेंट पडताळणी",
    "gu": "સીધી આધાર DBT બેંક ચુકવણી ચકાસણી",
    "bn": "সরাসরি আধার DBT ব্যাংক পেমেন্ট যাচাইকরণ",
    "te": "ప్రత్యక్ష ఆధార్ DBT బ్యాంకు చెల్లింపు ధృవీకరణ",
    "ta": "நேரடி ஆதார் DBT வங்கி செலுத்தல் சரிபார்ப்பு",
    "kn": "ನೇರ ಆಧಾರ್ DBT ಬ್ಯಾಂಕ್ ಪಾವತಿ ಪರಿಶೀಲನೆ"
  },
  "80% cut in idling diesel emissions": {
    "hi": "आइडलिंग डीजल उत्सर्जन में 80% की कटौती",
    "pa": "ਆइडलिंग ਡੀਜ਼ਲ ਇੰਜਣਾਂ ਦੇ ਨਿਕਾਸ ਵਿੱਚ 80% ਦੀ ਕਟੌਤੀ",
    "mr": "आइडलिंग डिझेल उत्सर्जनात ८०% घट",
    "gu": "આઈડલિંગ ડીઝલ ઉત્સર્જનમાં 80% ઘટાડો",
    "bn": "আইডলিং ডিজেল নির্গমন ৮% হ্রাস",
    "te": "ఐడ్లింగ్ డీజిల్ ఉద్గారాలలో 80% తగ్గింపు",
    "ta": "செயலற்ற நிலை���ில் உள்ள டீசல் உமிழ்வு 80% குறைப்பு",
    "kn": "ಐಡ್ಲಿಂಗ್ ಡೀಸೆಲ್ ಹೊರಸೂಸುವಿಕೆಯಲ್ಲಿ 80% ಕಡಿತ"
  },
  "Decongests national & state highways": {
    "hi": "राष्ट्रीय और राज्य राजमार्गों पर भीड़भाड़ कम करता है",
    "pa": "ਰਾਸ਼ਟਰੀ ਅਤੇ ਰਾਜ ਹਾਈਵੇਅ 'ਤੇ ਭੀੜ-ਭੜੱਕੇ ਨੂੰ ਘਟਾਉਂਦਾ ਹੈ",
    "mr": "राष्ट्रीय आणि राज्य महामार्गांवरची वाहतूक कोंडी कमी करते",
    "gu": "રાષ્ટ્રીય અને રાજ્ય ધોરીમાર્ગો પર ટ્રાફિકની ભીડ ઘટાડે છે",
    "bn": "জাতীয় ও রাজ্য মহাসড়কগুলোর যানজট কমায়",
    "te": "జాతీయ & రాష్ట్ర రహదారులపై రద్దీని తగ్గిస్తుంది",
    "ta": "தேசிய மற்றும் மாநில நெடுஞ்சாலைகளில் நெரிசலைக் குற��க்கிறது",
    "kn": "ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ರಾಜ್ಯ ಹೆದ್ದಾರಿಗಳಲ್ಲಿ ದಟ್ಟಣೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ"
  },
  "Restores dignity to small & marginal farmers": {
    "hi": "छोटे और सीमांत किसानों को सम्मान वापस दिलाता है",
    "pa": "ਛੋਟੇ ਅਤੇ ਸੀਮਾਂਤ ਕਿਸਾਨਾਂ ਨੂੰ ਮਾਣ-ਸਤਿ ਬਹਾਲ ਕਰਦਾ ਹੈ",
    "mr": "लहान आणि अल्पभूधारक शेतकऱ्यांची प्रतिष्ठा परत मिळवून देतो",
    "gu": "નાના અને સીમાંત ખેડૂતોને ગૌરવ અપાવે છે",
    "bn": "ক্ষুদ্র ও প্রান্তিক কৃষকদের মর্যাদা ফিরিয়ে দেয়",
    "te": "చిన్న & సన్నకారు రైతులకు గౌరవాన్ని పునరుద్ధరిస్తుంది",
    "ta": "சிறு மற்றும் குறு விவசாயிகளுக்கு மரியாதையை மீட்டெடுக்கிறது",
    "kn": "ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ ಗೌರವವನ್ನು ಮರುಸ್ಥಾಪಿಸುತ್ತದೆ"
  },
  "Zero night sleeping on highways in harsh weather": {
    "hi": "खराब मौसम में राजमार्गों पर रात में सोने की मजबूरी खत्म",
    "pa": "ਮਾੜੇ ਮੌਸਮ ਵਿੱਚ ਹਾਈਵੇਅ 'ਤੇ ਰਾਤ ਨੂੰ ਸੌਣ ਦੀ ਜ਼ਰੂਰਤ ਖਤਮ",
    "mr": "कठोर हवामानात महामार्गांवर रात्री झोपण्याची वेळ शून्य",
    "gu": "ખરાબ હવામાનમાં હાઇવે પર રાત્રે સૂવાની જરૂરિયાત શૂન્ય",
    "bn": "খারাপ আবহাওয়ায় মহাসড়কে রাতে ঘুমানোর প্রয়োজন শূন্য",
    "te": "కఠినమైన వాతావరణంలో రహదారులపై రాత్రి నిద్రపోవాల్సిన పరిస్థితి లేదు",
    "ta": "கடுமையான காலநிலையில் நெடுஞ்சா��ைகளில் இரவில் தூங்கும் அவலம் இல்லை",
    "kn": "ಕಠಿಣ ಹವಾಮಾನದಲ್ಲಿ ಹೆದ್ದಾರಿಗಳಲ್ಲಿ ರಾತ್ರಿ ಮಲಗುವ ಪರಿಸ್ಥಿತಿ ಶೂನ್ಯ"
  },
  "APMC Mandi Ground Infrastructure": {
    "hi": "APMC मंडी ग्राउंड बुनियादी ढांचा",
    "pa": "APMC ਮੰਡੀ ਗਰਾਊਂਡ ਬੁਨਿਆਦੀ ढांचा",
    "mr": "APMC मंदी जमीन पायाभूत सुविधा",
    "gu": "APMC મંડી ગ્રાઉન્ડ ઈન્ફ્રાસ્ટ્રક્ચર",
    "bn": "APMC মান্ডি গ্রাউন্ড পরিকাঠামো",
    "te": "APMC మండి గ్రౌండ్ ఇన్‌ఫ్రాస్ట్రక్చర్",
    "ta": "APMC மண்டி தரை கட்டமைப்பு",
    "kn": "APMC ಮಂಡಿ ಮೈದಾನದ ಮೂಲಸೌಕರ್ಯ"
  },
  "Ground Reality: 8 Pillars of Modern APMC Procurement Transformation": {
    "hi": "ग्राउंड रियलिटी: आधुनिक APMC खरीद परिवर्तन के 8 स्तंभ",
    "pa": "ਜ਼ਮੀਨੀ ਹਕੀਕਤ: ਆਧੁਨਿਕ APMC ਖਰੀਦ ਤਬਦੀਲੀ ਦੇ 8 ਥੰਮ੍ਹ",
    "mr": "ग्राउंड रिॲलिटी: आधुनिक APMC खरेदी परिवर्तनाचे ८ खांब",
    "gu": "ગ્રાઉન્ડ રિયાલિટી: આધુનિક APMC ખરીદી પરિવર્તનના 8 સ્તંભો",
    "bn": "গ্রাউন্ড রিয়েলিটি: আধুনিক APMC ক্রয় রূপান্তরের ৮টি স্তম্ভ",
    "te": "గ్రౌండ్ రియాలిటీ: ఆధునిక APMC సేకరణ పరివర్తన యొక్క 8 స్తంభాలు",
    "ta": "தரை யதார்த்தம்: நவீன APMC கொள்முதல் மாற்றத்தின் 8 தூண்கள்",
    "kn": "ನೆಲದ ವಾಸ್ತವತೆ: ಆಧುನಿಕ APMC ಖರೀದಿ ರೂಪಾಂತರದ 8 ಸ್ತಂಭಗಳು"
  },
  "Deployed Across 2,400+ APMC Mandis Nationwide": {
    "hi": "देशभर की 2,400+ APMC मंडियों में तैनात",
    "pa": "ਦੇਸ਼ ਭਰ ਵਿੱਚ 2,400+ APMC ਮੰਡੀਆਂ ��ਿੱਚ ਤਾਇਨਾਤ",
    "mr": "देशभरातील २,४००+ APMC मंदींमध्ये तैनात",
    "gu": "દેશભરની 2,400+ APMC મંડીઓમાં તૈનાત",
    "bn": "দেশজুড়ে ২,৪০০+ APMC মান্ডিতে মোতায়েন করা হয়েছে",
    "te": "దేశవ్యాప్తంగా 2,400+ APMC మండిలలో మోహరించబడింది",
    "ta": "நாடு முழுவதும் 2,400+ APMC மண்டிகளில் பயன்படுத்தப்பட்டுள்ளது",
    "kn": "ದೇಶಾದ್ಯಂತ 2,400+ APMC ಮಂಡಿಗಳಲ್ಲಿ ನಿಯೋಜಿಸಲಾಗಿದೆ"
  },
  "Pillar #1 • Gate RFID Automation": {
    "hi": "स्तंभ #1 • गेट RFID स्वचालन",
    "pa": "ਥੰਮ੍ਹ #1 • ਗੇਟ RFID ਆਟੋਮੇਸ਼ਨ",
    "mr": "खांब #१ • गेट RFID ऑटोमेशन",
    "gu": "સ્તંભ #1 • ગેટ RFID ઓટોમેશન",
    "bn": "স্তম্ভ #১ • গেট RFID অটোমেশন",
    "te": "స్తంభం #1 • గేట్ RFID ఆటోమేషన్",
    "ta": "தூண் #1 • கேட் RFID ஆட்டோமேஷன்",
    "kn": "ಸ್ತಂಭ #1 • ಗೇಟ್ RFID ಆಟೋಮೇಷನ್"
  },
  "APMC Field Infrastructure": {
    "hi": "APMC फील्ड बुनियादी ढांचा",
    "pa": "APMC ਫੀਲਡ ਬੁਨਿਆਦੀ ਢਾਂਚਾ",
    "mr": "APMC फील्ड पायाभूत सुविधा",
    "gu": "APMC ફિલ ઇન્ફ્રાસ્ટ્રક્ચર",
    "bn": "APMC ফিল্ড পরিকাঠামো",
    "te": "APMC ఫీల్డ్ ఇన్‌ఫ్రాస్ట్రక్చర్",
    "ta": "APMC கள கட்டமைப்பு",
    "kn": "APMC ಕ್ಷೇತ್ರ ಮೂಲಸೌಕರ್ಯ"
  },
  "Automated RFID Boom Barrier & Dynamic LED Token Display": {
    "hi": "स्वचालित RFID बूम बैरियर और डायनेमिक LED टोकन डिस्प्ले",
    "pa": "ਆਟੋਮੇਟਿਡ RFID ਬੂਮ ਬੈਰੀਅਰ ਅਤੇ ਡਾਇਨਾਮਿਕ LED ਟੋਕਨ ਡਿਸਪਲੇਅ",
    "mr": "स्वयंचलित RFID बूम बॅरियर आणि डायनॅमिक LED टोक��� डिस्प्ले",
    "gu": "ઓટોમેટેડ RFID બૂમ બેરિયર અને ડાયનેમિક LED ટોકન ડિસ્પ્લે",
    "bn": "অটোমেটেড RFID বুম ব্যারিয়ার এবং ডায়নামিক LED টোকেন ডিসপ্লে",
    "te": "ఆటోమేటెడ్ RFID బూమ్ బ్యారియర్ & డైనమిక్ LED టోకెన్ డిస్‌ప్లే",
    "ta": "தானியங்கி RFID பூம் தடை & டைனமிக் LED டோக்கன் காட்சி",
    "kn": "ಸ್ವಯಂಚಾಲಿತ RFID ಬೂಮ್ ತಡೆಗೋಡೆ & ಡೈನಾಮಿಕ್ LED ಟೋಕನ್ ಪ್ರದರ್ಶನ"
  },
  "Incoming tractor trolleys receive optical RFID / QR barcode clearance in under 45 seconds, routing traffic directly to gross weighbridges.": {
    "hi": "आने वाली ट्रैक्टर ट्रॉलियों को 45 सेकंड से कम समय में ऑप्टिकल RFID / QR बारकोड क्लीयरेंस मिलती है, जिससे ट्रैफिक सीधे ग्रॉस वेइब्रिज (धर्मकांटे) की ओर निर्देशित होता है।",
    "pa": "आਉਣ ਵਾਲੀਆਂ ਟਰੈਕਟਰ ਟਰਾਲੀਆਂ ਨੂੰ 45 ਸਕਿੰਟਾਂ ਤੋਂ ਘੱਟ ਸਮੇਂ ਵਿੱਚ ਆਪਟੀਕਲ RFID / QR ਬਾਰਕੋਡ ਕਲੀਅਰেন্স ਮਿਲਦੀ ਹੈ, ਜੋ ਟਰੈਫਿਕ ਨੂੰ ਸਿੱਧਾ ਕੁੱਲ ਕੰਡਿਆਂ (weighbridges) ਵੱਲ ਭੇਜਦੀ ਹੈ।",
    "mr": "येणाऱ्या ट्रॅक्टर ट्रॉलीना ४५ सेकंदांपेक्षा कमी वेळेत ऑप्टिकल RFID / QR बारकोड मंजुरी मिळते, ज्यामुळे ट्रॅफिक थेट वजनकाट्याकडे (weighbridges) वळवले जाते.",
    "gu": "આવતી ટ્રેક્ટર ટ્રોલીઓને 45 સેકેન્ડથી ઓછા સમયમાં ઓપ્ટિકલ RFID / QR બારકોડ ક્લિયરન્સ મળે છે, જે ટ્રાફિકને સીધા વજનકાંટા (weighbridges) તરફ મોકલે છે.",
    "bn": "আগত ট্র্যাক্টর ট্রলিগুলি ৪৫ সেকেন্ডের কম সময়ে অপটিক্যাল RFID / QR বারকোড ক্লিয়ারেন্স পায়, যা ট্রাফিককে সরাসরি গ্রস ওয়েব্রিজে (ওজন পরিমাপক যন্ত্র) পাঠায���।",
    "te": "వచ్చే ట్రాక్టర్ ట్రాలీలకు 45 సెకన్లలోపు ఆప్టికల్ RFID / QR బార్‌కోడ్ క్లియరెన్స్ లభిస్తుంది, ఇది ట్రాఫిక్‌ను నేరుగా గ్రాస్ వేబ్రిడ్జ్‌లకు మళ్లిస్తుంది.",
    "ta": "வரும் டிராக்டர் டிராலிகள் 45 வினாடிகளுக்குள் ஆப்டிகல் RFID / QR பார்கோடு அனுமதியைப் பெறுகின்றன, இதனால் போக்குவரத்து நேரடியாக எடைமேடைகளுக்கு (weighbridges) திருப்பிவிடப்படுகிறது.",
    "kn": "ಬರುವ ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರಾಲಿಗಳು 45 ಸೆಕೆಂಡುಗಳಿಗಿಂತ ಕಡಿಮೆ ಅವಧಿಯಲ್ಲಿ ಆಪ್ಟಿಕಲ್ RFID / QR ಬಾರ್‌ಕೋಡ್ ಅನುಮತಿಯನ್ನು ಪಡೆಯುತ್ತವೆ, ಇದು ದಟ್ಟಣೆಯನ್ನು ನೇರವಾಗಿ ತೂಕದ ಸೇತುವೆಗಳಿಗೆ (weighbridges) ಮಾರ್ಪಡಿಸುತ್ತದೆ."
  },
  "Pillar #2 • Digital Token Pass": {
    "hi": "स्तंभ #2 • डिजिटल टोकन पास",
    "pa": "ਥੰਮ੍ਹ #2 • ਡਿਜੀਟਲ ਟੋਕਨ ਪਾਸ",
    "mr": "स्तंभ #2 • डिजिटल टोकन पास",
    "gu": "સ્તંભ #2 • ડિજિટલ ટોકન પાસ",
    "bn": "স্তম্ভ #2 • ডিজিটাল টোকেন পাস",
    "te": "স্তম্ভ #2 • డిజిటల్ టోకెన్ పాస్",
    "ta": "தூண் #2 • டிஜிட்டல் டோக்கன் பாஸ்",
    "kn": "ಸ್ತಂಭ #2 • ಡಿಜಿಟಲ್ ಟೋಕನ್ ಪಾಸ್"
  },
  "Zero Paperwork": {
    "hi": "शून्य कागजी कार्रवाई",
    "pa": "ਜ਼ੀਰੋ ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ",
    "mr": "शून्य कागदपत्रे",
    "gu": "શૂન્ય કાગળની કામગીરી",
    "bn": "শূন্য কাগজপত্র",
    "te": "సున్నా పేపర్‌వర్క్",
    "ta": "சுழிய காகிதப் பணிகள்",
    "kn": "ಶೂನ್ಯ ���ಾಗದದ ಕೆಲಸ"
  },
  "Paperless QR Token Pass & SMS Dispatch": {
    "hi": "पेपरलेस QR टोकन पास और SMS प्रेषण",
    "pa": "ਪੇਪਰਲੈੱਸ QR ਟੋਕਨ ਪਾਸ ਅਤੇ SMS ਡਿਸਪੈਚ",
    "mr": "पेपरलेस QR टोकन पास आणि SMS प्रेषण",
    "gu": "પેપરલેસ QR ટોકન પાસ અને SMS ડિસ્પેચ",
    "bn": "পেপারলেস QR টোকেন পাস এবং SMS ডিসপ্যাচ",
    "te": "పేపర్‌లెస్ QR టోకెన్ పాస్ & SMS డిస్పాచ్",
    "ta": "காகிதமில்லா QR டோக்கன் பாஸ் & SMS அனுப்புதல்",
    "kn": "ಪೇಪರ್‍ಲೆಸ್ QR ಟೋಕನ್ ಪಾಸ್ ಮತ್ತು SMS ಕಳುಹಿಸುವಿಕೆ"
  },
  "Time-slotted digital passes delivered via Fast2SMS and WhatsApp eliminate gate bribery, middleman extortion, and forgeable gate receipts.": {
    "hi": "Fast2SMS और WhatsApp के माध्यम से वितरित समय-बद्ध डिजिटल पास गेट पर घूसखोरी, आढ़तियो���/बिचौलियों की उगाही और जाली गेट रसीदों को समाप्त करते हैं।",
    "pa": "Fast2SMS ਅਤੇ WhatsApp ਰਾਹੀਂ ਭੇਜੇ ਗਏ ਸਮਾਂ-ਬੱਧ (time-slotted) ਡਿਜੀਟਲ ਪਾਸ ਗੇਟ ਦੀ ਰشਵਤਖੋਰੀ, ਵਿਚੋਲਿਆਂ ਦੀ ਲੁੱਟ ਅਤੇ ਜਾਅਲੀ ਗੇਟ ਪਰਚੀਆਂ ਨੂੰ ਖਤਮ ਕਰਦੇ ਹਨ।",
    "mr": "Fast2SMS आणि WhatsApp द्वारे पाठवलेले वेळेनुसार डिजिटल पास गेटवरील लाचखोरी, मध्यस्थांची लूट आणि बनावट गेट पावत्या नष्ट करतात.",
    "gu": "Fast2SMS અને WhatsApp દ્વારા વિતરિત સમય-બદ્ધ ડિજિટલ પાસ ગેટ પરની લાંચખોરી, વચેટિયાઓની લૂંટ અને બનાવટી ગેટ રસીદોને નાબૂદ કરે છે.",
    "bn": "Fast2SMS এবং WhatsApp-এর মাধ্যমে সরবরাহ করা সময়-নির্ধারিত ডিজিটাল পাস গেটের ঘুষ, মধ্যস্বত্বভোগ��দের শোষণ এবং জাল গেট রসিদ দূর করে।",
    "te": "Fast2SMS మరియు WhatsApp ద్వారా అందించబడే సమయ-నిర్ణీత డిజిటల్ పాస్‌లు గేట్ లంచం, మధ్యవర్తుల దోపిడీ మరియు ఫోర్జరీ చేయదగిన గేట్ రసీదులను తొలగిస్తాయి.",
    "ta": "Fast2SMS மற்றும் WhatsApp வழியாக வழங்கப்பட்ட நேர அடிப்படையிலான டிஜிட்டல் பாஸ்கள் கேட் லஞ்சம், தரகர்களின் கொள்ளை மற்றும் போலியான கேட் ரசீதுகளை நீக்குகின்றன.",
    "kn": "Fast2SMS ಮತ್ತು WhatsApp ಮೂಲಕ ವಿತರಿಸಲಾದ ಸಮಯ-ನಿಗದಿತ ಡಿಜಿಟಲ್ ಪಾಸ್‌ಗಳು ಗೇಟ್ ಲಂಚ, ಮಧ್ಯವರ್ತಿಗಳ ಶೋಷಣೆ ಮತ್ತು ನಕಲಿ ಗೇಟ್ ರಶೀದಿಗಳನ್ನು নির্মೂಲನೆ ಮಾಡುತ್ತವೆ."
  },
  "Pillar #3 • Touch-Screen Kiosk": {
    "hi": "स्तंभ #3 • टच-स्क्रीन कियोस्क",
    "pa": "ਥੰਮ੍ਹ #3 • ਟੱਚ-ਸਕ੍ਰੀਨ ਕਿਓਸਕ",
    "mr": "स्तंभ #3 • टच-स्क्रीन कियॉस्क",
    "gu": "સ્તંભ #3 • ટચ-સ્ક્રીન કિઓસ્ક",
    "bn": "স্তম্ভ #3 • টাচ-স্ক্রিন কিওস্ক",
    "te": "স্তম্ভ #3 • టచ్-స్క్రీన్ కియోస్క్",
    "ta": "தூண் #3 • டச்-ஸ்கிரீன் கியோஸ்க்",
    "kn": "ಸ್ತಂಭ #3 • ಟಚ್-ಸ್ಕ್ರೀನ್ ಕಿಯೋಸ್ಕ್"
  },
  "Universal Rural Inclusivity": {
    "hi": "सार्वभौमिक ग्रामीण समावेशिता",
    "pa": "ਯੂਨੀਵਰਸਲ ਪੇਂਡੂ ਸਮਾਵੇਸ਼ਤਾ",
    "mr": "सार्वत्रिक ग्रामीण सर्वसमावेशकता",
    "gu": "સાર્વત્રિક ગ્રામીણ સમાવેશીતા",
    "bn": "সর্বজনীন গ্রামীণ অন্তর্ভুক্তি",
    "te": "సార్వత్రిక గ్రామీణ సమ్మిళ��తత్వం",
    "ta": "உலகளாவிய கிராமப்புற உள்ளடக்கம்",
    "kn": "ಸಾರ್ವತ್ರಿಕ ಗ್ರಾಮೀಣ ಒಳಗೊಳ್ಳುವಿಕೆ"
  },
  "e-NAM Touch-Screen Farmer Facilitation Kiosks": {
    "hi": "ई-नाम (e-NAM) टच-स्क्रीन किसान सुविधा कियोस्क",
    "pa": "e-NAM ਟੱਚ-ਸਕ੍ਰੀਨ ਕਿਸਾਨ ਸਹੂਲਤ ਕਿਓਸਕ",
    "mr": "e-NAM टच-स्क्रीन शेतकरी सुविधा कियॉस्क",
    "gu": "e-NAM ટચ-સ્ક્રીન ખેડૂત સુવિધા કિઓસ્ક",
    "bn": "e-NAM টাচ-স্ক্রিন কৃষক সুবিধা কিওস্ক",
    "te": "e-NAM టచ్-స్క్రీన్ రైతు సులభతర కియోస్క్‌లు",
    "ta": "e-NAM டச்-ஸ்கிரீன் விவசாயி உதவி கியோஸ்க்குகள்",
    "kn": "e-NAM ಟಚ್-ಸ್ಕ್ರೀನ್ ರೈತ ಸೌಲಭ್ಯ ಕಿಯೋಸ್ಕ್‌ಗಳು"
  },
  "Walk-in assisted digital terminals at mandi gates provide multilingual audio guidance, slot printouts, and direct DBT bank account linking.": {
    "hi": "मंडी गेट पर वॉक-इन असिस्टेड डिजिटल टर्मिनल बहुभाषी ऑडियो मार्गदर्शन, स्लॉट प्रिंटआउट और सीधे DBT बैंक खाता लिंकिंग प्रदान करते हैं।",
    "pa": "ਮੰਡੀ ਦੇ ਗੇਟਾਂ 'ਤੇ ਵਾਕ-ਇਨ ਅਸਿਸਟਡ ਡਿਜੀਟਲ ਟਰਮੀਨਲ ਬਹੁ-ਭাষਾਈ ਆਡੀਓ ਮਾਰਗਦਰਸ਼ਨ, ਸਲਾਟ ਪ੍ਰਿੰਟਆਊਟ, ਅਤੇ ਸਿੱਧੀ DBT ਬੈਂਕ ਖਾਤਾ ਲਿੰਕਿੰਗ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ।",
    "mr": "मंडीच्या गेटवर असणारे वॉक-इन असिस्टेड डिजिटल टर्मिनल बहुभाषिक ऑडिओ मार्गदर्शन, स्लॉट प्रिंटआउट आणि थेट DBT बँक खाते जोडणी प्रदान करतात.",
    "gu": "મંડીના ગેટ પર વૉક-ઇન અસિસ્ટિડ ડિજિટલ ટર્મિનલ્સ બહુભાષી ઓડિયો માર્ગદર્શન, સ્લોટ પ્રિન્ટઆઉટ અને સીધી DBT બેંક એકાઉન્ટ લિંકિંગ પ્રદાન કરે છે.",
    "bn": "মন্ডির গেটে ওয়াক-ইন অ্যাসিস্টেড ডিজিটাল টার্মিনালগুলি বহুভাষিক অডিও নির্দেশিকা, স্লট প্রিন্টআউট এবং সরাসরি DBT ব্যাংক অ্যাকাউন্ট লিঙ্ক করার সুবিধা প্রদান করে।",
    "te": "మండి గేట్ల వద్ద ఉన్న వాక్-ఇన్ అసిస్టెడ్ డిజిటల్ టెర్మినల్స్ బహుభాషా ఆడియో మార్గదర్శకత్వం, స్లాట్ ప్రింట్‌అవుట్‌లు మరియు నేరుగా DBT బ్యాంక్ ఖాతా అనుసంధానాన్ని అందిస్తాయి.",
    "ta": "மண்டி வாசல்களில் உள்ள வாக்-இன் உதவியுடன் கூடிய டிஜிட்டல் டெர்மினல்கள் பலமொழி ஆடியோ வழிகாட்டுதல், ஸ்லா��் பிரிண்டவுட்கள் மற்றும் நேரடி DBT வங்கி கணக்கு இணைப்பை வழங்குகின்றன.",
    "kn": "ಮಂಡಿ ಗೇಟ್‌ಗಳಲ್ಲಿರುವ ವಾಕ್-ಇನ್ ಸಹಾಯಕ ಡಿಜಿಟಲ್ ಟರ್ಮಿನಲ್‌ಗಳು ಬಹುಭಾಷಾ ಆಡಿಯೊ ಮಾರ್ಗದರ್ಶನ, ಸ್ಲಾಟ್ ಮುದ್ರಣಗಳು ಮತ್ತು ನೇರ DBT ಬ್ಯಾಂಕ್ ಖಾತೆ ಜೋಡಣೆಯನ್ನು ಒದಗಿಸುತ್ತವೆ."
  },
  "Pillar #4 • Weighment Telemetry": {
    "hi": "स्तंभ #4 • तौल टेलीमेट्री",
    "pa": "ਥੰਮ੍ਹ #4 • ਤੋਲ ਟੈਲੀਮੈਟਰੀ",
    "mr": "स्तंभ #4 • वजन टेलीमेट्री",
    "gu": "સ્તંભ #4 • વજન ટેલીમેટ્રી",
    "bn": "স্তম্ভ #4 • ওজন টেলিমিতি (Telemetric Weighment)",
    "te": "স্তম্ভ #4 • తూనిక టెలిమెట్రీ",
    "ta": "தூண் #4 • எடை டெலிமெட்ரி",
    "kn": "ಸ್ತಂಭ #4 • ತೂಕದ ಟೆಲಿಮೆಟ್ರಿ"
  },
  "Legal Metrology Accuracy": {
    "hi": "लीगल मेट्रोलॉजी सटीकता",
    "pa": "ਕانونੀ ਮੈਟਰੋਲਾਜੀ ਸ਼ੁੱਧਤਾ",
    "mr": "लीगल मेट्रोलॉजी अचूकता",
    "gu": "લીગલ મેટ્રોલોજી ચોકસાઈ",
    "bn": "লিগ্যাল মেটোলজি নির্ভুলতা",
    "te": "లీగల్ మెట్రాలజీ ఖచ్చితత్వం",
    "ta": "லீகல் மெட்ராலஜி துல்லியம்",
    "kn": "ಲೀಗಲ್ ಮೆಟ್ರಾಲಜಿ ನಿಖರತೆ"
  },
  "Anti-Tamper Electronic Gross & Tare Weighbridges": {
    "hi": "एंटी-टैम्पर इलेक्ट्रॉनिक ग्रॉस और टियर वेइब्रिज",
    "pa": "ਐਂਟੀ-ਟੈਂਪਰ ਇਲੈਕਟ੍ਰਾਨਿਕ ਗ੍ਰੌਸ ਅਤੇ ਟੀਅਰ ਵੇਅਬ੍ਰਿਜ",
    "mr": "अँटी-टॅम्पर इलेक्ट्रॉनिक ग्रॉस आणि टियर वेइब्रिज",
    "gu": "એન્ટી-ટેમ્પર ઇલેક્ટ્રોનિક ગ્રોસ અને ટિયર વેઇબ્રિજ",
    "bn": "অ্যান্টি-ট্যাম্পার ইলেকট্রনিক গ্রস এবং টেয়ার ওয়েব্রিজ",
    "te": "యాంటీ-ట్యాంపర్ ఎలక్ట్రానిక్ గ్రాస్ & టేర్ వేబ్రిడ్జ్‌లు",
    "ta": "ஆன்டி-டேம்பர் எலக்ட்ரானிக் கிராஸ் & டேர் வெயிப்ரிட்ஜ்கள்",
    "kn": "ಆಂಟಿ-ಟ್ಯಾಂಪರ್ ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಗ್ರಾಸ್ & ಟೇರ್ ವೇಬ್ರಿಡ್ಜ್‌ಗಳು"
  },
  "±0.01% certified load-cells directly telemetry weight metrics to state grain procurement servers with zero manual clerk intervention.": {
    "hi": "±0.01% प्रमाणित लोड-सेल शून्य मैनुअल क्लर्क हस्तक्षेप के साथ राज्य अनाज खरीद सर्वर पर सीधे टेलीमेट्री वजन मीट्रिक भेजते हैं।",
    "pa": "±0.01% ਪ੍ਰਮਾਣਿਤ ਲੋਡ-ਸੈੱਲ ਜ਼ੀਰੋ ਮੈਨੂਅਲ ਕਲਰਕ ਦਖਲਅੰਦਾਜ਼ੀ ਨਾਲ ਸੂਬੇ ਦੇ ਅਨਾਜ ਖਰੀਦ ਸਰਵਰਾਂ ਨੂੰ ਸਿੱਧੇ ਤੌਰ 'ਤੇ ਟੈਲੀਮੈਟਰੀ ਵਜ਼ਨ ਮੈਟ੍ਰਿਕ ਭੇਜਦੇ ਹਨ।",
    "mr": "±0.01% प्रमाणित लोड-सेल शून्य मॅन्युअल क्लर्क हस्तक्षेपाशिवाय राज्य धान खरेदी सर्व्हरवर थेट टेलिमेट्री वजन मेट्रिक्स पाठवतात.",
    "gu": "±0.01% પ્રમાણિત લોડ-સેલ શૂન્ય મેન્યુઅલ ક્લર્ક હસ્તક્ષેપ સાથે રાજ્ય અનાજ ખરીદી સર્વર પર સીધા ટેલિમેટ્રી વજન મેટ્રિક્સ મોકલે છે.",
    "bn": "±0.01% প্রত্যয়িত লোড-সেল শূন্য ম্যানুয়াল ক্লার্ক হস্তক্ষেপ ছাড়াই সরাসরি রাজ্য শস্য সংগ্রহ সার্ভারে টেলিমেট্রি ওজন মেট্রিক প্রেরণ করে।",
    "te": "±0.01% ధృవీకరించబడిన లోడ్-సెల్స్ జీరో మాన్యువల్ క్లర్క్ జోక్యంతో నేరుగా రాష్ట్ర ధాన్యం సేకరణ సర్వర్‌లకు టెలిమెట్రీ బరువు మెట్రిక్‌లను పంపుతాయి.",
    "ta": "±0.01% சான்றளிக்கப்பட்ட லோட்-செல்கள் பூஜ்ஜிய மேனுவல் கிளர்க் தலையீட்டுடன் நேரடியாக மாநில தானிய கொள்முதல் சேவையகங்களுக்கு டெலிமெட்ரி எடை அளவீடுகளை அனுப்பும்.",
    "kn": "±0.01% ��್ರಮಾಣೀಕೃತ ಲೋಡ್-ಸೆಲ್‌ಗಳು ಶೂನ್ಯ ಮ್ಯಾನುಯಲ್ ಕ್ಲರ್ಕ್ ಹಸ್ತಕ್ಷೇಪದೊಂದಿಗೆ ನೇರವಾಗಿ ರಾಜ್ಯ ಧಾನ್ಯ ಖರೀದಿ ಸರ್ವರ್‌ಗಳಿಗೆ ಟೆಲಿಮೆಟ್ರಿ ತೂಕ ಮೆಟ್ರಿಕ್‌ಗಳನ್ನು ಕಳುಹಿಸುತ್ತವೆ."
  },
  "Pillar #5 • Quality Assaying": {
    "hi": "स्तंभ #5 • गुणवत्ता जांच",
    "pa": "ਥੰਮ੍ਹ #5 • ਗੁਣਵੱਤਾ ਜਾਂਚ",
    "mr": "स्तंभ #5 • गुणवत्ता तपासणी",
    "gu": "સ્તંભ #5 • ગુણવત્તા ચકાસણી",
    "bn": "স্তম্ভ #5 • গুণমান পরীক্ষা",
    "te": "పీలర్ #5 • నాణ్యత పరీక్ష",
    "ta": "தூண் #5 • தரப் பரிசோதனை",
    "kn": "ಸ್ತಂಭ #5 • ಗುಣಮಟ್ಟ ಪರೀಕ್ಷೆ"
  },
  "Government Certified Grading": {
    "hi": "सरकारी प्रमाणित ग्रेडिंग",
    "pa": "ਸਰਕਾਰੀ ਪ੍ਰਮਾਣਿਤ ਗ੍ਰੇਡਿ��ਗ",
    "mr": "शासकीय प्रमाणित ग्रेडिंग",
    "gu": "સરકારી પ્રમાણિત ગ્રેડિંગ",
    "bn": "সরকারি প্রত্যয়িত গ্রেডিং",
    "te": "ప్రభుత్వ ధృవీకరించిన గ్రేడింగ్",
    "ta": "அரசாங்க சான்றளிக்கப்பட்ட தரப்படுத்தல்",
    "kn": "सरकारी ಪ್ರಮಾಣೀಕೃತ ಶ್ರೇಣೀಕರಣ"
  },
  "NABL Certified Scientific Grain Assaying Laboratory": {
    "hi": "एनएबीएल (NABL) प्रमाणित वैज्ञानिक अनाज परीक्षण प्रयोगशाला",
    "pa": "NABL ਪ੍ਰਮਾਣਿਤ ਵਿਗਿਆਨਕ ਅਨਾਜ ਪਰਖ ਪ੍ਰਯੋਗਸ਼ਾਲਾ",
    "mr": "NABL प्रमाणित वैज्ञानिक धान तपासणी प्रयोगशाळा",
    "gu": "NABL પ્રમાણિત વૈજ્ઞાનિક અનાજ ચકાસણી પ્રયોગશાળા",
    "bn": "NABL প্রত্যয়িত বৈজ্ঞানিক শস্য পরীক্ষা ���রীক্ষাগার",
    "te": "NABL ధృవీకరించబడిన శాస్త్రీయ ధాన్యం పరీక్షా ప్రయోగశాల",
    "ta": "NABL சான்றளிக்கப்பட்ட அறிவியல் தானிய பரிசோதனை ஆய்வகம்",
    "kn": "NABL ಪ್ರಮಾಣೀಕೃತ ವೈಜ್ಞಾನಿಕ ಧಾನ್ಯ ಪರೀಕ್ಷಾ ಪ್ರಯೋಗಾಲಯ"
  },
  "Modern analytical testing instruments grade foreign matter, sound grain lustre, and oil percentage to award fair price premiums.": {
    "hi": "आधुनिक विश्लेषणात्मक परीक्षण उपकरण उचित मूल्य प्रीमियम देने के लिए विदेशी पदार्थों, अच्छे अनाज की चमक और तेल प्रतिशत का श्रेणीकरण करते हैं।",
    "pa": "ਆਧੁਨਿਕ ਵਿਸ਼ਲੇਸ਼ਣਾਤਮਕ ਜਾਂਚ ਯੰਤਰ ਉਚਿਤ ਮੁੱਲ ਪ੍ਰੀਮੀਅਮ ਦੇਣ ਲਈ ਵਿਦੇਸ਼ੀ ਪਦਾਰਥਾਂ, ਚੰਗੇ ਦਾਣੇ ਦੀ ਚਮਕ, ਅਤੇ ਤੇਲ ਪ੍ਰਤੀਸ਼ਤ ਨੂੰ ਗ੍ਰੇ�� ਕਰਦੇ ਹਨ।",
    "mr": "आधुनिक विश्लेषणात्मक चाचणी उपकरणे योग्य किंमत प्रीमियम देण्यासाठी परदेशी पदार्थ, चांगल्या धान्याची चमक आणि तेल प्रमाण श्रेणीबद्ध करतात.",
    "gu": "આધુનિક વિશ્લેષણાત્મક પરીક્ષણ સાધનો યોગ્ય ભાવ પ્રીમિયમ આપવા માટે વિદેશી પદાર્થો, સારા અનાજની ચમક અને તેલની ટકાવારીનું વર્ગીકરણ કરે છે.",
    "bn": "আধুনিক বিশ্লেষণাত্মক পরীক্ষার যন্ত্রগুলি ন্যায্য মূল্যের প্রিমিয়াম প্রদানের জন্য বিদেশী পদার্থ, ভালো শস্যের চকচকে ভাব এবং তেলের শতকরা হার গ্রেড করে।",
    "te": "ఆధునిక విశ్లేషణాత్మక పరీక్షా సాధనాలు సరైన ధర ప్రీమియంను అందించడానికి విదేశీ పదార్థాలు, మంచి ధాన్యం మెరుపు మరియు నూనె శాతాన్ని గ్రేడ్ చేస్తాయి.",
    "ta": "நவீன பகுப்பாய்வு சோதனை கருவிகள் நியாயமான விலை பிரீமியங்களை வழங்க வெளிநாட்டு பொருட்கள், நல்ல தானிய பளபளப்பு மற்றும் எண்ணெய் சதவீதத்தை தரப்படுத்துகின்றன.",
    "kn": "ಆಧುನಿಕ ವಿಶ್ಲೇಷಣಾತ್ಮಕ ಪರೀಕ್ಷಾ ಉಪಕರಣಗಳು ಸರಿಯಾದ ಬೆಲೆ ಪ್ರೀಮಿಯಂ ಅನ್ನು ನೀಡಲು ವಿದೇಶಿ ಪದಾರ್ಥಗಳು, ಉತ್ತಮ ಧಾನ್ಯದ ಹೊಳಪು ಮತ್ತು ಎಣ್ಣೆಯ ಶೇಕಡಾವಾರು ಪ್ರಮಾಣವನ್ನು ಶ್ರೇಣೀಕರಿಸುತ್ತವೆ."
  },
  "Pillar #6 • Rapid Moisture Testing": {
    "hi": "स्तंभ #6 • तीव्र नमी परीक्षण",
    "pa": "ਥੰਮ੍ਹ #6 • ਤੇਜ਼ ਨਮੀ ਜਾਂਚ",
    "mr": "स्तंभ #6 • जलद ओलावा चाचणी",
    "gu": "સ્તંભ #6 • ઝડપી ભેજ ચકાસણી",
    "bn": "স্তম্ভ #6 • দ্রুত আর্দ্রতা পরীক্ষা",
    "te": "పీలర్ #6 • వేగవంతమైన తేమ పరీక్ష",
    "ta": "தூண் #6 • விரைவான ஈரப்பதம் பரிசோதனை",
    "kn": "ಸ್ತಂಭ #6 • ಕ್ಷಿಪ್ರ ತೇವಾಂಶ ಪರೀಕ್ಷೆ"
  },
  "FCI FAQ Moisture Norm (≤12%)": {
    "hi": "एफसीआई एफएक्यू नमी मानदंड (≤12%)",
    "pa": "FCI FAQ ਨਮੀ ਮਾਨਕ (≤12%)",
    "mr": "FCI FAQ ओलावा मानके (≤12%)",
    "gu": "FCI FAQ ભેજ ધોરણ (≤12%)",
    "bn": "FCI FAQ আর্দ্রতা আদর্শ (≤12%)",
    "te": "FCI FAQ తేమ ప్రమాణం (≤12%)",
    "ta": "FCI FAQ ஈரப்பதம் நெறிமுறை (≤12%)",
    "kn": "FCI FAQ ತೇವಾಂಶ ಮಾನದಂಡ (≤12%)"
  },
  "Digital Infrared Moisture & Dockage Testing": {
    "hi": "डिजिटल इन्फ्रारे��� नमी और डॉकेज परीक्षण",
    "pa": "ਡਿਜੀਟਲ ਇਨਫਰਾਰੈੱਡ ਨਮੀ ਅਤੇ ਡੌਕੇਜ ਜਾਂਚ",
    "mr": "डिजिटल इन्फ्रारेड ओलावा आणि डॉकेज चाचणी",
    "gu": "ડિજિટલ ઇન્ફ્રારેડ ભેજ અને ડોકેજ ચકાસણી",
    "bn": "ডিজিটাল ইনফ্রারেড আর্দ্রতা এবং ডকেজ পরীক্ষা",
    "te": "డిజిటల్ ఇన్‌ఫ్రారెడ్ తేమ & డాకేజ్ పరీక్ష",
    "ta": "டிஜிட்டல் இன்ஃப்ராரெட் ஈரப்பதம் & டாக்கெட் பரிசோதனை",
    "kn": "ಡಿಜಿಟಲ್ ಇನ್ಫ್ರಾರೆಡ್ ತೇವಾಂಶ ಮತ್ತು ಡಾಕೇಜ್ ಪರೀಕ್ಷೆ"
  },
  "Instant 3-minute infrared moisture reading gives farmers transparent grading before unloading, eliminating arbitrary middleman dockage cuts.": {
    "hi": "त्वरित 3-मिनट की इन्फ्रारेड नमी रीडिंग किसानों को अनलोडिंग से पहले पारदर्शी ग्रेडिंग देती है, जिससे बिचौलियों द्वारा की जाने वाली मनमानी कटौती खत्म होती है।",
    "pa": "ਝੱਟ 3-ਮਿੰਟ ਦੀ ਇਨਫਰਾਰੈੱਡ ਨਮੀ ਰੀਡਿੰਗ ਕਿਸਾਨਾਂ ਨੂੰ ਅਨਲੋਡ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਪਾਰਦਰਸ਼ੀ ਗ੍ਰੇਡਿੰਗ ਦਿੰਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਵਿਚੋਲਿਆਂ ਦੀ ਮਨਮਾਨੀ ਕਟੌਤੀ ਖਤਮ ਹੁੰਦੀ ਹੈ।",
    "mr": "त्वरित ३-मिनिटांचे इन्फ्रारेड आर्द्रता वाचन शेतकऱ्यांना अनलोड करण्यापूर्वी पारदर्शक प्रतवारी देते, ज्यामुळे मध्यस्थांची मनमानी कपात संपते.",
    "gu": "ત્વરિત 3-મિનિટનું ઇન્ફ્રારેડ ભેજનું રીડિંગ ખેડૂતોને અનલોડ કરતા પહેલા પારદર્શક ગ્રેડિંગ આપે છે, જે મધ્યસ્થીઓની મનસ્વી કપાતને દૂર કરે છે.",
    "bn": "তাত্ক্ষণিক ৩-মিনিটের ইনফ্রারেড আর্দ্রতা রিডিং কৃষকদের আনলোড করার আগে স্বচ্ছ গ্রেডিং দেয়, যা মধ্যস্বত্বভোগীদের মনগড়া কাটছাঁট দূর করে।",
    "te": "తక్షణ 3-నిమిషాల ఇన్‌ఫ్రారెడ్ తేమ రీడింగ్ రైతులకు అన్‌ಲೋಡ್ చేయడానికి ముందు పారదర్శక గ్రేడింగ్‌ను అందిస్తుంది, మధ్యవర్తుల ఏకపక్ష కోతలను తొలగిస్తుంది.",
    "ta": "உடனடியான 3-நிமிட இன்ஃப்ராரெட் ஈரப்பத வாசிப்பு விவசாயிகளுக்கு இறக்குவதற்கு முன்பே வெளிப்படையான தர நிர்ணயத்தை வழங்குகிறது, இடைத்தரகர்களின் தன்னிச்சையான வெட்டுக்களை நீக்குகிறது.",
    "kn": "तत्क्षणದ 3-ನಿಮಿಷದ ಇನ್‌ಫ್ರಾರೆಡ್ ತೇವಾಂಶ ಓದುವಿಕೆಯು ರೈತರಿಗೆ ಅನ್‌ಲೋಡ್ ಮಾಡುವ ಮೊದಲು ಪಾರದರ್ಶಕ ಗ್ರೇಡಿಂಗ್ ಅನ್ನು ನೀಡುತ್ತದೆ, ಮಧ್ಯವರ್ತಿಗಳ मनमानी ಕಡಿತವನ್ನು ನಿವಾರಿಸುತ್ತದೆ."
  },
  "Pillar #7 • Bulk Mechanization": {
    "hi": "स्तंभ #7 • थोक यंत्रीकरण",
    "pa": "স্তੰਭ #7 • ਬਲਕ ਮਸ਼ੀਨੀਕਰਨ",
    "mr": "स्तंभ #7 • ठोक यांत्रिकीकरण",
    "gu": "સ્તંભ #7 • જથ્થાબંધ મશીનીકરણ",
    "bn": "স্তম্ভ #7 • বাল্ক মেকানাইজেশন",
    "te": "పిల్లర్ #7 • బల్క్ మెకనైజేషన్",
    "ta": "தூண் #7 • மொத்த இயந்திரமயமாக்கல்",
    "kn": "ಸ್ತಂಭ #7 • ಬಲ್ಕ್ ಯಾಂತ್ರೀಕರಣ"
  },
  "Fast Turnaround Intake": {
    "hi": "तेज टर्नअराउंड इनटेक",
    "pa": "ਤੇਜ਼ ਟਰਨਅਰਾਊਂਡ ਇਨਟੇਕ",
    "mr": "जलद टर्नअराउंड इनटेक",
    "gu": "ઝડપી ટર્નઅરાઉન્ડ ઇનટેક",
    "bn": "দ্রুত টার্নঅ্যারাউন্ড ইনটেক",
    "te": "వేగవంతమైన టర్న్‌అరౌండ్ ఇన్‌టేక్",
    "ta": "வேகமான ட��்ன்அரவுண்ட் உள்ளீடு",
    "kn": "ವೇಗದ ಟರ್ನ್‌ಅರೌಂಡ್ ಇನ್‌ಟೇಕ್"
  },
  "Mechanical Silo Reception Hopper & Hydraulic Tippers": {
    "hi": "यांत्रिक साइलो रिसेप्शन हॉपर और हाइड्रोलिक टippers",
    "pa": "ਮਕੈਨੀਕਲ ਸਾਈਲੋ ਰਿਸੈਪਸ਼ਨ ਹੌਪਰ ਅਤੇ ਹਾਈਡ੍ਰੌਲਿਕ ਟਿਪਰਜ਼",
    "mr": "यांत्रिक सायलो रिसेप्शन हॉपर आणि हायड्रॉलिक टिप्पर",
    "gu": "યાંત્રિક સાયલો રિસેપ્શન હોપર અને હાઇડ્રોલિક ટીપર્સ",
    "bn": "যান্ত্রিক সাইলো রিসেপশন হপার এবং হাইড্রোলিক টিপার্স",
    "te": "మెకానికల్ సైలో రిసెప్షన్ హాప్పర్ & హైడ్రాలిక్ టిప్పర్లు",
    "ta": "இயந்திர சைலோ வரவேற்பு ஹாப்பர் மற்றும் ஹைட்ராலிக் டிப்பர்கள்",
    "kn": "ಯಾಂತ್ರಿಕ ಸೈಲೋ ರಿಸೆಪ್ಷನ್ ಹಾಪರ್ ಮತ್ತು ಹೈಡ್ರಾಲಿಕ್ ಟಿಪ್ಪರ್‌ಗಳು"
  },
  "Hydraulic tractor trolley tipping platforms unload 10-tonne wheat loads into receiving hoppers in under 7 minutes, preventing yard bottlenecks.": {
    "hi": "हाइड्रोलिक ट्रैक्टर ट्रॉली टिपिंग प्लेटफॉर्म 10 टन गेहूं के भार को 7 मिनट से कम समय में रिसीविंग हॉपर में खाली करते हैं, जिससे यार्ड में जाम रोकता है।",
    "pa": "ਹਾਈਡ੍ਰੌਲਿਕ ਟਰੈਕਟਰ ਟ੍ਰਾਲੀ ਟਿਪਿੰਗ ਪਲੇਟਫਾਰਮ 7 ਮਿੰਟਾਂ ਤੋਂ ਘੱਟ ਸਮੇਂ ਵਿੱਚ 10-ਟਨ ਕਣਕ ਦੇ ਭਾਰ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲੇ ਹੌਪਰਾਂ ਵਿੱਚ ਖਾਲੀ ਕਰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਯਾਰਡ ਵਿੱਚ ਜਾਮ ਰੋਕਿਆ ਜਾਂਦਾ ਹੈ।",
    "mr": "हायड्रॉलिक ट्रॅक्टर ट्रॉली टिपिंग प्लॅटफॉर्म १० टन गव्��ाचा भार ७ मिनिटांपेक्षा कमी वेळात रिझिव्हिंग हॉपरमध्ये खाली करतात, ज्यामुळे यार्डमधील कोंडी टाळली जाते.",
    "gu": "હાઇડ્રોલિક ટ્રેક્ટર ટ્રોલી ટીપિંગ પ્લેટફોર્મ 10 ટન ઘઉંના ભારને 7 મિનિટથી ઓછા સમયમાં રિસીવિંગ હોપરમાં ખાલી કરે છે, જે યાર્ડની ભીડ અટકાવે છે.",
    "bn": "হাইড্রোলিক ট্র্যাক্টর ট্রলি টিপিং প্ল্যাটফর্ম ১০ টন গমের বোঝা ৭ মিনিটের কম সময়ে রিসিভিং হপারের মধ্যে খালি করে, যা ইয়ার্ডের জ্যাম রোধ করে।",
    "te": "హైడ్రాలిక్ ట్రాక్టర్ ట్రాలీ టిప్పింగ్ ప్లాట్‌ఫారమ్‌లు 10 టన్నుల గోధుమల లోడ్‌లను 7 నిమిషాల కంటే తక్కువ సమయంలో రిసీ���ింగ్ హాప్పర్‌లలో అన్‌లోడ్ చేస్తాయి, యార్డ్ రద్దీని నివారిస్తాయి.",
    "ta": "ஹைட்ராலிக் டிராக்டர் டிரெய்லர் டிப்பிங் தளங்கள் 10-டன் கோதுமைச் சுமையை 7 நிமிடங்களுக்குள் பெறும் ஹாப்பர்களில் இறக்கி, யார்டு தேக்கத்தைத் தடுக்கின்றன.",
    "kn": "ಹೈಡ್ರಾಲಿಕ್ ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರೈಲಿ ಟಿಪ್ಪಿಂಗ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು 10 ಟನ್ ಗೋಧಿಯ ಭಾರವನ್ನು 7 ನಿಮಿಷಗಳಿಗಿಂತ ಕಡಿಮೆ ಅವಧಿಯಲ್ಲಿ ಸ್ವೀಕರಿಸುವ ಹಾಪರ್‌ಗಳಿಗೆ ಅನ್‌ಲೋಡ್ ಮಾಡುತ್ತವೆ, ಇದರಿಂದ ಯಾರ್ಡ್ ದಟ್ಟಣೆ ತಡೆಯಲ್ಪಡುತ್ತದೆ."
  },
  "Pillar #8 • Weather Defense": {
    "hi": "स्तंभ #8 • मौसम सुरक्षा",
    "pa": "স্তੰਭ #8 • ਮੌਸਮ ਸੁਰੱਖਿਆ",
    "mr": "स्तंभ #8 • हवामान संरक्षण",
    "gu": "સ્તંભ #8 • હવામાન રક્ષણ",
    "bn": "স্তম্ভ #8 • আবহাওয়া প্রতিরক্ষা",
    "te": "పిల్లర్ #8 • వాతావరణ రక్షణ",
    "ta": "தூண் #8 • வானிலை பாதுகாப்பு",
    "kn": "ಸ್ತಂಭ #8 • ಹವಾಮಾನ ರಕ್ಷಣೆ"
  },
  "Doppler Weather Resilience": {
    "hi": "डॉपलर मौसम लचीलापन",
    "pa": "ਡੌਪਲਰ ਮੌਸਮ ਲਚਕੀਲਾਪਣ",
    "mr": "डॉपलर हवामान लवचिकता",
    "gu": "ડોપ્લર હવામાન સ્થિતિસ્થાપકતા",
    "bn": "ডপলার আবহাওয়া সহনশীলতা",
    "te": "డాప్లర్ వాతావరణ స్థితిస్థాపకత",
    "ta": "டாப்ளர் வானிலை மீள்தன்மை",
    "kn": "ಡಾಪ್ಲರ್ ಹವಾಮಾನ ಸ್ಥಿತಿಸ್ಥಾಪಕತ್ವ"
  },
  "25,000 MT Weather-Protected Grain Silo Complex": {
    "hi": "25,000 ��ीट्रिक टन मौसम-सुरक्षित अनाज साइलो कॉम्प्लेक्स",
    "pa": "25,000 ਮੀਟ੍ਰਿਕ ਟਨ ਮੌਸਮ-ਸੁਰੱਖਿਅਤ ਅਨਾਜ ਸਾਈਲੋ ਕੰਪਲੈਕਸ",
    "mr": "२५,००० मेट्रिक टन हवामान-संरक्षित धान्य सायलो कॉम्प्लेक्स",
    "gu": "25,000 મેટ્રિક ટન હવામાન-સુરક્ષિત અનાજ સાયલો સંકુલ",
    "bn": "২৫,০০০ মেট্রিক টন আবহাওয়া-সুরক্ষিত শস্য সাইলো কমপ্লেক্স",
    "te": "25,000 MT వాతావరణ-రక్షిత ధాన్యం సైలో కాంప్లెక్స్",
    "ta": "25,000 மெட்ரிக் டன் வானிலை பாதுகாக்கப்பட்ட தானிய சைலோ வளாகம்",
    "kn": "25,000 MT ಹವಾಮಾನ-ರಕ್ಷಿತ ಧಾನ್ಯ ಸೈಲೋ ಕಾಂಪ್ಲೆಕ್ಸ್"
  },
  "Automated Doppler weather radar triggers rapid diversion of vulnerable outdoor open-heap grain into hermetic steel silos during storms.": {
    "hi": "तूफानों के दौरान स्वचालित डॉपलर वेदर रडार खुले में लगे कमजोर अनाज को तेजी से हर्मेटिक स्टील साइलो में मोड़ने का काम करता है।",
    "pa": "ਤੂਫਾਨਾਂ ਦੌਰਾਨ ਸਵੈਚਾਲਤ ਡੌਪਲਰ ਵੇਦਰ ਰਡਾਰ ਖੁੱਲੇ ਵਿੱਚ ਪਏ ਕਮਜ਼ੋਰ ਅਨਾਜ ਨੂੰ ਤੇਜ਼ੀ ਨਾਲ ਹਰਮੈਟਿਕ ਸਟੀਲ ਸਾਈਲੋ ਵਿੱਚ ਮੋੜਨ ਦਾ ਕੰਮ ਕਰਦਾ ਹੈ।",
    "mr": "वादळादरम्यान स्वयंचलित डॉपलर हवामान रडार खुल्यावरील असुरक्षित धान्य झटक्यात हर्मेटिक स्टील सायलोमध्ये वळवण्यास ट्रिगर करतो.",
    "gu": "વાવાઝોડા દરમિયાન સ્વચાલિત ડોપ્લર વેધર રેડાર ખુલ્લામાં પડેલા સંવેદનશીલ અનાજને ઝડપથી હર્મેટિક સ્ટીલ સાયલોમાં ડાયવર્ટ કરે છે.",
    "bn": "ঝড়ের সময় স্বয়ংক্রিয় ডপলার আবহাওয়া রাডার খোলা আকাশের নিচে থাকা ঝুঁকিপূর্ণ শস্য দ্রুত হার্মেটিক স্টিল সাইলোতে সরিয়ে নিতে ট্রিগার করে।",
    "te": "తుఫానుల సమయంలో ఆటోమేటిక్ డాప్లర్ వాతావరణ రాడార్ బహిరంగ ప్రదేశంలో ఉన్న హానికరమైన ధాన్యాన్ని వేగంగా హెర్మెటిక్ స్టீల్ సైలోలకు మళ్లించడానికి ప్రేరేపిస్తుంది.",
    "ta": "புயல்களின் போது தானியங்கி டப்ளர் வானிலை ரேடார் திறந்த வெளியில் குவித்து வைக்கப்பட்டுள்ள பாதிக்கப்படக்கூடிய தானியங்களை உடனடியாக ஹெர்மெட்டிக் ஸ்டீல் சைலோக்களுக்கு மாற்றுகிறது.",
    "kn": "ಮಳೆಗಾಳಿಯ ಸಮಯದಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತ ಡಾಪ್ಲರ್ ಹವಾಮಾನ ರಾಡಾರ್ ಬಯಲಿನಲ್ಲಿರುವ ಗುಡ್ಡೆ ಧಾನ್ಯವನ್ನು ತ್ವರಿತವಾಗಿ ಹರ್ಮೆಟಿಕ್ ಸ್ಟೀಲ್ ಸೈಲೋಗಳಿಗೆ ತಿರುಗಿಸಲು ಪ್ರಚೋದಿಸುತ್ತದೆ."
  },
  "/ 8 Pillars": {
    "hi": "/ 8 स्तंभ",
    "pa": "/ 8 ਸਤੰਭ",
    "mr": "/ 8 स्तंभ",
    "gu": "/ 8 સ્તંભ",
    "bn": "/ 8 স্তম্ভ",
    "te": "/ 8 పిల్లర్లు",
    "ta": "/ 8 தூண்கள்",
    "kn": "/ 8 ಸ್ತಂಭಗಳು"
  },
  "Gate #1 Telemetry": {
    "hi": "गेट #1 टेलीमेट्री",
    "pa": "गेट #1 ਟੇਲੀਮੈਟਰੀ",
    "mr": "गेट #1 टेलिमेट्री",
    "gu": "ગેટ #1 ટેલિમેટ્રી",
    "bn": "গেট #1 টেলিমেট্রি",
    "te": "గేట్ #1 టెలిమెట్రీ",
    "ta": "கேட் #1 டெலிமெட்ரி",
    "kn": "ಗೇಟ್ #1 ಟೆಲಿಮೆಟ್ರಿ"
  },
  "Automated RFID Boom Barrier": {
    "hi": "स्वचालित RFID बूम बैरियर",
    "pa": "ਸਵੈਚਾਲਤ RFID ਬੂਮ ਬਾਰੀਅਰ",
    "mr": "स्वयंचलित RFID बूम बॅरियर",
    "gu": "સ્વચાલિત RFID બૂમ બેરિયર",
    "bn": "স্বয়ংক্রিয় RFID বুম ব্যারিয়ার",
    "te": "ఆటోమేಟೆడ్ RFID బూమ్ బారియర్",
    "ta": "தானியங்கி RFID பூம் பேரிகார்டு",
    "kn": "स्वಯಂಚಾಲಿತ RFID ಬೂಮ್ ಬೇರಿಯರ್"
  },
  "Dynamic LED displays guide trucks to designated weighbridge lanes in under 45 seconds, eliminating highway pileups.": {
    "hi": "डायनेमिक LED डिस्प्ले 45 सेकंड से कम समय में ट्रकों को निर्धारित तौल कांटा (वेब्रिज) लेन की ओर मार्गदर्शन करते हैं, जिससे हाईवे पर लगने वाला जाम खत्म होता है।",
    "pa": "ਡਾਇਨਾਮਿਕ LED ਡਿਸਪਲੇਅ 45 ਸਕਿੰਟਾਂ ਤੋਂ ਘੱਟ ਸਮੇਂ ਵਿੱਚ ਟਰੱਕਾਂ ਨੂੰ ਨਿਰਧਾਰਤ ਕੰਡੇ (ਵੇਬ੍ਰਿਜ) ਵਾਲੇ ਲੇਨਾਂ ਵੱਲ ਸੇਧ ਦਿੰਦੇ ਹਨ, ਜ��ਸ ਨਾਲ ਹਾਈਵੇਅ 'ਤੇ ਜਾম ਖਤਮ ਹੁੰਦਾ ਹੈ।",
    "mr": "डायनॅमिक LED डिस्प्ले ४५ सेकंदांपेक्षा कमी वेळेत ट्रकांना निश्चित केलेल्या वजनकाटा (वेब्रिज) लेनकडे मार्गदर्शन करतात, ज्यामुळे महामार्गावरील कोंडी दूर होते.",
    "gu": "ડાયનેમિક LED ડિસ્પ્લે 45 સેકન્ડથી ઓછા સમયમાં ટ્રકોને નિર્ધારિત ધાట్ల (વેબ્રિજ) લેન તરફ માર્ગદર્શન આપે છે, જેનાથી હાઇવે પર ટ્રાફિક જામ અટકે છે.",
    "bn": "ডাইনামিক LED ডিসপ্লে 45 সেকেন্ডের কম সময়ে ট্রাকগুলোকে নির্দিষ্ট ওয়েব্রিজ লেনে পথ দেখায়, যা হাইওয়েতে যানজট দূর করে।",
    "te": "డైనమిక్ LED డిస్‌ప్లేలు 45 సెకన్లలోపు ట్రక్కులను నిర్దేశిత వేబ్రిడ్జ్ లేన్‌లకు మార్గనిర్దేశం చేస్తాయి, దీనివల్ల హైవే ట్రాఫిక్ జామ్ తొలగిపోతుంది.",
    "ta": "டைனமிக் LED டிஸ்ப்ளேக்கள் 45 வினாடிகளுக்குள் டிரக்குகளை நியமிக்கப்பட்ட எடைமேடை (வெபிரிட்ஜ்) பாதைகளுக்கு வழிகாட்டுகின்றன, இதனால் நெடுஞ்சாலை நெரிசல் தவிர்க்கப்படுகிறது.",
    "kn": "ಡೈನಾಮಿಕ್ LED ಡಿಸ್ಪ್ಲೇಗಳು 45 ಸೆಕೆಂಡುಗಳಿಗಿಂತ ಕಡಿಮೆ ಅವಧಿಯಲ್ಲಿ ಟ್ರಕ್‌ಗಳನ್ನು ಗೊತ್ತುಪಡಿಸಿದ ತೂಕದ ಸೇತುವೆ (ವೆಬ್ರಿಡ್ಜ್) ಲೇನ್‌ಗಳಿಗೆ ಮಾರ್ಗದರ್ಶನ ಮಾಡುತ್ತವೆ, ಇದು ಹೆದ್ದಾರಿ ದಟ್ಟಣೆಯನ್ನು ನಿವಾರಿಸುತ್ತದೆ."
  },
  "✓ 96% Inward Wait Reduction": {
    "hi": "✓ आवक प्रतीक्षा सम�� में 96% की कमी",
    "pa": "✓ ਅੰਦਰ ਆਉਣ ਵਾਲੇ ਸਮੇਂ ਦੀ ਉਡੀਕ ਵਿੱਚ 96% ਕਮੀ",
    "mr": "✓ येणाऱ्या मालाच्या प्रतीक्षेत ९६% घट",
    "gu": "✓ આવક પ્રતીક્ષા સમયમાં 96% ઘટાડો",
    "bn": "✓ অন্তর্মুখী অপেক্ষার সময় ৯৬% হ্রাস",
    "te": "✓ ఇన్‌వార్డ్ వెయిటింగ్ సమయం 96% తగ్గింపు",
    "ta": "✓ உள்வரும் காத்திருப்பு நேரம் 96% குறைப்பு",
    "kn": "✓ ಒಳಬರುವ ಕಾಯುವಿಕೆಯಲ್ಲಿ 96% ಕಡಿತ"
  },
  "Digital Pass": {
    "hi": "डिजिटल पास",
    "pa": "ਡਿਜੀਟਲ ਪਾਸ",
    "mr": "डिजिटल पास",
    "gu": "ડિજિટલ પાસ",
    "bn": "ডিজিটাল পাস",
    "te": "డిజిటల్ పాస్",
    "ta": "டிஜிட்டல் பாஸ்",
    "kn": "ಡಿಜಿಟಲ್ ಪಾಸ್"
  },
  "Paperless QR Token Pass": {
    "hi": "पेपरलेस QR टोकन पास",
    "pa": "ਕਾਗਜ਼ ਰਹਿਤ QR ਟੋਕਨ ਪਾਸ",
    "mr": "कागदपत्रविरहित QR टोकन पास",
    "gu": "પેપરલેસ QR ટોકન પાસ",
    "bn": "পেপারলেস QR টোকেন পাস",
    "te": "పేపర్‌లెస్ QR టోకెన్ పాస్",
    "ta": "காகிதமில்லா QR டோக்கன் பாஸ்",
    "kn": "ಕಾಗದರಹಿತ QR ಟೋಕನ್ ಪಾಸ್"
  },
  "Time-slotted digital tokens delivered via WhatsApp & SMS verify farmer credentials and seasonal crop quotas on scan.": {
    "hi": "व्हाट्सएप और एसएमएस के माध्यम से वितरित समय-निर्धारित (टाइम-स्लॉटेड) डिजिटल टोकन स्कैन करने पर किसान की साख और मौसमी फसल कोटे का सत्यापन करते हैं।",
    "pa": "ਵਟਸਐਪ ਅਤੇ ਐਸਐਮਐਸ ਰਾਹੀਂ ਭੇਜੇ ਗਏ ਸਮਾਂ-ਬੱਧ (ਟਾਈਮ-ਸਲਾਟਡ) ਡਿਜੀਟਲ ਟੋਕਨ ਸਕੈਨ ਕਰਨ 'ਤੇ ��ਿਸਾਨ ਦੀ ਪਛਾਣ ਅਤੇ ਮੌਸਮੀ ਫਸਲ ਦੇ ਕੋਟੇ ਦੀ ਤਸਦੀਕ ਕਰਦੇ ਹਨ।",
    "mr": "व्हॉट्सॲप आणि एसएमएसद्वारे पाठवलेले वेळ-निश्चित (टाईम-स्लॉटेड) डिजिटल टोकन स्कॅन केल्यावर शेतकऱ्याची ओळख आणि हंगामी पीक कोटा सत्यापित करतात.",
    "gu": "વ્હોટ્સએપ અને એસએમએસ દ્વારા મોકલવામાં આવેલ સમય-નિર્ધારિત (ટાઇમ-સ્લોટેડ) ડિજિટલ ટોકન સ્કેન કરવા પર ખેડૂતની ઓળખ અને મોસમી પાકના ક્વોટાની ચકાસણી કરે છે.",
    "bn": "হোয়াটসঅ্যাপ ও এসএমএস-এর মাধ্যমে প্রেরিত সময়-নির্ধারিত ডিজিটাল টোকেন স্ক্যান করার মাধ্যমে কৃষকের পরিচয় এবং মৌসুমী ফসলের কোটা যাচাই করে।",
    "te": "వాట్సాప్ & SMS ద్వారా పంపబడిన టైమ్-స్లాటెడ్ డిజిటల్ టోకెన్‌లు స్కాన్ చేసినప్పుడు రైతు ఆధారాలను మరియు కాలానుగుణ పంట కోటాలను ధృవీకరిస్తాయి.",
    "ta": "வாட்ஸ்அப் & SMS மூலம் வழங்கப்பட்ட நேர-ஒதுக்கப்பட்ட டிஜிட்டல் டோக்கன்கள் ஸ்கேன் செய்யும்போது விவசாயியின் சான்றுகள் மற்றும் பருவகால பயிர் ஒதுக்கீட்டைச் சரிபார்க்கின்றன.",
    "kn": "WhatsApp & SMS ಮೂಲಕ ಕಳುಹಿಸಲಾದ ಸಮಯ-ನಿಗದಿತ ಡಿಜಿಟಲ್ ಟೋಕನ್‌ಗಳು ಸ್ಕ್ಯಾನ್ ಮಾಡಿದಾಗ ರೈತರು ವಿವರಗಳು ಮತ್ತು ಕಾಲೋಚಿತ ಬೆಳೆ ಕೋಟಾಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತವೆ."
  },
  "✓ 100% Anti-Forgery Verified": {
    "hi": "✓ 100% एंटी-फर्जीवाड़ा सत्यापित",
    "pa": "✓ 100% ਐਂਟੀ-ਫਰਜ਼ਰੀ ਤਸਦੀਕਸ਼ੁਦਾ",
    "mr": "✓ १००% बनावटगिरी विरोधी सत्यापित",
    "gu": "✓ 100% એન્ટી-ફોర్జરી ચકાસાયેલ",
    "bn": "✓ ১০০% জালিয়াতি বিরোধী যাচাইকৃত",
    "te": "✓ 100% యాంటీ-ఫోర్జరీ ధృవీకరించబడింది",
    "ta": "✓ 100% மோசடி தடுப்பு சரிபார்க்கப்பட்டது",
    "kn": "✓ 100% ನಕಲಿ ತಡೆಗಟ್ಟುವಿಕೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ"
  },
  "Farmer Kiosk": {
    "hi": "किसान कियोस्क",
    "pa": "ਕਿਸਾਨ ਕਿਓਸਕ",
    "mr": "शेतकरी किओस्क",
    "gu": "ખેડૂત કિઓસ્ક",
    "bn": "কৃষক কিওস্ক",
    "te": "రైతు కియోస్క్",
    "ta": "விவசாயி கியோஸ்க்",
    "kn": "ರೈತ ಕಿಯೋಸ್ಕ್"
  },
  "e-NAM Facilitation Helpdesk": {
    "hi": "e-NAM सुविधा हेल्पडेस्क",
    "pa": "e-NAM ਸੁਵ���ਧਾ ਹੈਲਪਡੈਸਕ",
    "mr": "e-NAM सुविधा हेल्पडेस्क",
    "gu": "e-NAM સુવિધા હેલ્પડેસ્ક",
    "bn": "e-NAM সহায়তা হেল্পডেস্ক",
    "te": "e-NAM సులభతర హెల్ప్‌డెస్క్",
    "ta": "e-NAM உதவி மையம்",
    "kn": "e-NAM ಸೌಲಭ್ಯ ಸಹಾಯವಾಣಿ"
  },
  "On-site touch-screen kiosks and dedicated facilitation staff assist walk-in farmers with slot generation and DBT status checks.": {
    "hi": "ऑन-साइट टच-स्क्रीन कियोस्क और समर्पित सहायता कर्मचारी स्लॉट जनरेशन और DBT स्थिति की जाँच में आने वाले किसानों की सहायता करते हैं।",
    "pa": "ਆਨ-ਸਾਈਟ ਟੱਚ-ਸਕ್ರೀਨ ਕਿਓਸਕ ਅਤੇ ਸਮਰਪਿਤ ਸਹਾਇਤਾ ਸਟਾਫ ਸਲਾਟ ਜਨਰੇਸ਼ਨ ਅਤੇ DBT ਸਥਿਤੀ ਦੀ ਜਾਂਚ ਵਿੱਚ ਆਉਣ ਵਾਲੇ ਕਿਸਾਨਾਂ ਦੀ ��ਦद ਕਰਦੇ ਹਨ।",
    "mr": "ऑन-साइट टच-स्क्रीन कियॉस्क आणि समर्पित सहाय्यक कर्मचारी स्लॉट निर्मिती आणि DBT स्थिती तपासणीसाठी येणाऱ्या शेतकऱ्यांना मदत करतात.",
    "gu": "ઓન-સાઇટ ટચ-સ્ક્રીન કિઓસ્ક અને સમર્પિત સુવિધા સ્ટાફ સ્લોટ જનરેશન અને DBT સ્થિતિ ચકાસણીમાં આવતા ખેડૂતોને સહાય કરે છે.",
    "bn": "অন-সাইট টাচ-স্ক্রিন কিওস্ক এবং ডেডিকেটেড সুবিধা কর্মীরা স্লট তৈরি এবং DBT স্ট্যাটাস চেক করতে আসা কৃষকদের সহায়তা করে।",
    "te": "ఆన్-సైట్ టచ్-స్క్రీన్ కియోస్క్‌లు మరియు ప్రత్యేక సహాయక సిబ్బంది స్లాట్ జనరేషన్ మరియు DBT స్థితి తనిఖీలలో నేరుగా వచ్చే రైతు���కు సహాయం చేస్తారు.",
    "ta": "ஆன்-சைட் டச்-ஸ்கிரீன் கியோஸ்க்குகள் மற்றும் பிரத்யேக உதவிப் பணியாளர்கள் ஸ்லாட் உருவாக்கம் மற்றும் DBT நிலை சோதனைகளுக்கு வரும் விவசாயிகளுக்கு உதவுகிறார்கள்.",
    "kn": "ಆನ್-ಸೈಟ್ ಟಚ್-ಸ್ಕ್ರೀನ್ ಕಿಯೋಸ್ಕ್‌ಗಳು ಮತ್ತು ಮೀಸಲು ಸಹಾಯ ಸಿಬ್ಬಂದಿ ಸ್ಲಾಟ್ ಉತ್ಪಾದನೆ ಮತ್ತು DBT ಸ್ಥಿತಿ ಪರಿಶೀಲನೆಗೆ ಆಗಮಿಸುವ ರೈತರಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತಾರೆ."
  },
  "✓ Zero Digital Exclusion": {
    "hi": "✓ शून्य डिजिटल निष्कासन",
    "pa": "✓ ਜ਼ੀਰੋ ਡਿਜੀਟਲ ਬੇਦਖਲੀ",
    "mr": "✓ शून्य डिजिटल वगळणे",
    "gu": "✓ શૂન્ય ડિજિટલ બાકાત",
    "bn": "✓ শূন্য ডিজিটাল বর্জন",
    "te": "✓ సున్నా డిజ���టల్ మినహాయింపు",
    "ta": "✓ சுழிய டிஜிட்டல் விலக்கல்",
    "kn": "✓ ಶೂನ್ಯ ಡಿಜಿಟಲ್ ಹೊರಗಿಡುವಿಕೆ"
  },
  "Weighbridge": {
    "hi": "वेब्रिज",
    "pa": "ਧਰੁਵ ਕੰਡਾ (Weighbridge)",
    "mr": "कांटा (Weighbridge)",
    "gu": "વેબ્રિજ",
    "bn": "ওয়েজব্রিজ",
    "te": "వేబ్రిడ్జ్",
    "ta": "எடைமேடை",
    "kn": "ತೂಕದ ಸೇತು"
  },
  "Anti-Tamper Electronic Scales": {
    "hi": "एंटी-टैम्पर इलेक्ट्रॉनिक तराजू",
    "pa": "ਐਂਟੀ-ਟੈਂਪਰ ਇਲੈਕਟ੍ਰਾਨਿਕ ਸਕੇਲ",
    "mr": "अंटी-टॅम्पर इलेक्ट्रॉनिक तराजू",
    "gu": "એન્ટી-ટેમ્પર ઇલેક્ટ્રોનિક સ્કેલ",
    "bn": "অ্যান্টি-ট্যাম্পার ইলেকট্রনিক স্কেল",
    "te": "యాంటీ-ట్యాంపర్ ఎలక్ట్రానిక్ స్కేల్స్",
    "ta": "ஆன்டி-டேம்பர் மின்னணு செதில்கள்",
    "kn": "ಆಂಟಿ-ಟ್ಯಾಂಪರ್ ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಮಾಪಕಗಳು"
  },
  "Automated gross & tare weighing with Legal Metrology calibration directly syncs weight to state grain procurement servers.": {
    "hi": "कानूनी मापविज्ञान अंशांकन के साथ स्वचालित सकल और tare वजन सीधे राज्य अनाज खरीद सर्वर पर वजन सिंक करता है।",
    "pa": "ਕਾਨੂੰਨੀ ਮੈਟ੍ਰੋਲੋਜੀ ਕੈਲੀਬ੍ਰੇਸ਼ਨ ਨਾਲ ਆਟੋਮੈਟੇਡ ਗ੍ਰਾਸ ਅਤੇ ਟੇਅਰ ਤੋਲ ਸਿੱਧੇ ਤੌਰ 'ਤੇ ਰਾਜ ਅਨਾਜ ਖਰੀਦ ਸਰਵਰਾਂ ਨਾਲ ਭਾਰ ਨੂੰ ਸਿੰਕ ਕਰਦਾ ਹੈ।",
    "mr": "कायदेशीर मेट्रोलॉजी कॅलिब्रेशनसह स्वयंचलित ग्रॉस आणि tare वजन थेट राज्य धान्य खरेदी सर्व्हरवर वजन सिंक करते.",
    "gu": "કાનૂની મેટ્રોલોજી ���ેલિબ્રેશન સાથે સ્વચાલિત ગ્રોસ અને ટેર વજન સીધા જ રાજ્ય અનાજ ખરીદી સર્વર પર વજન સિંક કરે છે.",
    "bn": "আইনগত মেট্রোলজি ক্রমাঙ্কন সহ স্বয়ংক্রিয় গ্রস এবং টায়ার ওজন সরাসরি রাজ্যের শস্য সংগ্রহ সার্ভারে ওজন সিঙ্ক করে।",
    "te": "లీగల్ మెట్రాలజీ కాలిబ్రేషన్‌తో ఆటోమేటెడ్ గ్రాస్ & టేర్ వెయిటింగ్ నేరుగా రాష్ట్ర ధాన్యం కొనుగోలు సర్వర్‌లకు బరువును సింక్ చేస్తుంది.",
    "ta": "சட்ட அளவீட்டு அளவுத்திருத்தத்துடன் கூடிய தானியங்கி மொத்த மற்றும் டார் எடை நேரடியாக மாநில தானிய கொள்முதல் சேவையகங்களுடன் எடையை ஒத்திசைக்கிறது.",
    "kn": "ಕಾ���ೂನು ಮಾಪನಶಾಸ್ತ್ರ ಮಾಪನಾಂಕ ನಿರ್ಣಯದೊಂದಿಗೆ ಸ್ವಯಂಚಾಲಿತ ಒಟ್ಟು ಮತ್ತು ಟೇರ್ ತೂಕವು ನೇರವಾಗಿ ರಾಜ್ಯ ಧಾನ್ಯ ಖರೀದಿ ಸರ್ವರ್‌ಗಳಿಗೆ ತೂಕವನ್ನು ಸಿಂಕ್ ಮಾಡುತ್ತದೆ."
  },
  "✓ ±0.01% Legal Accuracy": {
    "hi": "✓ ±0.01% कानूनी सटीकता",
    "pa": "✓ ±0.01% ਕਾਨੂੰਨੀ ਸ਼ੁੱਧਤਾ",
    "mr": "✓ ±0.01% कायदेशीर अचूकता",
    "gu": "✓ ±0.01% કાનૂની ચોકસાઈ",
    "bn": "✓ ±0.01% আইনগত নির্ভুলতা",
    "te": "✓ ±0.01% చట్టపరమైన ఖచ్చితత్వం",
    "ta": "✓ ±0.01% சட்ட துல்லியம்",
    "kn": "✓ ±0.01% ಕಾನೂನು ನಿಖರತೆ"
  },
  "Assaying Lab": {
    "hi": "परख प्रयोगशाला (Assaying Lab)",
    "pa": "ਅਸੇਇੰਗ ਲੈਬ",
    "mr": "चाचणी प्रयोगशाळा (Assaying Lab)",
    "gu": "એસેઇંગ લેબ",
    "bn": "অ্যাসেয়িং ল্যাব",
    "te": "అస్సేయింగ్ ల్యాబ్",
    "ta": "மதிப்பீட்டு ஆய்வகம்",
    "kn": "ಅಸ್ಸೇಯಿಂಗ್ ಪ್ರಯೋಗಾಲಯ"
  },
  "Scientific Assaying & Grading": {
    "hi": "वैज्ञानिक परख और ग्रेडिंग",
    "pa": "ਵਿਗਿਆਨਕ ਅਸੇਇੰਗ ਅਤੇ ਗ੍ਰੇਡਿੰਗ",
    "mr": "वैज्ञानिक चाचणी आणि श्रेणीकरण",
    "gu": "વૈજ્ઞાનિક એસેઇંગ અને ગ્રેડિંગ",
    "bn": "বৈজ্ঞানিক অ্যাসেয়িং এবং গ্রেডিং",
    "te": "శాస్త్రీయ అస్సేయింగ్ & గ్రేడింగ్",
    "ta": "அறிவியல் மதிப்பீடு மற்றும் தரப்படுத்தல்",
    "kn": "ವೈಜ್ಞಾನಿಕ ಅಸ್ಸೇಯಿಂಗ್ ಮತ್ತು ಗ್ರೇಡಿಂಗ್"
  },
  "Certified quality inspectors analyze grain samples for moisture, foreign matter, and shriveled grains with logged assay certificates.": {
    "hi": "प्रमाणित गुणवत्ता निरीक्षक लॉग किए गए परख प्रमाण पत्र के साथ नमी, विदेशी पदार्थ और सिकुड़े हुए अनाज के लिए अनाज के नमूनों का विश्लेषण करते हैं।",
    "pa": "ਪ੍ਰਮਾਣਿਤ ਗੁਣਵੱਤਾ ਨਿਰੀਖਕ ਲੌਗ ਕੀਤੇ ਅਸੇ ਸਰਟੀਫਿਕੇਟਾਂ ਦੇ ਨਾਲ ਨਮੀ, ਵਿਦੇਸ਼ੀ ਪਦਾਰਥਾਂ ਅਤੇ ਸੁੰਗੜੇ ਹੋਏ ਦਾਣਿਆਂ ਲਈ ਅਨਾਜ ਦੇ ਨਮੂਨਿਆਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਦੇ ਹਨ।",
    "mr": "प्रमाणित गुणवत्ता निरीक्षक लॉग इन केलेल्या चाचणी प्रमाणपत्रांसह ओलावा, परदेशी पदार्थ आणि कुजलेल्या धान्यासाठी धान्याच्या नमुन्यांचे विश्लेषण करतात.",
    "gu": "પ્રમાણિત ગુણવત્તા નિરીક્ષકો લોગ કરેલ એસે પ્રમાણપત્રો સાથે ભેજ, વિદેશી પદાર્��ો અને કરમાાયેલા અનાજ માટે અનાજના નમૂનાઓનું વિશ્લેષણ કરે છે.",
    "bn": "প্রত্যয়িত গুণমান পরিদর্শকরা লগ ইন করা অ্যাসে শংসাপত্র সহ আর্দ্রতা, বিদেশী পদার্থ এবং কুঁচকে যাওয়া দানার জন্য শস্যের নমুনা বিশ্লেষণ করে।",
    "ta": "சான்றளிக்கப்பட்ட தர ஆய்வாளர்கள் பதிவு செய்யப்பட்ட மதிப்பீட்டுச் சான்றிதழ்களுடன் ஈரப்பதம், வெளிநாட்டுப் பொருள் மற்றும் சுருங்கிய தானியங்களுக்கான தானிய மாதிரிகளை பகுப்பாய்வு செய்கிறார்கள்.",
    "kn": "ಪ್ರಮಾಣೀಕೃತ ಗುಣಮಟ್ಟದ ಇನ್ಸ್‌ಪೆಕ್ಟರ್‌ಗಳು ಲಾಗ್ ಮಾಡப்பட்ட ಅಸ್ಸೇ ಪ್ರಮಾಣಪತ್ರಗಳೊಂದಿಗೆ ತೇವಾಂಶ, ವಿದೇಶಿ ವಸ್ತ��� ಮತ್ತು ಸುಕ್ಕುಗಟ್ಟಿದ ಧಾನ್ಯಗಳಿಗಾಗಿ ಧಾನ್ಯದ ಮಾದರಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತಾರೆ."
  },
  "✓ FCI FAQ Grade A Certified": {
    "hi": "✓ FCI FAQ ग्रेड A प्रमाणित",
    "pa": "✓ FCI FAQ ਗ੍ਰੇਡ A ਪ੍ਰਮਾਣਿਤ",
    "mr": "✓ FCI FAQ ग्रेड A प्रमाणित",
    "gu": "✓ FCI FAQ ગ્રેડ A પ્રમાણિત",
    "bn": "✓ FCI FAQ গ্রেড A প্রত্যয়িত",
    "te": "✓ FCI FAQ గ్రేడ్ A సర్టిఫైడ్",
    "ta": "✓ FCI FAQ தரம் A சான்றளிக்கப்பட்டவை",
    "kn": "✓ FCI FAQ ಗ್ರೇಡ್ A ಪ್ರಮಾಣೀಕೃತ"
  },
  "Moisture QC": {
    "hi": "नमी क्यूसी",
    "pa": "ਨਮੀ ਕਿਊ.ਸੀ.",
    "mr": "ओलावा क्यूसी",
    "gu": "ભેજ ક્યૂસી",
    "bn": "আর্দ্রতা কিউসি",
    "te": "తేమ క్యూసి",
    "ta": "ஈரப்பதம் கியூசி",
    "kn": "ತೇವಾಂಶ ಕ್ಯೂಸಿ"
  },
  "15-Second Digital Moisture QC": {
    "hi": "15-सेकंड डिजिटल नमी क्यूसी",
    "pa": "15-ਸਿੰਕਡ ਡਿਜੀਟਲ ਨਮੀ ਕਿਊ.ਸੀ.",
    "mr": "१५-सेकंद डिजिटल ओलावा क्यूसी",
    "gu": "15-સેકન્ડ ડિજિટલ ભેજ ક્યૂસી",
    "bn": "১৫-সেকেন্ড ডিজিটাল আর্দ্রতা কিউসি",
    "te": "15-సెకండ్ల డిజిటల్ తేమ క్యూసి",
    "ta": "15-வினாடி டிஜிட்டல் ஈரப்பதம் கியூசி",
    "kn": "15-ಸೆಕೆಂಡುಗಳ ಡಿಜಿಟಲ್ ತೇವಾಂಶ ಕ್ಯೂಸಿ"
  },
  "Eliminates subjective manual moisture rejections and protects farmers from unjustified dockage deductions below MSP.": {
    "hi": "व्यक्तिगत मैनुअल नमी अस्वीकृति को समाप्त करता है और किसानों को MSP से नीचे अनुचित कटौती से बचाता है।",
    "pa": "ਵਿਅਕਤੀਗਤ ਮੈਨੂਅਲ ਨਮੀ ਅਸਵੀਕਾਰੀਆਂ ਨੂੰ ਖਤਮ ਕਰਦਾ ਹੈ ਅਤੇ ਕਿਸਾਨਾਂ ਨੂੰ MSP ਤੋਂ ਹੇਠਾਂ ਗੈਰ-ਵਾਜਬ ਕਟੌਤੀਆਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।",
    "mr": "व्यक्तिगत मॅन्युअल ओलावा नाकारणे बंद करते ��णि शेतकऱ्यांना MSP च्या खाली अन्यायकारक कपातीपासून वाचवते.",
    "gu": "વ્યક્તિગત મેન્યુઅલ ભેજ અસ્વીકારને દૂર કરે છે અને ખેડૂતોને MSP થી નીચે અયોગ્ય કપાતથી બચાવે છે।",
    "bn": "ব্যক্তিগত ম্যানুয়াল আর্দ্রতা প্রত্যাখ্যান দূর করে এবং কৃষকদের MSP-এর নিচে অযৌক্তিক কর্তন থেকে রক্ষা করে।",
    "te": "వ్యక్తిగత మాన్యువల్ తేమ తిరస్కరణలను తొలగిస్తుంది మరియు MSP కంటే తక్కువ అనుచిత కోతల నుండి రైతులను రక్షిస్తుంది.",
    "ta": "தனிநபர் மேனுவல் ஈரப்பதம் நிராகரிப்புகளை நீக்குகிறது மற்றும் MSP-க்கு கீழே நியாயமற்ற பிடித்தங்களிலிருந்து விவசாயிகளைப் பாது��ாக்கிறது.",
    "kn": "ವೈಯಕ್ತಿಕ ಕೈಯಿಂದ ತೇವಾಂಶ ತಿರಸ್ಕರಿಸುವುದನ್ನು ನಿವಾರಿಸುತ್ತದೆ ಮತ್ತು MSP ಗಿಂತ ಕೆಳಗಿನ ಅನ್ಯಾಯದ ಕಡಿತದಿಂದ ರೈತರನ್ನು ರಕ್ಷಿಸುತ್ತದೆ."
  },
  "✓ 100% MSP Rate Protection": {
    "hi": "✓ 100% MSP दर सुरक्षा",
    "pa": "✓ 100% MSP ਦਰ ਸੁਰੱਖਿਆ",
    "mr": "✓ १००% MSP दर संरक्षण",
    "gu": "✓ 100% MSP દર સુરક્ષા",
    "bn": "✓ ১০০% MSP হার সুরক্ষা",
    "te": "✓ 100% MSP ధర రక్షణ",
    "ta": "✓ 100% MSP விலை பாதுகாப்பு",
    "kn": "✓ 100% MSP ದರ ರಕ್ಷಣೆ"
  },
  "Bulk Silos": {
    "hi": "बल्क साइलो",
    "pa": "ਬਲਕ ਸਾਈਲੋ",
    "mr": "बल्क सायलो",
    "gu": "બલ્ક સાયલો",
    "bn": "বাল্ক সাইলো",
    "te": "బల్క్ సైలోస్",
    "ta": "மொத்த சைலோக்கள்",
    "kn": "ಬಲ್ಕ್ ���ೈಲೋಸ್"
  },
  "Heavy-Duty Reception Hoppers": {
    "hi": "हेवी-ड्यूटी रिसेप्शन हॉपर",
    "pa": "ਹੈਵੀ-ਡਿਊਟੀ ਰਿਸੈਪਸ਼ਨ ਹੌਪਰ",
    "mr": "हेवी-ड्युटी रिसेप्शन हॉपर",
    "gu": "હેવી-ડ્યુટી રિસેપ્શન હોપર",
    "bn": "হেভি-ডিউটি রিসেপশন হপার",
    "te": "హెవీ-డ్యూటీ రిసెప్షన్ హాప్పర్స్",
    "ta": "ஹெவி-டூட்டி ரிசப்ஷன் ஹாப்பர்கள்",
    "kn": "ಹೆವಿ-ಡ್ಯೂಟಿ ರಿಸೆಪ್ಷನ್ ಹಾಪರ್ಸ್"
  },
  "Hydraulic tractor trolley tipping pit empties 100 quintals of grain in under 6 minutes via high-speed enclosed conveyors.": {
    "hi": "हाइड्रोलिक ट्रैक्टर ट्रॉली टिपिंग पिट हाई-स्पीड बंद कन्वेयर के माध्यम से 6 मिनट से कम समय में 100 क्विंटल अनाज खाली कर देता है।",
    "pa": "ਹਾਈਡ੍ਰੌਲਿ��� ਟਰੈਕਟਰ ਟ੍ਰਾਲੀ ਟਿਪਿੰਗ ਪਿੱਟ ਹਾਈ-ਸਪੀਡ ਬੰਦ ਕੰਵੇਅਰਾਂ ਰਾਹੀਂ 6 ਮਿੰਟਾਂ ਤੋਂ ਵੀ ਘੱਟ ਸਮੇਂ ਵਿੱਚ 100 ਕੁਇੰਟਲ ਅਨਾਜ ਖਾਲੀ ਕਰ ਦਿੰਦੀ ਹੈ।",
    "mr": "हायड्रॉलिक ट्रॅक्टर ट्रॉली टिपिंग पिट हाय-स्पीड बंद कन्व्हेयरद्वारे ६ मिनिटांपेक्षा कमी वेळेत १०० क्विंटल धान्य खाली करते.",
    "gu": "હાઇડ્રોલિક ટ્રેક્ટર ટ્રોલી ટીપિંગ પીટ હાઇ-સ્પીડ બંધ કન્વેયર દ્વારા 6 મિનિટથી ઓછા સમયમાં 100 ક્વિન્ટલ અનાજ ખાલી કરે છે.",
    "bn": "হাইড্রোলিক ট্র্যাক্টর ট্রলি টিপিং পিট হাই-স্পিড বদ্ধ পরিবাহকের মাধ্যমে ৬ মিনিটেরও কম সময়ে ১০০ কুইন্টাল শস্য খালি করে।",
    "te": "హైడ్రాలిక్ ట్రాక్���ర్ ట్రాలీ టిప్పింగ్ పిట్ హై-స్పీడ్ క్లోజ్డ్ కన్వేయర్ల ద్వారా 6 నిమిషాల కంటే తక్కువ వ్యవధిలో 100 క్వింటాళ్ల ధాన్యాన్ని ఖాళీ చేస్తుంది.",
    "ta": "ஹைட்ராலிக் டிராக்டர் ட்ராலி டிப்பிங் குழி, அதிவேக மூடப்பட்ட கன்வேயர்கள் மூலம் 6 நிமிடங்களுக்குள் 100 குவிண்டால் தானியங்களை காலி செய்கிறது.",
    "kn": "ಹೈಡ್ರಾಲಿಕ್ ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರಾಲಿ ಟಿಪ್ಪಿಂಗ್ ಪಿಟ್ ಹೈ-ಸ್ಪೀಡ್ ಮುಚ್ಚಿದ ಕನ್ವೇಯರ್‌ಗಳ ಮೂಲಕ 6 ನಿಮಿಷಗಳಿಗಿಂತ ಕಡಿಮೆ ಅವಧಿಯಲ್ಲಿ 100 ಕ್ವಿಂಟಾಲ್ ಧಾನ್ಯವನ್ನು ಖಾಲಿ ಮಾಡುತ್ತದೆ."
  },
  "✓ 120 MT/hr Discharge Speed": {
    "hi": "✓ 120 MT/hr डिस्चार्ज गति",
    "pa": "✓ 120 MT/hr ਡਿਸਚਾਰਜ ਸਪੀਡ",
    "mr": "✓ १२० MT/hr डिस्चार्ज वेग",
    "gu": "✓ 120 MT/hr ડિસ્ચાર્જ સ્પીડ",
    "bn": "✓ ১২০ MT/hr ডিসচার্জ গতি",
    "te": "✓ 120 MT/hr డిశ్చార్జ్ వేగం",
    "ta": "✓ 120 MT/hr வெளியேற்றும் வேகம்",
    "kn": "✓ 120 MT/hr ಡಿಸ್ಚಾರ್ಜ್ ವೇಗ"
  },
  "Weather Shield": {
    "hi": "वेदर शील्ड",
    "pa": "ਵੈਦਰ ਸ਼ੀਲਡ",
    "mr": "वेदर शील्ड",
    "gu": "વેધર શિલ્ડ",
    "bn": "ওয়েদার শিল্ড",
    "te": "వెదర్ షీల్డ్",
    "ta": "வெதர் ஷீல்ட்",
    "kn": "ವೆದರ್ ಶೀಲ್ಡ್"
  },
  "Covered Transit Silo Canopy": {
    "hi": "कवर्ड ट्रांजिट साइलो कैनोपी",
    "pa": "ਕਵਰਡ ਟਰਾਂਜ਼ਿਟ ਸਾਈਲੋ ਕੈਨੋਪੀ",
    "mr": "कव्हर्ड ट्रान्झिट सायलो कॅनोपी",
    "gu": "કવર્ડ ટ્રાન્ઝિટ સાયલો કેનોપી",
    "bn": "কাভার্ড ট্রানজিট সাইলো ক্যানোপি",
    "te": "కవర్డ్ ట్రాన్సిట్ సైలో కానోపీ",
    "ta": "கவர்்டு டிரான்சிட் சைலோ கேனோபி",
    "kn": "ಕವರ್ಡ್ ಟ್ರಾನ್ಸಿಟ್ ಸೈಲೋ ಕ್ಯಾನೋಪಿ"
  },
  "Automated IMD Doppler radar integration reroutes exposed tractor queues into 25,000 MT covered shelters before rainstorms hit.": {
    "hi": "स्वचालित IMD डॉपलर राडार एकीकरण बारिश शुरू होने से पहले खुले में खड़ी ट्रैक्टर कतारों को 25,000 MT ढके हुए शेल्टरों में पुनर्निर्देशित करता है।",
    "pa": "ਆਟੋਮੇਟਡ IMD ਡੌਪਲਰ ਰੇਡਾਰ ਏਕੀਕਰਣ ਮੀਂਹ ਪੈਣ ਤੋਂ ਪਹਿਲਾਂ ਖੁੱਲ੍ਹੇ ਵਿੱਚ ਖੜ੍ਹੀਆਂ ਟਰੈਕਟਰ ਕतारਾਂ ਨੂੰ 25,000 MT ਕਵਰ ���ੀਤੇ ਸ਼ੈਲਟਰਾਂ ਵਿੱਚ ਮੋੜ ਦਿੰਦਾ ਹੈ।",
    "mr": "स्वयंचलित IMD डॉप्लर रडार एकत्रीकरण पाऊस सुरू होण्यापूर्वी खुल्या ट्रॅक्टरच्या रांगांना २५,००० MT कव्हर केलेल्या निाऱ्यांमध्ये पुनर्निर्देशित करते.",
    "gu": "સ્વયંચાલિત IMD ડોપ્લર રડાર ઇન્ટિગ્રેશન વરસાદ શરૂ થાય તે પહેલાં ખુલ્લામાં રહેલી ટ્રેક્ટરની કતારોને 25,000 MT કવર્ડ શેલ્ટરમાં રીડાયરેક્ટ કરે છે.",
    "bn": "স্বয়ংক্রিয় IMD ডপলার রাডার ইন্টিগ্রেশন বৃষ্টি শুরু হওয়ার আগে খোলা আকাশের নিচের ট্রাক্টরের লাইনগুলোকে ২৫,০০০ MT ঢাকা শেটারে পুনর্নির্দেশ করে।",
    "te": "ఆటోమేటెడ్ IMD డాప్లర్ రాడార్ ఇంటి��్రేషన్ వర్షం పడే ముందు బహిరంగంగా ఉన్న ట్రాక్టర్ క్యూలను 25,000 MT కవర్డ్ షెల్టర్లకు మళ్లిస్తుంది.",
    "ta": "தானியங்கி IMD டாப்ளர் ரேடார் ஒருங்கிணைப்பு மழை பெய்வதற்கு முன்பு திறந்தவெளியில் உள்ள டிராக்டர் வரிசைகளை 25,000 MT மூடப்பட்ட ஷெல்டர்களுக்கு திருப்புகிறது.",
    "kn": "स्वयंचलित IMD ಡಾಪ್ಲರ್ ರೇಡಾರ್ ಏಕೀಕರಣವು ಮಳೆ ಬರುವ ಮೊದಲು ತೆರೆದ ಟ್ರ್ಯಾಕ್ಟರ್ ಸಾಲುಗಳನ್ನು 25,000 MT ಮುಚ್ಚಿದ ಆಶ್ರಯ ತಾಣಗಳಿಗೆ ಮರುನಿರ್ದೇಶಿಸುತ್ತದೆ."
  },
  "✓ ZERO Post-Harvest Spoilage": {
    "hi": "✓ शून्य कटाई-उपरांत बर्बादी",
    "pa": "✓ ਜ਼ੀਰੋ ਵਾਢੀ ਤੋਂ ਬਾਅਦ ਦੀ ਬਰਬਾਦੀ",
    "mr": "✓ शून्य काढणी-पश्चात नासाडी",
    "gu": "✓ શૂન્ય કાપણી પછીનો બગાડ",
    "bn": "✓ শূন্য ফসল কাটার পরবর্তী ক্ষতি",
    "te": "✓ సున్నా కోత అనంతర నష్టం",
    "ta": "✓ பூஜ்ஜியம் அறுவடைக்குப் பிந்தைய சேதம்",
    "kn": "✓ ಶೂನ್ಯ ಕಟಾವಿನ ನಂತರದ ನಷ್ಟ"
  },
  "APMC Mandi Network Metrics": {
    "hi": "APMC मंडी नेटवर्क मेट्रिक्स",
    "pa": "APMC ਮੰਡੀ ਨੈੱਟਵਰਕ ਮੈਟ੍ਰਿਕਸ",
    "mr": "APMC मोंडी नेटवर्क मेट्रिक्स",
    "gu": "APMC મંડી નેટવર્ક મેટ્રિક્સ",
    "bn": "APMC মান্ডি নেটওয়ার্ক মেট্রিকস",
    "te": "APMC మండి నెట్‌వర్క్ మెట్రిక్స్",
    "ta": "APMC மண்டி நெட்வொர்க் அளவீடுகள்",
    "kn": "APMC ಮಂಡಿ ನೆಟ್‌ವರ್ಕ್ ಮೆಟ್ರಿಕ್ಸ್"
  },
  "State-Wise Direct Procurement & Savings Distribution": {
    "hi": "राज्य-वार प्रत्यक्ष खरीद और बचत वितरण",
    "pa": "ਰਾਜ-ਵਾਰ ਸਿੱਧੀ ਖਰੀਦ ਅਤੇ ਬਚਤ ਵੰਡ",
    "mr": "राज्य-निहाय थेट खरेदी आणि बचत वाटप",
    "gu": "રાજ્યવાર સીધી ખરીદી અને બચત વિતરણ",
    "bn": "রাজ্যভিত্তিক সরাসরি ক্রয় এবং সঞ্চয় বিতরণ",
    "te": "రాష్ట్రాలవారీగా ప్రత్యక్ష సేకరణ & పొదుపు పంపిణీ",
    "ta": "மாநிலவாரியான நேரடி கொள்முதல் & சேமிப்பு விநியோகம்",
    "kn": "ರಾಜ್ಯವಾರು ನೇರ ಖರೀದಿ ಮತ್ತು ಉಳಿತಾಯ ವಿತರಣೆ"
  },
  "Real-Time Data across Rabi/Kharif Marketing Seasons": {
    "hi": "रबी/खरीफ विपणन सत्रों में वास्तविक समय का डेटा",
    "pa": "ਰਬੀ/ਖਰੀਫ ਮਾਰਕੀਟਿੰਗ ਸੀਜ਼ਨਾਂ ਵਿੱਚ ਰੀਅਲ-ਟਾਈਮ ਡੇਟਾ",
    "mr": "रब्बी/खरीप पणन हंगामातील रिअल-टाइम डेटा",
    "gu": "રવિ/ખરીફ માર્કેટિંગ સિઝનનો રીઅલ-ટાઇમ ડેટા",
    "bn": "রবি/খরিফ বিপণন মরশুমের রিয়েল-টাইম ডেটা",
    "te": "రబీ/ఖరీఫ్ మార్కెటింగ్ సీజన్ల వారీగా రియల్ టైమ్ డేటా",
    "ta": "ரபி/காரிப் சந்தைப்படுத்தல் பருவங்களின் நிகழ்நேர தரவு",
    "kn": "ರಬಿ/ಖಾರಿಫ್ ಮಾರುಕಟ್ಟೆ ಸೀಸನ್‌ಗಳ ನೈಜ-ಸಮಯದ ಡೇಟಾ"
  },
  "State / APMC Clusters": {
    "hi": "राज्य / APMC क्लस्टर",
    "pa": "ਰਾਜ / APMC ਕਲੱਸਟਰ",
    "mr": "राज्य / APMC क्लस्टर",
    "gu": "રાજ્ય / APMC ક્લસ્ટર",
    "bn": "রাজ্য / APMC ক্লাস্টার",
    "te": "రాష్ట్రం / APMC క్లస్టర్లు",
    "ta": "மாநிலம் / APMC குழுக்கள்",
    "kn": "ರಾಜ್ಯ / APMC ಕ್ಲಸ್ಟರ್‌ಗಳು"
  },
  "Active Mandis": {
    "hi": "सक्रिय मंडियां",
    "pa": "ਸਰਗਰਮ ਮੰਡੀਆਂ",
    "mr": "सक्रिय मोंड्या",
    "gu": "સક્રિય મંડીઓ",
    "bn": "সক্রিয় মান্ডি",
    "te": "క్రియాశీల మండిలు",
    "ta": "செயலில் உள்ள மண்டிகள்",
    "kn": "ಸಕ್ರಿಯ ಮಂಡಿಗಳು"
  },
  "Benefited Farmers": {
    "hi": "लाभान्वित किसान",
    "pa": "ਲਾਭਪਾਤਰੀ ਕਿਸਾਨ",
    "mr": "लाभार्थी शेतकरी",
    "gu": "લાભાર્થી ખેડૂતો",
    "bn": "উপকৃত কৃষক",
    "te": "ప్రయోజనం పొందిన రైతులు",
    "ta": "பயனடைந்த விவசாயிகள்",
    "kn": "ಫಲಾನುಭವಿ ರೈತರು"
  },
  "Avg. Wait Reduction": {
    "hi": "औसत प्रतीक्षा में कमी",
    "pa": "औसत ਉਡੀਕ ��ਮੀ",
    "mr": "सरासरी प्रतीक्षा घट",
    "gu": "સરેરાશ રાહ જોવાનો ઘટાડો",
    "bn": "গড় অপেক্ষা হ্রাস",
    "te": "సగటు వేచి ఉండే సమయం తగ్గింపు",
    "ta": "சராசரி காத்திருப்பு குறைப்பு",
    "kn": "ಸರಾಸರಿ ಕಾಯುವಿಕೆ ಕಡಿತ"
  },
  "Farmer Rental Savings": {
    "hi": "किसान किराया बचत",
    "pa": "ਕਿਸਾਨ ਕਿਰਾਇਆ ਬਚਤ",
    "mr": "शेतकरी भाडे बचत",
    "gu": "ખેડૂત ભાડા બચત",
    "bn": "কৃষকদের ভাড়া সাশ্রয়",
    "te": "రైతు అద్దె పొదుపు",
    "ta": "விவசாயி வாடகை சேமிப்பு",
    "kn": "ರೈತರ ಬಾಡಿಗೆ ಉಳಿತಾಯ"
  },
  "Direct DBT Disbursed": {
    "hi": "प्रत्यक्ष डीबीटी (DBT) वितरित",
    "pa": "ਸਿੱਧਾ ਡੀ.ਬੀ.ਟੀ. (DBT) ਵੰਡਿਆ ਗਿਆ",
    "mr": "थेट डीबीटी (DBT) वितरीत",
    "gu": "प्रत्यक्ष ડીબીટી (DBT) વિતરित",
    "bn": "সরাসরি ডিবিটি (DBT) বিতরণ করা হয়েছে",
    "te": "నేరుగా DBT బట్వాడా చేయబడింది",
    "ta": "நேரடி DBT விநியோகிக்கப்பட்டது",
    "kn": "நேரடி ನೇರ DBT ವಿತರಿಸಲಾಗಿದೆ"
  },
  "Punjab (Khanna, Rajpura, Ludhiana)": {
    "hi": "पंजाब (खन्ना, राजपुरा, लुधियाना)",
    "pa": "ਪੰਜਾਬ (ਖੰਨਾ, ਰਾਜਪੁਰਾ, ਲੁਧਿਆਣਾ)",
    "mr": "पंजाब (खन्ना, राजपुरा, लुधियाना)",
    "gu": "પંજાબ (ખન્ના, રાજપુરા, લুধিয়ানা)",
    "bn": "পঞ্জাব (খান্না, রাজপুরা, লুধিয়ানা)",
    "te": "పంజాబ్ (ఖన్నా, రాజ్‌పురా, లుధియానా)",
    "ta": "பஞ்சாப் (கன்னா, ராஜபுரா, லுதியானா)",
    "kn": "ಪಂಜಾಬ್ (ಖನ್ನಾ, ರಾಜ್‌ಪುರ, ಲುಧಿಯಾನ)"
  },
  "42 Mandis": {
    "hi": "42 मंडियाँ",
    "pa": "42 ਮੰਡੀਆਂ",
    "mr": "42 मोंड्या",
    "gu": "42 મંડીઓ",
    "bn": "৪২টি মান্ডি",
    "te": "42 మন্ডీలు",
    "ta": "42 மண்டிகள்",
    "kn": "42 ಮಂಡಿಗಳು"
  },
  "92% (From 54h to 4.2h)": {
    "hi": "92% (54 घंटे से 4.2 घंटे)",
    "pa": "92% (54 ਘੰਟੇ ਤੋਂ 4.2 ਘੰਟੇ)",
    "mr": "92% (54 तासांवरून 4.2 तास)",
    "gu": "92% (54 કલાકથી 4.2 કલાક)",
    "bn": "৯২% (৫৪ ঘণ্টা থেকে ৪.২ ঘণ্টা)",
    "te": "92% (54 గంటల నుండి 4.2 గంటలకు)",
    "ta": "92% (54 மணி நேரத்திலிருந்து 4.2 மணி நேரமாக)",
    "kn": "92% (54 ಗಂಟೆಗಳಿಂದ 4.2 ಗಂಟೆಗಳಿಗೆ)"
  },
  "₹41.2 Crores": {
    "hi": "₹41.2 करोड़",
    "pa": "₹41.2 ਕਰੋੜ",
    "mr": "₹41.2 कोटी",
    "gu": "₹41.2 કરોડ",
    "bn": "₹৪১.২ কোটি",
    "te": "₹41.2 కోట్లు",
    "ta": "₹41.2 கோடிகள்",
    "kn": "₹41.2 ಕೋಟಿ"
  },
  "₹1,842 Crores": {
    "hi": "₹1,842 करोड़",
    "pa": "₹1,842 ਕਰੋੜ",
    "mr": "₹1,842 कोटी",
    "gu": "₹1,842 કરોડ",
    "bn": "₹১,৮৪২ কোটি",
    "te": "₹1,842 కోట్లు",
    "ta": "₹1,842 கோடிகள்",
    "kn": "₹1,842 ಕೋಟಿ"
  },
  "Haryana (Karnal, Kurukshetra, Ambala)": {
    "hi": "हरियाणा (करनाल, कुरुक्षेत्र, अंबाला)",
    "pa": "ਹਰਿਆਣਾ (ਕਰਨਾਲ, ਕੁਰੂਕਸ਼ੇਤਰ, ਅੰਬਾਲਾ)",
    "mr": "हरियाणा (कर्नाल, कुरुक्षेत्र, अंबाला)",
    "gu": "હરિયાણા (કર્નાલ, કુરુક્ષેત્ર, અંબાલા)",
    "bn": "হরিয়ানা (কার্নাল, কুরুক্ষেত্র, আম্বালা)",
    "te": "హర్యానా (కర్ನಾಲ್, కురుక్షేత్ర, అంబాలా)",
    "ta": "ஹரியானா (கர்னால், குருஷேத்ரம், அம்பாலா)",
    "kn": "ಹರಿಯಾಣ (ಕರ್ನಾಲ್, ಕುರುಕ್ಷೇತ್ರ, ಅಂಬಾಲ)"
  },
  "36 Mandis": {
    "hi": "36 मंडियाँ",
    "pa": "36 ਮੰਡੀਆਂ",
    "mr": "36 मोंड्या",
    "gu": "36 મંડીઓ",
    "bn": "৩৬টি মান্ডি",
    "te": "36 మন্ডీలు",
    "ta": "36 மண்டிகள்",
    "kn": "36 ಮಂಡಿಗಳು"
  },
  "89% (From 48h to 5.1h)": {
    "hi": "89% (48 घंटे से 5.1 घंटे)",
    "pa": "89% (48 ਘੰਟੇ ਤੋਂ 5.1 ਘੰਟੇ)",
    "mr": "89% (48 तासांवरून 5.1 तास)",
    "gu": "89% (48 કલાકથી 5.1 કલાક)",
    "bn": "৮৯% (৪৮ ঘণ্টা থেকে ৫.১ ঘণ্টা)",
    "te": "89% (48 గంటల నుండి 5.1 గంటలకు)",
    "ta": "89% (48 மணி நேரத்திலிருந்து 5.1 மணி நேரமாக)",
    "kn": "89% (48 ಗಂಟೆಗಳಿಂದ 5.1 ಗಂಟೆಗಳಿಗೆ)"
  },
  "₹32.8 Crores": {
    "hi": "₹32.8 करोड़",
    "pa": "₹32.8 ਕਰੋੜ",
    "mr": "₹32.8 कोटी",
    "gu": "₹32.8 કરોડ",
    "bn": "₹৩২.৮ কোটি",
    "te": "₹32.8 కోట్లు",
    "ta": "₹32.8 கோடிகள்",
    "kn": "₹32.8 ಕೋಟಿ"
  },
  "₹1,410 Crores": {
    "hi": "₹1,410 करोड़",
    "pa": "₹1,410 ਕਰੋੜ",
    "mr": "₹1,410 कोटी",
    "gu": "₹1,410 કરોડ",
    "bn": "₹1,410 কোটি",
    "te": "₹1,410 కోట్లు",
    "ta": "₹1,410 கோடிகள்",
    "kn": "₹1,410 ಕೋಟಿಗಳು"
  },
  "Madhya Pradesh (Ujjain, Sehore, Dewas)": {
    "hi": "मध्य प्रदेश (उज्जैन, सीहोर, देवास)",
    "pa": "ਮੱਧ ਪ੍ਰਦੇਸ਼ (ਉਜੈਨ, ਸੀਹੋਰ, ਦੇਵਾਸ)",
    "mr": "मध्य प्रदेश (उज्जैन, सीहोर, देवास)",
    "gu": "મધ્યપ્રદેશ (ઉજ્જૈન, સીહોર, દેવાસ)",
    "bn": "মধ্যপ্রদেশ (উজ্জয়নী, সিহোর, দেওয়াস)",
    "te": "మధ్యప్రదేశ్ (ఉజ్ಜೈನಿ, సిహోర్, దేవాస్)",
    "ta": "மத்தியப் பிரதேசம் (உஜ்ஜைனி, சிகோர், தேவாஸ்)",
    "kn": "ಮಧ್ಯಪ್ರದೇಶ (ಉಜ್ಜೈನಿ, ಸೀಹೋರ್, ದೇವಾಸ್)"
  },
  "28 Mandis": {
    "hi": "28 मंडियाँ",
    "pa": "28 ਮੰਡੀਆਂ",
    "mr": "२८ मोंड्या",
    "gu": "૨૮ મંડીઓ",
    "bn": "২৮ টি মান্ডি",
    "te": "28 మండిలు",
    "ta": "28 மாண்டிகள்",
    "kn": "28 ಮಂಡಿಗಳು"
  },
  "94% (From 62h to 3.8h)": {
    "hi": "94% (62 घंटे से 3.8 घंटे)",
    "pa": "94% (62 ਘੰਟੇ ਤੋਂ 3.8 ਘੰਟੇ)",
    "mr": "94% (62 तासांवरून 3.8 तास)",
    "gu": "94% (૬૨ કલાકથી ૩.૮ કલાક)",
    "bn": "94% (৬২ ঘণ্টা থেকে ৩.৮ ঘণ্টা)",
    "te": "94% (62 గంటల నుండి 3.8 గంటలకు)",
    "ta": "94% (62 மணி நேரத்திலிருந்து 3.8 மணி நேரமாக)",
    "kn": "94% (62 ಗಂಟೆಗಳಿಂದ 3.8 ಗಂಟೆಗಳಿಗೆ)"
  },
  "₹24.5 Crores": {
    "hi": "₹24.5 करोड़",
    "pa": "₹24.5 ਕਰੋੜ",
    "mr": "₹24.5 कोटी",
    "gu": "₹24.5 કરોડ",
    "bn": "₹24.5 কোটি",
    "te": "₹24.5 కోట్లు",
    "ta": "₹24.5 கோடிகள்",
    "kn": "₹24.5 ಕೋಟಿಗಳು"
  },
  "₹980 Crores": {
    "hi": "₹980 करोड़",
    "pa": "₹980 ਕਰੋੜ",
    "mr": "₹980 कोटी",
    "gu": "₹980 કરોડ",
    "bn": "₹980 কোটি",
    "te": "₹980 కోట్లు",
    "ta": "₹980 கோடிகள்",
    "kn": "₹980 ಕೋಟಿಗಳು"
  },
  "Uttar Pradesh (Aligarh, Bareilly, Hapur)": {
    "hi": "उत्तर प्रदेश (अलीगढ़, बरेली, हापुड़)",
    "pa": "ਉੱਤਰ ਪ੍ਰਦੇਸ਼ (ਅਲੀਗੜ੍ਹ, ਬਰੇਲ��, ਹਾਪੁੜ)",
    "mr": "उत्तर प्रदेश (अशीगड, बरेली, हापूर)",
    "gu": "ઉત્તર પ્રદેશ (અલીગઢ, બરેલી, હાપુર)",
    "bn": "উত্তর প্রদেশ (আলীগড়, বারেলি, হাপুর)",
    "te": "ఉత్తర ప్రదేశ్ (అలీగఢ్, బరేలీ, హాపూర్)",
    "ta": "உத்தரப் பிரதேசம் (அலிகார், பரேலி, ஹாபூர்)",
    "kn": "ಉತ್ತರ ಪ್ರದೇಶ (ಅಲಿಗಢ, ಬರೇಲಿ, ಹ್ಯಾಪೂರ್)"
  },
  "35 Mandis": {
    "hi": "35 मंडियाँ",
    "pa": "35 ਮੰਡੀਆਂ",
    "mr": "३५ मोंड्या",
    "gu": "૩૫ મંડીઓ",
    "bn": "৩৫ টি মান্ডি",
    "te": "35 మండిలు",
    "ta": "35 மாண்டிகள்",
    "kn": "35 ಮಂಡಿಗಳು"
  },
  "88% (From 50h to 5.8h)": {
    "hi": "88% (50 घंटे से 5.8 घंटे)",
    "pa": "88% (50 ਘੰਟੇ ਤੋਂ 5.8 ਘੰਟੇ)",
    "mr": "88% (50 तासांवरून 5.8 तास)",
    "gu": "88% (૫૦ કલાકથી ૫.૮ કલાક)",
    "bn": "88% (৫০ ঘণ্টা থেকে ৫.৮ ঘণ্টা)",
    "te": "88% (50 గంటల నుండి 5.8 గంటలకు)",
    "ta": "88% (50 மணி நேரத்திலிருந்து 5.8 மணி நேரமாக)",
    "kn": "88% (50 ಗಂಟೆಗಳಿಂದ 5.8 ಗಂಟೆಗಳಿಗೆ)"
  },
  "₹38.6 Crores": {
    "hi": "₹38.6 करोड़",
    "pa": "₹38.6 ਕਰੋੜ",
    "mr": "₹38.6 कोटी",
    "gu": "₹38.6 કરોડ",
    "bn": "₹38.6 কোটি",
    "te": "₹38.6 కోట్లు",
    "ta": "₹38.6 கோடிகள்",
    "kn": "₹38.6 ಕೋಟಿಗಳು"
  },
  "₹1,290 Crores": {
    "hi": "₹1,290 करोड़",
    "pa": "₹1,290 ਕਰੋੜ",
    "mr": "₹1,290 कोटी",
    "gu": "₹1,290 કરોડ",
    "bn": "₹1,290 কোটি",
    "te": "₹1,290 కోట్లు",
    "ta": "₹1,290 கோடிகள்",
    "kn": "₹1,290 ಕೋಟಿಗಳು"
  },
  "National Agriculture Market (e-NAM) • APMC Modernization Initiative": {
    "hi": "राष्ट्रीय कृषि बाजार (e-NAM) • APMC आधुनिकीकरण पहल",
    "pa": "ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ ਬਾਜ਼ਾਰ (e-NAM) • APMC ਆਧੁਨਿਕੀਕਰਨ ਪਹਿਲ",
    "mr": "राष्ट्रीय कृषी बाजार (e-NAM) • APMC आधुनिकीकरण उपक्रम",
    "gu": "રાષ્ટ્રીય કૃષિ બજાર (e-NAM) • APMC આધુનિકીકરણ પહેલ",
    "bn": "জাতীয় কৃষি বাজার (e-NAM) • APMC আধুনিকীকরণ উদ্যোগ",
    "te": "జాతీయ వ్యవసాయ మార్కెట్ (e-NAM) • APMC ఆధునీకరణ पहल",
    "ta": "தேசிய வேளாண் சந்தை (e-NAM) • APMC நவீனமயமாக்கல் முயற்சி",
    "kn": "ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ (e-NAM) • APMC ಆಧುನೀಕರಣ iniciativa"
  },
  "High-Throughput APMC Mandi Logistics & Operational Resilience Protocol": {
    "hi": "हाई-थ्रूपुट APMC मंडी लॉजिस्टिक्स और परिचालन लचीलापन प्रोटोकॉल",
    "pa": "ਹਾਈ-ਥ੍ਰੂਪੁੱਟ APMC ਮੰਡੀ ਲੌਜਿਸਟਿਕਸ ਅਤੇ ਆਪਰੇਸ਼ਨਲ ਲਚਕਤਾ ਪ੍ਰੋਟੋਕੋਲ",
    "mr": "हाय-थ्रूपुट APMC मंडी लॉजिस्टिक���स आणि ऑपरेशनल लवचिकता प्रोटोकॉल",
    "gu": "હાઈ-થ્રૂપુટ APMC મંડી લોજિસ્ટિક્સ અને ઓપરેશનલ સ્થિતિસ્થાપકતા પ્રોટોકોલ",
    "bn": "হাই-থ্রুপুট APMC মান্ডি লজিস্টিকস এবং অপারেশনাল রেজিলিয়েন্স প্রোটোকল",
    "te": "హై-థ్రూపుట్ APMC మండి లాజిస్టిక్స్ మరియు ఆపరేషనల్ రెసిಲಿಯెన్స్ ప్రొటోకాల్",
    "ta": "உயர்-செயல்திறன் APMC மண்டி லாஜிஸ்டிக்ஸ் & செயல்பாட்டு நெகிழ்ச்சி நெறிமுறை",
    "kn": "ಹೈ-ಥ್ರೂಪುಟ್ APMC ಮಂಡಿ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಮತ್ತು ಆಪರೇಷನಲ್ ರೆಸಿಲಿಯೆನ್ಸ್ ಪ್ರೋಟೋಕಾಲ್"
  },
  "Engineered for nationwide APMC mandis to eliminate 48-hour highway gridlocks, prevent post-harvest monsoon spoilage, and guarantee 100% Direct Benefit Transfer (DBT) MSP proceeds straight into farmer bank accounts with zero middlemen deductions.": {
    "hi": "राष्ट्रव्यापी APMC मंडियों के लिए डिज़ाइन किया गया ताकि 48 घंटे के हाईवे जाम को खत्म किया जा सके, कटाई के बाद मानसून की बर्बादी को रोका जा सके, और बिना किसी बिचौलिए की कटौती के 100% प्रत्यक्ष लाभ हस्तांतरण (DBT) MSP राशि सीधे किसान के बैंक खातों में जमा हो सके।",
    "pa": "ਦੇਸ਼ ਵਿਆਪੀ APMC ਮੰਡੀਆਂ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤਾ ਗਿਆ ਹੈ ਤਾਂ ਜੋ 48 ਘੰਟੇ ਦੇ ਹਾਈਵੇ ਜਾਮ ਨੂੰ ਖਤਮ ਕੀਤਾ ਜਾ ਸਕੇ, ਵਾਢੀ ਤੋਂ ਬਾਅਦ ਮਾਨਸੂਨ ਦੀ ਬਰਬਾਦੀ ਨੂੰ ਰੋਕਿਆ ਜਾ ਸਕੇ, ਅਤੇ ਬਿਨਾਂ ਕਿਸੇ ਵਿਚੋਲੇ ਦੀ ਕਟौती ਦੇ 100% ਸਿੱਧਾ ਲਾਭ ਟ੍ਰਾਂਸਫਰ (DBT) MSP ਪੈਸੇ ਸਿੱਧੇ ਕਿਸਾਨਾਂ ਦੇ ਬੈਂਕ ਖਾਤਿਆਂ ਵਿੱਚ ਪਹੁੰਚਣ।",
    "mr": "देशभरा��ील APMC मंडींसाठी डिझाइन केलेले जेणेकरून ४८ तासांचे हायवे जाम संपवता येतील, काढणीनंतरच्या पावसाळ्यातील नासाडी थांबवता येईल आणि कोणत्याही मध्यस्थाच्या कपातीशिवाय १००% थेट लाभ हस्तांतरण (DBT) MSP रक्कम थेट शेतकऱ्यांच्या बँक खात्यात जमा होईल.",
    "gu": "દેશવ્યાપી APMC મંડીઓ માટે ઇજનેરી કરેલ જેથી 48 કલાકના હાઇવે ટ્રાફિક જામને દૂર કરી શકાય, લણણી પછીના ચોમાસાના બગાડને અટકાવી શકાય, અને કોઈપણ વચેટિયાની કપાત વિના 100% ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (DBT) MSP રકમ સીધી ખેડૂતના બેંક ખાતામાં જમા થાય.",
    "bn": "দেশব্যাপী APMC মান্ডির জন্য তৈরি করা হয়েছে যাতে ৪৮ ঘণ্টার হাইওয়ে জ্যাম দূর করা যায়, ফসল কাটার পরের বর্ষার পচন রোধ করা যায়, এবং কোনো মধ্যস্বত্বভোগীর কাটাছাঁট ছাড়াই ১০০% ডাইরেক্ট বেনিফিট ট্রান্সফার (DBT) MSP এর টাকা সরাসরি কৃষকের ব্যাংক অ্যাকাউন্টে জমা হয়।",
    "te": "దేశవ్యాప్తంగా ఉన్న APMC మండిల కోసం రూపొందించబడింది, ఇది 48 గంటల హైవే ట్రాఫిక్ జామ్‌లను తొలగించడానికి, కోత తర్వాత వర్షాకాలపు చెడిపోవడాన్ని నివారించడానికి మరియు మధ్యవర్తుల కోత లేకుండా 100% డైరెక్ట్ బెనిఫిట్ ట్రాన్స్‌ఫర్ (DBT) MSP మొత్తాన్ని నేరుగా రైతు బ్యాంక్ ఖాతాలకు చేరేలా చేయడానికి ఇంజనీర్ చేయబడింది.",
    "ta": "நாடு ��ுழுவதும் உள்ள APMC mandis-க்காக வடிவமைக்கப்பட்டுள்ளது. 48 மணி நேர நெடுஞ்சாலை முடக்கங்களை நீக்கவும், அறுவடைக்குப் பிந்தைய பருவமழை அழிவைத் தடுக்கவும், மற்றும் இடைத்தரகர்கள் deductions இல்லாமல் 100% நேரடி பலன் பரிமாற்றம் (DBT) MSP தொகையை நேரடியாக விவசாயிகளின் வங்கி கணக்குகளுக்கு உறுதி செய்யவும்.",
    "kn": "ದೇಶಾದ್ಯಂತದ APMC ಮಂಡಿಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ, ಇದು 48 ಗಂಟೆಗಳ ಹೆದ್ದಾರಿ ದಟ್ಟಣೆಯನ್ನು ನಿವಾರಿಸಲು, ಕಟಾವಿನ ನಂತರದ ಮಳೆಗಾಲದ ಹಾಳಾಗುವಿಕೆಯನ್ನು ತಡೆಯಲು ಮತ್ತು ಯಾವುದೇ ಮಧ್ಯವರ್ತಿಗಳ ಕಡಿತವಿಲ್ಲದೆ 100% ನೇರ ಲಾಭ ವರ್ಗಾವಣೆ (DBT) MSP ಹಣವನ್ನು ನೇರವಾಗಿ ರೈತರ ಬ್ಯಾಂಕ್ ಖಾತೆಗಳಿಗೆ ಖಚಿತಪಡಿಸಲು ರೂಪಿಸಲಾಗಿದೆ."
  },
  "e-NAM 2.0 Compliant": {
    "hi": "e-NAM 2.0 अनुपालन",
    "pa": "e-NAM 2.0 ਪਾਲਣਾ",
    "mr": "e-NAM 2.0 सुसंगत",
    "gu": "e-NAM 2.0 સુસંગત",
    "bn": "e-NAM 2.0 সামঞ্জস্যপূর্ণ",
    "te": "e-NAM 2.0 కంಪ್ಲೈಂಟ್",
    "ta": "e-NAM 2.0 இணக்கமானது",
    "kn": "e-NAM 2.0 ಅನುಸರಣೆ"
  },
  "Zero Middlemen • 100% PFMS Treasury Integration • 2,400+ APMC Mandis": {
    "hi": "शून्य बिचौलिए • 100% PFMS ट्रेजरी एकीकरण • 2,400+ APMC मंडियाँ",
    "pa": "ਸਿਫ਼ਰ ਵਿਚੋਲੇ • 100% PFMS ਖਜ਼ਾਨਾ ਏਕੀਕਰਣ • 2,400+ APMC ਮੰਡੀਆਂ",
    "mr": "शून्य मध्यस्थ • १००% PFMS ट्रेझरी एकत्रीकरण • २,४००+ APMC मंड्या",
    "gu": "શૂન્ય વચેટિયાઓ • 100% PFMS ટ્રેઝરી એકીકરણ • 2,400+ APMC મંડીઓ",
    "bn": "শূন্য মধ্যস্বত্বভোগী • ১০০% PFMS ট��রেজারি ইন্টিগ্রেশন • ২,৪০০+ APMC মান্ডি",
    "te": "జీరో మిడిల్‌మెన్ • 100% PFMS ట్రెజరీ ఇంటిగ్రేషన్ • 2,400+ APMC మండిలు",
    "ta": "பூஜ்ஜிய இடைத்தரகர்கள் • 100% PFMS கருவூல ஒருங்கிணைப்பு • 2,400+ APMC Mandis",
    "kn": "ಶೂನ್ಯ ಮಧ್ಯವರ್ತಿಗಳು • 100% PFMS ಖಜಾನೆ ಏಕೀಕರಣ • 2,400+ APMC ಮಂಡಿಗಳು"
  },
  "DEFCON-1 READINESS": {
    "hi": "DEFCON-1 तैयारी",
    "pa": "DEFCON-1 ਤਿਆਰੀ",
    "mr": "DEFCON-1 तयारी",
    "gu": "DEFCON-1 તૈયારી",
    "bn": "DEFCON-1 প্রস্তুতি",
    "te": "DEFCON-1 రెడీನೆಸ್",
    "ta": "DEFCON-1 தயார்நிலை",
    "kn": "DEFCON-1 ಸಿದ್ಧತೆ"
  },
  "Procurement Quality & Assaying Norms": {
    "hi": "खरीद गुणवत्ता और परख मानदंड",
    "pa": "ਖਰੀਦ ਗੁਣਵੱਤਾ ਅਤੇ ਪਰਖ ਮਾਪਦੰਡ",
    "mr": "खरेदी गुणवत्ता ��णि तपासणी मानके",
    "gu": "ખરીદી ગુણવત્તા અને ચકાસણી ધોરણો",
    "bn": "সংগ্রহের গুণমান এবং অ্যাসায়িং মান",
    "te": "సేకరణ నాణ్యత & అస్సేయింగ్ నిబంధనలు",
    "ta": "கொள்முதல் தரம் & பரிசோதனை விதிமுறைகள்",
    "kn": "ಖರೀದಿ ಗುಣಮಟ್ಟ ಮತ್ತು ಅಸ್ಸೇಯಿಂಗ್ ಮಾನದಂಡಗಳು"
  },
  "Official FCI Fair Average Quality (FAQ) & Moisture Dockage Standards": {
    "hi": "आधिकारिक FCI फेयर एवरेज क्वालिटी (FAQ) और नमी डॉकेज मानक",
    "pa": "ਅਧਿਕਾਰਤ FCI ਫੇਅਰ ਐਵਰੇਜ ਕੁਆਲਿਟੀ (FAQ) ਅਤੇ ਨਮੀ ਡੌਕੇਜ ਮਿਆਰ",
    "mr": "अधिकृत FCI फेअर एव्हरेज क्वालिटी (FAQ) आणि ओलावा डार्केज मानके",
    "gu": "સત્તાવાર FCI ફેેર એવરેજ ક્વોલિટી (FAQ) અને ભેજ ડોકેજ ધોરણો",
    "bn": "অফিসিয়াল FCI ফেয়ার এভারেজ কোয়ালিটি (FAQ) এবং আর্দ্রতা ডকেজ মান",
    "te": "అధికారిక FCI ఫెయిర్ యావరేజ్ క్వాలిటీ (FAQ) & తేమ డాకేజ్ ప్రమాణాలు",
    "ta": "அதிகாரப்பூர்வ FCI நியாயமான சராசரி தரம் (FAQ) & ஈரப்பதம் டோக்கேஜ் தரநிலைகள்",
    "kn": "ಅಧಿಕೃತ FCI ಫೇರ್ ಆವರೇಜ್ ಕ್ವಾಲಿಟಿ (FAQ) ಮತ್ತು ತೇವಾಂಶ ಡಾಕೇಜ್ ಮಾನದಂಡಗಳು"
  },
  "FCI / APMC Statutory Norms 2026": {
    "hi": "FCI / APMC वैधानिक मानदंड 2026",
    "pa": "FCI / APMC ਕਾਨੂੰਨੀ ਮਿਆਰ 2026",
    "mr": "FCI / APMC कायदेशीर मानके २०२६",
    "gu": "FCI / APMC કાનૂની ધોરણો 2026",
    "bn": "FCI / APMC সংবিধিবদ্ধ মান ২০২৬",
    "te": "FCI / APMC చట్టబద్ధమైన నిబంధనలు 2026",
    "ta": "FCI / APMC சட்டப்பூர்வ விதிமுறைகள�� 2026",
    "kn": "FCI / APMC ಶಾಸಬದ್ಧ ಮಾನದಂಡಗಳು 2026"
  },
  "Commodity": {
    "hi": "जिंस",
    "pa": "ਜਿਣਸ",
    "mr": "शेतीमाल",
    "gu": "જિન્સ",
    "bn": "পণ্য",
    "te": "సరుకు",
    "ta": "சரக்கு",
    "kn": "ಸರಕು"
  },
  "Standard Moisture (FAQ)": {
    "hi": "मानक नमी (FAQ)",
    "pa": "ਮਿਆਰੀ ਨਮੀ (FAQ)",
    "mr": "प्रमाणित ओलावा (FAQ)",
    "gu": "પ્રમાણભૂત ભેજ (FAQ)",
    "bn": "আদর্শ আর্দ্রতা (FAQ)",
    "te": "ప్రమాణిక తేమ (FAQ)",
    "ta": "இயல்பான ஈரப்பதம் (FAQ)",
    "kn": "ಪ್ರಮಾಣಿತ ತೇವಾಂಶ (FAQ)"
  },
  "Max Permissible Moisture": {
    "hi": "अधिकतम स्वीकार्य नमी",
    "pa": "ਵਧ ਤੋਂ ਵਧ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਨਮੀ",
    "mr": "कमाल परवानगीयोग्य ओलावा",
    "gu": "મહત્તમ મંજૂર ભેજ",
    "bn": "সর্বোচ্চ গ্রহণযোগ্য আর্দ্রতা",
    "te": "గరిష్ట అనుమతించదగిన తేమ",
    "ta": "அதிகபட்ச அனுமதிக்கப்பட்ட ஈரப்பதம்",
    "kn": "ಗರಿಷ್ಠ ಅನುಮತಿಸಬಹುದಾದ ತೇವಾಂಶ"
  },
  "Foreign Matter (Inorganic/Organic)": {
    "hi": "विजातीय पदार्थ (अकार्बनिक/कार्बनिक)",
    "pa": "ਬਾਹਰੀ ਪਦਾਰਥ (ਅਕਾਰਬਨਿਕ/ਕਾਰਬਨਿਕ)",
    "mr": "परकीय घटक (अजैविक/जैविक)",
    "gu": "પરચૂરણ કચરો (અકારબનિક/કાર્બનિક)",
    "bn": "বহিরাগত উপাদান (অ��ৈব/জৈব)",
    "te": "విదేశీ పదార్థం (అకర్బన/సేంద్రీయ)",
    "ta": "அந்நியப் பொருட்கள் (கனிம/கரிம)",
    "kn": "ವಿದೇಶಿ ವಸ್ತು (ಅಜೈವಿಕ/ಸಾವಯವ)"
  },
  "Damaged / Weeviled Grain": {
    "hi": "क्षतिग्रस्त / घुन लगा अनाज",
    "pa": "ਖਰਾਬ / ਸੁੰਡੀ ਵਾਲਾ ਦਾਣਾ",
    "mr": "दोषयुक्त / सडलेला / घुण लागलेला दाणे",
    "gu": "નુકસાન પામેલા / ઘૂണ്‍ લાગેલા દાણા",
    "bn": "ক্ষতিগ্রস্ত / ঘুণ ধরা শস্য",
    "te": "దెబ్బతిన్న / పురుగుపట్టిన ధాన్యం",
    "ta": "சேதமடைந்த / வண்டு அரிக்கப்பட்ட தானியம்",
    "kn": "ಹಾಳಾದ / ಹುಳ ಹಿಡಿದ ಧಾನ್ಯ"
  },
  "Transparent Dockage Rule": {
    "hi": "पारदर्शी कटौती नियम",
    "pa": "ਪਾਰਦਰਸ਼ੀ ਕਟੌਤੀ ਨਿਯਮ",
    "mr": "पारदर्शक कपात नियम",
    "gu": "પારદર્શક કપાત નિયમ",
    "bn": "স্বচ্ছ ডকেজ নিয়ম",
    "te": "పారదర్శక కోత నిబంధన",
    "ta": "வெளிப்படையான கழிவு விதி",
    "kn": "ಪಾರದರ್ಶಕ ಕಡಿತ ನಿಯಮ"
  },
  "Wheat (गेहूं / ਕਣਕ)": {
    "hi": "गेहूं (गेहूं / ਕਣਕ)",
    "pa": "ਕਣਕ (गेहूं / ਕਣਕ)",
    "mr": "गहू (गेहूं / ਕਣਕ)",
    "gu": "ઘઉં (गेहूं / ਕਣਕ)",
    "bn": "গম (गेहूं / ਕਣਕ)",
    "te": "గోధుమలు (गेहूं / ਕਣਕ)",
    "ta": "கோதுமை (गेहूं / ਕਣਕ)",
    "kn": "ಗೋಧಿ (गेहूं / ਕਣਕ)"
  },
  "≤ 12.0%": {
    "hi": "≤ 12.0%",
    "pa": "≤ 12.0%",
    "mr": "≤ 12.0%",
    "gu": "≤ 12.0%",
    "bn": "≤ 12.0%",
    "te": "≤ 12.0%",
    "ta": "≤ 12.0%",
    "kn": "≤ 12.0%"
  },
  "14.0% (With drying bay)": {
    "hi": "14.0% (ड्राइंग बे के साथ)",
    "pa": "14.0% (ਡ੍ਰਾਈੰਗ ਬੇ ਸਮੇਤ)",
    "mr": "14.0% (ड्रायिंग बे सह)",
    "gu": "14.0% (ડ્રાયિંગ બે સાથે)",
    "bn": "14.0% (ড্রাইিং বে সহ)",
    "te": "14.0% (డ్రైయింగ్ బేతో)",
    "ta": "14.0% (உலர்த்தும் அறையுடன்)",
    "kn": "14.0% (ಡ್ರೈಯಿಂಗ್ ಬೇ ಜೊತೆ)"
  },
  "Max 0.75% / 1.25%": {
    "hi": "अधिकतम 0.75% / 1.25%",
    "pa": "ਵਧ ਤੋਂ ਵਧ 0.75% / 1.25%",
    "mr": "कमाल 0.75% / 1.25%",
    "gu": "મહત્તમ 0.75% / 1.25%",
    "bn": "সর্বোচ্চ 0.75% / 1.25%",
    "te": "గరిష్టంగా 0.75% / 1.25%",
    "ta": "அதிகபட்சம் 0.75% / 1.25%",
    "kn": "ಗರಿಷ್ಠ 0.75% / 1.25%"
  },
  "Max 2.0% (Grade 1)": {
    "hi": "अधिकतम 2.0% (ग्रेड 1)",
    "pa": "ਵੱਧ ਤੋਂ ਵੱਧ 2.0% (ਗ੍ਰੇਡ 1)",
    "mr": "कमाल 2.0% (ग्रेड 1)",
    "gu": "મહત્તમ 2.0% (ગ્રેડ 1)",
    "bn": "সর্বোচ্চ ২.০% (গ্রেড ১)",
    "te": "గరిష్టంగా 2.0% (గ్రేడ్ 1)",
    "ta": "அதிகபட்சம் 2.0% (தரம் 1)",
    "kn": "ಗರಿಷ್ಠ 2.0% (ಗ್ರೇಡ್ 1)"
  },
  "Zero deduction ≤ 12%": {
    "hi": "शून्य कटौती ≤ 12%",
    "pa": "ਕੋਈ ਕਟੌਤੀ ਨਹੀਂ ≤ 12%",
    "mr": "कोणतीही कपात नाही ≤ 12%",
    "gu": "શૂન્ય કપાત ≤ 12%",
    "bn": "শূন্য কর্তন ≤ ১২%",
    "te": "సున్నా కోత ≤ 12%",
    "ta": "கழிவுகள் இல்லை ≤ 12%",
    "kn": "ಯಾವ ಕಡಿತವೂ ಇಲ್ಲ ≤ 12%"
  },
  "Paddy / Rice (धान / ਝੋਨਾ)": {
    "hi": "धान / चावल (धान / ਝੋਨਾ)",
    "pa": "ਝੋਨਾ / ਚੌਲ (धान / ਝੋਨਾ)",
    "mr": "भात / तांदूळ (धान / ਝੋਨਾ)",
    "gu": "ડાંગર / ચોખા (धान / ਝੋਨਾ)",
    "bn": "ধান / চাল (धान / ਝੋਨਾ)",
    "te": "వరి / బియ్యం (धान / ਝੋਨਾ)",
    "ta": "நெல் / அரிசி (धान / ਝੋਨਾ)",
    "kn": "ಭತ್ತ / ಅಕ್ಕಿ (धान / ਝੋਨਾ)"
  },
  "≤ 17.0%": {
    "hi": "≤ 17.0%",
    "pa": "≤ 17.0%",
    "mr": "≤ 17.0%",
    "gu": "≤ 17.0%",
    "bn": "≤ ১৭.০%",
    "te": "≤ 17.0%",
    "ta": "≤ 17.0%",
    "kn": "≤ 17.0%"
  },
  "Max 1.0% / 1.0%": {
    "hi": "अधिकतम 1.0% / 1.0%",
    "pa": "ਵੱਧ ਤੋਂ ਵੱਧ 1.0% / 1.0%",
    "mr": "कमाल 1.0% / 1.0%",
    "gu": "મહત્તમ 1.0% / 1.0%",
    "bn": "সর্বোচ্চ ১.০% / ১.০%",
    "te": "గరిష్టంగా 1.0% / 1.0%",
    "ta": "அதிகபட்சம் 1.0% / 1.0%",
    "kn": "ಗರಿಷ್ಠ 1.0% / 1.0%"
  },
  "Max 3.0% (Discolored max 3%)": {
    "hi": "अधिकतम 3.0% (रंग उड़ा हुआ अधिकतम 3%)",
    "pa": "ਵੱਧ ਤੋਂ ਵੱਧ 3.0% (ਰੰਗ ਬਦਲਿਆ ਵੱਧ ਤੋਂ ਵੱਧ 3%)",
    "mr": "कमाल 3.0% (रंग बदललेला कमाल 3%)",
    "gu": "મહત્તમ 3.0% (રંગ બદલાયેલ મહત્તમ 3%)",
    "bn": "সর্বোচ্চ ৩.০% (রংচটা সর্বোচ্চ ৩%)",
    "te": "గరిష్టంగా 3.0% (రంగు మారినది గరిష్టంగా 3%)",
    "ta": "அதிகபட்சம் 3.0% (நிறம் மாறியது அதிகபட்சம் 3%)",
    "kn": "ಗರಿಷ್ಠ 3.0% (ಬಣ್ಣ ಬದಲಾದ ಗರಿಷ್ಠ 3%)"
  },
  "1:1 Value deduction > 17%": {
    "hi": "1:1 मूल्य कटौती > 17%",
    "pa": "1:1 ਮੁੱਲ ਕਟੌਤੀ > 17%",
    "mr": "1:1 मूल्य कपात > 17%",
    "gu": "1:1 મૂલ્ય કપાત > 17%",
    "bn": "১:১ মূল্য কর্তন > ১৭%",
    "te": "1:1 విలువ కోత > 17%",
    "ta": "1:1 மதிப்பு கழிவு > 17%",
    "kn": "1:1 ಮೌಲ್ಯ ಕಡಿತ > 17%"
  },
  "Mustard (सरसों / ਸਰ੍ਹੋਂ)": {
    "hi": "सरसों (सरसों / ਸਰ੍ਹੋਂ)",
    "pa": "ਸਰ੍ਹੋਂ (सरसों / ਸਰ੍ਹੋਂ)",
    "mr": "मोहरी (सरसों / ਸਰ੍ਹੋਂ)",
    "gu": "રાયડો / સરસવ (सरसों / ਸਰ੍ਹੋਂ)",
    "bn": "সরিষা (सरसों / ਸਰ੍ਹੋਂ)",
    "te": "ఆవాలు (सरसों / ਸਰ੍ਹੋਂ)",
    "ta": "கடுகு (सरसों / ਸਰ੍ਹੋਂ)",
    "kn": "ಸಾಸಿವೆ (सरसों / ਸਰ੍ਹੋਂ)"
  },
  "≤ 8.0%": {
    "hi": "≤ 8.0%",
    "pa": "≤ 8.0%",
    "mr": "≤ 8.0%",
    "gu": "≤ 8.0%",
    "bn": "≤ ৮.০%",
    "te": "≤ 8.0%",
    "ta": "≤ 8.0%",
    "kn": "≤ 8.0%"
  },
  "Max 2.0% Total": {
    "hi": "कुल अधिकतम 2.0%",
    "pa": "ਕੁੱਲ ਵੱਧ ਤੋਂ ਵੱਧ 2.0%",
    "mr": "एकूण कमाल 2.0%",
    "gu": "કુલ મહત્તમ 2.0%",
    "bn": "মোট সর্বোচ্চ ২.০%",
    "te": "మొత్తం గరిష్టంగా 2.0%",
    "ta": "மொத்தம் அதிகபட்சம் 2.0%",
    "kn": "ಒಟ್ಟು ಗರಿಷ್ಠ 2.0%"
  },
  "Oil Content ≥ 40.0% Minimum": {
    "hi": "तेल की मात्रा ≥ 40.0% न्यूनतम",
    "pa": "ਤੇਲ ਦੀ ਮਾਤਰਾ ≥ 40.0% ਘੱਟੋ-ਘੱਟ",
    "mr": "तेल प्रमाण ≥ 40.0% किमान",
    "gu": "तेलનું પ્રમાણ ≥ 40.0% ન્યૂનતમ",
    "bn": "তৈলের পরিমাণ ≥ 40.0% ন্যূনতম",
    "te": "నూనె శాతం ≥ 40.0% కనిష్టం",
    "ta": "எண்ணெய் உள்ளடக்கம் ≥ 40.0% குறைந்தது",
    "kn": "ಎಣ್ಣೆಯಾಂಶ ≥ 40.0% ಕನಿಷ್ಠ"
  },
  "+₹120/Qtl bonus if oil >41.5%": {
    "hi": "+₹120/क्विं बोनस यदि तेल >41.5%",
    "pa": "+₹120/ਕੁਇੰ ਬੋਨਸ ਜੇਕਰ ਤੇਲ >41.5%",
    "mr": "+₹120/क्विं बोनस जर तेल >41.5%",
    "gu": "+₹120/ક્વિં બોનસ જો તેલ >41.5%",
    "bn": "+₹120/কুইন্টাল বোনাস যদি তেল >41.5%",
    "te": "+₹120/క్వింటాల్ బోనస్ నూనె >41.5% ఉంటే",
    "ta": "+₹120/குவிக்டல் போனஸ் எண்ணெய் >41.5% இருந்தால்",
    "kn": "+₹120/ಕ್ವಿಂಟಲ್ ಬೋನಸ್ ಎಣ್ಣೆಯಾಂಶ >41.5% ಇದ್ದರೆ"
  },
  "☁️": {
    "hi": "☁️",
    "pa": "☁️",
    "mr": "☁️",
    "gu": "☁️",
    "bn": "☁️",
    "te": "☁️",
    "ta": "☁️",
    "kn": "☁️"
  },
  "Cotton (कपास / ਨਰਮਾ)": {
    "hi": "कपास (कपास / कपास)",
    "pa": "ਕਪਾਹ (ਕਪਾਹ / ਨਰਮਾ)",
    "mr": "कापूस (कापूस / कापूस)",
    "gu": "કપા��� (કપાસ / કપાસ)",
    "bn": "তুলা (তুলা / তুলা)",
    "te": "పత్తి (పత్తి / పత్తి)",
    "ta": "பருத்தி (பருத்தி / பருத்தி)",
    "kn": "ಹತ್ತಿ (ಹತ್ತಿ / ಹತ್ತಿ)"
  },
  "Trash max 3.5%": {
    "hi": "कचरा अधिकतम 3.5%",
    "pa": "ਕਚਰਾ ਵੱਧ ਤੋਂ ਵੱਧ 3.5%",
    "mr": "कचरा कमाल 3.5%",
    "gu": "કચરો મહત્તમ 3.5%",
    "bn": "আবর্জনা সর্বোচ্চ 3.5%",
    "te": "చెత్త గరిష్టంగా 3.5%",
    "ta": "கழிவு அதிகபட்சம் 3.5%",
    "kn": "ಕಸ ಗರಿಷ್ಠ 3.5%"
  },
  "Micronaire 3.8 – 4.2": {
    "hi": "माइक्रोनेयर 3.8 – 4.2",
    "pa": "ਮਾਈਕ੍ਰੋਨੇਅਰ 3.8 – 4.2",
    "mr": "मायक्रोनेअर 3.8 – 4.2",
    "gu": "માઈક્રોનેર 3.8 – 4.2",
    "bn": "মাইক্রোনেয়ার 3.8 – 4.2",
    "te": "మైక్రోనేర్ 3.8 – 4.2",
    "ta": "மைக்ரோனேயர் 3.8 – 4.2",
    "kn": "ಮೈಕ್ರೋನೇರ್ 3.8 – 4.2"
  },
  "CCI Direct Purchase Scale": {
    "hi": "सीसीआई प्रत्यक्ष खरीद पैमाना",
    "pa": "ਸੀ.ਸੀ.ਆਈ. ਸਿੱਧੀ ਖਰੀਦ ਸਕੇਲ",
    "mr": "सीसीआय थेट खरेदी माप",
    "gu": "સીસીઆઈ સીધી ખરીદી સ્કેલ",
    "bn": "সিসিআই সরাসরি ক্রয় স্কেল",
    "te": "సిసిఐ డైరెక్ట్ పర్చేస్ స్కేల్",
    "ta": "சிசிஐ நேரடி கொள்முதல் அளவு",
    "kn": "ಸಿಸಿಐ ನೇರ ಖರೀದಿ ಮಾಪನ"
  },
  "🧆": {
    "hi": "🧆",
    "pa": "🧆",
    "mr": "🧆",
    "gu": "🧆",
    "bn": "🧆",
    "te": "🧆",
    "ta": "🧆",
    "kn": "🧆"
  },
  "Gram / Chana (चना / ਛੋਲੇ)": {
    "hi": "चना / चना (चना / चना)",
    "pa": "ਛੋਲੇ / ਚਨਾ (चना / ਛੋਲੇ)",
    "mr": "हरभरा / चना (चना / चना)",
    "gu": "ચણા / ચ��ા (चना / ચણા)",
    "bn": "ছোলা / ছানা (चना / ছানা)",
    "te": "శెనగలు / చనా (चना / చనా)",
    "ta": "கொண்டைக்கடலை / சனா (चना / சனா)",
    "kn": "ಕಡಲೆ / ಚನಾ (चना / ಕಡಲೆ)"
  },
  "≤ 10.0%": {
    "hi": "≤ 10.0%",
    "pa": "≤ 10.0%",
    "mr": "≤ 10.0%",
    "gu": "≤ 10.0%",
    "bn": "≤ 10.0%",
    "te": "≤ 10.0%",
    "ta": "≤ 10.0%",
    "kn": "≤ 10.0%"
  },
  "Max 1.0% Inorganic": {
    "hi": "अधिकतम 1.0% अकार्बनिक",
    "pa": "ਵਧ the ਵੱਧ 1.0% ਅਕਾਰبنਿਕ",
    "mr": "कमाल 1.0% अकार्बनी",
    "gu": "વધુમાં વધુ 1.0% અકાર્બનિક",
    "bn": "সর্বোচ্চ ১.০% অজৈব",
    "te": "గరిష్టంగా 1.0% అకర్బన",
    "ta": "அதிகபட்சம் 1.0% கனிமமற்ற",
    "kn": "ಗರಿಷ್ಠ 1.0% ಅಜೈವಿಕ"
  },
  "Damaged max 3.0%": {
    "hi": "क्षतिग्रस्त अधिकतम 3.0%",
    "pa": "ਖਰਾਬ ਵੱਧ ਤੋਂ ਵੱਧ 3.0%",
    "mr": "नाश पावलेले कमाल 3.0%",
    "gu": "ક્ષતિગ્રસ્ત વધુમાં વધુ 3.0%",
    "bn": "ক্ষতিগ্রস্ত সর্বোচ্চ ৩.০%",
    "te": "దెబ్బతిన్నవి గరిష్టంగా 3.0%",
    "ta": "சேதமடைந்தவை அதிகபட்சம் 3.0%",
    "kn": "ಹಾಳಾದವು ಗರಿಷ್ಠ 3.0%"
  },
  "NAFED Central Pool Minimum": {
    "hi": "नाफेड केंद्रीय पूल न्यूनतम",
    "pa": "ਨਾਫੇਡ ਕੇਂਦਰੀ ਪੂਲ ਘੱਟੋ-ਘੱਟ",
    "mr": "नाफेड केंद्रीय पूल किमान",
    "gu": "નાફેડ સેન્ટ્રલ પૂલ ન્યૂનતમ",
    "bn": "ন্যাফেড সেন্ট্রাল পুল ন্যূনতম",
    "te": "నాఫెడ్ సెంట్రల్ పూల్ కనిష్ట",
    "ta": "நாஃபெட் மத்திய தொகுப்பு குறைந்தபட்ச",
    "kn": "ನಾಫೆಡ್ ಕೇಂದ್ರ ಪೂಲ್ ಕನಿಷ್ಠ"
  },
  "3-Minute Digital Infrared Assaying": {
    "hi": "3-मिनट डिजिटल इन्फ्रारेड परख",
    "pa": "3-ਮਿੰਟ ਡਿਜੀਟਲ ਇਨਫਰਾਰੈੱਡ ਪਰਖ",
    "mr": "3-मिनिट डिजिटल इन्फ्रारेड तपासणी",
    "gu": "3-મિનિટ ડિજિટલ ઇન્ફ્રારેડ ટેસ્ટિંગ",
    "bn": "৩-মিনিট ডিজিটাল ইনফ্রারেড অ্যাসেয়িং",
    "te": "3-నిమిషాల డిజిటల్ ఇన్‌ఫ్రారెడ్ అస్సేయింగ్",
    "ta": "3-நிமிட டிஜிட்டல் இன்ஃப்ராரெட் மதிப்பீடு",
    "kn": "3-ನಿಮಿಷದ ಡಿಜಿಟಲ್ ಇನ್ಫ್ರಾರೆಡ್ ಅಸ್ಸೇಯಿಂಗ್"
  },
  "Automated near-infrared grain analyzers measure moisture and dockage within 180 seconds. Instant digital slip logged on central e-NAM ledger prevents manual altercations.": {
    "hi": "स्वचालित नियर-इन्फ्रारेड अनाज विश्लेषक 180 सेकंड के भीतर नमी और कचरे को मापते हैं। केंद्रीय ���-नाम लेजर पर दर्ज तत्काल डिजिटल पर्ची मैनुअल झगड़ों को रोकती है।",
    "pa": "ਆਟੋਮੇਟਿਡ ਨੀਅਰ-ਇਨਫਰਾਰੈੱਡ ਗ੍ਰੇਨ ਐਨਾਲਾਈਜ਼ਰ 180 ਸਕਿੰਟਾਂ ਦੇ اندر नमी ਅਤੇ ਕਚਰੇ ਨੂੰ ਮਾਪਦੇ ਹਨ। ਕੇਂਦਰੀ ਈ-ਨਾਮ ਲੇਜ਼ਰ 'ਤੇ ਦਰਜ ਤੁਰੰਤ ਡਿਜੀਟਲ ਪਰਚੀ ਮੈਨੂਅਲ ਝਗੜਿਆਂ ਨੂੰ ਰੋਕਦੀ ਹੈ।",
    "mr": "स्वयंचलित निअर-इन्फ्रारेड धान्य विश्लेषक 180 सेकंदांच्या आत ओलावा आणि कचरा मोजतात. केंद्रीय ई-नाम लेजरवर नोंदवलेली तात्काळ डिजिटल पावती मॅन्युअल वाद टाळते.",
    "gu": "ઓટોમેટેડ નિઅર-ઇન્ફ્રારેડ ગ્રેન એનાલાઇઝર 180 સેકન્ડની અંદર ભેજ અને કચરો માપે છે. કેન્દ્રીય ઇ-નામ લેજર પર નોંધાયેલી ત્વરિત ડિજિટલ સ્લિપ મેન્યુઅલ ઝઘડા અટકાવે છે.",
    "bn": "স্বয়ংক্রিয় নিয়ার-ইনফ্রারেড গ্রেইন অ্যানালাইজার ১৮০ সেকেন্ডের মধ্যে আর্দ্রতা এবং ময়লা পরিমাপ করে। কেন্দ্রীয় ই-নাম লেজারে লগ করা তাৎক্ষণিক ডিজিটাল স্লিপ ম্যানুয়াল ঝগড়া রোধ করে।",
    "te": "ఆటోమేటెడ్ నియర్-ఇన్‌ఫ్రారెడ్ గ్రెయిన్ ఎనలైజర్‌లు 180 సెకన్లలోపు తేమ మరియు కలుపులను కొలుస్తాయి. సెంట్రల్ ఇ-నామ్ లెడ్జర్‌పై లాగిన్ చేయబడిన తక్షణ డిజిటల్ స్లిప్ మాన్యువల్ వివాదాలను నివారిస్తుంది.",
    "ta": "தானியங்கி நியர்-இன்ஃப்ராரெட் தானிய பகுப்பாய்விகள் 180 வினாடிகளுக்குள் ஈரப்பதம் மற்றும் குப���பைகளை அளவிடுகின்றன. மத்திய இ-நாம் லெட்ஜரில் பதிவு செய்யப்பட்ட உடனடி டிஜிட்டல் ஸ்லிப் கைமுறை தகராறுகளைத் தடுக்கிறது.",
    "kn": "ಸ್ವಯಂಚಾಲಿತ ನಿಫ್ಟ್-ಇನ್ಫ್ರಾರೆಡ್ ಧಾನ್ಯ ವಿಶ್ಲೇಷಕಗಳು 180 ಸೆಕೆಂಡುಗಳಲ್ಲಿ ತೇವಾಂಶ ಮತ್ತು ಕಸವನ್ನು ಅಳೆಯುತ್ತವೆ. ಕೇಂದ್ರ ಇ-ನಾಮ್ ಲೆಡ್ಜರ್‌ನಲ್ಲಿ ಲಾಗ್ ಮಾಡಲಾದ ತ್ವರಿತ ಡಿಜಿಟಲ್ ಸ್ಲಿಪ್ ಕೈಯಿಂದ ಮಾಡುವ ಜಗಳಗಳನ್ನು ತಡೆಯುತ್ತದೆ."
  },
  "Sealed Sample Retention Vault": {
    "hi": "सील बंद नमूना संरक्षण वॉल्ट",
    "pa": "ਸੀਲਬੰਦ ਸੈਂਪਲ ਰਿਟੈਂਸ਼ਨ ਵੌਲਟ",
    "mr": "सील बंद नमुना जतन वॉल्ट",
    "gu": "સીલબંધ નમૂના સંગ્રહ વૉલ્ટ",
    "bn": "সীলমোহর করা নমুনা সংরক্ষণ ভল্ট",
    "te": "సీల్డ్ నమూనా నిలుపుదల వాల్ట్",
    "ta": "சீல் வைக்கப்பட்ட மாதிரி தக்கவைப்பு வால்ட்",
    "kn": "ಸೀಲ್ ಮಾಡಿದ ಮಾದರಿ ಉಳಿಸಿಕೊಳ್ಳುವ ವಾಲ್ಟ್"
  },
  "Three 500g composite samples are sealed in tamper-proof barcoded pouches in the farmer's presence. One sample given to farmer, two stored for 14 days in Mandi Vault for appeal rights.": {
    "hi": "किसान की उपस्थिति में तीन 500 ग्राम समग्र नमूनों को छेड़छाड़-रहित बारकोड वाले पाउच में सील किया जाता है। एक नमूना किसान को दिया जाता है, अपील अधिकारों के लिए मंडी वॉल्ट में 14 दिनों के लिए दो सुरक्षित रखे जाते हैं।",
    "pa": "ਕਿਸਾਨ ਦੀ ਮੌਜੂਦਗੀ ਵਿੱਚ ਤਿੰਨ 500 ਗ੍ਰਾਮ ਸੰਯੁਕਤ ਨਮੂਨਿਆਂ ਨੂੰ ਛੇੜਛਾੜ-ਰਹਿਤ ਬਾਰਕੋਡ ਵਾਲੇ ਪਾਊਚਾ��� ਵਿੱਚ ਸੀਲ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਇੱਕ ਨਮੂਨਾ ਕਿਸਾਨ ਨੂੰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਅਪੀਲ ਦੇ ਅਧਿਕਾਰਾਂ ਲਈ ਮੰਡੀ ਵੌਲਟ ਵਿੱਚ 14 ਦਿਨਾਂ ਲਈ ਦੋ ਸਟੋਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।",
    "mr": "शेतकऱ्याच्या उपस्थितीत तीन 500 ग्रॅम मिश्र नमुने छेडछाड-रोधक बारकोड केलेल्या पाऊचमध्ये सील केले जातात. एक नमुना शेतकऱ्याला दिला जातो, अपिलाच्या हक्कांसाठी मंडी वॉल्टमध्ये 14 दिवस दोन साठवले जातात.",
    "gu": "ખેડૂતની હાજરીમાં ત્રણ 500 ગ્રામ સંયુક્ત નમૂનાઓને ચેડાં-પ્રતિરોધક બારકોડેಡ್ પાઉચમાં સીલ કરવામાં આવે છે. એક નમૂનો ખેડૂતને આપવામાં આવે છે, અપીલના અધિકારો માટે મંડી વૉલ્ટમાં 14 દિવસ માટે બે સંગ્ર���િત કરવામાં આવે છે.",
    "bn": "কৃষকের উপস্থিতিতে তিনটি ৫০০ গ্রামের যৌগিক নমুনা টেম্পার-প্রুফ বারকোডেড পাউচে সিল করা হয়। একটি নমুনা কৃষককে দেওয়া হয়, আপিলের অধিকারের জন্য মণ্ডি ভল্টে ১৪ দিন দুটি সংরক্ষণ করা হয়।",
    "te": "రైతు సమక్షంలో మూడు 500 గ్రాముల సమ్మేళన నమూనాలను ట్యాంపర్-ప్రూఫ్ బార్‌కోడెడ్ పౌచ్‌లలో సీల్ చేస్తారు. ఒక నమూనా రైతుకు ఇవ్వబడుతుంది, అప్పీలు హక్కుల కోసం మండి వాల్ట్‌లో 14 రోజులు రెండు నిల్వ చేయబడతాయి.",
    "ta": "விவசாயியின் முன்னிலையில் மூன்று 500 கிராம் கூட்டு மாதிரிகள் டேம்பர்-ப்ரூஃப் பார்கோடு பைகளில் சீல் வைக்கப்படுகின்றன. ஒரு மாதிரி விவசாயிக்கு வழங்கப்படுகிறது, மேல்முறையீட்டு உரிமைகளுக்காக மண்டி வால்ட்டில் 14 நாட்களுக்கு இரண்டு சேமிக்கப்படுகின்றன.",
    "kn": "ರೈತನ ಸಮ್ಮುಖದಲ್ಲಿ ಮೂರು 500 ಗ್ರಾಂ ಸಂಯುಕ್ತ ಮಾದರಿಗಳನ್ನು ಟ್ಯಾಂಪರ್-ಪ್ರೂಫ್ ಬಾರ್‌ಕೋಡೆಡ್ ಪೌಚ್‌ಗಳಲ್ಲಿ ಸೀಲ್ ಮಾಡಲಾಗುತ್ತದೆ. ಒಂದು ಮಾದರಿಯನ್ನು ರೈತರಿಗೆ ನೀಡಲಾಗುತ್ತದೆ, ಮೇಲ್ಮನವಿ ಹಕ್ಕುಗಳಿಗಾಗಿ ಮಂಡಿ ವಾಲ್ಟ್‌ನಲ್ಲಿ 14 ದಿನಗಳವರೆಗೆ ಎರಡು ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ."
  },
  "Farmer Re-test & Dispute Redressal": {
    "hi": "किसान पुनः परीक्षण और विवाद निवारण",
    "pa": "ਕਿਸਾਨ ਦੁਬਾਰਾ-ਟੈਸਟ ਅਤੇ ਵਿਵਾਦ ਨਿਪਟਾਰਾ",
    "mr": "शेतकरी पुनर्त���ासणी आणि विवाद निवारण",
    "gu": "ખેડૂત પુનઃ-પરીક્ષણ અને વિવાદ નિવારણ",
    "bn": "কৃষক পুনরায় পরীক্ষা এবং বিরোধ নিরাময়",
    "te": "రైతు పునః-పరీక్ష & వివాద పరిష్కారం",
    "ta": "விவசாயி மறு-தேர்வு & தகராறு தீர்வு",
    "kn": "ರೈತ ಮರು-ಪರೀಕ್ಷೆ ಮತ್ತು ವಿವಾದ ಪರಿಹಾರ"
  },
  "If a farmer disputes the moisture score, a free joint re-testing is conducted at the Mandi Apex NABL Lab in presence of the APMC Secretary with CCTV video recording.": {
    "hi": "यदि कोई किसान नमी के स्कोर पर विवाद करता है, तो सीसीटीवी वीडियो रिकॉर्डिंग के साथ एपीएमसी सचिव की उपस्थिति में मंडी एपेक्स एनएबीएल लैब में एक मुफ्त संयुक्त पुनः परीक्षण किया जाता है।",
    "pa": "ਜੇਕਰ ਕੋਈ ਕਿਸਾਨ ਨਮੀ ਦੇ ਸਕੋਰ 'ਤੇ ਵਿਵਾਦ ਕਰਦਾ ਹੈ, ਤਾਂ ਏ.ਪੀ.ਐੱਮ.ਸੀ. ਸਕੱਤਰ ਦੀ ਹਾਜ਼ਰੀ ਵਿੱਚ ਮੰਡੀ ਐਪੈਕਸ ਐੱਨ.ਏ.ਬੀ.ਐੱਲ. ਲੈਬ ਵਿਖੇ ਸੀ.ਸੀ.ਟੀ.ਵੀ. ਵੀਡੀਓ ਰਿਕਾਰਡਿੰਗ ਨਾਲ ਮੁਫ਼ਤ ਸਾਂਝੀ ਦੁਬਾਰਾ-ਜਾਂਚ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
    "mr": "शेतकऱ्याने ओलावा स्कोअरबाबत आक्षेप घेतला तर, एपीएमसी सचिवांच्या उपस्थितीत सीसीटीव्ही व्हिडिओ रेकॉर्डिंगसह मंडी अपेक्स एनएबीएल लॅबमध्ये मोफत संयुक्त पुनर्तपासणी केली जाते.",
    "gu": "જો કોઈ ખેડૂત ભેજના સ્કોર સામે વિવાદ કરે, તો એપીએમસી સેક્રેટરીની હાજરીમાં સીસીટીવી વીડિયો રેકોર્ડિંગ સાથે મંડી એપેક્સ એનએબીએલ લેબમાં મફત સંયુક્ત પુનઃ-પરીક્ષણ કરવામા��� આવે છે.",
    "bn": "যদি কোনো কৃষক আর্দ্রতার স্কোর নিয়ে বিরোধ করেন, তবে এপিএমসি সচিবের উপস্থিতিতে সিসিটিভি ভিডিও রেকর্ডিংসহ মণ্ডি অ্যাপেক্স এনএবিএল ল্যাবে একটি বিনামূল্যে যৌথ পুনঃপরীক্ষা করা হয়।",
    "te": "ఎవరైనా రైతు తేమ స్కోర్‌ను వ్యతిరేకిస్తే, APMC కార్యదర్శి సమక్షంలో CCTV వీడియో రికార్డింగ్‌తో మండి అపెక్స్ NABL లాబ్‌లో ఉచిత సంయుక్త పునః-పరీక్ష నిర్వహించబడుతుంది.",
    "ta": "ஈரப்பதம் மதிப்பெண் குறித்து விவசாயி முரண்பட்டால், APMC செயலாளரின் முன்னிலையில் CCTV வீடியோ பதிவுடன் மண்டி அபெக்ஸ் NABL ஆய்வகத்தில் இலவச கூட்டுக் மறு-மதிப்பீடு நடத்தப்படுகிறது.",
    "kn": "ಯಾವನಾದರೂ ರೈತ ತೇವಾಂಶ ಸ್ಕೋರ್ ಅನ್ನು ವಿವಾದಿಸಿದರೆ, APMC ಕಾರ್ಯದರ್ಶಿಯ ಸಮ್ಮುಖದಲ್ಲಿ CCTV ವೀಡಿಯೊ ರೆಕಾರ್ಡಿಂಗ್‌ನೊಂದಿಗೆ ಮಂಡಿ ಅಪೆಕ್ಸ್ NABL ಪ್ರಯೋಗಾಲಯದಲ್ಲಿ ಉಚಿತ ಜಂಟಿ ಮರು-ಪರೀಕ್ಷೆಯನ್ನು ನಡೆಸಲಾಗುತ್ತದೆ."
  },
  "SOP 1: Inward Gate Token & RFID Clearance": {
    "hi": "एसओपी 1: आवक गेट टोकन और आरएफआईडी निकासी",
    "pa": "ਐਸ.ਓ.ਪੀ. 1: ਅੰਦਰੂਨੀ ਗੇਟ ਟੋਕਨ ਅਤੇ ਆਰ.ਐੱਫ.ਆਈ.ਡੀ. ਕਲੀਅਰੈਂਸ",
    "mr": "एसओपी 1: आवक गेट टोकन आणि आरएफआईडी मंजुरी",
    "gu": "એસઓપી 1: ઇનવર્ડ ગેટ ટોકન અને આરએફઆઇડી ક્લિયરન્સ",
    "bn": "এসওপি ১: ইনওয়ার্ড গেট টোকেন এবং আরএফআইডি ক্লিয়ারেন্স",
    "te": "SOP 1: ఇన్‌వార్��్ గేట్ టోకెన్ & RFID క్లియరెన్స్",
    "ta": "SOP 1: உள்வரும் கேட் டோக்கன் & RFID அனுமதி",
    "kn": "SOP 1: ಒಳಬರುವ ಗೇಟ್ ಟೋಕನ್ ಮತ್ತು RFID ತೆರವುಗೊಳಿಸುವಿಕೆ"
  },
  "Target: <45s": {
    "hi": "लक्ष्य: <45s",
    "pa": "ਟੀचਾ: <45s",
    "mr": "लक्ष्य: <45s",
    "gu": "लक्ष्य: <45s",
    "bn": "লক্ষ্য: <45s",
    "te": "లక్ష్యం: <45s",
    "ta": "இலக்கு: <45s",
    "kn": "ಗುರಿ: <45s"
  },
  "Optical barcode or fast-tag scanner validates digital slot reservation against e-NAM APMC database. LED board displays assigned weighbridge number and automatically lifts barrier.": {
    "hi": "ऑप्टिकल बारकोड या फास्ट-टैग स्कैनर ई-नाम एपीएमसी डेटाबेस के मुकाबले डिजिटल स्लॉट आरक्षण को सत्यापित करता है। एलईडी बोर्ड आवंटित वजन कांटा (वेब्रिज) नंबर प्रदर्शित करता है और स्वचालित रूप से बैरियर उठा देता है।",
    "pa": "ਆਪਟੀਕਲ ਬਾਰਕੋਡ ਜਾਂ ਫਾਸਟ-ਟੈਗ ਸਕੈਨਰ ਈ-ਨਾਮ (e-NAM) ਏ.ਪੀ.ਐੱਮ.ਸੀ. ਡਾਟਾਬੇਸ ਦੇ ਵਿਰੁੱਧ ਡਿਜੀਟਲ ਸਲਾਟ ਰਿਜ਼ਰਵੇਸ਼ਨ ਨੂੰ ਪ੍ਰਮਾਣਿਤ ਕਰਦਾ ਹੈ। LED ਬੋਰਡ ਅਲਾਟ ਕੀਤਾ ਗਿਆ ਕੰਡਾ (ਵੇਬਰਿਜ) ਨੰਬਰ ਦਿਖਾਉਂਦਾ ਹੈ ਅਤੇ ਆਪਣੇ ਆਪ ਬੈਰੀਅਰ ਉੱਪਰ ਕਰ ਦਿੰਦਾ ਹੈ।",
    "mr": "ऑप्टिकल बारकोड किंवा फास्ट-टॅग स्कॅनर ई-नाम एपीएमसी डेटाबेसच्या आधारे डिजिटल स्लॉट आरक्षणाची वैधता तपासून पाहतो. एलइडी बोर्ड नेमलेला वजनकाटा (वेब्रिज) क्रमांक दाखवतो आणि आपोआप बॅरियर वर उचलतो.",
    "gu": "ઓપ્ટિકલ બારકોડ અથવા ફાસ્ટ-ટેગ સ્કેનર e-NAM APMC ડેટાબેઝ સામે ડિજિટલ સ્લોટ આરક્ષણને માન્ય કરે છે. LED બોર્ડ ફાળવેલ ધાतु (વેબ્રિજ) નંબર પ્રદર્શિત કરે છે અને આપમેળે બેરિયર ઉપર કરે છે.",
    "bn": "অপটিক্যাল বারকোড বা ফাস্ট-ট্যাগ স্ক্যানার ই-নাম এপিএমসি ডেটাবেসের বিপরীতে ডিজিটাল স্লট সংরক্ষণ যাচাই করে। এলইডি বোর্ড নির্ধারিত ওয়েব্রিজ নম্বর প্রদর্শন করে এবং স্বয়ংক্রিয়ভাবে ব্যরিয়ার তুলে দেয়।",
    "te": "ఆప్టికల్ బార్‌కోడ్ లేదా ఫాస్ట్-ట్యాగ్ స్కానర్ e-NAM APMC డేటాబేస్‌కు వ్యతిరేకంగా డిజిటల్ స్లాట్ రిజర్వేషన్‌ను ధృవీకరిస్తుంది. LED బోర్డు కేటాయించిన వేబ్రిడ్జ్ నంబర్‌ను ప్రదర్శిస్తుంది మరియు స్వయంచాలకంగా బ్యారియర్‌ను పైకి ఎత్తుతుంది.",
    "ta": "ஆப்டிகல் பார்கோடு அல்லது ஃபாஸ்ட்-டேக் ஸ்கேனர் e-NAM APMC தரவுத்தளத்திற்கு எதிராக டிஜிட்டல் ஸ்லாட் முன்பதிவை சரிபார்க்கிறது. LED பலகை ஒதுக்கப்பட்ட எடைமேடை (வெபிரிட்ஜ்) எண்ணைக் காண்பிக்கும் மற்றும் தானாகவே தடையை உயர்த்தும்.",
    "kn": "ಆಪ್ಟಿಕಲ್ ಬಾರ್‌ಕೋಡ್ ಅಥವಾ ಫಾಸ್ಟ್-ಟ್ಯಾಗ್ ಸ್ಕ್ಯಾನರ್ e-NAM APMC ಡೇಟಾಬೇಸ್ ವಿರುದ್ಧ ಡಿಜಿಟಲ್ ಸ್ಲಾಟ್ ಕಾಯ್ದరిಕೆಗಳನ್ನು ದೃಢೀಕರಿಸುತ್ತದೆ. LED ಬೋರ್ಡ್ ನಿಗದಿಪಡಿಸಿದ ತೂಕದ ಸೇತುವೆ (ವೆಬ್ರಿಡ್ಜ್) ಸಂಖ್ಯೆಯನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ ಮತ್ತು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತಡೆಗೋಡೆಯನ್ನು ಮೇಲಕ್ಕೆತ್ತುತ್ತದೆ."
  },
  "SOP 2: Electronic Weighbridge Calibration": {
    "hi": "एसओपी 2: इलेक्ट्रॉनिक वेब्रिज अंशांकन (कैलिब्रेशन)",
    "pa": "ਐੱਸ.ਓ.ਪੀ. 2: ਇਲੈקט੍ਰਾਨਿਕ ਵੇਬਰਿਜ ਕੈਲੀਬ੍ਰੇਸ਼ਨ",
    "mr": "एसओपी २: इलेक्ट्रॉनिक वेब्रिज कॅलिब्रेशन",
    "gu": "SOP 2: ઇલેક્ટ્રોનિક વેબ્રિજ કેલિબ્રેશન",
    "bn": "এসওপি ২: ইলেকট্রনিক ওয়েব্রিজ ক্রমাঙ্কন (ক্যালিব্রেশন)",
    "te": "SOP 2: ఎలక్ట్రానిక్ వెబ్రిడ్జ్ కేలిబ్రేషన్",
    "ta": "SOP 2: மின்னணு எடைமேடை (வெபிரிட்ஜ்) அளவுத்திருத்தம்",
    "kn": "SOP 2: ಎಲೆಕ್ಟ್ರಾನಿಕ್ ವೆಬ್ರಿಡ್ಜ್ ಕ್ಯಾಲಿಬ್ರೇಷನ್"
  },
  "Accuracy: ±0.01%": {
    "hi": "सटीकता: ±0.01%",
    "pa": "ਸ਼ੁੱਧਤਾ: ±0.01%",
    "mr": "अचूकता: ±0.01%",
    "gu": "ચોકસાઈ: ±0.01%",
    "bn": "সঠিকতা: ±0.01%",
    "te": "ఖచ్చితత్వం: ±0.01%",
    "ta": "துல்லியம்: ±0.01%",
    "kn": "ನಿಖರತೆ: ±0.01%"
  },
  "Dual-load cells capture gross and tare weight automatically. Zero manual data entry allowed by weighbridge operator, ensuring legal metrology compliance and anti-fraud audit trail.": {
    "hi": "दोहरे लोड सेल (डुअल-लोड सेल) स्वचालित रूप से कुल (ग्रॉस) और खाली गाड़ी का (टारे) वजन दर्ज करते हैं। वेब्रिज ऑपरेटर द्वारा किसी भी तरह की मैनुअल डेटा प्रविष्टि की अनुमति नहीं है, जिससे विधिक मापविज्ञान अनुपालन और धोखाधड़ी-रोधी ऑडिट ट्रेल सुनिश्चित होता है।",
    "pa": "ਡਿਊਲ-ਲੋਡ ਸੈੱਲ ਆਪਣੇ ਆਪ ਕੁੱਲ ਅਤੇ ਖਾਲੀ ਵਜ਼ਨ ਦਰਜ ਕਰਦੇ ਹਨ। ਵੇਬਰਿਜ ਆਪਰੇਟਰ ਦੁਆਰਾ ਕੋਈ ਵੀ ਮੈਨੂਅਲ ਡਾਟਾ ਐਂਟਰੀ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਹੈ, ਜੋ ਕਾਨੂੰਨੀ ਮੈਟਰੋਲੋਜੀ ਦੀ ਪਾਲਣਾ ਅਤੇ ਧੋਖਾਧੜੀ-ਰੋਕੂ ਆਡਿਟ ਟ੍ਰੇਲ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ।",
    "mr": "ड्युअल-लोड सेल आपोआप एकूण आणि रिकाम्या गाडीचे वजन टिपतात. वेब्रिज ऑपरेटरद्वारे कोणत्याही मॅन्युअल डेटा एंट्रीला परवानगी नाही, ज्यामुळे कायदेशीर वजनमाप अनुपालन आणि फसवणूक-विरोधी ऑडिट ट्रेल सुनिश्चित होते.",
    "gu": "ડ્યુઅલ-લોડ સેલ આપમેળે કુલ અને ખાલી વજન નોંધે છે. વેબ્રિજ ઓપરેટર દ્વારા શૂન્ય મૅન્યુઅલ ડેટા એન્ટ્રીની મંજૂરી છે, જે કાનૂની માપશાస్త్ర अनुपालन અને છેતરપિંડી વિરોધી ઓડિટ ટ્રેਲ સુનિશ્ચિત કરે છે.",
    "bn": "ডুয়াল-লোড সেল স্বয়ংক্রিয়ভাবে মোট এবং খালি গাড়ির ওজন ক্যাপচার করে। ওয়েব্রিজ অপারেটর দ্বারা কোনো ম্যানুয়াল ডেটা এন্ট্রি অনুমোদিত নয়, যা আইনি মেট্রোলজি কমপ্লায়েন্স এবং জালিয়াতি-বিরোধী অডিট ট্রেল নিশ্চিত করে।",
    "te": "డ్యూయల్-లోడ్ సెల్‌లు స్థూల మరియు ఖాళీ బరువును స్వయంచాలకంగా క్యాప్చర్ చేస్తాయి. వెబ్రిడ్జ్ ఆపరేటర్ ద్వారా ఎటువంటి మాన్యువల్ డేటా ఎంట్రీ అనుమతించబడదు, ఇది చట్టపరమైన మ���ట్రాలజీ సమ్మతి మరియు మోసపూరిత వ్యతిరేక ఆడిట్ ట్రయిల్‌ను నిర్ధారిస్తుంది.",
    "ta": "இரட்டை-சுமை செல்கள் (Dual-load cells) மொத்த மற்றும் காலி எடையை தானாகவே பதிவு செய்கின்றன. வெபிரிட்ஜ் ஆபரேட்டர் மூலம் கைமுறை தரவு உள்ளீடு அனுமதிக்கப்படாது, இது சட்டப்பூர்வ அளவியல் இணக்கம் மற்றும் ஊழல் தடுப்பு தணிக்கை பாதையை உறுதி செய்கிறது.",
    "kn": "ಡ್ಯುಯಲ್-ಲೋಡ್ ಸೆಲ್‌ಗಳು ಒಟ್ಟು ಮತ್ತು ಖಾಲಿ ತೂಕವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸೆರೆಹಿಡಿಯುತ್ತವೆ. ವೆಬ್ರಿಡ್ಜ್ ಆಪರೇಟರ್‌ನಿಂದ ಯಾವುದೇ ಮ್ಯಾನುಯಲ್ ಡೇಟಾ ನಮೂದಿಗೆ ಅವಕಾಶವಿಲ್ಲ, ಇದು ಕಾನೂನು ಮೆಟ್ರೋಲಜಿ ಅನುपालन ಮತ್ತು ವಂಚನೆ-ವಿರೋಧಿ ಆಡಿಟ್ ಟ್ರೇಲ್ ಅನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ."
  },
  "SOP 3: Scientific QC Assaying & Moisture Assay": {
    "hi": "एसओपी 3: वैज्ञानिक गुणवत्ता नियंत्रण (क्यूसी) परख और नमी की जांच",
    "pa": "ਐੱਸ.ਓ.ਪੀ. 3: ਵਿਗਿਆਨਕ ਕਿਊ.ਸੀ. ਅਸੇਇੰਗ ਅਤੇ ਨਮੀ ਦੀ ਪਰਖ",
    "mr": "एसओपी ३: वैज्ञानिक गुणवत्ता नियंत्रण (क्यूसी) तपासणी आणि ओलावा तपासणी",
    "gu": "SOP 3: વૈજ્ઞાનિક QC અસેઇંગ અને ભેજ તપાસ",
    "bn": "এসওপি ৩: বৈজ্ঞানিক কিউসি অ্যাসেয়িং এবং আর্দ্রতা পরীক্ষা",
    "te": "SOP 3: సైంటిఫిక్ QC అస్సేయింగ్ & తేమ పరీక్ష",
    "ta": "SOP 3: அறிவியல் QC மதிப்பீடு மற்றும் ஈரப்பதம் பரிசோதனை",
    "kn": "SOP 3: ವೈಜ್ಞಾನಿಕ QC ಅಸ್ಸೇಯಿಂಗ್ ಮತ್ತು ತೇ��ಾಂಶ ಪರೀಕ್ಷೆ"
  },
  "Norm: ≤12.0%": {
    "hi": "मानक: ≤12.0%",
    "pa": "ਮਿਆਦ: ≤12.0%",
    "mr": "मानक: ≤12.0%",
    "gu": "ધોરણ: ≤12.0%",
    "bn": "নরম: ≤12.0%",
    "te": "ప్రమాణం: ≤12.0%",
    "ta": "செந்தரம்: ≤12.0%",
    "kn": "ಪ್ರಮಾಣ: ≤12.0%"
  },
  "Certified laboratory draws composite grain sample for digital moisture meter and dockage testing. Result digitally logged on central e-NAM ledger to prevent subjective price deductions.": {
    "hi": "प्रमाणित प्रयोगशाला डिजिटल नमी मीटर और कचरा (डॉकेज) परीक्षण के लिए मिश्रित अनाज का नमूना लेती है। व्यक्तिपरक मूल्य कटौती को रोकने के लिए परिणाम केंद्रीय ई-नाम बहीखाते (लेजर) पर डिजिटल रूप से दर्ज किया जाता है।",
    "pa": "ਪ੍ਰਮਾਣਿਤ ਪ੍ਰਯੋਗਸ਼ਾਲਾ ਡਿਜੀਟਲ ਨਮੀ ਮੀਟਰ ਅਤੇ ਡੌਕੇਜ (ਕਚਰਾ) ਟੈਸਟਿੰਗ ਲਈ ਅਨਾਜ ਦਾ ਮਿਸ਼ਰਤ ਨਮੂਨਾ ਲੈਂਦੀ ਹੈ। ਮਨਮਾਨੀ ਕੀਮਤ ਕਟੌਤੀ ਨੂੰ ਰੋਕਣ ਲਈ ਨਤੀਜਾ ਕੇਂਦਰੀ ਈ-ਨਾਮ ਲੇਜਰ ਉੱਤੇ ਡਿਜੀਟਲ ਤੌਰ 'ਤੇ ਦਰਜ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।",
    "mr": "प्रमाणित प्रयोगशाळा डिजिटल मॉइश्चर मीटर आणि कचर्याची (डॉकेज) तपासणीसाठी धान्याचा संमिश्र नमुना गोळा करते. मनमानी किंमत कपात रोखण्यासाठी निकाल केंद्रीय ई-नाम लेजरवर डिजिटल पद्धतीने नोंदवला जातो.",
    "gu": "પ્રમાણિત પ્રયોગશાળા ડિજિટલ મોઈશ્ચર મીટર અને ડોકેજ (કચરો) પરીક્ષણ માટે અનાજનો સંયુક્ત નમૂનો લે છે. મનસ્વી કિંમત કાપ અટકાવવા માટે પરિણામ કેન્દ્રીય e-NAM લેજર પર ડિજિટલ રીતે લોગ કરવામા�� આવે છે.",
    "bn": "প্রত্যয়িত ল্যাবরেটরি ডিজিটাল ময়েশ্চার মিটার এবং ডকেজ (আবর্জনা) পরীক্ষার জন্য শস্যের একটি মিশ্র নমুনা সংগ্রহ করে। মনগড়া মূল্য কর্তন রোধ করতে ফলাফল কেন্দ্রীয় ই-নাম লেজারে ডিজিটালভাবে নথিভুক্ত করা হয়।",
    "te": "ధృవీకరించబడిన ప్రయోగశాల డిజిటల్ మాయిశ్చర్ మీటర్ మరియు డాకేజ్ పరీక్ష కోసం సంయుక్త ధాన్యపు నమూనాను సేకరిస్తుంది. ఆత్మశ్రయ ధర తగ్గింపులను నివారించడానికి ఫలితం కేంద్ర e-NAM లెడ్జర్‌లో డిజిటల్‌గా నమోదు చేయబడుతుంది.",
    "ta": "சான்றளிக்கப்பட்ட ஆய்வகம் டிஜிட்டல் ஈரப்பதம் மீட்டர் மற்றும் குப்பை (டொக்கேஜ்) சோதனைக்காக கலப்பு தானிய மாதிரியை எடுக்கிறது. அகநிலை விலை பிடித்தங்களைத் தடுக்க முடிவு மத்திய e-NAM லெட்ஜரில் டிஜிட்டல் முறையில் பதிவு செய்யப்படுகிறது.",
    "kn": "ಪ್ರಮಾಣೀಕೃತ ಪ್ರಯೋಗಾಲಯವು ಡಿಜಿಟಲ್ ತೇವಾಂಶ ಮಾಪಕ ಮತ್ತು ಡಾಕೇಜ್ ಪರೀಕ್ಷೆಗಾಗಿ ಧಾನ್ಯದ ಮಾದರಿಯನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ. ವ್ಯಕ್ತಿನಿಷ್ಠ ಬೆಲೆ ಕಡಿತವನ್ನು ತಡೆಯಲು ಫಲಿತಾಂಶವನ್ನು ಕೇಂದ್ರ e-NAM ಲೆಡ್ಜರ್‌ನಲ್ಲಿ ಡಿಜಿಟಲ್ ಆಗಿ ದಾಖಲಿಸಲಾಗುತ್ತದೆ."
  },
  "SOP 4: Direct Benefit Transfer (DBT) Payout": {
    "hi": "एसओपी 4: प्रत्यक्ष लाभ हस्तांतरण (डीबीटी) भुगतान",
    "pa": "ਐੱਸ.ਓ.ਪੀ. 4: ਡਾਇਰੈਕਟ ਬੈਨੀਫਿਟ ਟਰਾਂਸਫਰ (DBT) ਭੁਗਤਾਨ",
    "mr": "एसओपी ४: थेट लाभ हस्तांतरण (DBT) पेमेंट",
    "gu": "SOP 4: ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (DBT) ચૂકવણી",
    "bn": "এসওপি ৪: ডিরেক্ট বেনিফিট ট্রান্সফার (DBT) প্রদান",
    "te": "SOP 4: డైరెక్ట్ బెనిఫిట్ ట్రాన్స్‌ఫర్ (DBT) చెల్లింపు",
    "ta": "SOP 4: நேரடி பயன் பரிமாற்றம் (DBT) கட்டண செலுத்துதல்",
    "kn": "SOP 4: ನೇರ ಲಾಭ ವರ್ಗಾವಣೆ (DBT) ಪಾವತಿ"
  },
  "Speed: <24 Hours": {
    "hi": "गति: <24 घंटे",
    "pa": "ਗਤੀ: <24 ਘੰਟੇ",
    "mr": "वेग: <२४ तास",
    "gu": "ઝડપ: <24 કલાક",
    "bn": "গতি: <২৪ ঘণ্টা",
    "te": "వేగం: <24 గంటలు",
    "ta": "வேகம்: <24 மணி நேரம்",
    "kn": "ವೇಗ: <24 ಗಂಟೆಗಳು"
  },
  "Procurement slip generates PFMS payment voucher automatically. Treasury transfers 100% Minimum Support Price (MSP) straight into farmer's Aadhaar-seeded bank account with 0% middleman cuts.": {
    "hi": "खरीद पर्ची स्वचालित रूप से PFMS भुगतान वाउचर तैयार करती है। खजाना बिचौलियों की 0% कटौती के साथ किसान के आधार-संबद्ध बैंक खाते में 100% न्यूनतम समर्थन मूल्य (MSP) सीधे स्थानांतरित करता है।",
    "pa": "ਖਰੀਦ ਪਰਚੀ ਆਪਣੇ ਆਪ PFMS ਭੁਗਤਾਨ ਵਾਊਚਰ ਤਿਆਰ ਕਰਦੀ ਹੈ। ਖਜ਼ਾਨਾ ਵਿਚੋਲਿਆਂ ਦੀ 0% ਕਟੌਤੀ ਦੇ ਨਾਲ ਕਿਸਾਨ ਦੇ ਆਧਾਰ-ਸੰਬੰਧਿਤ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ 100% ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ (MSP) ਸਿੱਧਾ ਟਰਾਂਸਫਰ ਕਰਦਾ ਹੈ।",
    "mr": "खरेदी पावती आपोआप PFMS पेमेंट वाउचर तयार करते. तिजोरी मध्यस्थांच्या 0% कपातीसह शेतकऱ्याच्या आधार-संबद्ध बँक खात्यामध्ये 100% किमान आधारभूत किंमत (MSP) थेट हस्तांतरित करते.",
    "gu": "ખરીદી સ્લિપ આપમેળે PFMS પેમેન્ટ વાઉચર જનરેટ કરે છે. તિजोरी વચેટિયાઓની 0% કપાત સાથે ખેડૂતની આધાર-સીડેડ બેંક ખાતામાં 100% લઘुત્તમ ટેકાના ભાવ (MSP) સીધા ટ્રાન્સફર કરે છે.",
    "bn": "ক্রয় রসিদ স্বয়ংক্রিয়ভাবে PFMS পেমেন্ট ভাউচার তৈরি করে। ট্রেজারি মধ্যস্বত্বভোগীদের ০% কাটা ছাড়াই কৃষকের আধার-সংযুক্ত ব্যাংক অ্যাকাউন্টে ১০০% ন্যূনতম সমর্থন মূল্য (MSP) সরাসরি স্থানান্তর করে।",
    "te": "కొనుగోలు స్లిప్ స్వయంచాలకంగా PFMS చెల్లింపు వోచర్‌ను ఉత్పత్తి చేస్తుంది. ట్రెజరీ మధ్యవర్తుల 0% కోతలతో రైతు ఆధార్-సీడెడ్ బ్యాంక్ ఖాతాలోకి 100% కనీست మద్దతు ధరను (MSP) నేరుగా బదిలీ చేస్తుంది.",
    "ta": "கண்காணிப்பு சீட்டு தானாகவே PFMS கட்டண வவுச்சரை உருவாக்குகிறது. கருவூலம் இடைத்தரையாளர்களின் 0% வெட்டுக்களுடன் விவசாயியின் ஆதார்-இணைக்கப்பட்ட வங்கிக் கணக்கிற்கு 100% குறைந்தபட்ச ஆதரவு விலையை (MSP) நே,ராக மாற்றுகிறது.",
    "kn": "ಖರೀದಿ ಚೀಟಿಯು ಸ್ವಯಂಚಾಲಿತವಾಗಿ PFMS ಪಾವತಿ ವೋಚರ್ ಅನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ. ಖಜಾನೆಯು ಮಧ್ಯವರ್ತಿಗಳ 0% ಕಡಿತದೊಂದಿಗೆ ರೈತನ ಆಧಾರ್-ಸಂಯೋಜಿತ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ 100% ಕನಿಷ್ಠ ಬೆಂಬಲ ಬೆಲೆಯನ್ನು (MSP) ನೇರವಾಗಿ ವರ್ಗಾಯಿಸುತ್ತದೆ."
  },
  "Live Procurement Incentives": {
    "hi": "लाइव खरीद प्रोत्साहन",
    "pa": "ਲਾਈਵ ਖਰੀਦ ਪ੍ਰੋਤਸਾਹਨ",
    "mr": "थेट खरेदी प्रोत्साहन",
    "gu": "લાઇવ ખરીદી પ્રોત્સાહનો",
    "bn": "লাইভ ক্রয় প্রণোদনা",
    "te": "లైవ్ కొనుగోలు ప్రోత్సాಹకాలు",
    "ta": "நேரலை கொள்முதல் ஊக்கத்தொகைகள்",
    "kn": "ಲೈವ್ ಖರೀದಿ ಪ್ರೋತ್ಸಾಹಕಗಳು"
  },
  "Direct Fast2SMS Gateway Connected": {
    "hi": "प्रत्यक्ष Fast2SMS गेटवे कनेक्टेड",
    "pa": "ਡਾਇਰੈਕਟ Fast2SMS ਗੇਟਵੇ ਕਨੈਕਟਡ",
    "mr": "थेट Fast2SMS गेटवे जोडलेला आहे",
    "gu": "ડાયરેક્ટ Fast2SMS ગેટવે કનેक्टेड",
    "bn": "সরাসরি Fast2SMS গেটওয়ে সংযুক্ত",
    "te": "డైరెక్ట్ Fast2SMS గేట్‌వే కనెక్ట్ చేయబడింది",
    "ta": "நேரடி Fast2SMS கேட்வே இணைக்கப்பட்டுள்ளது",
    "kn": "ನೇರ Fast2SMS ಗೇಟ್‌ವೇ ಸಂಪರ್ಕಗೊಂಡಿದೆ"
  },
  "APMC Mandi Premium Offers & Tenders": {
    "hi": "APMC मंडी प्रीमियम ऑफर और टेंडर",
    "pa": "APMC ਮੰਡੀ ਪ੍ਰੀਮੀਅਮ ਪੇਸ਼ਕਸ਼ਾਂ ਅਤੇ ਟੈਂਡਰ",
    "mr": "APMC मार्केट (मंडी) प्रीमियम ऑफर्स आणि निविदा",
    "gu": "APMC મંડી પ્રીમિયમ ઓફર્સ અને ટેન્ડર્સ",
    "bn": "APMC মান্ডি প্রিমিয়াম অফার ও টেন্ডার",
    "te": "APMC మండి ప్రీమియం ఆఫర్లు & టెండర్లు",
    "ta": "APMC மண்டி பிரீமியம் சலுகைகள் & டெண்டர்கள்",
    "kn": "APMC ಮಂಡಿ ಪ್ರೀಮಿಯಂ ಕೊಡುಗೆಗಳು ಮತ್ತು ಟೆಂಡರ್‌ಗಳು"
  },
  "Earn direct cash bonuses above standard MSP for delivering certified low-moisture produce, high-oil mustard, early seasonal harvests, and consolidated group tractor haulage.": {
    "hi": "प्रमाणित कम नमी वाले उत्पाद, उच्च तेल वाली सरसों, शुरुआती मौसमी फसल और समेकित समूह ट्रैक्टर ढुलाई प्रदान करने के लिए मानक MSP से ऊपर सीधे नकद बोनस अर्जित करें।",
    "pa": "ਪ੍ਰਮਾਣਿਤ ਘੱਟ ਨਮੀ ਵਾਲੀ ਉਪਜ, ਉੱਚ ਤੇਲ ਵਾਲੀ ਸਰ੍ਹੋਂ, ਸ਼ੁਰੂਆਤੀ ਮੌਸਮੀ ਫਸਲਾਂ, ਅਤੇ ਸੰਯੁਕਤ ਸਮੂਹ ਟਰੈਕਟਰ ਢੁਕਾਈ ਪ੍ਰਦਾਨ ਕਰਨ ��ਈ ਮਿਆਰੀ MSP ਤੋਂ ਉੱਪਰ ਸਿੱਧੇ ਨਕਦ ਬੋਨਸ ਪ੍ਰਾਪਤ ਕਰੋ।",
    "mr": "प्रमाणित कमी ओलावा असलेले उत्पादन, उच्च-तेल मोहरी, लवकर येणारी हंगामी पिके आणि एकत्रित समूह ट्रॅक्टर वाहतूक वितरीत करण्यासाठी मानक MSP पेक्षा जास्त थेट रोख बोनस मिळवा.",
    "gu": "પ્રમાણિત ઓછી ભેજવાળી ઉપજ, ઉચ્ચ-તેલ રાઈ, વહેલી મોસમી પાકની લણણી અને એકીકૃત જૂથ ટ્રેક્ટર પરિવહન પહોંચાડવા માટે માનક MSP ઉપર સીધા રોકડ બોનસ કમાઓ.",
    "bn": "প্রত্যয়িত কম আর্দ্রতাযুক্ত পণ্য, উচ্চ-তেলযুক্ত সর্ষে, প্রারম্ভিক মরসুমি ফসল এবং একত্রিত গ্রুপ ট্র্যাক্টর পরিবহন সরবরাহের জন্য আদর্শ MSP-এর উপরে সরাসরি ন���দ বোনাস অর্জন করুন।",
    "te": "ధృవీకరించబడిన తక్కువ తేమ గల దిగుబడి, అధిక-నూనె ఆవాలు, ముందస్తు కాలానుగుణ పంటల కోత మరియు సమైక్య సమూహ ట్రాక్టర్ రవాణాను అందించడానికి ప్రామాణిక MSP కంటే నేరుగా నగదు బోనస్‌లను సంపాదించండి.",
    "ta": "சான்றளிக்கப்பட்ட குறைந்த ஈரப்பதம் உள்ள விளைச்சல், அதிக எண்ணெய் உள்ள கடுகு, முந்தைய பருவகால அறுவடை மற்றும் ஒருங்கிணைக்கப்பட்ட குழு டிராக்டர் போக்குவரத்து ஆகியவற்றை வழங்குவதற்காக நிலையான MSP-க்கு மேல் நேரடி ரொக்கப் போனஸைப் பெறுங்கள்.",
    "kn": "ಪ್ರಮಾಣೀಕೃತ ಕಡಿಮೆ ತೇವಾಂಶದ ಉತ್ಪನ್ನ, ಹೆಚ್ಚಿನ ಎಣ್ಣೆಯ ಸಾಸಿವ��, ಮುಂಚಿನ ಕಾಲೋಚಿತ ಬೆಳೆಗಳ ಕೊಯ್ಲು ಮತ್ತು ಕ್ರೋಢೀಕೃತ ಗುಂಪು ಟ್ರಾಕ್ಟರ್ ಸಾಗಣೆಯನ್ನು ತಲುಪಿಸುವುದಕ್ಕಾಗಿ ಪ್ರಮಾಣಿತ MSP ಗಿಂತ ನೇರ ನಗದು ಬೋನಸ್‌ಗಳನ್ನು ಗಳಿಸಿ."
  },
  "Available Mandi Bonus": {
    "hi": "उपलब्ध मंडी बोनस",
    "pa": "ਉਪਲਬਧ ਮੰਡੀ ਬੋਨਸ",
    "mr": "उपलब्ध मोंढा/बाजार (मंडी) बोनस",
    "gu": "ઉપલબ્ધ મંડી બોનસ",
    "bn": "উপলব্ধ মান্ডি বোনাস",
    "te": "అందుబాటులో ఉన్న మండి బోనస్",
    "ta": "கிடைக்கக்கூடிய மண்டி போனஸ்",
    "kn": "ಲಭ್ಯವಿರುವ ಮಂಡಿ ಬೋನಸ್"
  },
  "Up to +₹320": {
    "hi": "₹320 तक",
    "pa": "+₹320 ਤੱਕ",
    "mr": "+₹320 पर्यंत",
    "gu": "+₹320 સુધી",
    "bn": "+₹320 পর্যন্ত",
    "te": "+₹320 వరకు",
    "ta": "+₹320 வ��ை",
    "kn": "+₹320 ರವರೆಗೆ"
  },
  "Per Quintal Above MSP": {
    "hi": "MSP से ऊपर प्रति क्विंटल",
    "pa": "MSP ਤੋਂ ਉੱਪਰ ਪ੍ਰਤੀ ਕੁਇੰਟਲ",
    "mr": "MSP च्या वर प्रति क्विंटल",
    "gu": "MSP ઉપર પ્રતિ ક્વિಂಟલ",
    "bn": "MSP-এর উপরে প্রতি কুইন্টাল",
    "te": "MSP కంటే ప్రతి క్వింటాల్‌కు",
    "ta": "MSPக்கு மேல் ஒரு குவிண்டாலுக்கு",
    "kn": "MSP ಗಿಂತ ಪ್ರತಿ ಕ್ವಿಂಟಾಲ್‌ಗೆ"
  },
  "Instant 100% DBT Bank Deposit": {
    "hi": "तत्काल 100% DBT बैंक जमा",
    "pa": "ਤੁਰੰਤ 100% DBT ਬੈਂਕ ਜਮ੍ਹਾਂ",
    "mr": "त्वरित 100% DBT बँक जमा",
    "gu": "ત્વરિત 100% DBT બેંક ડિપોઝિટ",
    "bn": "তাত্ক্ষণিক ১০০% DBT ব্যাংক জমা",
    "te": "తక్షణ 100% DBT బ్యాంకు డిపాజిట్",
    "ta": "உடனடி 100% DBT வங்கிக் வைப்பு",
    "kn": "ತ್ವರಿತ 100% DBT ಬ್ಯಾಂಕ್ ಜಮಾ"
  },
  "Filter by Commodity:": {
    "hi": "जिंस के अनुसार फ़िल्टर करें:",
    "pa": "ਜਿਣਸ ਦੁਆਰਾ ਫਿਲਟਰ ਕਰੋ:",
    "mr": "शेतमालांनुसार फिल्टर करा:",
    "gu": "કોમોડિટી દ્વારા ફિલ્ટર કરો:",
    "bn": "পণ্য দ্বারা ফিল্টার করুন:",
    "te": "వస్తువు ద్వారా ఫిల్టర్ చేయండి:",
    "ta": "பொருளின் படி வடிகட்டவும்:",
    "kn": "ಸರಕುಗಳ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ:"
  },
  "All Offers (6)": {
    "hi": "सभी ऑफर (6)",
    "pa": "ਸਾਰੇ ਆਫ਼ਰ (6)",
    "mr": "सर्व ऑफर्स (6)",
    "gu": "બધા ઑફર્સ (6)",
    "bn": "সকল অফার (6)",
    "te": "అన్ని ఆఫర్‌లు (6)",
    "ta": "அனைத்து சலுகைகள் (6)",
    "kn": "ಎಲ್ಲಾ ಕೊಡುಗೆಗಳು (6)"
  },
  "🌾 Wheat (2)": {
    "hi": "🌾 गेहूं (2)",
    "pa": "🌾 ਕਣਕ (2)",
    "mr": "🌾 गहू (2)",
    "gu": "🌾 ઘઉં (2)",
    "bn": "🌾 গম (2)",
    "te": "🌾 గోధుమలు (2)",
    "ta": "���� கோதுமை (2)",
    "kn": "🌾 ಗೋಧಿ (2)"
  },
  "🌻 Mustard (1)": {
    "hi": "🌻 सरसों (1)",
    "pa": "🌻 ਸਰ੍ਹੋਂ (1)",
    "mr": "🌻 मोहरी (1)",
    "gu": "🌻 રાઈ (1)",
    "bn": "🌻 সরিষা (1)",
    "te": "🌻 ఆవాలు (1)",
    "ta": "🌻 கடுகு (1)",
    "kn": "🌻 ಸಾಸಿವೆ (1)"
  },
  "☁️ Cotton (1)": {
    "hi": "☁️ कपास (1)",
    "pa": "☁️ ਕਪਾਹ (1)",
    "mr": "☁️ कापूस (1)",
    "gu": "☁️ કપાસ (1)",
    "bn": "☁️ তুলা (1)",
    "te": "☁️ పత్తి (1)",
    "ta": "☁️ பருத்தி (1)",
    "kn": "☁️ ಹತ್ತಿ (1)"
  },
  "🚜 Logistics Rebate (1)": {
    "hi": "🚜 लॉजिस्टिक्स छूट (1)",
    "pa": "🚜 ਲੌਜਿਸਟਿਕਸ ਰੇਟ (ਛूट) (1)",
    "mr": "🚜 लॉजिस्टिक्स सूट (1)",
    "gu": "🚜 લોજિસ્ટિક્સ છૂટ (1)",
    "bn": "🚜 লজিস্টিকস ছাড় (1)",
    "te": "🚜 లాజిస్టిక్స�� రాయితీ (1)",
    "ta": "🚜 லாஜிஸ்டிக்ஸ் தள்ளுபடி (1)",
    "kn": "🚜 ಲಾಜಿಸ್ಟಿಕ್ಸ್ ರಿಯಾಯಿತಿ (1)"
  },
  "🧪 Free Testing (1)": {
    "hi": "🧪 मुफ्त परीक्षण (1)",
    "pa": "🧪 ਮੁਫ਼ਤ ਟੈਸਟਿੰਗ (1)",
    "mr": "🧪 मोफत चाचणी (1)",
    "gu": "🧪 મફત ચકાસણી (1)",
    "bn": "🧪 বিনামূল্যে পরীক্ষা (1)",
    "te": "🧪 ఉచిత పరీక్ష (1)",
    "ta": "🧪 இலவச சோதனை (1)",
    "kn": "🧪 ಉಚಿತ ಪರೀಕ್ಷೆ (1)"
  },
  "Live Agricultural News & Mandi Market Intelligence": {
    "hi": "लाइव कृषि समाचार और मंडी मार्केट इंटेलिजेंस",
    "pa": "ਲਾਈਵ ਖੇਤੀਬਾੜੀ ਖ਼ਬਰਾਂ ਅਤੇ ਮੰਡੀ ਮਾਰਕੀਟ ਇੰਟੈਲੀਜੈਂਸ",
    "mr": "थेट कृषी बातम्या आणि मंडी मार्केट इंटेलिजन्स",
    "gu": "લાઇવ કૃષિ સમાચાર અને મંડી માર���કેટ ઇન્ટેલિજન્સ",
    "bn": "লাইভ কৃষি সংবাদ এবং মান্ডি মার্কেট ইন্টেলিজেন্স",
    "te": "లైవ్ వ్యవసాయ వార్తలు & మండి మార్కెట్ ఇంటెలిజెన్స్",
    "ta": "நேரலை விவசாயச் செய்திகள் & மண்டி சந்தை நுண்ணறிவு",
    "kn": "ಲೈವ್ ಕೃಷಿ ಸುದ್ದಿ ಮತ್ತು ಮಂಡಿ ಮಾರುಕಟ್ಟೆ ಗುಪ್ತಚರ"
  },
  "Live Verified Feed": {
    "hi": "लाइव सत्यापित फ़ीड",
    "pa": "ਲਾਈਵ ਪ੍ਰਮਾਣਿਤ ਫ਼ੀਡ",
    "mr": "थेट सत्यापित फीड",
    "gu": "લાઇવ ચકાસાયેલ ફીડ",
    "bn": "লাইভ যাচাইকৃত ফিড",
    "te": "లైవ్ ధృవీకరించబడిన ఫీడ్",
    "ta": "நேரலை சரிபார்க்கப்பட்ட ஊட்டம்",
    "kn": "ಲೈವ್ ಪರಿಶೀಲಿಸಿದ ಫೀಡ್"
  },
  "NewsAPI Connected (Key: b25e3bc8...)": {
    "hi": "NewsAPI कनेक्टेड (कुंजी: b25e3bc8...)",
    "pa": "NewsAPI ਕਨੈਕਟਡ (ਕੁੰਜੀ: b25e3bc8...)",
    "mr": "NewsAPI कनेक्टेड (किल्ली: b25e3bc8...)",
    "gu": "NewsAPI કનેક્ટેડ (કી: b25e3bc8...)",
    "bn": "NewsAPI সংযুক্ত (কী: b25e3bc8...)",
    "te": "NewsAPI కనెక్ట్ చేయబడింది (కీ: b25e3bc8...)",
    "ta": "NewsAPI இணைக்கப்பட்டுள்ளது (விசை: b25e3bc8...)",
    "kn": "NewsAPI ಸಂಪರ್ಕಗೊಂಡಿದೆ (ಕೀ: b25e3bc8...)"
  },
  "e-NAM Price Intelligence": {
    "hi": "ई-नाम मूल्य खुफिया (e-NAM Price Intelligence)",
    "pa": "ਈ-ਨਾਮ ਕੀਮਤ ਇੰਟੈਲੀਜੈਂਸ",
    "mr": "ई-नाम प्राईस इंटेलिजन्स",
    "gu": "ઇ-નામ પ્રાઇસ ઇન્ટેલિજન્સ",
    "bn": "ই-নাম প্রাইস ইন্টেলিজেন্স",
    "te": "ఇ-నామ్ ధరల ఇంటెలిజెన్స్",
    "ta": "இ-நாம் விலை நுண்ணறிவு",
    "kn": "ಇ-ನಾಮ್ ಬೆಲೆ ಗುಪ್ತಚರ"
  },
  "MSP Historical Data (2020–2026)": {
    "hi": "MSP ऐतिहासिक डेटा (2020–2026)",
    "pa": "MSP ਇਤਿਹਾਸਕ ਡੇਟਾ (2020–2026)",
    "mr": "MSP ऐतिहासिक डेटा (२०२०–२०२६)",
    "gu": "MSP ઐતિહાસિક ડેટા (૨૦૨૦–૨૦૨૬)",
    "bn": "MSP ঐতিহাসিক ডেটা (২০২০–২০২৬)",
    "te": "MSP చారిత్రక డేటా (2020–2026)",
    "ta": "MSP வரலாற்றுத் தரவு (2020–2026)",
    "kn": "MSP ಐತಿಹಾಸಿಕ ದತ್ತಾಂಶ (2020–2026)"
  },
  "Purchase Price Timeline,": {
    "hi": "खरीद मूल्य समयरेखा,",
    "pa": "ਖਰੀਦ ਕੀਮਤ ਸਮਾਂ-ਰੇਖਾ,",
    "mr": "खरेदी किंमत कालरेषा,",
    "gu": "ખરીદ કિંમત સમયરેખા,",
    "bn": "ক্রয় মূল্য সময়রেখা,",
    "te": "కొనుగోలు ధర కాలపట్టిక,",
    "ta": "கொள்முதல் விலை காலவரிசை,",
    "kn": "ಖರೀದಿ ಬೆಲೆ ಕಾಲவரிசை,"
  },
  "Price Hikes & Lows": {
    "hi": "मूल्य वृद्धि और गिरावट",
    "pa": "ਕੀਮਤ ਵਾਧਾ ਅਤੇ ਘਾਟਾ",
    "mr": "किंमत वाढ आणि घट",
    "gu": "કિંમત વધારો અને ઘટાડો",
    "bn": "মূল্য বৃদ্ধি ও পতন",
    "te": "ధరల పెరుగుదల & తగ్గుదల",
    "ta": "விலை உயர்வு மற்றும் வீழ்ச்சி",
    "kn": "ಬೆಲೆ ಏರಿಕೆ ಮತ್ತು ಇಳಿಕೆ"
  },
  "Track 6 years of Government MSP price hikes, historical mandi purchase lows, seasonal volatility cycles, and AI recommendations for the": {
    "hi": "सरकारी MSP मूल्य वृद्धि के 6 वर्षों, ऐतिहासिक मंडी खरीद गिरावट, मौसमी उतार-चढ़ाव चक्र और इसके लिए AI सिफारिशों को ट्रैक करें",
    "pa": "ਸਰਕਾਰੀ MSP ਕੀਮਤ ਵਾਧੇ ਦੇ 6 ਸਾਲਾਂ, ਇਤਿਹਾਸਕ ਮੰਡੀ ਖਰੀਦ ਘਾਟੇ, ਮੌਸਮੀ ਉਤਰਾਅ-ਚੜ੍ਹਾਅ ਚੱਕਰਾਂ ਅਤੇ ਇਸ ਲਈ AI ਸਿਫਾਰਸ਼ਾਂ ਨੂੰ ਟਰੈਕ ਕਰੋ",
    "mr": "शासकीय MSP ���िंमत वाढीची ६ वर्षे, ऐतिहासिक बाजार समिती (मंडी) खरेदी घट, हंगामी अस्थिरता चक्र आणि यासाठीच्या AI शिफारसी ट्रॅक करा",
    "gu": "સરકારી MSP કિંમત વધારાના 6 વર્ષ, ऐतिहासिक મંડી ખરીદ ઘટાડા, મોસમી અસ્થિરતા ચક્રો અને તેના માટે AI ભલામણોને ટ્રૅક કરો",
    "bn": "সরকারি MSP মূল্য বৃদ্ধির ৬ বছর, ঐতিহাসিক মান্ডি ক্রয় পতন, মৌসুমী অস্থিরতা চক্র এবং এর জন্য AI সুপারিশগুলি ট্র্যাক করুন",
    "te": "ప్రభుత్వ MSP ధరల పెంపు యొక్క 6 సంవత్సరాలు, చారిత్రక మండి కొనుగోలు కనిష్టాలు, కాలానుగుణ అస్థిరత చక్రాలు మరియు దీని కోసం AI సిఫార్సులను ట్రాక్ చేయండి",
    "ta": "அரசின் MSP விலை உயர்வுவின் 6 ஆண்டுகள், வரலாற்று மண்டி கொள்முதல் வீழ்ச்சிகள், பருவகால ஏற்ற இறக்க சுழற்சிகள் மற்றும் இதற்கான AI பரிந்துரைகளைக் கண்காணிக்கவும்",
    "kn": "सरकारी MSP ಬೆಲೆ ಏರಿಕೆಯ 6 ವರ್ಷಗಳು, ಐತಿಹಾಸಿಕ ಮಂಡಿ ಖರೀದಿ ಕನಿಷ್ಠಗಳು, ಕಾಲೋಚಿತ ಏರಿಳಿತದ చక్రಗಳು ಮತ್ತು ಇದರ AI ಶಿಫಾರಸುಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ"
  },
  "right time to sell vs hold": {
    "hi": "बेचने बनाम रोकने का सही समय",
    "pa": "ਵੇਚਣ ਬਨਾਮ ਰੋਕਣ ਦਾ ਸਹੀ ਸਮਾਂ",
    "mr": "विक्री करणे विरुद्ध रोखून धरण्याची योग्य वेळ",
    "gu": "વેચવા વિરુદ્ધ સાચવી રાખવાનો સાચો સમય",
    "bn": "বিক্রি বনাম ধরে রাখার সঠিক সময়",
    "te": "అమ్మడా��ికి vs నిల్వ ఉంచడానికి సరైన సమయం",
    "ta": "விற்பனை செய்ய বনাম சேமித்து வைக்க சரியான நேரம்",
    "kn": "ಮಾರಾಟ ಮಾಡಲು vs ದಾಸ್ತಾನು ಮಾಡಲು ಸರಿಯಾದ ಸಮಯ"
  },
  "to maximize crop profit.": {
    "hi": "फसल के मुनाफे को अधिकतम करने के लिए।",
    "pa": "ਫਸਲ ਦੇ ਮੁਨਾਫ਼ੇ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਕਰਨ ਲਈ।",
    "mr": "पिकाचा नफा जास्तीत जास्त करण्यासाठी.",
    "gu": "પાકનો નફો મહત્તમ કરવા માટે.",
    "bn": "ফসলের লাভ সর্বোচ্চ করতে।",
    "te": "పంట లాభాన్ని గరిష్టంగా పెంచుకోవడానికి.",
    "ta": "பயிர் லாபத்தை அதிகப்படுத்துவதற்கு.",
    "kn": "ಬೆಳೆ ಲಾಭವನ್ನು ಗರಿಷ್ಠಗೊಳಿಸಲು."
  },
  "Open Dedicated Page ↗": {
    "hi": "समर्पित पृष्ठ खोलें ↗",
    "pa": "ਖਾਸ ਪੰਨਾ ਖੋोलੋ ↗",
    "mr": "विशेष पेज उघडा ↗",
    "gu": "સમર્પિત પૃષ્ઠ ખોલો ↗",
    "bn": "নির্ধারিত পাতা খুলুন ↗",
    "te": "ప్రత్యేక పేజీని తెరవండి ↗",
    "ta": "பிரத்யேக பக்கத்தைத் திறக்கவும் ↗",
    "kn": "ಮೀಸಲಾದ ಪುಟವನ್ನು ತೆರೆಯಿರಿ ↗"
  },
  "Export Historical CSV": {
    "hi": "ऐतिहासिक CSV निर्यात करें",
    "pa": "ਇਤਿਹਾਸਕ CSV ਨਿਰਯਾਤ ਕਰੋ",
    "mr": "ऐतिहासिक CSV एक्सपोर्ट करा",
    "gu": "ઐતિહાસિક CSV નિકાસ કરો",
    "bn": "ঐতিহাসিক CSV রপ্তানি করুন",
    "te": "చారిత్రక CSVని ఎగుమతి చేయండి",
    "ta": "வரலாற்று CSV ஐ ஏற்றுமதி செய்யவும்",
    "kn": "ಐತಿಹಾಸಿಕ CSV ಅನ್ನು ರಫ್ತು ಮಾಡಿ"
  },
  "Select Crop:": {
    "hi": "फसल चुनें:",
    "pa": "ਫਸਲ ਚੁਣੋ:",
    "mr": "पीक निवडा:",
    "gu": "પાક પસંદ કરો:",
    "bn": "শস্য নির্বাচন করুন:",
    "te": "పంటను ఎంచుకోండి:",
    "ta": "பயிரைத் தேர்ந்தெடுக்கவும்:",
    "kn": "ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:"
  },
  "🌾 Wheat (गेहूं)": {
    "hi": "🌾 गेहूं (Wheat)",
    "pa": "🌾 ਕਣਕ (Wheat)",
    "mr": "🌾 गहू (Wheat)",
    "gu": "🌾 ઘઉં (Wheat)",
    "bn": "🌾 গম (Wheat)",
    "te": "🌾 గోధుమలు (Wheat)",
    "ta": "🌾 கோதுமை (Wheat)",
    "kn": "🌾 ಗೋಧಿ (Wheat)"
  },
  "🍚 Paddy (धान)": {
    "hi": "🍚 धान (Paddy)",
    "pa": "🍚 ਝੋਨਾ (Paddy)",
    "mr": "🍚 भात / धान (Paddy)",
    "gu": "🍚 ડાંગર (Paddy)",
    "bn": "🍚 ধান (Paddy)",
    "te": "🍚 ధాన్యం (Paddy)",
    "ta": "🍚 நெல் (Paddy)",
    "kn": "🍚 ಭತ್ತ (Paddy)"
  },
  "🌻 Mustard (सरसों)": {
    "hi": "🌻 सरसों (Mustard)",
    "pa": "🌻 ਸਰੋਂ (Mustard)",
    "mr": "🌻 मोहरी (Mustard)",
    "gu": "🌻 રાઈ (Mustard)",
    "bn": "🌻 সর্ষে (Mustard)",
    "te": "🌻 ఆవాలు (Mustard)",
    "ta": "🌻 கடுகு (Mustard)",
    "kn": "🌻 ಸಾಸಿವೆ (Mustard)"
  },
  "🌽 Maize (मक्का)": {
    "hi": "🌽 मक्का (Maize)",
    "pa": "🌽 ਮੱਕी (Maize)",
    "mr": "🌽 मका (Maize)",
    "gu": "🌽 મકાઈ (Maize)",
    "bn": "🌽 ভুট্টা (Maize)",
    "te": "🌽 మొక్కజొన���న (Maize)",
    "ta": "🌽 மக்காச்சோளம் (Maize)",
    "kn": "🌽 ಮುಸುಕಿನ ಜೋಳ (Maize)"
  },
  "☁️ Cotton (कपास)": {
    "hi": "☁️ कपास (Cotton)",
    "pa": "☁️ ਕਪाह (Cotton)",
    "mr": "☁️ कापूस (Cotton)",
    "gu": "☁️ કપાસ (Cotton)",
    "bn": "☁️ তুলা (Cotton)",
    "te": "☁️ పత్తి (Cotton)",
    "ta": "☁️ பருத்தி (Cotton)",
    "kn": "☁️ ಹತ್ತಿ (Cotton)"
  },
  "🫘 Chana (चना)": {
    "hi": "🫘 चना (Chana)",
    "pa": "🫘 ਛੋਲੇ (Chana)",
    "mr": "🫘 हरभरा (Chana)",
    "gu": "🫘 ચણા (Chana)",
    "bn": "🫘 ছোলা (Chana)",
    "te": "🫘 శనగలు (Chana)",
    "ta": "🫘 கடலை (Chana)",
    "kn": "🫘 ಕಡಲೆ (Chana)"
  },
  "🌿 Soybean (सोयाबीन)": {
    "hi": "🌿 सोयाबीन (Soybean)",
    "pa": "🌿 ਸੋਆਬੀਨ (Soybean)",
    "mr": "🌿 सोयाबीन (Soybean)",
    "gu": "🌿 સોયાબીન (Soybean)",
    "bn": "🌿 সয়াবিন (Soybean)",
    "te": "🌿 సోయాబీన్ (Soybean)",
    "ta": "🌿 சோயாபீன்ஸ் (Soybean)",
    "kn": "🌿 ಸೋಯಾಬೀನ್ (Soybean)"
  },
  "Source:": {
    "hi": "स्रोत:",
    "pa": "ਸਰੋਤ:",
    "mr": "स्रोत:",
    "gu": "स्त्रोत:",
    "bn": "উৎস:",
    "te": "మూలం:",
    "ta": "மூலம்:",
    "kn": "ಮೂಲ:"
  },
  "CACP & MoAFW Official Notifications": {
    "hi": "CACP और MoAFW आधिकारिक अधिसूचनाएँ",
    "pa": "CACP ਅਤੇ MoAFW ਅਧਿਕਾਰਤ სანੂਚਨਾਵਾਂ",
    "mr": "CACP आणि MoAFW अधिकृत अधिसूचना",
    "gu": "CACP અને MoAFW અધિકૃત સૂચનાઓ",
    "bn": "CACP এবং MoAFW এর সরকারি বিজ্ঞপ্তি",
    "te": "CACP & MoAFW అధికారిక నోటిఫికేషన్‌లు",
    "ta": "CACP & MoAFW அதிகாரப்பூர்வ அறிவிப்புகள்",
    "kn": "CACP & MoAFW ಅಧಿಕೃತ ಅಧಿಸೂಚನೆಗಳು"
  },
  "Current MSP (2025-26)": {
    "hi": "वर्तमान MSP (2025-26)",
    "pa": "ਮੌਜੂਦਾ MSP (2025-26)",
    "mr": "सध्याचा MSP (२०२५-२६)",
    "gu": "વર્તમાન MSP (૨૦૨૫-૨૬)",
    "bn": "বর্তমান MSP (২০২৫-২৬)",
    "te": "ప్రస్తుత MSP (2025-26)",
    "ta": "நடப்பு MSP (2025-26)",
    "kn": "ಪ್ರಸ್ತುತ MSP (2025-26)"
  },
  "/qtl": {
    "hi": "/क्विं",
    "pa": "/ਕਿੰਟਲ",
    "mr": "/क्विं",
    "gu": "/ક્વિં",
    "bn": "/কুইন্টাল",
    "te": "/క్విం",
    "ta": "/குவின்",
    "kn": "/ಕ್ವಿಂ"
  },
  "▲ +₹100 (+4.6%) YoY": {
    "hi": "▲ +₹100 (+4.6%) YoY",
    "pa": "▲ +₹100 (+4.6%) YoY",
    "mr": "▲ +₹100 (+4.6%) YoY",
    "gu": "▲ +₹100 (+4.6%) YoY",
    "bn": "▲ +₹100 (+4.6%) YoY",
    "te": "▲ +₹100 (+4.6%) YoY",
    "ta": "▲ +₹100 (+4.6%) YoY",
    "kn": "▲ +₹100 (+4.6%) YoY"
  },
  "5-Yr Total Hike": {
    "hi": "5-वर्षीय कुल वृद्धि",
    "pa": "5-ਸਾਲਾ ਕُل ਵਾਧਾ",
    "mr": "५-वर्षीय एकूण वाढ",
    "gu": "૫-વર્ષનો કુલ વધારો",
    "bn": "৫-বছরের মোট বৃদ্ধি",
    "te": "5-సంవత్సరాల మొత్తం పెరుగుదల",
    "ta": "5-ஆண்டு மொத்த உயர்வு",
    "kn": "5-ವರ್ಷದ ಒಟ್ಟು ಹೆಚ್ಚಳ"
  },
  "+15.2% 5-Year Growth": {
    "hi": "+15.2% 5-वर्षीय वृद्धि",
    "pa": "+15.2% 5-ਸਾਲਾ ਵਾਧਾ",
    "mr": "+১৫.২% ५-वर्षीय वाढ",
    "gu": "+૧૫.૨% ૫-વર્ષીય વૃદ્ધિ",
    "bn": "+১৫.২% ৫-বছরের প্রবৃদ্ধি",
    "te": "+15.2% 5-సంవత్సరాల వృద్ధి",
    "ta": "+15.2% 5-ஆண்டு வளர்ச்சி",
    "kn": "+15.2% 5-ವರ್ಷದ ಬೆಳವಣಿಗೆ"
  },
  "All-Time Peak Rate": {
    "hi": "सर्वकालिक उच्चतम दर",
    "pa": "ਹੁਣ ਤੱਕ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਦਰ",
    "mr": "सर्वकाळातील उच्च दर",
    "gu": "સર્વકાલીન ઉચ્ચ દર",
    "bn": "সর্বকালের সর্বোচ্চ দর",
    "te": "সর্বকালের সর্বোচ্চ হার",
    "ta": "எக்காலத்திற்கும் உச்ச விலை",
    "kn": "ಸರ್ವಕಾಲಿಕ ಗರಿಷ್ಠ ದರ"
  },
  "Mandi Peak Record": {
    "hi": "मंडी का सर्वोच्च रिकॉर्ड",
    "pa": "ਮੰਡੀ ਦਾ ਸਭ ਤੋਂ ਉੱਚਾ ਰਿਕਾਰਡ",
    "mr": "मंडीचा उच्चां���ी विक्रम",
    "gu": "મંડીનો સર્વોચ્ચ રેકોર્ડ",
    "bn": "মান্ডির সর্বোচ্চ রেকর্ড",
    "te": "మండీ గరిష్ట రికార్డు",
    "ta": "மண்டி உச்ச சாதனை",
    "kn": "ಮಂಡಿ ಗರಿಷ್ಠ ದಾಖಲೆ"
  },
  "5-Year Low Trough": {
    "hi": "5-वर्षीय न्यूनतम स्तर",
    "pa": "5-ਸਾਲਾ ਸਭ ਤੋਂ ਹੇਠਲਾ ਪੱਧਰ",
    "mr": "५-वर्षीय नीचांक",
    "gu": "૫-વર્ષનું સૌથી નીચું સ્તર",
    "bn": "৫-বছরের সর্বনিম্ন স্তর",
    "te": "5-సంవత్సరాల కనిష్ట స్థాయి",
    "ta": "5-ஆண்டு குறைந்த அளவு",
    "kn": "5-ವರ್ಷದ ಕನಿಷ್ಠ ಮಟ್ಟ"
  },
  "Post-Harvest Glut Low": {
    "hi": "कटाई के बाद आवक अधिक होने से मंदी",
    "pa": "ਫਸਲ ਦੀ ਕਟਾਈ ਤੋਂ ਬਾਅਦ ਵਾਧੂ ਆਵਕ ਕਾਰਨ ਮੰਦੀ",
    "mr": "का��णीनंतर आवक वाढल्याने आलेली मंदी",
    "gu": "પાક અણ્યા પછી વધુ આવકથી નીચા ભાવ",
    "bn": "ফসল কাটার পর অতিরিক্ত জোগানের ফলে দরপতন",
    "te": "కోత తరువాత దిగుబడి అధికమై ధరల పతనం",
    "ta": "அறுவடைக்குப் பின் வரத்து மிகுதியால் குறைந்த விலை",
    "kn": "ಕೊಯ್ಲಿನ ನಂತರ ಅಧಿಕ ಆವಕೆಯಿಂದಾಗಿ ಕುಸಿದ ಬೆಲೆ"
  },
  "Best Sell Window": {
    "hi": "बेचने का सबसे अच्छा समय",
    "pa": "ਵੇਚਣ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਸਮਾਂ",
    "mr": "विक्रीसाठी सर्वोत्तम काळ",
    "gu": "વેચાણ માટેનો શ્રેષ્ઠ સમય",
    "bn": "বিক্রির সেরা সময়",
    "te": "విక్రయించడానికి ఉత్తమ సమయం",
    "ta": "விற்பனை செய்ய சிறந்த காலம்",
    "kn": "ಮಾ��ಾಟ ಮಾಡಲು ಉತ್ತಮ ಸಮಯ"
  },
  "Mar – Apr": {
    "hi": "मार्च – अप्रैल",
    "pa": "ਮਾਰਚ – ਅਪ੍ਰੈਲ",
    "mr": "मार्च – एप्रिल",
    "gu": "માર્ચ – એપ્રિલ",
    "bn": "মার্চ – এপ্রিল",
    "te": "మార్చి – ఏప్రిల్",
    "ta": "மார்ச் – ஏப்ரல்",
    "kn": "ಮಾರ್ಚ್ – ಏಪ್ರಿಲ್"
  },
  "Peak Procurement Window": {
    "hi": "प्रमुख खरीद अवधि",
    "pa": "ਮੁੱਖ ਖਰੀਦ ਸਮਾਂ",
    "mr": "प्रमुख खरेदी काळ",
    "gu": "મુખ્ય ખરીદીનો સમયગાળો",
    "bn": "সর্বোচ্চ সংগ্রহকাল",
    "te": "గరిష్ట కొనుగోలు కాలం",
    "ta": "உச்ச கொள்முதல் காலம்",
    "kn": "ಗರಿಷ್ಠ ಖರೀದಿ ಅವಧಿ"
  },
  "AI Selling Signal": {
    "hi": "AI बिक्री संकेत",
    "pa": "AI ਵੇਚਣ ਦਾ ਸੰਕੇਤ",
    "mr": "AI विक्री संकेत",
    "gu": "AI વેચાણ સંકેત",
    "bn": "AI বিক্রির সংকেত",
    "te": "AI విక్రయ సంకేతం",
    "ta": "AI விற்பனை சமிக்ஞை",
    "kn": "AI ಮಾರಾಟ ಸಂಕೇತ"
  },
  "SELL NOW": {
    "hi": "अभी बेचें",
    "pa": "ਹੁਣੇ ਵੇਚੋ",
    "mr": "आता विक्री करा",
    "gu": "હવે વેચો",
    "bn": "এখনই বিক্রি করুন",
    "te": "ఇప్పుడే అమ్మండి",
    "ta": "இப்போது விற்கவும்",
    "kn": "ಈಗ ಮಾರಾಟ ಮಾಡಿ"
  },
  "At/Above MSP Window": {
    "hi": "MSP पर/ऊपर विंडो",
    "pa": "MSP 'ਤੇ/ਉੱਤੇ ਵਿੰਡੋ",
    "mr": "MSP च्या वर/समान विंडो",
    "gu": "MSP પર/ઉપર વિન્ડೋ",
    "bn": "MSP এ/উপরে উইন্ডো",
    "te": "MSP వద్ద/పైన విండో",
    "ta": "MSP இல்/மேல் சாளரம்",
    "kn": "MSP ನಲ್ಲಿ/ಮೇಲೆ ವಿಂಡೋ"
  },
  "Wheat: 6-Year Purchase Price Timeline (2020–2026)": {
    "hi": "गेहूं: 6-वर्षीय खरीद मूल्य समयरेखा (2020–2026)",
    "pa": "ਕਣਕ: 6-ਸਾਲਾ ਖਰੀਦ ਮੁੱਲ ਸਮਾਂ-ਰੇਖਾ (2020–2026)",
    "mr": "गहू: ६-वर्षीय खरेदी किंमत कालरेषा (२०२०–२०२६)",
    "gu": "ઘઉં: 6-વર્ષીય ખરીદ કિંમત સમયરેખા (2020–2026)",
    "bn": "গম: ৬-বছরের ক্রয়মূল্যের সময়রেখা (২০২০–২০২৬)",
    "te": "గోధుమలు: 6-సంవత్సరాల కొనుగోలు ధర కాలపట్టిక (2020–2026)",
    "ta": "கோதுமை: 6 ஆண்டு கொள்முதல் விலை காலவரிசை (2020–2026)",
    "kn": "ಗೋಧಿ: 6-ವರ್ಷದ ಖರೀದಿ ಬೆಲೆ ಕಾಲಮಿತಿ (2020–2026)"
  },
  "Government Minimum Support Price (₹/Quintal) and annual hikes": {
    "hi": "सरकारी न्यूनतम समर्थन मूल्य (₹/क्विंटल) और वार्षिक वृद्धि",
    "pa": "ਸਰਕਾਰੀ ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ (₹/ਕੁਇੰਟਲ) ਅਤੇ ਸਾਲਾਨਾ ਵਾਧਾ",
    "mr": "शासकीय किमान आधारभूत किंमत (₹/क्विंटल) आणि वार्षिक वाढ",
    "gu": "સરકારી લઘુત્તમ ટેકાના ભાવ (₹/ક્વિંટેલ) અને વાર્ષિક વધારો",
    "bn": "সরকারি ন্যূনতম সমর্থন মূল্য (₹/কুইন্টাল) এবং বার্ষিক বৃদ্ধি",
    "te": "ప్రభుత్వ కనీస మద్దతు ధర (₹/క్వింటాలు) మరియు వార్షిక పెరుగుదల",
    "ta": "அரசின் குறைந்தபட்ச ஆதரவு விலை (₹/குவிண்டால்) மற்றும் ஆண்டு உயர்வுகள்",
    "kn": "ಸರ್ಕಾರಿ ಕನಿಷ್ಠ ಬೆಂಬಲ ಬೆಲೆ (₹/ಕ���ವಿಂಟಾಲ್) ಮತ್ತು ವಾರ್ಷಿಕ ಏರಿಕೆ"
  },
  "📅 View:": {
    "hi": "📅 देखें:",
    "pa": "📅 ਦੇਖੋ:",
    "mr": "📅 पहा:",
    "gu": "📅 જુઓ:",
    "bn": "📅 দেখুন:",
    "te": "📅 వీక్షించండి:",
    "ta": "📅 காண்க:",
    "kn": "📅 ವೀಕ್ಷಿಸಿ:"
  },
  "📅 Yearly (2020–2026)": {
    "hi": "📅 वार्षिक (2020–2026)",
    "pa": "📅 ਸਲਾਨਾ (2020–2026)",
    "mr": "📅 वार्षिक (२०२०–२०२६)",
    "gu": "📅 વાર્ષિક (2020–2026)",
    "bn": "📅 বার্ষিক (২০২০–২০২৬)",
    "te": "📅 వార్షిక (2020–2026)",
    "ta": "📅 ஆண்டுதோறும் (2020–2026)",
    "kn": "📅 ವಾರ್ಷಿಕ (2020–2026)"
  },
  "🌓 6-Month Pattern (Kharif / Rabi)": {
    "hi": "🌓 6-मासीय पैटर्न (खरीफ / रबी)",
    "pa": "🌓 6-ਮਹੀਨੇ ਦਾ ਪੈਟਰਨ (ਖਰੀਫ / ਰਬੀ)",
    "mr": "🌓 ६-महिन्यांची पद्धत (��रीप / रब्बी)",
    "gu": "🌓 6-મહિનાની પદ્ધતિ (ખરીફ / રવી)",
    "bn": "🌓 ৬-মাসের প্যাটার্ন (খরিফ / রবি)",
    "te": "🌓 6-నెలల సరళి (ఖరీఫ్ / రబీ)",
    "ta": "🌓 6 மாத மாதிரி (காரீஃப் / ரபி)",
    "kn": "🌓 6-ತಿಂಗಳ ಮಾದರಿ (ಖರೀಫ್ / ರಬಿ)"
  },
  "📆 Monthly (12 Months)": {
    "hi": "📆 मासिक (12 महीने)",
    "pa": "📆 ਮਾਸਿਕ (12 ਮਹੀਨੇ)",
    "mr": "📆 मासिक (१२ महिने)",
    "gu": "📆 માસિક (12 મહિના)",
    "bn": "📆 মাসিক (১২ মাস)",
    "te": "📆 నెలవారీ (12 నెలలు)",
    "ta": "📆 மாதந்தோறும் (12 மாதங்கள்)",
    "kn": "📆 ಮಾಸಿಕ (12 ತಿಂಗಳುಗಳು)"
  },
  "🔃 Sort:": {
    "hi": "🔃 क्रमित करें:",
    "pa": "🔃 ਲੜੀਬੱਧ ਕਰੋ:",
    "mr": "🔃 क्रम लावा:",
    "gu": "🔃 સોર્ટ કરો:",
    "bn": "🔃 সাজান:",
    "te": "🔃 క్రమబద్ధీకరించు:",
    "ta": "🔃 வரிசைப்படுத்து:",
    "kn": "🔃 ವಿಂಗಡಿಸಿ:"
  },
  "🔼 Oldest → Latest": {
    "hi": "🔼 सबसे पुराना → नवीनतम",
    "pa": "🔼 ਸਭ ਤੋਂ ਪੁਰਾਣਾ → ਨਵੀਨਤਮ",
    "mr": "🔼 जुने → नवीन",
    "gu": "🔼 સૌથી જૂનું → નવીનતમ",
    "bn": "🔼 সবচেয়ে পুরনো → সবচেয়ে নতুন",
    "te": "🔼 పురాతనమైనది → సరికొత్తది",
    "ta": "🔼 பழையது → புதியது",
    "kn": "🔼 ಹಳೆಯದು → ಹೊಸದು"
  },
  "🔽 Latest → Oldest": {
    "hi": "🔽 नवीनतम → सबसे पुराना",
    "pa": "🔽 ਸਭ ਤੋਂ ਨਵਾਂ → ਸਭ ਤੋਂ ਪੁਰਾਣਾ",
    "mr": "🔽 अलीकडील → सर्वात जुने",
    "gu": "🔽 સૌથી નવું → સૌથી જૂનું",
    "bn": "🔽 সবচেয়ে নতুন → সবচেয়ে পুরানো",
    "te": "🔽 తాజాది → పాతది",
    "ta": "🔽 புதியது → பழையது",
    "kn": "🔽 ഏറ്റവും പുതിയದು → ಹಳೆಯದು"
  },
  "📈 Highest Price (Peak)": {
    "hi": "📈 ���च्चतम मूल्य (पीक)",
    "pa": "📈 ਸਭ ਤੋਂ ਉੱਚਾ ਮੁੱਲ (ਪੀਕ)",
    "mr": "📈 सर्वोच्च किंमत (पीक)",
    "gu": "📈 ઉચ્ચતમ ભાવ (પીક)",
    "bn": "📈 সর্বোচ্চ মূল্য (পিক)",
    "te": "📈 గరిష్ట ధర (పీక్)",
    "ta": "📈 அதிக விலை (பீக்)",
    "kn": "📈 ಗರಿಷ್ಠ ಬೆಲೆ (ಪೀಕ್)"
  },
  "📉 Lowest Price (Glut)": {
    "hi": "📉 न्यूनतम मूल्य (ग्लट/अतिरेक)",
    "pa": "📉 ਸਭ ਤੋਂ ਘੱਟ ਮੁੱਲ (ਗਲੱਟ)",
    "mr": "📉 সর্বনিম্ন किंमत (ग््लट/अतिसाठा)",
    "gu": "📉 ન્યૂનતમ ભાવ (ગ્લટ)",
    "bn": "📉 সর্বনিম্ন মূল্য (গ্লট)",
    "te": "📉 కనిష్ట ధర (అతివృష్టి/గ్లట్)",
    "ta": "📉 குறைந்த விலை (உபரி)",
    "kn": "📉 ಕನಿಷ್ಠ ಬೆಲೆ (ಗ್ಲಟ್)"
  },
  "6-Year Track": {
    "hi": "6-वर्षीय ��्रैक",
    "pa": "6-ਸਾਲਾ ਟਰੈਕ",
    "mr": "६-वर्षीय ट्रॅक",
    "gu": "૬-વર્ષીય ટ્રેક",
    "bn": "৬-বছরের ট্র্যাক",
    "te": "6-సంవత్సరాల ట్రాక్",
    "ta": "6 ஆண்டு டிராக்",
    "kn": "6-ವರ್ಷದ ಟ್ರ್ಯಾಕ್"
  },
  "MSP Rate": {
    "hi": "MSP दर",
    "pa": "MSP ਦਰ",
    "mr": "MSP दर",
    "gu": "MSP દર",
    "bn": "MSP হার",
    "te": "MSP రేటు",
    "ta": "MSP விலை",
    "kn": "MSP ದರ"
  },
  "Mandi Peak Clearance": {
    "hi": "मंडी पीक निकासी",
    "pa": "ਮੰਡੀ ਪੀਕ ਕਲੀਅਰੈਂਸ",
    "mr": "मंडी पीक क्लिरन्स",
    "gu": "મંડી પીક ક્લિયરન્સ",
    "bn": "মান্ডি পিক ক্লিয়ারেন্স",
    "te": "మండి పీక్ క్లియరెన్స్",
    "ta": "மண்டி பீக் கிளியரன்ஸ்",
    "kn": "ಮಂಡಿ ಪೀಕ್ ಕ್ಲಿಯರೆನ್ಸ್"
  },
  "Values in Indian Rupees (₹)": {
    "hi": "मूल्य भारतीय रुपये में (₹)",
    "pa": "ਮੁੱਲ ਭਾਰਤੀ ਰੁਪਏ ਵਿੱਚ (₹)",
    "mr": "मूल्य भारतीय रुपयांमध्ये (₹)",
    "gu": "મૂલ્ય ભારતીય રૂપિયામાં (₹)",
    "bn": "মূল্য ভারতীয় টাকায় (₹)",
    "te": "భారతీయ రూపాయలలో విలువలు (₹)",
    "ta": "இந்திய ரூபாயில் மதிப்புகள் (₹)",
    "kn": "भारतीय रुपयाಗಳಲ್ಲಿ ಮೌಲ್ಯಗಳು (₹)"
  },
  "Seasonal Price Hikes & Lows (% vs MSP)": {
    "hi": "मौसमी मूल्य वृद्धि और गिरावट (% MSP की तुलना में)",
    "pa": "ਮੌਸਮੀ ਕੀਮਤ ਵਾਧਾ ਅਤੇ ਘਾਟਾ (% MSP ਦੇ ਮੁਕਾਬਲੇ)",
    "mr": "हंगामी किंमत वाढ आणि घट (% MSP च्या तुलनेत)",
    "gu": "મોસમી ભાવ વધારા અને ઘટાડા (% MSP ની સરખામણીમાં)",
    "bn": "মৌসুমি মূল্য বৃদ্ধি ও পতন (% MSP এর তুলনায়)",
    "te": "కాలానుగుణ ధరల పెరుగుదల & తగ్గుదల (% MSP తో పోలిస్తే)",
    "ta": "பருவகால விலை உயர்வு & சரிவு (% MSP உடன் ஒப்பிடும்போது)",
    "kn": "сеasonal ಬೆಲೆ ಏರಿಕೆ ಮತ್ತು ಇಳಿಕೆ (% MSP ಗೆ ಹೋಲಿಸಿದರೆ)"
  },
  "Month-wise volatility: Green = Price Surge Peak, Red = Harvest Glut Low": {
    "hi": "मासिक उतार-चढ़ाव: हरा = मूल्य वृद्धि पीक, लाल = फसल ग्लट निम्न",
    "pa": "ਮਹੀਨਾਵਾਰ ਉਤਰਾਅ-ਚੜ੍ਹਾਅ: ਹਰਾ = ਕੀਮਤ ਵਾਧਾ ਪੀਕ, ਲਾਲ = ਫਸਲ ਗਲੱਟ ਹੇਠਲਾ ਪੱਧਰ",
    "mr": "महिन्यानुसार चढ-उतार: हिरवा = किंमत वाढ पीक, लाल = पीक आवक अतिरेक किमान",
    "gu": "માસવાર उतार-ચઢાવ: લીલો = ભાવ વધારો પીક, લાલ = પાક ગ્લટ ન્ય���નતમ",
    "bn": "মাসভিত্তিক অস্থিরতা: সবুজ = মূল্য বৃদ্ধি পিক, লাল = ফসল গ্লট সর্বনিম্ন",
    "te": "నెలవారీ అస్థిరత: ఆకుపచ్చ = ధరల పెరుగుదల పీక్, ఎరుపు = పంట దిగుబడి గ్లట్ కనిష్టం",
    "ta": "மாதாந்திர ஏற்ற இறக்கம்: பச்சை = விலை உயர்வு பீக், சிவப்பு = அறுவடை உபரி குறைவு",
    "kn": "ತಿಂಗಳವಾರು ಅಸ್ಥಿರತೆ: ಹಸಿರು = ಬೆಲೆ ಏರಿಕೆ ಪೀಕ್, ಕೆಂಪು = ಬೆಳೆ ಗ್ಲಟ್ ಕನಿಷ್ಠ"
  },
  "12 Months Pattern": {
    "hi": "12 महीने का पैटर्न",
    "pa": "12 ਮਹੀਨਿਆਂ ਦਾ ਪੈਟਰਨ",
    "mr": "१२ महिन्यांचा पॅटर्न",
    "gu": "૧૨ મહિનાની પેટર્ન",
    "bn": "১২ মাসের প্যাটার্ন",
    "te": "12 నెలల సరళి",
    "ta": "12 மாத மாதிரி",
    "kn": "12 ��ಿಂಗಳ ಮಾದರಿ"
  },
  "&ge;105% Peak": {
    "hi": "&ge;105% पीक (शीर्ष)",
    "pa": "&ge;105% ਪੀਕ (ਸਿਖਰ)",
    "mr": "&ge;105% पीक (उच्च)",
    "gu": "&ge;105% પીક (શ્રેષ્ઠ)",
    "bn": "&ge;105% পিক (শীর্ষ)",
    "te": "&ge;105% గరిష్ట స్థాయి",
    "ta": "&ge;105% உச்சம்",
    "kn": "&ge;105% ಗರಿಷ್ಠ"
  },
  "98-104% Normal": {
    "hi": "98-104% सामान्य",
    "pa": "98-104% ਆਮ",
    "mr": "98-104% सामान्य",
    "gu": "98-104% સામાન્ય",
    "bn": "98-104% স্বাভাবিক",
    "te": "98-104% ���ాధారణ",
    "ta": "98-104% சாதாரண",
    "kn": "98-104% ಸಾಮಾನ್ಯ"
  },
  "&le;97% Glut Low": {
    "hi": "&le;97% भारी आवक (ग्लट लो)",
    "pa": "&le;97% ਬਹੁਤ ਜ਼ਿਆਦਾ ਆਵਕ (ਗਲਟ ਲੋ)",
    "mr": "&le;97% अति-आवक (ग्लट लो)",
    "gu": "&le;97% વધુ આવક (ગ્લટ લો)",
    "bn": "&le;97% অতিরিক্ত সরবরাহ (গ্লট লো)",
    "te": "&le;97% ჭარబ సరఫరా (గ్లట్ లో)",
    "ta": "&le;97% அதிகப்படியான வரத்து (க்ளட் லோ)",
    "kn": "&le;97% ಅತಿ ಹೆಚ್ಚು ಆವಕ (ಗ್ಲಟ್ ಲೋ)"
  },
  "100% = Official MSP Baseline": {
    "hi": "100% = आधिकारिक MSP बेसलाइन",
    "pa": "100% = ਸਰਕਾਰੀ MSP ਬੇਸਲਾਈਨ",
    "mr": "100% = अधिकृत MSP बेसलाईन",
    "gu": "100% = સત્તાવાર MSP બેઝલાઇન",
    "bn": "100% = অফিসিয়াল MSP বেসলাইন",
    "te": "100% = అధికారిక MSP బేస్‌లైన్",
    "ta": "100% = அதிகாரப்பூர்வ MSP அடிப்படை",
    "kn": "100% = ಅಧಿಕೃತ MSP ಬೇಸ್‌ಲೈನ್"
  },
  "AI Suggestion Engine &mdash;": {
    "hi": "AI सुझाव इंजन &mdash;",
    "pa": "AI ਸੁਝਾਅ ਇੰਜਣ &mdash;",
    "mr": "AI शिफारस यंत्रणा &mdash;",
    "gu": "AI સૂચન એન્જિન &mdash;",
    "bn": "AI পরামর্শ ইঞ্জিন &mdash;",
    "te": "AI సూచన ఇంజిన్ &mdash;",
    "ta": "AI பரிந்துரை இயந்திரம் &mdash;",
    "kn": "AI ಸಲಹಾ ಎಂಜಿನ್ &mdash;"
  },
  "Wheat": {
    "hi": "गेहूं",
    "pa": "ਕਣਕ",
    "mr": "गहू",
    "gu": "ઘઉં",
    "bn": "গম",
    "te": "గోధుమ",
    "ta": "கோதுமை",
    "kn": "ಗೋಧಿ"
  },
  "Algorithmic recommendation based on 6-year mandi clearing data and procurement schedules": {
    "hi": "6 साल के मंडी समाशोधन डेटा और खरीद शेड्यूल के आधार पर एल्गोरिथम सिफ़ार���श",
    "pa": "6 ਸਾਲਾਂ ਦੇ ਮੰਡੀ ਕਲੀਅਰਿੰਗ ਡਾਟਾ ਅਤੇ ਖਰੀਦ ਕਾਰਜਕ੍ਰਮ 'ਤੇ ਅਧਾਰਤ ਐਲਗੋਰਿਦਮਿਕ ਸਿਫ਼ਾਰਸ਼",
    "mr": "६ वर्षांच्या APMC मंडी क्लिरिंग डेटा आणि खरेदी वेळापत्रकावर आधारित अल्गोरिदमिक शिफारस",
    "gu": "૬ વર્ષના APMC મંડી ક્લિયરિંગ ડેટા અને ખરીદી શેડ્યૂલના આધારે એલ્ગોરિધમિક ભલામણ",
    "bn": "৬ বছরের APMC মান্ডি ক্লিয়ারিং ডেটা এবং ক্রয় সময়সূচীর উপর ভিত্তি করে অ্যালগরিদমিক সুপারিশ",
    "te": "6 సంవత్సరాల APMC మండి క్లియరింగ్ డేటా మరియు సేకరణ షెడ్యూల్‌ల ఆధారంగా అల్గారిథమిక్ సిఫార్సు",
    "ta": "6 வருட APMC மார்க்கெட் கிளியரிங் தரவு மற்றும் கொள்முதல் அட்டவ��ையின் அடிப்படையிலான அல்காரிதமிக் பரிந்துரை",
    "kn": "6 ವರ್ಷಗಳ APMC ಮಂಡಿ ಕ್ಲಿಯರಿಂಗ್ ಡೇಟಾ ಮತ್ತು ಖರೀದಿ ವೇಳಾಪಟ್ಟಿಯ ಆಧಾರದ ಮೇಲೆ ಅಲ್ಗಾರಿದಮಿಕ್ ಶಿಫಾರಸು"
  },
  "OPTIMAL SELLING WINDOW": {
    "hi": "उत्तम बिक्री अवधि",
    "pa": "ਸਭ ਤੋਂ ਵਧੀਆ ਵੇਚਣ ਦਾ ਸਮਾਂ",
    "mr": "विक्रीसाठी सर्वोत्तम काळ",
    "gu": "વેચાણ માટેનો શ્રેષ્ઠ સમય",
    "bn": "বিক্রয়ের最优 সময়",
    "te": "అమ్మకానికి సరైన సమయం",
    "ta": "விற்பனைக்கு உகந்த நேரம்",
    "kn": "ಮಾರಾಟ ಮಾಡಲು ಅತ್ಯುತ್ತಮ ಸಮಯ"
  },
  "Wheat (गेहूं) Analysis:": {
    "hi": "गेहूं (Wheat) विश्लेषण:",
    "pa": "ਕਣਕ (Wheat) ਵਿਸ਼ਲੇਸ਼ਣ:",
    "mr": "गहू (Wheat) विश्लेषण:",
    "gu": "ઘઉં (Wheat) વિશ્લેષણ:",
    "bn": "গম (Wheat) বিশ্লেষণ:",
    "te": "గోధుమ (Wheat) విశ్లేషణ:",
    "ta": "கோதுமை (Wheat) பகுப்பாய்வு:",
    "kn": "ಗೋಧಿ (Wheat) ವಿಶ್ಲೇಷಣೆ:"
  },
  "Current market price is trading at ₹2,275–₹2,340/Qtl, which is at or above the official MSP baseline. Government APMC procurement mandis are fully operational during March and April. Selling now guarantees zero moisture-discount penalties (if moisture &le; 12%) and direct DBT disbursement within 24 hours. Holding past May incurs weather degradation risk and private mill price dips.": {
    "hi": "वर्तमान बाजार मूल्य ₹2,275–₹2,340/Qtl पर कारोबार कर रहा है, जो आधिकारिक MSP बेसलाइन पर या उससे ऊपर है। सरकारी APMC खरीद मंडियां मार्च और अप्रैल के दौरान पूरी तरह से चालू हैं। अभी बेचने पर नमी-छूट के जुर्माने से राहत मिलती है (यदि नमी &le; 12% है) और 24 घंटे के भीतर सीधा DBT ��ुगतान होता है। मई के बाद रोकने पर मौसम से खराबी का जोखिम और निजी मिलों द्वारा कीमतों में गिरावट का सामना करना पड़ सकता है।",
    "pa": "ਮੌਜੂਦਾ ਬਾਜ਼ਾਰ ਭਾਵ ₹2,275–₹2,340/Qtl 'ਤੇ ਚੱਲ ਰਿਹਾ ਹੈ, ਜੋ ਕਿ ਸਰਕਾਰੀ MSP ਬੇਸਲਾਈਨ 'ਤੇ ਜਾਂ ਇਸਤੋਂ ਉੱਪਰ ਹੈ। ਸਰਕਾਰੀ APMC ਖਰੀਦ ਮੰਡੀਆਂ ਮਾਰਚ ਅਤੇ ਅਪ੍ਰੈਲ ਦੌਰਾਨ ਪੂਰੀ ਤਰ੍ਹਾਂ ਚਾਲੂ ਹਨ। ਹੁਣੇ ਵੇਚਣ ਨਾਲ ਨਮੀ-ਕਟੌਤੀ ਦੇ ਜੁਰਮਾਨੇ ਤੋਂ ਛੋਟ ਮਿਲਦੀ ਹੈ (ਜੇਕਰ ਨਮੀ &le; 12% ਹੋਵੇ) ਅਤੇ 24 ਘੰਟਿਆਂ ਦੇ اندر ਸਿੱਧਾ DBT ਭੁਗਤਾਨ ਹੁੰਦਾ ਹੈ। ਮਈ ਤੋਂ ਬਾਅਦ ਰੋਕ ਕੇ ਰੱਖਣ ਨਾਲ ਮੌਸਮ ਕਾਰਨ ਖ਼ਰਾਬ ਹੋਣ ਦਾ ਜੋਖਮ ਅਤੇ ਪ੍ਰਾਈਵੇਟ ਮਿੱਲਾਂ ਵੱਲੋਂ ਭਾਵ ਘਟਾਉਣ ਦਾ ਖਤਰਾ ਹੈ।",
    "mr": "सध्या बाजारभाव ₹2,275–₹2,340/Qtl वर आ��े, जो अधिकृत MSP बेसलाईनवर किंवा त्याहून अधिक आहे. सरकारी APMC खरेदी मंड्या मार्च आणि एप्रिल दरम्यान पूर्णपणे सुरू आहेत. आता विक्री केल्यास ओलावा-कपातीचा दंड आकारला जात नाही (जर ओलावा &le; 12% असेल) आणि २४ तासांच्या आत थेट DBT जमा होतो. मे नंतर साठा करून ठेवल्यास हवामानामुळे मालाची गुणवत्ता बिघडण्याचा धोका आणि खाजगी मिलच्या किमती घसरण्याचा धोका संभवतो.",
    "gu": "વર્તમાન બજારભાવ ₹2,275–₹2,340/Qtl ચાલી રહ્યો છે, જે સત્તાવાર MSP બેઝલાઇન પર અથવા તેનાથી ઉપર છે. સરકારી APMC ખરીદી મંડીઓ માર્ચ અને એપ્રિલ દરમિયાન સંપૂર્ણપણે કાર્યરત છે. અત્યારે વેચાણ કરવાથી ભેજ-કપાત દંડમાંથી મુક્તિ મળે છે (જો ભેજ &le; 12% હોય) અને 24 કલાકની અંદર સીધી DBT ચૂકવણી થાય છે. મે પછી રોકી રાખવાથી હવામાન બગડવાનું જોખમ અને ખાનગી મિલના ભાવ ઘટવાનું જોખম રહે છે.",
    "bn": "বর্তমান বাজারদর ₹2,275–₹2,340/Qtl-এ লেনদেন হচ্ছে, যা অফিসিয়াল MSP বেসলাইনের সমান বা তার উপরে। সরকারি APMC ক্রয় মান্ডিগুলি মার্চ এবং এপ্রিল মাসে সম্পূর্ণরূপে সচল থাকে। এই মুহূর্তে বিক্রি করলে কোনো আর্দ্রতা-ছাড়ের জরিমানা থাকে না (যদি আর্দ্রতা &le; 12% হয়) এবং ২৪ ঘন্টার মধ্যে সরাসরি DBT বিতরণ নিশ্চিত হয়। মে মাসের পরে ধরে রাখলে আবহাওয়া জনিত অবনতির ঝুঁকি এবং প্রাইভেট মিলের দাম হ্র��সের আশঙ্কা থাকে।",
    "te": "ప్రస్తుత మార్కెట్ ధర ₹2,275–₹2,340/Qtl వద్ద ట్రేడవుతోంది, ఇది అధికారిక MSP బేస్‌లైన్ వద్ద లేదా అంతకంటే ఎక్కువగా ఉంది. ప్రభుత్వ APMC కొనుగోలు మందులు మార్చి మరియు ఏప్రిల్ నెలల్లో పూర్తిగా పనిచేస్తాయి. ఇప్పుడే అమ్మడం వల్ల తేమ కోత జరిమానాలు ఉండవు (తేమ &le; 12% ఉంటే) మరియు 24 గంటలలోపు నేరుగా DBT బదిలీ చేయబడుతుంది. మే నెల దాటి నిల్వ ఉంచితే వాతావరణం వల్ల నాణ్యత కోల్పోయే ప్రమాదం మరియు ప్రైవేట్ మిల్లుల ధరలు తగ్గే రిస్క్ ఉంటుంది.",
    "ta": "தற்போதைய சந்தை விலை ₹2,275–₹2,340/Qtl என வர்த்தகமாகிறது, இது அதிகாரப்பூர்வ MSP அடிப்படையிலია அல்லது அதற்கு மேல் உள்ளது. அரசு APMC கொள்முதல் மார்க்கெட்டுகள் மார்ச் மற்றும் ஏப்ரல் மாதங்களில் முழுமையாகச் செயல்படுகின்றன. இப்போது விற்பது ஈரப்பதம்-கழிவுக் அபராதங்களைத் தவிர்க்கிறது (ஈரப்பதம் &le; 12% இருந்தால்) மற்றும் 24 மணி நேரத்திற்குள் நேரடி DBT வரவு வைக்கப்படுகிறது. மே மாதத்திற்குப் பிறகு வைத்திருப்பது வானிலை சேத ஆபத்தையும் தனியார் மில் விலை வீழ்ச்சியையும் ஏற்படுத்தும்.",
    "kn": "ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ₹2,275–₹2,340/Qtl ನಲ್ಲಿ ವಹಿವಾಟು ನಡೆಸುತ್ತಿದ್ದು, ಇದು ಅಧಿಕೃತ MSP ಬೇಸ್‌ಲೈನ್‌ನಲ್ಲಿದೆ ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿದೆ. ಸರ್ಕಾರಿ APMC ಖರೀದಿ ���ಂಡಿಗಳು ಮಾರ್ಚ್ ಮತ್ತು ಏಪ್ರಿಲ್‌ನಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ. ಈಗ ಮಾರಾಟ ಮಾಡುವುದರಿಂದ ಯಾವುದೇ ತೇವಾಂಶ-ರಿಯಾಯಿತಿ ದಂಡವಿರುವುದಿಲ್ಲ (ತೇವಾಂಶ &le; 12% ಇದ್ದರೆ) ಮತ್ತು 24 ಗಂಟೆಗಳ ಒಳಗೆ ನೇರ DBT ಪಾವತಿ ಸಿಗುತ್ತದೆ. ಮೇ ನಂತರ ದಾಸ್ತಾನು ಇಟ್ಟುಕೊಂಡರೆ ಹವಾಮಾನ ವೈಪರೀತ್ಯದಿಂದ ಗುಣಮಟ್ಟ ಹದಗೆಡುವ ಮತ್ತು ಖಾಸಗಿ ಮಿಲ್ ಬೆಲೆ ಕುಸಿಯುವ ಅಪಾಯವಿರುತ್ತದೆ."
  },
  "12-Month Price Cycle Calendar": {
    "hi": "12-महीने का मूल्य चक्र कैलेंडर",
    "pa": "12-ਮਹੀਨੇ ਦਾ ਕੀਮਤ ਚੱਕਰ ਕੈਲੰਡਰ",
    "mr": "१२-महिन्यांचे किंमत चक्र कॅलेंडर",
    "gu": "૧૨-મહિનાનું કિંમત ચક્ર કેલેન્ડર",
    "bn": "১২-মাসের মূল্য চক্র ক্যালেন্ডার",
    "te": "12-నెలల ధరల చక్రం క్యాలెండర్",
    "ta": "12-மாத விலை சுழற்சி காலண்டர்",
    "kn": "12-ತಿಂಗಳ ಬೆಲೆ ಚ��್ರ ಕ್ಯಾಲೆಂಡರ್"
  },
  "Green = Peak Price • Amber = Harvest • Red = Low Glut": {
    "hi": "हरा = शीर्ष मूल्य • पीला = कटाई • लाल = कम आवक",
    "pa": "ਹਰਾ = ਸਿਖਰ ਕੀਮਤ • ਪੀਲਾ = ਵਾਢੀ • ਲਾਲ = ਘੱਟ ਆਵਕ",
    "mr": "हिरवा = कमाल किंमत • पिवळा = कापणी • लाल = कमी आवक",
    "gu": "લીલો = સર્વોચ્ચ કિંમત • પીળો = લણણી • લાલ = ઓછી આવક",
    "bn": "সবুজ = সর্বোচ্চ মূল্য • হলুদ = কাটা • লাল = কম গ্লুট",
    "te": "ఆకుపచ్చ = గరిష్ట ధర • పసుపు = కోత • ఎరుపు = తక్కువ రాక",
    "ta": "பச்சை = உச்ச விலை • மஞ்சள் = அறுவடை • சிவப்பு = குறைந்த வரத்து",
    "kn": "ಹಸಿರು = ಗರಿಷ್ಠ ಬೆಲೆ • ಹಳದು = ಕಟಾವು • ಕೆಂಪು = ಕಡಿಮೆ ಗ್ಲುಟ್"
  },
  "Smart Selling Guidelines": {
    "hi": "���्मार्ट बिक्री दिशानिर्देश",
    "pa": "ਸਮਾਰਟ ਵਿਕਰੀ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼",
    "mr": "स्मार्ट विक्री मार्गदर्शक तत्त्वे",
    "gu": "સ્માર્ટ વેચાણ માર્ગદર્શિકા",
    "bn": "স্মার্ট বিক্রি নির্দেশিকা",
    "te": "స్మార్ట్ అమ్మకాల మార్గదర్శకాలు",
    "ta": "ஸ்மார்ட் விற்பனை வழிகாட்டுதல்கள்",
    "kn": "ಸ್ಮಾರ್ಟ್ ಮಾರಾಟ ಮಾರ್ಗಸೂಚಿಗಳು"
  },
  "How top farmers gain +8% to +14% extra margin": {
    "hi": "शीर्ष किसान +8% से +14% अतिरिक्त मार्जिन कैसे प्राप्त करते हैं",
    "pa": "ਚੋਟੀ ਦੇ ਕਿਸਾਨ ਕਿਵੇਂ +8% ਤੋਂ +14% ਵਾਧੂ ਮਾਰਜਨ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹਨ",
    "mr": "अव्वल शेतकरी +8% ते +14% अतिरिक्त नफा कसा मिळवतात",
    "gu": "ટોચના ખેડૂતો +8% થી +14% વધારાનું માર્જિન કેવી રીતે મેળવે છે",
    "bn": "শীর্ষ কৃষকরা কীভাবে +8% থেকে +14% অতিরিক্ত মার্জিন পান",
    "te": "టాప్ రైతులు +8% నుండి +14% అదనపు మార్జిన్‌ను ఎలా పొందుతారు",
    "ta": "சிறந்த விவசாயிகள் எவ்வாறு +8% முதல் +14% கூடுதல் லாபம் பெறுகிறார்கள்",
    "kn": "ಉತ್ತಮ ರೈತರು +8% ರಿಂದ +14% ಹೆಚ್ಚುವರಿ ಲಾಭವನ್ನು ಹೇಗೆ ಪಡೆಯುತ್ತಾರೆ"
  },
  "Pre-Book Slot Early:": {
    "hi": "स्लॉट पहले ही प्री-बुक करें:",
    "pa": "슬ॉट ਪਹਿਲਾਂ ਹੀ ਪ੍ਰੀ-ਬੁੱਕ ਕਰੋ:",
    "mr": "स्लॉट अगोदरच बुक करा:",
    "gu": "સ્લોટ અગાઉથી પ્રી-બુક કરો:",
    "bn": "আগে থেকেই স্লট প্রী-বুক করুন:",
    "te": "స్లాట్‌ను ముందే బుక్ చే��ుకోండి:",
    "ta": "ஸ்லாட்டை முன்கூட்டியே முன்பதிவு செய்யுங்கள்:",
    "kn": "ಸ್ಲಾಟ್ ಅನ್ನು ಮುಂಚಿತವಾಗಿ ಬುಕ್ ಮಾಡಿ:"
  },
  "Avoid distress selling at the gate. Book 3-5 days in advance via KISAN-Q to lock verified mandi rates.": {
    "hi": "गेट पर मजबूरी में बिक्री से बचें। सत्यापित मंडी दरों को लॉक करने के लिए KISAN-Q के माध्यम से 3-5 दिन पहले बुक करें।",
    "pa": "ਗੇਟ 'ਤੇ ਮਜਬੂਰੀ ਵਿੱਚ ਵੇਚਣ ਤੋਂ ਬਚੋ। ਪ੍ਰਮमाणਿਤ ਮੰਡੀ ਰੇਟਾਂ ਨੂੰ ਲੌਕ ਕਰਨ ਲਈ KISAN-Q ਰਾਹੀਂ 3-5 ਦਿਨ ਪਹਿਲਾਂ ਬੁੱਕ ਕਰੋ।",
    "mr": "गेटवर नाइिलाजाने होणारी विक्री टाळा. सत्यापित मंडी दर लॉक करण्यासाठी KISAN-Q द्वारे ३-५ दिवस आधी बुक करा.",
    "gu": "ગેટ પર મજબૂરીમાં વેચાણ ટાળો. ચકાસાયેલ મંડી દર લૉક કરવા માટે KISAN-Q દ્વારા 3-5 દિવસ અગાઉ બુક કરો.",
    "bn": "গেটে বাধ্য হয়ে বিক্রি এড়িয়ে চলুন। যাচাইকৃত মান্ডি দর লক করতে KISAN-Q এর মাধ্যমে ৩-৫ দিন আগে বুক করুন।",
    "te": "గేట్ వద్ద ఆందోళనకర అమ్మకాలను నివారించండి. ధృవీకరించబడిన మండి ధరలను లాక్ చేయడానికి KISAN-Q ద్వారా 3-5 రోజులు ముందే బుక్ చేసుకోండి.",
    "ta": "வாயிலில் அவசர விற்பனையைத் தவிர்க்கவும். சரிபார்க்கப்பட்ட mandi விலைகளைப் பூட்ட KISAN-Q வழியாக 3-5 நாட்களுக்கு முன்பே முன்பதிவு செய்யவும்.",
    "kn": "ಗೇಟ್‌ನಲ್ಲಿ ಆತುರದ ಮಾರಾಟವನ್ನು ತಪ್ಪಿಸಿ. ಪರಿಶೀಲಿಸಿದ mandi ದರಗಳನ್ನು ಲಾಕ್ ಮಾಡಲು KISAN-Q ಮೂಲಕ 3-5 ದಿನಗಳ ಮುಂಚಿತವಾಗಿ ಬುಕ್ ಮಾಡಿ."
  },
  "Test Moisture Before Loading:": {
    "hi": "लोड करने से पहले नमी की जांच करें:",
    "pa": "ਲੋਡ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਨਮੀ ਦੀ ਜਾਂਚ ਕਰੋ:",
    "mr": "लोड करण्यापूर्वी ओलावा तपासा:",
    "gu": "લોડ કરતા પહેલા ભેજ ચકાસો:",
    "bn": "লোড করার আগে আর্দ্রতা পরীক্ষা করুন:",
    "te": "లోడ్ చేసే ముందు తేమను పరీక్షించండి:",
    "ta": "ஏற்றுவதற்கு முன் ஈரப்பதத்தைச் சோதிக்கவும்:",
    "kn": "ಲೋಡ್ ಮಾಡುವ ಮೊದಲು ತೇವಾಂಶವನ್ನು ಪರೀಕ್ಷಿಸಿ:"
  },
  "Sun-dry grain to &le;12% moisture to guarantee Grade-A premium price and skip assay deductions.": {
    "hi": "ग्रेड-ए प्रीमियम मूल्य की गारंटी देने और परख कटौती से बचने के लिए अनाज को धूप म��ं &le;12% नमी तक सुखाएं।",
    "pa": "ਗ੍ਰੇਡ-ਏ ਪ੍ਰੀਮੀਅਮ ਕੀਮਤ ਦੀ ਗਰੰਟੀ ਦੇਣ ਅਤੇ ਪਰਖ ਕਟੌਤੀ ਤੋਂ ਬਚਣ ਲਈ ਦਾਣਿਆਂ ਨੂੰ ਧੁੱਪ ਵਿੱਚ &le;12% ਨਮੀ ਤੱਕ ਸੁਕਾਓ।",
    "mr": "ग्रेड-ए प्रीमियम किंमतीची हमी देण्यासाठी आणि प्रतवारी कपात टाळण्यासाठी धान्य उन्हात &le;12% ओलाव्यापर्यंत वाळवा.",
    "gu": "ગ્રેડ-એ પ્રીમિયમ કિંમતની ખાતરી કરવા અને એસે કપાત ટાળવા માટે અનાજને તડકામાં &le;12% ભેજ સુધી સૂકવો.",
    "bn": "গ্রেড-এ প্রিমিয়াম মূল্যের গ্যারান্টি দিতে এবং অ্যাস কমানো এড়াতে শস্য রোদে &le;12% আর্দ্রতা পর্যন্ত শুকিয়ে নিন।",
    "te": "గ్రేడ్-ఎ ప్రీమియం ధరకు హామీ ఇవ్వడానికి మరియు ఎస్సే తగ్��ింపులను నివారించడానికి ధాన్యాన్ని ఎండలో &le;12% తేమ ఉండేలా ఆరబెట్టండి.",
    "ta": "கிரேடு-ஏ பிரீமியம் விலைக்கு உத்தரவாதம் அளிக்கவும், மதிப்பீட்டுக் கழிவுகளைத் தவிர்க்கவும் தானியங்களை வெயிலில் &le;12% ஈரப்பதம் வரை உலர வைக்கவும்.",
    "kn": "ಗ್ರೇಡ್-ಎ ಪ್ರೀಮಿಯಂ ಬೆಲೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಮತ್ತು ಅಸ್ಸೇ ಕಡಿತವನ್ನು ತಪ್ಪಿಸಲು ಧಾನ್ಯವನ್ನು ಬಿಸಿಲಿನಲ್ಲಿ &le;12% ತೇವಾಂಶ ಬರುವವರೆಗೆ ಒಣಗಿಸಿ."
  },
  "Sell Before July Monsoon:": {
    "hi": "जुलाई मानसून से पहले बेचें:",
    "pa": "ਜੁਲਾਈ ਦੇ ਮਾਨਸੂਨ ਤੋਂ ਪਹਿਲਾਂ ਵੇਚੋ:",
    "mr": "जुलै मान्सूनपूर्वी विक्री करा:",
    "gu": "જુલાઈ ચોમાસા પહેલા ��ેચો:",
    "bn": "জুলাই মৌসুমের আগে বিক্রি করুন:",
    "te": "జూలై వర్షాకాలానికి ముందే అమ్మండి:",
    "ta": "ஜூலை பருவமழைக்கு முன் விற்கவும்:",
    "kn": "ಜುಲೈ ಮಳೆಗಾಲಕ್ಕೂ ಮೊದಲು ಮಾರಾಟ ಮಾಡಿ:"
  },
  "Unscientific home storage causes 4-7% weight and fungus loss. Selling in the rabi/kharif window is safest.": {
    "hi": "अवैज्ञानिक घरेलू भंडारण से 4-7% वजन और फंगस का नुकसान होता है। रबी/खरीफ की अवधि में बेचना सबसे सुरक्षित है।",
    "pa": "ਗੈਰ-ਵਿਗਿਆਨਕ ਘਰੇਲੂ ਭੰਡਾਰਨ ਕਾਰਨ 4-7% ਭਾਰ ਅਤੇ ਫੰਗਸ ਦਾ ਨੁਕਸਾਨ ਹੁੰਦਾ ਹੈ। ਰਵੀ/ਖਰੀਫ ਵੰਡੋ ਵਿੱਚ ਵੇਚਣਾ ਸਭ ਤੋਂ ਸੁਰੱਖਿਅਤ ਹੈ।",
    "mr": "अवैज्ञानिक घरगुती साठवणुकीमुळे ४-७% वजन आणि बुरशीचे नुकसान होते. रबी/खरीप हंगामात विक्री करणे सर्वात सुरक्षित आहे.",
    "gu": "અવૈજ્ઞાનિક ઘરેલું સંગ્રહને કારણે 4-7% વજન અને ફૂગનું નુકસાન થાય છે. રવિ/ખરીફ વિન્ડોમાં વેચાણ કરવું સૌથી સુરક્ષિત છે.",
    "bn": "অবৈজ্ঞানিক গৃহস্থালী সংরক্ষণের কারণে ৪-৭% ওজন এবং ছত্রাকজনিত ক্ষতি হয়। রবি/খরিফ উইন্ডোতে বিক্রি করা সবচেয়ে নিরাপদ।",
    "te": "శాస్త్రీయ పద్ధతిలో నిల్వ చేయకపోవడం వల్ల 4-7% బరువు మరియు శిలీంధ్ర నష్టం జరుగుతుంది. రబీ/ఖరీఫ్ విండోలో అమ్మడం అత్యంత సురక్షితం.",
    "ta": "அறிவியல் பூர்வமற்ற வீட்டு சேமிப்பு 4-7% எடை மற்றும் பூஞ்சை இழப்பை ஏற்படுத்துகிறது. ரபி/காரி���ப் காலத்திற்குள் விற்பது மிகவும் பாதுகாப்பானது.",
    "kn": "ಶಾಸ್ತ್ರೀಯವಲ್ಲದ ಮನೆ ಶೇಖರಣೆಯಿಂದ 4-7% ತೂಕ ಮತ್ತು ಶಿಲೀಂಧ್ರ ನಷ್ಟವಾಗುತ್ತದೆ. ರಬಿ/ಖಾರಿಫ್ ಅವಧಿಯಲ್ಲಿ ಮಾರಾಟ ಮಾಡುವುದು ಅತ್ಯಂತ ಸುರಕ್ಷಿತ."
  },
  "Compare Mandi vs e-NAM:": {
    "hi": "मंडी बनाम e-NAM की तुलना करें:",
    "pa": "ਮੰди ਬਨਾਮ e-NAM ਦੀ ਤੁلا ਕਰੋ:",
    "mr": "मंडी विरुद्ध e-NAM ची तुलना करा:",
    "gu": "મંડી અને e-NAM ની સરખામણી કરો:",
    "bn": "মন্ডি বনাম e-NAM তুলনা করুন:",
    "te": "మండి మరియు e-NAM లను పోల్చండి:",
    "ta": "மண்டி மற்றும் e-NAM ஒப்பீடு:",
    "kn": "ಮಂಡಿ ಮತ್ತು e-NAM ��ೋಲಿಕೆ ಮಾಡಿ:"
  },
  "Check nearby APMC mandis on this portal — inter-mandi price differences often pay for transportation.": {
    "hi": "इस पोर्टल पर नजदीकी APMC मंडियों की जाँच करें — मंडियों के बीच कीमतों का अंतर अक्सर परिवहन का खर्च निकाल देता है।",
    "pa": "ਇਸ ਪੋਰਟਲ 'ਤੇ ਨੇੜਲੀਆਂ APMC ਮੰਡੀਆਂ ਦੀ ਜਾਂਚ ਕਰੋ — ਮੰਡੀਆਂ ਵਿਚਕਾਰ ਕੀਮਤਾਂ ਦਾ ਅੰਤਰ ਅਕਸਰ ਆਵਾਜਾਈ ਦਾ ਖਰਚਾ ਪੂਰਾ ਕਰ ਦਿੰਦਾ ਹੈ।",
    "mr": "या पोर्टलवर जवळील APMC मंड्या तपासा — मंडी-मंडीमधील किंमतींमधील फरक अनेकदा वाहतूक खर्च भागवतो.",
    "gu": "આ પોર્ટલ પર નજીકની APMC મંડીઓ તપાસો — મંડીઓ વચ્ચેના ભાવના તફાવતથી ઘણીવાર પરિવહનનો ખર્ચ નીકળી જાય છે.",
    "bn": "এই পোর্টালে নিকট���র্তী APMC mandi গুলি চেক করুন — একমান্ডি থেকে অন্যমান্ডির মূল্যপার্থক্য প্রায়ই যাতায়াতের খরচ তুলে দেয়।",
    "te": "ఈ పోర్టల్‌లో సమీపంలోని APMC మండిలను తనిఖీ చేయండి — మండిల మధ్య ధరల వ్యత్యాసం తరచుగా రవాణా ఖర్చులను భర్తీ చేస్తుంది.",
    "ta": "இந்த போர்ட்டலில் அருகிலுள்ள APMC mandis-ஐ சரிபார்க்கவும் — மண்டிவிலை வித்தியாசங்கள் பெரும்பாலும் போக்குவரத்துச் செலவை ஈடுகட்டும்.",
    "kn": "ಈ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಹತ್ತಿರದ APMC ಮಂಡಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ — ಮಂಡಿಗಳ ನಡುವಿನ ಬೆಲೆ ವ್ಯತ್ಯಾಸವು ಸಾಮಾನ್ಯವಾಗಿ ಸಾರಿಗೆ ವೆಚ್ಚವನ್ನು ಭರಿಸುತ್ತದೆ."
  },
  "View Full Interactive Report ↗": {
    "hi": "पूर्ण इंटरैक्टिव रिपोर्ट देखें ↗",
    "pa": "ਪੂਰੀ ਇੰਟਰਐਕਟਿਵ ਰਿਪੋਰਟ ਦੇਖੋ ↗",
    "mr": "संपूर्ण परस्परसंवादी अहवाल पहा ↗",
    "gu": "સંપૂર્ણ ઇન્ટરેક્ટિવ રિપોર્ટ જુઓ ↗",
    "bn": "সম্পূর্ণ ইন্টারেক্টিভ রিপোর্ট দেখুন ↗",
    "te": "పూర్తి ఇంటరాక్టివ్ నివేదికను వీక్షించండి ↗",
    "ta": "முழுமையான ஊடாடும் அறிக்கையைக் காண்க ↗",
    "kn": "ಸಂಪೂರ್ಣ ಸಂವಾದಾತ್ಮಕ ವರದಿಯನ್ನು ವೀಕ್ಷಿಸಿ ↗"
  },
  "Official Multi-Year MSP Hike & Price Range Table (2020–2026)": {
    "hi": "आधिकारिक बहु-वर्षीय MSP वृद्धि और मूल्य सीमा तालिका (2020–2026)",
    "pa": "ਅਧਿਕਾਰਤ ਬਹੁ-ਸਾਲਾ MSP ਵਾਧਾ ਅਤੇ ਕੀਮਤ ਰੇਂਜ ਸਾਰਣੀ (2020–2026)",
    "mr": "अधिकृत बहु-वर्षीय MSP वाढ आणि किंमत श्रेणी तक्ता (२०२०–२०२६)",
    "gu": "સત્તાવાર બહુ-વર્ષીય MSP વધારો અને ભાવ શ્રેણી કોષ્ટક (૨૦૨૦–૨૦૨૬)",
    "bn": "অফিসিয়াল বহু-বর্ষীয় MSP বৃদ্ধি এবং মূল্য পরিসীমা সারণী (২০২০–২০২৬)",
    "te": "అధికారిక బహుళ-సంవత్సరాల MSP పెంపు & ధరల శ్రేణి పట్టిక (2020–2026)",
    "ta": "அதிகாரப்பூர்வ பல ஆண்டு MSP உயர்வு & விலை வரம்பு அட்டவணை (2020–2026)",
    "kn": "ಅಧಿಕೃತ ಬಹು-ವರ್ಷದ MSP ಏರಿಕೆ ಮತ್ತು ಬೆಲೆ ಶ್ರೇಣಿ ಕೋಷ್ಟಕ (2020–2026)"
  },
  "Comprehensive Government procurement records and annual hike comparisons": {
    "hi": "व्यापक सरकारी खरीद रिकॉर्ड और वार्षिक वृद्धि तुलना",
    "pa": "ਵਿਆਪਕ ਸਰਕਾਰੀ ਖਰੀਦ ਰਿਕਾਰਡ ਅਤੇ ਸਾਲਾ��ਾ ਵਾਧੇ ਦੀਆਂ ਤੁਲਨਾਵਾਂ",
    "mr": "सर्वसमावेशक शासकीय खरेदी रेकॉर्ड आणि वार्षिक वाढ तुलना",
    "gu": "વ્યાપક સરકારી ખરીદી રેકોર્ડ અને વાર્ષિક વધારાની સરખામણીઓ",
    "bn": "বিস্তারিত সরকারি ক্রয় রেকর্ড এবং বার্ষিক বৃদ্ধির তুলনা",
    "te": "సమగ్ర ప్రభుత్వ కొనుగోలు రికార్డులు మరియు వార్షిక పెంపు పోలికలు",
    "ta": "விரிவான அரசு கொள்முதல் பதிவுகள் மற்றும் வருடாந்திர உயர்வு ஒப்பீடுகள்",
    "kn": "ಸಮಗ್ರ ಸರ್ಕಾರಿ ಖರೀದಿ ದಾಖಲೆಗಳು ಮತ್ತು ವಾರ್ಷಿಕ ಏರಿಕೆಯ ಹೋಲಿಕೆಗಳು"
  },
  "All Crops / All Years": {
    "hi": "सभी फसलें / सभी वर्ष",
    "pa": "ਸਾਰੀਆਂ ਫਸਲਾਂ / ਸਾਰੇ ਸਾਲ",
    "mr": "सर्व पिके / सर्व वर्षे",
    "gu": "બધા પાક / બધા વર્ષો",
    "bn": "সকল ফসল / সকল বছর",
    "te": "అన్ని పంటలు / అన్ని సంవత్సరాలు",
    "ta": "அனைத்து பயிர்கள் / அனைத்து ஆண்டுகள்",
    "kn": "ಎಲ್ಲಾ ಬೆಳೆಗಳು / ಎಲ್ಲಾ ವರ್ಷಗಳು"
  },
  "Crop Name": {
    "hi": "फसल का नाम",
    "pa": "ਫਸਲ ਦਾ ਨਾਮ",
    "mr": "पिकाचे नाव",
    "gu": "પાકનું નામ",
    "bn": "ফসলের নাম",
    "te": "పంట పేరు",
    "ta": "பயிர் பெயர்",
    "kn": "ಬೆಳೆಯ ಹೆಸರು"
  },
  "2025-26 (Latest)": {
    "hi": "2025-26 (नवीनतम)",
    "pa": "2025-26 (ਤਾਜ਼ਾ)",
    "mr": "२०२५-२६ (नवीनतम)",
    "gu": "૨૦૨૫-૨૬ (नवीनतम)",
    "bn": "২০২৫-২৬ (সর্বশেষ)",
    "te": "2025-26 (తాజా)",
    "ta": "2025-26 (சமீபத்திய)",
    "kn": "2025-26 (ಇತ್ತೀಚಿನ)"
  },
  "5-Year Hike (+₹)": {
    "hi": "5-वर्षीय वृद्धि (+₹)",
    "pa": "5-ਸਾਲਾ ਵਾਧਾ (+₹)",
    "mr": "५-वर्षीय वाढ (+₹)",
    "gu": "૫-વર્ષીય વધારો (+₹)",
    "bn": "৫-বছরের বৃদ্ধি (+₹)",
    "te": "5-సంవత్సరాల పెంపు (+₹)",
    "ta": "5 ஆண்டு உயர்வு (+₹)",
    "kn": "5-ವರ್ಷದ ಏರಿಕೆ (+₹)"
  },
  "Best Sell Month": {
    "hi": "बेचने का सबसे अच्छा महीना",
    "pa": "ਵੇਚਣ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਮਹੀਨਾ",
    "mr": "विक्रीसाठी सर्वोत्तम महिना",
    "gu": "વેચાણ માટેનો શ્રેષ્ઠ મહિનો",
    "bn": "বিক্রির শ্রেষ্ঠ মাস",
    "te": "విక్రయించడానికి ఉత్తమ నెల",
    "ta": "விற்பனைக்கு சிறந்த மாதம்",
    "kn": "ಮಾರಾಟ ಮಾಡಲು ಉತ್ತಮ ತಿಂಗಳು"
  },
  "March &ndash; April": {
    "hi": "मार्च &ndash; अप्रैल",
    "pa": "ਮਾਰਚ &ndash; ਅਪ੍ਰੈਲ",
    "mr": "मार्च &ndash; एप्रिल",
    "gu": "માર્ચ &ndash; એપ્રિલ",
    "bn": "মার্চ &ndash; এপ্রিল",
    "te": "మార్చి &ndash; ఏప్రిల్",
    "ta": "மார்ச் &ndash; ஏப்ரல்",
    "kn": "ಮಾರ್ಚ್ &ndash; ಏಪ್ರಿಲ್"
  },
  "🍚 Paddy Common (धान)": {
    "hi": "🍚 धान कॉमन (धान)",
    "pa": "🍚 ਝੋਨਾ ਆਮ (धान)",
    "mr": "🍚 भात सामान्य (धा���)",
    "gu": "🍚 ડાંગર સામાન્ય (धान)",
    "bn": "🍚 ধান সাধারণ (धान)",
    "te": "🍚 ధాన్యం సాధారణ (धान)",
    "ta": "🍚 நெல் பொது (धान)",
    "kn": "🍚 ಭತ್ತ ಸಾಮಾನ್ಯ (धान)"
  },
  "Nov &ndash; Dec": {
    "hi": "नवंबर &ndash; दिसंबर",
    "pa": "ਨਵੰਬਰ &ndash; ਦਸੰਬਰ",
    "mr": "नोव्हेंबर &ndash; डिसेंबर",
    "gu": "નવેમ્બર &ndash; ડિસેમ્બર",
    "bn": "নভেম্বর &ndash; ডিসেম্বর",
    "te": "నవంబర్ &ndash; డిసెంబర్",
    "ta": "நவம்பர் &ndash; டிசம்பர்",
    "kn": "ನವೆಂಬರ್ &ndash; ಡಿಸೆಂಬರ್"
  },
  "March &ndash; May": {
    "hi": "मार्च &ndash; मई",
    "pa": "ਮਾਰਚ &ndash; ਮਈ",
    "mr": "मार्च &ndash; मे",
    "gu": "માર્ચ &ndash; મે",
    "bn": "মার্চ &ndash; মে",
    "te": "మార్చి &ndash; మే",
    "ta": "மார்ச் &ndash; மே",
    "kn": "ಮಾರ್ಚ್ &ndash; ಮೇ"
  },
  "Oct &ndash; Nov": {
    "hi": "अक्टूबर &ndash; नवंबर",
    "pa": "ਅਕਤੂਬਰ &ndash; ਨਵੰਬਰ",
    "mr": "ऑक्टोबर &ndash; नोव्हेंबर",
    "gu": "ઓક્ટોબર &ndash; નવેમ્બર",
    "bn": "অক্টোবর &ndash; নভেম্বর",
    "te": "అక్టోబర్ &ndash; నవంబర్",
    "ta": "அக்டோபர் &ndash; நவம்பர்",
    "kn": "ಅಕ್ಟೋಬರ್ &ndash; ನವೆಂಬರ್"
  },
  "☁️ Cotton Medium Staple": {
    "hi": "☁️ कपास मध्यम स्टैपल",
    "pa": "☁️ ਕਪਾਹ ਮੱਧਮ ਸਟੇਪਲ",
    "mr": "☁️ कापूस मध्यम लांबीचा",
    "gu": "☁️ કપાસ મધ્યમ સ્ટેપલ",
    "bn": "☁️ তুলা মাঝারি স্টেপল",
    "te": "☁️ పత్తి మధ్యస్థ staple",
    "ta": "☁️ பருத்தி நடுத்தர ஸ்டேபிள்",
    "kn": "☁️ ಹತ್ತಿ ಮಧ್ಯಮ ಸ್ಟೇಪಲ್"
  },
  "Jan &ndash; Feb": {
    "hi": "जनवरी &ndash; फरवरी",
    "pa": "ਜਨਵਰੀ &ndash; ਫਰਵਰੀ",
    "mr": "जानेवारी &ndash; फेब्रुवारी",
    "gu": "જાન્યુઆરી &ndash; ફેબ્રુઆરી",
    "bn": "জানুয়ারি &ndash; ফেব্রুয়ারি",
    "te": "జనవరి &ndash; ఫిబ్రవరి",
    "ta": "ஜனவரி &ndash; பிப்ரவரி",
    "kn": "ಜನವರಿ &ndash; ಫೆಬ್ರವರಿ"
  },
  "🫘 Gram / Chana (चना)": {
    "hi": "🫘 चना (चना)",
    "pa": "🫘 ਛੋਲੇ / ਚਨਾ (चना)",
    "mr": "🫘 हरभरा / चना (चना)",
    "gu": "🫘 ચણા / ચના (चना)",
    "bn": "🫘 ছোলার / ছানা (चना)",
    "te": "🫘 శనగలు / చనా (चना)",
    "ta": "🫘 கொண்டைக்கடலை / சனா (चना)",
    "kn": "🫘 ಕಡಲೆ / ಚನಾ (चना)"
  },
  "April &ndash; June": {
    "hi": "अप्रैल &ndash; जून",
    "pa": "ਅਪ੍ਰੈਲ &ndash; ਜੂਨ",
    "mr": "एप्र��ल &ndash; जून",
    "gu": "એપ્રિલ &ndash; જૂન",
    "bn": "এপ্রিল &ndash; জুন",
    "te": "ఏప్రిల్ &ndash; జూన్",
    "ta": "ஏப்ரல் &ndash; ஜூன்",
    "kn": "ಏಪ್ರಿಲ್ &ndash; ಜೂನ್"
  },
  "Oct &ndash; Dec": {
    "hi": "अक्टूबर &ndash; दिसंबर",
    "pa": "ਅਕਤੂਬਰ &ndash; ਦਸੰਬਰ",
    "mr": "ऑक्टोबर &ndash; डिसेंबर",
    "gu": "ઓક્ટોબર &ndash; ડિસેમ્બર",
    "bn": "অক্টোবর &ndash; ডিসেম্বর",
    "te": "అక్టోబర్ &ndash; డిసెంబర్",
    "ta": "அக்டோபர் &ndash; டிசம்பர்",
    "kn": "ಅಕ್ಟೋಬರ್ &ndash; ಡಿಸೆಂಬರ್"
  },
  "&times;": {
    "hi": "&times;",
    "pa": "&times;",
    "mr": "&times;",
    "gu": "&times;",
    "bn": "&times;",
    "te": "&times;",
    "ta": "&times;",
    "kn": "&times;"
  },
  "🤖": {
    "hi": "🤖",
    "pa": "🤖",
    "mr": "🤖",
    "gu": "🤖",
    "bn": "🤖",
    "te": "🤖",
    "ta": "🤖",
    "kn": "🤖"
  },
  "Kisan-Q Mobile APK (v1.0.4)": {
    "hi": "KISAN-Q मोबाइल APK (v1.0.4)",
    "pa": "KISAN-Q ਮੋਬਾਈਲ APK (v1.0.4)",
    "mr": "KISAN-Q मोबाईल APK (v1.0.4)",
    "gu": "KISAN-Q મોબાઇલ APK (v1.0.4)",
    "bn": "KISAN-Q মোবাইল APK (v1.0.4)",
    "te": "KISAN-Q మొబైల్ APK (v1.0.4)",
    "ta": "KISAN-Q மொபைல் APK (v1.0.4)",
    "kn": "KISAN-Q ಮೊಬೈಲ್ APK (v1.0.4)"
  },
  "Size: 4.5 MB • Android 8.0+": {
    "hi": "साइज: 4.5 MB • एंड्रॉइड 8.0+",
    "pa": "ਸਾਈਜ਼: 4.5 MB • ਐਂਡਰਾਇਡ 8.0+",
    "mr": "साइज: 4.5 MB • अँड्रॉइड 8.0+",
    "gu": "સાઇઝ: 4.5 MB • એન્ડ્રોઇડ 8.0+",
    "bn": "সাইজ: 4.5 MB • অ্যান্ড্রয়েড 8.0+",
    "te": "పరిమాణం: 4.5 MB • ఆండ్రాయిడ్ 8.0+",
    "ta": "அளவு: 4.5 MB • ஆண்ட்ராய்டு 8.0+",
    "kn": "ಗಾತ್ರ: 4.5 MB • ಆಂಡ್ರಾಯ್ಡ್ 8.0+"
  },
  "📱": {
    "hi": "📱",
    "pa": "📱",
    "mr": "📱",
    "gu": "📱",
    "bn": "📱",
    "te": "📱",
    "ta": "📱",
    "kn": "📱"
  },
  "📦": {
    "hi": "📦",
    "pa": "📦",
    "mr": "📦",
    "gu": "📦",
    "bn": "📦",
    "te": "📦",
    "ta": "📦",
    "kn": "📦"
  },
  "Full Source Code": {
    "hi": "फुल सोर्स कोड",
    "pa": "ਪੂਰਾ ਸੋਰਸ ਕੋਡ",
    "mr": "संपूर्ण सोर्स कोड",
    "gu": "પૂર્ણ સોર્સ કોડ",
    "bn": "সম্পূর্ণ সোর্স কোড",
    "te": "పూర్తి సోర్స్ కోడ్",
    "ta": "முழு மூலக் குறியீடு (Source Code)",
    "kn": "ಸಂಪೂರ್ಣ ಸೋರ್ಸ್ ಕೋಡ್"
  },
  "Farmer Mobile App Code (.ZIP)": {
    "hi": "किसान मोबाइल ऐप कोड (.ZIP)",
    "pa": "ਕਿਸਾਨ ਮੋਬਾਈਲ ਐਪ ਕੋਡ (.ZIP)",
    "mr": "शेतकरी मोबाईल ॲप कोड (.ZIP)",
    "gu": "ખેડૂત મોબાઇલ એપ્લિકેશન કોડ (.ZIP)",
    "bn": "কৃষক মোবাইল অ্যাপ কোড (.ZIP)",
    "te": "రైతు మొబైల్ యాప్ కోడ్ (.ZIP)",
    "ta": "உழவர் மொபைல் செயலி குறியீடு (.ZIP)",
    "kn": "ರೈತ ಮೊಬೈಲ್ ಆ್ಯಪ್ ಕೋಡ್ (.ZIP)"
  },
  "Complete React + Vite + Tailwind source bundle": {
    "hi": "कम्प्लीट React + Vite + Tailwind सोर्स बंडल",
    "pa": "ਪੂਰਾ React + Vite + Tailwind ਸੋਰਸ ਬੰਡਲ",
    "mr": "संपूर्ण React + Vite + Tailwind सोर्स बंडल",
    "gu": "સંપૂર્ણ React + Vite + Tailwind સોર્સ બંડલ",
    "bn": "সম্পূর্ণ React + Vite + Tailwind সোর্স বান্ডিল",
    "te": "పూర్తి React + Vite + Tailwind సోర్స్ బండిల్",
    "ta": "முழுமையான React + Vite + Tailwind மூலத் தொகுப்பு (Bundle)",
    "kn": "ಸಂಪೂರ್ಣ React + Vite + Tailwind ಸೋರ್ಸ್ ಬಂಡಲ್"
  },
  "Size: ~4.5 MB": {
    "hi": "साइज: ~4.5 MB",
    "pa": "ਸਾਈਜ਼: ~4.5 MB",
    "mr": "साइज: ~4.5 MB",
    "gu": "સાઇઝ: ~4.5 MB",
    "bn": "সাইজ: ~4.5 MB",
    "te": "పరిమాణం: ~4.5 MB",
    "ta": "அளவு: ~4.5 MB",
    "kn": "ಗಾತ್ರ: ~4.5 MB"
  },
  "Mandi Server Bundle": {
    "hi": "मंडी सर्वर बंडल",
    "pa": "ਮંਡੀ ਸਰਵਰ ਬੰਡਲ",
    "mr": "मंडी सर्व्हर बंडल",
    "gu": "મંડી સર્વર બંડલ",
    "bn": "মন্ডি সার্ভার বান্ডিল",
    "te": "మండీ సర్వర్ బండిల్",
    "ta": "மண்டி சர்வர் பண்டிள்",
    "kn": "ಮಂಡಿ ಸರ್ವರ್ ಬಂಡಲ್"
  },
  "KISAN-Q Web Portal (.ZIP)": {
    "hi": "KISAN-Q वेब पोर्टल (.ZIP)",
    "pa": "KISAN-Q ਵੈബ് ਪੋਰਟਲ (.ZIP)",
    "mr": "KISAN-Q वेब पोर्टल (.ZIP)",
    "gu": "KISAN-Q વેબ પોર્ટલ (.ZIP)",
    "bn": "KISAN-Q ওয়েব পোর্টাল (.ZIP)",
    "te": "KISAN-Q వెబ్ పోర్టల్ (.ZIP)",
    "ta": "KISAN-Q வெப் போர்டல் (.ZIP)",
    "kn": "KISAN-Q ವೆಬ್ ಪೋರ್ಟಲ್ (.ZIP)"
  },
  "Express server, IVR simulator & Dynamic Scheduling engine": {
    "hi": "एक्सप्रेस सर्वर, IVR सिम्युलेटर और डायनेमिक शेड्यूलिंग इंजन",
    "pa": "ਐਕਸਪ੍ਰੈਸ ਸਰਵਰ, IVR ਸਿਮੂਲੇਟਰ ਅਤੇ ਡਾਇਨਾਮਿਕ ਸ਼ਡਿਊਲਿੰਗ ਇੰਜਣ",
    "mr": "एक्सप्रेस सर्व्हर, IVR सिम्युलेटर आणि डायनॅमिक शेड्यूलिंग इंजिन",
    "gu": "એક્સપ્રેસ સર્વર, IVR સિમ્યુલેટર અને ડાયનામિક શિડ્યુલિંગ એન્જિન",
    "bn": "এক্সপ্রেস সার্ভার, IVR সিমুলেটর এবং ডায়নামিক শিডিউলিং ইঞ্জিন",
    "te": "ఎక్స్‌ప్రెస్ సర్వర్, IVR సిమ్యులేటర్ & డైనమిక్ షెడ్యూలింగ్ ఇంజిన్",
    "ta": "எக்ஸ்பிரஸ் சர்வர், IVR சிமுலேட்டர் & டைனமிக் ஷெட்யூலிங் இன்ஜின்",
    "kn": "ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಸರ್ವರ್, IVR ಸಿಮ್ಯುಲೇಟರ್ & ಡೈನಾಮಿಕ್ ಶೆಡ್ಯೂಲಿಂಗ್ ಇಂಜಿನ್"
  },
  "Size: ~4.2 MB": {
    "hi": "आकार: ~4.2 MB",
    "pa": "ਆਕਾਰ: ~4.2 MB",
    "mr": "आकार: ~4.2 MB",
    "gu": "કદ: ~4.2 MB",
    "bn": "সাইজ: ~4.2 MB",
    "te": "పరిమాణం: ~4.2 MB",
    "ta": "அளவு: ~4.2 MB",
    "kn": "ಗಾತ್ರ: ~4.2 MB"
  },
  "Aadhaar DBT Seeding & Smart Mandi Gate Priority": {
    "hi": "आधार DBT सीडिंग और स्मार्ट मंडी गेट प्राथमिकता",
    "pa": "ਆਧਾਰ DBT ਸੀਡਿੰਗ ਅਤੇ ਸਮਾਰਟ ਮੰਡੀ ਗੇਟ ਤਰਜੀਹ",
    "mr": "आधार DBT सीडिंग आणि स्मार्ट मंड��� गेट प्राधान्य",
    "gu": "આધાર DBT સીડિંગ અને સ્માર્ટ મંડી ગેટ અગ્રતા",
    "bn": "আধার DBT সিডিং এবং স্মার্ট মান্ডি গেট প্রায়োরিটি",
    "te": "ఆధార్ DBT సీడింగ్ & స్మార్ట్ మండీ గేట్ ప్రాధాన్యత",
    "ta": "ஆதார் DBT சீடிங் & ஸ்மார்ட் மண்டி கேட் முன்னுரிமை",
    "kn": "ಆಧಾರ್ DBTSEEDING & ಸ್ಮಾರ್ಟ್ ಮಂಡಿ ಗೇಟ್ ಪ್ರಾಶಸ್ತ್ಯ"
  },
  "💡": {
    "hi": "💡",
    "pa": "💡",
    "mr": "💡",
    "gu": "💡",
    "bn": "💡",
    "te": "💡",
    "ta": "💡",
    "kn": "💡"
  },
  "Demo Mode Tip:": {
    "hi": "डेमो मोड टिप:",
    "pa": "ਡੈਮੋ ਮੋਡ ਟਿਪ:",
    "mr": "डेमो मोड टीप:",
    "gu": "ડેમો મોડ ટીપ:",
    "bn": "ডেমো মোড টিপ:",
    "te": "డెమో మోడ్ చిట్కా:",
    "ta": "ட���மோ மோட் குறிப்பு:",
    "kn": "ಡೆಮೋ ಮೋಡ್ ಸುಳಿವು:"
  },
  "Enter any 10-digit phone and click \"Send OTP\" to test instant login without waiting for telecom gateways.": {
    "hi": "कोई भी 10-अंकों का फोन नंबर दर्ज करें और टेलीकॉम गेटवे की प्रतीक्षा किए बिना तुरंत लॉगिन का परीक्षण करने के लिए \"OTP भेजें\" पर क्लिक करें।",
    "pa": "ਕੋਈ ਵੀ 10-ਅੰਕਾਂ ਦਾ ਫ਼ੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ ਅਤੇ ਟੈਲੀਕਾਮ ਗੇਟਵੇ ਦੀ ਉਡੀਕ ਕੀਤੇ ਬਿਨਾਂ ਤੁਰੰਤ ਲੌਗਇਨ ਦੀ ਜਾਂਚ ਕਰਨ ਲਈ \"OTP ਭੇਜੋ\" 'ਤੇ ਕਲیک ਕਰੋ।",
    "mr": "कोणताही १० अंकी फोन नंबर प्रविष्ट करा आणि टेलिकॉम गेटवेची प्रतीक्षा न करता झटपट लॉगइन तपासण्यासाठी \"OTP पाठवा\" वर क्लिक करा.",
    "gu": "કોઈપણ 10-અંકનો ફોન નંબર દાખલ કરો અને ટેલિકોમ ગેટવેની રાહ જોયા વિના ઇન્સ્ટન્ટ લોગિન ચકાસવા માટે \"OTP મોકલો\" પર ક્લિક કરો.",
    "bn": "যেকোনো ১০-সংখ্যার ফোন নম্বর লিখুন এবং টেলিকম গেটওয়ের জন্য অপেক্ষা না করে তাৎক্ষণিক লগইন পরীক্ষা করতে \"OTP পাঠান\" এ ক্লিক করুন।",
    "te": "ఏదైనా 10-అంకెల ఫోన్ నంబర్‌ను నమోదు చేయండి మరియు టెలికాం గేట్‌వేల కోసం వేచి ఉండకుండా తక్షణ లాగిన్‌ను పరీక్షించడానికి \"OTP పంపు\" పై క్లిక్ చేయండి.",
    "ta": "எந்தவொரு 10 இலக்க தொலைபேசி எண்ணையும் உள்ளிட்டு, டெலிகாம் கேட்வேக்களுக்காகக் காத்திருக்காமல் உடனடி உள்நுழைவைச் சோதிக்க \"OTP அனுப்ப���\" என்பதைக் கிளிக் செய்யவும்.",
    "kn": "ಯಾವುದೇ 10-ಅಂಕಿಯ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ಟೆಲಿಕಾಂ ಗೇಟ್‌ವೇಗಳಿಗಾಗಿ ಕಾಯದೆ ತಕ್ಷಣದ ಲಾಗಿನ್ ಅನ್ನು ಪರೀಕ್ಷಿಸಲು \"OTP ಕಳುಹಿಸಿ\" ಕ್ಲಿಕ್ ಮಾಡಿ."
  },
  "Landholdings < 2.0 ha automatically qualify for Fair-Share daytime weighment priority!": {
    "hi": "2.0 हेक्टेयर से कम भूमि वाले किसान स्वतः ही फेयर-शेयर दिन के समय तौल प्राथमिकता के लिए पात्र हैं!",
    "pa": "2.0 ਹੈਕਟੇਅਰ ਤੋਂ ਘੱਟ ਜ਼ਮੀਨ ਵਾਲੇ ਕਿਸਾਨ ਆਪਣੇ-ਆਪ ਫੇਅਰ-ਸ਼ੇਅਰ ਦਿਨ ਦੇ ਸਮੇਂ ਤੋਲ ਤਰਜੀਹ ਲਈ ਯੋਗ ਹਨ!",
    "mr": "२.० हेक्टरपेक्षा कमी जमीन असलेले शेतकरी आपोआप फेअर-शेयर दिवसाच्या वजनाच्या प्राधान्यासाठी पात्र ठरतात!",
    "gu": "2.0 હેક્ટરથી ઓછી જમીન ધરાવતા ખેડૂતો આપમેળે ફેેર-શેર દિવસના વજનની અગ્રતા માટે પાત્ર બને છે!",
    "bn": "২.০ হেক্টরের কম জমিটার মালিকরা স্বয়ংক্রিয়ভাবে ফেয়ার-শেয়ার দিবালোকের ওজন অগ্রাধিকারের জন্য যোগ্য!",
    "te": "2.0 హెక్టార్ల కంటే తక్కువ భూమి ఉన్నవారు స్వయంచాలకంగా ఫెయిర్-షేర్ పగటిపూట తూకం ప్రాధాన్యతకు అర్హులు!",
    "ta": "2.0 ஹெக்டேருக்குக் குறைவான நிலம் உடையவர்கள் தானாகவே ஃபேர்-ஷேர் பகல் நேர எடை முன்னுரிமைக்குத் தகுதி பெறுவார்கள்!",
    "kn": "2.0 ಹೆಕ್ಟೇರ್‌ಗಿಂತ ಕಡಿಮೆ ಭೂಮಿ ಹೊಂದಿರುವವರು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಫೇರ್-షేರ್ ಹಗಲಿನ ತೂಕದ ಪ್ರ��ಶಸ್ತ್ಯಕ್ಕೆ ಅರ್ಹರಾಗುತ್ತಾರೆ!"
  },
  "🐘": {
    "hi": "🐘",
    "pa": "🐘",
    "mr": "🐘",
    "gu": "🐘",
    "bn": "🐘",
    "te": "🐘",
    "ta": "🐘",
    "kn": "🐘"
  },
  "PostgreSQL 16+": {
    "hi": "PostgreSQL 16+",
    "pa": "PostgreSQL 16+",
    "mr": "PostgreSQL 16+",
    "gu": "PostgreSQL 16+",
    "bn": "PostgreSQL 16+",
    "te": "PostgreSQL 16+",
    "ta": "PostgreSQL 16+",
    "kn": "PostgreSQL 16+"
  },
  "PostgreSQL v16": {
    "hi": "PostgreSQL v16",
    "pa": "PostgreSQL v16",
    "mr": "PostgreSQL v16",
    "gu": "PostgreSQL v16",
    "bn": "PostgreSQL v16",
    "te": "PostgreSQL v16",
    "ta": "PostgreSQL v16",
    "kn": "PostgreSQL v16"
  },
  "Configuring...": {
    "hi": "कॉन्फ़िगर हो रहा है...",
    "pa": "ਕੌਂਫ��ਿਗਰ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
    "mr": "कॉन्फिगर करत आहे...",
    "gu": "કોન્ફિગરેશન થઈ રહ્યું છે...",
    "bn": "কনফিগার করা হচ্ছে...",
    "te": "కాన్ఫిగర్ చేస్తోంది...",
    "ta": "அமைக்கப்படுகிறது...",
    "kn": "ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾಗುತ್ತಿದೆ..."
  },
  "Farmers": {
    "hi": "किसान",
    "pa": "ਕਿਸਾਨ",
    "mr": "शेतकरी",
    "gu": "ખેડૂતો",
    "bn": "কৃষক",
    "te": "రైతులు",
    "ta": "உழவர்கள்",
    "kn": "ರೈತರು"
  },
  "Tokens": {
    "hi": "टोकन",
    "pa": "ਟੋਕਨ",
    "mr": "टोकन",
    "gu": "ટોકન્સ",
    "bn": "টোকেন",
    "te": "టోకెన్లు",
    "ta": "டோக்கன்கள்",
    "kn": "ಟೋಕನ್‌ಗಳು"
  },
  "Events Log": {
    "hi": "इवेंट्स लॉग",
    "pa": "ਇਵੈਂਟਸ ਲੌਗ",
    "mr": "इव्हेंट्स लॉग",
    "gu": "ઇવેન્ટ્સ લોગ",
    "bn": "ইভেন্টস লগ",
    "te": "ఈవెంట్స్ లాగ్",
    "ta": "நிகழ்வுகள் பதிவு",
    "kn": "ಘಟನೆಗಳ ಲಾಗ್"
  },
  "📊": {
    "hi": "📊",
    "pa": "📊",
    "mr": "📊",
    "gu": "📊",
    "bn": "📊",
    "te": "📊",
    "ta": "📊",
    "kn": "📊"
  },
  "🎫 tokens": {
    "hi": "🎫 टोकन",
    "pa": "🎫 ਟੋਕਨ",
    "mr": "🎫 टोकन",
    "gu": "🎫 ટોકન્સ",
    "bn": "🎫 টোকেন",
    "te": "🎫 టోకెన్లు",
    "ta": "🎫 டோக்கன்கள்",
    "kn": "🎫 ಟೋಕನ್‌ಗಳು"
  },
  "🌾 farmers": {
    "hi": "🌾 किसान",
    "pa": "🌾 ਕਿਸਾਨ",
    "mr": "🌾 शेतकरी",
    "gu": "🌾 ખેડૂતો",
    "bn": "🌾 কৃষক",
    "te": "🌾 రైతులు",
    "ta": "🌾 உழவர்கள்",
    "kn": "🌾 ರೈತರು"
  },
  "📜 mandi_events": {
    "hi": "📜 मंडी_इवेंट्स",
    "pa": "📜 ਮੰਡੀ_ਇਵੈਂਟਸ",
    "mr": "📜 मार्केट_इव्हेंट्स",
    "gu": "📜 મંડી_ઇવેન્ટ્સ",
    "bn": "📜 মান্ডি_ইভেন্টস",
    "te": "📜 మార్కెట్_ఈవెంట్స్",
    "ta": "📜 மார்க்கெட்_நிகழ்வுகள்",
    "kn": "📜 ಮಂಡಿ_ಘಟನೆಗಳು"
  },
  "⚖️ weighbridge_receipts": {
    "hi": "⚖️ weighbridge_receipts",
    "pa": "⚖️ weighbridge_receipts",
    "mr": "⚖️ weighbridge_receipts",
    "gu": "⚖️ weighbridge_receipts",
    "bn": "⚖️ weighbridge_receipts",
    "te": "⚖️ weighbridge_receipts",
    "ta": "⚖️ weighbridge_receipts",
    "kn": "⚖️ weighbridge_receipts"
  },
  "Loading PostgreSQL records...": {
    "hi": "PostgreSQL रिकॉर्ड लोड हो रहे हैं...",
    "pa": "PostgreSQL ਰਿكارಡ್ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
    "mr": "PostgreSQL रेकॉर्ड लोड होत आहेत...",
    "gu": "PostgreSQL રેકોર્ડ્સ લોડ થઈ રહ્યા છે...",
    "bn": "PostgreSQL রেকর্ড লোড হচ্ছে...",
    "te": "PostgreSQL రికార్డ్‌లు లోడ్ అవుతున్నాయి...",
    "ta": "PostgreSQL பதிவுகள் ஏற்றப்படுகின்றன...",
    "kn": "PostgreSQL ದಾಖಲೆಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ..."
  },
  "⚙️": {
    "hi": "⚙️",
    "pa": "⚙️",
    "mr": "⚙️",
    "gu": "⚙️",
    "bn": "⚙️",
    "te": "⚙️",
    "ta": "⚙️",
    "kn": "⚙️"
  },
  "CLI": {
    "hi": "CLI",
    "pa": "CLI",
    "mr": "CLI",
    "gu": "CLI",
    "bn": "CLI",
    "te": "CLI",
    "ta": "CLI",
    "kn": "CLI"
  },
  "node view_db.js": {
    "hi": "node view_db.js",
    "pa": "node view_db.js",
    "mr": "node view_db.js",
    "gu": "node view_db.js",
    "bn": "node view_db.js",
    "te": "node view_db.js",
    "ta": "node view_db.js",
    "kn": "node view_db.js"
  },
  "Data file: ./pgdata": {
    "hi": "डेटा फ़ा��ल: ./pgdata",
    "pa": "ਡੇਟਾ ਫਾਈਲ: ./pgdata",
    "mr": "डेटा फाइल: ./pgdata",
    "gu": "ડેટા ફાઇલ: ./pgdata",
    "bn": "ডেটা ফাইল: ./pgdata",
    "te": "డేటా ఫైల్: ./pgdata",
    "ta": "தரவு கோப்பு: ./pgdata",
    "kn": "ಡೇಟಾ ಫೈಲ್: ./pgdata"
  },
  "Claim Mandi Offer Pass": {
    "hi": "मंडी ऑफर पास का दावा करें",
    "pa": "ਮੰਡੀ ਪੇਸ਼ਕਸ਼ ਪਾਸ ਦਾ ਦਾਅਵਾ ਕਰੋ",
    "mr": "मंडी ऑफर पास क्लेम करा",
    "gu": "મંડી ઓફર પાસ ક્લેમ કરો",
    "bn": "মান্ডি অফার পাস দাবি করুন",
    "te": "మండి ఆఫర్ పాస్‌ను క్లెయిమ్ చేయండి",
    "ta": "மண்டி சலுகை பாஸைப் கோருங்கள்",
    "kn": "ಮಂಡಿ ಆಫರ್ ಪಾಸ್ ಕ್ಲೈಮ್ ಮಾಡಿ"
  },
  "+₹0 Bonus / Quintal": {
    "hi": "+₹0 बोनस / क्विंटल",
    "pa": "+₹0 ਬੋਨਸ / ਕਇੰਟਲ",
    "mr": "+₹0 बोनस / क्विंटल",
    "gu": "+₹0 બોનસ / ક્વિન્ટલ",
    "bn": "+₹0 বোনাস / কুইন্টাল",
    "te": "+₹0 బోనస్ / క్వింటాల్",
    "ta": "+₹0 போனஸ் / குவிண்டால்",
    "kn": "+₹0 ಬೋನಸ್ / ಕ್ವಿಂಟಾಲ್"
  },
  "Upon reservation, an official digital pass code will be dispatched via": {
    "hi": "आरक्षण पर, एक आधिकारिक डिजिटल पास कोड इसके माध्यम से भेजा जाएगा",
    "pa": "ਰਿਜ਼ਰਵੇਸ਼ਨ 'ਤੇ, ਇੱਕ ਅਧਿਕਾਰਤ ਡਿਜੀਟਲ ਪਾਸ ਕੋਡ ਇਸ ਰਾਹੀਂ ਭੇਜਿਆ ਜਾਵੇਗਾ",
    "mr": "आरक्षणानंतर, एकृतृत डिजिटल पास कोड याद्वारे पाठवला जाईल",
    "gu": "આરક્ષણ પર, એક સત્તાવાર ડિજિટલ પાસ કોડ આના દ્વારા મોકલવામાં આવશે",
    "bn": "সংরক্ষণ সম্পন্ন হলে, একটি অফিসিয়াল ডিজিটাল পাস কোড এর মাধ্যমে পাঠানো হবে",
    "te": "రిజర్వేషన్ తర్వాత, అధికారిక డిజిటల్ పాస్ కోడ్ దీని ద్వారా పంపబడుతుంది",
    "ta": "ஒதுக்கீட்டின் பேரில், அதிகாரப்பூர்வ டிஜிட்டல் பாஸ் குறியீடு இதன் மூலம் அனுப்பப்படும்",
    "kn": "ಮೀಸಲಾತಿಯ ಮೇರೆಗೆ, ಅಧಿಕೃತ ಡಿಜಿಟಲ್ ಪಾಸ್ ಕೋಡ್ ಅನ್ನು ಇದರ ಮೂಲಕ ಕಳುಹಿಸಲಾಗುತ್ತದೆ"
  },
  "Fast2SMS": {
    "hi": "Fast2SMS",
    "pa": "Fast2SMS",
    "mr": "Fast2SMS",
    "gu": "Fast2SMS",
    "bn": "Fast2SMS",
    "te": "Fast2SMS",
    "ta": "Fast2SMS",
    "kn": "Fast2SMS"
  },
  "directly to your mobile number. Show the SMS at Mandi Entry Gate 1 for priority weighment & bonus calculation.": {
    "hi": "सीधे आपके मोबाइल नंबर पर। प्राथमिकता के आधार पर तौल और बोनस की गणना के लिए मंडी प्रवेश द्वार 1 पर SMS दिखाएं।",
    "pa": "ਸਿੱਧਾ ਤੁਹਾਡੇ ਮੋਬਾਈਲ ਨੰਬਰ 'ਤੇ। ਪਹਿحابਦ ਤੌਲ ਅਤੇ ਬੋਨਸ ਗਣਨਾ ਲਈ ਮੰడి ਐਂਟਰੀ ਗੇਟ 1 'ਤੇ SMS ਦਿਖਾਓ।",
    "mr": "थेट तुमच्या मोबाईल नंबरवर. प्राधान्य वजन व बोनस गणनेसाठी मंडी प्रवेशद्वार 1 वर SMS दाखवा.",
    "gu": "સીધા તમારા મોબાઇલ નંબર પર. અગ્રતા વજન અને બોનસ ગણતરી માટે મંડી એન્ટ્રી ગેટ 1 પર SMS બતાવો.",
    "bn": "সরাসরি আপনার মোবাইল নম্বরে। অগ্রাধিকার ভিত্তিক ওজন এবং বোনাস গণনার জন্য মান্ডি এন্ট্রি গেট 1-এ SMS দেখান।",
    "te": "நேరుగా మీ మొబైల్ నంబర్‌కు. ప్రాధాన్యత తూకం & బోనస్ లెక్కల కోసం మండి ఎంట్రీ గేట్ 1 వద్ద SMS చూపండి.",
    "ta": "நேரடியாக உங்கள் மொபைல் எண்ணுக்கு. முன்னுரிமை எடை மற்றும் போனஸ் கணக்கீட்டிற்காக மண்டி நுழைவு வாயில் 1-ல் SMS-ஐக் காட்டவும்.",
    "kn": "ನೇರವಾಗಿ ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ. ಆದ್ಯತೆಯ ತೂಕ ಮತ್ತು ಬೋನಸ್ ಲೆಕ್ಕಾಚಾರಕ್ಕಾಗಿ ಮಂಡಿ ಪ್ರವೇಶ द्वार 1 ರಲ್ಲಿ SMS ತೋರಿಸಿ."
  },
  "Farmer Full Name *": {
    "hi": "किसान का पूरा नाम *",
    "pa": "ਕਿਸਾਨ ਦਾ ਪੂਰਾ ਨਾਮ *",
    "mr": "शेतकऱ्याचे पूर्ण नाव *",
    "gu": "ખેડૂતનું પૂરું નામ *",
    "bn": "কৃষকের পুরো নাম *",
    "te": "రైతు పూర్తి పేరు *",
    "ta": "விவசாயியின் முழுப் பெயர் *",
    "kn": "ರೈತರ முழு ಹೆಸರು *"
  },
  "Mobile Number (Fast2SMS) *": {
    "hi": "मोबाइल नंबर (Fast2SMS) *",
    "pa": "ਮੋਬਾਈਲ ਨੰਬਰ (Fast2SMS) *",
    "mr": "मोबाईल नंबर (Fast2SMS) *",
    "gu": "મોબાઇલ નંબર (Fast2SMS) *",
    "bn": "মোবাইল নম্বর (Fast2SMS) *",
    "te": "మొబైల్ నంబర్ (Fast2SMS) *",
    "ta": "மொபைல் எண் (Fast2SMS) *",
    "kn": "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (Fast2SMS) *"
  },
  "Estimated Quantity (Quintals) *": {
    "hi": "अनुमानित मात्रा (क्विंटल) *",
    "pa": "ਅੰਦਾਜ਼ਨ ਮਾਤਰਾ (ਕੁਇੰਟਲ) *",
    "mr": "अंदाजे प्रमाण (क्विंटल) *",
    "gu": "અંદાજિત જથ્થો (ક્વિન્ટલ) *",
    "bn": "প্রাক্কলিত পরিমাণ (কুইন্টাল) *",
    "te": "అంచనా వేసిన పరిమాణం (క్వింటాళ్ళు) *",
    "ta": "மதிப்பிடப்பட்ட அளவு (க்வின்டால்) *",
    "kn": "ಅಂದಾಜು ಪ್ರಮಾಣ (ಕ್ವಿಂಟಾಲ್) *"
  },
  "Target Mandi Yard *": {
    "hi": "लक्ष्य मंडी यार्ड *",
    "pa": "ਟੀਚਾ ਮੰਡੀ ਯਾਰਡ *",
    "mr": "लक्षित मंडी यार्ड *",
    "gu": "લક્ષ્ય મંડી યાર્ડ *",
    "bn": "লক্ষ্য মান্ডি ইয়ার্ড *",
    "te": "లక్ష్య మండి యార్డ్ *",
    "ta": "இலக்கு மண்டி யார்ட் *",
    "kn": "ಗುರಿ ಮಂಡಿ ಯಾರ್ಡ್ *"
  },
  "Reserve Offer & Send Fast2SMS Gate Pass": {
    "hi": "ऑफर आरक्षित करें और Fast2SMS गेट पास भेजें",
    "pa": "ਆਫ਼ਰ ਰਿਜ਼ਰਵ ਕਰੋ ਅਤੇ Fast2SMS ਗੇਟ ਪਾਸ ਭੇਜੋ",
    "mr": "ऑफर आरक्षित करा आणि Fast2SMS गेट पास पाठवा",
    "gu": "ઓફર આરક્ષિત કરો અને Fast2SMS ગેટ પાસ મોકલો",
    "bn": "অফার সংরক্ষণ করুন এবং Fast2SMS গেট পাস পাঠান",
    "te": "ఆఫర్ రిజర్వ్ చేయండి & Fast2SMS గేట్ పాస్ పంపండి",
    "ta": "சலுகையை முன்பதிவு செய்து Fast2SMS கேட் பாஸ் அனுப்பவும்",
    "kn": "ಆಫರ್ ಕಾಯ್ದಿರಿಸಿ & Fast2SMS ಗೇಟ್ ಪಾಸ್ ಕಳುಹಿಸಿ"
  },
  "Offer Successfully Claimed!": {
    "hi": "ऑफर सफलतापूर्वक दावा किया गया!",
    "pa": "ਆਫ਼ਰ ਸਫਲਤਾਪੂਰਵਕ ਦਾਅਵਾ ਕੀਤਾ ��ਿਆ!",
    "mr": "ऑफर यशस्वीरित्या क्लेम केली!",
    "gu": "ઓફર સફળતાપૂર્વક દાવો કરવામાં આવી!",
    "bn": "অফার সফলভাবে দাবি করা হয়েছে!",
    "te": "ఆఫర్ విజయవంతంగా క్లెయిమ్ చేయబడింది!",
    "ta": "சலுகை வெற்றிகரமாக கோரப்பட்டது!",
    "kn": "ಆಫರ್ ಯಶಸ್ವಿಯಾಗಿ ಕ್ಲೈಮ್ ಮಾಡಲಾಗಿದೆ!"
  },
  "Token: MND-OFR-000000": {
    "hi": "टोकन: MND-OFR-000000",
    "pa": "ਟੋਕਨ: MND-OFR-000000",
    "mr": "टोकन: MND-OFR-000000",
    "gu": "ટોકન: MND-OFR-000000",
    "bn": "টোকেন: MND-OFR-000000",
    "te": "టోకెన్: MND-OFR-000000",
    "ta": "டோக்கன்: MND-OFR-000000",
    "kn": "ಟೋಕನ್: MND-OFR-000000"
  },
  "Fast2SMS Gateway transmission recorded.": {
    "hi": "Fast2SMS गेटवे ट्रांसमिशन दर्ज किया गया।",
    "pa": "Fast2SMS ਗੇਟਵੇ ਟਰਾਂਸਮਿਸ਼ਨ ਦਰ��� ਕੀਤੀ ਗਈ।",
    "mr": "Fast2SMS गेटवे ट्रान्समिशन नोंदवले गेले.",
    "gu": "Fast2SMS ગેટવે ટ્રાન્સમિશન રેકોર્ડ કરવામાં આવ્યું.",
    "bn": "Fast2SMS গেটওয়ে ট্রান্সমিশন রেকর্ড করা হয়েছে।",
    "te": "Fast2SMS గేట్‌వే ట్రాన్స్‌మిషన్ రికార్డ్ చేయబడింది.",
    "ta": "Fast2SMS கேட்வே டிரான்ஸ்மிஷன் பதிவு செய்யப்பட்டது.",
    "kn": "Fast2SMS ಗೇಟ್‌ವೇ ಪ್ರಸರಣವನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ."
  },
  "KISAN-Q (Kisan Token)": {
    "hi": "KISAN-Q (किसान टोकन)",
    "pa": "KISAN-Q (ਕਿਸਾਨ ਟੋਕਨ)",
    "mr": "KISAN-Q (किसान टोकन)",
    "gu": "KISAN-Q (કિસાન ટોકન)",
    "bn": "KISAN-Q (কিসান টোকেন)",
    "te": "KISAN-Q (కిసాన్ టోకెన్)",
    "ta": "KISAN-Q (கிசான் டோக்கன்)",
    "kn": "KISAN-Q (ಕಿಸಾನ್ ಟ���ಕನ್)"
  },
  "• National Agriculture Market (e-NAM) Mandi Logistics": {
    "hi": "• राष्ट्रीय कृषि बाज़ार (e-NAM) मंडी लॉजिस्टिक्स",
    "pa": "• ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ ਬਾਜ਼ਾਰ (e-NAM) ਮੰਡੀ ਲੌਜਿਸਟਿਕਸ",
    "mr": "• राष्ट्रीय कृषी बाजार (e-NAM) मंडी लॉजिस्टिक्स",
    "gu": "• રાષ્ટ્રીય કૃષિ બજાર (e-NAM) મંડી લોજિસ્ટિક્સ",
    "bn": "• জাতীয় কৃষি বাজার (e-NAM) মান্ডি লজিস্টিকস",
    "te": "• జాతీయ వ్యవసాయ మార్కెట్ (e-NAM) మండి లాజిస్టిక్స్",
    "ta": "• தேசிய விவசாய சந்தை (e-NAM) மண்டி லாஜிஸ்டிக்ஸ்",
    "kn": "• ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ (e-NAM) ಮಂಡಿ ಲಾಜಿಸ್ಟಿಕ್ಸ್"
  },
  "MONITORING": {
    "hi": "निगरानी",
    "pa": "ਨિਗਰਾਨੀ",
    "mr": "देखरेख",
    "gu": "મોનિટરિંગ",
    "bn": "মনিটরিং",
    "te": "పర్యవేక్షణ",
    "ta": "கண்காணிப்பு",
    "kn": "ಮೇಲ್ವಿಚಾರಣೆ"
  },
  "Console": {
    "hi": "कंसोल",
    "pa": "ਕੰਸੋਲ",
    "mr": "कंसोल",
    "gu": "કન્સોલ",
    "bn": "কনসোল",
    "te": "కన్సోల్",
    "ta": "கன்சோல்",
    "kn": "ಕನ್ಸೋಲ್"
  },
  "MANDI RESILIENCE ENGINE: READY": {
    "hi": "मंडी रेजिलिएंस इंजन: तैयार",
    "pa": "ਮੰਡੀ ਰੇਜ਼ੀਲੀਏਂਸ ਇੰਜਣ: ਤਿ��ਰ",
    "mr": "मंडी रेझिलियन्स इंजिन: तयार",
    "gu": "મંડી રેઝિલિયન્સ એન્જિન: તૈયાર",
    "bn": "মান্ডি রেজিলিয়েন্স ইঞ্জিন: প্রস্তুত",
    "te": "మండి రెసిలియెన్స్ ఇంజిన్: సిద్ధంగా ఉంది",
    "ta": "மண்டி ரெசிலியன்ஸ் இன்ஜின்: தயார்",
    "kn": "ಮಂಡಿ ರೆಸಿಲಿಯೆನ್ಸ್ ಇಂಜಿನ್: ಸಿದ್ಧವಾಗಿದೆ"
  },
  "High-Traffic Vigilance & Physical Jam Mitigation Active": {
    "hi": "हाई-ट्रैफ़िक सतर्कता और भौतिक जाम रोकथाम सक्रिय",
    "pa": "ਉੱਚ-ਟ੍ਰੈਫਿਕ ਚੌਕਸੀ ਅਤੇ ਭੌਤਿਕ ਜਾਮ ਰੋਕਥਾਮ ਕਿਰਿਆਸ਼ੀਲ",
    "mr": "हाय-ट्रॅफिक सतर्कता आणि फिजिकल जाम शमन सक्रिय",
    "gu": "હાઈ-ટ્રાફિક સતર્કતા અને ફિઝિકલ જામ નિવારણ સક્રિય",
    "bn": "উচ���চ-ট্রাফিক সতর্কতা এবং শারীরিক জ্যাম প্রশমন সক্রিয়",
    "te": "హై-ట్రాఫిక్ నిఘా & ఫిజికల్ జామ్ నివారణ సక్రియంగా ఉంది",
    "ta": "அதிக போக்குவரத்து கண்காணிப்பு & உடல் நெரிசல் தணிப்பு செயலில் உள்ளது",
    "kn": "ಹೆಚ್ಚು-ದಟ್ಟಣೆಯ ನಿಗಾ & ಭೌತಿಕ ದಟ್ಟಣೆ ತಡೆ ಸಕ್ರಿಯವಾಗಿದೆ"
  },
  "Gate 1:": {
    "hi": "गेट 1:",
    "pa": "ਗੇਟ 1:",
    "mr": "गेट 1:",
    "gu": "ગેટ 1:",
    "bn": "গেট 1:",
    "te": "గేట్ 1:",
    "ta": "கேட் 1:",
    "kn": "ಗೇಟ್ 1:"
  },
  "50 Tr/h": {
    "hi": "50 Tr/h",
    "pa": "50 Tr/h",
    "mr": "50 Tr/h",
    "gu": "50 Tr/h",
    "bn": "50 Tr/h",
    "te": "50 Tr/h",
    "ta": "50 Tr/h",
    "kn": "50 Tr/h"
  },
  "• Cloud:": {
    "hi": "• क्लाउड:",
    "pa": "• ਕਲਾਉਡ:",
    "mr": "• क्लाउड:",
    "gu": "• ક્લાઉડ:",
    "bn": "• ক্লাউড:",
    "te": "• క్లౌడ్:",
    "ta": "• கிளவுட்:",
    "kn": "• ಕ್ಲೌಡ್:"
  },
  "Online": {
    "hi": "ऑनलाइन",
    "pa": "ਆਨਲਾਈਨ",
    "mr": "ऑनलाइन",
    "gu": "ઓનલાઈન",
    "bn": "অনলাইন",
    "te": "ఆన్‌లైన్",
    "ta": "ஆன்லைன்",
    "kn": "ಆನ್‌ಲೈನ್"
  },
  "Test Gate 1 Breakdown Simulation": {
    "hi": "टेस्ट गेट 1 ब्रेकडाउन सिमुलेशन",
    "pa": "ਟੈਸਟ ਗੇਟ 1 ਬ੍ਰੇਕਡਾਊਨ ਸਿਮੂਲੇਸ਼ਨ",
    "mr": "टेस्ट गेट 1 ब्रेकडाउन सिम्युलेशन",
    "gu": "ટેસ્ટ ગેટ 1 બ્રેકડાઉન સિમ્યુલેશન",
    "bn": "টেস্ট গেট 1 ব্রেকডাউন সিমুলেশন",
    "te": "టెస్ట్ గేట్ 1 బ్రేక్‌డౌన్ సిమ్యులేషన్",
    "ta": "டெஸ்ட் கேட் 1 ��ிரேக்டவுன் சிமுலேஷன்",
    "kn": "ಟೆಸ್ಟ್ ಗೇಟ್ 1 ಬ್ರೇಕ್‌ಡೌನ್ ಸಿಮ್ಯುಲೇಷನ್"
  },
  "Resilience Monitor": {
    "hi": "रेसिलिएंस मॉनिटर",
    "pa": "ਰੈਜ਼ੀਲੀਏਂਸ ਮਾਨੀਟਰ",
    "mr": "रेझिलियन्स मॉनिटर",
    "gu": "રેઝિલિયન્સ મોનિટર",
    "bn": "রেজিলিয়েন্স মনিটর",
    "te": "రెసిలియెన్స్ మానిటర్",
    "ta": "ரெசிலியன்ஸ் மானிட்டர்",
    "kn": "ರೆಸಿಲಿಯೆನ್ಸ್ ಮಾನಿಟರ್"
  },
  "KISAN-Q Sahayak": {
    "hi": "KISAN-Q सहायक",
    "pa": "KISAN-Q ਸਹਾਇਕ",
    "mr": "KISAN-Q सह���य्यक",
    "gu": "KISAN-Q સહાયક",
    "bn": "KISAN-Q সহায়ক",
    "te": "KISAN-Q సహాయక్",
    "ta": "KISAN-Q உதவியாளர்",
    "kn": "KISAN-Q ಸಹಾಯಕ"
  },
  "AI": {
    "hi": "AI",
    "pa": "AI",
    "mr": "AI",
    "gu": "AI",
    "bn": "AI",
    "te": "AI",
    "ta": "AI",
    "kn": "AI"
  },
  "AI Help Assistant • Online": {
    "hi": "AI सहायता सहायक • ऑनलाइन",
    "pa": "AI ਮਦਦ ਸਹਾਇਕ • ਆਨਲਾਈਨ",
    "mr": "AI मदत सहाय्यक • ऑनलाइन",
    "gu": "AI મદદ સહાયક • ઓનલાઇન",
    "bn": "AI সাহায্য সহকারী • অনলাইন",
    "te": "AI సహాయ సహాయకుడు • ఆన్‌లైన్",
    "ta": "AI உதவி உதவியாளர் • ஆன்லைன்",
    "kn": "AI ಸಹಾಯ ಸಹಾಯಕ • ಆನ್‌ಲೈನ್"
  },
  "🌐 Language:": {
    "hi": "🌐 भाषा:",
    "pa": "🌐 ਭਾਸ਼ਾ:",
    "mr": "🌐 भाषा:",
    "gu": "🌐 ��ાષા:",
    "bn": "🌐 ভাষা:",
    "te": "🌐 భాష:",
    "ta": "🌐 மொழி:",
    "kn": "🌐 ಭಾಷೆ:"
  },
  "🇬🇧 English (EN)": {
    "hi": "🇬🇧 English (EN)",
    "pa": "🇬🇧 English (EN)",
    "mr": "🇬🇧 English (EN)",
    "gu": "🇬🇧 English (EN)",
    "bn": "🇬🇧 English (EN)",
    "te": "🇬🇧 English (EN)",
    "ta": "🇬🇧 English (EN)",
    "kn": "🇬🇧 English (EN)"
  },
  "🇮🇳 हिन्दी (Hindi)": {
    "hi": "🇮🇳 हिन्दी (Hindi)",
    "pa": "🇮🇳 हिन्दी (Hindi)",
    "mr": "🇮🇳 हिन्दी (Hindi)",
    "gu": "🇮🇳 हिन्दी (Hindi)",
    "bn": "🇮🇳 हिन्दी (Hindi)",
    "te": "🇮🇳 हिन्दी (Hindi)",
    "ta": "🇮🇳 हिन्दी (Hindi)",
    "kn": "🇮🇳 हिन्दी (Hindi)"
  },
  "🌾 ਪੰਜਾਬੀ (Punjabi)": {
    "hi": "🌾 ਪੰਜਾਬੀ (Punjabi)",
    "pa": "🌾 ਪੰਜਾਬੀ (Punjabi)",
    "mr": "🌾 ਪੰਜਾਬੀ (Punjabi)",
    "gu": "🌾 ਪੰਜਾਬੀ (Punjabi)",
    "bn": "🌾 ਪੰਜਾਬੀ (Punjabi)",
    "te": "🌾 ਪੰਜਾਬੀ (Punjabi)",
    "ta": "🌾 ਪੰਜਾਬੀ (Punjabi)",
    "kn": "🌾 ਪੰਜਾਬੀ (Punjabi)"
  },
  "🚩 मराठी (Marathi)": {
    "hi": "🚩 मराठी (Marathi)",
    "pa": "🚩 मराठी (Marathi)",
    "mr": "🚩 मराठी (Marathi)",
    "gu": "🚩 मराठी (Marathi)",
    "bn": "🚩 मराठी (Marathi)",
    "te": "🚩 मराठी (Marathi)",
    "ta": "🚩 मराठी (Marathi)",
    "kn": "🚩 मराठी (Marathi)"
  },
  "🌸 ગુજરાતી (Gujarati)": {
    "hi": "🌸 ગુજરાતી (Gujarati)",
    "pa": "🌸 ગુજરાતી (Gujarati)",
    "mr": "🌸 ગુજરાતી (Gujarati)",
    "gu": "🌸 ગુજરાતી (Gujarati)",
    "bn": "🌸 ગુજરાતી (Gujarati)",
    "te": "🌸 ગુજરાતી (Gujarati)",
    "ta": "🌸 ગુજરાતી (Gujarati)",
    "kn": "🌸 ગુજરાતી (Gujarati)"
  },
  "🌿 বাংলা (Bengali)": {
    "hi": "🌿 বাংলা (Bengali)",
    "pa": "🌿 বাংলা (Bengali)",
    "mr": "🌿 বাংলা (Bengali)",
    "gu": "🌿 বাংলা (Bengali)",
    "bn": "🌿 বাংলা (Bengali)",
    "te": "🌿 বাংলা (Bengali)",
    "ta": "🌿 বাংলা (Bengali)",
    "kn": "🌿 বাংলা (Bengali)"
  },
  "🌾 తెలుగు (Telugu)": {
    "hi": "🌾 తెలుగు (Telugu)",
    "pa": "🌾 తెలుగు (Telugu)",
    "mr": "🌾 తెలుగు (Telugu)",
    "gu": "🌾 తెలుగు (Telugu)",
    "bn": "🌾 తెలుగు (Telugu)",
    "te": "🌾 తెలుగు (Telugu)",
    "ta": "🌾 తెలుగు (Telugu)",
    "kn": "🌾 తెలుగు (Telugu)"
  },
  "🍃 தமிழ் (Tamil)": {
    "hi": "🍃 தமிழ் (Tamil)",
    "pa": "🍃 தமிழ் (Tamil)",
    "mr": "🍃 தமிழ் (Tamil)",
    "gu": "🍃 தமிழ் (Tamil)",
    "bn": "🍃 தமிழ் (Tamil)",
    "te": "🍃 தமிழ் (Tamil)",
    "ta": "🍃 தமிழ் (Tamil)",
    "kn": "🍃 தமிழ் (Tamil)"
  },
  "🌾 ಕನ್ನಡ (Kannada)": {
    "hi": "🌾 ಕನ್ನಡ (Kannada)",
    "pa": "🌾 ಕನ್ನಡ (Kannada)",
    "mr": "🌾 ಕನ್ನಡ (Kannada)",
    "gu": "🌾 ಕನ್ನಡ (Kannada)",
    "bn": "🌾 ಕನ್ನಡ (Kannada)",
    "te": "🌾 ಕನ್ನಡ (Kannada)",
    "ta": "🌾 ಕನ್ನಡ (Kannada)",
    "kn": "🌾 ಕನ್ನಡ (Kannada)"
  },
  "⚡ Select Question:": {
    "hi": "⚡ प्रश्न चुनें:",
    "pa": "⚡ ਸਵਾਲ ਚੁਣੋ:",
    "mr": "⚡ प्रश्न निवडा:",
    "gu": "⚡ પ્રશ્ન પસંદ કરો:",
    "bn": "��� প্রশ্ন নির্বাচন করুন:",
    "te": "⚡ ప్రశ్నను ఎంచుకోండి:",
    "ta": "⚡ கேள்வியைத் தேர்ந்தெடுக்கவும்:",
    "kn": "⚡ ಪ್ರಶ್ನೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:"
  },
  "-- Choose Quick Question --": {
    "hi": "-- त्वरित प्रश्न चुनें --",
    "pa": "-- ਤੇਜ਼ ਸਵਾਲ ਚੁਣੋ --",
    "mr": "-- जलद प्रश्न निवडा --",
    "gu": "-- ઝડપી પ્રશ્ન પસંદ કરો --",
    "bn": "-- দ্রুত প্রশ্ন বাছুন --",
    "te": "-- త్వరిత ప్రశ్నను ఎంచుకోండి --",
    "ta": "-- விரைவான கேள்வியைத் தேர்ந்தெடுக்கவும் --",
    "kn": "-- ಶೀಘ್ರ ಪ್ರಶ್ನೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ --"
  },
  "📊 Today's MSP Rates & Hikes": {
    "hi": "📊 आज के MSP दर और बढ़ोतरी",
    "pa": "📊 ਅੱਜ ਦੇ MSP ਰੇਟ ਅਤੇ ਵਾਧਾ",
    "mr": "📊 आजचे MSP दर आणि वाढ",
    "gu": "📊 આજના MSP દર અને વધારો",
    "bn": "📊 আজকের MSP হার এবং বৃদ্ধি",
    "te": "📊 నేటి MSP ధరలు & పెంపు",
    "ta": "📊 இன்றைய MSP விலைகள் மற்றும் உயர்வுகள்",
    "kn": "📊 ಇಂದಿನ MSP ದರಗಳು ಮತ್ತು ಏರಿಕೆ"
  },
  "📅 How to Book Mandi Slot": {
    "hi": "📅 मंडी स्लॉट कैसे बुक करें",
    "pa": "📅 ਮੰਡੀ ਸਲਾਟ ਕਿਵੇਂ ਬੁੱਕ ਕਰੀਏ",
    "mr": "📅 मりの स्लॉट कसा बुक करावा",
    "gu": "📅 મંડી સ્લોટ કેવી રીતે બુક કરવો",
    "bn": "📅 কীভাবে মান্ডি স্লট বুক করবেন",
    "te": "📅 మండి స్లాట్ ఎలా బుక్ చేయాలి",
    "ta": "📅 மண்டி ஸ்லாட்டை எவ்வாறு முன்பதிவு செய்வது",
    "kn": "📅 ಮಂಡಿ ಸ್ಲಾಟ್ ಅನ್ನು ಹೇಗೆ ಬುಕ್ ಮಾಡುವುದು"
  },
  "��� QR Gate Pass & Token": {
    "hi": "🎫 QR गेट पास और टोकन",
    "pa": "🎫 QR ਗੇਟ ਪਾਸ ਅਤੇ ਟੋਕਨ",
    "mr": "🎫 QR गेट पास आणि टोकन",
    "gu": "🎫 QR ગેટ પાસ અને ટોકન",
    "bn": "🎫 QR গেট পাস এবং টোকেন",
    "te": "🎫 QR గేట్ పాస్ & టోకెన్",
    "ta": "🎫 QR கேட் பாஸ் மற்றும் டோக்கன்",
    "kn": "🎫 QR ಗೇಟ್ ಪಾಸ್ ಮತ್ತು ಟೋಕನ್"
  },
  "💰 Direct PFMS-DBT Payment": {
    "hi": "💰 प्रत्यक्ष PFMS-DBT भुगतान",
    "pa": "💰 ਸਿੱਧਾ PFMS-DBT ਭੁਗਤਾਨ",
    "mr": "💰 थेट PFMS-DBT पेमेंट",
    "gu": "💰 સીધી PFMS-DBT ચુકવણી",
    "bn": "💰 সরাসরি PFMS-DBT পেমেন্ট",
    "te": "💰 ప్రత్యక్ష PFMS-DBT చెల్లింపు",
    "ta": "💰 நேரடி PFMS-DBT கட்டணம்",
    "kn": "💰 ನೇರ PFMS-DBT ಪಾವತಿ"
  },
  "🔬 Grain Moisture & Quality Limits": {
    "hi": "🔬 अनाज की नमी और गुणवत्ता सीमाएं",
    "pa": "🔬 ਅਨਾਜ ਦੀ ਨਮੀ ਅਤੇ ਗੁਣਵੱਤਾ ਸੀਮਾਵਾਂ",
    "mr": "🔬 दाण्यातील ओलावा आणि गुणवत्ता मर्यादा",
    "gu": "🔬 અનાજનો ભેજ અને ગુણવત્તા મર્યાદાઓ",
    "bn": "🔬 শস্যের আর্দ্রতা ও গুণগত মানের সীমা",
    "te": "🔬 ధాన్యం తేమ & నాణ్యత పరిమితులు",
    "ta": "🔬 தானிய ஈரப்பதம் & ���ர வரம்புகள்",
    "kn": "🔬 ಧಾನ್ಯದ ತೇವಾಂಶ & ಗುಣಮಟ್ಟದ ಮಿತಿಗಳು"
  },
  "📞 Toll-Free Helpline (1800-270-0224)": {
    "hi": "📞 टोल-फ्री हेल्पलाइन (1800-270-0224)",
    "pa": "📞 ਟੋਲ-ਫ੍ਰੀ ਹੈਲਪਲਾਈਨ (1800-270-0224)",
    "mr": "📞 टोल-फ्री हेल्पलाइन (1800-270-0224)",
    "gu": "📞 ટોલ-ફ્રી હેલ્પલાઇન (1800-270-0224)",
    "bn": "📞 টোল-ফ্রি হেল্পলাইন (1800-270-0224)",
    "te": "📞 టోల్ ఫ్రీ హెల్ప్‌లైన్ (1800-270-0224)",
    "ta": "📞 கட்டணமில்லா உதவி எண் (1800-270-0224)",
    "kn": "📞 ಟೋಲ್-ಫ್ರೀ ಸಹಾಯವಾಣಿ (1800-270-0224)"
  },
  "📈 Right Time to Sell Analysis": {
    "hi": "📈 फसल बेचने का सही समय विश्लेषण",
    "pa": "📈 ਫਸਲ ਵੇਚਣ ਦਾ ਸਹੀ ਸਮਾਂ ਵਿਸ਼ਲੇਸ਼ਣ",
    "mr": "📈 विक्रीसाठी योग्य वेळ विश्लेषण",
    "gu": "📈 વેચ��ણ માટેનો યોગ્ય સમય વિશ્લેષણ",
    "bn": "📈 বিক্রির সঠিক সময় বিশ্লেষণ",
    "te": "📈 విక్రయించడానికి సరైన సమయ విశ్లేషణ",
    "ta": "📈 விற்க சரியான நேரம் பகுப்பாய்வு",
    "kn": "📈 ಮಾರಾಟ ಮಾಡಲು ಸರಿಯಾದ ಸಮಯದ ವಿಶ್ಲೇಷಣೆ"
  },
  "🔒 e-NAM APMC Official AI": {
    "hi": "🔒 ई-नाम एपीएमजी आधिकारिक एआई",
    "pa": "🔒 ਈ-ਨਾਮ ਏਪੀਐੱਮਸੀ ਆਫੀਸ਼ੀਅਲ ਏ.ਆਈ.",
    "mr": "🔒 ई-नाम एपीएमसी अधिकृत एआय",
    "gu": "🔒 ઇ-નામ એપીએમસી અધિકૃત એઆઈ",
    "bn": "🔒 ই-নাম এপিএমসি অফিসিয়াল এআই",
    "te": "🔒 ఇ-నామ్ ఏపీఎంసీ అధికారిక ఏఐ",
    "ta": "🔒 இ-நாம் ஏபிஎம்சி அதிகாரப்பூர்வ ஏஐ",
    "kn": "🔒 ಇ-ನಾಮ್ ಎಪಿಎಂಸಿ ಅಧಿಕೃತ ಎಐ"
  },
  "📞 Helpline:": {
    "hi": "📞 हेल्पलाइन:",
    "pa": "📞 ਹੈਲਪਲਾਈਨ:",
    "mr": "📞 हेल्पलाइन:",
    "gu": "📞 હેલ્પલાઇન:",
    "bn": "📞 হেল্পলাইন:",
    "te": "📞 హెల్ప్‌లైన్:",
    "ta": "📞 உதவி எண்:",
    "kn": "📞 ಸಹಾಯವಾಣಿ:"
  },
  "e.g. Ramesh Kumar Patel": {
    "hi": "उदा. रमेश कुमार पटेल",
    "pa": "ਉਦਾਹਰਣ ਵਜੋਂ: ਰਮੇਸ਼ ਕੁਮਾਰ ਪਟੇਲ",
    "mr": "उदा. रमेश कुमार पटेल",
    "gu": "દુ.ત. રમેશ કુમાર પટેલ",
    "bn": "যেমন: রমেশ কুমার প্যাটেল",
    "te": "ఉదా. రమేష్ కుమార్ పటేల్",
    "ta": "எ.கா. ரமேஷ் குமார் படேல்",
    "kn": "ಉದಾ. ರಮೇಶ್ ಕುಮಾರ್ ಪಟೇಲ್"
  },
  "10-digit phone": {
    "hi": "10-अंकों का फोन नंबर",
    "pa": "10-ਅੰਕਾਂ ਦਾ ਫ਼ੋਨ ਨੰਬਰ",
    "mr": "१०-अंकी फोन नंबर",
    "gu": "૧૦-અંકનો ફોન નંબર",
    "bn": "১০-সংখ্যার ফোন নম্বর",
    "te": "10-అంకెల ఫోన్ నంబర్",
    "ta": "10 இலக்க தொலைபேசி எண்",
    "kn": "10-ಅಂಕಿಯ ಫೋನ್ ಸಂಖ್ಯೆ"
  },
  "e.g. 1.2": {
    "hi": "उदा. 1.2",
    "pa": "ਉਦਾਹਰਣ ਵਜੋਂ: 1.2",
    "mr": "उदा. १.२",
    "gu": "દુ.ત. ૧.૨",
    "bn": "যেমন: ১.২",
    "te": "ఉదా. 1.2",
    "ta": "எ.கா. 1.2",
    "kn": "ಉದಾ. 1.2"
  },
  "MP04AB1234": {
    "hi": "MP04AB1234",
    "pa": "MP04AB1234",
    "mr": "MP04AB1234",
    "gu": "MP04AB1234",
    "bn": "MP04AB1234",
    "te": "MP04AB1234",
    "ta": "MP04AB1234",
    "kn": "MP04AB1234"
  },
  "searchPlaceholder": {
    "hi": "फसल, जिंस या मंडी खोजें...",
    "pa": "ਫਸਲ, ਜਿਣਸ ਜਾਂ ਮੰਡੀ ਖੋਜੋ...",
    "mr": "पीक, शेतमाल किंवा बाजार समिती शोधा...",
    "gu": "પાક, ���િનસ અથવા મંડી શોધો...",
    "bn": "ফসল, পণ্য বা মান্ডি খুঁজুন...",
    "te": "పంట, సరుకు లేదా మార్కెట్ యార్డ్‌ను వెతకండి...",
    "ta": "பயிர், பொருள் அல்லது மண்டி தேடுக...",
    "kn": "ಬೆಳೆ, ಸರಕು ಅಥವಾ ಮಂಡಿಯನ್ನು ಹುಡುಕಿ..."
  },
  "10-digit mobile number": {
    "hi": "10-अंकों का मोबाइल नंबर",
    "pa": "10-अंकों ਦਾ ਮੋਬાઇલ ਨੰਬਰ",
    "mr": "१०-अंकी मोबाईल नंबर",
    "gu": "10-અಂಕનો મોባાઈલ नंबर",
    "bn": "১০-সংখ্যার মোবাইল নম্বর",
    "te": "10-అంకెల మొబైల్ నంబర్",
    "ta": "10-இக்க இலக்க மொபைல் எண்",
    "kn": "10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
  },
  "e.g. 4201": {
    "hi": "उदा. 4201",
    "pa": "ਉਦਾਹਰਣ ਵਜੋਂ 4201",
    "mr": "उदा. ४२०१",
    "gu": "દા.ત. 4201",
    "bn": "যেমন ৪২০১",
    "te": "ఉదా. 4201",
    "ta": "எ.கா. 4201",
    "kn": "ಉದಾ. 4201"
  },
  "e.g. Radheshyam Patel": {
    "hi": "उदा. राधेश्याम पटेल",
    "pa": "ਉਦਾਹਰਣ ਵਜੋਂ ਰਾਧੇਸ਼ਿਆਮ ਪਟੇਲ",
    "mr": "उदा. राधेश्याम पटेल",
    "gu": "દા.ત. રાधેશ્યામ પટેલ",
    "bn": "যেমন রাধে শ্যাম প্যাটেল",
    "te": "ఉదా. రాధేశ్యామ్ పటేల్",
    "ta": "எ.கா. ராதேஷ்யாம் படேல்",
    "kn": "ಉದಾ. ರಾಧೇ ಶ್ಯಾಮ್ ಪಟೇಲ್"
  },
  "XXXX-XXXX-9881": {
    "hi": "XXXX-XXXX-9881",
    "pa": "XXXX-XXXX-9881",
    "mr": "XXXX-XXXX-9881",
    "gu": "XXXX-XXXX-9881",
    "bn": "XXXX-XXXX-9881",
    "te": "XXXX-XXXX-9881",
    "ta": "XXXX-XXXX-9881",
    "kn": "XXXX-XXXX-9881"
  },
  "MP04TR8822": {
    "hi": "MP04TR8822",
    "pa": "MP04TR8822",
    "mr": "MP04TR8822",
    "gu": "MP04TR8822",
    "bn": "MP04TR8822",
    "te": "MP04TR8822",
    "ta": "MP04TR8822",
    "kn": "MP04TR8822"
  },
  "SBI / SBIN0001234": {
    "hi": "SBI / SBIN0001234",
    "pa": "SBI / SBIN0001234",
    "mr": "SBI / SBIN0001234",
    "gu": "SBI / SBIN0001234",
    "bn": "SBI / SBIN0001234",
    "te": "SBI / SBIN0001234",
    "ta": "SBI / SBIN0001234",
    "kn": "SBI / SBIN0001234"
  },
  "SELECT * FROM tokens WHERE status = 'BOOKED' LIMIT 10": {
    "hi": "SELECT * FROM tokens WHERE status = 'BOOKED' LIMIT 10",
    "pa": "SELECT * FROM tokens WHERE status = 'BOOKED' LIMIT 10",
    "mr": "SELECT * FROM tokens WHERE status = 'BOOKED' LIMIT 10",
    "gu": "SELECT * FROM tokens WHERE status = 'BOOKED' LIMIT 10",
    "bn": "SELECT * FROM tokens WHERE status = 'BOOKED' LIMIT 10",
    "te": "SELECT * FROM tokens WHERE status = 'BOOKED' LIMIT 10",
    "ta": "SELECT * FROM tokens WHERE status = 'BOOKED' LIMIT 10",
    "kn": "SELECT * FROM tokens WHERE status = 'BOOKED' LIMIT 10"
  },
  "postgresql://user:password@ep-xyz.neon.tech/kisan_q?sslmode=require": {
    "hi": "postgresql://user:password@ep-xyz.neon.tech/kisan_q?sslmode=require",
    "pa": "postgresql://user:password@ep-xyz.neon.tech/kisan_q?sslmode=require",
    "mr": "postgresql://user:password@ep-xyz.neon.tech/kisan_q?sslmode=require",
    "gu": "postgresql://user:password@ep-xyz.neon.tech/kisan_q?sslmode=require",
    "bn": "postgresql://user:password@ep-xyz.neon.tech/kisan_q?sslmode=require",
    "te": "postgresql://user:password@ep-xyz.neon.tech/kisan_q?sslmode=require",
    "ta": "postgresql://user:password@ep-xyz.neon.tech/kisan_q?sslmode=require",
    "kn": "postgresql://user:password@ep-xyz.neon.tech/kisan_q?sslmode=require"
  },
  "10-digit number": {
    "hi": "10-अंकों का नंबर",
    "pa": "10-ਅੰਕਾਂ ਦਾ ਨੰਬਰ",
    "mr": "१०-अंकी नंबर",
    "gu": "10-અಂಕનો નંબર",
    "bn": "১০-সংখ্যার নম্বর",
    "te": "10-అంకెల సంఖ్య",
    "ta": "10-இக்க இலக்க எண்",
    "kn": "10-ಅಂಕಿಯ ಸಂಖ್ಯೆ"
  },
  "Ask anything about the mandi…": {
    "hi": "मंडी के बारे में कुछ भी पूछें…",
    "pa": "ਮੰਡੀ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ…",
    "mr": "मंड��बद्दल काहीही विचारणा करा…",
    "gu": "मंडी વિશે કંઈપણ પૂછੋ…",
    "bn": "মান্ডি সম্পর্কে কিছু জিজ্ঞাসা করুন...",
    "te": "మండి గురించి ఏదైనా అడగండి…",
    "ta": "மண்டி பற்றி எதையும் கேளுங்கள்...",
    "kn": "ಮಂಡಿ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ…"
  },
  "Previous Slide": {
    "hi": "पिछली स्लाइड",
    "pa": "ਪਿછली ਸਲાઇਡ",
    "mr": "मागील स्लाइड",
    "gu": "પાછલી સ્લાઇડ",
    "bn": "পূর্ববর্তী স্লাইড",
    "te": "మునుపటి స్లైడ్",
    "ta": "முந்தைய ஸ்லைடு",
    "kn": "ಹಿಂದಿನ ಸ್ಲೈಡ್"
  },
  "Next Slide": {
    "hi": "अगली स्लाइड",
    "pa": "अगલી ਸਲાઇड",
    "mr": "पुढील स्लाइड",
    "gu": "આગલી સ્લાઇড",
    "bn": "পরবর্তী স��লাইড",
    "te": "తదుపరి స్లైడ్",
    "ta": "அடுத்த ஸ்லைடு",
    "kn": "ಮುಂದಿನ ಸ್ಲೈಡ್"
  },
  "Toggle Emergency Audio Alert": {
    "hi": "आपातकालीन ऑडियो अलर्ट टॉगल करें",
    "pa": "ਐਮਰਜੈਂਸੀ ਆਡੀਓ ਅਲਰਟ ਟੌਗਲ ਕਰੋ",
    "mr": "आपत्कालीन ऑडिओ अलर्ट टॉगल करा",
    "gu": "કટોકટી ઓડિયો ચેતવણી ટૉગલ કરો",
    "bn": "জরুরী অডিও সতর্কতা টগল করুন",
    "te": "అత్యవసర ఆడియో హెచ్చరికను టోګిల్ చేయండి",
    "ta": "அவசரகால ஆடியோ எச்சரிக்கையை மாற்றுக",
    "kn": "ತುರ್ತು ಆಡಿಯೋ ಎಚ್ಚರಿಕೆಯನ್ನು ಟಾಗಲ್ ಮಾಡಿ"
  },
  "View Chaos Console in Dashboard": {
    "hi": "डैशबोर्ड में केओस कंसोल देखें",
    "pa": "ਡੈਸ਼ਬੋਰਡ ਵਿੱਚ ਕੇਓਸ ਕੰਸੋਲ ਦੇਖੋ",
    "mr": "डॅशबोर्डमध्ये केओस कन्सोल पहा",
    "gu": "ડેશબોર્ડમાં કેઓસ કન્સोल જુઓ",
    "bn": "ড্যাশবোর্ডে কেওস কনসোল দেখুন",
    "te": "డాష్‌బోర్డ్‌లో కేయోస్ కన్సోల్‌ను వీక్షించండి",
    "ta": "டாஷ்போர்டில் கேயாஸ் கன்சோலைக் காண்க",
    "kn": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ಕಾವೋಸ್ ಕನ್ಸೋಲ್ ಅನ್ನು ವೀಕ್ಷಿಸಿ"
  },
  "Minimize notification": {
    "hi": "अधिसूचना को छोटा करें",
    "pa": "ਨੋਟੀਫਿਕੇਸ਼ਨ ਛੋਟਾ ਕਰੋ",
    "mr": "सूचना कमी करा",
    "gu": "સૂચના નાની કરો",
    "bn": "বিজ্ঞপ্তি ছোট করুন",
    "te": "ప్రకటనను తగ్గించండి",
    "ta": "அறிவிப்பைக் குறைக்கவும்",
    "kn": "ಅಧಿಸೂಚನೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ"
  },
  "Click to view Live Field Incident Alert": {
    "hi": "लाइव फील्ड इंसिडेंट अलर्ट देखने के लिए क्लिक करें",
    "pa": "ਲਾਈਵ ਫੀਲਡ ਇੰਸੀਡੈਂਟ ਅਲਰਟ ਦੇਖਣ ਲਈ ਕਲਿੱਕ ਕਰੋ",
    "mr": "लाइव्ह फील्ड इन्सिडेंट अलर्ट पाहण्यासाठी क्लिक करा",
    "gu": "લાઇવ ફીલ્ડ ઇન્સિડેન્ટ ચેતવણી જોવા માટે ક્લિક કરો",
    "bn": "লাইভ ফিল্ড ইনসিডেন্ট অ্যালার্ট দেখতে ক্লিক করুন",
    "te": "లైవ్ ఫీల్డ్ ఇన్సిడెంట్ అలర్ట్‌ని వీక్షించడానికి క్లిక్ చేయండి",
    "ta": "லைவ் ஃபீல்ட் இன்சிடென்ட் அலர்ட்டைக் காண கிளிக் செய்க",
    "kn": "ಲೈವ್ ಫೀಲ್ಡ್ ಇನ್ಸಿಡೆಂಟ್ ಎಚ್ಚರಿಕೆಯನ್ನು ವೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ"
  },
  "APMC Mandi Emergency Resilience Monitor & Alert": {
    "hi": "APMC मंडी आपातकालीन लचीलापन मॉनिटर और अलर्ट",
    "pa": "APMC ਮੰਡੀ ਐਮਰਜੈਂਸੀ ਰੈਜ਼ੀਲੀਏਂਸ ਮਾਨੀਟਰ ਅਤੇ ਅਲਰਟ",
    "mr": "APMC मंडी आपत्कालीन रेझिलिअन्स मॉनिटर आणि अलर्ट",
    "gu": "APMC મંડી કટોકટી સ્થિતિસ્થાપકતા મોનિટર અને ચેતવણી",
    "bn": "APMC মান্ডি জরুরী স্থিতিস্থাপকতা মনিটর এবং সতর্কতা",
    "te": "APMC మండి అత్యవసర రెసిలియెన్స్ మానిటర్ & అలర్ట్",
    "ta": "APMC mandi அவசரகால நெகிழ்ச்சி மானிட்டர் & எச்சரிக்கை",
    "kn": "APMC ಮಂಡಿ ತುರ್ತು ಸ್ಥಿತಿಸ್ಥಾಪಕತ್ವ ಮಾನಿಟರ್ & ಎಚ್ಚರಿಕೆ"
  },
  "KISAN-Q Sahayak — Help Chat": {
    "hi": "KISAN-Q सहायक — सहायता चैट",
    "pa": "KISAN-Q ਸਹਾਇਕ — ਮਦਦ ਚੈਟ",
    "mr": "KISAN-Q सहायक — मदत चॅट",
    "gu": "KISAN-Q સહાયક — મદદ ચેટ",
    "bn": "KISAN-Q সহায়ক — সাহায্য চ্যাট",
    "te": "KISAN-Q సహాయక్ — సహాయ చాట్",
    "ta": "KISAN-Q சஹாயக் — உதவி அரட்டை",
    "kn": "KISAN-Q ಸಹಾಯಕ್ — ಸಹಾಯ ಚಾಟ್"
  },
  "Farmer Mobile App (Port 8443)": {
    "hi": "किसान मोबाइल ऐप (पोर्ट 8443)",
    "pa": "ਕਿਸਾਨ ਮੋਬਾਈਲ ਐਪ (ਪੋਰਟ 8443)",
    "mr": "शेतकरी मोबाईल ॲप (पोर्ट 8443)",
    "gu": "કિસાન મોબાઈલ એપ (પોર્ટ 8443)",
    "bn": "কৃষক মোবাইল অ্যাপ (পোর্ট 8443)",
    "te": "రైతు మొబైల్ యాప్ (పోర్ట్ 8443)",
    "ta": "உழவர் மொபைல் செயலி (போர்ட் 8443)",
    "kn": "ರೈತ ಮೊಬೈಲ್ ಆ್ಯಪ್ (ಪೋರ್ಟ್ 8443)"
  },
  "Farmer Portal": {
    "hi": "किसान पोर्टल",
    "pa": "ਕਿਸਾਨ ਪੋਰਟਲ",
    "mr": "शेतकरी पोर्टल",
    "gu": "ખેડૂત પોર્ટલ",
    "bn": "কৃষক পোর্টাল",
    "te": "రైతు పోర్టల్",
    "ta": "உழவர் தளம்",
    "kn": "ರೈತ ಪೋರ್ಟಲ್"
  },
  "Zero-Smartphone IVR": {
    "hi": "कीपैड फोन (IVR)",
    "pa": "ਕੀਪੈਡ ਫੋਨ (IVR)",
    "mr": "कीपॅड फोन (IVR)",
    "gu": "કીપેડ ફોન (IVR)",
    "bn": "কিপ্যাড ফোন (IVR)",
    "te": "కీప్యాడ్ ఫోన్ (IVR)",
    "ta": "விசைப்பலகை போன் (IVR)",
    "kn": "ಕೀಪ್ಯಾಡ್ ಫೋನ್ (IVR)"
  },
  "IMD Weather Radar": {
    "hi": "मौसम रडार",
    "pa": "ਮੌਸਮ ਰਾਡਾਰ",
    "mr": "हवामान रडार",
    "gu": "હવામાન રડાર",
    "bn": "আবহাওয়া রাডার",
    "te": "వాతావరణ రాడార్",
    "ta": "வானிலை ரேடார்",
    "kn": "ಹವಾಮಾನ ರೇಡಾರ್"
  },
  "Impact & Benefits": {
    "hi": "लाभ एवं प्रभाव",
    "pa": "ਲਾਭ ਅਤੇ ਪ੍ਰਭਾਵ",
    "mr": "नफा आणि फायदे",
    "gu": "ફાયદા અને પ્રભાવ",
    "bn": "লাভ ও প্রভাব",
    "te": "ప్రయోజనాలు & ప్రభావం",
    "ta": "பலன்கள் & தாக்கம்",
    "kn": "ಲಾಭ ಮತ್ತು ಪರಿಣಾಮ"
  },
  "APMC Standards & SOP": {
    "hi": "एपीएमसी मानक व एसओपी",
    "pa": "ਮੰਡੀ ਮਿਆਰ ਤੇ ਐਸਓਪੀ",
    "mr": "फील्ड आर्किटेक्चर मॅट्रिक्स",
    "gu": "ફીલ્ડ આર્કિટેક્ચર મેટ્રિક્સ",
    "bn": "ফিল্ড আর্কিটেকচার ম্যাট্রিক্স",
    "te": "ఫీల్డ్ ఆర్కిటెక్చర్ మ్యాట్రిక్స్",
    "ta": "கள கட்டமைப்பு அணி",
    "kn": "ಫೀಲ್ಡ್ ಆರ್ಕಿಟೆಕ್ಚರ್ ಮ್ಯಾಟ್ರಿಕ್ಸ್"
  },
  "Mandi Offers & Tenders": {
    "hi": "मंडी ऑफ़र और टेंड��",
    "pa": "ਮੰਡੀ ਪੇਸ਼ਕਸ਼ਾਂ ਅਤੇ ਟੈਂਡਰ",
    "mr": "मंडी ऑफर आणि टेंडर",
    "gu": "મંડી ઓફર્સ અને ટેન્ડર્સ",
    "bn": "মান্ডি অফার এবং টেন্ডার",
    "te": "మండి ఆఫర్లు & టెండర్లు",
    "ta": "மண்டி சலுகைகள் & டெண்டர்கள்",
    "kn": "ಮಂಡಿ ಕೊಡುಗೆಗಳು & ಟೆಂಡರ್‌ಗಳು"
  },
  "Price Timeline & Hikes/Lows": {
    "hi": "मूल्य समयरेखा और तेजी/मंदी",
    "pa": "ਮੁੱਲ ਸਮਾਂ-ਰੇਖਾ ਅਤੇ ਵਾਧੇ/ਘਟਾਵੇ",
    "mr": "किंमत कालरेषा आणि वाढ/घसरण",
    "gu": "ભાવ સમયરેખા અને વધારા/ઘટાડા",
    "bn": "দামের সময়রেখা এবং বৃদ্ধি/হ্রাস",
    "te": "ధరల కాలపట్టిక & పెరుగుదలలు/తగ్గుదలలు",
    "ta": "விலை காலவரிசை & உயர்வுகள்/வீழ்ச்சிகள்",
    "kn": "ಬೆಲೆ ಕಾಲಾವಧಿ & ಏರಿಕೆಗಳು/ಇಳಿಕೆಗಳು"
  },
  "Mandi Preview": {
    "hi": "मंडी पूर्वावलोकन व टूर",
    "pa": "ਮੰਡੀ ਝਲਕ ਤੇ ਟੂਰ",
    "mr": "मंडी पूर्वावलोकन",
    "gu": "મંડી પૂર્વાવલોકન",
    "bn": "মান্ডি পূর্বরূপ",
    "te": "మండి ప్రివ్యూ",
    "ta": "மண்டி முன்னோட்டம்",
    "kn": "ಮಂ��ಿ ಮುನ್ನೋಟ"
  },
  "Handbook PDF": {
    "hi": "हैंडबुक (PDF)",
    "pa": "ਹੈਂਡਬੁੱਕ (PDF)",
    "mr": "हँडबुक (PDF)",
    "gu": "હેન્ડબુક (PDF)",
    "bn": "হ্যান্ডবুক (PDF)",
    "te": "హ్యాండ్‌బుక్ (PDF)",
    "ta": "கையேடு (PDF)",
    "kn": "ಕೈಪಿಡಿ (PDF)"
  },
  "Wheat MSP ₹2,275/Qtl ▲ (+₹150) • 🍚 Paddy MSP ₹2,300/Qtl ▲ (+₹117) • 🌻 Mustard MSP ₹5,650/Qtl ▲ (+₹200) • 🚜 APMC Mandi #042: Gate 1 Smallholder Express Turnaround: 18 min • ⛈️ IMD Doppler Radar: Clear weather across North Indian mandis • 💰 1.77+ Crore Farmers paid via PFMS Direct Benefit Transfer • 🏛️ 1,361+ e-NAM Mandis Nationwide": {
    "hi": "गेहूं MSP ₹2,275/क्विंटल ▲ (+₹150) • 🍚 धान MSP ₹2,300/क्विंटल ▲ (+₹117) • 🌻 सरसों MSP ₹5,650/क्विंटल ▲ (+₹200) • 🚜 एपीएमसी मंडी: गेट 1 छोटे किसानों का टर्नअराउंड: 18 मिनट • ⛈️ आईएमडी डॉपलर रडार: मौसम साफ • 💰 1.77+ करोड़ किसानों को डीबीटी भुगतान • 🏛️ 1,361+ ई-नाम मंडियां सक्रिय",
    "pa": "ਕਣਕ MSP ₹2,275/ਕੁਇੰਟਲ ▲ (+₹150) • 🍚 ਝੋਨਾ MSP ₹2,300/ਕੁਇੰਟਲ ▲ (+₹117) • 🌻 ਸਰ੍ਹੋਂ MSP ₹5,650/ਕੁਇੰਟਲ ▲ (+₹200) • 🚜 ਏਪੀਐਮਸੀ ਮੰਡੀ: ਗੇਟ 1 ਟਰਨਅਰਾਊਂਡ: 18 ਮਿੰਟ • ⛈️ ਮੌਸਮ ਸਾਫ਼ • 💰 1.77+ ਕਰੋੜ ਕਿਸਾਨਾਂ ਨੂੰ ਡੀਬੀਟੀ ਭੁਗਤਾਨ",
    "mr": "गहू हमीभाव ₹2,275/क्विंटल ▲ (+₹150) • 🍚 भात हमीभाव ₹2,300/क्विंटल ▲ (+₹117) • 🌻 मोहरी हमीभाव ₹5,650/क्विंटल ▲ (+₹200) • 🚜 एपीएमसी मंडी: गेट 1 टर्नअराउंड: 18 मिनिटे • ⛈️ हवामान स्वच्छ • 💰 1.77+ कोटी शेतकऱ्यांना थेट बँक खात्यात पैसे जमा",
    "gu": "ઘઉં ટેકાનો ભાવ ₹2,275/ક્વિન્ટલ ▲ (+₹150) • 🍚 ડાંગર ₹2,300/ક્વિન્ટલ ▲ (+₹117) • 🌻 રાયડો/સરસવ ₹5,650/ક્વિન્ટલ ▲ (+₹200) • 🚜 યાર્ડ ગેટ 1 ટર્નઅરાઉન્ડ: 18 મિનિટ • ⛈️ હવામાન ચોખ્ખું • 💰 1.77+ કરોડ ખેડૂતોને સીધા ખાતામાં ચૂકવણી",
    "bn": "গম MSP ₹২,২৭৫/কুইন্টাল ▲ (+₹১৫০) • 🍚 ধান MSP ₹২,৩০০/কুইন্টাল ▲ (+₹১১৭) • 🌻 সরিষা MSP ₹৫,৬৫০/কুইন্টাল ▲ (+₹২০০) • 🚜 এপিএমসি মান্ডি: গেট ১ টার্নঅ্যারাউন্ড: ১৮ মিনিট • ⛈️ পরিষ্কার আবহাওয়া • 💰 ১.৭৭+ কোটি কৃষকের ব্যাংক অ্যাকাউন্টে সরাসরি টাকা স্থানান্তর",
    "te": "గోధుమల మద్దతు ధర ₹2,275/క్వింటా ▲ (+₹150) • 🍚 ధాన్యం మద్దతు ధర ₹2,300/క్వింటా ▲ (+₹117) • 🌻 ఆవాలు ₹5,650/క్వింటా ▲ (+₹200) • 🚜 మార్కెట్ యార్డ్ గేట్ 1 టర్న్‌అరౌండ్: 18 నిమిషాలు • ⛈️ వాతావరణం అనుకూలం • 💰 1.77+ కోట్ల మంది రైతులకు నేరుగా ఖాతాల్లోకి నగదు",
    "ta": "கோதுமை ஆதரவு விலை ₹2,275/குவிண்டால் ▲ (+₹150) • 🍚 நெல் ஆதரவு விலை ₹2,300/குவிண்டால் ▲ (+₹117) • 🌻 கடுகு ₹5,650/குவிண்டால் ▲ (+₹200) • 🚜 மண்டி கேட் 1 பணி நேரம்: 18 நிமிடங்கள் • ⛈️ தெளிவான வானிலை • 💰 1.77+ கோடி விவசாயிகளுக்கு நேரடி வங்கிப் பரிமாற்றம்",
    "kn": "ಗೋಧಿ ಬೆಂಬಲ ಬೆಲೆ ₹2,275/ಕ್ವಿಂಟಾಲ್ ▲ (+₹150) • 🍚 ಭತ್ತ ₹2,300/ಕ್ವಿಂಟಾಲ್ ▲ (+₹117) • 🌻 ಸಾಸಿವೆ ₹5,650/ಕ್ವಿಂಟಾಲ್ ▲ (+₹200) • 🚜 ಎಪಿಎಂಸಿ ಗೇಟ್ 1 ಸರದಿ ಸಮಯ: 18 ನಿಮಿಷ • ⛈️ ಹವಾಮಾನ ಸ್ವಚ್ಛ • 💰 1.77+ ಕೋಟಿ ರೈತರಿಗೆ ನೇರ ನಗದು ವರ್ಗಾವಣೆ"
  },
  ".77+ Crore": {
    "hi": ".77+ करोड़",
    "pa": ".77+ ਕਰੋੜ",
    "mr": ".77+ कोटी",
    "gu": ".77+ કરોડ",
    "bn": "১.৭৭+ কোটি",
    "te": ".77+ కోట్లు",
    "ta": ".77+ கோடி",
    "kn": ".77+ ಕೋಟಿ"
  },
  ",361+ Mandis": {
    "hi": ",361+ मंडियां",
    "pa": ",361+ ਮੰਡੀਆਂ",
    "mr": ",361+ मंडया",
    "gu": ",361+ માર્કેટ યાર્ડ",
    "bn": "১,৩৬১+ মান্ডি",
    "te": ",361+ మార్కెట్ యార్డులు",
    "ta": ",361+ மண்டிகள்",
    "kn": ",361+ ಮಾರುಕಟ್ಟೆಗಳು"
  },
  "% Wait Cut": {
    "hi": "% इंतज़ार खत्म",
    "pa": "% ਉਡੀਕ ਘਟੀ",
    "mr": "% प्रतीक्षा कमी",
    "gu": "% રાહ જોવામાં ઘટાડો",
    "bn": "৯৬% অপেক্ষা হ্রাস",
    "te": "% వేచి ఉండే సమయం తగ్గింపు",
    "ta": "% காத்திருப்பு குறைவு",
    "kn": "% ಕಾಯುವಿಕೆ ಕಡಿತ"
  },
  "h → 45m Turnaround": {
    "hi": "घंटे → मात्र 45 मिनट",
    "pa": "ਘੰਟੇ → ਸਿਰਫ਼ 45 ਮਿੰਟ",
    "mr": "तास → फक्त 45 मिनिटे",
    "gu": "કલાક → માત્ર 45 મિનિટ",
    "bn": "১৮ ঘণ্টা → মাত্র ৪৫ মিনিট",
    "te": "గంటలు → కేవలం 45 నిమిషాలు",
    "ta": "மணிநேரம் → வெறும் 45 நிமிடம்",
    "kn": "ಗಂಟೆ → ಕೇವಲ 45 ನಿಮಿಷ"
  },
  "% DBT": {
    "hi": "% डीबीटी",
    "pa": "% ਡੀਬੀਟੀ",
    "mr": "% डीबीटी",
    "gu": "% ડીબીટી",
    "bn": "১০০% ডিবিটি",
    "te": "% డిబిటి",
    "ta": "% நேரடி மானியம்",
    "kn": "% ಡಿಬಿಟಿ"
  },
  "-Digit OTP": {
    "hi": "-अंकीय ओटीपी (OTP)",
    "pa": "-ਅੰਕਾਂ ਦਾ ਓਟੀਪੀ (OTP)",
    "mr": "-अंकी ओटीपी (OTP)",
    "gu": "-અંકનો ઓટીપી (OTP)",
    "bn": "৪-সংখ্যার ওটিপি (OTP)",
    "te": "-అంకెల ఓటీపీ (OTP)",
    "ta": "-இலக்க OTP",
    "kn": "-ಅಂಕಿಯ ಒಟಿಪಿ (OTP)"
  },
  "MANDI OPERATIONAL CRISIS ACTIVE": {
    "hi": "मंडी परिचालन संकट सक्रिय",
    "pa": "ਮੰਡੀ ਸੰਕਟ ਸਰਗਰਮ",
    "mr": "मंडी परिचालन आणीबाणी सक्रिय",
    "gu": "મંડી કામગીરી કટોકટી સક્રિય",
    "bn": "মান্ডি অপারেশনাল সংকট সক্রিয়",
    "te": "మండి కార్యాచరణ సంక్షోభం క్రియాశీలకం",
    "ta": "மண்டி செயல்பாட்டு நெருக்கடி செயலில்",
    "kn": "ಮಂಡಿ ಕಾರ್ಯಾಚರಣೆಯ ಬಿಕ್ಕಟ್ಟು ಸಕ್ರಿಯ"
  },
  "-WHEELER AXLE SNAPPED AT GATE 1 INWARD RAMP!": {
    "hi": "गेट 1 इनवर्ड रैंप पर 10-चक्का ट्रॉली का एक्सल टूटा!",
    "pa": "ਗੇਟ 1 'ਤੇ 10-ਟਾਇਰੀ ਟਰਾਲੀ ਦਾ ਐਕਸਲ ਟੁੱਟਿਆ!",
    "mr": "गेट 1 च्या रॅम्पवर 10 चाकी वाहनाचा एक्सल तुटला!",
    "gu": "ગેટ 1 ઇનવર્ડ રેમ્પ પર 10-વ્હીલર એક્સલ તૂટી ગયો!",
    "bn": "গেট ১ ইনওয়ার্ড র‍্যাম্পে ১০ চাকার এক্সেল ভেঙে গেছে!",
    "te": "గేట్ 1 వద్ద 10-వీలర్ యాక్సిల్ విరిగిపోయింది!",
    "ta": "கேட் 1 நுழைவுப் பாதையில் 10 சக்கர வாகன அச்சு முறிந்தது!",
    "kn": "ಗೇಟ್ 1 ಇನ್‌ವರ್ಡ್ ಇಳಿಜಾರಿನಲ್ಲಿ 10 ಚಕ್ರಗಳ ವಾಹನದ ಆಕ್ಸಲ್ ಮುರಿದಿದೆ!"
  },
  "CENTRAL SERVER OUTAGE (HTTP 503)": {
    "hi": "केंद्रीय सर्वर आउटेज (HTTP 503)",
    "pa": "ਕੇਂਦਰੀ ਸਰਵਰ ਆਊਟੇਜ (HTTP 503)",
    "mr": "केंद्रीय सर्व्हर बंद (HTTP 503)",
    "gu": "કેન્દ્રીય સર્વર આઉટેજ (HTTP 503)",
    "bn": "কেন্দ্রীয় সার্ভার বন্ধ (HTTP 503)",
    "te": "కేంద్ర సర్వర్ అంతరాయం (HTTP 503)",
    "ta": "மத்திய சர்வர் செயலிழப்பு (HTTP 503)",
    "kn": "ಕೇಂದ್ರ ಸರ್ವರ್ ಸ್ಥಗಿತ (HTTP 503)"
  },
  "RADAR CLEAR: ACTIVE PACING": {
    "hi": "मौसम साफ: सामान्य तुलाई जारी",
    "pa": "ਮੌਸਮ ਸਾਫ਼: ਆਮ ਤੁਲਾਈ ਜਾਰੀ",
    "mr": "हवामान स्वच्छ: सुरळीत कामकाज",
    "gu": "હવામાન ચોખ્ખું: સામાન્ય કામગીરી",
    "bn": "আকাশ পরিষ্কার: নিয়মিত ওজন চলছে",
    "te": "వాతావరణం క్లియర్: సాధారణ వేగం",
    "ta": "வானிலை தெளிவு: வழக்கமான செயல்பாடு",
    "kn": "ಹವಾಮಾನ ಸ್ಪಷ್ಟ: ಸಾಮಾನ್ಯ ಕಾರ್ಯಾಚರಣೆ"
  },
  "Live Simulation Console: Operational Climate Resilience": {
    "hi": "लाइव सिमुलेशन कंसोल: परिचालन एवं मौसमी लचीलापन",
    "pa": "ਲਾਈਵ ਸਿਮੂਲੇਸ਼ਨ ਕੰਸੋਲ: ਕਾਰਜਸ਼ੀਲ ਅਤੇ ਮੌਸਮੀ ਲਚਕੀਲਾਪਨ",
    "mr": "थेट सिम्युलेशन कन्सोल: ऑपरेशनल आणि हवामान लवचिकता",
    "gu": "લાઇવ સિમ્યુલેશન કન્સોલ: ઓપરેશનલ અને ક્લાઇમેટ સ્થિતિસ્થાપકતા",
    "bn": "লাইভ সিমুলেশন কনসোল: অপারেশনাল ও জলবায়ু স্থিতিস্থাপকতা",
    "te": "లైవ్ సిమ్యులేషన్ కన్సోల్: కార్యాచరణ & వాతావరణ స్థిరత్వం",
    "ta": "நேரலை சிமுலேஷன் கன்சோல்: செயல்பாட்டு மற்றும் காலநிலை மீள்தன்மை",
    "kn": "ಲೈವ್ ಸಿಮ್ಯುಲೇಶನ್ ಕನ್ಸೋಲ್: ಕಾರ್ಯಾಚರಣೆಯ ಮತ್ತು ಹವಾಮಾನ ಸ್ಥಿತಿಸ್ಥಾಪಕತ್ವ"
  },
  "Typical Theoretical Software (Fails in Field)": {
    "hi": "सामान्य किताबी सॉफ्टवेयर (जमीन पर फेल)",
    "pa": "ਆਮ ਕਿਤਾਬੀ ਸਾਫਟਵੇਅਰ (ਜ਼ਮੀਨ 'ਤੇ ਫੇਲ੍ਹ)",
    "mr": "सामान्य सैद्धांतिक सॉफ्टवेअर (जमिनीवर अपयशी)",
    "gu": "સામાન્ય સૈદ્ધાંતિક સોફ્ટવેર (જમીન પર નિષ્ફળ)",
    "bn": "সাধারণ তাত্ত্বিক সফটওয়্যার (মাঠে ব্যর্থ)",
    "te": "సాధారణ సైద్ధాంతిక సాఫ్ట్‌వేర్ (క్షేత్రంలో విఫలం)",
    "ta": "பொதுவான கோட்பாட்டு மென்பொருள் (களத்தில் தோல்வி)",
    "kn": "ಸಾಮಾನ್ಯ ಸೈದ್ಧಾಂತಿಕ ಸಾಫ್ಟ್‌ವೇರ್ (ಕ್ಷೇತ್ರದಲ್ಲಿ ವಿಫಲ)"
  },
  "KISAN-Q Field-Hardened Architecture": {
    "hi": "किसान-क्यू फील्ड आर्किटेक्चर (जमीन पर सफल)",
    "pa": "ਕਿਸਾਨ-ਕਿਊ ਜ਼ਮੀਨੀ ਆਰਕੀਟੈਕਚਰ (ਕਾਮਯਾਬ)",
    "mr": "किसान-क्यू फील्ड-हार्डन्ड आर्किटेक्चर (यशस्वी)",
    "gu": "કિસાન-ક્યૂ ફિલ્ડ આર્કિટેક્ચર (સફળ)",
    "bn": "কিষাণ-কিউ ফিল্ড-হার্ডেন্ড আর্কিটেকচার (সফল)",
    "te": "కిసాన్-క్యూ ఫీల్డ్-హార్డెన్డ్ ఆర్కిటెక్చర్ (విజయవంతం)",
    "ta": "கிசான்-கியூ கள-சான்றளிக்கப்பட்ட கட்டமைப்பு (வெற்றி)",
    "kn": "ಕಿಸಾನ್-ಕ್ಯೂ ಫೀಲ್ಡ್-ಹಾರ್ಡನ್ಡ್ ಆರ್ಕಿಟೆಕ್ಚರ್ (ಯಶಸ್ವಿ)"
  },
  "Farmer Mobile App": {
    "hi": "किसान मोबाइल ऐप",
    "pa": "ਕਿਸਾਨ ਮੋਬਾਈਲ ਐਪ",
    "mr": "शेतकरी मोबाईल अॅप",
    "gu": "ખેડૂત મોબાઇલ એપ્લિકેશન",
    "bn": "কৃষক মোবাইল অ্যাপ",
    "te": "రైతు మొబైల్ యాప్",
    "ta": "விவசாயி மொபைல் செயலி",
    "kn": "ರೈತ ಮೊಬೈಲ್ ಆಪ್"
  },
  "LIVE BONUS": {
    "hi": "लाइव बोनस",
    "pa": "ਲਾਈਵ ਬੋਨਸ",
    "mr": "लाईव्ह बोनस",
    "gu": "લાઈવ બોનસ",
    "bn": "লাইভ বোনাস",
    "te": "లైవ్ బోనస్",
    "ta": "நேரலை போனஸ்",
    "kn": "ಲೈವ್ ಬೋನಸ್"
  },
  "Wheat (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •": {
    "hi": "गेहूं (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "pa": "ਕਣਕ (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "mr": "गहू (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "gu": "ઘઉં (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "bn": "গম (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "te": "గోధుమలు (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "ta": "கோதுமை (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •",
    "kn": "ಗೋಧಿ (गेहूं / ਕਣਕ) MSP ₹2,275/Qtl ▲ (+₹150) •"
  },
  "Paddy (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •": {
    "hi": "धान (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "pa": "ਝੋਨਾ (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "mr": "भात (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "gu": "ડાંગર (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "bn": "ধান (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "te": "ధాన్యం (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "ta": "நெல் (धान / ਝੋਨਾ) MSP ₹2,300/Qtl ▲ (+₹117) •",
    "kn": "ಭತ್ತ (धान / ਝੋਨ���) MSP ₹2,300/Qtl ▲ (+₹117) •"
  },
  "Mustard (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •": {
    "hi": "सरसों (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "pa": "ਸਰ੍ਹੋਂ (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "mr": "मोहरी (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "gu": "રાઈ (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "bn": "সরিষা (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "te": "ఆవాలు (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "ta": "கடுகு (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •",
    "kn": "ಸಾಸಿವೆ (सरसों / ਸਰ੍ਹੋਂ) MSP ₹5,650/Qtl ▲ (+₹200) •"
  },
  "APMC Mandi #042: Gate 1 Smallholder Express Turnaround: 18 min •": {
    "hi": "APMC मंडी #042: गेट 1 छोटे किसानों का एक्सप्रेस टर्नअराउंड: 18 मिनट •",
    "pa": "���� APMC ਮੰਡੀ #042: ਗੇਟ 1 ਛੋਟੇ ਕਿਸਾਨਾਂ ਦਾ ਐਕਸਪ੍ਰੈੱਸ ਟਰਨਅਰਾਊਂਡ: 18 ਮਿੰਟ •",
    "mr": "APMC मंडी #042: गेट 1 अल्पभूधारक एक्सप्रेस टर्नअराउंड: 18 मिनिटे •",
    "gu": "APMC મંડી #042: ગેટ 1 નાના ખેડૂતોનું એક્સપ્રેસ ટર્નઅરાઉન્ડ: 18 મિનિટ •",
    "bn": "APMC মান্ডি #042: গেট 1 ক্ষুদ্র কৃষক এক্সপ্রেস টার্নঅ্যারাউন্ড: 18 মিনিট •",
    "te": "APMC మండి #042: గేట్ 1 సన్నకారు రైతుల ఎక్స్ప్రెస్ టర్న్‌అరౌండ్: 18 నిమిషాలు •",
    "ta": "APMC மண்டி #042: கேட் 1 சிறு விவசாயிகளின் எக்ஸ்பிரஸ் டர்ன்அரவுண்ட்: 18 நிமிடம் •",
    "kn": "APMC ಮಂಡಿ #042: ಗೇಟ್ 1 ಸಣ್ಣ ರೈತರ ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಟರ್ನ್‌ಅರೌಂಡ್: 18 ನಿಮಿಷಗಳು •"
  },
  "IMD Doppler Radar: Clear weather across North Indian mandis •": {
    "hi": "IMD डॉपलर रडार: उत्तर भारतीय मंडियों में साफ मौसम •",
    "pa": "IMD ਡੌਪਲਰ ਰਡਾਰ: ਉੱਤਰੀ ਭਾਰਤੀ ਮੰਡੀਆਂ ਵਿੱਚ ਸਾਫ਼ ਮੌਸਮ •",
    "mr": "IMD डॉपलर रडार: उत्तर भारतीय मंड्यांमध्ये स्वच्छ हवामान •",
    "gu": "IMD ડોપ્લર રડાર: ઉત્તર ભારતીય મંડીઓમાં ચોખ્ખું વાતાવરણ •",
    "bn": "IMD ডপলার রাডার: উত্তর ভারতীয় মান্ডিগুলিতে পরিষ্কার আবহাওয়া •",
    "te": "IMD డాప్లర్ రాడార్: ఉత్తర భారత మండిలలో స్పష్టమైన వాతావరణం •",
    "ta": "IMD டாப்ளர் ரேடார்: வட இந்திய மண்டிகளில் தெளிவான வானிலை •",
    "kn": "IMD ಡಾಪ್ಲರ್ ರಾಡಾರ್: ಉತ್ತರ ಭಾರತದ ಮಂಡಿಗಳಲ್ಲಿ ಸ್ಪಷ್ಟ ಹವಾಮಾನ •"
  },
  ".77+ Crore Farmers paid via PFMS Direct Benefit Transfer •": {
    "hi": "PFMS डायरेक्ट बेनिफिट ट्रांसफर के माध्यम से 1.77+ करोड़ किसानों को भुगतान •",
    "pa": "PFMS ਡਾਇਰੈਕਟ ਬੈਨਿਫિટ ਟਰਾਂਸਫਰ ਰਾਹੀਂ 1.77+ ਕਰੋੜ ਕਿਸਾਨਾਂ ਨੂੰ ਭੁਗਤਾਨ •",
    "mr": "PFMS डायरेक्ट बेनिफिट ट्रान्सफरद्वारे 1.77+ कोटी शेतकऱ्यांना पैसे दिले •",
    "gu": "PFMS ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર દ્વારા 1.77+ કરોડ ખેડૂતોને ચૂકવણી •",
    "bn": "PFMS ডিরেক্ট বেনিফিট ট্রান্সফারের মাধ্যমে ১.৭৭+ কোটি কৃষককে পেমেন্ট দেওয়া হয়েছে •",
    "te": "PFMS డైరెక్ట్ బెనిఫిట్ ట్రాన్స్‌ఫర్ ద్వారా 1.77+ కోట్ల మంది రైతులకు చెల్లింపులు •",
    "ta": "PFMS நேரடிப் பயன் பரிமாற்றம் (DBT) மூலம் 1.77+ கோடி விவசாயிகளுக்குப் பணம் செலுத்தப்பட்டுள்ளது •",
    "kn": "PFMS ನೇರ ಲಾಭ ವರ್ಗಾವಣೆ (DBT) ಮೂಲಕ 1.77+ ಕೋಟಿ ರೈತರಿಗೆ ಪಾವತಿ •"
  },
  ",361+ e-NAM Mandis Nationwide": {
    "hi": "देश भर में 1,361+ e-NAM मंडियां",
    "pa": "ਦੇਸ਼ ਭਰ ਵਿੱਚ 1,361+ e-NAM ਮੰਡੀਆਂ",
    "mr": "देशभरात 1,361+ e-NAM मोंड्या",
    "gu": "દેશભરમાં 1,361+ e-NAM મંડીઓ",
    "bn": "দেশজুড়ে ১,৩৬১+ e-NAM মান্ডি",
    "te": "దేశవ్యాప్తంగా 1,361+ e-NAM మండిలు",
    "ta": "நாடு முழுவதும் 1,361+ e-NAM Mandis",
    "kn": "ದೇಶಾದ್ಯಂತ 1,361+ e-NAM ಮಂಡಿಗಳು"
  },
  "incoming tractors to Gate 2 (South Yard)": {
    "hi": "आने वाले ट्रैक्टरों को गेट 2 (साउथ यार्ड) की ओर",
    "pa": "ਆਉਣ ਵਾਲੇ ਟਰੈਕਟਰਾਂ ਨੂੰ ਗੇਟ 2 (ਸਾਊਥ ਯਾਰਡ)",
    "mr": "गेट 2 (साउथ यार्ड) कडे येणारी 18 ट्रॅक्टर",
    "gu": "ગેટ 2 (સાઉથ યાર્ડ) પર આવતા 18 ટ્રેક્ટર",
    "bn": "গেট ২ (সাউথ ইয়ার্ড)-এ আগত ১৮টি ট্রাক্টর",
    "te": "గేట్ 2 (సౌత్ యార్డ్)కి వచ్చే 18 ట్రాక్టర్లు",
    "ta": "கேட் 2 (தெற்கு யார்ட்) நோக்கி வரும் 18 டிராக்டர்கள்",
    "kn": "ಗೇಟ್ 2 (ದಕ್ಷಿಣ യാರ್ಡ್) ಗೆ ಬರುತ್ತಿರುವ 18 ಟ್ರ್ಯಾಕ���ಟರ್‌ಗಳು"
  },
  "IMD DOPPLER RADAR EMERGENCY WEATHER PAUSE ACTIVATED": {
    "hi": "IMD डॉपलर रडार इमरजेंसी वेदर पॉज एक्टिवेटेड",
    "pa": "IMD ਡੌਪਲਰ ਰਡਾਰ ਐਮਰਜੈਂਸੀ ਵੈਦਰ ਪੌਜ਼ ਐਕਟੀਵੇਟਿਡ",
    "mr": "IMD डॉपलर रडार इमर्जन्सी वेदर पॉज ॲक्टिव्हेटेड",
    "gu": "IMD ડોપ્લર રાડર ઇમરજન્સી વેધર પોઝ એક્ટિવિટેડ",
    "bn": "IMD ডপলার রাডার ইমার্জেন্সি ওয়েদার পজ অ্যাক্টিভেটেড",
    "te": "IMD డాప్లర్ రాడార్ ఎమర్జెన్సీ వెదర్ పాజ్ యాక్టివేటెడ్",
    "ta": "IMD DOPPLER RADAR EMERGENCY WEATHER PAUSE ACTIVATED",
    "kn": "IMD ಡಾಪ್ಲರ್ ರಡಾರ್ ಎಮರ್ಜೆನ್ಸಿ ವೆದರ್ ಪಾಸ್ ಆಕ್ಟಿವೇಟೆಡ್"
  },
  "+₹125 MSP": {
    "hi": "+₹125 MSP",
    "pa": "+₹125 MSP",
    "mr": "+₹125 MSP",
    "gu": "+₹125 MSP",
    "bn": "+₹125 MSP",
    "te": "+₹125 MSP",
    "ta": "+₹125 MSP",
    "kn": "+₹125 MSP"
  },
  "+₹115 MSP": {
    "hi": "+₹115 MSP",
    "pa": "+₹115 MSP",
    "mr": "+₹115 MSP",
    "gu": "+₹115 MSP",
    "bn": "+₹115 MSP",
    "te": "+₹115 MSP",
    "ta": "+₹115 MSP",
    "kn": "+₹115 MSP"
  },
  "+₹135 MSP": {
    "hi": "+₹135 MSP",
    "pa": "+₹135 MSP",
    "mr": "+₹135 MSP",
    "gu": "+₹135 MSP",
    "bn": "+₹135 MSP",
    "te": "+₹135 MSP",
    "ta": "+₹135 MSP",
    "kn": "+₹135 MSP"
  },
  "+₹117 MSP": {
    "hi": "+₹117 MSP",
    "pa": "+₹117 MSP",
    "mr": "+₹117 MSP",
    "gu": "+₹117 MSP",
    "bn": "+₹117 MSP",
    "te": "+₹117 MSP",
    "ta": "+₹117 MSP",
    "kn": "+₹117 MSP"
  },
  "+₹100 MSP": {
    "hi": "+₹100 MSP",
    "pa": "+₹100 MSP",
    "mr": "+₹100 MSP",
    "gu": "+₹100 MSP",
    "bn": "+₹100 MSP",
    "te": "+₹100 MSP",
    "ta": "+₹100 MSP",
    "kn": "+₹100 MSP"
  },
  "+₹200 MSP": {
    "hi": "+₹200 MSP",
    "pa": "+₹200 MSP",
    "mr": "+₹200 MSP",
    "gu": "+₹200 MSP",
    "bn": "+₹200 MSP",
    "te": "+₹200 MSP",
    "ta": "+₹200 MSP",
    "kn": "+₹200 MSP"
  },
  "/ Slot Scheduling": {
    "hi": "/ स्लॉट शेड्यूलिंग",
    "pa": "/ ਸਲਾਟ ਸ਼ਡਿਊਲਿੰग",
    "mr": "/ स्लॉट शेड्यूलिंग",
    "gu": "/ સ્લોટ શેડ્યુલિંગ",
    "bn": "/ স্লট সময়সূচী",
    "te": "/ స్లాట్ షెడ్యూలింగ్",
    "ta": "/ ஸ்லாட் திட்டமிடல்",
    "kn": "/ ಸ್ಲಾಟ್ ವೇಳಾಪಟ್ಟಿ"
  },
  "/ Quality Assaying": {
    "hi": "/ गुणवत्ता परीक्षण",
    "pa": "/ ਗੁਣਵੱਤਾ ਜਾਂਚ",
    "mr": "/ गुणवत्ता चाचणी",
    "gu": "/ ગુણવત્તા ચકાસણી",
    "bn": "/ মান পরীক্ষা",
    "te": "/ నాణ్యత పరీక్ష",
    "ta": "/ தரப் பரிசோதனை",
    "kn": "/ ಗುಣಮಟ್ಟ ಪರೀಕ್ಷೆ"
  },
  "/ Market Intelligence": {
    "hi": "/ बाजार खुफिया (मार्केट इंटेलिजेंस)",
    "pa": "/ ਬਾਜ਼ਾਰ ਖੁਫੀਆ (ਮਾਰਕੀਟ ਇੰਟੈਲੀਜੈਂਸ)",
    "mr": "/ बाजार माहिती (मार्केट इंटेलिजेंस)",
    "gu": "/ બજાર ગુપ્તચર (માર્કેટ ઇન્ટેલિજન્સ)",
    "bn": "/ বাজার গোয়েন্দা (মার্কেট ইন্টেলিজেন্স)",
    "te": "/ మార్కెట్ ఇంటెలిజెన్స్",
    "ta": "/ சந்தை நுண்ணறிவு",
    "kn": "/ ಮಾರುಕಟ್ಟೆ ಗುಪ್ತಚರ (ಮಾರ್ಕೆಟ್ ಇಂಟೆಲಿಜೆನ್ಸ್)"
  },
  "/ Direct Payment": {
    "hi": "/ प्रत्यक्ष भुगतान",
    "pa": "/ ਸਿੱਧਾ ਭੁਗਤਾਨ",
    "mr": "/ थेट पेमेंट",
    "gu": "/ પ્રત્યક્ષ ચુકવણી",
    "bn": "/ সরাসরি পেমেন্ট",
    "te": "/ నేరుగా చెల్లింపు",
    "ta": "/ நேரடி செலுத்துதல்",
    "kn": "/ ನೇರ ಪಾವತಿ"
  },
  "/ Offline Resilience": {
    "hi": "/ ऑफलाइन लचीलापन (रेसिलिएंस)",
    "pa": "/ ਆਫਲਾਈਨ ਲਚਕਤਾ",
    "mr": "०५ / ऑफलाइन लवचिकता",
    "gu": "/ ઓફલાઇન સ્થિતિસ્થાપકતા",
    "bn": "০৫ / অফলাইন স্থিতিস্থাপকতা",
    "te": "/ ఆఫ్‌లైన్ రెసిడెన్స్",
    "ta": "/ ஆஃப்லைன் மீளுருவாக்கம்",
    "kn": "/ ಆಫ್‌ಲೈನ್ ಮರುಪಡೆಯುವಿಕೆ"
  },
  "/ Support & Help": {
    "hi": "/ सहायता और मदद",
    "pa": "/ ਸਹਾਇਤਾ ਅਤੇ ਮਦਦ",
    "mr": "०६ / सहाय्य आणि मदत",
    "gu": "/ સપોર્ટ અને મદદ",
    "bn": "০৬ / সহায়তা ও সাহায্য",
    "te": "/ మద్దతు & సహాయం",
    "ta": "/ ஆதரவு & உதவி",
    "kn": "/ ಬೆಂಬಲ ಮತ್ತು ಸಹಾಯ"
  },
  "x7 Multi-Lingual Helpline": {
    "hi": "x7 बहुभाषी हेल्पलाइन",
    "pa": "x7 ਬਹੁ-ਭਾਸ਼ਾਈ ਹੈਲਪਲਾਈਨ",
    "mr": "२४x७ बहुभाषिक हेल्पलाइन",
    "gu": "x7 બહુભાષી હેલ્પલાઇন",
    "bn": "২৪x৭ বহুলভাষিক হেল্পলাইন",
    "te": "x7 బహుభాషా హెల్ప్‌లైన్",
    "ta": "x7 பன்மொழி உதவி எண்",
    "kn": "x7 ಬಹುಭಾಷಾ ಸಹಾಯವಾಣಿ"
  },
  "Marginal (Wheat)": {
    "hi": "सीमांत (गेहूं)",
    "pa": "ਸੀਮਾਂਤ (ਕਣਕ)",
    "mr": "अत्यल्प भूधारक (गहू)",
    "gu": "સીમાંત (ઘઉં)",
    "bn": "প্রান্ত��ক (গম)",
    "te": "సన్నకారు (గోధుమ)",
    "ta": "குறு விவசாயி (கோதுமை)",
    "kn": "ಅತಿ ಸಣ್ಣ (ಗೋಧಿ)"
  },
  "Small (Mustard)": {
    "hi": "लघु (सरसों)",
    "pa": "ਛੋਟਾ (ਸੋਇਆਬੀਨ/ਰਾਇਆ)",
    "mr": "लहान (मोहरी)",
    "gu": "નાનું (રાય)",
    "bn": "ক্ষুদ্র (সরিষা)",
    "te": "చిన్నకారు (ఆవాలు)",
    "ta": "சிறு விவசாயி (கடுகு)",
    "kn": "ಸಣ್ಣ (ಸಾಸಿವೆ)"
  },
  "Commercial (5.5 ha)": {
    "hi": "व्यावसायिक (5.5 हे)",
    "pa": "ਵਪਾਰਕ (5.5 ਹੈਕਟੇਅਰ)",
    "mr": "व्यावसायिक (5.5 हे)",
    "gu": "વ્યાપારી (5.5 હે)",
    "bn": "বাণিজ্যিক (5.5 হেক্টর)",
    "te": "వాణిజ్య (5.5 హెక్టార్లు)",
    "ta": "வணிக விவசாயி (5.5 ஹெக்டேர்)",
    "kn": "ವಾಣಿಜ್ಯ (5.5 ಹೆ)."
  },
  "FAIR-SHARE PRIORITY (<2 ha)": {
    "hi": "फेयर-शेयर प्राथमिकता (<2 ha)",
    "pa": "फेयर-शेयर प्राथमिकता (<2 ha)",
    "mr": "फेअर-शेअर प्राधान्य (<2 ha)",
    "gu": "ફેેર-શેર અગ્રતા (<2 ha)",
    "bn": "ফেয়ার-শেয়ার অগ্রাধিকার (<2 ha)",
    "te": "ఫెయిర్-షేర్ ప్రాధాన్యత (<2 ha)",
    "ta": "நியாயமான-பங்கு முன்னுரிமை (<2 ha)",
    "kn": "ಫೇರ್-ಶೇರ್ ಪ್ರಾಮುಖ್ಯತೆ (<2 ha)"
  },
  "seconds": {
    "hi": "सेकंड",
    "pa": "ਸਕਿੰਟ",
    "mr": "सेकंद",
    "gu": "સેકન્ડ",
    "bn": "সেকেন্ড",
    "te": "సెకన్లు",
    "ta": "வினாடிகள்",
    "kn": "ಸೆಕೆಂಡುಗಳು"
  },
  "% of marginal Indian farmers": {
    "hi": "% सीमांत भारतीय किसान",
    "pa": "% ਸੀਮਾਂਤ ਭਾਰਤੀ ਕਿਸਾਨ",
    "mr": "% सीमांत भारतीय शेतकरी",
    "gu": "% સીમાંત ભારતીય ખેડૂતો",
    "bn": "৬০% প্রান্তিক ভারতীয় কৃষক",
    "te": "% సన్నకారు భారతీయ రైతులు",
    "ta": "% சிறு விவசாய இந்திய விவசாயிகள்",
    "kn": "% ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ಭಾರತೀಯ ರೈತರು"
  },
  "Hindi (हिन्दी)": {
    "hi": "हिंदी (हिन्दी)",
    "pa": "ਹਿੰਦੀ (हिन्दी)",
    "mr": "हिंदी (हिन्दी)",
    "gu": "હિન્દી (हिन्दी)",
    "bn": "হিন্দি (हिन्दी)",
    "te": "హిందీ (हिन्दी)",
    "ta": "இந்தி (हिन्दी)",
    "kn": "ಹಿಂದಿ (हिन्दी)"
  },
  "Punjabi (ਪੰਜਾਬੀ)": {
    "hi": "पंजाबी (ਪੰਜਾਬੀ)",
    "pa": "ਪੰਜਾਬੀ (ਪੰਜਾਬੀ)",
    "mr": "पंजाबी (ਪੰਜਾਬੀ)",
    "gu": "પંજાબી (ਪੰਜਾਬੀ)",
    "bn": "পাঞ্জাবি (ਪੰਜਾਬੀ)",
    "te": "పంజాబీ (ਪੰਜਾਬੀ)",
    "ta": "பஞ்சாபி (ਪੰਜਾਬੀ)",
    "kn": "ಪಂಜಾಬಿ (ਪੰਜਾਬੀ)"
  },
  "Marathi (मराठी)": {
    "hi": "मराठी (मराठी)",
    "pa": "ਮਰਾਠੀ (मराठी)",
    "mr": "��� मराठी (मराठी)",
    "gu": "મરાઠી (मराठी)",
    "bn": "মারাঠি (मराठी)",
    "te": "మరాఠీ (मराठी)",
    "ta": "மராத்தி (मराठी)",
    "kn": "ಮರಾಠಿ (मराठी)"
  },
  "Gujarati (ગુજરાતી)": {
    "hi": "गुजराती (ગુજરાતી)",
    "pa": "ਗੁਜਰਾਤੀ (ગુજરાતી)",
    "mr": "गुजराती (ગુજરાતી)",
    "gu": "ગુજરાતી (ગુજરાતી)",
    "bn": "গুজরাটি (ગુજરાતી)",
    "te": "గుజరాతీ (ગુજરાતી)",
    "ta": "குஜராத்தி (ગુજરાતી)",
    "kn": "ಗುಜರಾತಿ (ગુજરાતી)"
  },
  "Bengali (বাংলা)": {
    "hi": "बंगाली (বাংলা)",
    "pa": "ਬੰਗਾਲੀ (বাংলা)",
    "mr": "बंगाली (বাংলা)",
    "gu": "બંગાળી (বাংলা)",
    "bn": "বাংলা (বাংলা)",
    "te": "బెంగాలీ (বাংলা)",
    "ta": "பெங்காலி (বাংলা)",
    "kn": "ಬಂಗಾಳಿ (বাংলা)"
  },
  "Telugu (తెలుగు)": {
    "hi": "तेलुगु (తెలుగు)",
    "pa": "ਤੇਲਗੂ (తెలుగు)",
    "mr": "तेलगू (తెలుగు)",
    "gu": "તેલુગુ (తెలుగు)",
    "bn": "তেলেগু (తెలుగు)",
    "te": "తెలుగు (తెలుగు)",
    "ta": "தெலுங்கு (తెలుగు)",
    "kn": "ತೆಲುಗು (తెలుగు)"
  },
  "Tamil (தமிழ்)": {
    "hi": "तमिल (தமிழ்)",
    "pa": "ਤਾਮਿਲ (தமிழ்)",
    "mr": "तमिळ (தமிழ்)",
    "gu": "તામિલ (தமிழ்)",
    "bn": "তামিল (தமிழ்)",
    "te": "తమిళ (தமிழ்)",
    "ta": "தமிழ் (தமிழ்)",
    "kn": "ತಮಿಳು (தமிழ்)"
  },
  "Kannada (ಕನ್ನಡ)": {
    "hi": "कन्नड़ (ಕನ್ನಡ)",
    "pa": "ਕੰਨੜ (ಕನ್ನಡ)",
    "mr": "कन्नड (ಕನ್ನಡ)",
    "gu": "કન્નડ (ಕನ್ನಡ)",
    "bn": "কন্নড় (ಕನ್ನಡ)",
    "te": "కన్నడ (ಕನ್ನಡ)",
    "ta": "கன்னடம் (ಕನ್ನಡ)",
    "kn": "ಕನ್ನಡ (ಕನ್ನಡ)"
  },
  "English": {
    "hi": "अंग्रेज़ी",
    "pa": "ਅੰਗਰੇਜ਼ੀ",
    "mr": "इंग्रजी",
    "gu": "અંગ્રેજી",
    "bn": "ইংরেজি",
    "te": "ఇంగ్లీష్",
    "ta": "ஆங்கிலம்",
    "kn": "ಇಂಗ್ಲಿಷ್"
  },
  "AIRTEL-4G": {
    "hi": "AIRTEL-4G",
    "pa": "AIRTEL-4G",
    "mr": "AIRTEL-4G",
    "gu": "AIRTEL-4G",
    "bn": "AIRTEL-4G",
    "te": "AIRTEL-4G",
    "ta": "AIRTEL-4G",
    "kn": "AIRTEL-4G"
  },
  "°C": {
    "hi": "°C",
    "pa": "°C",
    "mr": "°C",
    "gu": "°C",
    "bn": "°C",
    "te": "°C",
    "ta": "°C",
    "kn": "°C"
  },
  "% (Low)": {
    "hi": "% (कम)",
    "pa": "% (ਘੱਟ)",
    "mr": "% (कमी)",
    "gu": "% (ઓછું)",
    "bn": "২৫% (কম)",
    "te": "% (తక్కువ)",
    "ta": "% (குறைவு)",
    "kn": "% (ಕಡಿಮೆ)"
  },
  "km/h NW • 48%": {
    "hi": "किमी/घं उत्तर-पश्चिम • 48%",
    "pa": "ਕਿਮੀ/ਘੰ ਉੱਤਰ-ਪੱਛਮੀ • 48%",
    "mr": "किमी/तास उत्तर-पश्चिम • 48%",
    "gu": "કિમી/કલાક ઉત્તર-પશ્ચિમ • 48%",
    "bn": "১২ কিমি/ঘণ্টা উত্তর-পশ্চিম • ৪৮%",
    "te": "కి.మీ/గంట వాయువ్య • 48%",
    "ta": "கிமீ/மணி வடமேற்கு • 48%",
    "kn": "ಕಿಮೀ/ಗಂ ವಾಯುವ್ಯ • 48%"
  },
  "Full Gate Pacing: Open Silos": {
    "hi": "पूर्ण गेट पेसिंग: साइलो खुले हैं",
    "pa": "ਪੂਰੀ ਗੇਟ ਪੇਸਿੰਗ: ਸਾਈਲੋ ਖੁੱਲ੍ਹੇ ਹਨ",
    "mr": "फुल गेट पेसिंग: सिलो खुले आहेत",
    "gu": "ફુલ ગેટ પેસિંગ: સિલો ખુલ્લા છે",
    "bn": "ফুল গেট পেসিং: সাইলো খোলা আছে",
    "te": "పూర్తి గేట్ పేసింగ్: సైలోస్ తెరిచి ఉ��్నాయి",
    "ta": "முழு கேட் வேகம்: சைலோக்கள் திறக்கப்பட்டுள்ளன",
    "kn": "ಪೂರ್ಣ ಗೇಟ್ ಪೇಸಿಂಗ್: ಸೈಲೋಗಳು ತೆರೆದಿವೆ"
  },
  "% (Moderate)": {
    "hi": "% (मध्यम)",
    "pa": "% (मध्यम)",
    "mr": "% (मध्यम)",
    "gu": "% (मध्यम)",
    "bn": "% (মাঝারি)",
    "te": "% (ಮધ્યಮ)",
    "ta": "% (மிதமானது)",
    "kn": "% (ಮಧ್ಯಮ)"
  },
  "km/h W • 52%": {
    "hi": "किमी/घं प • 52%",
    "pa": "ਕਿमी/ਘੰ ਪ • 52%",
    "mr": "किमी/ता प • 52%",
    "gu": "કિમી/કલાક પ • 52%",
    "bn": "কিমি/ঘণ্টা प • 52%",
    "te": "కి.मी/గం ప • 52%",
    "ta": "கி.மீ/மணி மே • 52%",
    "kn": "ಕಿಮೀ/ಗಂ ಪ • 52%"
  },
  "Normal Inflow: Moisture Assaying": {
    "hi": "सामान्य आवक: नमी परीक्षण",
    "pa": "ਆਮ ਆਵਕ: ਨਮੀ ਦੀ ਜਾਂਚ",
    "mr": "सामान्य आवक: ओलावा तपासणी",
    "gu": "સામાન્ય આવક: ભેજ ચકાસણી",
    "bn": "স্বাভাবিক আগমন: আর্দ্রতা পরীক্ষা",
    "te": "సాధారణ రాక: తేమ పరీక్ష",
    "ta": "இயல்பான வருகை: ஈரப்பதம் பரிசோதனை",
    "kn": "ಸಾಮಾನ್ಯ ಒಳಹರಿವು: ತೇವಾಂಶ ಪರಿಶೀಲನೆ"
  },
  "% (Severe ⚠️)": {
    "hi": "% (गंभीर ⚠️)",
    "pa": "% (ਗੰਭੀਰ ⚠️)",
    "mr": "% (तीव्र ⚠️)",
    "gu": "% (ગંભીર ⚠️)",
    "bn": "% (তীব্র ⚠️)",
    "te": "% (తీవ్రమైన ⚠️)",
    "ta": "% (தீவிரமானது ⚠️)",
    "kn": "% (ತೀವ್ರ ⚠️)"
  },
  "km/h E • 85%": {
    "hi": "किमी/घं पू • 85%",
    "pa": "ਕਿਮੀ/ਘੰ ਪੂ • 85%",
    "mr": "किमी/ता पू • 85%",
    "gu": "કિમી/કલાક પૂ • 85%",
    "bn": "কি��ি/ঘণ্টা পূ • 85%",
    "te": "కి.मी/గం తూ • 85%",
    "ta": "கி.மீ/மணி கி • 85%",
    "kn": "ಕಿಮೀ/ಗಂ ಪೂ • 85%"
  },
  "Auto-Pause Open Dispatch • Silo Divert": {
    "hi": "ऑटो-पॉज ओपन डिस्पैच • साइलो डायवर्ट",
    "pa": "ਆਟੋ-ਪੌਜ਼ ਓਪਨ ਡਿਸਪੈਚ • ਸਾਈਲੋ ਡਾਇਵਰਟ",
    "mr": "ऑटो-पॉज ओपन डिस्पॅच • सायलो डायव्हर्ट",
    "gu": "ઓટો-પોઝ ઓપન ડિસ્પેચ • સાયલો ડાયવર્ટ",
    "bn": "অটো-পজ ওপেন ডিসপ্যাচ • সাইলো ডাইভার্ট",
    "te": "ఆటో-పాజ్ ఓపెన్ డిస్పాచ్ • సైలో డైవర్ట్",
    "ta": "ஆட்டோ-பாஸ் ஓபன் டிஸ்பாட்ச் • சைலோ டைவர்ட்",
    "kn": "ಆಟೋ-ಪಾಸ್ ಓಪನ್ ಡಿಸ್ಪ್ಯಾಚ್ • ಸೈಲೋ ಡೈವರ್ಟ್"
  },
  "% (Elevated)": {
    "hi": "% (बढ़ा हुआ)",
    "pa": "% (ਉੱਚा)",
    "mr": "% (वाढलेले)",
    "gu": "% (ઉંચું)",
    "bn": "% (উন্নত)",
    "te": "% (ಹೆಚ್ಚింది)",
    "ta": "% (அதிகரித்த)",
    "kn": "% (ಹೆಚ್ಚಳ)"
  },
  "km/h NE • 78%": {
    "hi": "किमी/घंटा उत्तर-पूर्व • 78%",
    "pa": "ਕਿमी/ਘੰਟਾ ਉੱਤਰ-ਪੂਰਬ • 78%",
    "mr": "किमी/तास ईशान्य • 78%",
    "gu": "કિમી/કલાક ઉત્તર-પૂર્વ • 78%",
    "bn": "কিমি/ঘণ্টা উত্তর-পূর্ব • 78%",
    "te": "కి.మీ/గంట ఈశాన్య • 78%",
    "ta": "கிமீ/மணி ஈசான்யம் • 78%",
    "kn": "ಕಿಮೀ/ಗಂ ಈಶಾನ್ಯ • 78%"
  },
  "High-Canopy Silo Priority Only": {
    "hi": "केवल हाई-कैनॉपी साइलो प्राथमिकता",
    "pa": "ਸਿਰਫ਼ ਹਾਈ-ਕੈਨੋپی ਸਾਈਲੋ ਤਰجیح",
    "mr": "फक्त हाय-कॅनोपी सायलो प्राधान्य",
    "gu": "માત્ર હાઇ-કેનોપી સાયલો અગ્રતા",
    "bn": "শুধুমাত্র হাই-ক্যানোপি সাইলো অগ্রাধিকার",
    "te": "హై-కనోపీ సైలో ప్రాధాన్యత మాత్రమే",
    "ta": "உயர்- விதான சைலோ முன்னுர��மை மட்டும்",
    "kn": "ಹೈ-ಕ್ಯಾನೋಪಿ ಸೈಲೋ ಪ್ರಾಶಸ್ತ್ಯ ಮಾತ್ರ"
  },
  "% (Clear)": {
    "hi": "% (साफ)",
    "pa": "% (ਸਾਫ਼)",
    "mr": "% (स्वच्छ)",
    "gu": "% (ચોખ્ખું)",
    "bn": "% (পরিষ্কার)",
    "te": "% (స్పష్టమైన)",
    "ta": "% (தெளிவான)",
    "kn": "% (ಸ್ಪಷ್ಟ)"
  },
  "km/h NW • 45%": {
    "hi": "किमी/घ���टा उत्तर-पश्चिम • 45%",
    "pa": "ਕਿਮੀ/ਘੰਟਾ ਉੱਤਰ-ਪੱਛਮ • 45%",
    "mr": "किमी/तास वायव्य • 45%",
    "gu": "કિમી/કલાક ઉત્તર-પશ્ચિમ • 45%",
    "bn": "কিমি/ঘণ্টা উত্তর-পশ্চিম • 45%",
    "te": "కి.మీ/గంట వాయవ్య • 45%",
    "ta": "கிமீ/மணி வடமேற்கு • 45%",
    "kn": "ಕಿಮೀ/ಗಂ ವಾಯುವ್ಯ • 45%"
  },
  "Resume 100% Express Clearance": {
    "hi": "% एक्सप्रेस क्लीयरेंस फिर से शुरू करें",
    "pa": "% ਐਕਸਪ੍ਰੈੱਸ ਕਲੀਅਰੈਂਸ ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ",
    "mr": "% एक्सप्रेस क्लिरन्स पुन्हा सुरू करा",
    "gu": "% એક્સપ્રેસ ક્લિયરન્સ ફરી શરૂ કરો",
    "bn": "১০০% এক্সপ্রেস ক্লিয়ারেন্স পুনরায় শুরু করুন",
    "te": "% ఎక్స్‌��్రెస్ క్లియరెన్స్‌ని పునఃప్రారంభించండి",
    "ta": "% எக்ஸ்பிரஸ் கிளியரன்ஸை மீண்டும் தொடங்கவும்",
    "kn": "% ಎಕ್ಸ್‌ಪ್ರೆಸ್ ಕ್ಲಿಯರೆನ್ಸ್ ಅನ್ನು ಪುನರಾರಂಭಿಸಿ"
  },
  "% higher truck turnaround speed": {
    "hi": "% अधिक ट्रक आवाजाही गति",
    "pa": "% ਵੱਧ ਟਰੱਕ ਆਵਾਜਾਈ ਗਤੀ",
    "mr": "% जास्त ट्रक टर्नअराउंड वेग",
    "gu": "% વધુ ટ્રક અવરજવર ઝડપ",
    "bn": "৪০% বেশি ট্রাক টার্নঅ্যারাউন্ড গতি",
    "te": "% ఎక్కువ ��్రక్ టర్న్‌అరౌండ్ వేగం",
    "ta": "% அதிகமான லாரி இயக்க வேகம்",
    "kn": "% ಹೆಚ್ಚಿನ ಟ್ರಕ್ ವಾಪಸಾತಿ ವೇಗ"
  },
  "% cut in idling diesel emissions": {
    "hi": "आइडलिंग डीजल उत्सर्जन में 80% की कटौती",
    "pa": "ਆइडलिंग ਡੀਜ਼ਲ ਇੰਜਣਾਂ ਦੇ ਨਿਕਾਸ ਵਿੱਚ 80% ਦੀ ਕਟੌਤੀ",
    "mr": "आइडलिंग डिझेल उत्सर्जनात ८०% घट",
    "gu": "આઈડલિંગ ડીઝલ ઉત્સર્જનમાં 80% ઘટાડો",
    "bn": "আইডলিং ডিজেল নির্গমন ৮% হ্রাস",
    "te": "ఐడ్లింగ్ డీజిల్ ఉద్గారాలలో 80% తగ్గింపు",
    "ta": "செயலற்ற நிலை���ில் உள்ள டீசல் உமிழ்வு 80% குறைப்பு",
    "kn": "ಐಡ್ಲಿಂಗ್ ಡೀಸೆಲ್ ಹೊರಸೂಸುವಿಕೆಯಲ್ಲಿ 80% ಕಡಿತ"
  },
  ",000 MT Weather-Protected Grain Silo Complex": {
    "hi": ",000 ��ीट्रिक टन मौसम-सुरक्षित अनाज साइलो कॉम्प्लेक्स",
    "pa": ",000 ਮੀਟ੍ਰਿਕ ਟਨ ਮੌਸਮ-ਸੁਰੱਖਿਅਤ ਅਨਾਜ ਸਾਈਲੋ ਕੰਪਲੈਕਸ",
    "mr": "२५,००० मेट्रिक टन हवामान-संरक्षित धान्य सायलो कॉम्प्लेक्स",
    "gu": ",000 મેટ્રિક ટન હવામાન-સુરક્ષિત અનાજ સાયલો સંકુલ",
    "bn": "২৫,০০০ মেট্রিক টন আবহাওয়া-সুরক্ষিত শস্য সাইলো কমপ্লেক্স",
    "te": ",000 MT వాతావరణ-రక్షిత ధాన్యం సైలో కాంప్లెక్స్",
    "ta": ",000 மெட்ரிக் டன் வானிலை பாதுகாக்கப்பட்ட தானிய சைலோ வளாகம்",
    "kn": ",000 MT ಹವಾಮಾನ-ರಕ್ಷಿತ ಧಾನ್ಯ ಸೈಲೋ ಕಾಂಪ್ಲೆಕ್ಸ್"
  },
  "-Second Digital Moisture QC": {
    "hi": "-सेकंड डिजिटल नमी क्यूसी",
    "pa": "-ਸਿੰਕਡ ਡਿਜੀਟਲ ਨਮੀ ਕਿਊ.ਸੀ.",
    "mr": "१५-सेकंद डिजिटल ओलावा क्यूसी",
    "gu": "-સેકન્ડ ડિજિટલ ભેજ ક્યૂસી",
    "bn": "১৫-সেকেন্ড ডিজিটাল আর্দ্রতা কিউসি",
    "te": "-సెకండ్ల డిజిటల్ తేమ క్యూసి",
    "ta": "-வினாடி டிஜிட்டல் ஈரப்பதம் கியூசி",
    "kn": "-ಸೆಕೆಂಡುಗಳ ಡಿಜಿಟಲ್ ತೇವಾಂಶ ಕ್ಯೂಸಿ"
  },
  "Mandis": {
    "hi": "मंडियाँ",
    "pa": "ਮੰਡੀਆਂ",
    "mr": "मोंड्या",
    "gu": "મંડીઓ",
    "bn": "৪২টি মান্ডি",
    "te": "మন্ডీలు",
    "ta": "மண்டிகள்",
    "kn": "ಮಂಡಿಗಳು"
  },
  "% (From 54h to 4.2h)": {
    "hi": "% (54 घंटे से 4.2 घंटे)",
    "pa": "% (54 ਘੰਟੇ ਤੋਂ 4.2 ਘੰਟੇ)",
    "mr": "% (54 तासांवरून 4.2 तास)",
    "gu": "% (54 કલાકથી 4.2 કલાક)",
    "bn": "৯২% (৫৪ ঘণ্টা থেকে ৪.২ ঘণ্টা)",
    "te": "% (54 గంటల నుండి 4.2 గంటలకు)",
    "ta": "% (54 மணி நேரத்திலிருந்து 4.2 மணி நேரமாக)",
    "kn": "% (54 ಗಂಟೆಗಳಿಂದ 4.2 ಗಂಟೆಗಳಿಗೆ)"
  },
  "% (From 48h to 5.1h)": {
    "hi": "% (48 घंटे से 5.1 घंटे)",
    "pa": "% (48 ਘੰਟੇ ਤੋਂ 5.1 ਘੰਟੇ)",
    "mr": "% (48 तासांवरून 5.1 तास)",
    "gu": "% (48 કલાકથી 5.1 કલાક)",
    "bn": "৮৯% (৪৮ ঘণ্টা থেকে ৫.১ ঘণ্টা)",
    "te": "% (48 గంటల నుండి 5.1 గంటలకు)",
    "ta": "% (48 மணி நேரத்திலிருந்து 5.1 மணி நேரமாக)",
    "kn": "% (48 ಗಂಟೆಗಳಿಂದ 5.1 ಗಂಟೆಗಳಿಗೆ)"
  },
  "% (From 62h to 3.8h)": {
    "hi": "% (62 घंटे से 3.8 घंटे)",
    "pa": "% (62 ਘੰਟੇ ਤੋਂ 3.8 ਘੰਟੇ)",
    "mr": "% (62 तासांवरून 3.8 तास)",
    "gu": "% (૬૨ કલાકથી ૩.૮ કલાક)",
    "bn": "% (৬২ ঘণ্টা থেকে ৩.৮ ঘণ্টা)",
    "te": "% (62 గంటల నుండి 3.8 గంటలకు)",
    "ta": "% (62 மணி நேரத்திலிருந்து 3.8 மணி நேரமாக)",
    "kn": "% (62 ಗಂಟೆಗಳಿಂದ 3.8 ಗಂಟೆಗಳಿಗೆ)"
  },
  "% (From 50h to 5.8h)": {
    "hi": "% (50 घंटे से 5.8 घंटे)",
    "pa": "% (50 ਘੰਟੇ ਤੋਂ 5.8 ਘੰਟੇ)",
    "mr": "% (50 तासांवरून 5.8 तास)",
    "gu": "% (૫૦ કલાકથી ૫.૮ કલાક)",
    "bn": "% (৫০ ঘণ্টা থেকে ৫.৮ ঘণ্টা)",
    "te": "% (50 గంటల నుండి 5.8 గంటలకు)",
    "ta": "% (50 மணி நேரத்திலிருந்து 5.8 மணி நேரமாக)",
    "kn": "% (50 ಗಂಟೆಗಳಿಂದ 5.8 ಗಂಟೆಗಳಿಗೆ)"
  },
  ".0% (With drying bay)": {
    "hi": ".0% (ड्राइंग बे के साथ)",
    "pa": ".0% (ਡ੍ਰਾਈੰਗ ਬੇ ਸਮੇਤ)",
    "mr": ".0% (ड्रायिंग बे सह)",
    "gu": ".0% (ડ્રાયિંગ બે સાથે)",
    "bn": ".0% (ড্রাইিং বে সহ)",
    "te": ".0% (డ్రైయింగ్ బేతో)",
    "ta": ".0% (உலர்த்தும் அறையுடன்)",
    "kn": ".0% (ಡ್ರೈಯಿಂಗ್ ಬೇ ಜೊತೆ)"
  },
  ":1 Value deduction > 17%": {
    "hi": ":1 मूल्य कटौती > 17%",
    "pa": ":1 ਮੁੱਲ ਕਟੌਤੀ > 17%",
    "mr": ":1 मूल्य कपात > 17%",
    "gu": ":1 મૂલ્ય કપાત > 17%",
    "bn": "১:১ মূল্য কর্তন > ১৭%",
    "te": ":1 విలువ కోత > 17%",
    "ta": ":1 மதிப்பு கழிவு > 17%",
    "kn": ":1 ಮೌಲ್ಯ ಕಡಿತ > 17%"
  },
  "-Minute Digital Infrared Assaying": {
    "hi": "-मिनट डिजिटल इन्फ्रारेड परख",
    "pa": "-ਮਿੰਟ ਡਿਜੀਟਲ ਇਨਫਰਾਰੈੱਡ ਪਰਖ",
    "mr": "-मिनिट डिजिटल इन्फ्रारेड तपासणी",
    "gu": "-મિનિટ ડિજિટલ ઇન્ફ્રારેડ ટેસ્ટિંગ",
    "bn": "৩-মিনিট ডিজিটাল ইনফ্রারেড অ্যাসেয়িং",
    "te": "-నిమిషాల డిజిటల్ ఇన్‌ఫ్రారెడ్ అస్సేయింగ్",
    "ta": "-நிமிட டிஜிட்டல் இன்ஃப்ராரெட் மதிப்பீடு",
    "kn": "-ನಿಮಿಷದ ಡಿಜಿಟಲ್ ಇನ್ಫ್ರಾರೆಡ್ ಅಸ್ಸೇಯಿಂಗ್"
  },
  "Wheat (2)": {
    "hi": "गेहूं (2)",
    "pa": "ਕਣਕ (2)",
    "mr": "गहू (2)",
    "gu": "ઘઉં (2)",
    "bn": "গম (2)",
    "te": "గోధుమలు (2)",
    "ta": "���� கோதுமை (2)",
    "kn": "ಗೋಧಿ (2)"
  },
  "Mustard (1)": {
    "hi": "सरसों (1)",
    "pa": "ਸਰ੍ਹੋਂ (1)",
    "mr": "मोहरी (1)",
    "gu": "રાઈ (1)",
    "bn": "সরিষা (1)",
    "te": "ఆవాలు (1)",
    "ta": "கடுகு (1)",
    "kn": "ಸಾಸಿವೆ (1)"
  },
  "Cotton (1)": {
    "hi": "कपास (1)",
    "pa": "ਕਪਾਹ (1)",
    "mr": "कापूस (1)",
    "gu": "કપાસ (1)",
    "bn": "তুলা (1)",
    "te": "పత్తి (1)",
    "ta": "பருத்தி (1)",
    "kn": "ಹತ್ತಿ (1)"
  },
  "Logistics Rebate (1)": {
    "hi": "लॉजिस्टिक्स छूट (1)",
    "pa": "ਲੌਜਿਸਟਿਕਸ ਰੇਟ (ਛूट) (1)",
    "mr": "लॉजिस्टिक्स सूट (1)",
    "gu": "લોજિસ્ટિક્સ છૂટ (1)",
    "bn": "লজিস্টিকস ছাড় (1)",
    "te": "లాజిస్టిక్స�� రాయితీ (1)",
    "ta": "லாஜிஸ்டிக்ஸ் தள்ளுபடி (1)",
    "kn": "ಲಾಜಿಸ್ಟಿಕ್ಸ್ ರಿಯಾಯಿತಿ (1)"
  },
  "Free Testing (1)": {
    "hi": "मुफ्त परीक्षण (1)",
    "pa": "ਮੁਫ਼ਤ ਟੈਸਟਿੰਗ (1)",
    "mr": "मोफत चाचणी (1)",
    "gu": "મફત ચકાસણી (1)",
    "bn": "বিনামূল্যে পরীক্ষা (1)",
    "te": "ఉచిత పరీక్ష (1)",
    "ta": "இலவச சோதனை (1)",
    "kn": "ಉಚಿತ ಪರೀಕ್ಷೆ (1)"
  },
  "Paddy (धान)": {
    "hi": "धान (Paddy)",
    "pa": "ਝੋਨਾ (Paddy)",
    "mr": "भात / धान (Paddy)",
    "gu": "ડાંગર (Paddy)",
    "bn": "ধান (Paddy)",
    "te": "ధాన్యం (Paddy)",
    "ta": "நெல் (Paddy)",
    "kn": "ಭತ್ತ (Paddy)"
  },
  "Cotton (कपास)": {
    "hi": "कपास (Cotton)",
    "pa": "ਕਪाह (Cotton)",
    "mr": "कापूस (Cotton)",
    "gu": "કપાસ (Cotton)",
    "bn": "তুলা (Cotton)",
    "te": "పత్తి (Cotton)",
    "ta": "பருத்தி (Cotton)",
    "kn": "ಹತ್ತಿ (Cotton)"
  },
  "Chana (चना)": {
    "hi": "चना (Chana)",
    "pa": "ਛੋਲੇ (Chana)",
    "mr": "हरभरा (Chana)",
    "gu": "ચણા (Chana)",
    "bn": "ছোলা (Chana)",
    "te": "శనగలు (Chana)",
    "ta": "கடலை (Chana)",
    "kn": "ಕಡಲೆ (Chana)"
  },
  "Soybean (सोयाबीन)": {
    "hi": "सोयाबीन (Soybean)",
    "pa": "ਸੋਆਬੀਨ (Soybean)",
    "mr": "सोयाबीन (Soybean)",
    "gu": "સોયાબીન (Soybean)",
    "bn": "সয়াবিন (Soybean)",
    "te": "సోయాబీన్ (Soybean)",
    "ta": "சோயாபீன்ஸ் (Soybean)",
    "kn": "ಸೋಯಾಬೀನ್ (Soybean)"
  },
  "+₹100 (+4.6%) YoY": {
    "hi": "+₹100 (+4.6%) YoY",
    "pa": "+₹100 (+4.6%) YoY",
    "mr": "+₹100 (+4.6%) YoY",
    "gu": "+₹100 (+4.6%) YoY",
    "bn": "+₹100 (+4.6%) YoY",
    "te": "+₹100 (+4.6%) YoY",
    "ta": "+₹100 (+4.6%) YoY",
    "kn": "+₹100 (+4.6%) YoY"
  },
  "-Yr Total Hike": {
    "hi": "-वर्षीय कुल वृद्धि",
    "pa": "-ਸਾਲਾ ਕُل ਵਾਧਾ",
    "mr": "५-वर्षीय एकूण वाढ",
    "gu": "૫-વર્ષનો કુલ વધારો",
    "bn": "৫-বছরের মোট বৃদ্ধি",
    "te": "-సంవత్సరాల మొత్తం పెరుగుదల",
    "ta": "-ஆண்டு மொத்த உயர்வு",
    "kn": "-ವರ್ಷದ ಒಟ್ಟು ಹೆಚ್ಚಳ"
  },
  "-Year Low Trough": {
    "hi": "-वर्षीय न्यूनतम स्तर",
    "pa": "-ਸਾਲਾ ਸਭ ਤੋਂ ਹੇਠਲਾ ਪੱਧਰ",
    "mr": "५-वर्षीय नीचांक",
    "gu": "૫-વર્ષનું સૌથી નીચું સ્તર",
    "bn": "৫-বছরের সর্বনিম্ন স্তর",
    "te": "-సంవత్సరాల కనిష్ట స్థాయి",
    "ta": "-ஆண்டு குறைந்த அளவு",
    "kn": "-ವರ್ಷದ ಕನಿಷ್ಠ ಮಟ್ಟ"
  },
  "View:": {
    "hi": "देखें:",
    "pa": "ਦੇਖੋ:",
    "mr": "पहा:",
    "gu": "જુઓ:",
    "bn": "দেখুন:",
    "te": "వీక్షించండి:",
    "ta": "காண்க:",
    "kn": "ವೀಕ್ಷಿಸಿ:"
  },
  "Yearly (2020–2026)": {
    "hi": "वार्षिक (2020–2026)",
    "pa": "ਸਲਾਨਾ (2020–2026)",
    "mr": "वार्षिक (२०२०–२०२६)",
    "gu": "વાર્ષિક (2020–2026)",
    "bn": "বার্ষিক (২০২০–২০২৬)",
    "te": "వార్షిక (2020–2026)",
    "ta": "ஆண்டுதோறும் (2020–2026)",
    "kn": "ವಾರ್ಷಿಕ (2020–2026)"
  },
  "-Month Pattern (Kharif / Rabi)": {
    "hi": "-मासीय पैटर्न (खरीफ / रबी)",
    "pa": "-ਮਹੀਨੇ ਦਾ ਪੈਟਰਨ (ਖਰੀਫ / ਰਬੀ)",
    "mr": "६-महिन्यांची पद्धत (��रीप / रब्बी)",
    "gu": "-મહિનાની પદ્ધતિ (ખરીફ / રવી)",
    "bn": "৬-মাসের প্যাটার্ন (খরিফ / রবি)",
    "te": "-నెలల సరళి (ఖరీఫ్ / రబీ)",
    "ta": "மாத மாதிரி (காரீஃப் / ரபி)",
    "kn": "-ತಿಂಗಳ ಮಾದರಿ (ಖರೀಫ್ / ರಬಿ)"
  },
  "Monthly (12 Months)": {
    "hi": "मासिक (12 महीने)",
    "pa": "ਮਾਸਿਕ (12 ਮਹੀਨੇ)",
    "mr": "मासिक (१२ महिने)",
    "gu": "માસિક (12 મહિના)",
    "bn": "মাসিক (১২ মাস)",
    "te": "నెలవారీ (12 నెలలు)",
    "ta": "மாதந்தோறும் (12 மாதங்கள்)",
    "kn": "ಮಾಸಿಕ (12 ತಿಂಗಳುಗಳು)"
  },
  "Sort:": {
    "hi": "क्रमित करें:",
    "pa": "ਲੜੀਬੱਧ ਕਰੋ:",
    "mr": "क्रम लावा:",
    "gu": "સોર્ટ કરો:",
    "bn": "সাজান:",
    "te": "క్రమబద్ధీకరించు:",
    "ta": "வரிசைப்படுத்து:",
    "kn": "ವಿಂಗಡಿಸಿ:"
  },
  "Oldest → Latest": {
    "hi": "सबसे पुराना → नवीनतम",
    "pa": "ਸਭ ਤੋਂ ਪੁਰਾਣਾ → ਨਵੀਨਤਮ",
    "mr": "जुने → नवीन",
    "gu": "સૌથી જૂનું → નવીનતમ",
    "bn": "সবচেয়ে পুরনো → সবচেয়ে নতুন",
    "te": "పురాతనమైనది → సరికొత్తది",
    "ta": "பழையது → புதியது",
    "kn": "ಹಳೆಯದು → ಹೊಸದು"
  },
  "Latest → Oldest": {
    "hi": "नवीनतम → सबसे पुराना",
    "pa": "ਸਭ ਤੋਂ ਨਵਾਂ → ਸਭ ਤੋਂ ਪੁਰਾਣਾ",
    "mr": "अलीकडील → सर्वात जुने",
    "gu": "સૌથી નવું → સૌથી જૂનું",
    "bn": "সবচেয়ে নতুন → সবচেয়ে পুরানো",
    "te": "తాజాది → పాతది",
    "ta": "புதியது → பழையது",
    "kn": "ഏറ്റവും പുതിയದು → ಹಳೆಯದು"
  },
  "Highest Price (Peak)": {
    "hi": "���च्चतम मूल्य (पीक)",
    "pa": "ਸਭ ਤੋਂ ਉੱਚਾ ਮੁੱਲ (ਪੀਕ)",
    "mr": "सर्वोच्च किंमत (पीक)",
    "gu": "ઉચ્ચતમ ભાવ (પીક)",
    "bn": "সর্বোচ্চ মূল্য (পিক)",
    "te": "గరిష్ట ధర (పీక్)",
    "ta": "அதிக விலை (பீக்)",
    "kn": "ಗರಿಷ್ಠ ಬೆಲೆ (ಪೀಕ್)"
  },
  "Lowest Price (Glut)": {
    "hi": "न्यूनतम मूल्य (ग्लट/अतिरेक)",
    "pa": "ਸਭ ਤੋਂ ਘੱਟ ਮੁੱਲ (ਗਲੱਟ)",
    "mr": "সর্বনিম্ন किंमत (ग््लट/अतिसाठा)",
    "gu": "ન્યૂનતમ ભાવ (ગ્લટ)",
    "bn": "সর্বনিম্ন মূল্য (গ্লট)",
    "te": "కనిష్ట ధర (అతివృష్టి/గ్లట్)",
    "ta": "குறைந்த விலை (உபரி)",
    "kn": "ಕನಿಷ್ಠ ಬೆಲೆ (ಗ್ಲಟ್)"
  },
  "-Year Track": {
    "hi": "-वर्षीय ��्रैक",
    "pa": "-ਸਾਲਾ ਟਰੈਕ",
    "mr": "६-वर्षीय ट्रॅक",
    "gu": "૬-વર્ષીય ટ્રેક",
    "bn": "৬-বছরের ট্র্যাক",
    "te": "-సంవత్సరాల ట్రాక్",
    "ta": "ஆண்டு டிராக்",
    "kn": "-ವರ್ಷದ ಟ್ರ್ಯಾಕ್"
  },
  "Months Pattern": {
    "hi": "महीने का पैटर्न",
    "pa": "ਮਹੀਨਿਆਂ ਦਾ ਪੈਟਰਨ",
    "mr": "१२ महिन्यांचा पॅटर्न",
    "gu": "૧૨ મહિનાની પેટર્ન",
    "bn": "১২ মাসের প্যাটার্ন",
    "te": "నెలల సరళి",
    "ta": "மாத மாதிரி",
    "kn": "��ಿಂಗಳ ಮಾದರಿ"
  },
  "-104% Normal": {
    "hi": "-104% सामान्य",
    "pa": "-104% ਆਮ",
    "mr": "-104% सामान्य",
    "gu": "-104% સામાન્ય",
    "bn": "-104% স্বাভাবিক",
    "te": "-104% ���ాధారణ",
    "ta": "-104% சாதாரண",
    "kn": "-104% ಸಾಮಾನ್ಯ"
  },
  "% = Official MSP Baseline": {
    "hi": "% = आधिकारिक MSP बेसलाइन",
    "pa": "% = ਸਰਕਾਰੀ MSP ਬੇਸਲਾਈਨ",
    "mr": "% = अधिकृत MSP बेसलाईन",
    "gu": "% = સત્તાવાર MSP બેઝલાઇન",
    "bn": "% = অফিসিয়াল MSP বেসলাইন",
    "te": "% = అధికారిక MSP బేస్‌లైన్",
    "ta": "% = அதிகாரப்பூர்வ MSP அடிப்படை",
    "kn": "% = ಅಧಿಕೃತ MSP ಬೇಸ್‌ಲೈನ್"
  },
  "-Month Price Cycle Calendar": {
    "hi": "-महीने का मूल्य चक्र कैलेंडर",
    "pa": "-ਮਹੀਨੇ ਦਾ ਕੀਮਤ ਚੱਕਰ ਕੈਲੰਡਰ",
    "mr": "१२-महिन्यांचे किंमत चक्र कॅलेंडर",
    "gu": "૧૨-મહિનાનું કિંમત ચક્ર કેલેન્ડર",
    "bn": "১২-মাসের মূল্য চক্র ক্যালেন্ডার",
    "te": "-నెలల ధరల చక్రం క్యాలెండర్",
    "ta": "-மாத விலை சுழற்சி காலண்டர்",
    "kn": "-ತಿಂಗಳ ಬೆಲೆ ಚ��್ರ ಕ್ಯಾಲೆಂಡರ್"
  },
  "-26 (Latest)": {
    "hi": "-26 (नवीनतम)",
    "pa": "-26 (ਤਾਜ਼ਾ)",
    "mr": "२०२५-२६ (नवीनतम)",
    "gu": "૨૦૨૫-૨૬ (नवीनतम)",
    "bn": "২০২৫-২৬ (সর্বশেষ)",
    "te": "-26 (తాజా)",
    "ta": "-26 (சமீபத்திய)",
    "kn": "-26 (ಇತ್ತೀಚಿನ)"
  },
  "-Year Hike (+₹)": {
    "hi": "-वर्षीय वृद्धि (+₹)",
    "pa": "-ਸਾਲਾ ਵਾਧਾ (+₹)",
    "mr": "५-वर्षीय वाढ (+₹)",
    "gu": "૫-વર્ષીય વધારો (+₹)",
    "bn": "৫-বছরের বৃদ্ধি (+₹)",
    "te": "-సంవత్సరాల పెంపు (+₹)",
    "ta": "ஆண்டு உயர்வு (+₹)",
    "kn": "-ವರ್ಷದ ಏರಿಕೆ (+₹)"
  },
  "Paddy Common (धान)": {
    "hi": "धान कॉमन (धान)",
    "pa": "ਝੋਨਾ ਆਮ (धान)",
    "mr": "भात सामान्य (धा���)",
    "gu": "ડાંગર સામાન્ય (धान)",
    "bn": "ধান সাধারণ (धान)",
    "te": "ధాన్యం సాధారణ (धान)",
    "ta": "நெல் பொது (धान)",
    "kn": "ಭತ್ತ ಸಾಮಾನ್ಯ (धान)"
  },
  "Cotton Medium Staple": {
    "hi": "कपास मध्यम स्टैपल",
    "pa": "ਕਪਾਹ ਮੱਧਮ ਸਟੇਪਲ",
    "mr": "कापूस मध्यम लांबीचा",
    "gu": "કપાસ મધ્યમ સ્ટેપલ",
    "bn": "তুলা মাঝারি স্টেপল",
    "te": "పత్తి మధ్యస్థ staple",
    "ta": "பருத்தி நடுத்தர ஸ்டேபிள்",
    "kn": "ಹತ್ತಿ ಮಧ್ಯಮ ಸ್ಟೇಪಲ್"
  },
  "Gram / Chana (चना)": {
    "hi": "चना (चना)",
    "pa": "ਛੋਲੇ / ਚਨਾ (चना)",
    "mr": "हरभरा / चना (चना)",
    "gu": "ચણા / ચના (चना)",
    "bn": "ছোলার / ছানা (चना)",
    "te": "శనగలు / చనా (चना)",
    "ta": "கொண்டைக்கடலை / சனா (चना)",
    "kn": "ಕಡಲೆ / ಚನಾ (चना)"
  },
  "tokens": {
    "hi": "टोकन",
    "pa": "ਟੋਕਨ",
    "mr": "टोकन",
    "gu": "ટોકન્સ",
    "bn": "টোকেন",
    "te": "టోకెన్లు",
    "ta": "டோக்கன்கள்",
    "kn": "ಟೋಕನ್‌ಗಳು"
  },
  "farmers": {
    "hi": "किसान",
    "pa": "ਕਿਸਾਨ",
    "mr": "शेतकरी",
    "gu": "ખેડૂતો",
    "bn": "কৃষক",
    "te": "రైతులు",
    "ta": "உழவர்கள்",
    "kn": "ರೈತರು"
  },
  "mandi_events": {
    "hi": "मंडी_इवेंट्स",
    "pa": "ਮੰਡੀ_ਇਵੈਂਟਸ",
    "mr": "मार्केट_इव्हेंट्स",
    "gu": "મંડી_ઇવેન્ટ્સ",
    "bn": "মান্ডি_ইভেন্টস",
    "te": "మార్కెట్_ఈవెంట్స్",
    "ta": "மார்க்கெட்_நிகழ்வுகள்",
    "kn": "ಮಂಡಿ_ಘಟನೆಗಳು"
  },
  "weighbridge_receipts": {
    "hi": "weighbridge_receipts",
    "pa": "weighbridge_receipts",
    "mr": "weighbridge_receipts",
    "gu": "weighbridge_receipts",
    "bn": "weighbridge_receipts",
    "te": "weighbridge_receipts",
    "ta": "weighbridge_receipts",
    "kn": "weighbridge_receipts"
  },
  "National Agriculture Market (e-NAM) Mandi Logistics": {
    "hi": "राष्ट्रीय कृषि बाज़ार (e-NAM) मंडी लॉजिस्टिक्स",
    "pa": "ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ ਬਾਜ਼ਾਰ (e-NAM) ਮੰਡੀ ਲੌਜਿਸਟਿਕਸ",
    "mr": "राष्ट्रीय कृषी बाजार (e-NAM) मंडी लॉजिस्टिक्स",
    "gu": "રાષ્ટ્રીય કૃષિ બજાર (e-NAM) મંડી લોજિસ્ટિક્સ",
    "bn": "জাতীয় কৃষি বাজার (e-NAM) মান্ডি লজিস্টিকস",
    "te": "జాతీయ వ్యవసాయ మార్కెట్ (e-NAM) మండి లాజిస్టిక్స్",
    "ta": "தேசிய விவசாய சந்தை (e-NAM) மண்டி லாஜிஸ்டிக்ஸ்",
    "kn": "ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ (e-NAM) ಮಂಡಿ ಲಾಜಿಸ್ಟಿಕ್ಸ್"
  },
  "Tr/h": {
    "hi": "Tr/h",
    "pa": "Tr/h",
    "mr": "Tr/h",
    "gu": "Tr/h",
    "bn": "Tr/h",
    "te": "Tr/h",
    "ta": "Tr/h",
    "kn": "Tr/h"
  },
  "Cloud:": {
    "hi": "क्लाउड:",
    "pa": "ਕਲਾਉਡ:",
    "mr": "क्लाउड:",
    "gu": "ક્લાઉડ:",
    "bn": "ক্লাউড:",
    "te": "క్లౌడ్:",
    "ta": "கிளவுட்:",
    "kn": "ಕ್ಲೌಡ್:"
  },
  "Select Question:": {
    "hi": "प्रश्न चुनें:",
    "pa": "ਸਵਾਲ ਚੁਣੋ:",
    "mr": "प्रश्न निवडा:",
    "gu": "પ્રશ્ન પસંદ કરો:",
    "bn": "��� প্রশ্ন নির্বাচন করুন:",
    "te": "ప్రశ్నను ఎంచుకోండి:",
    "ta": "கேள்வியைத் தேர்ந்தெடுக்கவும்:",
    "kn": "ಪ್ರಶ್ನೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:"
  },
  "Today's MSP Rates & Hikes": {
    "hi": "आज के MSP दर और बढ़ोतरी",
    "pa": "ਅੱਜ ਦੇ MSP ਰੇਟ ਅਤੇ ਵਾਧਾ",
    "mr": "आजचे MSP दर आणि वाढ",
    "gu": "આજના MSP દર અને વધારો",
    "bn": "আজকের MSP হার এবং বৃদ্ধি",
    "te": "నేటి MSP ధరలు & పెంపు",
    "ta": "இன்றைய MSP விலைகள் மற்றும் உயர்வுகள்",
    "kn": "ಇಂದಿನ MSP ದರಗಳು ಮತ್ತು ಏರಿಕೆ"
  },
  "How to Book Mandi Slot": {
    "hi": "मंडी स्लॉट कैसे बुक करें",
    "pa": "ਮੰਡੀ ਸਲਾਟ ਕਿਵੇਂ ਬੁੱਕ ਕਰੀਏ",
    "mr": "मりの स्लॉट कसा बुक करावा",
    "gu": "મંડી સ્લોટ કેવી રીતે બુક કરવો",
    "bn": "কীভাবে মান্ডি স্লট বুক করবেন",
    "te": "మండి స్లాట్ ఎలా బుక్ చేయాలి",
    "ta": "மண்டி ஸ்லாட்டை எவ்வாறு முன்பதிவு செய்வது",
    "kn": "ಮಂಡಿ ಸ್ಲಾಟ್ ಅನ್ನು ಹೇಗೆ ಬುಕ್ ಮಾಡುವುದು"
  },
  "Direct PFMS-DBT Payment": {
    "hi": "प्रत्यक्ष PFMS-DBT भुगतान",
    "pa": "ਸਿੱਧਾ PFMS-DBT ਭੁਗਤਾਨ",
    "mr": "थेट PFMS-DBT पेमेंट",
    "gu": "સીધી PFMS-DBT ચુકવણી",
    "bn": "সরাসরি PFMS-DBT পেমেন্ট",
    "te": "ప్రత్యక్ష PFMS-DBT చెల్లింపు",
    "ta": "நேரடி PFMS-DBT கட்டணம்",
    "kn": "ನೇರ PFMS-DBT ಪಾವತಿ"
  },
  "Grain Moisture & Quality Limits": {
    "hi": "अनाज की नमी और गुणवत्ता सीमाएं",
    "pa": "ਅਨਾਜ ਦੀ ਨਮੀ ਅਤੇ ਗੁਣਵੱਤਾ ਸੀਮਾਵਾਂ",
    "mr": "दाण्यातील ओलावा आणि गुणवत्ता मर्यादा",
    "gu": "અનાજનો ભેજ અને ગુણવત્તા મર્યાદાઓ",
    "bn": "শস্যের আর্দ্রতা ও গুণগত মানের সীমা",
    "te": "ధాన్యం తేమ & నాణ్యత పరిమితులు",
    "ta": "தானிய ஈரப்பதம் & ���ர வரம்புகள்",
    "kn": "ಧಾನ್ಯದ ತೇವಾಂಶ & ಗುಣಮಟ್ಟದ ಮಿತಿಗಳು"
  },
  "Toll-Free Helpline (1800-270-0224)": {
    "hi": "टोल-फ्री हेल्पलाइन (1800-270-0224)",
    "pa": "ਟੋਲ-ਫ੍ਰੀ ਹੈਲਪਲਾਈਨ (1800-270-0224)",
    "mr": "टोल-फ्री हेल्पलाइन (1800-270-0224)",
    "gu": "ટોલ-ફ્રી હેલ્પલાઇન (1800-270-0224)",
    "bn": "টোল-ফ্রি হেল্পলাইন (1800-270-0224)",
    "te": "టోల్ ఫ్రీ హెల్ప్‌లైన్ (1800-270-0224)",
    "ta": "கட்டணமில்லா உதவி எண் (1800-270-0224)",
    "kn": "ಟೋಲ್-ಫ್ರೀ ಸಹಾಯವಾಣಿ (1800-270-0224)"
  },
  "Right Time to Sell Analysis": {
    "hi": "फसल बेचने का सही समय विश्लेषण",
    "pa": "ਫਸਲ ਵੇਚਣ ਦਾ ਸਹੀ ਸਮਾਂ ਵਿਸ਼ਲੇਸ਼ਣ",
    "mr": "विक्रीसाठी योग्य वेळ विश्लेषण",
    "gu": "વેચ��ણ માટેનો યોગ્ય સમય વિશ્લેષણ",
    "bn": "বিক্রির সঠিক সময় বিশ্লেষণ",
    "te": "విక్రయించడానికి సరైన సమయ విశ్లేషణ",
    "ta": "விற்க சரியான நேரம் பகுப்பாய்வு",
    "kn": "ಮಾರಾಟ ಮಾಡಲು ಸರಿಯಾದ ಸಮಯದ ವಿಶ್ಲೇಷಣೆ"
  },
  "e-NAM APMC Official AI": {
    "hi": "ई-नाम एपीएमजी आधिकारिक एआई",
    "pa": "ਈ-ਨਾਮ ਏਪੀਐੱਮਸੀ ਆਫੀਸ਼ੀਅਲ ਏ.ਆਈ.",
    "mr": "ई-नाम एपीएमसी अधिकृत एआय",
    "gu": "ઇ-નામ એપીએમસી અધિકૃત એઆઈ",
    "bn": "ই-নাম এপিএমসি অফিসিয়াল এআই",
    "te": "ఇ-నామ్ ఏపీఎంసీ అధికారిక ఏఐ",
    "ta": "இ-நாம் ஏபிஎம்சி அதிகாரப்பூர்வ ஏஐ",
    "kn": "ಇ-ನಾಮ್ ಎಪಿಎಂಸಿ ಅಧಿಕೃತ ಎಐ"
  },
  "Helpline:": {
    "hi": "हेल्पलाइन:",
    "pa": "ਹੈਲਪਲਾਈਨ:",
    "mr": "हेल्पलाइन:",
    "gu": "હેલ્પલાઇન:",
    "bn": "হেল্পলাইন:",
    "te": "హెల్ప్‌లైన్:",
    "ta": "உதவி எண்:",
    "kn": "ಸಹಾಯವಾಣಿ:"
  },
  "-digit phone": {
    "hi": "-अंकों का फोन नंबर",
    "pa": "-ਅੰਕਾਂ ਦਾ ਫ਼ੋਨ ਨੰਬਰ",
    "mr": "१०-अंकी फोन नंबर",
    "gu": "૧૦-અંકનો ફોન નંબર",
    "bn": "১০-সংখ্যার ফোন নম্বর",
    "te": "-అంకెల ఫోన్ నంబర్",
    "ta": "இலக்க தொலைபேசி எண்",
    "kn": "-ಅಂಕಿಯ ಫೋನ್ ಸಂಖ್ಯೆ"
  },
  "-digit mobile number": {
    "hi": "-अंकों का मोबाइल नंबर",
    "pa": "-अंकों ਦਾ ਮੋਬાઇલ ਨੰਬਰ",
    "mr": "१०-अंकी मोबाईल नंबर",
    "gu": "-અಂಕનો મોባાઈલ नंबर",
    "bn": "১০-সংখ্যার মোবাইল নম্বর",
    "te": "-అంకెల మొబైల్ నంబర్",
    "ta": "-இக்க இலக்க மொபைல் எண்",
    "kn": "-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
  },
  "-digit number": {
    "hi": "-अंकों का नंबर",
    "pa": "-ਅੰਕਾਂ ਦਾ ਨੰਬਰ",
    "mr": "१०-अंकी नंबर",
    "gu": "-અಂಕનો નંબર",
    "bn": "১০-সংখ্যার নম্বর",
    "te": "-అంకెల సంఖ్య",
    "ta": "-இக்க இலக்க எண்",
    "kn": "-ಅಂಕಿಯ ಸಂಖ್ಯೆ"
  }
};

// Pre-sorted keys by length descending for greedy substring matching
const SORTED_DICT_KEYS = Object.keys(MASTER_DOM_DICT).filter(k => k.length > 3).sort((a, b) => b.length - a.length);

// Universal Lossless DOM TextNode and Attribute Walker
function translateFullPage(lang) {
  if (!lang) lang = currentLang || 'en';

  // 1. Walk through all visible text nodes in the DOM
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.id === 'liveClock') continue;

    // Cache original English text on the Text node object permanently
    if (node._origText === undefined) {
      node._origText = node.nodeValue;
    }

    const orig = node._origText;
    const trimmed = orig.trim();
    if (!trimmed) continue;

    if (lang === 'en') {
      node.nodeValue = orig;
    } else {
      // Direct exact match
      if (MASTER_DOM_DICT[trimmed] && MASTER_DOM_DICT[trimmed][lang]) {
        const leading = orig.match(/^\s*/)[0];
        const trailing = orig.match(/\s*$/)[0];
        node.nodeValue = leading + MASTER_DOM_DICT[trimmed][lang] + trailing;
      } else {
        // Greedy multi-phrase replacement
        let replaced = orig;
        let matched = false;
        for (let i = 0; i < SORTED_DICT_KEYS.length; i++) {
          const phrase = SORTED_DICT_KEYS[i];
          if (replaced.includes(phrase) && MASTER_DOM_DICT[phrase][lang]) {
            replaced = replaced.split(phrase).join(MASTER_DOM_DICT[phrase][lang]);
            matched = true;
          }
        }
        if (matched) {
          node.nodeValue = replaced;
        }
      }
    }
  }

  // 2. Input & Textarea Placeholders
  document.querySelectorAll('input, textarea').forEach(input => {
    if (input._origPh === undefined) {
      input._origPh = input.placeholder || '';
    }
    const orig = input._origPh.trim();
    if (!orig) return;

    if (lang === 'en') {
      input.placeholder = input._origPh;
    } else if (MASTER_DOM_DICT[orig] && MASTER_DOM_DICT[orig][lang]) {
      input.placeholder = MASTER_DOM_DICT[orig][lang];
    }
  });

  // 3. Titles and Tooltips
  document.querySelectorAll('[title]').forEach(el => {
    if (el._origTitle === undefined) {
      el._origTitle = el.title || '';
    }
    const orig = el._origTitle.trim();
    if (!orig) return;

    if (lang === 'en') {
      el.title = el._origTitle;
    } else if (MASTER_DOM_DICT[orig] && MASTER_DOM_DICT[orig][lang]) {
      el.title = MASTER_DOM_DICT[orig][lang];
    }
  });

  // 4. Select Dropdown Options
  document.querySelectorAll('select option').forEach(opt => {
    if (opt._origText === undefined) {
      opt._origText = opt.text || '';
    }
    const orig = opt._origText.trim();
    if (!orig) return;

    if (lang === 'en') {
      opt.text = opt._origText;
    } else if (MASTER_DOM_DICT[orig] && MASTER_DOM_DICT[orig][lang]) {
      opt.text = MASTER_DOM_DICT[orig][lang];
    }
  });

  // 5. Update elements with explicit data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = (translations[lang] && translations[lang][key]) || (translations['en'] && translations['en'][key]);
    if (text) {
      el.textContent = text;
    }
  });

  // 6. Update placeholders with explicit data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const placeholder = (translations[lang] && translations[lang][key]) || (translations['en'] && translations['en'][key]);
    if (placeholder) {
      el.placeholder = placeholder;
    }
  });
}

function setLanguage(lang, syncChat = true) {
  if (!lang) return;
  currentLang = lang;

  // 1. Run universal translation
  translateFullPage(lang);

  // 2. Update Language Dropdown Selector in top bar
  const langSelect = document.getElementById('languageSelect');
  if (langSelect && langSelect.value !== lang) {
    langSelect.value = lang;
  }

  // 3. Synchronize Chatbot language selector & assistant
  if (syncChat && typeof setChatLang === 'function') {
    setChatLang(lang, false);
  }

  // 4. Update Crop Dropdown labels
  const cropSelect = document.getElementById('cropSelect');
  if (cropSelect) {
    const prevVal = cropSelect.value;
    if (lang === 'hi') {
      cropSelect.innerHTML = `
        <option value="wheat">गेहूं (Wheat) - MSP ₹2,275/क्विंटल</option>
        <option value="paddy">धान (Paddy) - MSP ₹2,300/क्विंटल</option>
        <option value="mustard">सरसों (Mustard) - MSP ₹5,650/क्विंटल</option>
        <option value="chana">चना (Gram) - MSP ₹5,440/क्विंटल</option>
        <option value="soybean">सोयाबीन (Soybean) - MSP ₹4,892/क्विंटल</option>
      `;
    } else if (lang === 'pa') {
      cropSelect.innerHTML = `
        <option value="wheat">ਕਣਕ (Wheat) - MSP ₹2,275/ਕੁਇੰਟਲ</option>
        <option value="paddy">ਝੋਨਾ (Paddy) - MSP ₹2,300/ਕੁਇੰਟਲ</option>
        <option value="mustard">ਸਰ੍ਹੋਂ (Mustard) - MSP ₹5,650/ਕੁਇੰਟਲ</option>
        <option value="chana">ਛੋਲੇ (Gram) - MSP ₹5,440/ਕੁਇੰਟਲ</option>
        <option value="soybean">ਸੋਇਆਬੀਨ (Soybean) - MSP ₹4,892/ਕੁਇੰਟਲ</option>
      `;
    } else if (lang === 'mr') {
      cropSelect.innerHTML = `
        <option value="wheat">गहू (Wheat) - हमीभाव ₹2,275/क्विंटल</option>
        <option value="paddy">भात / धान (Paddy) - हमीभाव ₹2,300/क्विंटल</option>
        <option value="mustard">मोहरी (Mustard) - हमीभाव ₹5,650/क्विंटल</option>
        <option value="chana">हरभरा (Gram) - हमीभाव ₹5,440/क्विंटल</option>
        <option value="soybean">सोयाबीन (Soybean) - हमीभाव ₹4,892/क्विंटल</option>
      `;
    } else if (lang === 'gu') {
      cropSelect.innerHTML = `
        <option value="wheat">ઘઉં (Wheat) - MSP ₹2,275/ક્વિન્ટલ</option>
        <option value="paddy">ડાંગર (Paddy) - MSP ₹2,300/ક્વિન્ટલ</option>
        <option value="mustard">રાયડો (Mustard) - MSP ₹5,650/ક્વિન્ટલ</option>
        <option value="chana">ચણા (Gram) - MSP ₹5,440/ક્વિન્ટલ</option>
        <option value="soybean">સોયાબીન (Soybean) - MSP ₹4,892/ક્વિન્ટલ</option>
      `;
    } else if (lang === 'bn') {
      cropSelect.innerHTML = `
        <option value="wheat">গম (Wheat) - MSP ₹২,২৭৫/কুইন্টাল</option>
        <option value="paddy">ধান (Paddy) - MSP ₹২,৩০০/কুইন্টাল</option>
        <option value="mustard">সরিষা (Mustard) - MSP ₹৫,৬৫০/কুইন্টাল</option>
        <option value="chana">ছোলা (Gram) - MSP ₹৫,৪৪০/কুইন্টাল</option>
        <option value="soybean">সয়াবিন (Soybean) - MSP ₹৪,৮৯২/কুইন্টাল</option>
      `;
    } else if (lang === 'te') {
      cropSelect.innerHTML = `
        <option value="wheat">గోధుమలు (Wheat) - MSP ₹2,275/క్వింటా</option>
        <option value="paddy">వరి / ధాన్యం (Paddy) - MSP ₹2,300/క్వింటా</option>
        <option value="mustard">ఆవాలు (Mustard) - MSP ₹5,650/క్వింటా</option>
        <option value="chana">శనగలు (Gram) - MSP ₹5,440/క్వింటా</option>
        <option value="soybean">సోయాబీన్ (Soybean) - MSP ₹4,892/క్వింటా</option>
      `;
    } else if (lang === 'ta') {
      cropSelect.innerHTML = `
        <option value="wheat">கோதுமை (Wheat) - MSP ₹2,275/குவிண்டால்</option>
        <option value="paddy">நெல் (Paddy) - MSP ₹2,300/குவிண்டால்</option>
        <option value="mustard">கடுகு (Mustard) - MSP ₹5,650/குவிண்டால்</option>
        <option value="chana">கொண்டைக்கடலை (Gram) - MSP ₹5,440/குவிண்டால்</option>
        <option value="soybean">சோயாபீன் (Soybean) - MSP ₹4,892/குவிண்டால்</option>
      `;
    } else if (lang === 'kn') {
      cropSelect.innerHTML = `
        <option value="wheat">ಗೋಧಿ (Wheat) - MSP ₹2,275/ಕ್ವಿಂಟಾಲ್</option>
        <option value="paddy">ಭತ್ತ (Paddy) - MSP ₹2,300/ಕ್ವಿಂಟಾಲ್</option>
        <option value="mustard">ಸಾಸಿವೆ (Mustard) - MSP ₹5,650/ಕ್ವಿಂಟಾಲ್</option>
        <option value="chana">ಕಡಲೆ (Gram) - MSP ₹5,440/ಕ್ವಿಂಟಾಲ್</option>
        <option value="soybean">ಸೋಯಾಬೀನ್ (Soybean) - MSP ₹4,892/ಕ್ವಿಂಟಾಲ್</option>
      `;
    } else {
      cropSelect.innerHTML = `
        <option value="wheat">Wheat (गेहूं) - MSP ₹2,275/qtl</option>
        <option value="paddy">Paddy / Rice (धान) - MSP ₹2,300/qtl</option>
        <option value="mustard">Mustard (सरसों) - MSP ₹5,650/qtl</option>
        <option value="chana">Chana (चना) - MSP ₹5,440/qtl</option>
        <option value="soybean">Soybean (सोयाबीन) - MSP ₹4,892/qtl</option>
      `;
    }
    if (prevVal) cropSelect.value = prevVal;
  }

  // 5. Update IVR Language state to match
  if (typeof setIVRLanguage === 'function') {
    setIVRLanguage(lang);
  }

  try {
    localStorage.setItem("kisanq_lang", lang);
  } catch(e) {}
}

// Global exports
window.translations = translations;
window.MASTER_DOM_DICT = MASTER_DOM_DICT;
window.setLanguage = setLanguage;
window.translateFullPage = translateFullPage;

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("kisanq_lang") || 'en';
  if (saved && saved !== 'en') {
    setLanguage(saved, true);
  }
});
