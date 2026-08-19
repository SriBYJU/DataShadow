(()=>{
  const filingText='U.S. Provisional Patent Application filed August 19, 2026';
  const banner=`<div class="site-patent-banner"><div class="patent-badge-icon">¶</div><div><b>${filingText}</b><p>Filed at age 16 by sole inventor Shriyan Avadhanula. The provisional patent application describes the five integrated DataShadow subsystems demonstrated throughout this working prototype.</p><p class="research-note"><strong>Public-search note:</strong> A review of public patent and web sources did not surface an exact match for this five-subsystem combination. USPTO guidance explains that provisional applications are not published and are generally preserved in confidence, so DataShadow does not make an unsupported “first” or “only” claim based on age, school status, or geography.</p></div></div>`;

  const evidence=`<section class="patent-evidence"><div class="patent-evidence-head"><div><div class="eyebrow">WHY THIS PROBLEM MATTERS</div><h3>Public data points to a real control gap.</h3><p>These statistics are independent public evidence, not inputs to DataShadow’s valuation model.</p></div><a href="https://www.pewresearch.org/internet/2023/10/18/views-of-data-privacy-risks-personal-data-and-digital-privacy-laws/" target="_blank" rel="noopener">Pew Research Center · 2023 ↗</a></div><div class="patent-stat-grid"><div class="patent-stat"><b>81%</b><span>of U.S. adults said they were concerned about how companies use the data they collect.</span></div><div class="patent-stat"><b>73%</b><span>said they had very little or no control over data companies collect about them.</span></div><div class="patent-stat"><b>67%</b><span>said they had very little or no understanding of what companies do with their personal data.</span></div></div></section>`;

  const creatorMilestone=`<div class="creator-patent-milestone"><img src="datashadow-icon.svg" alt=""><div><small>INVENTOR MILESTONE</small><b>U.S. provisional patent application filed at age 16</b><span>Sole inventor · Filed August 19, 2026 · Five integrated DataShadow subsystems</span></div></div>`;

  const replacements=[
    [/five patented subsystems/gi,'five provisional patent subsystems'],
    [/five patent-pending subsystems/gi,'five provisional patent subsystems'],
    [/Five patent subsystems/gi,'Five provisional patent subsystems'],
    [/five patent subsystems/gi,'five provisional patent subsystems'],
    [/the five core patent subsystems/gi,'the five core provisional patent subsystems'],
    [/five core patent subsystems/gi,'five core provisional patent subsystems'],
    [/PATENT SUBSYSTEM/gi,'PROVISIONAL PATENT SUBSYSTEM'],
    [/The patent describes/gi,'The provisional patent application describes'],
    [/the patent describes/gi,'the provisional patent application describes'],
    [/plan(?:s|ned)? to file (?:a )?(?:U\.S\. )?provisional patent application/gi,filingText],
    [/will file (?:a )?(?:U\.S\. )?provisional patent application/gi,filingText],
    [/need(?:s)? to file (?:a )?(?:U\.S\. )?provisional patent application/gi,filingText],
    [/have to file (?:a )?(?:U\.S\. )?provisional patent application/gi,filingText]
  ];

  function normalizePatentWording(root){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    for(const n of nodes){
      let text=n.nodeValue;
      replacements.forEach(([pattern,replacement])=>{text=text.replace(pattern,replacement)});
      if(text!==n.nodeValue)n.nodeValue=text;
    }
  }

  function applyStatus(){
    const main=document.querySelector('#main');
    if(!main)return;
    normalizePatentWording(main);
    const page=(document.querySelector('#breadcrumbs strong')?.textContent||'').trim();

    if(page==='Patent'&&!main.querySelector('.site-patent-banner')){
      const head=main.querySelector('.page-head');
      if(head)head.insertAdjacentHTML('afterend',banner+evidence);
    }

    if(page==='Overview'){
      const hero=main.querySelector('.hero-panel');
      if(hero&&!hero.querySelector('.site-patent-chip')){
        const secondary=hero.querySelector('.secondary-kicker');
        const chip=`<div class="site-patent-chip">U.S. PROVISIONAL PATENT · FILED AUG 19, 2026</div>`;
        if(secondary)secondary.insertAdjacentHTML('afterend',chip); else hero.insertAdjacentHTML('afterbegin',chip);
      }
    }

    if(page==='About DataShadow'&&!main.querySelector('.creator-patent-milestone')){
      const head=main.querySelector('.page-head');
      if(head)head.insertAdjacentHTML('afterend',creatorMilestone);
    }

    if(page==='Technology'&&!main.querySelector('.technology-patent-note')){
      const head=main.querySelector('.page-head');
      if(head)head.insertAdjacentHTML('afterend',`<div class="technology-patent-note"><b>${filingText}</b><span>The technical screens below map the working prototype to the five subsystems described in that filing.</span></div>`);
    }
  }

  const observer=new MutationObserver(()=>queueMicrotask(applyStatus));
  observer.observe(document.body,{childList:true,subtree:true});
  applyStatus();
})();