(()=>{
  const filingText='U.S. Provisional Patent Application filed August 19, 2026 · Patent Pending';
  const banner=`<div class="site-patent-banner"><div class="patent-badge-icon">¶</div><div><b>${filingText}</b><p>Filed at age 16 by sole inventor Shriyan Avadhanula. The provisional application covers the five integrated DataShadow subsystems demonstrated throughout this working prototype.</p><p class="research-note"><strong>Public-search note:</strong> A review of public patent and web sources did not surface an exact match for this five-subsystem combination. Because provisional applications are generally confidential and not comprehensively searchable, DataShadow does not claim “first” or “only” based on age, school status, or geography.</p></div></div>`;

  function replaceInaccuratePatentWording(root){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    for(const n of nodes){
      if(n.nodeValue.includes('five patented subsystems')) n.nodeValue=n.nodeValue.replace(/five patented subsystems/gi,'five patent-pending subsystems');
    }
  }

  function applyStatus(){
    const main=document.querySelector('#main');
    if(!main)return;
    replaceInaccuratePatentWording(main);
    const page=(document.querySelector('#breadcrumbs strong')?.textContent||'').trim();
    if(page==='Patent'&&!main.querySelector('.site-patent-banner')){
      const head=main.querySelector('.page-head');
      if(head)head.insertAdjacentHTML('afterend',banner);
    }
    if(page==='Overview'){
      const hero=main.querySelector('.hero-panel');
      if(hero&&!hero.querySelector('.site-patent-chip')){
        const secondary=hero.querySelector('.secondary-kicker');
        const chip=`<div class="site-patent-chip">PATENT PENDING · FILED AUG 19, 2026</div>`;
        if(secondary)secondary.insertAdjacentHTML('afterend',chip); else hero.insertAdjacentHTML('afterbegin',chip);
      }
    }
  }

  const observer=new MutationObserver(()=>queueMicrotask(applyStatus));
  observer.observe(document.body,{childList:true,subtree:true});
  applyStatus();
})();