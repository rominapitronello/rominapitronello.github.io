(function(){
  var root=document.getElementById('dashboard-data');
  if(!root)return;
  function lang(){return document.documentElement.getAttribute('data-lang')||'es'}
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function pct(n,d){if(!n||!d)return 0;return Math.max(3,Math.min(100,(n/d)*100))}
  function render(d){
    var l=lang(),es=l==='es';
    document.querySelectorAll('[data-snapshot-date]').forEach(function(el){el.textContent=d.snapshot_date});
    var a=d.archive,e=d.evidence;
    root.innerHTML=''+
      '<div class="kpis" aria-label="'+(es?'Tamaño del archivo':'Archive size')+'">'+
        '<div class="kpi"><span class="n">'+a.tracked_cases+'</span><span class="label">'+(es?'casos en el ledger':'cases in the ledger')+'</span></div>'+
        '<div class="kpi"><span class="n">'+a.source_chats+'</span><span class="label">'+(es?'chats indexados con procedencia':'source chats indexed with provenance')+'</span></div>'+
        '<div class="kpi"><span class="n">'+a.activated_contacts+'</span><span class="label">'+(es?'contactos activados, separados de las postulaciones':'activated contacts, kept separate from applications')+'</span></div>'+
        '<div class="kpi"><span class="n">'+a.calls_and_programs+'</span><span class="label">'+(es?'convocatorias/programas fuera del empleo tradicional':'calls/programs outside standard employment')+'</span></div>'+
        '<div class="kpi wide"><span class="n">'+e.gmail_confirmed_sends_recovered+'</span><span class="label">'+(es?'envíos cuya confirmación fue recuperada específicamente desde Gmail durante el backfill':'submissions whose confirmation was specifically recovered from Gmail during backfill')+'</span></div>'+
      '</div>'+
      '<section class="section" aria-labelledby="ev-title"><div class="section-head"><h2 id="ev-title">'+(es?'Calidad de la evidencia':'Evidence quality')+'</h2><span class="meta">'+(es?'no son porcentajes de éxito':'not success rates')+'</span></div>'+
        '<div class="evidence">'+
          evidenceRow(es?'Confirmaciones de envío recuperadas en Gmail':'Submission confirmations recovered from Gmail',e.gmail_confirmed_sends_recovered,a.tracked_cases)+
          evidenceRow(es?'Material listo, envío aún no verificable':'Materials ready, submission still unverifiable',e.materials_ready_without_send_evidence,a.tracked_cases)+
          evidenceRow(es?'Fechas de rechazo recuperadas en Gmail':'Rejection dates recovered from Gmail',e.rejection_dates_recovered,a.tracked_cases)+
        '</div><p class="note" style="margin-top:16px">'+esc(es?d.source_note_es:d.source_note_en)+'</p></section>'+
      '<section class="section" aria-labelledby="snap-title"><div class="section-head"><h2 id="snap-title">'+(es?'Cortes históricos declarados':'Declared historical snapshots')+'</h2><span class="meta">'+(es?'se conservan discrepancias':'discrepancies are preserved')+'</span></div><div class="snapshots">'+
        d.declared_snapshots.map(function(s){return snapshot(s,es)}).join('')+
      '</div></section>'+
      '<section class="section" aria-labelledby="shape-title"><div class="section-head"><h2 id="shape-title">'+(es?'La forma actual de la búsqueda':'Current search shape')+'</h2><span class="meta">'+(es?'snapshot, no feed en vivo':'snapshot, not a live feed')+'</span></div><div class="shape">'+
        d.current_shape.map(function(x){return '<article class="shape-card"><h3>'+esc(es?x.kind_es:x.kind_en)+'</h3><div class="status">'+esc(es?x.status_es:x.status_en)+'</div><p>'+esc(es?x.note_es:x.note_en)+'</p></article>'}).join('')+
      '</div></section>';
  }
  function evidenceRow(label,n,total){return '<div class="evidence-row"><div class="lab">'+esc(label)+'</div><div class="track" aria-hidden="true"><span style="width:'+pct(n,total)+'%"></span></div><div class="val">'+n+'</div></div>'}
  function snapshot(s,es){
    var rows='';
    if(s.applications!=null)rows+=frow(es?'postulaciones':'applications',s.applications,s.applications);
    if(s.callbacks!=null)rows+=frow(es?'callbacks / entrevistas':'callbacks / interviews',s.callbacks,s.applications);
    if(s.finals!=null)rows+=frow(es?'finales':'finals',s.finals,s.applications);
    return '<article class="snapshot"><div class="date">'+esc(s.date)+'</div><p>'+esc(es?s.label_es:s.label_en)+'</p><div class="funnel">'+rows+'</div></article>';
  }
  function frow(label,n,total){return '<div class="funnel-line"><span>'+esc(label)+'</span><div class="track" aria-hidden="true"><span style="width:'+pct(n,total)+'%"></span></div><strong>'+n+'</strong></div>'}
  fetch('./snapshot.json',{cache:'no-store'}).then(function(r){if(!r.ok)throw new Error('snapshot');return r.json()}).then(function(d){render(d);document.addEventListener('click',function(e){if(e.target&&e.target.matches('[data-set-lang]'))setTimeout(function(){render(d)},0)})}).catch(function(){root.innerHTML='<p class="noscript">No se pudo cargar el snapshot público. / Public snapshot could not be loaded.</p>'});
})();
