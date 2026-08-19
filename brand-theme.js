(()=>{
  const syncThemeColor=()=>{
    const meta=document.querySelector('#themeMeta');
    if(!meta)return;
    const light=document.documentElement.dataset.theme==='light';
    meta.setAttribute('content',light?'#f4f7fb':'#050914');
  };
  new MutationObserver(syncThemeColor).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  syncThemeColor();
})();
