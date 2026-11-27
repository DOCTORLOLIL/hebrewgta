(function(){
  var KEY='gtahe-done', done={};
  try{done=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(done))}catch(e){}}
  var totals={1:22,2:11,3:26,4:25,5:7};

  function refresh(){
    Object.keys(totals).forEach(function(ch){
      var n=0;Object.keys(done).forEach(function(k){if(done[k]&&k.split('-')[0]===ch)n++});
      var pct=Math.round(n/totals[ch]*100);
      document.querySelectorAll('[data-bar="'+ch+'"]').forEach(function(b){b.style.width=pct+'%'});
      document.querySelectorAll('[data-count="'+ch+'"]').forEach(function(c){c.textContent=n+' / '+totals[ch]+' הושלמו'});
    });
  }

  document.querySelectorAll('.m').forEach(function(li){
    var id=li.dataset.id, box=li.querySelector('input');
    box.checked=!!done[id]; li.classList.toggle('done',box.checked);
    box.addEventListener('change',function(){
      done[id]=box.checked; li.classList.toggle('done',box.checked); save(); refresh();
    });
  });

  var SP='gtahe-hide';
  var hide=false; try{hide=localStorage.getItem(SP)==='1'}catch(e){}
  function applySp(){
    document.body.classList.toggle('hide-names',hide);
    document.querySelectorAll('.sp-toggle').forEach(function(b){b.textContent=hide?'הצג שמות':'הסתר שמות'});
  }
  document.querySelectorAll('.sp-toggle').forEach(function(b){
    b.addEventListener('click',function(){hide=!hide;try{localStorage.setItem(SP,hide?'1':'0')}catch(e){}applySp()});
  });
  applySp(); refresh();
})();
(function(){var q=document.getElementById('q');if(!q)return;var f='all';
function run(){var v=q.value.trim().toLowerCase();document.querySelectorAll('.sgroup').forEach(function(g){var show=0;
g.querySelectorAll('.safe').forEach(function(c){var ok=(!v||c.dataset.s.indexOf(v)>-1);c.style.display=ok?'':'none';if(ok)show++});
g.style.display=(f==='all'||f===g.dataset.g)&&show?'':'none'})}
q.addEventListener('input',run);document.querySelectorAll('.chip').forEach(function(b){b.addEventListener('click',function(){
document.querySelectorAll('.chip').forEach(function(x){x.classList.remove('on')});b.classList.add('on');f=b.dataset.f;run()})})})();
(function(){var b=document.querySelector('.openall');if(!b)return;var open=false;
b.addEventListener('click',function(){open=!open;document.querySelectorAll('.m details').forEach(function(d){d.open=open});b.textContent=open?'סגרו הכל':'פתחו הכל'})})();
