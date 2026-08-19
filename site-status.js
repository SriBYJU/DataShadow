(()=>{
  const filingText='U.S. Provisional Patent Application filed August 19, 2026';
  const banner=`<div class="site-patent-banner"><div class="patent-badge-icon">¶</div><div><b>${filingText}</b><p>Filed at age 16 by sole inventor Shriyan Avadhanula. The provisional patent application describes the five integrated DataShadow subsystems demonstrated throughout this working prototype.</p><p class="research-note"><strong>Public-search note:</strong> A review of public patent and web sources did not surface an exact match for this five-subsystem combination. USPTO guidance explains that provisional applications are not published and are generally preserved in confidence, so DataShadow does not make an unsupported “first” or “only” claim based on age, school status, or geography.</p></div></div>`;

  const filingProof=`<section class="filing-proof"><div class="filing-proof-mark"><img src="datashadow-icon.svg" alt=""></div><div class="filing-proof-copy"><small>USPTO FILING MILESTONE</small><h3>Provisional patent application submitted successfully</h3><p>DataShadow’s U.S. provisional patent application was filed through USPTO Patent Center on August 19, 2026.</p></div><div class="filing-proof-meta"><span><b>Inventor</b>Shriyan Avadhanula</span><span><b>Role</b>Sole inventor</span><span><b>Stage</b>Provisional filing</span></div></section>`;

  const evidence=`<section class="patent-evidence"><div class="patent-evidence-head"><div><div class="eyebrow">WHY THIS PROBLEM MATTERS</div><h3>Public data points to a real control gap.</h3><p>These statistics are independent public evidence, not inputs to DataShadow’s valuation model.</p></div><a href="https://www.pewresearch.org/internet/2023/10/18/views-of-data-privacy-risks-personal-data-and-digital-privacy-laws/" target="_blank" rel="noopener">Pew Research Center · 2023 ↗</a></div><div class="patent-stat-grid"><div class="patent-stat"><b>81%</b><span>of U.S. adults said they were concerned about how companies use the data they collect.</span></div><div class="patent-stat"><b>73%</b><span>said they had very little or no control over data companies collect about them.</span></div><div class="patent-stat"><b>67%</b><span>said they had very little or no understanding of what companies do with their personal data.</span></div></div></section>`;

  const creatorMilestone=`<div class="creator-patent-milestone"><img src="datashadow-icon.svg" alt=""><div><small>INVENTOR MILESTONE</small><b>U.S. provisional patent application filed at age 16</b><span>Sole inventor · Filed August 19, 2026 · Five integrated DataShadow subsystems</span></div></div>`;

  const overviewShowcase=`<section class="overview-patent-showcase"><div class="overview-patent-copy"><div class="eyebrow">INVENTOR MILESTONE</div><h2>Filed at age 16 as sole inventor.</h2><p>On August 19, 2026, Shriyan Avadhanula filed a U.S. provisional patent application for DataShadow’s integrated personal-data asset management architecture. The filing describes the same five core subsystems demonstrated throughout this working prototype.</p><div class="overview-patent-facts"><span><b>Age at filing</b>16</span><span><b>Inventorship</b>Sole inventor</span><span><b>Filing</b>U.S. provisional patent</span><span><b>Date</b>Aug 19, 2026</span></div><button class="btn small" data-action="nav" data-page="patent">Explore the provisional patent map →</button></div><div class="patent-profile-shot"><img src="patentlinkedin.png" alt="Patent profile screenshot showing the DataShadow provisional patent filing"><span>Patent profile listing · filed Aug 19, 2026</span></div></section>`;

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
      if(head)head.insertAdjacentHTML('afterend',banner+filingProof+evidence);
    }

    if(page==='Overview'){
      const hero=main.querySelector('.hero-panel');
      if(hero&&!hero.querySelector('.site-patent-chip')){
        const secondary=hero.querySelector('.secondary-kicker');
        const chip=`<div class="site-patent-chip">U.S. PROVISIONAL PATENT · FILED AUG 19, 2026</div>`;
        if(secondary)secondary.insertAdjacentHTML('afterend',chip); else hero.insertAdjacentHTML('afterbegin',chip);
      }
      if(!main.querySelector('.overview-patent-showcase')){
        const heroGrid=main.querySelector('.hero-grid');
        if(heroGrid)heroGrid.insertAdjacentHTML('afterend',overviewShowcase);
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
