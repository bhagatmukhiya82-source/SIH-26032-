// KISAN-Q Historical Price Timeline, Hikes & Lows Intelligence Engine
// Featuring Dropdown Sort & Granularity (Year, 6-Month, Month Patterns)

const TIMELINE_YEARS = ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25', '2025-26'];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const CROP_TIMELINE_DATA = {
  wheat: {
    name: 'Wheat (गेहूं)',
    msp: [1975, 1975, 2015, 2125, 2275, 2275],
    mandiPeak: [2150, 2180, 2260, 2390, 2420, 2460],
    mandiLow: [1840, 1850, 1920, 2010, 2150, 2180],
    currentMsp: '₹2,275',
    yoyHike: '▲ +₹100 (+4.6%) YoY',
    fiveYearHike: '+₹300',
    growthPct: '+15.2% 5-Yr Growth',
    peakPrice: '₹2,420',
    lowPrice: '₹1,840',
    bestWindow: 'Mar – Apr',
    signal: 'SELL NOW',
    signalNote: 'Optimal Peak Margin Window',
    signalType: 'sell',
    reason: 'Current market price is trading at ₹2,275–₹2,340/Qtl, which is at or above the official MSP baseline. Government APMC procurement mandis are fully operational during March and April. Selling now guarantees zero moisture-discount penalties (if moisture <= 12%) and direct DBT disbursement within 24 hours. Holding past May incurs weather degradation risk and private mill price dips.',
    seasonalPct: [105, 104, 108, 107, 100, 98, 96, 97, 98, 100, 102, 104],
    seasonalTypes: [2, 2, 4, 4, 3, 1, 1, 1, 1, 2, 3, 3]
  },
  paddy: {
    name: 'Paddy Common (धान)',
    msp: [1868, 1888, 1940, 2183, 2300, 2300],
    mandiPeak: [2050, 2100, 2220, 2380, 2480, 2510],
    mandiLow: [1750, 1780, 1850, 2050, 2180, 2200],
    currentMsp: '₹2,300',
    yoyHike: '▲ +₹117 (+5.4%) YoY',
    fiveYearHike: '+₹432',
    growthPct: '+23.1% 5-Yr Growth',
    peakPrice: '₹2,480',
    lowPrice: '₹1,750',
    bestWindow: 'Nov – Dec',
    signal: 'SELL NOW',
    signalNote: 'Kharif Procurement Peak',
    signalType: 'sell',
    reason: 'Kharif paddy procurement operates at full capacity in November and December. Mandi purchasing centers are mandated to clear verified lots at ₹2,300/Qtl MSP with zero delay. Storage of harvested paddy without aeration introduces moisture spoilage. Selling during November–December procurement protects total bag weight.',
    seasonalPct: [96, 96, 97, 98, 98, 98, 100, 103, 107, 108, 106, 100],
    seasonalTypes: [1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 3]
  },
  mustard: {
    name: 'Mustard (सरसों)',
    msp: [4425, 4650, 5050, 5450, 5650, 5650],
    mandiPeak: [5850, 6300, 6750, 7100, 6450, 6580],
    mandiLow: [4200, 4400, 4850, 5200, 5400, 5480],
    currentMsp: '₹5,650',
    yoyHike: '▲ +₹200 (+3.7%) YoY',
    fiveYearHike: '+₹1,225',
    growthPct: '+27.7% 5-Yr Growth',
    peakPrice: '₹7,100',
    lowPrice: '₹4,200',
    bestWindow: 'Mar – May',
    signal: 'SELL NOW',
    signalNote: 'Multi-Year Oilseed High',
    signalType: 'sell',
    reason: 'Mustard MSP is near its historical peak at ₹5,650/Qtl, up ₹1,225 over 5 years. NAFED and state cooperative procurement centers offer guaranteed clearance without private broker commissions. Post-June palm oil import dynamics often depress domestic spot prices, making March–May the ideal liquidation window.',
    seasonalPct: [97, 99, 108, 106, 103, 99, 96, 96, 97, 97, 99, 100],
    seasonalTypes: [1, 2, 4, 4, 3, 2, 1, 1, 1, 1, 2, 2]
  },
  maize: {
    name: 'Maize (मक्का)',
    msp: [1700, 1850, 1962, 2090, 2090, 2090],
    mandiPeak: [1950, 2100, 2280, 2450, 2400, 2420],
    mandiLow: [1600, 1720, 1840, 1950, 1980, 2010],
    currentMsp: '₹2,090',
    yoyHike: '▲ +₹135 (+6.9%) YoY',
    fiveYearHike: '+₹390',
    growthPct: '+22.9% 5-Yr Growth',
    peakPrice: '₹2,450',
    lowPrice: '₹1,600',
    bestWindow: 'Oct – Nov',
    signal: 'HOLD - WAIT',
    signalNote: 'Wait for Ethanol/Feed Demand',
    signalType: 'hold',
    reason: 'During off-season summer months, maize prices often trade below the MSP mark due to rabi surplus. However, rising industrial starch and poultry feed procurement surges between October and November. Farmers with moisture-controlled silos should hold until post-monsoon procurement opens.',
    seasonalPct: [100, 99, 98, 97, 96, 96, 97, 99, 101, 106, 107, 103],
    seasonalTypes: [2, 2, 1, 1, 1, 1, 1, 2, 3, 4, 4, 3]
  },
  cotton: {
    name: 'Cotton Medium (कपास)',
    msp: [5515, 5726, 6080, 6620, 7121, 7121],
    mandiPeak: [6800, 7400, 8900, 9600, 8200, 8400],
    mandiLow: [5200, 5450, 5800, 6300, 6900, 7000],
    currentMsp: '₹7,121',
    yoyHike: '▲ +₹501 (+7.6%) YoY',
    fiveYearHike: '+₹1,606',
    growthPct: '+29.1% 5-Yr Growth',
    peakPrice: '₹9,600',
    lowPrice: '₹5,200',
    bestWindow: 'Jan – Feb',
    signal: 'SELL NOW',
    signalNote: 'Textile Mill Intake Peak',
    signalType: 'sell',
    reason: 'Cotton Corporation of India (CCI) procurement centers are active, offering the record ₹7,121 MSP. January and February offer highest spinning mill demand before new arrivals from southern states create local supply gluts. Ensure staple moisture is within 8-12% for top grading.',
    seasonalPct: [106, 107, 103, 99, 96, 95, 95, 97, 100, 102, 104, 107],
    seasonalTypes: [4, 4, 3, 2, 1, 1, 1, 1, 2, 3, 3, 4]
  },
  chana: {
    name: 'Gram / Chana (चना)',
    msp: [5100, 5100, 5230, 5440, 5650, 5650],
    mandiPeak: [5600, 5850, 6100, 6400, 6750, 6900],
    mandiLow: [4800, 4850, 5000, 5200, 5350, 5400],
    currentMsp: '₹5,650',
    yoyHike: '▲ +₹210 (+3.9%) YoY',
    fiveYearHike: '+₹550',
    growthPct: '+10.8% 5-Yr Growth',
    peakPrice: '₹6,750',
    lowPrice: '₹4,800',
    bestWindow: 'Apr – Jun',
    signal: 'HOLD - WAIT',
    signalNote: 'Government Buffer Buys Ahead',
    signalType: 'hold',
    reason: 'Chana prices experience a brief dip in early April harvest weeks. NAFED buffer stocking commences in late April through June. Holding for 3-4 weeks allows pulse mill tenders to bid up prices past the ₹5,650 MSP baseline.',
    seasonalPct: [96, 97, 99, 104, 106, 103, 99, 97, 96, 96, 97, 99],
    seasonalTypes: [1, 1, 2, 4, 4, 3, 2, 1, 1, 1, 2, 2]
  },
  soybean: {
    name: 'Soybean (सोयाबीन)',
    msp: [3880, 3950, 4300, 4600, 4892, 4892],
    mandiPeak: [5200, 6800, 7500, 5900, 5400, 5600],
    mandiLow: [3600, 3750, 4100, 4350, 4600, 4700],
    currentMsp: '₹4,892',
    yoyHike: '▲ +₹292 (+6.3%) YoY',
    fiveYearHike: '+₹1,012',
    growthPct: '+26.1% 5-Yr Growth',
    peakPrice: '₹7,500',
    lowPrice: '₹3,600',
    bestWindow: 'Oct – Dec',
    signal: 'SELL NOW',
    signalNote: 'Crushing Plant Active Window',
    signalType: 'sell',
    reason: 'Current MSP of ₹4,892 represents solid 26% growth over 5 years. Solvent extraction plants operate at maximum capacity in October through December. Prompt sale eliminates oil-content degradation that occurs during damp winter storage.',
    seasonalPct: [97, 98, 99, 99, 98, 97, 96, 97, 102, 108, 106, 101],
    seasonalTypes: [1, 1, 2, 2, 1, 1, 1, 1, 3, 4, 4, 3]
  }
};

let portalTimelineChartInst = null;
let portalSeasonalChartInst = null;
let currentTimelineCrop = 'wheat';
let currentTimelinePattern = 'year'; // 'year' | 'sixmonth' | 'month'
let currentTimelineSort = 'asc';     // 'asc' | 'desc' | 'price_desc' | 'price_asc'

// Function to generate data points based on pattern and sort
function getTimelinePoints(cropKey, pattern, sortOrder) {
  const crop = CROP_TIMELINE_DATA[cropKey];
  let items = [];

  if (pattern === 'year') {
    // 6 Annual Data Points (2020-21 to 2025-26)
    for (let i = 0; i < TIMELINE_YEARS.length; i++) {
      items.push({
        label: TIMELINE_YEARS[i],
        msp: crop.msp[i],
        peak: crop.mandiPeak[i],
        low: crop.mandiLow[i],
        order: i
      });
    }
  } else if (pattern === 'sixmonth') {
    // 12 Bi-Annual / 6-Month Blocks (Kharif H1 vs Rabi H2)
    const baseYears = ['2020', '2021', '2022', '2023', '2024', '2025'];
    for (let i = 0; i < baseYears.length; i++) {
      const yr = baseYears[i];
      const mspVal = crop.msp[i];
      const peakVal = crop.mandiPeak[i];
      const lowVal = crop.mandiLow[i];

      // H1 (Kharif: Jun - Nov)
      items.push({
        label: yr + ' H1 (Kharif)',
        msp: mspVal,
        peak: Math.round(peakVal * 0.95),
        low: Math.round(lowVal * 0.98),
        order: i * 2
      });

      // H2 (Rabi: Dec - May)
      items.push({
        label: yr + ' H2 (Rabi)',
        msp: mspVal,
        peak: peakVal,
        low: Math.round(lowVal * 1.04),
        order: i * 2 + 1
      });
    }
  } else if (pattern === 'month') {
    // 12 Monthly Points across the season
    const curMspNum = crop.msp[crop.msp.length - 1];
    const peakNum = crop.mandiPeak[crop.mandiPeak.length - 1];
    const lowNum = crop.mandiLow[crop.mandiLow.length - 1];

    for (let m = 0; m < 12; m++) {
      const factor = crop.seasonalPct[m] / 100;
      items.push({
        label: MONTHS_SHORT[m],
        msp: curMspNum,
        peak: Math.round(peakNum * factor),
        low: Math.round(lowNum * factor),
        order: m
      });
    }
  }

  // Sorting
  if (sortOrder === 'asc') {
    items.sort(function(a, b) { return a.order - b.order; });
  } else if (sortOrder === 'desc') {
    items.sort(function(a, b) { return b.order - a.order; });
  } else if (sortOrder === 'price_desc') {
    items.sort(function(a, b) { return b.peak - a.peak; });
  } else if (sortOrder === 'price_asc') {
    items.sort(function(a, b) { return a.low - b.low; });
  }

  return {
    labels: items.map(function(x){ return x.label; }),
    msp: items.map(function(x){ return x.msp; }),
    peak: items.map(function(x){ return x.peak; }),
    low: items.map(function(x){ return x.low; })
  };
}

function initTimelineCharts() {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not loaded yet');
    return;
  }
  
  const tlCanvas = document.getElementById('portalTimelineChart') || document.getElementById('chartTimeline');
  const seCanvas = document.getElementById('portalSeasonalChart') || document.getElementById('chartSeasonal');
  if (!tlCanvas || !seCanvas) return;

  const data = CROP_TIMELINE_DATA[currentTimelineCrop];
  const points = getTimelinePoints(currentTimelineCrop, currentTimelinePattern, currentTimelineSort);

  // Destroy previous instances if exist
  if (portalTimelineChartInst) {
    try { portalTimelineChartInst.destroy(); } catch(e){}
  }
  if (portalSeasonalChartInst) {
    try { portalSeasonalChartInst.destroy(); } catch(e){}
  }

  // Timeline Line Chart
  const tlCtx = tlCanvas.getContext('2d');
  portalTimelineChartInst = new Chart(tlCtx, {
    type: 'line',
    data: {
      labels: points.labels,
      datasets: [
        {
          label: 'Official MSP Baseline (₹/Qtl)',
          data: points.msp,
          borderColor: '#16a34a',
          backgroundColor: 'rgba(22, 163, 74, 0.12)',
          borderWidth: 3,
          pointBackgroundColor: '#16a34a',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: points.labels.length > 8 ? 4 : 6,
          pointHoverRadius: 8,
          fill: true,
          tension: 0.35
        },
        {
          label: 'Mandi Peak Clearance (₹/Qtl)',
          data: points.peak,
          borderColor: '#f59e0b',
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [5, 5],
          pointBackgroundColor: '#f59e0b',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: points.labels.length > 8 ? 3.5 : 5,
          tension: 0.3
        },
        {
          label: 'Historical Low (Trough)',
          data: points.low,
          borderColor: '#e11d48',
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [3, 3],
          pointBackgroundColor: '#e11d48',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: points.labels.length > 8 ? 3 : 4,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: { boxWidth: 12, font: { weight: 'bold', size: 11 } }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ₹' + Number(context.raw).toLocaleString('en-IN') + '/qtl';
            }
          }
        }
      },
      scales: {
        y: {
          ticks: {
            callback: function(val) { return '₹' + Number(val).toLocaleString('en-IN'); }
          },
          grid: { color: 'rgba(0, 0, 0, 0.05)' }
        },
        x: {
          grid: { display: false },
          ticks: { maxRotation: 45, minRotation: 0, font: { size: 10 } }
        }
      }
    }
  });

  // Seasonal Volatility Bar Chart
  const seCtx = seCanvas.getContext('2d');
  portalSeasonalChartInst = new Chart(seCtx, {
    type: 'bar',
    data: {
      labels: MONTHS_SHORT,
      datasets: [{
        label: 'Market Price (% of MSP)',
        data: data.seasonalPct,
        backgroundColor: data.seasonalPct.map(function(v) {
          if (v >= 105) return 'rgba(22, 163, 74, 0.85)';
          if (v <= 97)  return 'rgba(225, 29, 72, 0.85)';
          return 'rgba(245, 158, 11, 0.8)';
        }),
        borderRadius: 8,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              const diff = ctx.raw - 100;
              const sign = diff >= 0 ? '+' : '';
              return ctx.raw + '% of MSP (' + sign + diff + '% vs Base)';
            }
          }
        }
      },
      scales: {
        y: {
          min: 88,
          max: 115,
          ticks: {
            callback: function(v) { return v + '%'; }
          },
          grid: { color: 'rgba(0, 0, 0, 0.05)' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });

  updateTimelineDom(data);
}

function updateTimelineDom(data) {
  const patternNames = {
    year: '6-Year Purchase Price Timeline (2020–2026)',
    sixmonth: '6-Month Bi-Annual Pattern (Kharif vs Rabi Cycles)',
    month: '12-Month Price Progression (Monthly Volatility)'
  };
  const badgeTexts = {
    year: '6-Year Track',
    sixmonth: '🌓 6-Month Pattern',
    month: '📆 Monthly Pattern'
  };

  const tTitle = document.getElementById('timelineChartTitle') || document.getElementById('tlChartTitle');
  if (tTitle) tTitle.textContent = data.name + ': ' + (patternNames[currentTimelinePattern] || patternNames.year);

  const badge = document.getElementById('timelinePatternBadge');
  if (badge) badge.textContent = badgeTexts[currentTimelinePattern] || '6-Year Track';
  
  const sTitle = document.getElementById('seasonalChartTitle') || document.getElementById('seaChartTitle');
  if (sTitle) sTitle.textContent = data.name + ': Seasonal Price Hikes & Lows (% vs MSP)';

  const advName = document.getElementById('advisoryCropName');
  if (advName) advName.textContent = data.name;

  const advReason = document.getElementById('advisoryDetailedReason') || document.getElementById('advisoryText');
  if (advReason) {
    advReason.innerHTML = '<strong>' + data.name + ' Strategic Advisory:</strong> ' + data.reason;
  }

  const curMsp = document.getElementById('kpiCurrentMsp') || document.getElementById('kpiMsp');
  if (curMsp) curMsp.textContent = data.currentMsp;

  const yoy = document.getElementById('kpiYoYHike') || document.getElementById('kpiYoY');
  if (yoy) yoy.textContent = data.yoyHike;

  const fiveHike = document.getElementById('kpiFiveYearHike') || document.getElementById('kpiHike');
  if (fiveHike) fiveHike.textContent = data.fiveYearHike;

  const grPct = document.getElementById('kpiGrowthPct') || document.getElementById('kpiGrowth');
  if (grPct) grPct.textContent = data.growthPct;

  const peak = document.getElementById('kpiPeakPrice') || document.getElementById('kpiPeak');
  if (peak) peak.textContent = data.peakPrice;

  const low = document.getElementById('kpiLowPrice') || document.getElementById('kpiLow');
  if (low) low.textContent = data.lowPrice;

  const bestWin = document.getElementById('kpiBestWindow') || document.getElementById('kpiWindow');
  if (bestWin) bestWin.textContent = data.bestWindow;

  const sigBadge = document.getElementById('kpiSignalBadge') || document.getElementById('kpiSignal');
  const sigText = document.getElementById('kpiSignalText');
  const sigNote = document.getElementById('kpiSignalNote') || document.getElementById('kpiSignalSub');
  const advPill = document.getElementById('advisoryBadgePill') || document.getElementById('advisoryPill');

  if (sigText) sigText.textContent = data.signal;
  if (sigNote) sigNote.textContent = data.signalNote;

  if (data.signalType === 'sell') {
    if (sigBadge) sigBadge.className = 'mt-1 px-3 py-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xl font-black text-xs text-center flex items-center justify-center gap-1.5';
    if (advPill) advPill.className = 'px-3 py-1 bg-emerald-600 text-white font-black text-xs rounded-full shadow';
    if (advPill) advPill.textContent = 'OPTIMAL SELLING WINDOW';
  } else {
    if (sigBadge) sigBadge.className = 'mt-1 px-3 py-1.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-xl font-black text-xs text-center flex items-center justify-center gap-1.5';
    if (advPill) advPill.className = 'px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full shadow';
    if (advPill) advPill.textContent = 'HOLD FOR PEAK DEMAND';
  }

  renderPortalSeasonGrid(data);
}

function renderPortalSeasonGrid(data) {
  const container = document.getElementById('portalSeasonGrid') || document.getElementById('seasonCalGrid');
  if (!container) return;

  const typeClasses = {
    4: 'bg-emerald-600 text-white border-emerald-700',
    3: 'bg-amber-500 text-slate-950 border-amber-600',
    1: 'bg-rose-500 text-white border-rose-600',
    2: 'bg-slate-200 text-slate-700 border-slate-300'
  };
  const typeLabels = { 4: 'Peak Price', 3: 'Harvest', 1: 'Low Price', 2: 'Normal' };

  let html = '';
  data.seasonalTypes.forEach(function(t, idx) {
    const cls = typeClasses[t] || typeClasses[2];
    const lbl = typeLabels[t] || 'Normal';
    const mShort = MONTHS_SHORT[idx];
    const mFull = MONTHS_FULL[idx];
    html += '<div class="' + cls + ' border rounded-xl p-2 text-center flex flex-col justify-center items-center shadow-xs" title="' + mFull + ': ' + lbl + ' (' + data.seasonalPct[idx] + '% of MSP)">';
    html += '<span class="text-[10px] font-black uppercase">' + mShort + '</span>';
    html += '<span class="text-[9px] font-bold mt-0.5 opacity-90">' + lbl + '</span>';
    html += '</div>';
  });

  container.innerHTML = html;
}

function changeTimelinePattern(pattern) {
  currentTimelinePattern = pattern;
  applyTimelineUpdates();
}

function changeTimelineSort(sort) {
  currentTimelineSort = sort;
  applyTimelineUpdates();
}

function applyTimelineUpdates() {
  const points = getTimelinePoints(currentTimelineCrop, currentTimelinePattern, currentTimelineSort);
  const data = CROP_TIMELINE_DATA[currentTimelineCrop];

  if (portalTimelineChartInst) {
    portalTimelineChartInst.data.labels = points.labels;
    portalTimelineChartInst.data.datasets[0].data = points.msp;
    portalTimelineChartInst.data.datasets[1].data = points.peak;
    portalTimelineChartInst.data.datasets[2].data = points.low;
    portalTimelineChartInst.data.datasets[0].pointRadius = points.labels.length > 8 ? 4 : 6;
    portalTimelineChartInst.data.datasets[1].pointRadius = points.labels.length > 8 ? 3.5 : 5;
    portalTimelineChartInst.data.datasets[2].pointRadius = points.labels.length > 8 ? 3 : 4;
    portalTimelineChartInst.update();
  } else {
    initTimelineCharts();
  }

  // Sync dropdown selectors in DOM
  const patSel = document.getElementById('timelinePatternSelect');
  if (patSel) patSel.value = currentTimelinePattern;
  const sortSel = document.getElementById('timelineSortSelect');
  if (sortSel) sortSel.value = currentTimelineSort;

  updateTimelineDom(data);
}

function switchTimelineCrop(crop, btn) {
  currentTimelineCrop = crop;
  
  document.querySelectorAll('.crop-tab-btn, .crop-pill').forEach(function(b) {
    b.classList.remove('active', 'bg-emerald-600', 'text-white', 'border-emerald-600');
    b.classList.add('bg-white', 'text-slate-700', 'border-slate-300');
  });

  if (btn) {
    btn.classList.add('active', 'bg-emerald-600', 'text-white', 'border-emerald-600');
    btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-300');
  }

  const data = CROP_TIMELINE_DATA[crop];
  if (!data) return;

  applyTimelineUpdates();

  if (portalSeasonalChartInst) {
    portalSeasonalChartInst.data.datasets[0].data = data.seasonalPct;
    portalSeasonalChartInst.data.datasets[0].backgroundColor = data.seasonalPct.map(function(v) {
      if (v >= 105) return 'rgba(22, 163, 74, 0.85)';
      if (v <= 97)  return 'rgba(225, 29, 72, 0.85)';
      return 'rgba(245, 158, 11, 0.8)';
    });
    portalSeasonalChartInst.update();
  }
}

function downloadTimelineCsv() {
  let csv = 'Crop,2020-21,2021-22,2022-23,2023-24,2024-25,2025-26,5-Year-Hike,Best-Sell-Window\n';
  Object.keys(CROP_TIMELINE_DATA).forEach(function(key) {
    const c = CROP_TIMELINE_DATA[key];
    csv += '"' + c.name + '",' + c.msp.join(',') + ',"' + c.fiveYearHike + '",' + '"' + c.bestWindow + '"\n';
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'KISAN-Q_MSP_Price_Timeline_Hikes_Lows_2020_2026.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', function() {
  const firstBtn = document.querySelector('.crop-tab-btn[data-crop="wheat"], .crop-pill[data-crop="wheat"]');
  if (firstBtn) {
    firstBtn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-600');
  }
});

window.initTimelineCharts = initTimelineCharts;
window.switchTimelineCrop = switchTimelineCrop;
window.changeTimelinePattern = changeTimelinePattern;
window.changeTimelineSort = changeTimelineSort;
window.downloadTimelineCsv = downloadTimelineCsv;
