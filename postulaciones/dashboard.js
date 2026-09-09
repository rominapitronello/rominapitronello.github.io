(function(){
  var root=document.getElementById('dashboard-data');
  if(!root)return;
  function lang(){return document.documentElement.getAttribute('data-lang')||'es'}
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function pct(n,d){if(!d)return 0;return Math.max(2,Math.min(100,(n/d)*100))}
  function fmt(n){return Number.isInteger(n)?String(n):String(n).replace('.',',')}
  function render(d){
    var es=lang()==='es',p=d.performance,l=d.latency,s=d.salary;
    document.querySelectorAll('[data-snapshot-date]').forEach(function(el){el.textContent=d.snapshot_date});
    root.innerHTML=''+
      '<section class="hero-metrics" aria-label="'+(es?'Resumen de rendimiento':'Performance summary')+'">'+
        metric(p.interviews_completed_min,es?'entrevistas realizadas':'completed interviews','')+
        metric(p.second_interviews_confirmed_min,es?'2ª entrevista confirmada':'confirmed 2nd interview',es?'mínimo observado':'observed minimum')+
        metric(p.finals_confirmed_min,es?'finales confirmadas':'confirmed finals',es?'mínimo observado':'observed minimum')+
        metric(p.future_interviews_scheduled,es?'entrevista agendada':'scheduled interview',es?'próxima':'upcoming')+
      '</section>'+
      '<section class="section" aria-labelledby="pipe-title"><div class="section-head"><h2 id="pipe-title">'+(es?'Pipeline':'Pipeline')+'</h2><span class="meta">'+(es?'lo que sí está medido':'what is actually measured')+'</span></div>'+pipeline(p,es)+'</section>'+
      '<section class="section split" aria-labelledby="lat-title"><div class="section-head"><h2 id="lat-title">'+(es?'Latencia de respuesta':'Response latency')+'</h2><span class="meta">n='+l.n_measurable+'</span></div>'+latency(l,es)+'</section>'+
      '<section class="section" aria-labelledby="pay-title"><div class="section-head"><h2 id="pay-title">'+(es?'Renta que pido':'Compensation I ask for')+'</h2><span class="meta">'+(es?'por segmento comparable':'by comparable segment')+'</span></div>'+salary(s,es)+'</section>'+
      '<section class="section" aria-labelledby="hist-title"><div class="section-head"><h2 id="hist-title">'+(es?'Tasas con denominador conocido':'Rates with known denominators')+'</h2><span class="meta">'+(es?'cortes históricos':'historical snapshots')+'</span></div><div class="rate-cards">'+
        rate(es?'callback / entrevista':'callback / interview',p.historical_callback_rate_min_pct,p.historical_callback_rate_max_pct)+
        rate(es?'final':'final',p.historical_final_rate_min_pct,p.historical_final_rate_max_pct)+
      '</div><div class="snapshots">'+d.declared_snapshots.map(function(x){return snapshot(x,es)}).join('')+'</div></section>'+
      '<section class="section" aria-labelledby="shape-title"><div class="section-head"><h2 id="shape-title">'+(es?'Qué estoy buscando ahora':'What I am pursuing now')+'</h2><span class="meta">'+(es?'por problema, no sólo título':'by problem, not only title')+'</span></div><div class="shape">'+d.current_shape.map(function(x){return '<article class="shape-card"><h3>'+esc(es?x.kind_es:x.kind_en)+'</h3><div class="status">'+esc(es?x.status_es:x.status_en)+'</div></article>'}).join('')+'</div></section>'+
      '<details class="method"><summary>'+(es?'Cómo se calcularon estos números':'How these numbers were calculated')+'</summary><div class="method-body"><p>'+esc(es?d.method.reason_es:d.method.reason_en)+'</p><p>'+esc(es?l.definition_es:l.definition_en)+'</p><p>'+esc(es?s.note_es:s.note_en)+'</p></div></details>';
  }
  function metric(n,label,note){return '<div class="metric"><span class="big">'+n+'</span><span class="metric-label">'+esc(label)+'</span>'+(note?'<span class="metric-note">'+esc(note)+'</span>':'')+'</div>'}
  function pipeline(p,es){
    var rows=[
      [es?'1ª entrevista realizada':'1st interview completed',p.interviews_completed_min,7],
      [es?'2ª entrevista confirmada':'2nd interview confirmed',p.second_interviews_confirmed_min,7],
      [es?'Final confirmada':'Confirmed final',p.finals_confirmed_min,7]
    ];
    return '<div class="pipeline">'+rows.map(function(r){return '<div class="pipe-row"><div class="pipe-label">'+esc(r[0])+'</div><div class="track"><span style="width:'+pct(r[1],r[2])+'%"></span></div><strong>'+r[1]+'</strong></div>'}).join('')+'</div><div class="pipe-foot"><span>'+(es?'2 casos adicionales tienen 2ª entrevista anunciada/preparada, pero no confirmada como realizada.':'2 additional cases had a second interview announced/prepared, but completion is not confirmed.')+'</span><span>'+(es?'3 finales históricas confirmadas. 1 proceso actual menciona “resultado de la terna”, pero no se suma hasta confirmar pertenencia.':'3 historical finals are confirmed. 1 current process mentions a “shortlist result”, but it is not counted until shortlist membership is explicit.')+'</span><span>'+(es?'Ofertas de empleo confirmadas: 0. Servicios pagados ejecutados: 1.':'Confirmed employment offers: 0. Paid services completed: 1.')+'</span></div>';
  }
  function latency(l,es){return '<div class="latency-grid"><div class="lat-main"><span class="big">'+fmt(l.median_days)+'</span><span class="unit">'+(es?'días mediana':'days median')+'</span></div><div class="lat-stat"><strong>'+fmt(l.mean_days)+'</strong><span>'+(es?'días promedio':'days mean')+'</span></div><div class="lat-stat"><strong>'+esc(es?l.min_label_es:l.min_label_en)+' – '+l.max_days+'d</strong><span>'+(es?'rango observado':'observed range')+'</span></div></div><p class="note">'+esc(es?l.definition_es:l.definition_en)+'</p>'}
  function salary(s,es){return '<div class="salary-table">'+s.groups.map(function(g){return '<div class="salary-row"><div><strong>'+esc(es?g.label_es:g.label_en)+'</strong><span class="salary-unit">'+esc(es?g.unit_es:g.unit_en)+'</span></div><div class="salary-n">n='+g.n+'</div><div class="salary-mean">'+fmt(g.mean)+'</div></div>'}).join('')+'</div><p class="note">'+esc(es?s.note_es:s.note_en)+'</p>'}
  function rate(label,a,b){return '<div class="rate-card"><span class="rate-label">'+esc(label)+'</span><strong>'+fmt(a)+'–'+fmt(b)+'%</strong></div>'}
  function snapshot(s,es){var rows='';if(s.applications!=null)rows+=frow(es?'postulaciones':'applications',s.applications,s.applications);if(s.callbacks!=null)rows+=frow(es?'callbacks':'callbacks',s.callbacks,s.applications);if(s.finals!=null)rows+=frow(es?'finales':'finals',s.finals,s.applications);return '<article class="snapshot"><div class="date">'+esc(s.date)+'</div><p>'+esc(es?s.label_es:s.label_en)+'</p><div class="funnel">'+rows+'</div></article>'}
  function frow(label,n,total){return '<div class="funnel-line"><span>'+esc(label)+'</span><div class="track"><span style="width:'+pct(n,total)+'%"></span></div><strong>'+n+'</strong></div>'}
  fetch('./snapshot.json',{cache:'no-store'}).then(function(r){if(!r.ok)throw new Error('snapshot');return r.json()}).then(function(d){render(d);document.addEventListener('click',function(e){if(e.target&&e.target.matches('[data-set-lang]'))setTimeout(function(){render(d)},0)})}).catch(function(){root.innerHTML='<p class="noscript">No se pudo cargar el snapshot público. / Public snapshot could not be loaded.</p>'});
})();
