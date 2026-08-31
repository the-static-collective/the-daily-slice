(function(root) {
  'use strict';
  const Core = root.MaxhinalCore;
  const Modes = root.MaxhinalModes;
  if (!Core || !Modes) throw new Error('Maxhinal core and modes are required');

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const corpusPayload = { records:Array.isArray(root.DAILY_SLICE) ? root.DAILY_SLICE : [], meta:root.DAILY_SLICE_META || {} };
  let ride = Core.createRide(corpusPayload.meta, 'browser');
  let activeMode = 'discontinuity';
  let selectedGas = [];
  let selectedOutput = null;

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }
  function gasRefs() { return selectedGas.map((slice_id) => ({ kind:'slice', slice_id })); }
  function coPhase() { return $('[name="co-phase"]:checked')?.value || 'unknown'; }
  function selectedRows() { return selectedGas.map((id) => corpusPayload.records.find((row) => row.id === id)).filter(Boolean); }
  function latestOutput() { return ride.outputs.at(-1) || null; }

  function renderStatus() {
    const meta = corpusPayload.meta || {};
    $('#corpus-status').textContent = `corpus: ${meta.record_count ?? corpusPayload.records.length} · ${meta.format || 'legacy'}`;
    const drift = ride.replay && ride.replay.status === 'CORPUS_DRIFT';
    $('#drift-warning').hidden = !drift;
    if (drift) $('#drift-warning').textContent = `CORPUS DRIFT — ride ${ride.corpus && ride.corpus.digest || 'unknown'} / local ${ride.replay.local_digest || 'unknown'}. Historical ride preserved; no silent rebinding.`;
  }

  function renderSearch(query='') {
    const rows = Modes.searchCorpus(corpusPayload.records, query).slice(0, 30);
    $('#slice-results').innerHTML = rows.length ? rows.map((row) => `
      <article class="result">
        <div><div class="result-title">${esc(row.title)}</div><div class="meta">${esc(row.date || '')} · ${esc(row.carry || row.summary || '')}</div></div>
        <button type="button" data-load-slice="${esc(row.id)}">LOAD</button>
      </article>`).join('') : '<div class="empty">No Slice matches.</div>';
  }

  function renderGas() {
    const rows = selectedRows();
    $('#gas-list').innerHTML = rows.length ? rows.map((row) => `
      <div class="gas-row"><div><b>${esc(row.title)}</b><div class="meta">${esc(row.id)}</div></div><button class="mini" type="button" data-remove-slice="${esc(row.id)}">×</button></div>`).join('') : '<div class="empty">No gas loaded.</div>';
  }

  function field(label, body, full=false) { return `<div class="field${full?' full':''}"><label>${label}</label>${body}</div>`; }
  function options(rows, selected='') { return rows.map((row) => `<option value="${esc(row.id)}"${row.id===selected?' selected':''}>${esc(row.title)}</option>`).join(''); }

  function renderControls(mode) {
    const rows = selectedRows();
    let html = '<div class="control-grid">';
    if (mode === 'discontinuity') {
      html += field('Verdict', '<select id="p-verdict"><option value="unresolved">unresolved</option><option value="same_object">same object</option><option value="relational_lineage">relational lineage</option><option value="successor">successor</option><option value="new_occurrence">new occurrence</option></select>');
      html += field('Reason', '<textarea id="p-reason" placeholder="Why this relation?"></textarea>', true);
    } else if (mode === 'walk-braid') {
      html += field('Operator model', '<select id="p-operator"><option value="independent">independent</option><option value="co-sensitive">co-sensitive</option></select>');
      html += `<div class="field full"><label>Walk steps</label><div id="walk-rows">${rows.length ? rows.map((row, index) => `<div class="walk-row" data-walk-ref="${esc(row.id)}"><span>${index+1}. ${esc(row.title)}</span><select data-walk-verb><option>predict</option><option>compose</option><option>construct</option><option>create</option></select><select data-walk-co><option value="not-co">not-co</option><option value="co">co</option><option value="unknown">unknown</option></select></div>`).join('') : '<div class="empty">Load Slice gas to make a walk.</div>'}</div></div>`;
    } else if (mode === 'fiber') {
      html += field('Target projection / claim', '<textarea id="p-target" placeholder="What visible endpoint are these roads being compared against?"></textarea>', true);
      html += field('Representative policy (optional)', `<select id="p-representative"><option value="">none</option>${options(rows)}</select>`);
    } else if (mode === 'compose') {
      html += field('Seam note', '<textarea id="p-seams" placeholder="One unresolved seam per line"></textarea>', true);
      html += `<div class="field full"><label>Declared source order</label><div class="small-note">${rows.length ? rows.map((row)=>esc(row.id)).join(' → ') : 'Load at least two Slice records.'}</div></div>`;
    } else if (mode === 'pressure') {
      html += field('Candidate kind', '<select id="p-candidate"><option value="lineage">lineage</option><option value="identity">identity</option><option value="causation">causation</option><option value="composition">composition</option><option value="model">model</option></select>');
    } else if (mode === 'moving-origin') {
      html += field('Current origin', `<select id="p-origin"><option value="">choose loaded Slice</option>${options(rows)}</select>`);
    } else if (mode === 'quantumslinky') {
      html += field('N', '<input id="p-N" type="number" step="1" min="1" value="72">');
      html += field('m', '<input id="p-m" type="number" step="1" value="5">');
      html += field('winding k (optional)', '<input id="p-k" type="number" step="1" placeholder="364">');
      html += field('Model', '<select id="p-model"><option value="">orbit / winding only</option><option value="twisted-boundary">twisted boundary</option></select>');
      html += field('L', '<input id="p-L" type="number" step="any" min="0" placeholder="1">');
      html += field('longitudinal n', '<input id="p-n" type="number" step="1" placeholder="0">');
      html += field('transverse mode k', '<input id="p-mode-k" type="number" step="1" placeholder="1">');
    } else if (mode === 'maddclown') {
      html += field('Context', '<textarea id="p-context" placeholder="What should the clown pressure?"></textarea>', true);
      html += `<div class="field full"><div class="small-note">Targets the selected derived output when present; otherwise collides loaded Slice gas.</div></div>`;
    }
    html += '</div>';
    $('#workbench').innerHTML = html;
  }

  function numberOrNull(selector, integer=false) {
    const raw = $(selector)?.value;
    if (raw == null || raw === '') return null;
    const value = Number(raw);
    return integer ? Math.trunc(value) : value;
  }

  function collectParameters(mode) {
    if (mode === 'discontinuity') return { verdict:$('#p-verdict').value, reason:$('#p-reason').value };
    if (mode === 'walk-braid') return { operator_model:$('#p-operator').value, steps:$$('[data-walk-ref]').map((row) => ({ ref:row.dataset.walkRef, verb:row.querySelector('[data-walk-verb]').value, co_phase:row.querySelector('[data-walk-co]').value })) };
    if (mode === 'fiber') return { target:$('#p-target').value, representative_slice_id:$('#p-representative').value || null };
    if (mode === 'compose') return { order:selectedGas.slice(), seams:$('#p-seams').value.split(/\n+/).map((s)=>s.trim()).filter(Boolean) };
    if (mode === 'pressure') return { candidate_kind:$('#p-candidate').value };
    if (mode === 'moving-origin') return { origin_slice_id:$('#p-origin').value || null };
    if (mode === 'quantumslinky') {
      const p = { N:numberOrNull('#p-N', true), m:numberOrNull('#p-m', true) };
      const k = numberOrNull('#p-k', true); if (k !== null) p.k = k;
      if ($('#p-model').value === 'twisted-boundary') { p.model='twisted-boundary'; p.L=numberOrNull('#p-L'); p.n=numberOrNull('#p-n', true); p.mode_k=numberOrNull('#p-mode-k', true); }
      return p;
    }
    if (mode === 'maddclown') return { context_text:$('#p-context').value };
    return {};
  }

  function collectInputs(mode) {
    if (mode === 'quantumslinky' || mode === 'walk-braid' || mode === 'pressure') return mode === 'pressure' && selectedOutput ? [{kind:'derived',output_id:selectedOutput}] : gasRefs();
    if (mode === 'maddclown' && selectedOutput) return [{kind:'derived',output_id:selectedOutput}];
    return gasRefs();
  }

  function registerVisibleGas() {
    for (const id of selectedGas) {
      if (!ride.gas.some((entry) => entry.kind === 'slice' && entry.slice_id === id)) {
        const row = corpusPayload.records.find((item) => item.id === id);
        ride.gas.push({ kind:'slice', slice_id:id, corpus_digest:ride.corpus.digest || null, title:row?.title || null, path:row?.path || null, status:row ? 'AVAILABLE' : 'MISSING' });
      }
    }
  }

  function run(mode=activeMode, override={}) {
    registerVisibleGas();
    ride = Core.runOperation(ride, corpusPayload, {
      mode,
      inputs:override.inputs || collectInputs(mode),
      parameters:override.parameters || collectParameters(mode),
      co_phase:override.co_phase || coPhase()
    });
    const last = latestOutput();
    if (last) selectedOutput = last.output_id;
    renderRide();
  }

  function renderOutput() {
    const out = selectedOutput ? ride.outputs.find((item)=>item.output_id===selectedOutput) : latestOutput();
    const residual = ride.residuals.at(-1);
    if (!out && !residual) { $('#current-output').innerHTML = '<div class="empty">No operation output yet.</div>'; return; }
    if (!out) { $('#current-output').classList.add('refused'); $('#current-output').innerHTML = `<strong>${esc(residual.code)}</strong><div>${esc(residual.message)}</div>`; return; }
    $('#current-output').classList.toggle('refused', out.status === 'REFUSED');
    const creative = out.mode === 'discontinuity' && out.value && out.value.creative;
    $('#current-output').innerHTML = `<strong>${esc(out.output_id)} · ${esc(out.mode)} · ${esc(out.status)}</strong><pre>${esc(JSON.stringify(out.value, null, 2))}</pre>${creative ? '<div class="actions"><button type="button" class="secondary" id="bad-spin">BAD SPIN</button><button type="button" class="secondary" id="respin">RESPIN</button></div>' : ''}`;
  }

  function renderRide() {
    renderStatus(); renderGas(); renderOutput();
    $('#ride-strip').innerHTML = ride.operations.length ? ride.operations.map((op) => `<li class="ride-row"><button type="button" data-op="${esc(op.operation_id)}"><strong>${esc(op.operation_id)} · ${esc(op.mode)}</strong><span>${esc(op.co_phase)} · ${esc(op.output_refs.join(', ') || op.residual_refs.join(', ') || 'no output')}</span></button></li>`).join('') : '<li class="empty">Ride has not started.</li>';
    $('#receipt-json').textContent = Core.serializeRide(ride);
  }

  function resetRide() {
    ride = Core.createRide(corpusPayload.meta, 'browser');
    selectedOutput = null;
    renderRide();
  }

  function exportRide() {
    const blob = new Blob([Core.serializeRide(ride)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download=`${ride.ride_id}.maxhinal.json`; a.click(); URL.revokeObjectURL(url);
  }

  async function importRide(file) {
    if (!file) return;
    const parsed = JSON.parse(await file.text());
    ride = Core.hydrateRide(parsed, corpusPayload.meta);
    selectedGas = (ride.gas || []).filter((entry)=>entry.kind==='slice').map((entry)=>entry.slice_id).filter((id)=>corpusPayload.records.some((row)=>row.id===id));
    selectedOutput = ride.outputs.at(-1)?.output_id || null;
    renderRide(); renderControls(activeMode);
  }

  document.addEventListener('click', (event) => {
    const load = event.target.closest('[data-load-slice]');
    if (load) { const id=load.dataset.loadSlice; if (!selectedGas.includes(id)) selectedGas.push(id); renderGas(); renderControls(activeMode); return; }
    const remove = event.target.closest('[data-remove-slice]');
    if (remove) { selectedGas=selectedGas.filter((id)=>id!==remove.dataset.removeSlice); renderGas(); renderControls(activeMode); return; }
    const chamber = event.target.closest('[data-mode]');
    if (chamber) { activeMode=chamber.dataset.mode; $$('[data-mode]').forEach((b)=>b.setAttribute('aria-pressed', String(b===chamber))); renderControls(activeMode); return; }
    const op = event.target.closest('[data-op]');
    if (op) { const record=ride.operations.find((row)=>row.operation_id===op.dataset.op); selectedOutput=record?.output_refs.at(-1)||selectedOutput; renderOutput(); return; }
    if (event.target.id === 'run-chamber') { run(); return; }
    if (event.target.id === 'maddclown-lever') { const target=selectedOutput||latestOutput()?.output_id; run('maddclown',{inputs:target?[{kind:'derived',output_id:target}]:gasRefs(),parameters:{intervention:'global',target_output_ref:target||null,context_text:'global lever'},co_phase:'unknown'}); return; }
    if (event.target.id === 'reset-ride') { resetRide(); return; }
    if (event.target.id === 'ride-export') { exportRide(); return; }
    if (event.target.id === 'bad-spin') { ride=Core.appendBadSpin(ride,{output_ref:selectedOutput,reason:'rejected by witness'}); renderRide(); return; }
    if (event.target.id === 'respin') { const out=ride.outputs.find((row)=>row.output_id===selectedOutput); if (out && out.mode==='discontinuity') run('discontinuity',{inputs:out.source_refs,parameters:{...(ride.operations.find((op)=>op.operation_id===out.source_operation_id)?.parameters||{}),respin_of:out.output_id},co_phase:'unknown'}); }
  });

  $('#slice-search').addEventListener('input', (event)=>renderSearch(event.target.value));
  $('#ride-import').addEventListener('change', (event)=>importRide(event.target.files && event.target.files[0]).catch((error)=>{ $('#drift-warning').hidden=false; $('#drift-warning').textContent=`IMPORT REFUSED — ${error.message}`; }));

  renderSearch(''); renderGas(); renderControls(activeMode); renderRide();
})(typeof globalThis !== 'undefined' ? globalThis : window);
