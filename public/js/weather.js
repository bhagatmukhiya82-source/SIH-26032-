// ============================================================================
// KISAN-Q Smart Mandi - IMD Doppler Weather Radar & State Silo Rerouting Engine
// ============================================================================

let CURRENT_WEATHER_STATE = "Punjab";
window.CURRENT_WEATHER_STATE = "Punjab";

// Master dataset for Indian agricultural states
const INDIA_STATE_WEATHER_LOCAL = {
  "Punjab": {
    state: "Punjab",
    mandiHub: "Khanna / Ludhiana Mandi Hub",
    tempC: 28,
    condition: "Partly Cloudy",
    rainProbability: 25,
    rainfallZone: "YELLOW_WATCH",
    rainfallMm: 14,
    radarReflectivityDBZ: 24,
    humidity: 48,
    wind: "12 km/h NW",
    siloStatus: "Covered Transit Silo Sheds: 14 Tractors Protected Before Rain Hits",
    tractorsProtected: 14,
    silosActive: 6,
    siloCapacityMT: 25000,
    grainProtectedMT: 350,
    lossSavedINR: 240000,
    dispatchPaused: false,
    forecast: [
      { day: "Today (Day 1)", temp: "28°C", rain: "25% (Low)", wind: "12 km/h NW • 48%", action: "🟢 Full Gate Pacing: Open Silos" },
      { day: "Tomorrow (Day 2)", temp: "29°C", rain: "30% (Moderate)", wind: "14 km/h W • 52%", action: "🟢 Normal Inflow: Moisture Assaying" },
      { day: "Day 3 (Friday)", temp: "26°C", rain: "75% (Severe ⚠️)", wind: "22 km/h E • 85%", action: "🚨 Auto-Pause Open Dispatch • Silo Divert" },
      { day: "Day 4 (Saturday)", temp: "25°C", rain: "60% (Elevated)", wind: "18 km/h NE • 78%", action: "🟡 High-Canopy Silo Priority Only" },
      { day: "Day 5 (Sunday)", temp: "27°C", rain: "15% (Clear)", wind: "10 km/h NW • 45%", action: "🟢 Resume 100% Express Clearance" }
    ]
  },
  "Haryana": {
    state: "Haryana",
    mandiHub: "Karnal / Sirsa Mandi Hub",
    tempC: 30,
    condition: "Sunny & Dry",
    rainProbability: 15,
    rainfallZone: "GREEN_NORMAL",
    rainfallMm: 4,
    radarReflectivityDBZ: 14,
    humidity: 42,
    wind: "14 km/h W",
    siloStatus: "Covered Transit Silo Sheds: 9 Tractors Protected • Karnal Hub",
    tractorsProtected: 9,
    silosActive: 4,
    siloCapacityMT: 22000,
    grainProtectedMT: 210,
    lossSavedINR: 150000,
    dispatchPaused: false,
    forecast: [
      { day: "Today (Day 1)", temp: "30°C", rain: "15% (Low)", wind: "14 km/h W • 42%", action: "🟢 Normal Gate Pacing" },
      { day: "Tomorrow (Day 2)", temp: "31°C", rain: "20% (Low)", wind: "15 km/h NW • 44%", action: "🟢 Fast-Track Moisture Assaying" },
      { day: "Day 3 (Friday)", temp: "28°C", rain: "45% (Moderate)", wind: "16 km/h N • 60%", action: "🟢 Standby Covered Transit Sheds" },
      { day: "Day 4 (Saturday)", temp: "27°C", rain: "50% (Elevated)", wind: "17 km/h NE • 68%", action: "🟡 Pre-Alert Dispatches" },
      { day: "Day 5 (Sunday)", temp: "29°C", rain: "10% (Clear)", wind: "11 km/h W • 40%", action: "🟢 Full Inflow Clearance" }
    ]
  },
  "Maharashtra": {
    state: "Maharashtra",
    mandiHub: "Lasalgaon / Nashik Onion & Soybean Hub",
    tempC: 24,
    condition: "Torrential Monsoon Downpour",
    rainProbability: 88,
    rainfallZone: "RED_WARNING",
    rainfallMm: 85,
    radarReflectivityDBZ: 49,
    humidity: 92,
    wind: "28 km/h SW",
    siloStatus: "Covered Transit Silo Sheds: 22 Tractors Sheltered Before Downpour Hits",
    tractorsProtected: 22,
    silosActive: 8,
    siloCapacityMT: 35000,
    grainProtectedMT: 550,
    lossSavedINR: 420000,
    dispatchPaused: true,
    pauseReason: "IMD Doppler Radar detected active cyclonic squall over Nashik/Lasalgaon belt. Automated queue pause active; all open onion & soybean trolleys diverted to hermetic sheds.",
    forecast: [
      { day: "Today (Day 1)", temp: "24°C", rain: "88% (Torrential 🚨)", wind: "28 km/h SW • 92%", action: "🚨 Auto-Pause Active: Divert to Sheds" },
      { day: "Tomorrow (Day 2)", temp: "25°C", rain: "70% (Heavy)", wind: "24 km/h W • 88%", action: "🟡 Regulated Dispatch to High-Canopy Silos" },
      { day: "Day 3 (Friday)", temp: "27°C", rain: "40% (Showers)", wind: "18 km/h SW • 75%", action: "🟢 Resume Moisture-Safe Arrivals" },
      { day: "Day 4 (Saturday)", temp: "28°C", rain: "25% (Scattered)", wind: "14 km/h W • 65%", action: "🟢 Normal Inflow Rate" },
      { day: "Day 5 (Sunday)", temp: "29°C", rain: "15% (Clear)", wind: "12 km/h NW • 55%", action: "🟢 Full Gate Clearance" }
    ]
  },
  "Madhya Pradesh": {
    state: "Madhya Pradesh",
    mandiHub: "Ujjain / Indore Malwa Hub",
    tempC: 27,
    condition: "Overcast with Thunderstorms",
    rainProbability: 62,
    rainfallZone: "ORANGE_ALERT",
    rainfallMm: 58,
    radarReflectivityDBZ: 38,
    humidity: 79,
    wind: "20 km/h S",
    siloStatus: "Covered Transit Silo Sheds: 18 Tractors Protected at Ujjain Terminal",
    tractorsProtected: 18,
    silosActive: 7,
    siloCapacityMT: 30000,
    grainProtectedMT: 440,
    lossSavedINR: 310000,
    dispatchPaused: false,
    forecast: [
      { day: "Today (Day 1)", temp: "27°C", rain: "62% (Elevated 🟡)", wind: "20 km/h S • 79%", action: "🟡 Pre-Alert Dispatches: Covered Shed Standby" },
      { day: "Tomorrow (Day 2)", temp: "26°C", rain: "78% (Heavy Rain ⚠️)", wind: "22 km/h SE • 84%", action: "🚨 Auto-Pause Open Dispatch • Silo Divert" },
      { day: "Day 3 (Friday)", temp: "28°C", rain: "45% (Moderate)", wind: "15 km/h SW • 70%", action: "🟢 Normal Inflow with Tarpaulin Checks" },
      { day: "Day 4 (Saturday)", temp: "29°C", rain: "20% (Low)", wind: "12 km/h W • 58%", action: "🟢 Express Clearance" },
      { day: "Day 5 (Sunday)", temp: "30°C", rain: "10% (Clear)", wind: "10 km/h NW • 48%", action: "🟢 Full Inflow" }
    ]
  },
  "Uttar Pradesh": {
    state: "Uttar Pradesh",
    mandiHub: "Muzaffarnagar / Bareilly Hub",
    tempC: 31,
    condition: "Hazy Sun & Humid",
    rainProbability: 35,
    rainfallZone: "YELLOW_WATCH",
    rainfallMm: 22,
    radarReflectivityDBZ: 28,
    humidity: 60,
    wind: "10 km/h SE",
    siloStatus: "Covered Transit Silo Sheds: 12 Tractors Protected • UP Mandi Hub",
    tractorsProtected: 12,
    silosActive: 5,
    siloCapacityMT: 20000,
    grainProtectedMT: 290,
    lossSavedINR: 195000,
    dispatchPaused: false,
    forecast: [
      { day: "Today (Day 1)", temp: "31°C", rain: "35% (Moderate)", wind: "10 km/h SE • 60%", action: "🟢 Normal Gate Pacing" },
      { day: "Tomorrow (Day 2)", temp: "30°C", rain: "55% (Elevated)", wind: "16 km/h E • 72%", action: "🟡 Priority to High-Canopy Silos" },
      { day: "Day 3 (Friday)", temp: "27°C", rain: "80% (Thunderstorm ⚠️)", wind: "24 km/h NE • 88%", action: "🚨 Auto-Pause Open Dispatches" },
      { day: "Day 4 (Saturday)", temp: "28°C", rain: "30% (Low)", wind: "14 km/h N • 65%", action: "🟢 Normal Inflow" },
      { day: "Day 5 (Sunday)", temp: "29°C", rain: "15% (Clear)", wind: "12 km/h NW • 50%", action: "🟢 Full Clearance" }
    ]
  },
  "Rajasthan": {
    state: "Rajasthan",
    mandiHub: "Kota / Sri Ganganagar Mandi Hub",
    tempC: 36,
    condition: "Hot & Clear Skies",
    rainProbability: 8,
    rainfallZone: "GREEN_NORMAL",
    rainfallMm: 0,
    radarReflectivityDBZ: 8,
    humidity: 28,
    wind: "16 km/h SW",
    siloStatus: "Covered Transit Silo Sheds: 7 Tractors Sheltered • Optimal Dry Conditions",
    tractorsProtected: 7,
    silosActive: 4,
    siloCapacityMT: 18000,
    grainProtectedMT: 180,
    lossSavedINR: 120000,
    dispatchPaused: false,
    forecast: [
      { day: "Today (Day 1)", temp: "36°C", rain: "8% (Clear)", wind: "16 km/h SW • 28%", action: "🟢 100% Express Gate Clearance" },
      { day: "Tomorrow (Day 2)", temp: "37°C", rain: "5% (Clear)", wind: "18 km/h SW • 25%", action: "🟢 Maximum Open Heap Pacing" },
      { day: "Day 3 (Friday)", temp: "35°C", rain: "12% (Clear)", wind: "15 km/h W • 32%", action: "🟢 Normal Operations" },
      { day: "Day 4 (Saturday)", temp: "34°C", rain: "20% (Low)", wind: "14 km/h W • 38%", action: "🟢 Normal Operations" },
      { day: "Day 5 (Sunday)", temp: "33°C", rain: "15% (Low)", wind: "12 km/h NW • 40%", action: "🟢 Normal Operations" }
    ]
  },
  "Gujarat": {
    state: "Gujarat",
    mandiHub: "Unjha / Rajkot Groundnut & Jeera Hub",
    tempC: 32,
    condition: "Breezy & Partly Sunny",
    rainProbability: 20,
    rainfallZone: "GREEN_NORMAL",
    rainfallMm: 8,
    radarReflectivityDBZ: 16,
    humidity: 55,
    wind: "22 km/h W",
    siloStatus: "Covered Transit Silo Sheds: 11 Tractors Protected • Unjha Terminal",
    tractorsProtected: 11,
    silosActive: 5,
    siloCapacityMT: 24000,
    grainProtectedMT: 270,
    lossSavedINR: 185000,
    dispatchPaused: false,
    forecast: [
      { day: "Today (Day 1)", temp: "32°C", rain: "20% (Low)", wind: "22 km/h W • 55%", action: "🟢 Normal Gate Pacing" },
      { day: "Tomorrow (Day 2)", temp: "31°C", rain: "25% (Low)", wind: "20 km/h SW • 58%", action: "🟢 Full Inflow Clearance" },
      { day: "Day 3 (Friday)", temp: "30°C", rain: "40% (Moderate)", wind: "18 km/h SW • 68%", action: "🟢 Standby Covered Silos" },
      { day: "Day 4 (Saturday)", temp: "31°C", rain: "30% (Low)", wind: "16 km/h W • 60%", action: "🟢 Normal Operations" },
      { day: "Day 5 (Sunday)", temp: "32°C", rain: "15% (Clear)", wind: "15 km/h NW • 50%", action: "🟢 Express Clearance" }
    ]
  },
  "West Bengal": {
    state: "West Bengal",
    mandiHub: "Burdwan / Hooghly Rice Mandi Hub",
    tempC: 26,
    condition: "Severe Tropical Rain Bands",
    rainProbability: 92,
    rainfallZone: "RED_WARNING",
    rainfallMm: 95,
    radarReflectivityDBZ: 53,
    humidity: 96,
    wind: "32 km/h SE",
    siloStatus: "Covered Transit Silo Sheds: 19 Tractors Sheltered Before Hooghly Downpour",
    tractorsProtected: 19,
    silosActive: 7,
    siloCapacityMT: 28000,
    grainProtectedMT: 480,
    lossSavedINR: 360000,
    dispatchPaused: true,
    pauseReason: "Deep depression in Bay of Bengal causing heavy cloudbursts over Burdwan paddy belt. Automated queue pause active; covered silo reroute engaged.",
    forecast: [
      { day: "Today (Day 1)", temp: "26°C", rain: "92% (Severe 🚨)", wind: "32 km/h SE • 96%", action: "🚨 Auto-Pause Open Dispatch • Silo Divert" },
      { day: "Tomorrow (Day 2)", temp: "27°C", rain: "85% (Torrential)", wind: "28 km/h S • 92%", action: "🚨 Emergency Covered Silo Storage Only" },
      { day: "Day 3 (Friday)", temp: "28°C", rain: "65% (Heavy)", wind: "20 km/h SW • 82%", action: "🟡 Regulated Pacing Under Sheds" },
      { day: "Day 4 (Saturday)", temp: "29°C", rain: "40% (Moderate)", wind: "15 km/h S • 75%", action: "🟢 Resume Outdoor Unloading" },
      { day: "Day 5 (Sunday)", temp: "30°C", rain: "25% (Low)", wind: "12 km/h SE • 65%", action: "🟢 Full Operations" }
    ]
  },
  "Bihar": {
    state: "Bihar",
    mandiHub: "Gulabbagh / Purnea Maize & Jute Hub",
    tempC: 25,
    condition: "Intense Cloudburst & Squall",
    rainProbability: 90,
    rainfallZone: "RED_WARNING",
    rainfallMm: 92,
    radarReflectivityDBZ: 51,
    humidity: 94,
    wind: "26 km/h E",
    siloStatus: "Covered Transit Silo Sheds: 25 Tractors Protected Before Rain Hits Purnea Hub",
    tractorsProtected: 25,
    silosActive: 8,
    siloCapacityMT: 32000,
    grainProtectedMT: 620,
    lossSavedINR: 480000,
    dispatchPaused: true,
    pauseReason: "Heavy monsoon thunderstorm cell active over Gulabbagh Maize Hub. Open dispatches halted to protect corn grains from humidity fermentation.",
    forecast: [
      { day: "Today (Day 1)", temp: "25°C", rain: "90% (Severe 🚨)", wind: "26 km/h E • 94%", action: "🚨 Auto-Pause Open Dispatch • Silo Divert" },
      { day: "Tomorrow (Day 2)", temp: "26°C", rain: "75% (Heavy)", wind: "20 km/h SE • 88%", action: "🟡 High-Canopy Silo Priority Only" },
      { day: "Day 3 (Friday)", temp: "28°C", rain: "45% (Moderate)", wind: "16 km/h S • 76%", action: "🟢 Resume Covered Weighbridges" },
      { day: "Day 4 (Saturday)", temp: "29°C", rain: "30% (Low)", wind: "12 km/h SW • 68%", action: "🟢 Normal Inflow" },
      { day: "Day 5 (Sunday)", temp: "30°C", rain: "15% (Clear)", wind: "10 km/h W • 58%", action: "🟢 Full Clearance" }
    ]
  },
  "Andhra Pradesh": {
    state: "Andhra Pradesh",
    mandiHub: "Guntur Chilli & Grain Hub",
    tempC: 29,
    condition: "Squally Winds with Thunder",
    rainProbability: 58,
    rainfallZone: "ORANGE_ALERT",
    rainfallMm: 52,
    radarReflectivityDBZ: 37,
    humidity: 76,
    wind: "24 km/h SE",
    siloStatus: "Covered Transit Silo Sheds: 15 Tractors Sheltered • Guntur Agro Hub",
    tractorsProtected: 15,
    silosActive: 6,
    siloCapacityMT: 26000,
    grainProtectedMT: 370,
    lossSavedINR: 260000,
    dispatchPaused: false,
    forecast: [
      { day: "Today (Day 1)", temp: "29°C", rain: "58% (Elevated 🟡)", wind: "24 km/h SE • 76%", action: "🟡 Pre-Alert Pacing: Tarpaulin Inspection" },
      { day: "Tomorrow (Day 2)", temp: "28°C", rain: "72% (Heavy ⚠️)", wind: "26 km/h E • 84%", action: "🚨 Auto-Pause Open Dispatches" },
      { day: "Day 3 (Friday)", temp: "29°C", rain: "40% (Showers)", wind: "18 km/h S • 70%", action: "🟢 Normal Inflow" },
      { day: "Day 4 (Saturday)", temp: "31°C", rain: "25% (Low)", wind: "14 km/h SW • 62%", action: "🟢 Express Clearance" },
      { day: "Day 5 (Sunday)", temp: "32°C", rain: "15% (Clear)", wind: "12 km/h W • 55%", action: "🟢 Full Clearance" }
    ]
  },
  "Telangana": {
    state: "Telangana",
    mandiHub: "Khammam / Warangal Cotton Hub",
    tempC: 28,
    condition: "Scattered Rain & High Humidity",
    rainProbability: 60,
    rainfallZone: "ORANGE_ALERT",
    rainfallMm: 55,
    radarReflectivityDBZ: 39,
    humidity: 78,
    wind: "20 km/h S",
    siloStatus: "Covered Transit Silo Sheds: 16 Tractors Protected Before Rain Hits",
    tractorsProtected: 16,
    silosActive: 6,
    siloCapacityMT: 25000,
    grainProtectedMT: 390,
    lossSavedINR: 275000,
    dispatchPaused: false,
    forecast: [
      { day: "Today (Day 1)", temp: "28°C", rain: "60% (Elevated)", wind: "20 km/h S • 78%", action: "🟡 Covered Silo Priority Active" },
      { day: "Tomorrow (Day 2)", temp: "27°C", rain: "75% (Heavy Rain ⚠️)", wind: "22 km/h SE • 85%", action: "🚨 Auto-Pause Open Dispatch" },
      { day: "Day 3 (Friday)", temp: "29°C", rain: "45% (Moderate)", wind: "16 km/h SW • 72%", action: "🟢 Resume Normal Inflow" },
      { day: "Day 4 (Saturday)", temp: "30°C", rain: "20% (Low)", wind: "12 km/h W • 60%", action: "🟢 Express Pacing" },
      { day: "Day 5 (Sunday)", temp: "31°C", rain: "10% (Clear)", wind: "10 km/h NW • 50%", action: "🟢 100% Clearance" }
    ]
  },
  "Karnataka": {
    state: "Karnataka",
    mandiHub: "Shimoga / Hubli Grain Mandi Hub",
    tempC: 26,
    condition: "Overcast with Moderate Rains",
    rainProbability: 65,
    rainfallZone: "ORANGE_ALERT",
    rainfallMm: 62,
    radarReflectivityDBZ: 41,
    humidity: 82,
    wind: "18 km/h W",
    siloStatus: "Covered Transit Silo Sheds: 17 Tractors Sheltered • Hubli Terminal",
    tractorsProtected: 17,
    silosActive: 6,
    siloCapacityMT: 27000,
    grainProtectedMT: 410,
    lossSavedINR: 290000,
    dispatchPaused: false,
    forecast: [
      { day: "Today (Day 1)", temp: "26°C", rain: "65% (Elevated)", wind: "18 km/h W • 82%", action: "🟡 Covered Silo Standby" },
      { day: "Tomorrow (Day 2)", temp: "25°C", rain: "78% (Heavy)", wind: "22 km/h W • 88%", action: "🚨 Auto-Pause Open Dispatches" },
      { day: "Day 3 (Friday)", temp: "27°C", rain: "50% (Moderate)", wind: "16 km/h NW • 75%", action: "🟢 Normal Moisture Assaying" },
      { day: "Day 4 (Saturday)", temp: "28°C", rain: "30% (Low)", wind: "14 km/h NW • 65%", action: "🟢 Normal Inflow" },
      { day: "Day 5 (Sunday)", temp: "29°C", rain: "15% (Clear)", wind: "11 km/h W • 55%", action: "🟢 Express Clearance" }
    ]
  },
  "Tamil Nadu": {
    state: "Tamil Nadu",
    mandiHub: "Erode / Thanjavur Delta Rice Hub",
    tempC: 32,
    condition: "Partly Cloudy & Dry",
    rainProbability: 18,
    rainfallZone: "GREEN_NORMAL",
    rainfallMm: 6,
    radarReflectivityDBZ: 15,
    humidity: 50,
    wind: "14 km/h SE",
    siloStatus: "Covered Transit Silo Sheds: 10 Tractors Protected • Thanjavur Hub",
    tractorsProtected: 10,
    silosActive: 5,
    siloCapacityMT: 22000,
    grainProtectedMT: 240,
    lossSavedINR: 165000,
    dispatchPaused: false,
    forecast: [
      { day: "Today (Day 1)", temp: "32°C", rain: "18% (Low)", wind: "14 km/h SE • 50%", action: "🟢 Normal Gate Pacing" },
      { day: "Tomorrow (Day 2)", temp: "33°C", rain: "20% (Low)", wind: "15 km/h E • 52%", action: "🟢 Fast-Track Inflow" },
      { day: "Day 3 (Friday)", temp: "31°C", rain: "35% (Moderate)", wind: "16 km/h NE • 62%", action: "🟢 Normal Operations" },
      { day: "Day 4 (Saturday)", temp: "30°C", rain: "40% (Scattered)", wind: "15 km/h NE • 68%", action: "🟢 Standby Covered Silos" },
      { day: "Day 5 (Sunday)", temp: "32°C", rain: "15% (Clear)", wind: "12 km/h E • 48%", action: "🟢 Full Clearance" }
    ]
  },
  "Odisha": {
    state: "Odisha",
    mandiHub: "Bargarh Rice Mandi Hub",
    tempC: 25,
    condition: "Cyclonic Monsoon Downpours",
    rainProbability: 86,
    rainfallZone: "RED_WARNING",
    rainfallMm: 88,
    radarReflectivityDBZ: 48,
    humidity: 93,
    wind: "28 km/h E",
    siloStatus: "Covered Transit Silo Sheds: 21 Tractors Sheltered Before Rain Hits",
    tractorsProtected: 21,
    silosActive: 7,
    siloCapacityMT: 30000,
    grainProtectedMT: 510,
    lossSavedINR: 390000,
    dispatchPaused: true,
    pauseReason: "Coastal low pressure triggering severe precipitation in Western Odisha rice belt. Auto-pause triggered; grain rerouted to covered sheds.",
    forecast: [
      { day: "Today (Day 1)", temp: "25°C", rain: "86% (Severe 🚨)", wind: "28 km/h E • 93%", action: "🚨 Auto-Pause Open Dispatch • Silo Divert" },
      { day: "Tomorrow (Day 2)", temp: "26°C", rain: "75% (Heavy)", wind: "24 km/h SE • 88%", action: "🟡 Covered Silo Priority Only" },
      { day: "Day 3 (Friday)", temp: "28°C", rain: "45% (Moderate)", wind: "18 km/h S • 76%", action: "🟢 Resume Standard Inflow" },
      { day: "Day 4 (Saturday)", temp: "29°C", rain: "30% (Low)", wind: "14 km/h SW • 66%", action: "🟢 Normal Inflow" },
      { day: "Day 5 (Sunday)", temp: "30°C", rain: "15% (Clear)", wind: "11 km/h W • 56%", action: "🟢 Full Clearance" }
    ]
  },
  "Assam": {
    state: "Assam",
    mandiHub: "Guwahati / Nagaon Paddy & Tea Hub",
    tempC: 24,
    condition: "Heavy Brahmaputra Basin Cloudburst",
    rainProbability: 94,
    rainfallZone: "RED_WARNING",
    rainfallMm: 98,
    radarReflectivityDBZ: 54,
    humidity: 98,
    wind: "22 km/h NE",
    siloStatus: "Covered Transit Silo Sheds: 23 Tractors Sheltered Before Heavy Rain Hits",
    tractorsProtected: 23,
    silosActive: 6,
    siloCapacityMT: 25000,
    grainProtectedMT: 560,
    lossSavedINR: 430000,
    dispatchPaused: true,
    pauseReason: "Continuous monsoon torrential spells in Brahmaputra valley. Full open queue pause in place; high-canopy transit silos active.",
    forecast: [
      { day: "Today (Day 1)", temp: "24°C", rain: "94% (Severe 🚨)", wind: "22 km/h NE • 98%", action: "🚨 Auto-Pause Open Dispatch • Silo Divert" },
      { day: "Tomorrow (Day 2)", temp: "25°C", rain: "85% (Torrential)", wind: "20 km/h NE • 94%", action: "🚨 Emergency Covered Silo Storage Only" },
      { day: "Day 3 (Friday)", temp: "26°C", rain: "60% (Heavy)", wind: "16 km/h E • 85%", action: "🟡 Regulated Dispatch to Sheds" },
      { day: "Day 4 (Saturday)", temp: "27°C", rain: "35% (Scattered)", wind: "12 km/h S • 72%", action: "🟢 Normal Inflow" },
      { day: "Day 5 (Sunday)", temp: "28°C", rain: "20% (Low)", wind: "10 km/h SW • 60%", action: "🟢 Express Clearance" }
    ]
  }
};

// Map state names to SVG Path Element IDs
const STATE_ELEMENT_MAP = {
  "Punjab": "st-punjab",
  "Haryana": "st-haryana",
  "Maharashtra": "st-maharashtra",
  "Madhya Pradesh": "st-mp",
  "Uttar Pradesh": "st-up",
  "Rajasthan": "st-rajasthan",
  "Gujarat": "st-gujarat",
  "West Bengal": "st-wb",
  "Bihar": "st-bihar",
  "Andhra Pradesh": "st-ap",
  "Telangana": "st-telangana",
  "Karnataka": "st-karnataka",
  "Tamil Nadu": "st-tamilnadu",
  "Odisha": "st-odisha",
  "Assam": "st-assam"
};

let currentWeatherRequestId = 0;

/**
 * Load and display weather state from API with fallback
 */
async function loadWeatherState(stateName) {
  if (!stateName) {
    stateName = CURRENT_WEATHER_STATE || "Punjab";
  }
  CURRENT_WEATHER_STATE = stateName;
  window.CURRENT_WEATHER_STATE = stateName;
  const reqId = ++currentWeatherRequestId;

  // Sync state dropdown
  const stateSelect = document.getElementById("weatherStateSelect");
  if (stateSelect && stateSelect.value !== CURRENT_WEATHER_STATE) {
    stateSelect.value = CURRENT_WEATHER_STATE;
  }

  // Update map visual highlight & quick chips immediately
  highlightMapState(CURRENT_WEATHER_STATE);

  // 1. Immediately render local dictionary data synchronously for zero-lag instant UI feedback
  const localData = INDIA_STATE_WEATHER_LOCAL[CURRENT_WEATHER_STATE] || INDIA_STATE_WEATHER_LOCAL["Punjab"];
  if (localData) {
    updateWeatherUI(localData);
  }

  // 2. Fetch fresh backend telemetry asynchronously
  try {
    const res = await fetch(`/api/weather?state=${encodeURIComponent(CURRENT_WEATHER_STATE)}`);
    if (res.ok) {
      const data = await res.json();
      // Drop stale response if user switched to another state while fetch was in flight
      if (reqId !== currentWeatherRequestId) {
        return;
      }
      updateWeatherUI(data);
      return;
    }
  } catch (err) {
    console.warn("Weather API fetch fallback to local dictionary:", err);
  }
}

/**
 * User selects state from Dropdown
 */
function onWeatherStateChange(stateName) {
  if (!stateName) return;
  loadWeatherState(stateName);
}

/**
 * User clicks a state on the SVG India Map or Quick Chip
 */
function selectWeatherState(stateName) {
  if (!stateName) return;
  loadWeatherState(stateName);
}

/**
 * Highlight active state on SVG India map and sync quick select chips
 */
function highlightMapState(stateName) {
  // Remove active from all states
  const allStates = document.querySelectorAll(".india-state");
  allStates.forEach(el => el.classList.remove("state-active"));

  // Add active to targeted state polygon
  const targetId = STATE_ELEMENT_MAP[stateName];
  if (targetId) {
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.classList.add("state-active");
    }
  }

  // Sync quick select chip active states
  document.querySelectorAll("[data-weather-chip]").forEach(chip => {
    const chipState = chip.getAttribute("data-weather-chip");
    if (chipState === stateName) {
      chip.className = "weather-chip px-2.5 py-1 font-bold rounded-lg bg-blue-600 text-white border border-blue-700 shadow-sm transition ring-2 ring-blue-300";
    } else {
      chip.className = "weather-chip px-2.5 py-1 font-bold rounded-lg bg-white hover:bg-blue-100 text-slate-700 hover:text-blue-800 border border-slate-200 transition shadow-xs";
    }
  });
}

/**
 * Update all Weather, Map, Silo Shed, and 5-Day Forecast UI elements
 */
function updateWeatherUI(w) {
  if (!w) return;

  const stateName = w.state || CURRENT_WEATHER_STATE;
  // If this update is for a different state than what is currently selected, discard
  if (w.state && CURRENT_WEATHER_STATE && w.state.toLowerCase() !== CURRENT_WEATHER_STATE.toLowerCase()) {
    return;
  }
  CURRENT_WEATHER_STATE = stateName;
  window.CURRENT_WEATHER_STATE = stateName;

  // Keep dropdown in sync
  const stateSelect = document.getElementById("weatherStateSelect");
  if (stateSelect && stateSelect.value !== stateName) {
    stateSelect.value = stateName;
  }

  // 1. Radar Status Badge
  const radarStatusBadge = document.getElementById("radarStatusBadge");
  const radarAlertBanner = document.getElementById("radarAlertBanner");
  const radarAlertText = document.getElementById("radarAlertText");
  const radarSweepIndicator = document.getElementById("radarSweepIndicator");

  if (w.dispatchPaused) {
    if (radarStatusBadge) {
      radarStatusBadge.className = "px-4 py-1.5 rounded-full text-xs font-extrabold bg-red-600 text-white animate-pulse shadow-md flex items-center space-x-2";
      radarStatusBadge.innerHTML = `<span>🚨 SEVERE RAIN RADAR ALERT: DISPATCH PAUSED (${stateName.toUpperCase()})</span>`;
    }
    if (radarAlertBanner) {
      radarAlertBanner.classList.remove("hidden");
      if (radarAlertText) {
        radarAlertText.textContent = w.pauseReason || `IMD Doppler Radar detected precipitation risk >70% over ${w.mandiHub}. Open tractor trolleys paused.`;
      }
    }
    if (radarSweepIndicator) {
      radarSweepIndicator.className = "w-4 h-4 rounded-full bg-red-500 animate-ping mr-2";
    }
  } else {
    if (radarStatusBadge) {
      radarStatusBadge.className = "px-4 py-1.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-sm flex items-center space-x-2";
      radarStatusBadge.innerHTML = `<span>🟢 RADAR CLEAR: ACTIVE PACING (${stateName.toUpperCase()})</span>`;
    }
    if (radarAlertBanner) {
      radarAlertBanner.classList.add("hidden");
    }
    if (radarSweepIndicator) {
      radarSweepIndicator.className = "w-4 h-4 rounded-full bg-emerald-500 mr-2";
    }
  }

  // 2. Top 4 Meteorological Metric Cards
  const weatherTemp = document.getElementById("weatherTemp");
  const weatherRainProb = document.getElementById("weatherRainProb");
  const weatherReflectivity = document.getElementById("weatherReflectivity");
  const weatherReflectivityDesc = document.getElementById("weatherReflectivityDesc");
  const weatherCond = document.getElementById("weatherCond");
  const weatherWindHumidity = document.getElementById("weatherWindHumidity");

  if (weatherTemp) weatherTemp.textContent = `${w.tempC}°C`;
  if (weatherRainProb) weatherRainProb.textContent = `${w.rainProbability}%`;

  const dBZ = w.radarReflectivityDBZ || 24;
  if (weatherReflectivity) {
    weatherReflectivity.textContent = `${dBZ} dBZ`;
    if (dBZ >= 45) {
      weatherReflectivity.className = "text-3xl font-black text-red-600 mt-1";
    } else if (dBZ >= 35) {
      weatherReflectivity.className = "text-3xl font-black text-amber-600 mt-1";
    } else {
      weatherReflectivity.className = "text-3xl font-black text-indigo-600 mt-1";
    }
  }

  if (weatherReflectivityDesc) {
    if (dBZ >= 45) {
      weatherReflectivityDesc.textContent = "Heavy Storm / Cloudburst Alert";
    } else if (dBZ >= 35) {
      weatherReflectivityDesc.textContent = "Squall Line / Rain Bands";
    } else if (dBZ >= 20) {
      weatherReflectivityDesc.textContent = "Scattered Moderate Clouds";
    } else {
      weatherReflectivityDesc.textContent = "Clear Atmospheric Column";
    }
  }

  if (weatherCond) weatherCond.textContent = w.condition;
  if (weatherWindHumidity) {
    weatherWindHumidity.textContent = `${w.wind || '12 km/h NW'} • ${w.humidity || 48}% Hum`;
  }

  // 3. Map Badge Readout
  const mapSelectedStateBadge = document.getElementById("mapSelectedStateBadge");
  if (mapSelectedStateBadge) {
    const rainfall = w.rainfallMm !== undefined ? w.rainfallMm : (w.rainProbability > 70 ? 85 : 14);
    let zoneTag = "Normal";
    if (rainfall >= 75) zoneTag = "🔴 Red Alert (>75mm/h)";
    else if (rainfall >= 50) zoneTag = "🟠 Orange Alert (50-75mm/h)";
    else if (rainfall >= 20) zoneTag = "🟡 Yellow Watch (20-50mm/h)";
    else zoneTag = "🟢 Green Normal (<20mm/h)";

    mapSelectedStateBadge.textContent = `Selected: ${stateName} • ${rainfall} mm/h • ${zoneTag}`;
  }

  // Highlight map state polygon
  highlightMapState(stateName);

  // 4. Covered Transit Silo Sheds: 14 Tractors Protected Before Rain Hits Box
  const siloMandiHubBadge = document.getElementById("siloMandiHubBadge");
  const siloShieldBadge = document.getElementById("siloShieldBadge");
  const siloRainZoneBadge = document.getElementById("siloRainZoneBadge");
  const siloBannerTitle = document.getElementById("siloBannerTitle");
  const siloBannerDesc = document.getElementById("siloBannerDesc");
  const siloTractorsCount = document.getElementById("siloTractorsCount");
  const siloGrainMT = document.getElementById("siloGrainMT");
  const siloSavingsINR = document.getElementById("siloSavingsINR");
  const siloActiveCount = document.getElementById("siloActiveCount");

  const tractors = w.tractorsProtected || (stateName === 'Maharashtra' ? 22 : stateName === 'Bihar' ? 25 : stateName === 'West Bengal' ? 19 : stateName === 'Madhya Pradesh' ? 18 : stateName === 'Odisha' ? 21 : stateName === 'Assam' ? 23 : stateName === 'Haryana' ? 9 : 14);
  const grainMT = w.grainProtectedMT || (tractors * 25);
  const lossSaved = w.lossSavedINR || (tractors * 17000);
  const silosCount = w.silosActive || 6;

  if (siloMandiHubBadge) {
    siloMandiHubBadge.textContent = w.mandiHub || `${stateName} Agro Mandi Hub`;
  }

  if (siloShieldBadge) {
    siloShieldBadge.textContent = w.dispatchPaused ? "⚠️ Active Climate Emergency Shelter" : "Zero-Spoilage Climate Shield";
    siloShieldBadge.className = w.dispatchPaused ?
      "px-2.5 py-1 bg-red-600 text-white font-black text-xs rounded uppercase tracking-wider shadow animate-pulse" :
      "px-2.5 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded uppercase tracking-wider shadow";
  }

  if (siloRainZoneBadge) {
    if (w.dispatchPaused || (w.rainProbability && w.rainProbability >= 75)) {
      siloRainZoneBadge.className = "px-2 py-0.5 bg-red-600 text-white font-bold text-xs rounded shadow animate-pulse";
      siloRainZoneBadge.textContent = "🚨 Severe Rain Alert: Silo Divert Engaged";
    } else if (w.rainProbability && w.rainProbability >= 50) {
      siloRainZoneBadge.className = "px-2 py-0.5 bg-amber-500 text-slate-950 font-bold text-xs rounded shadow";
      siloRainZoneBadge.textContent = "🟡 Elevated Rain Risk: High-Canopy Standby";
    } else {
      siloRainZoneBadge.className = "px-2 py-0.5 bg-emerald-600 text-white font-bold text-xs rounded shadow";
      siloRainZoneBadge.textContent = "🟢 Normal Weather Pacing";
    }
  }

  if (siloBannerTitle) {
    const curL = typeof currentLang !== 'undefined' ? currentLang : 'en';
    if (curL === 'hi') {
      siloBannerTitle.textContent = `कवर्ड साइलो शेड: बारिश आने से पहले ${tractors} ट्रॉली सुरक्षित`;
    } else if (curL === 'pa') {
      siloBannerTitle.textContent = `ਢੱਕੇ ਹੋਏ ਸਾਈਲੋ ਸ਼ੈੱਡ: ਮੀਂਹ ਤੋਂ ਪਹਿਲਾਂ ${tractors} ਟਰੈਕਟਰ ਸੁਰੱਖਿਅਤ`;
    } else if (curL === 'mr') {
      siloBannerTitle.textContent = `कव्हर्ड सायलो शेड: पाऊस येण्यापूर्वी ${tractors} ट्रॅक्टर सुरक्षित`;
    } else if (curL === 'gu') {
      siloBannerTitle.textContent = `કવર્ડ સાયલો શેડ: વરસાદ પહેલાં ${tractors} ટ્રેક્ટર સુરક્ષિત`;
    } else if (curL === 'bn') {
      siloBannerTitle.textContent = `কভার্ড সাইলো শেড: বৃষ্টির আগে ${tractors}টি ট্র্যাক্টর সুরক্ষিত`;
    } else if (curL === 'te') {
      siloBannerTitle.textContent = `రక్షిత సైలో షెడ్లు: వర్షం రాకముందే ${tractors} ట్రాక్టర్లు భద్రం`;
    } else if (curL === 'ta') {
      siloBannerTitle.textContent = `கூரையிடப்பட்ட கிடங்கு: மழைக்கு முன் ${tractors} டிராக்டர்கள் பாதுகாப்பு`;
    } else if (curL === 'kn') {
      siloBannerTitle.textContent = `ಮುಚ್ಚಿದ ಸೈಲೋ ಶೆಡ್‌ಗಳು: ಮಳೆಗೂ ಮುನ್ನ ${tractors} ಟ್ರಾಕ್ಟರ್ ಸುರಕ್ಷಿತ`;
    } else {
      siloBannerTitle.textContent = `Covered Transit Silo Sheds: ${tractors} Tractors Protected Before Rain Hits`;
    }
  }

  if (siloBannerDesc) {
    const hubName = w.mandiHub || `${stateName} Mandi Hub`;
    siloBannerDesc.textContent = `When Doppler radar detects precipitation risk >70% in ${stateName} (${hubName}), KISAN-Q automatically halts open trolley dispatches and diverts en-route tractors into covered high-canopy transit silos, preventing ₹10+ Crores in annual post-harvest rain spoilage.`;
  }

  if (siloTractorsCount) siloTractorsCount.textContent = `${tractors} Tractors`;
  if (siloGrainMT) siloGrainMT.textContent = `${grainMT} MT`;
  if (siloSavingsINR) siloSavingsINR.textContent = `₹${lossSaved.toLocaleString('en-IN')}`;
  if (siloActiveCount) siloActiveCount.textContent = `${silosCount} Active`;

  // 5. 5-Day Agromet Advisory Table
  const forecastMandiHubTitle = document.getElementById("forecastMandiHubTitle");
  if (forecastMandiHubTitle) {
    forecastMandiHubTitle.textContent = `IMD Agromet 5-Day Operational Advisory (${w.mandiHub || stateName})`;
  }

  const tableBody = document.getElementById("weatherForecastTableBody");
  if (tableBody && Array.isArray(w.forecast) && w.forecast.length > 0) {
    tableBody.innerHTML = w.forecast.map((item, idx) => {
      let rainClass = "text-emerald-700 font-bold";
      if (item.rain.includes("Severe") || item.rain.includes("Torrential") || item.rain.includes("Heavy Rain")) {
        rainClass = "text-red-600 font-bold";
      } else if (item.rain.includes("Elevated") || item.rain.includes("Moderate")) {
        rainClass = "text-amber-600 font-bold";
      }

      let rowBg = "hover:bg-white transition";
      if (item.rain.includes("Severe") || item.rain.includes("Torrential")) {
        rowBg = "bg-red-50/50 hover:bg-red-50 transition";
      } else if (item.rain.includes("Elevated")) {
        rowBg = "bg-amber-50/40 hover:bg-amber-50 transition";
      }

      let badgeBg = "bg-emerald-100 text-emerald-800";
      if (item.action.includes("🚨") || item.action.includes("Auto-Pause") || item.action.includes("Emergency")) {
        badgeBg = "bg-red-100 text-red-800 font-bold";
      } else if (item.action.includes("🟡") || item.action.includes("Priority") || item.action.includes("Pre-Alert")) {
        badgeBg = "bg-amber-100 text-amber-800 font-bold";
      }

      return `
        <tr class="${rowBg}">
          <td class="py-2.5 px-3 font-bold text-slate-900">${item.day}</td>
          <td class="py-2.5 px-3 font-mono">${item.temp}</td>
          <td class="py-2.5 px-3 font-mono ${rainClass}">${item.rain}</td>
          <td class="py-2.5 px-3">${item.wind}</td>
          <td class="py-2.5 px-3"><span class="${badgeBg} px-2 py-0.5 rounded font-semibold text-[10px]">${item.action}</span></td>
        </tr>
      `;
    }).join("");
  }

  // Re-run lucide icons if available
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/**
 * Trigger Weather Scenario Simulation (Rain Alert or Clear Skies) for currently selected state
 */
async function triggerWeatherScenario(scenario) {
  const currentState = CURRENT_WEATHER_STATE || "Punjab";
  try {
    const res = await fetch("/api/weather/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scenario, state: currentState })
    });
    const data = await res.json();
    if (data.weather) {
      updateWeatherUI(data.weather);
    } else {
      await loadWeatherState(currentState);
    }

    if (typeof loadDashboardTelemetry === 'function') {
      loadDashboardTelemetry();
    }

    const stateInfo = INDIA_STATE_WEATHER_LOCAL[currentState] || INDIA_STATE_WEATHER_LOCAL["Punjab"];
    if (scenario === "RAIN_ALERT") {
      const tractorsSheltered = data.openTractorsDivertedToCoveredShed || stateInfo.tractorsProtected || 14;
      const savings = data.estimatedLossSavedINR ? `₹${data.estimatedLossSavedINR.toLocaleString('en-IN')}` : `₹${(stateInfo.lossSavedINR || 240000).toLocaleString('en-IN')}`;
      alert(`🚨 IMD DOPPLER RADAR ALERT DETECTED for ${currentState} (${stateInfo.mandiHub})!\n\nHeavy cloudburst incoming in 20 minutes. Open tractor trolley dispatches are immediately paused.\n\n🛡️ ${tractorsSheltered} tractors en-route diverted to Covered Transit Silo Sheds.\n💰 Grain spoilage prevented: ${savings} saved!`);
    } else {
      alert(`☀️ Weather Radar Normal for ${currentState} (${stateInfo.mandiHub}): Dispatches resumed at full capacity.`);
    }
  } catch (err) {
    alert("Weather simulation error: " + err.message);
  }
}

// Global exports
window.loadWeatherState = loadWeatherState;
window.onWeatherStateChange = onWeatherStateChange;
window.selectWeatherState = selectWeatherState;
window.triggerWeatherScenario = triggerWeatherScenario;
window.updateWeatherUI = updateWeatherUI;
window.INDIA_STATE_WEATHER_LOCAL = INDIA_STATE_WEATHER_LOCAL;

