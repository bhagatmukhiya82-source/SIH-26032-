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
