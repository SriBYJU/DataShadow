window.DATASHADOW_PUBLIC_DATA = {
  updated: '2026-08-16',
  sources: [
    {
      id: 'census-acs',
      agency: 'U.S. Census Bureau',
      title: 'American Community Survey (ACS)',
      year: '2024',
      url: 'https://www.census.gov/programs-surveys/acs.html',
      use: 'Reference-population and demographic rarity context',
      note: 'ACS covers more than 40 population and housing topics and is released annually.'
    },
    {
      id: 'census-internet',
      agency: 'U.S. Census Bureau',
      title: 'Computer and Internet Use in the United States',
      year: '2021 report, published 2024',
      url: 'https://www.census.gov/newsroom/press-releases/2024/computer-internet-use-2021.html',
      use: 'Digital footprint prevalence context',
      metrics: [{label:'Households with a computer',value:95,unit:'%'},{label:'Households with broadband',value:90,unit:'%'}]
    },
    {
      id: 'bls-atus',
      agency: 'U.S. Bureau of Labor Statistics',
      title: 'American Time Use Survey',
      year: '2025',
      url: 'https://www.bls.gov/tus/latest-numbers.htm',
      use: 'Behavioral-intensity reference benchmarks',
      metrics: [{label:'Leisure + sports',value:5.16,unit:'hours/day'},{label:'Sports/exercise participation',value:23.4,unit:'% of people/day'}]
    },
    {
      id: 'ftc-brokers',
      agency: 'Federal Trade Commission',
      title: 'Data Brokers: A Call for Transparency and Accountability',
      year: '2014',
      url: 'https://www.ftc.gov/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014',
      use: 'Transparency and consumer-control problem framing',
      note: 'FTC documented opacity in the data-broker ecosystem and recommended greater transparency and control.'
    },
    {
      id: 'ftc-location',
      agency: 'Federal Trade Commission',
      title: 'FTC action involving sensitive location data',
      year: '2024',
      url: 'https://www.ftc.gov/news-events/news/press-releases/2024/12/ftc-takes-action-against-mobilewalla-collecting-selling-sensitive-location-data',
      use: 'Location-domain risk weighting and policy guardrails',
      note: 'FTC enforcement highlights the elevated sensitivity of precise location data and the importance of consent.'
    },
    {
      id: 'ftc-padfaa',
      agency: 'Federal Trade Commission',
      title: 'Protecting Americans’ Data from Foreign Adversaries Act reminder',
      year: '2026',
      url: 'https://www.ftc.gov/news-events/news/press-releases/2026/02/ftc-reminds-data-brokers-their-obligations-comply-padfaa',
      use: 'Prototype buyer-policy restrictions',
      note: 'Used only as a compliance-awareness guardrail in the prototype; not legal advice.'
    }
  ],
  domainBenchmarks: {
    athletics: {baseRate:0.08, demandIndex:1.08, riskWeight:0.55, evidence:['bls-atus']},
    entertainment: {baseRate:0.06, demandIndex:1.02, riskWeight:0.50, evidence:['bls-atus','census-internet']},
    social: {baseRate:0.12, demandIndex:1.06, riskWeight:0.72, evidence:['census-internet','ftc-brokers']},
    finance: {baseRate:0.18, demandIndex:1.12, riskWeight:0.86, evidence:['ftc-brokers']},
    location: {baseRate:0.25, demandIndex:1.10, riskWeight:1.00, evidence:['ftc-location']},
    health: {baseRate:0.30, demandIndex:1.05, riskWeight:1.00, evidence:['ftc-brokers']}
  },
  methodology: {
    valuation: 'Dollar figures are DataShadow prototype model outputs, not market quotes. The model combines the patent’s illustrative domain base-rate assumption with measured signal freshness, rarity, demand-match, confidence, privacy risk, and time depreciation.',
    rarity: 'Rarity is a transparent prototype score. Where demographic context exists, public reference-population context is used; otherwise the score is derived from within-profile feature diversity and is labeled modeled.',
    simulation: 'Buyer activity is synthetic unless explicitly labeled otherwise. Synthetic demand is deterministic from the selected scenario and public benchmark multipliers so identical inputs produce reproducible outputs.'
  }
};
