// 倒數計時到 2026/08/08
(function(){
  const target = new Date('2026-08-08T00:00:00');
  function update(){
    const now = new Date();
    let diff = target - now;
    if(diff < 0) diff = 0;
    const days = Math.floor(diff / (1000*60*60*24));
    const el = document.getElementById('cd-days');
    if(el) el.textContent = days + ' 天';
  }
  update();
  setInterval(update, 1000*60);
})();
