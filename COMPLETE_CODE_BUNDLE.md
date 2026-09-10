# 🌾 KISAN-Q: Smart Slot Booking for Grain Purchase
### Complete Project Source Code Bundle
**Smart India Hackathon 2026 — Problem Statement ID: SIH26032**  
**Theme**: FoodTech & Rural Development | **Team**: ByteKnight  
**Archive File**: `kisan-q-smart-mandi.zip`  
**Root Path**: `C:\Users\bhagat mukhiya\.gemini\antigravity\scratch\kisan-q-smart-mandi`

---

## 📑 Table of Contents
1. [Project Overview & Architecture](#overview)
2. [How to Run](#how-to-run)
3. [package.json](#packagejson)
4. [server.js](#serverjs)
5. [README.md](#readmemd)
6. [public/index.html](#publicindexhtml)
7. [public/css/style.css](#publiccssstylecss)
8. [public/js/i18n.js](#publicjsi18njs)
9. [public/js/farmer.js](#publicjsfarmerjs)
10. [public/js/ivr.js](#publicjsivrjs)
11. [public/js/dashboard.js](#publicjsdashboardjs)
12. [public/js/weather.js](#publicjsweatherjs)
13. [public/js/app.js](#publicjsappjs)

---

<a name="overview"></a>
## 1. Project Overview & Architecture
This prototype implements:
- **Staggered Slot Booking**: Paces arrivals to live weighbridge throughput (<60 mins turnaround).
- **Zero-Smartphone Access (Keypad IVR Simulator)**: Toll-Free 1800-547-2600 missed-call voice callbacks in Hindi, Punjabi, and English.
- **Fair-Share Anti-Hoarding Algorithm**: Guarantees 60% priority slots for marginal/small farmers (<2 ha).
- **IMD Weather-Aware Queue Pause**: Doppler radar precipitation nowcasting to halt open dispatches during rain.
- **Mandi Officer Command Center**: Slide 4 recreation with WB 1-4 scale telemetry, NIR moisture testing, and digital MSP receipts.

---

<a name="how-to-run"></a>
## 2. How to Run
```bash
# 1. Navigate to project folder
cd "C:\Users\bhagat mukhiya\.gemini\antigravity\scratch\kisan-q-smart-mandi"

# 2. Install dependencies (Express, CORS)
npm install

# 3. Start server
npm start

# 4. Open in browser
http://localhost:3000
```

---

---

<a name="packagejson"></a>
## 📄 File: `package.json`

```json
﻿{
  "name": "kisan-q-smart-mandi",
  "version": "1.0.0",
  "description": "Smart Slot Booking for Grain Purchase (SIH26032) - Prototype by Team ByteKnight",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "keywords": [
    "sih2026",
    "kisan-token",
    "apmc-mandi",
    "slot-booking",
    "agritech",
    "foodtech"
  ],
  "author": "ByteKnight",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2"
  }
}

```

---

<a name="serverjs"></a>
## 📄 File: `server.js`

```javascript
const express = require("express");
const cors = require("cors");
const path = require("path");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// --- IN-MEMORY STATE ENGINE (Pre-seeded with realistic data matching SIH presentation) ---

const MSP_RATES = {
  wheat: { name: "Wheat (गेहूं)", ratePerQuintal: 2275, ratePerMT: 22750 },
  paddy: { name: "Paddy / Rice (धान)", ratePerQuintal: 2300, ratePerMT: 23000 },
  mustard: { name: "Mustard (सरसों)", ratePerQuintal: 5650, ratePerMT: 56500 },
  chana: { name: "Gram / Chana (चना)", ratePerQuintal: 5440, ratePerMT: 54400 },
  soybean: { name: "Soybean (सोयाबीन)", ratePerQuintal: 4892, ratePerMT: 48920 }
};

const HOURLY_SLOTS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00"
];

// Slot capacity config
const SLOT_CAPACITY = 50;
const FAIR_SHARE_RESERVED = 30; // 60% reserved for marginal/small farmers (<2ha)

// Weather state (IMD Radar Hook)
let weatherStatus = {
  condition: "Partly Cloudy",
  tempC: 28,
  rainProbability: 25,
  radarAlert: "NONE", // NONE, ADVISORY, SEVERE_RAIN_WARNING
  dispatchPaused: false,
  pauseReason: "",
  lastUpdated: new Date().toISOString()
};

// Weighbridges status (Matches slide 4 mockup)
let weighbridges = [
  {
    id: "WB-01",
    name: "Weighbridge 1 (Entry)",
    status: "ACTIVE",
    currentVehicle: "MP04AB1234",
    farmerName: "Ramesh Patel",
    crop: "Wheat",
    grossWeightMT: 42.1,
    tareWeightMT: 12.4,
    netWeightMT: 29.7,
    stage: "GROSS_WEIGHING",
    efficiencyMTPerHr: 35
  },
  {
    id: "WB-02",
    name: "Weighbridge 2 (Entry)",
    status: "ACTIVE",
    currentVehicle: "MP09CD5678",
    farmerName: "Gurpreet Singh",
    crop: "Paddy",
    grossWeightMT: 38.6,
    tareWeightMT: 11.2,
    netWeightMT: 27.4,
    stage: "TARE_WEIGHING",
    efficiencyMTPerHr: 32
  },
  {
    id: "WB-03",
    name: "Weighbridge 3 (Express/Marginal)",
    status: "IDLE",
    currentVehicle: null,
    farmerName: null,
    crop: null,
    grossWeightMT: 0,
    tareWeightMT: 0,
    netWeightMT: 0,
    stage: "READY_FOR_NEXT",
    efficiencyMTPerHr: 40
  },
  {
    id: "WB-04",
    name: "Weighbridge 4 (Exit & Inspection)",
    status: "MAINTENANCE",
    currentVehicle: null,
    farmerName: null,
    crop: null,
    grossWeightMT: 0,
    tareWeightMT: 0,
    netWeightMT: 0,
    stage: "CALIBRATING_SENSORS",
    efficiencyMTPerHr: 0
  }
];

// Seed Tokens / Bookings
let tokens = [
  {
    id: "KT-1041",
    tokenNumber: 41,
    farmerName: "Suresh Kushwaha",
    phone: "9826011223",
    landSizeHa: 1.2,
    category: "Small & Marginal",
    crop: "wheat",
    cropName: "Wheat (गेहूं)",
    vehicleNo: "MP04TA9981",
    vehicleType: "Tractor Trolley",
    estWeightMT: 18.5,
    slot: "09:00 - 10:00",
    gate: "Gate 1",
    status: "COMPLETED",
    source: "SMARTPHONE_APP",
    priority: "HIGH_FAIRSHARE",
    moisturePercent: 11.4,
    netWeightMT: 18.2,
    payoutAmount: 414050,
    bookedAt: new Date(Date.now() - 3600000 * 3).toISOString()
  },
  {
    id: "KT-1042",
    tokenNumber: 42,
    farmerName: "Devendra Verma",
    phone: "9425088712",
    landSizeHa: 0.8,
    category: "Marginal (<1 ha)",
    crop: "wheat",
    cropName: "Wheat (गेहूं)",
    vehicleNo: "MP04TR4412",
    vehicleType: "Tractor Trolley",
    estWeightMT: 14.0,
    slot: "10:00 - 11:00",
    gate: "Gate 2",
    status: "GATE_ARRIVED",
    source: "IVR_FEATURE_PHONE",
    priority: "HIGH_FAIRSHARE",
    moisturePercent: 12.1,
    netWeightMT: 0,
    payoutAmount: 0,
    bookedAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: "KT-1043",
    tokenNumber: 43,
    farmerName: "Harpreet Singh Sandhu",
    phone: "9876543210",
    landSizeHa: 3.5,
    category: "Medium/Commercial",
    crop: "paddy",
    cropName: "Paddy / Rice (धान)",
    vehicleNo: "PB10Z9901",
    vehicleType: "Double Trolley",
    estWeightMT: 28.0,
    slot: "11:00 - 12:00",
    gate: "Gate 1",
    status: "EN_ROUTE",
    source: "SMARTPHONE_APP",
    priority: "GENERAL_QUOTA",
    moisturePercent: null,
    netWeightMT: 0,
    payoutAmount: 0,
    bookedAt: new Date(Date.now() - 3600000 * 1.5).toISOString()
  },
  {
    id: "KT-1044",
    tokenNumber: 44,
    farmerName: "Mukesh Malviya",
    phone: "9179012345",
    landSizeHa: 1.5,
    category: "Small Farmer (1-2 ha)",
    crop: "mustard",
    cropName: "Mustard (सरसों)",
    vehicleNo: "MP38T2231",
    vehicleType: "Tractor Trolley",
    estWeightMT: 12.0,
    slot: "11:00 - 12:00",
    gate: "Gate 2",
    status: "BOOKED",
    source: "IVR_FEATURE_PHONE",
    priority: "HIGH_FAIRSHARE",
    moisturePercent: null,
    netWeightMT: 0,
    payoutAmount: 0,
    bookedAt: new Date(Date.now() - 3600000).toISOString()
  }
];

let nextTokenNumber = 45;

// Digital Weighment Slips History
let weighmentReceipts = [
  {
    receiptNo: "FCI-BPL-2026-0881",
    tokenId: "KT-1041",
    farmerName: "Suresh Kushwaha",
    phone: "9826011223",
    crop: "Wheat (Grade-A)",
    vehicleNo: "MP04TA9981",
    grossWeightMT: 31.8,
    tareWeightMT: 13.6,
    netWeightMT: 18.2,
    netQuintals: 182,
    moisturePercent: 11.4,
    moistureStatus: "ACCEPTABLE",
    mspRatePerQuintal: 2275,
    totalPayoutINR: 414050,
    weighbridgeId: "WB-01",
    officerInCharge: "Anjali Sharma (APMC Inspector)",
    dbtStatus: "TRANSFERRED_TO_AADHAAR_BANK",
    timestamp: new Date(Date.now() - 3600000).toISOString()
  }
];

// --- HELPER ALGORITHMS ---

function calculateSlotDistribution() {
  const distribution = {};
  HOURLY_SLOTS.forEach(slot => {
    const booked = tokens.filter(t => t.slot === slot && t.status !== "CANCELLED");
    const fairShareCount = booked.filter(t => t.priority === "HIGH_FAIRSHARE").length;
    const generalCount = booked.filter(t => t.priority === "GENERAL_QUOTA").length;
    distribution[slot] = {
      slot,
      totalBooked: booked.length,
      fairShareCount,
      generalCount,
      maxCapacity: SLOT_CAPACITY,
      isHighLoad: booked.length >= SLOT_CAPACITY * 0.8,
      isFull: booked.length >= SLOT_CAPACITY,
      fairShareRemaining: Math.max(0, FAIR_SHARE_RESERVED - fairShareCount),
      generalRemaining: Math.max(0, (SLOT_CAPACITY - FAIR_SHARE_RESERVED) - generalCount)
    };
  });
  return distribution;
}

// --- REST API ENDPOINTS ---

// 1. Get mandi overview & statistics (matches Slide 4 dashboard)
app.get("/api/stats", (req, res) => {
  const completedTokens = tokens.filter(t => t.status === "COMPLETED");
  const activeQueue = tokens.filter(t => ["BOOKED", "EN_ROUTE", "GATE_ARRIVED", "WEIGHING_GROSS", "MOISTURE_TESTED"].includes(t.status));
  const totalProcuredMT = weighmentReceipts.reduce((acc, r) => acc + r.netWeightMT, 1450); // benchmark 1450 MT
  const trucksProcessed = 185 + completedTokens.length;

  res.json({
    mandiName: "APMC Krishi Mandi Bhopal (Central Yard)",
    district: "Bhopal, Madhya Pradesh",
    todayProcurementMT: Number(totalProcuredMT.toFixed(1)),
    totalTrucksProcessed: trucksProcessed,
    avgProcessingMinutes: 58, // Slashed from 72 hours down to 58 minutes!
    activeFarmerQueueCount: activeQueue.length,
    roadsideWaitSavedHours: "96%",
    financialSavedPerFarmer: 4500, // ₹4,500 saved per trip in tractor penalties
    dieselReductionLiters: 1850,
    slotDistribution: calculateSlotDistribution(),
    weather: weatherStatus
  });
});

// 2. Get available hourly slots with Fair-Share quota breakdown
app.get("/api/slots", (req, res) => {
  const slots = calculateSlotDistribution();
  res.json({
    slots: Object.values(slots),
    mspRates: MSP_RATES,
    fairShareReservedPercent: 60,
    currentTime: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
  });
});

// 3. Book a slot (Fair-Share Allocation Algorithm implementation)
app.post("/api/book", (req, res) => {
  try {
    const {
      farmerName,
      phone,
      landSizeHa,
      crop,
      vehicleNo,
      vehicleType,
      estWeightMT,
      preferredSlot,
      source // SMARTPHONE_APP, IVR_FEATURE_PHONE, CALL_CENTER
    } = req.body;

    if (!farmerName || !phone || !crop) {
      return res.status(400).json({ error: "Missing required booking fields" });
    }

    // Check weather alert: if dispatches paused, reject or alert
    if (weatherStatus.dispatchPaused) {
      return res.status(423).json({
        error: "Weather Advisory Active",
        message: "Open trolley bookings temporarily suspended due to IMD Heavy Rain Alert. Please retry once rain clears or choose covered warehouse slot."
      });
    }

    const landHa = parseFloat(landSizeHa) || 1.0;
    // Fair-Share Quota Rule: Land <= 2.0 hectares = High Priority Fair-Share Quota
    const isSmallMarginal = landHa <= 2.0;
    const priority = isSmallMarginal ? "HIGH_FAIRSHARE" : "GENERAL_QUOTA";

    const slotDist = calculateSlotDistribution();
    let assignedSlot = preferredSlot || HOURLY_SLOTS[1];

    if (!slotDist[assignedSlot]) {
      assignedSlot = HOURLY_SLOTS[1];
    }

    const currentSlotData = slotDist[assignedSlot];

    // Check quota availability
    if (isSmallMarginal) {
      if (currentSlotData.fairShareRemaining <= 0 && currentSlotData.isFull) {
        // Find next open slot
        const nextSlot = HOURLY_SLOTS.find(s => slotDist[s].fairShareRemaining > 0);
        if (nextSlot) assignedSlot = nextSlot;
      }
    } else {
      if (currentSlotData.generalRemaining <= 0) {
        // Traders / commercial can only take non-reserved slots
        const nextGenSlot = HOURLY_SLOTS.find(s => slotDist[s].generalRemaining > 0);
        if (nextGenSlot) {
          assignedSlot = nextGenSlot;
        } else {
          return res.status(409).json({
            error: "Quota Full",
            message: "General commercial quota full for requested slots. 60% quota is legally reserved for small & marginal farmers under SIH Fair-Share rules."
          });
        }
      }
    }

    const assignedGate = Math.random() > 0.5 ? "Gate 1 (North Yard)" : "Gate 2 (South Yard)";
    const cropMeta = MSP_RATES[crop] || { name: crop, ratePerMT: 22750 };

    const tokenObj = {
      id: `KT-${nextTokenNumber + 1000}`,
      tokenNumber: nextTokenNumber++,
      farmerName,
      phone,
      landSizeHa: landHa,
      category: isSmallMarginal ? (landHa < 1.0 ? "Marginal (<1 ha)" : "Small (1-2 ha)") : "Large/Commercial (>2 ha)",
      crop,
      cropName: cropMeta.name,
      vehicleNo: (vehicleNo || "MP04TR" + Math.floor(1000 + Math.random() * 9000)).toUpperCase(),
      vehicleType: vehicleType || "Tractor Trolley",
      estWeightMT: parseFloat(estWeightMT) || 15.0,
      slot: assignedSlot,
      gate: assignedGate,
      status: "BOOKED",
      source: source || "SMARTPHONE_APP",
      priority,
      moisturePercent: null,
      netWeightMT: 0,
      payoutAmount: 0,
      bookedAt: new Date().toISOString()
    };

    tokens.unshift(tokenObj);

    res.status(201).json({
      success: true,
      message: isSmallMarginal
        ? "✅ Priority Fair-Share Slot Confirmed (Marginal Farmer Quota)!"
        : "✅ Slot Booked Successfully (General Quota)",
      token: tokenObj,
      fairShareProtected: isSmallMarginal,
      estimatedWaitTimeMins: 45
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Token lookup by ID or Phone
app.get("/api/token/:query", (req, res) => {
  const q = req.params.query.trim().toLowerCase();
  const found = tokens.find(t =>
    t.id.toLowerCase() === q ||
    t.tokenNumber.toString() === q ||
    t.phone === q ||
    t.vehicleNo.toLowerCase() === q
  );

  if (!found) {
    return res.status(404).json({ error: "Token not found" });
  }

  // Calculate position in queue
  const aheadInQueue = tokens.filter(t =>
    ["BOOKED", "EN_ROUTE", "GATE_ARRIVED"].includes(t.status) &&
    t.tokenNumber < found.tokenNumber
  ).length;

  res.json({
    token: found,
    aheadInQueue,
    estimatedWaitMins: aheadInQueue * 8 + 15,
    gateStatus: "Open & Regulated"
  });
});

// 5. Update token status (Gate arrival, check-in)
app.patch("/api/token/:id/status", (req, res) => {
  const { id } = req.params;
  const { status, moisturePercent } = req.body;

  const token = tokens.find(t => t.id === id || t.tokenNumber.toString() === id);
  if (!token) {
    return res.status(404).json({ error: "Token not found" });
  }

  if (status) token.status = status;
  if (moisturePercent !== undefined) token.moisturePercent = parseFloat(moisturePercent);

  res.json({ success: true, token });
});

// 6. Weighbridge live telemetry
app.get("/api/weighbridges", (req, res) => {
  res.json({ weighbridges });
});

// 7. Process weighment & Issue Digital MSP Receipt
app.post("/api/weighment/process", (req, res) => {
  const {
    weighbridgeId,
    tokenId,
    grossWeightMT,
    tareWeightMT,
    moisturePercent,
    officerName
  } = req.body;

  const token = tokens.find(t => t.id === tokenId);
  if (!token) {
    return res.status(404).json({ error: "Token not found" });
  }

  const gross = parseFloat(grossWeightMT);
  const tare = parseFloat(tareWeightMT);
  const net = Math.max(0, Number((gross - tare).toFixed(2)));
  const netQuintals = Number((net * 10).toFixed(1));
  const moisture = parseFloat(moisturePercent) || 11.5;

  const cropKey = token.crop.toLowerCase();
  const cropConfig = MSP_RATES[cropKey] || MSP_RATES.wheat;
  const ratePerQtl = cropConfig.ratePerQuintal;

  let moistureDeduction = 0;
  let moistureStatus = "ACCEPTABLE";
  if (moisture > 14.0) {
    moistureStatus = "REJECTED_EXCESS_MOISTURE";
  } else if (moisture > 12.0) {
    moistureStatus = "ACCEPTED_WITH_DOCK";
    moistureDeduction = Number(((moisture - 12.0) * 0.01 * netQuintals * ratePerQtl).toFixed(0));
  }

  const grossPayout = netQuintals * ratePerQtl;
  const netPayout = Math.max(0, grossPayout - moistureDeduction);

  const receipt = {
    receiptNo: `FCI-BPL-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    tokenId: token.id,
    tokenNumber: token.tokenNumber,
    farmerName: token.farmerName,
    phone: token.phone,
    crop: cropConfig.name,
    vehicleNo: token.vehicleNo,
    grossWeightMT: gross,
    tareWeightMT: tare,
    netWeightMT: net,
    netQuintals,
    moisturePercent: moisture,
    moistureStatus,
    moistureDeductionINR: moistureDeduction,
    mspRatePerQuintal: ratePerQtl,
    totalPayoutINR: netPayout,
    weighbridgeId: weighbridgeId || "WB-01",
    officerInCharge: officerName || "Anjali Sharma (APMC Inspector)",
    dbtStatus: moistureStatus === "REJECTED_EXCESS_MOISTURE" ? "ON_HOLD" : "TRANSFERRED_TO_AADHAAR_BANK",
    timestamp: new Date().toISOString()
  };

  weighmentReceipts.unshift(receipt);

  // Update token state
  token.status = moistureStatus === "REJECTED_EXCESS_MOISTURE" ? "REJECTED_MOISTURE" : "COMPLETED";
  token.netWeightMT = net;
  token.payoutAmount = netPayout;
  token.moisturePercent = moisture;

  // Update weighbridge state
  const wb = weighbridges.find(w => w.id === weighbridgeId);
  if (wb) {
    wb.status = "IDLE";
    wb.currentVehicle = null;
    wb.farmerName = null;
    wb.stage = "READY_FOR_NEXT";
  }

  res.json({
    success: true,
    receipt,
    message: "Digital MSP Weighment Receipt generated and DBT payout triggered!"
  });
});

// 8. Get all receipts / history
app.get("/api/weighment/receipts", (req, res) => {
  res.json({ receipts: weighmentReceipts });
});

// 9. IMD Weather Radar API Hook & Emergency Rain Control
app.get("/api/weather", (req, res) => {
  res.json(weatherStatus);
});

app.post("/api/weather/simulate", (req, res) => {
  const { scenario } = req.body; // 'RAIN_ALERT', 'CLEAR_SKIES', 'HEATWAVE'

  if (scenario === "RAIN_ALERT") {
    weatherStatus = {
      condition: "Severe Thunderstorm & Torrential Rain",
      tempC: 22,
      rainProbability: 95,
      radarAlert: "SEVERE_RAIN_WARNING",
      dispatchPaused: true,
      pauseReason: "IMD Doppler Radar detected incoming cloudburst over Bhopal APMC within 20 mins. Automated queue pacing pause activated to prevent open trolley crop spoilage.",
      lastUpdated: new Date().toISOString()
    };
  } else {
    weatherStatus = {
      condition: "Sunny / Clear",
      tempC: 30,
      rainProbability: 10,
      radarAlert: "NONE",
      dispatchPaused: false,
      pauseReason: "",
      lastUpdated: new Date().toISOString()
    };
  }

  res.json({
    success: true,
    weather: weatherStatus,
    openTractorsDivertedToCoveredShed: weatherStatus.dispatchPaused ? 14 : 0,
    estimatedLossSavedINR: weatherStatus.dispatchPaused ? 240000 : 0
  });
});

// 10. IVR Voice Trigger Simulation Endpoint (for missed-call / feature phones)
app.post("/api/ivr/missed-call", (req, res) => {
  const { callerPhone, language } = req.body;
  const phone = callerPhone || "98260XXXXX";
  const lang = language || "hi"; // 'hi' (Hindi), 'pa' (Punjabi), 'en' (English)

  // Find if farmer already has an active token
  const existing = tokens.find(t => t.phone === phone && t.status !== "COMPLETED");

  if (existing) {
    const ahead = tokens.filter(t => ["BOOKED", "EN_ROUTE", "GATE_ARRIVED"].includes(t.status) && t.tokenNumber < existing.tokenNumber).length;
    return res.json({
      hasActiveToken: true,
      token: existing,
      aheadInQueue: ahead,
      voiceScript: lang === "hi"
        ? `Namaskar kisan bhai! Aapka token number ${existing.tokenNumber} hai. Gate number ${existing.gate} par samay ${existing.slot} par pahuchein. Aapse aage ${ahead} tractor hain.`
        : lang === "pa"
        ? `Sat Sri Akal ji! Tuhada token number ${existing.tokenNumber} hai. Gate ${existing.gate} te ${existing.slot} te aao.`
        : `Greetings Farmer! Your Token #${existing.tokenNumber} is active for ${existing.slot} at ${existing.gate}. ${ahead} vehicles ahead of you.`,
      smsMessage: `[KISAN-Q] Token #${existing.tokenNumber}: Slot ${existing.slot}, ${existing.gate}. Turnaround: <60m. Weather: Safe. Helpline: 1800-KISAN-Q`
    });
  }

  // Create new quick token via IVR missed call
  const assignedSlot = HOURLY_SLOTS[2];
  const tokenObj = {
    id: `KT-${nextTokenNumber + 1000}`,
    tokenNumber: nextTokenNumber++,
    farmerName: "Kisan Bhai (" + phone.slice(-4) + ")",
    phone: phone,
    landSizeHa: 1.2,
    category: "Small & Marginal (<2 ha)",
    crop: "wheat",
    cropName: "Wheat (गेहूं)",
    vehicleNo: "MP04TR" + Math.floor(1000 + Math.random() * 9000),
    vehicleType: "Tractor Trolley",
    estWeightMT: 15.0,
    slot: assignedSlot,
    gate: "Gate 1",
    status: "BOOKED",
    source: "IVR_FEATURE_PHONE",
    priority: "HIGH_FAIRSHARE",
    moisturePercent: null,
    netWeightMT: 0,
    payoutAmount: 0,
    bookedAt: new Date().toISOString()
  };

  tokens.unshift(tokenObj);

  res.json({
    hasActiveToken: false,
    newBooking: true,
    token: tokenObj,
    voiceScript: lang === "hi"
      ? `Namaskar kisan bhai! KISAN-Q Toll-Free Seva dwara aapka Token Number ${tokenObj.tokenNumber} safaltapoorvak book ho gaya hai! Aapko ${tokenObj.slot} baje Gate 1 par aana hai. SMS bhej diya gaya hai.`
      : lang === "pa"
      ? `Sat Sri Akal ji! KISAN-Q Seva raahi tuhada Token Number ${tokenObj.tokenNumber} book ho gaya hai! Tusi ${tokenObj.slot} te Gate 1 aana hai.`
      : `Hello Farmer! Your token #${tokenObj.tokenNumber} has been booked for ${tokenObj.slot} at Gate 1 under priority quota. SMS sent.`,
    smsMessage: `[KISAN-Q] Namaskar! Token #${tokenObj.tokenNumber} confirmed. Gate 1, ${tokenObj.slot}. Fair-share priority granted. DO NOT arrive early to avoid rush.`
  });
});

// 11. Wi-Fi / Local Network IP Detection
function getNetworkIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "localhost";
}

app.get("/api/network", (req, res) => {
  const wifiIp = getNetworkIp();
  res.json({
    wifiIp,
    port: PORT,
    localUrl: `http://localhost:${PORT}`,
    wifiUrl: `http://${wifiIp}:${PORT}`
  });
});

// Start Server listening on all interfaces (0.0.0.0) for Wi-Fi access
app.listen(PORT, "0.0.0.0", () => {
  const wifiIp = getNetworkIp();
  console.log(`================================================================`);
  console.log(`🌾 KISAN-Q / Kisan Token Server Running:`);
  console.log(`💻 Local:   http://localhost:${PORT}`);
  console.log(`📶 Wi-Fi:   http://${wifiIp}:${PORT}`);
  console.log(`🌾 SIH 2026 Problem Statement SIH26032: Smart Slot Booking`);
  console.log(`🌾 Team ByteKnight - FoodTech & Rural Development`);
  console.log(`================================================================`);
});


```

---

<a name="readmemd"></a>
## 📄 File: `README.md`

```markdown
# 🌾 KISAN-Q: Smart Slot Booking for Grain Purchase
### Smart India Hackathon 2026 — Problem Statement ID: SIH26032
**Theme**: FoodTech & Rural Development  
**Team**: ByteKnight  
**Product**: Kisan Token / KISAN-Q — Agricultural Mandi Queue Management & Anti-Hoarding System

---

## 🎯 Ground Reality & Problem Solved (Slides 2 & 3)

In APMC Mandis across India, peak harvest arrivals (wheat, paddy, mustard) cause catastrophic deadlocks:
1. **48–96 Hour Highway Tractor Queues**: Multi-kilometer highway deadlocks forcing farmers to sleep on roads without food or shelter.
2. **Severe Financial Bleed (₹1,500/day)**: 3 days of waiting wipes out 15–25% of net profits in daily tractor-trolley rental penalties.
3. **Digital Exclusion**: >60% of marginal farmers have ₹800 keypad phones and cannot use English portals or e-NAM apps.
4. **Distress Sales Below MSP**: Exhausted farmers facing sudden rain or moisture rejection are forced to sell to middlemen at 25–35% below government MSP.

---

## 🚀 Key Innovations Implemented in This Prototype

1. **Staggered Slot Booking & Dynamic Pacing**:
   - Paces arrivals into 1-hour slots matched to live weighbridge speed.
   - Slashes roadside waiting from 72 hours down to **<60 minutes**.
2. **Zero-Smartphone Access (Interactive Keypad IVR Simulator)**:
   - Complete virtual keypad phone (Nokia/Bharat Phone) in the browser.
   - Toll-Free missed-call (`1800-547-2600`) triggers automated regional callbacks (**Hindi / Punjabi / English**) with speech synthesis and SMS token delivery.
3. **Fair-Share Anti-Hoarding Algorithm**:
   - 60% of slot capacity is legally protected for small & marginal farmers (<2 hectares) and perishable crops, legally stopping commercial trader slot-hoarding.
4. **Weather-Aware Queue Pause (IMD Doppler Radar Hook)**:
   - Automatically pauses open tractor dispatches when rain radar detects incoming precipitation, diverting vehicles to covered sheds and preventing moisture damage.
5. **Mandi Officer Command Center (Slide 4 Recreation)**:
   - Live telemetry for Weighbridges WB-01 through WB-04 (Gross, Tare, Net weights).
   - Moisture testing station with NIR sensor simulation (<=12% Full MSP, 12-14% Dock, >14% Reject).
   - Digital MSP Weighment Slip generator with direct Aadhaar DBT bank payout simulation.
   - Regional Mandi network congestion telemetry across Central India.

---

## 🛠️ Tech Stack & Architecture

- **Backend**: Node.js & Express REST API with real-time in-memory state engine.
- **Frontend**: Responsive Single-Page Application (Tailwind CSS, Lucide Icons, Chart.js, QRCode.js).
- **Voice/IVR Engine**: Web Speech API (`SpeechSynthesis`) & Web Audio API DTMF tone generator for authentic keypad phone sound.
- **Data Persistence**: RESTful state synchronized dynamically across all tabs.

---

## ⚡ How to Run the Prototype

1. Open PowerShell / Command Prompt in this folder:
   ```bash
   cd "C:\Users\bhagat mukhiya\.gemini\antigravity\scratch\kisan-q-smart-mandi"
   ```
2. Start the local server:
   ```bash
   npm start
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🎬 Step-by-Step Live Demo Script for Judges

### 1. Farmer Portal (Tab 1)
- Click **"Marginal Farmer (<1 ha Wheat)"** preset button.
- Notice the **Fair-Share Priority Badge** automatically activate (`<2 ha priority`).
- Click **"Generate Digital Token & Gate Pass"**.
- View the generated **QR Code Gate Pass** showing Token `#45`, assigned Gate 1, allotted 1-hour window, and `<45 min` estimated turnaround time.

### 2. Zero-Smartphone Access Simulator (Tab 2)
- Click **"Simulate 1-Ring Missed Call"** on the virtual Nokia phone.
- Hear the automated IVR voice speak in real **Hindi or Punjabi**:
  *"Namaskar kisan bhai! KISAN-Q Toll-Free Seva dwara aapka Token Number book ho gaya hai..."*
- See the incoming government SMS arrive on screen with token and gate instructions.

### 3. Mandi Officer Command Center (Tab 3)
- Inspect the 4 top metrics matching slide 4 (1,450 MT procurement, 58 min avg turnaround vs 72 hr baseline).
- Test the **Moisture Testing Station** slider or click "Good (11.2%)", "Dock (13.4%)", or "Reject (15.8%)".
- On Weighbridge `WB-01`, click **"Issue MSP Slip"**, view the Net MT calculation, official MSP rate, and click **"Authorize & Trigger DBT Transfer"**.

### 4. IMD Weather Radar Hook (Tab 4)
- Click **"Simulate Severe Rain Warning"**.
- Watch the entire system trigger an emergency weather pause, auto-diverting 14 open tractor trolleys to Covered Shed B and logging ₹2.4 Lakhs in saved grain damage.
- Click **"Restore Clear Weather"** to resume normal pacing.

```

---

<a name="publicindexhtml"></a>
## 📄 File: `public\index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KISAN-Q: Smart Slot Booking for Grain Purchase (SIH26032)</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Chart.js CDN -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <!-- QRCode.js CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <!-- Custom Styles -->
  <link rel="stylesheet" href="/css/style.css">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            mandi: {
              50: '#f0fdf4',
              100: '#dcfce7',
              600: '#16a34a',
              700: '#15803d',
              800: '#166534',
              900: '#14532d',
            }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-slate-100 min-h-screen text-slate-800 flex flex-col">

  <!-- TOP HEADER & SIH BRANDING -->
  <header class="bg-emerald-800 text-white shadow-md border-b-4 border-amber-500 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
      
      <!-- Brand & Hackathon Info -->
      <div class="flex items-center space-x-3">
        <div class="bg-amber-400 text-emerald-950 font-black p-2 rounded-lg flex items-center justify-center shadow">
          <span class="text-xl leading-none">SIH</span>
        </div>
        <div>
          <div class="flex items-center space-x-2">
            <h1 class="text-lg sm:text-xl font-extrabold tracking-tight" data-i18n="appTitle">KISAN-Q: Smart Slot Booking</h1>
            <span class="bg-emerald-900 text-amber-300 text-xs px-2 py-0.5 rounded font-mono font-bold border border-amber-400/40">SIH26032</span>
          </div>
          <p class="text-xs text-emerald-200 hidden sm:block">Team ByteKnight • FoodTech & Rural Development • APMC Mandi Queue Management</p>
        </div>
      </div>

      <!-- Live Clock, Wi-Fi Badge & Language Switcher -->
      <div class="flex items-center space-x-2 sm:space-x-3 text-xs">
        <div class="bg-emerald-900/80 px-3 py-1.5 rounded-lg border border-emerald-700 flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-slate-300">Live Time:</span>
          <span id="liveClock" class="font-mono font-bold text-amber-300">--:--:--</span>
        </div>

        <!-- Wi-Fi Network Badge -->
        <div id="wifiNetworkBadge" class="bg-emerald-900/80 px-3 py-1.5 rounded-lg border border-emerald-700 flex items-center space-x-2 cursor-pointer" onclick="toggleWifiModal(true)" title="Click to view QR code for phone access">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span class="text-slate-300">Wi-Fi:</span>
          <span class="font-mono font-bold text-amber-300">Connecting...</span>
        </div>

        <!-- Language Selector -->
        <div class="flex bg-emerald-950 rounded-lg p-0.5 border border-emerald-700">
          <button onclick="setLanguage('en')" class="lang-btn px-2.5 py-1 rounded text-xs font-semibold bg-emerald-700 text-white" data-lang="en">EN</button>
          <button onclick="setLanguage('hi')" class="lang-btn px-2.5 py-1 rounded text-xs font-semibold bg-white text-emerald-900" data-lang="hi">हिन्दी</button>
          <button onclick="setLanguage('pa')" class="lang-btn px-2.5 py-1 rounded text-xs font-semibold bg-white text-emerald-900" data-lang="pa">ਪੰਜਾਬੀ</button>
        </div>
      </div>

    </div>

    <!-- MAIN TAB NAVIGATION -->
    <nav class="bg-emerald-900/90 px-4 sm:px-6 lg:px-8 border-t border-emerald-700/50">
      <div class="max-w-7xl mx-auto flex space-x-2 sm:space-x-4 overflow-x-auto text-sm font-medium py-1">
        <button id="tab-farmer" onclick="switchTab('farmer')" class="nav-tab px-4 py-2 rounded-t-lg border-b-2 border-emerald-400 text-white bg-emerald-800 font-bold flex items-center space-x-2 transition">
          <i data-lucide="tractor" class="w-4 h-4 text-amber-300"></i>
          <span data-i18n="tabFarmer">🌾 Farmer Portal</span>
        </button>
        <button id="tab-ivr" onclick="switchTab('ivr')" class="nav-tab px-4 py-2 rounded-t-lg border-b-2 border-transparent text-emerald-200 hover:text-white flex items-center space-x-2 transition">
          <i data-lucide="phone-call" class="w-4 h-4 text-emerald-300"></i>
          <span data-i18n="tabIVR">📱 Zero-Smartphone IVR</span>
        </button>
        <button id="tab-dashboard" onclick="switchTab('dashboard')" class="nav-tab px-4 py-2 rounded-t-lg border-b-2 border-transparent text-emerald-200 hover:text-white flex items-center space-x-2 transition">
          <i data-lucide="layout-dashboard" class="w-4 h-4 text-emerald-300"></i>
          <span data-i18n="tabDashboard">🏢 Mandi Officer Command</span>
        </button>
        <button id="tab-weather" onclick="switchTab('weather')" class="nav-tab px-4 py-2 rounded-t-lg border-b-2 border-transparent text-emerald-200 hover:text-white flex items-center space-x-2 transition">
          <i data-lucide="cloud-rain" class="w-4 h-4 text-emerald-300"></i>
          <span data-i18n="tabWeather">🛰️ IMD Weather Radar</span>
        </button>
        <button id="tab-impact" onclick="switchTab('impact')" class="nav-tab px-4 py-2 rounded-t-lg border-b-2 border-transparent text-emerald-200 hover:text-white flex items-center space-x-2 transition">
          <i data-lucide="trending-up" class="w-4 h-4 text-emerald-300"></i>
          <span data-i18n="tabImpact">📊 Impact & Benefits</span>
        </button>
      </div>
    </nav>
  </header>

  <!-- MAIN CONTENT CONTAINER -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">

    <!-- GLOBAL EMERGENCY RAIN ALERT BANNER -->
    <div id="radarAlertBanner" class="hidden mb-6 bg-red-600 text-white rounded-xl p-4 shadow-lg flex items-start space-x-3 animate-pulse border-2 border-red-400">
      <i data-lucide="alert-triangle" class="w-6 h-6 flex-shrink-0 mt-0.5 text-amber-300"></i>
      <div class="flex-1">
        <h3 class="font-bold text-base">⚠️ IMD DOPPLER RADAR EMERGENCY WEATHER PAUSE ACTIVATED</h3>
        <p id="radarAlertText" class="text-sm text-red-100 mt-1">High rain probability detected. Open tractor trolleys are paused to protect grain from moisture spoilage. Rerouting to covered silos in progress.</p>
      </div>
      <button onclick="triggerWeatherScenario('CLEAR_SKIES')" class="px-3 py-1 bg-white text-red-700 font-bold text-xs rounded hover:bg-red-50">Clear Rain Alert</button>
    </div>

    <!-- TAB 1: FARMER PORTAL & DIGITAL GATE PASS -->
    <section id="panel-farmer" class="tab-panel">
      <!-- Hackathon Evaluation Preset Bar -->
      <div class="bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-200 rounded-xl p-4 mb-6 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center space-x-2">
          <span class="px-2.5 py-1 bg-emerald-700 text-white text-xs font-bold rounded">Quick Demo Presets</span>
          <span class="text-xs text-slate-600">Click to instantly populate realistic farmer data:</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <button onclick="fillPreset('marginal')" class="px-3 py-1.5 bg-white border border-emerald-600 text-emerald-800 rounded-lg text-xs font-semibold hover:bg-emerald-50 shadow-sm flex items-center">
            <span class="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span> Marginal Farmer (&lt;1 ha Wheat)
          </button>
          <button onclick="fillPreset('small')" class="px-3 py-1.5 bg-white border border-emerald-600 text-emerald-800 rounded-lg text-xs font-semibold hover:bg-emerald-50 shadow-sm flex items-center">
            <span class="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span> Small Farmer (1.6 ha Mustard)
          </button>
          <button onclick="fillPreset('commercial')" class="px-3 py-1.5 bg-white border border-amber-600 text-amber-900 rounded-lg text-xs font-semibold hover:bg-amber-50 shadow-sm flex items-center">
            <span class="w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span> Commercial Trader (5.5 ha)
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Booking Form Column -->
        <div class="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div>
              <h2 class="text-xl font-extrabold text-slate-800" data-i18n="bookSlotTitle">Book Your Grain Procurement Slot</h2>
              <p class="text-xs text-slate-500 mt-0.5">Staggered 1-hour slots matched to weighbridge throughput</p>
            </div>
            <div id="quotaInfo"></div>
          </div>

          <form id="slotBookingForm" onsubmit="handleBookSlot(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1" data-i18n="farmerNameLabel">Farmer Full Name</label>
                <input type="text" id="farmerName" required placeholder="e.g. Ramesh Kumar Patel" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1" data-i18n="phoneLabel">Mobile Number</label>
                <input type="tel" id="phone" required placeholder="10-digit phone" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1" data-i18n="landSizeLabel">Landholding Size (Hectares)</label>
                <input type="number" id="landSize" step="0.1" min="0.1" required placeholder="e.g. 1.2" oninput="handleLandSizeChange(this.value)" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                <p class="text-[11px] text-slate-500 mt-1">Under 2.0 ha qualifies for reserved Fair-Share priority.</p>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1" data-i18n="cropLabel">Crop Type (MSP Guaranteed)</label>
                <select id="cropSelect" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white">
                  <option value="wheat">Wheat (गेहूं) - MSP ₹2,275/qtl</option>
                  <option value="paddy">Paddy / Rice (धान) - MSP ₹2,300/qtl</option>
                  <option value="mustard">Mustard (सरसों) - MSP ₹5,650/qtl</option>
                  <option value="chana">Chana (चना) - MSP ₹5,440/qtl</option>
                  <option value="soybean">Soybean (सोयाबीन) - MSP ₹4,892/qtl</option>
                </select>
              </div>
            </div>

            <div id="fairShareIndicator" class="hidden"></div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1" data-i18n="vehicleLabel">Vehicle Number</label>
                <input type="text" id="vehicleNo" placeholder="MP04AB1234" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none uppercase">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1" data-i18n="vehicleTypeLabel">Vehicle Type</label>
                <select id="vehicleType" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white">
                  <option value="Tractor Trolley">Tractor Trolley</option>
                  <option value="Double Trolley">Double Trolley</option>
                  <option value="Mini Truck">Mini Truck / Pick-up</option>
                  <option value="Bullock Cart">Bullock Cart (Traditional)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1" data-i18n="estWeightLabel">Estimated Load (MT)</label>
                <input type="number" id="estWeight" step="0.5" min="1" value="15.0" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase mb-1" data-i18n="preferredSlotLabel">Select 1-Hour Time Window</label>
              <select id="slotSelect" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white font-medium"></select>
              <p class="text-[11px] text-slate-500 mt-1">Slots are dynamically regulated to prevent highway tractor queues.</p>
            </div>

            <button type="submit" id="bookSubmitBtn" class="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-sm shadow-md transition flex items-center justify-center space-x-2">
              <i data-lucide="ticket" class="w-4 h-4"></i>
              <span data-i18n="bookButton">Generate Digital Token & Gate Pass</span>
            </button>
          </form>
        </div>

        <!-- Token Display & Search Column -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
            <h3 class="font-bold text-slate-800 text-sm mb-2 flex items-center">
              <i data-lucide="search" class="w-4 h-4 mr-1.5 text-emerald-600"></i> Lookup Existing Token
            </h3>
            <div class="flex gap-2">
              <input type="text" id="tokenSearchInput" placeholder="Enter Token # (e.g. 42) or Phone" class="flex-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              <button onclick="searchToken()" class="px-4 py-2 bg-emerald-700 text-white rounded-lg text-xs font-bold hover:bg-emerald-800">Search</button>
            </div>
          </div>

          <div id="gatePassContainer" class="bg-white rounded-2xl shadow-lg border-2 border-emerald-500 p-6 relative overflow-hidden">
            <div class="flex justify-between items-start border-b border-dashed border-slate-200 pb-4">
              <div>
                <span class="text-xs font-bold text-emerald-700 tracking-wider uppercase">Krishi Mandi Gate Pass</span>
                <h3 id="passTokenNo" class="text-3xl font-black text-slate-900 mt-0.5">#42</h3>
                <span id="passTokenId" class="text-xs text-slate-500 font-mono">KT-1042</span>
              </div>
              <div id="passPriorityBadge" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-sm">
                🛡️ FAIR-SHARE PRIORITY (&lt;2 ha)
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3 py-4 text-xs border-b border-dashed border-slate-200">
              <div>
                <span class="text-slate-400 uppercase font-semibold">Farmer:</span>
                <div id="passFarmerName" class="font-bold text-slate-800 text-sm">Devendra Verma</div>
              </div>
              <div>
                <span class="text-slate-400 uppercase font-semibold">Vehicle:</span>
                <div id="passVehicleNo" class="font-bold text-slate-800 text-sm">MP04TR4412</div>
              </div>
              <div>
                <span class="text-slate-400 uppercase font-semibold">Crop:</span>
                <div id="passCrop" class="font-medium text-slate-700">Wheat (गेहूं)</div>
              </div>
              <div>
                <span class="text-slate-400 uppercase font-semibold">Assigned Gate:</span>
                <div id="passGate" class="font-bold text-emerald-800 text-sm">Gate 2 (South Yard)</div>
              </div>
              <div class="col-span-2 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                <span class="text-emerald-800 font-bold block">Assigned Slot:</span>
                <span id="passSlot" class="font-mono font-bold text-emerald-950 text-base">10:00 - 11:00</span>
                <p class="text-[11px] text-emerald-700 mt-0.5">Please arrive within this 60-min window for instant direct weighment.</p>
              </div>
            </div>

            <div class="pt-4 flex items-center justify-between">
              <div id="passQRCode" class="bg-white p-2 rounded-lg border border-slate-200"></div>
              <div class="text-right space-y-1">
                <span class="text-xs text-slate-400 block font-semibold">Live Est. Turnaround:</span>
                <div id="passEta" class="text-2xl font-black text-emerald-700 font-mono">&lt;45 mins</div>
                <span class="text-[11px] text-slate-500 block">Roadside wait slashed by 96%</span>
                <button onclick="window.print()" class="mt-2 text-xs px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-semibold inline-flex items-center">
                  <i data-lucide="printer" class="w-3.5 h-3.5 mr-1"></i> Print / Save Pass
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: ZERO-SMARTPHONE ACCESS (KEYPAD IVR SIMULATOR) -->
    <section id="panel-ivr" class="tab-panel hidden">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-6 space-y-6">
          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <span class="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">Key Hackathon Innovation</span>
            <h2 class="text-2xl font-extrabold text-slate-900 mt-2">Zero-Smartphone Access (Toll-Free IVR)</h2>
            <p class="text-sm text-slate-600 mt-2 leading-relaxed">
              Over <strong>60% of marginal Indian farmers</strong> use ₹800 basic feature keypad phones and cannot use English portals or e-NAM apps. 
              With KISAN-Q, any farmer dials a <strong>toll-free missed call to 1800-547-2600</strong>, receives an instant automated callback in 
              <strong>Hindi or Punjabi</strong>, and gets their digital token sent via SMS.
            </p>

            <div class="mt-4 pt-4 border-t border-slate-100">
              <label class="block text-xs font-bold text-slate-700 uppercase mb-2">Simulate Farmer Dialect / Voice:</label>
              <div class="flex gap-2">
                <button onclick="setIVRLanguage('hi')" class="ivr-lang-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white" data-ivrlang="hi">
                  🇮🇳 Hindi (हिन्दी वॉयस)
                </button>
                <button onclick="setIVRLanguage('pa')" class="ivr-lang-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-200 text-slate-800" data-ivrlang="pa">
                  🌾 Punjabi (ਪੰਜਾਬੀ ਵੋਆਇਸ)
                </button>
                <button onclick="setIVRLanguage('en')" class="ivr-lang-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-200 text-slate-800" data-ivrlang="en">
                  🌐 English
                </button>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <button onclick="triggerMissedCallOnly()" class="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow flex items-center space-x-2">
                <i data-lucide="phone-missed" class="w-4 h-4 text-amber-300"></i>
                <span>Simulate 1-Ring Missed Call (Instant SMS Token)</span>
              </button>
              <button onclick="quickFillTollFree()" class="px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow flex items-center space-x-2">
                <i data-lucide="phone" class="w-4 h-4"></i>
                <span>Load Toll-Free 1800-547-2600</span>
              </button>
            </div>
          </div>

          <div id="phoneSmsBox" class="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 shadow-md">
            <div class="flex items-center space-x-2 text-amber-900 font-bold text-sm mb-2">
              <i data-lucide="message-square" class="w-4 h-4 text-amber-700"></i>
              <span>Incoming Government SMS Notification Received:</span>
            </div>
            <div id="phoneSmsContent" class="bg-white p-3 rounded-lg border border-amber-200 font-mono text-xs text-slate-800 shadow-inner">
              [KISAN-Q] Token #42 confirmed. Slot: 10:00-11:00 AM, Gate 2. Turnaround: &lt;45m. Fair-share priority granted. Helpline: 1800-547-2600
            </div>
            <p class="text-[11px] text-amber-700 mt-2">Farmer shows this 5-character SMS to the Gate Guard for rapid entry pass scan.</p>
          </div>
        </div>

        <div class="lg:col-span-6 flex justify-center">
          <div class="phone-case">
            <div class="phone-speaker"></div>
            <div class="phone-screen flex flex-col justify-between">
              <div class="flex justify-between text-[11px] text-emerald-950 font-bold opacity-80 border-b border-emerald-900/20 pb-1">
                <span>📶 AIRTEL-4G</span>
                <span>🔋 85%</span>
              </div>
              <div class="text-center py-2">
                <div id="phoneLcdText" class="text-lg font-bold tracking-wider uppercase text-emerald-950">KISAN-Q READY</div>
                <div id="phoneLcdSub" class="text-xs text-emerald-900 font-semibold mt-1">DIAL 1800-547-2600</div>
              </div>
              <div class="flex justify-between text-[10px] text-emerald-950 font-bold opacity-75 border-t border-emerald-900/20 pt-1">
                <span>[MENU]</span>
                <span>[CLEAR]</span>
              </div>
            </div>

            <div class="mt-5 grid grid-cols-3 gap-2 text-center">
              <button onclick="startCall()" class="keypad-btn call-btn py-2 text-xs">CALL</button>
              <button onclick="clearKey()" class="keypad-btn py-2 text-xs text-amber-400">CLR</button>
              <button onclick="hangupCall()" class="keypad-btn hangup-btn py-2 text-xs">END</button>

              <button onclick="pressKey('1')" class="keypad-btn py-2.5 text-sm">1 <span class="text-[9px] block text-slate-400">.,</span></button>
              <button onclick="pressKey('2')" class="keypad-btn py-2.5 text-sm">2 <span class="text-[9px] block text-slate-400">ABC</span></button>
              <button onclick="pressKey('3')" class="keypad-btn py-2.5 text-sm">3 <span class="text-[9px] block text-slate-400">DEF</span></button>

              <button onclick="pressKey('4')" class="keypad-btn py-2.5 text-sm">4 <span class="text-[9px] block text-slate-400">GHI</span></button>
              <button onclick="pressKey('5')" class="keypad-btn py-2.5 text-sm">5 <span class="text-[9px] block text-slate-400">JKL</span></button>
              <button onclick="pressKey('6')" class="keypad-btn py-2.5 text-sm">6 <span class="text-[9px] block text-slate-400">MNO</span></button>

              <button onclick="pressKey('7')" class="keypad-btn py-2.5 text-sm">7 <span class="text-[9px] block text-slate-400">PQRS</span></button>
              <button onclick="pressKey('8')" class="keypad-btn py-2.5 text-sm">8 <span class="text-[9px] block text-slate-400">TUV</span></button>
              <button onclick="pressKey('9')" class="keypad-btn py-2.5 text-sm">9 <span class="text-[9px] block text-slate-400">WXYZ</span></button>

              <button onclick="pressKey('*')" class="keypad-btn py-2.5 text-sm">*</button>
              <button onclick="pressKey('0')" class="keypad-btn py-2.5 text-sm">0 <span class="text-[9px] block text-slate-400">+</span></button>
              <button onclick="pressKey('#')" class="keypad-btn py-2.5 text-sm">#</button>
            </div>
            <p class="text-center text-[10px] text-slate-400 mt-4">Keypad sound & regional speech synthesis active</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: MANDI OFFICER COMMAND CENTER -->
    <section id="panel-dashboard" class="tab-panel hidden space-y-6">
      <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <h2 class="text-lg font-bold text-slate-900">APMC Krishi Upaj Mandi Bhopal - Central Yard Telemetry</h2>
          </div>
          <p class="text-xs text-slate-500 mt-0.5">District Procurement Officer: <strong class="text-slate-800">Anjali Sharma (APMC Inspector #408)</strong></p>
        </div>
        <div class="flex items-center space-x-2">
          <button onclick="loadDashboardTelemetry()" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center">
            <i data-lucide="refresh-cw" class="w-3.5 h-3.5 mr-1"></i> Refresh Telemetry
          </button>
        </div>
      </div>

      <div id="officerWeatherNotice" class="hidden p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <i data-lucide="alert-circle" class="w-5 h-5 text-amber-600"></i>
          <span id="weatherAlertReason">Weather Advisory Active: Pacing adjusted.</span>
        </div>
        <button onclick="triggerWeatherScenario('CLEAR_SKIES')" class="px-2.5 py-1 bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold rounded">Resume Normal Pacing</button>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between text-xs text-slate-500">
            <span>Today's Procurement</span>
            <span class="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">+8.2%</span>
          </div>
          <div id="statProcurement" class="text-2xl font-black text-slate-900 mt-1">1,450 MT</div>
          <p class="text-[11px] text-slate-400 mt-1">Target: 2,000 MT/day</p>
        </div>

        <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between text-xs text-slate-500">
            <span>Total Trucks Processed</span>
            <span class="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">+6.5%</span>
          </div>
          <div id="statTrucksProcessed" class="text-2xl font-black text-slate-900 mt-1">185</div>
          <p class="text-[11px] text-slate-400 mt-1">Zero highway bottleneck</p>
        </div>

        <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between text-xs text-slate-500">
            <span>Average Processing Time</span>
            <span class="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">▼ 96%</span>
          </div>
          <div id="statAvgTime" class="text-2xl font-black text-emerald-700 mt-1">58 mins</div>
          <p class="text-[11px] text-slate-400 mt-1">Slashed from 72 hours</p>
        </div>

        <div class="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between text-xs text-slate-500">
            <span>Active Farmer Queue</span>
            <span class="text-blue-600 font-bold bg-blue-50 px-1.5 py-0.5 rounded">Optimal</span>
          </div>
          <div id="statActiveQueue" class="text-2xl font-black text-slate-900 mt-1">4</div>
          <p class="text-[11px] text-slate-400 mt-1">No roadside spillover</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="lg:col-span-7 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="font-bold text-slate-800 text-sm">Hourly Queue Throughput & Fair-Share Allocation</h3>
              <p class="text-xs text-slate-500">Green: Small & marginal farmer reserved quota (&lt;2 ha)</p>
            </div>
            <span class="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">Pacing Engine</span>
          </div>
          <div class="h-64 w-full">
            <canvas id="throughputChart"></canvas>
          </div>
        </div>

        <div class="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 class="font-bold text-slate-800 text-sm flex items-center">
                <i data-lucide="droplets" class="w-4 h-4 mr-1.5 text-blue-500"></i> Moisture Testing Station
              </h3>
              <span class="text-xs font-mono text-slate-400">Sensor: NIR-801</span>
            </div>

            <div class="grid grid-cols-3 gap-2 text-center py-3">
              <div class="bg-slate-50 p-2 rounded-lg border">
                <div class="text-[11px] text-slate-500">Tested</div>
                <div class="font-bold text-slate-800 text-sm">74% <span class="text-[10px] text-slate-400">(137)</span></div>
              </div>
              <div class="bg-slate-50 p-2 rounded-lg border">
                <div class="text-[11px] text-slate-500">Pending</div>
                <div class="font-bold text-slate-800 text-sm">26% <span class="text-[10px] text-slate-400">(48)</span></div>
              </div>
              <div class="bg-slate-50 p-2 rounded-lg border">
                <div class="text-[11px] text-slate-500">Avg Moisture</div>
                <div class="font-bold text-blue-700 text-sm">12.1%</div>
              </div>
            </div>

            <div class="space-y-3 pt-2">
              <div class="flex justify-between items-center text-xs font-semibold">
                <span>Test Sample Reading:</span>
                <span id="sliderValueText" class="font-mono text-emerald-700 font-bold text-sm">11.8%</span>
              </div>
              <input type="range" id="moistureSlider" min="9" max="18" step="0.1" value="11.8" 
                oninput="document.getElementById('sliderValueText').textContent = this.value + '%'; evaluateMoisture(this.value);" 
                class="w-full accent-emerald-600">
              
              <div id="moistureResultBadge" class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 inline-block">
                ACCEPTABLE (Full MSP Rate)
              </div>
              <p id="moistureDeductionInfo" class="text-[11px] text-slate-500">0% Dock Deduction. Quality matches FAQ FCI Standards.</p>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="document.getElementById('moistureSlider').value=11.2; evaluateMoisture(11.2); document.getElementById('sliderValueText').textContent='11.2%';" class="flex-1 py-1.5 bg-emerald-50 text-emerald-800 rounded text-xs font-bold hover:bg-emerald-100">
              Good (11.2%)
            </button>
            <button onclick="document.getElementById('moistureSlider').value=13.4; evaluateMoisture(13.4); document.getElementById('sliderValueText').textContent='13.4%';" class="flex-1 py-1.5 bg-amber-50 text-amber-800 rounded text-xs font-bold hover:bg-amber-100">
              Dock (13.4%)
            </button>
            <button onclick="document.getElementById('moistureSlider').value=15.8; evaluateMoisture(15.8); document.getElementById('sliderValueText').textContent='15.8%';" class="flex-1 py-1.5 bg-red-50 text-red-800 rounded text-xs font-bold hover:bg-red-100">
              Reject (15.8%)
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-bold text-slate-800 text-sm">Live Weighbridge Sensors & Automated Scale Telemetry</h3>
          <span class="text-xs text-slate-500">Auto-synced every 5s</span>
        </div>
        <div id="weighbridgeGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"></div>
      </div>

      <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
        <h3 class="font-bold text-slate-800 text-sm mb-3">Regional Mandi Network Congestion Telemetry (Madhya Pradesh Central Zone)</h3>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
          <div class="bg-emerald-50 border border-emerald-300 rounded-xl p-3">
            <div class="font-bold text-emerald-900">Bhopal Central</div>
            <div class="text-emerald-700 font-bold mt-1 text-sm">&lt;58 mins wait</div>
            <span class="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded font-semibold mt-1 inline-block">KISAN-Q ACTIVE</span>
          </div>
          <div class="bg-amber-50 border border-amber-300 rounded-xl p-3">
            <div class="font-bold text-amber-900">Indore Mandi</div>
            <div class="text-amber-700 font-bold mt-1 text-sm">~95 mins wait</div>
            <span class="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-semibold mt-1 inline-block">Moderate Load</span>
          </div>
          <div class="bg-amber-50 border border-amber-300 rounded-xl p-3">
            <div class="font-bold text-amber-900">Vidisha Mandi</div>
            <div class="text-amber-700 font-bold mt-1 text-sm">~110 mins wait</div>
            <span class="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-semibold mt-1 inline-block">Moderate Load</span>
          </div>
          <div class="bg-emerald-50 border border-emerald-300 rounded-xl p-3">
            <div class="font-bold text-emerald-900">Ujjain Mandi</div>
            <div class="text-emerald-700 font-bold mt-1 text-sm">~68 mins wait</div>
            <span class="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded font-semibold mt-1 inline-block">Low Congestion</span>
          </div>
          <div class="bg-emerald-50 border border-emerald-300 rounded-xl p-3">
            <div class="font-bold text-emerald-900">Sehore Mandi</div>
            <div class="text-emerald-700 font-bold mt-1 text-sm">~60 mins wait</div>
            <span class="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded font-semibold mt-1 inline-block">Low Congestion</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 4: IMD WEATHER RADAR & DYNAMIC PACING HOOK -->
    <section id="panel-weather" class="tab-panel hidden space-y-6">
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span class="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">IMD Radar Integration</span>
            <h2 class="text-xl font-extrabold text-slate-900 mt-2">Weather-Aware Queue Pause & Silo Rerouting</h2>
            <p class="text-xs text-slate-500 mt-0.5">Real-time sync with India Meteorological Department (IMD) Doppler Radar nowcasting</p>
          </div>
          <div id="radarStatusBadge" class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            🟢 RADAR CLEAR: ACTIVE PACING
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 text-center">
          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span class="text-xs text-slate-500">Mandi Yard Temperature</span>
            <div id="weatherTemp" class="text-3xl font-black text-slate-800 mt-1">28°C</div>
            <span class="text-xs text-slate-400">Normal procurement condition</span>
          </div>
          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span class="text-xs text-slate-500">Precipitation Radar Probability</span>
            <div id="weatherRainProb" class="text-3xl font-black text-blue-600 mt-1">25%</div>
            <span class="text-xs text-slate-400">Threshold for pause: >70%</span>
          </div>
          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <span class="text-xs text-slate-500">Atmospheric Sky Condition</span>
            <div id="weatherCond" class="text-xl font-bold text-slate-800 mt-2">Partly Cloudy</div>
            <span class="text-xs text-slate-400">Doppler nowcast active</span>
          </div>
        </div>

        <div class="bg-slate-900 text-white rounded-xl p-5">
          <h3 class="font-bold text-sm text-amber-400 mb-2">⚡ Live Simulation Console for Hackathon Evaluation</h3>
          <p class="text-xs text-slate-300 mb-4">
            Test how KISAN-Q prevents ₹10+ Crores in annual post-harvest grain spoilage by automatically halting open dispatches before the cloudburst hits:
          </p>
          <div class="flex flex-wrap gap-3">
            <button onclick="triggerWeatherScenario('RAIN_ALERT')" class="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow flex items-center space-x-2">
              <i data-lucide="cloud-lightning" class="w-4 h-4"></i>
              <span>Simulate Severe Rain Warning (Trigger Auto-Pause & Covered Reroute)</span>
            </button>
            <button onclick="triggerWeatherScenario('CLEAR_SKIES')" class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow flex items-center space-x-2">
              <i data-lucide="sun" class="w-4 h-4"></i>
              <span>Restore Clear Weather (Resume Pacing)</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 5: IMPACT & BENEFITS -->
    <section id="panel-impact" class="tab-panel hidden space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        <div class="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-6 shadow-md">
          <div class="text-amber-300 font-extrabold text-4xl font-mono">75% - 96%</div>
          <h3 class="text-lg font-bold mt-2">Reduction in Waiting Time</h3>
          <p class="text-xs text-emerald-100 mt-2 leading-relaxed">
            Slashes highway tractor gridlocks from 48–72 hours down to under 60 minutes from gate arrival to tare weighment exit.
          </p>
        </div>

        <div class="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-6 shadow-md">
          <div class="text-white font-extrabold text-4xl font-mono">₹4,500 Saved</div>
          <h3 class="text-lg font-bold mt-2">Per Farmer Per Trip</h3>
          <p class="text-xs text-amber-100 mt-2 leading-relaxed">
            Eliminates 3 days of tractor-trolley rental penalties (₹1,500/day) and stops coercive distress sales below MSP.
          </p>
        </div>

        <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-md">
          <div class="text-white font-extrabold text-4xl font-mono">ZERO</div>
          <h3 class="text-lg font-bold mt-2">Post-Harvest Spoilage</h3>
          <p class="text-xs text-blue-100 mt-2 leading-relaxed">
            Weather-triggered IMD radar diversion shields exposed grains from unexpected downpours, protecting farmer income.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 class="text-lg font-bold text-slate-900 mb-4">Multi-Dimensional Impact Matrix</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div class="border-l-4 border-emerald-500 pl-4 space-y-2">
            <h4 class="font-bold text-emerald-800">Economic & Farmer Benefits</h4>
            <ul class="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Direct 100% MSP value preservation</li>
              <li>Saves ₹1,500/day tractor rental penalty</li>
              <li>Lowers diesel burn during idling queues</li>
              <li>Instant digital weighment receipt on phone</li>
            </ul>
          </div>

          <div class="border-l-4 border-blue-500 pl-4 space-y-2">
            <h4 class="font-bold text-blue-800">Government & FCI Benefits</h4>
            <ul class="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Real-time district telemetry across all APMCs</li>
              <li>Eliminates ghost procurement scams</li>
              <li>40% higher truck turnaround speed</li>
              <li>Direct Aadhaar DBT bank payout verification</li>
            </ul>
          </div>

          <div class="border-l-4 border-amber-500 pl-4 space-y-2">
            <h4 class="font-bold text-amber-800">Environmental & Social Benefits</h4>
            <ul class="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>80% cut in idling diesel emissions</li>
              <li>Decongests national & state highways</li>
              <li>Restores dignity to small & marginal farmers</li>
              <li>Zero night sleeping on highways in harsh weather</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- MODAL: DIGITAL MSP WEIGHMENT RECEIPT ISSUANCE -->
  <div id="receiptModal" class="hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-slate-200 space-y-4 animate-fade-in">
      <div class="flex justify-between items-center pb-3 border-b border-slate-100">
        <div>
          <span class="text-xs font-bold text-emerald-700 uppercase">Food Corporation of India / APMC</span>
          <h3 class="text-lg font-black text-slate-900">Issue Digital Weighment Slip</h3>
        </div>
        <button onclick="closeReceiptModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">&times;</button>
      </div>

      <div class="space-y-3 text-xs">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="font-bold text-slate-600">Weighbridge ID</label>
            <input type="text" id="modalWbId" readonly class="w-full mt-1 p-2 bg-slate-100 border rounded font-mono font-bold">
          </div>
          <div>
            <label class="font-bold text-slate-600">Vehicle Number</label>
            <input type="text" id="modalVehicleNo" class="w-full mt-1 p-2 border rounded font-mono font-bold uppercase">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="font-bold text-slate-600">Gross Weight (MT)</label>
            <input type="number" step="0.1" id="modalGross" oninput="calculateReceiptMath()" class="w-full mt-1 p-2 border rounded font-mono font-bold">
          </div>
          <div>
            <label class="font-bold text-slate-600">Tare Weight (MT)</label>
            <input type="number" step="0.1" id="modalTare" oninput="calculateReceiptMath()" class="w-full mt-1 p-2 border rounded font-mono font-bold">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="font-bold text-slate-600">Crop Commodity</label>
            <select id="modalCrop" onchange="calculateReceiptMath()" class="w-full mt-1 p-2 border rounded font-medium bg-white">
              <option value="wheat">Wheat (MSP ₹2,275/qtl)</option>
              <option value="paddy">Paddy (MSP ₹2,300/qtl)</option>
              <option value="mustard">Mustard (MSP ₹5,650/qtl)</option>
              <option value="chana">Chana (MSP ₹5,440/qtl)</option>
            </select>
          </div>
          <div>
            <label class="font-bold text-slate-600">Moisture Reading (%)</label>
            <input type="number" step="0.1" id="modalMoisture" value="11.6" class="w-full mt-1 p-2 border rounded font-mono font-bold">
          </div>
        </div>

        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex justify-between items-center">
          <div>
            <span class="text-emerald-800 font-bold block">Net Weight:</span>
            <span id="modalNet" class="font-mono text-emerald-950 font-black text-sm">29.70 MT (297 Qtl)</span>
          </div>
          <div class="text-right">
            <span class="text-emerald-800 font-bold block">DBT Payout Value:</span>
            <span id="modalPayout" class="font-mono text-emerald-700 font-black text-lg">₹6,75,675</span>
          </div>
        </div>
      </div>

      <div class="flex gap-2 pt-2 border-t border-slate-100">
        <button onclick="closeReceiptModal()" class="flex-1 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg text-xs">Cancel</button>
        <button onclick="finalizeReceipt()" class="flex-1 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg text-xs shadow">
          Authorize & Trigger DBT Transfer
        </button>
      </div>
    </div>
  </div>

  <!-- MODAL: WI-FI / MOBILE PHONE ACCESS -->
  <div id="wifiModal" class="hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 border border-slate-200 text-center space-y-4 animate-fade-in">
      <div class="flex justify-between items-center pb-2 border-b border-slate-100">
        <h3 class="font-bold text-slate-800 text-base flex items-center">
          <i data-lucide="wifi" class="w-5 h-5 mr-2 text-emerald-600"></i> Connect from Mobile Phone
        </h3>
        <button onclick="toggleWifiModal(false)" class="text-slate-400 hover:text-slate-600 font-bold text-lg">&times;</button>
      </div>
      <p class="text-xs text-slate-600">
        Connect your phone to the same Wi-Fi network (<strong>Owais's S25 FE</strong>) and scan this QR code or open the link below:
      </p>
      <div class="flex justify-center p-3 bg-slate-50 rounded-xl border border-slate-200">
        <div id="wifiQrCode"></div>
      </div>
      <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
        <span class="text-xs text-slate-500 block">Mobile Browser Link:</span>
        <a id="wifiModalUrl" href="#" target="_blank" class="font-mono font-bold text-emerald-800 text-sm hover:underline break-all"></a>
      </div>
      <button onclick="toggleWifiModal(false)" class="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow">
        Done
      </button>
    </div>
  </div>

  <!-- FOOTER -->

  <footer class="bg-slate-900 text-slate-400 text-xs py-4 border-t border-slate-800 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
      <div>
        <strong class="text-white">KISAN-Q (Kisan Token)</strong> • Smart India Hackathon 2026 Submission
      </div>
      <div>
        Team ByteKnight • Engineered for real-world deployment across 2,400+ APMC mandis nationwide
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="/js/i18n.js"></script>
  <script src="/js/farmer.js"></script>
  <script src="/js/ivr.js"></script>
  <script src="/js/dashboard.js"></script>
  <script src="/js/weather.js"></script>
  <script src="/js/app.js"></script>
</body>
</html>

```

---

<a name="publiccssstylecss"></a>
## 📄 File: `public\css\style.css`

```css
﻿/* Custom styles for KISAN-Q Smart Mandi System */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Share+Tech+Mono&family=Tiro+Devanagari+Hindi&display=swap');

:root {
  --primary: #15803d;
  --primary-dark: #166534;
  --secondary: #d97706;
  --accent: #0284c7;
  --bg-mandi: #f8fafc;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f1f5f9;
  color: #1e293b;
}

.font-hindi {
  font-family: 'Tiro Devanagari Hindi', 'Inter', sans-serif;
}

.font-mono-lcd {
  font-family: 'Share Tech Mono', monospace;
}

/* Feature Phone (Nokia / Bharat Phone) Simulator Styling */
.phone-case {
  width: 320px;
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border-radius: 36px;
  padding: 24px 18px 28px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1);
  border: 4px solid #334155;
  user-select: none;
}

.phone-speaker {
  width: 50px;
  height: 5px;
  background-color: #475569;
  border-radius: 9999px;
  margin: 0 auto 14px;
}

.phone-screen {
  background: #99c286;
  border-radius: 10px;
  height: 190px;
  border: 3px solid #1f2937;
  box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.4);
  padding: 10px;
  color: #132a0c;
  font-family: 'Share Tech Mono', monospace;
  position: relative;
  overflow: hidden;
}

.phone-screen::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(rgba(153, 194, 134, 0.1) 50%, rgba(0, 0, 0, 0.05) 50%);
  background-size: 100% 4px;
  pointer-events: none;
}

.keypad-btn {
  background: linear-gradient(180deg, #334155 0%, #1e293b 100%);
  border: 1px solid #475569;
  border-radius: 12px;
  color: #f8fafc;
  font-weight: 700;
  transition: all 0.1s ease;
  box-shadow: 0 3px 0 #0f172a;
}

.keypad-btn:active {
  transform: translateY(3px);
  box-shadow: 0 0 0 #0f172a;
  background: #0ea5e9;
}

.call-btn {
  background: linear-gradient(180deg, #16a34a 0%, #15803d 100%) !important;
  box-shadow: 0 3px 0 #14532d !important;
}

.hangup-btn {
  background: linear-gradient(180deg, #dc2626 0%, #b91c1c 100%) !important;
  box-shadow: 0 3px 0 #7f1d1d !important;
}

/* Weighbridge Telemetry Gauges & Cards */
.wb-active-glow {
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.35);
  border-color: #22c55e;
}

.wb-warning-glow {
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.35);
  border-color: #f59e0b;
}

/* Radar Pulse Animation */
@keyframes radar-sweep {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.radar-sweep-line {
  animation: radar-sweep 4s linear infinite;
  transform-origin: bottom right;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.animate-pulse-slow {
  animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Digital Gate Pass Styling */
.gate-pass-ticket {
  background: #ffffff;
  border-radius: 16px;
  border: 2px dashed #cbd5e1;
  position: relative;
}

.gate-pass-ticket::before,
.gate-pass-ticket::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #f1f5f9;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.gate-pass-ticket::before { left: -14px; }
.gate-pass-ticket::after { right: -14px; }

```

---

<a name="publicjsi18njs"></a>
## 📄 File: `public\js\i18n.js`

```javascript
﻿// Multilingual support for KISAN-Q
const translations = {
  en: {
    appTitle: "KISAN-Q: Smart Mandi Slot Booking",
    tagline: "Restoring Time, Money & Dignity to the Indian Farmer",
    tabFarmer: "🌾 Farmer Portal",
    tabIVR: "📱 Zero-Smartphone IVR",
    tabDashboard: "🏢 Mandi Officer Command",
    tabWeather: "🛰️ IMD Weather Radar",
    tabImpact: "📊 Impact & Benefits",
    bookSlotTitle: "Book Your Grain Procurement Slot",
    farmerNameLabel: "Farmer Full Name",
    phoneLabel: "Mobile Number",
    landSizeLabel: "Landholding Size (Hectares)",
    cropLabel: "Crop Type & MSP Rate",
    vehicleLabel: "Vehicle Number",
    vehicleTypeLabel: "Vehicle Type",
    estWeightLabel: "Estimated Load (Metric Tonnes)",
    preferredSlotLabel: "Select 1-Hour Time Window",
    bookButton: "Generate Digital Token & Gate Pass",
    marginalBadge: "Fair-Share Quota: Marginal Farmer (<2 ha) Priority Enabled",
    weatherNotice: "Weather radar active: automated rain protection enabled",
    tokenFoundTitle: "Active Token Pass",
    gateLabel: "Assigned Gate",
    turnaroundTime: "Estimated Mandi Turnaround: <60 Minutes",
    queueAhead: "Tractors Ahead",
    printPass: "Print / Save Pass"
  },
  hi: {
    appTitle: "किसान-Q: स्मार्ट मंडी स्लॉट बुकिंग",
    tagline: "भारतीय किसान के समय, धन और सम्मान की सुरक्षा",
    tabFarmer: "🌾 किसान पोर्टल",
    tabIVR: "📱 साधारण फोन (IVR)",
    tabDashboard: "🏢 मंडी अधिकारी नियंत्रण कक्ष",
    tabWeather: "🛰️ मौसम रडार",
    tabImpact: "📊 लाभ एवं बचत",
    bookSlotTitle: "अनाज तुलाई हेतु स्लॉट बुक करें",
    farmerNameLabel: "किसान का पूरा नाम",
    phoneLabel: "मोबाइल नंबर",
    landSizeLabel: "जमीन का आकार (हेक्टेयर में)",
    cropLabel: "फसल का नाम एवं एम.एस.पी. दर",
    vehicleLabel: "वाहन / ट्रैक्टर ट्रॉली नंबर",
    vehicleTypeLabel: "वाहन का प्रकार",
    estWeightLabel: "अनुमानित वजन (मीट्रिक टन)",
    preferredSlotLabel: "तुलाई का 1-घंटे का स्लॉट चुनें",
    bookButton: "डिजिटल टोकन व गेट पास जारी करें",
    marginalBadge: "फेयर-शेयर कोटा: छोटे व सीमांत किसान (<2 हेक्टेयर) प्राथमिकता लागू",
    weatherNotice: "मौसम रडार सक्रिय: बारिश से फसल सुरक्षा प्रणाली चालू",
    tokenFoundTitle: "सक्रिय टोकन पास",
    gateLabel: "आवंटित गेट",
    turnaroundTime: "मंडी में रुकने का अनुमानित समय: <60 मिनट",
    queueAhead: "कतार में आगे ट्रैक्टर",
    printPass: "गेट पास प्रिंट करें"
  },
  pa: {
    appTitle: "ਕਿਸਾਨ-Q: ਸਮਾਰਟ ਮੰਡੀ ਸਲਾਟ ਬੁਕਿੰਗ",
    tagline: "ਕਿਸਾਨ ਦੇ ਸਮੇਂ, ਪੈਸੇ ਅਤੇ ਸਨਮਾਨ ਦੀ ਰੱਖਿਆ",
    tabFarmer: "🌾 ਕਿਸਾਨ ਪੋਰਟਲ",
    tabIVR: "📱 ਸਾਧਾਰਨ ਫੋਨ (IVR)",
    tabDashboard: "🏢 ਮੰਡੀ ਅਫਸਰ ਕਮਾਂਡ",
    tabWeather: "🛰️ ਮੌਸਮ ਰਾਡਾਰ",
    tabImpact: "📊 ਲਾਭ ਤੇ ਬਚਤ",
    bookSlotTitle: "ਅਨਾਜ ਵੇਚਣ ਲਈ ਸਮਾਂ (ਸਲਾਟ) ਬੁੱਕ ਕਰੋ",
    farmerNameLabel: "ਕਿਸਾਨ ਦਾ ਪੂਰਾ ਨਾਂ",
    phoneLabel: "ਮੋਬਾਈਲ ਨੰਬਰ",
    landSizeLabel: "ਜ਼ਮੀਨ (ਹੈਕਟੇਅਰ)",
    cropLabel: "ਫਸਲ ਤੇ ਐਮ.ਐਸ.ਪੀ. ਰੇਟ",
    vehicleLabel: "ਟਰੈਕਟਰ / ਗੱਡੀ ਨੰਬਰ",
    vehicleTypeLabel: "ਵਾਹਨ ਦੀ ਕਿਸਮ",
    estWeightLabel: "ਅੰਦਾਜ਼ਨ ਵਜ਼ਨ (ਮੀਟ੍ਰਿਕ ਟਨ)",
    preferredSlotLabel: "1 ਘੰਟੇ ਦਾ ਸਲਾਟ ਚੁਣੋ",
    bookButton: "ਡਿਜੀਟਲ ਟੋਕਨ ਪ੍ਰਾਪਤ ਕਰੋ",
    marginalBadge: "ਛੋਟੇ ਕਿਸਾਨਾਂ (<2 ਹੈਕਟੇਅਰ) ਲਈ ਰਾਖਵਾਂ ਕੋਟਾ ਲਾਗੂ",
    weatherNotice: "ਮੌਸਮ ਰਾਡਾਰ ਚਾਲੂ: ਮੀਂਹ ਤੋਂ ਬਚਾਅ ਸਰਗਰਮ",
    tokenFoundTitle: "ਸਰਗਰਮ ਟੋਕਨ ਪਾਸ",
    gateLabel: "ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਗੇਟ",
    turnaroundTime: "ਮੰਡੀ ਅੰਦਰ ਅੰਦਾਜ਼ਨ ਸਮਾਂ: <60 ਮਿੰਟ",
    queueAhead: "ਅੱਗੇ ਖੜ੍ਹੇ ਟਰੈਕਟਰ",
    printPass: "ਪਾਸ ਪ੍ਰਿੰਟ ਕਰੋ"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update active lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('bg-emerald-700', 'text-white');
      btn.classList.remove('bg-white', 'text-emerald-900');
    } else {
      btn.classList.remove('bg-emerald-700', 'text-white');
      btn.classList.add('bg-white', 'text-emerald-900');
    }
  });
}

```

---

<a name="publicjsfarmerjs"></a>
## 📄 File: `public\js\farmer.js`

```javascript
﻿// Farmer Portal Logic
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
      quotaInfo.innerHTML = `
        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
          <i data-lucide="shield-check" class="w-3.5 h-3.5 mr-1"></i> 60% Fair-Share Quota Legally Protected for Small Farmers (<2 ha)
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

  if (size <= 0) {
    badge.classList.add("hidden");
  } else if (size <= 2.0) {
    badge.className = "p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-start space-x-2";
    badge.innerHTML = `
      <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5"></i>
      <div>
        <strong>✅ Eligible for Fair-Share Priority Quota!</strong><br>
        As a small/marginal farmer (<2 ha), you are guaranteed direct daytime weighment slots to prevent roadside queuing and trader slot-hoarding.
      </div>
    `;
  } else {
    badge.className = "p-3 rounded-lg bg-amber-50 border border-amber-300 text-amber-800 text-sm flex items-start space-x-2";
    badge.innerHTML = `
      <i data-lucide="info" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"></i>
      <div>
        <strong>ℹ️ General Quota Applied:</strong><br>
        Holdings > 2.0 ha are booked under general commercial lots to ensure equal access for marginal producers.
      </div>
    `;
  }
  if (window.lucide) window.lucide.createIcons();
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
  document.getElementById("passEta").textContent = `${waitMins} Minutes`;

  const priorityTag = document.getElementById("passPriorityBadge");
  if (token.priority === "HIGH_FAIRSHARE") {
    priorityTag.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-sm";
    priorityTag.innerHTML = `🛡️ FAIR-SHARE PRIORITY (<2 ha)`;
  } else {
    priorityTag.className = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-600 text-white shadow-sm";
    priorityTag.innerHTML = `GENERAL QUOTA`;
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

// Quick Autofill Presets for Hackathon Judges
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

```

---

<a name="publicjsivrjs"></a>
## 📄 File: `public\js\ivr.js`

```javascript
﻿// Zero-Smartphone Access (Keypad IVR Simulator)
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

function speakVoice(text, lang = "hi-IN") {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.95;
  utter.pitch = 1.0;

  // Try to find regional voice
  const voices = window.speechSynthesis.getVoices();
  const matched = voices.find(v => v.lang.startsWith(lang.slice(0, 2)));
  if (matched) utter.voice = matched;

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
        speakVoice(data.voiceScript, ivrLang === "hi" ? "hi-IN" : "en-IN");
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

  const prompt = ivrLang === "hi"
    ? "Namaskar Kisan Bhai. Mandi Slot Booking Seva me swagat hai. Naya token lene ke liye 1 dabayein. Maujuda token ki sthiti janne ke liye 2 dabayein."
    : ivrLang === "pa"
    ? "Sat Sri Akal ji. Mandi Slot Booking Seva vich swagat hai. Nawa token lain layi 1 dabao. Token pata karan layi 2 dabao."
    : "Welcome to Kisan-Q automated toll-free mandi system. Press 1 for new slot booking. Press 2 for token status.";

  speakVoice(prompt, ivrLang === "hi" ? "hi-IN" : "en-IN");
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
      speakVoice(data.voiceScript, ivrLang === "hi" ? "hi-IN" : "en-IN");
      displaySMSReceived(data.smsMessage);
      ivrStep = 2;
      loadSlots();
      loadDashboardTelemetry();
    } else if (digit === "2") {
      // Check status
      updatePhoneDisplay("FETCHING...", "ACTIVE TOKENS");
      const res = await fetch("/api/token/42");
      const data = await res.json();
      const speech = `Aapka token number 42 hai. Gate 2 par samay 10 baje pahuchein. Aapse aage 1 tractor hai.`;
      speakVoice(speech, "hi-IN");
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

```

---

<a name="publicjsdashboardjs"></a>
## 📄 File: `public\js\dashboard.js`

```javascript
﻿// Mandi Officer Dashboard Telemetry & Controls
let throughputChart = null;

async function loadDashboardTelemetry() {
  try {
    const res = await fetch("/api/stats");
    const data = await res.json();

    // Top Metric Cards (Matches Slide 4)
    document.getElementById("statProcurement").textContent = `${data.todayProcurementMT} MT`;
    document.getElementById("statTrucksProcessed").textContent = data.totalTrucksProcessed;
    document.getElementById("statAvgTime").textContent = `${data.avgProcessingMinutes} mins`;
    document.getElementById("statActiveQueue").textContent = data.activeFarmerQueueCount;

    // Render Throughput Chart
    renderThroughputChart(data.slotDistribution);

    // Render Weighbridges
    loadWeighbridgeTelemetry();

    // Weather Warning Ribbon in Dashboard
    const weatherNotice = document.getElementById("officerWeatherNotice");
    if (weatherNotice) {
      if (data.weather.dispatchPaused) {
        weatherNotice.classList.remove("hidden");
        document.getElementById("weatherAlertReason").textContent = data.weather.pauseReason;
      } else {
        weatherNotice.classList.add("hidden");
      }
    }
  } catch (err) {
    console.error("Dashboard telemetry error:", err);
  }
}

function renderThroughputChart(slotDist) {
  const ctx = document.getElementById("throughputChart");
  if (!ctx) return;

  const labels = Object.keys(slotDist).map(s => s.split(" - ")[0]);
  const bookedData = Object.values(slotDist).map(s => s.totalBooked);
  const fairShareData = Object.values(slotDist).map(s => s.fairShareCount);

  if (throughputChart) {
    throughputChart.data.labels = labels;
    throughputChart.data.datasets[0].data = fairShareData;
    throughputChart.data.datasets[1].data = bookedData;
    throughputChart.update();
    return;
  }

  throughputChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "🛡️ Fair-Share Priority (<2 ha)",
          data: fairShareData,
          backgroundColor: "#16a34a",
          borderRadius: 4
        },
        {
          label: "🚛 Total Booked Slots",
          data: bookedData,
          backgroundColor: "#cbd5e1",
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 50,
          title: { display: true, text: "Tractors / Hour (Max Cap 50)" }
        }
      },
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            footer: (items) => {
              return "Cap: 50/hr | Pacing: Active";
            }
          }
        }
      }
    }
  });
}

async function loadWeighbridgeTelemetry() {
  try {
    const res = await fetch("/api/weighbridges");
    const data = await res.json();
    const container = document.getElementById("weighbridgeGrid");
    if (!container) return;

    container.innerHTML = "";
    data.weighbridges.forEach(wb => {
      const card = document.createElement("div");
      let statusColor = "bg-emerald-100 text-emerald-800 border-emerald-300";
      let glowClass = "wb-active-glow";

      if (wb.status === "IDLE") {
        statusColor = "bg-slate-100 text-slate-700 border-slate-300";
        glowClass = "";
      } else if (wb.status === "MAINTENANCE") {
        statusColor = "bg-amber-100 text-amber-800 border-amber-300";
        glowClass = "wb-warning-glow";
      }

      card.className = `bg-white rounded-xl border p-4 shadow-sm transition-all ${glowClass}`;
      card.innerHTML = `
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <div class="font-bold text-slate-800 text-sm flex items-center">
              <i data-lucide="scale" class="w-4 h-4 mr-1.5 text-emerald-600"></i> ${wb.id}
            </div>
            <div class="text-xs text-slate-500">${wb.name}</div>
          </div>
          <span class="px-2 py-0.5 rounded text-xs font-bold border ${statusColor}">
            ${wb.status}
          </span>
        </div>

        <div class="py-3">
          ${wb.currentVehicle ? `
            <div class="flex justify-between items-center text-sm">
              <span class="text-slate-500">Vehicle:</span>
              <span class="font-bold text-slate-800">${wb.currentVehicle}</span>
            </div>
            <div class="flex justify-between items-center text-sm mt-1">
              <span class="text-slate-500">Farmer & Crop:</span>
              <span class="font-medium text-slate-700">${wb.farmerName || "Farmer"} (${wb.crop || "Grain"})</span>
            </div>
            <div class="flex justify-between items-center text-sm mt-1">
              <span class="text-slate-500">Live Reading:</span>
              <span class="font-mono-lcd font-bold text-base text-emerald-700">${wb.grossWeightMT} MT</span>
            </div>
            <div class="mt-2 text-xs text-slate-500 flex items-center">
              <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5"></span>
              Stage: ${wb.stage}
            </div>
          ` : `
            <div class="py-3 text-center text-slate-400 text-xs italic">
              ${wb.status === "IDLE" ? "Weighbridge clear. Ready to weigh incoming tractor." : "Sensors offline for regular 24-hr calibration."}
            </div>
          `}
        </div>

        <div class="pt-2 border-t border-slate-100 flex gap-2">
          ${wb.status === "ACTIVE" ? `
            <button onclick="quickOpenReceiptModal('${wb.id}', '${wb.currentVehicle}', 42.1, 12.4)" class="w-full py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold flex items-center justify-center">
              <i data-lucide="receipt" class="w-3.5 h-3.5 mr-1"></i> Issue MSP Slip
            </button>
          ` : `
            <button onclick="simulateWeighIncoming('${wb.id}')" class="w-full py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold">
              Simulate Inward Tractor
            </button>
          `}
        </div>
      `;
      container.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  } catch (err) {
    console.error("Weighbridge load error:", err);
  }
}

// Moisture test evaluation
function evaluateMoisture(val) {
  const percent = parseFloat(val) || 0;
  const badge = document.getElementById("moistureResultBadge");
  const deductionInfo = document.getElementById("moistureDeductionInfo");
  if (!badge) return;

  if (percent <= 12.0) {
    badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300";
    badge.textContent = "ACCEPTABLE (Full MSP Rate)";
    deductionInfo.textContent = "0% Dock Deduction. Quality matches FAQ (Fair Average Quality) FCI Standards.";
  } else if (percent <= 14.0) {
    badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300";
    badge.textContent = "MARGINAL ACCEPTANCE (Moisture Dock)";
    deductionInfo.textContent = `Quality dock deduction: ${(percent - 12.0).toFixed(1)}% rate deduction applies.`;
  } else {
    badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-300";
    badge.textContent = "REJECTED (High Moisture >14%)";
    deductionInfo.textContent = "Exceeds permissible Mandi procurement limit. Sent to Mandi Hot-Air Drying Shed.";
  }
}

function quickOpenReceiptModal(wbId, vehicleNo, gross = 38.5, tare = 12.0) {
  document.getElementById("receiptModal").classList.remove("hidden");
  document.getElementById("modalWbId").value = wbId;
  document.getElementById("modalVehicleNo").value = vehicleNo || "MP04AB1234";
  document.getElementById("modalGross").value = gross;
  document.getElementById("modalTare").value = tare;
  calculateReceiptMath();
}

function calculateReceiptMath() {
  const gross = parseFloat(document.getElementById("modalGross").value) || 0;
  const tare = parseFloat(document.getElementById("modalTare").value) || 0;
  const net = Math.max(0, gross - tare);
  const quintals = net * 10;
  const crop = document.getElementById("modalCrop").value;
  const ratePerQtl = crop === "wheat" ? 2275 : crop === "paddy" ? 2300 : crop === "mustard" ? 5650 : 5440;

  document.getElementById("modalNet").textContent = `${net.toFixed(2)} MT (${quintals.toFixed(1)} Qtl)`;
  const total = quintals * ratePerQtl;
  document.getElementById("modalPayout").textContent = `₹${total.toLocaleString("en-IN")}`;
}

async function finalizeReceipt() {
  const payload = {
    weighbridgeId: document.getElementById("modalWbId").value,
    tokenId: "KT-1042", // linking to active token
    grossWeightMT: document.getElementById("modalGross").value,
    tareWeightMT: document.getElementById("modalTare").value,
    moisturePercent: document.getElementById("modalMoisture").value,
    officerName: "Anjali Sharma (APMC Inspector)"
  };

  try {
    const res = await fetch("/api/weighment/process", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (res.ok) {
      alert(`✅ Digital Weighment Slip Issued! Receipt #${data.receipt.receiptNo} created. DBT Payout of ₹${data.receipt.totalPayoutINR.toLocaleString("en-IN")} transferred.`);
      closeReceiptModal();
      loadDashboardTelemetry();
    }
  } catch (err) {
    alert("Receipt error: " + err.message);
  }
}

function closeReceiptModal() {
  document.getElementById("receiptModal").classList.add("hidden");
}

async function simulateWeighIncoming(wbId) {
  alert(`Tractor dispatched to ${wbId}. Sensors engaged for automatic tare calibration.`);
  loadWeighbridgeTelemetry();
}

```

---

<a name="publicjsweatherjs"></a>
## 📄 File: `public\js\weather.js`

```javascript
﻿// IMD Weather Radar Hook & Automated Queue Pacing
async function loadWeatherState() {
  try {
    const res = await fetch("/api/weather");
    const data = await res.json();
    updateWeatherUI(data);
  } catch (err) {
    console.error("Weather load error:", err);
  }
}

function updateWeatherUI(w) {
  const radarStatusBadge = document.getElementById("radarStatusBadge");
  const radarAlertBanner = document.getElementById("radarAlertBanner");
  const weatherTemp = document.getElementById("weatherTemp");
  const weatherCond = document.getElementById("weatherCond");
  const weatherRainProb = document.getElementById("weatherRainProb");
  const radarSweepIndicator = document.getElementById("radarSweepIndicator");

  if (weatherTemp) weatherTemp.textContent = `${w.tempC}°C`;
  if (weatherCond) weatherCond.textContent = w.condition;
  if (weatherRainProb) weatherRainProb.textContent = `${w.rainProbability}%`;

  if (w.dispatchPaused) {
    if (radarStatusBadge) {
      radarStatusBadge.className = "px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white animate-pulse";
      radarStatusBadge.textContent = "🚨 SEVERE RAIN RADAR ALERT: DISPATCH PAUSED";
    }
    if (radarAlertBanner) {
      radarAlertBanner.classList.remove("hidden");
      document.getElementById("radarAlertText").textContent = w.pauseReason;
    }
    if (radarSweepIndicator) {
      radarSweepIndicator.className = "w-4 h-4 rounded-full bg-red-500 animate-ping mr-2";
    }
  } else {
    if (radarStatusBadge) {
      radarStatusBadge.className = "px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300";
      radarStatusBadge.textContent = "🟢 RADAR CLEAR: ACTIVE PACING";
    }
    if (radarAlertBanner) {
      radarAlertBanner.classList.add("hidden");
    }
    if (radarSweepIndicator) {
      radarSweepIndicator.className = "w-4 h-4 rounded-full bg-emerald-500 mr-2";
    }
  }
}

async function triggerWeatherScenario(scenario) {
  try {
    const res = await fetch("/api/weather/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scenario })
    });
    const data = await res.json();
    updateWeatherUI(data.weather);
    loadDashboardTelemetry();

    if (scenario === "RAIN_ALERT") {
      alert("🚨 IMD DOPPLER RADAR ALERT DETECTED!\n\nHeavy rain incoming in 20 minutes. Open tractor trolley dispatches are immediately paused. 14 tractors en route diverted to Covered Shed B. Grain spoilage prevented: ₹2,40,000 saved!");
    } else {
      alert("☀️ Weather Radar Normal: Dispatches resumed at full capacity (50 tractors/hr).");
    }
  } catch (err) {
    alert("Weather simulation error: " + err.message);
  }
}

```

---

<a name="publicjsappjs"></a>
## 📄 File: `public\js\app.js`

```javascript
// Main Application Controller
function switchTab(tabId) {
  // Hide all tab panels
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.add("hidden");
  });

  // Remove active styling from all nav tabs
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.classList.remove("border-emerald-600", "text-emerald-700", "bg-emerald-50");
    tab.classList.add("border-transparent", "text-slate-600");
  });

  // Show selected panel
  const activePanel = document.getElementById(`panel-${tabId}`);
  if (activePanel) {
    activePanel.classList.remove("hidden");
  }

  // Highlight active nav tab
  const activeNav = document.getElementById(`tab-${tabId}`);
  if (activeNav) {
    activeNav.classList.add("border-emerald-600", "text-emerald-700", "bg-emerald-50");
    activeNav.classList.remove("border-transparent", "text-slate-600");
  }

  // Trigger refresh if needed
  if (tabId === "dashboard") {
    loadDashboardTelemetry();
  } else if (tabId === "farmer") {
    loadSlots();
  } else if (tabId === "weather") {
    loadWeatherState();
  }
}

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
  loadSlots();
  loadDashboardTelemetry();
  loadWeatherState();
  loadNetworkInfo();

  // Periodic telemetry refresh
  setInterval(() => {
    loadDashboardTelemetry();
  }, 10000);
});

async function loadNetworkInfo() {
  try {
    const res = await fetch("/api/network");
    const data = await res.json();
    const wifiEl = document.getElementById("wifiNetworkBadge");
    if (wifiEl) {
      wifiEl.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span class="text-slate-300">Wi-Fi IP:</span>
        <button onclick="toggleWifiModal(true)" class="font-mono font-bold text-amber-300 hover:underline flex items-center gap-1">
          ${data.wifiIp}:${data.port}
          <i data-lucide="qr-code" class="w-3.5 h-3.5 ml-1 text-emerald-300"></i>
        </button>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
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


```
