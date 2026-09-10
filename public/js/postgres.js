// PostgreSQL Database Management & Telemetry Hook
async function checkPostgresStatus() {
  try {
    const res = await fetch("/api/db/status");
    const data = await res.json();
    updatePostgresUI(data);
  } catch(e) {
    console.warn("DB telemetry error:", e);
  }
}

function updatePostgresUI(data) {
  const indicator = document.getElementById("postgresIndicator");
  const statusText = document.getElementById("postgresStatusText");
  const modalStatus = document.getElementById("pgModalStatus");
  const modalProvider = document.getElementById("pgModalProvider");
  const modalUrl = document.getElementById("pgModalUrl");
  const modalTables = document.getElementById("pgModalTables");

  if (data.connected) {
    if (indicator) indicator.className = "w-2 h-2 rounded-full bg-emerald-400 animate-pulse";
    if (statusText) {
      statusText.textContent = "PG: Connected";
      statusText.className = "font-mono font-bold text-emerald-300";
    }
    if (modalStatus) {
      modalStatus.className = "px-3 py-1.5 bg-emerald-950 border border-emerald-500 text-emerald-300 font-bold rounded-xl text-xs flex items-center gap-2";
      modalStatus.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span><span>Live Connected to PostgreSQL Database</span>`;
    }
  } else {
    if (indicator) indicator.className = "w-2 h-2 rounded-full bg-cyan-400";
    if (statusText) {
      statusText.textContent = "PostgreSQL Ready";
      statusText.className = "font-mono font-bold text-cyan-300";
    }
    if (modalStatus) {
      modalStatus.className = "px-3 py-1.5 bg-slate-900 border border-amber-500/80 text-amber-300 font-bold rounded-xl text-xs flex items-center gap-2";
      modalStatus.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span><span>In-Memory State Engine Active (Ready to Connect PostgreSQL)</span>`;
    }
  }

  if (modalProvider && data.meta) {
    modalProvider.textContent = data.meta.provider || "PostgreSQL";
  }
  if (modalUrl && data.meta) {
    modalUrl.textContent = data.meta.urlMasked || "Configure via .env or input below";
  }
  if (modalTables && data.counts) {
    modalTables.innerHTML = `
      <div class="grid grid-cols-3 gap-3 text-center text-xs">
        <div class="p-2.5 bg-slate-950 rounded-xl border border-slate-700">
          <div class="text-[10px] text-slate-400 font-bold uppercase">Farmers Table</div>
          <div class="font-mono font-black text-amber-300 text-base mt-0.5">${data.counts.farmers} rows</div>
        </div>
        <div class="p-2.5 bg-slate-950 rounded-xl border border-slate-700">
          <div class="text-[10px] text-slate-400 font-bold uppercase">Tokens Table</div>
          <div class="font-mono font-black text-emerald-300 text-base mt-0.5">${data.counts.tokens} rows</div>
        </div>
        <div class="p-2.5 bg-slate-950 rounded-xl border border-slate-700">
          <div class="text-[10px] text-slate-400 font-bold uppercase">Mandi Events</div>
          <div class="font-mono font-black text-cyan-300 text-base mt-0.5">${data.counts.events} logs</div>
        </div>
      </div>
    `;
  }
}

async function connectCustomPostgres(e) {
  if (e) e.preventDefault();
  const urlInput = document.getElementById("pgCustomUrlInput");
  const connUrl = urlInput ? urlInput.value.trim() : "";
  const feedback = document.getElementById("pgConnectFeedback");

  if (!connUrl) {
    alert("Please enter a valid PostgreSQL connection string.");
    return;
  }

  if (feedback) {
    feedback.classList.remove("hidden");
    feedback.className = "text-xs font-bold text-amber-300 flex items-center gap-1.5 mt-2";
    feedback.innerHTML = `<span class="animate-spin">⏳</span> Connecting to PostgreSQL and executing schema.sql tables...`;
  }

  try {
    const res = await fetch("/api/db/connect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ databaseUrl: connUrl })
    });
    const data = await res.json();
    if (data.success) {
      if (feedback) {
        feedback.className = "text-xs font-bold text-emerald-300 flex items-center gap-1.5 mt-2 bg-emerald-950/80 p-2 rounded-lg border border-emerald-600";
        feedback.innerHTML = `✅ Successfully connected to PostgreSQL! Schema initialized & tokens synchronized.`;
      }
      checkPostgresStatus();
    } else {
      if (feedback) {
        feedback.className = "text-xs font-bold text-red-400 flex items-center gap-1.5 mt-2 bg-red-950/80 p-2 rounded-lg border border-red-700";
        feedback.innerHTML = `❌ Connection failed: ${data.telemetry ? data.telemetry.meta.error : "Check credentials"}`;
      }
    }
  } catch(err) {
    if (feedback) {
      feedback.className = "text-xs font-bold text-red-400 flex items-center gap-1.5 mt-2";
      feedback.innerHTML = `❌ Network error: ${err.message}`;
    }
  }
}

let currentTable = 'tokens';

async function loadTableData(tableName) {
  currentTable = tableName;
  const tableContainer = document.getElementById("pgTableDataViewer");
  const queryInfo = document.getElementById("pgQueryInfo");
  if (!tableContainer) return;

  // Highlight active tab button
  document.querySelectorAll('.pg-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-table') === tableName) {
      btn.className = "pg-tab-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-600 text-slate-950 shadow";
    } else {
      btn.className = "pg-tab-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700";
    }
  });

  tableContainer.innerHTML = '<div class="p-8 text-center text-slate-400 text-xs animate-pulse">⏳ Fetching rows from PostgreSQL table...</div>';

  try {
    const res = await fetch(`/api/db/table/${tableName}?limit=50`);
    const data = await res.json();
    if (!data.success) throw new Error(data.error);

    renderSqlResults(data.fields, data.rows, `SELECT * FROM ${tableName} ORDER BY 1 DESC LIMIT 50;`, data.rowCount);
  } catch(err) {
    tableContainer.innerHTML = `<div class="p-4 text-xs font-bold text-red-400 bg-red-950/40 rounded-xl border border-red-800">❌ Error loading table: ${err.message}</div>`;
  }
}

async function runConsoleSql(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("pgCustomSqlInput");
  const sql = input ? input.value.trim() : "";
  const tableContainer = document.getElementById("pgTableDataViewer");

  if (!sql) return;

  tableContainer.innerHTML = '<div class="p-8 text-center text-slate-400 text-xs animate-pulse">⚡ Executing query on PostgreSQL engine...</div>';

  try {
    const res = await fetch('/api/db/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sql })
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);

    renderSqlResults(data.fields, data.rows, sql, data.rowCount);
  } catch(err) {
    tableContainer.innerHTML = `<div class="p-4 text-xs font-bold text-red-400 bg-red-950/40 rounded-xl border border-red-800">❌ Query Error: ${err.message}</div>`;
  }
}

function renderSqlResults(fields, rows, queryText, count) {
  const tableContainer = document.getElementById("pgTableDataViewer");
  const queryInfo = document.getElementById("pgQueryInfo");

  if (queryInfo) {
    queryInfo.innerHTML = `<span class="font-mono text-cyan-300">${queryText}</span> <span class="text-slate-400">(${count} row${count === 1 ? '' : 's'})</span>`;
  }

  if (!rows || rows.length === 0) {
    tableContainer.innerHTML = '<div class="p-8 text-center text-slate-500 text-xs font-mono">0 rows returned (Table is currently empty)</div>';
    return;
  }

  const ths = (fields || []).map(f => `<th class="p-2.5 text-left text-[11px] font-bold text-slate-300 uppercase tracking-wider bg-slate-950 border-b border-slate-700 whitespace-nowrap">${f}</th>`).join('');
  
  const trs = rows.map((r, idx) => {
    const tds = (fields || []).map(f => {
      const val = r[f];
      let displayVal = val === null || val === undefined ? '<span class="text-slate-600 italic">null</span>' : (typeof val === 'object' ? JSON.stringify(val) : String(val));
      return `<td class="p-2.5 text-xs text-slate-200 border-b border-slate-800/80 font-mono whitespace-nowrap">${displayVal}</td>`;
    }).join('');
    const bg = idx % 2 === 0 ? 'bg-slate-900/60' : 'bg-slate-950/40';
    return `<tr class="${bg} hover:bg-cyan-950/40 transition">${tds}</tr>`;
  }).join('');

  tableContainer.innerHTML = `
    <div class="overflow-x-auto rounded-xl border border-slate-700 max-h-72">
      <table class="w-full text-left border-collapse">
        <thead class="sticky top-0 z-10"><tr>${ths}</tr></thead>
        <tbody>${trs}</tbody>
      </table>
    </div>
  `;
}

function openPostgresModal() {
  const m = document.getElementById("postgresModal");
  if (m) m.classList.remove("hidden");
  checkPostgresStatus();
  loadTableData(currentTable || 'tokens');
  if (window.lucide) window.lucide.createIcons();
}

function closePostgresModal() {
  const m = document.getElementById("postgresModal");
  if (m) m.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  checkPostgresStatus();
  setInterval(checkPostgresStatus, 10000);
});

