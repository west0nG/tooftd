export const competitors = [
  { name: 'Gathre Floor Cushion', price: '$120', description: 'Individual floor cushion. Single-person, single-use seating without modularity.', tag: 'Individual · Static' },
  { name: 'West Elm Futon', price: '$1,440–1,899', description: 'Conventional convertible seating. High price point, limited to 2-3 people, rigid placement.', tag: 'Multi · Conventional' },
  { name: 'BB&B Bean Bag', price: '$80', description: 'Casual individual seating. Low cost but creates congestion, single configuration only.', tag: 'Individual · Casual' },
  { name: 'Modern Lounger Sofa', price: '$480', description: 'Low-profile lounger with limited versatility. Fixed form factor suits only one use case.', tag: 'Individual · Fixed' },
  { name: 'BB&B Floor Sofa', price: '$290', description: 'Floor-level sofa for casual settings. Some flexibility but not truly modular or group-oriented.', tag: 'Multi · Casual' },
];

export const radarData = {
  labels: ['Modularity', 'Capacity', 'Price Value', 'Aesthetics', 'Versatility'],
  tooftd: [9, 9, 7, 8, 10],
  competitorAvg: [3, 4, 6, 5, 3],
};

export const matrixData = {
  primary: {
    xLabel: 'Individual → Multi-Person',
    yLabel: 'High Congestion → Low Congestion',
    competitors: [
      { name: 'Floor Cushion', x: 20, y: 30 },
      { name: 'Bean Bag', x: 35, y: 70 },
      { name: 'Futon', x: 75, y: 50 },
      { name: 'Loveseat', x: 55, y: 65 },
    ],
    tooftd: { x: 85, y: 25 },
  },
  secondary: {
    xLabel: 'Single Use → Versatile',
    yLabel: 'Conventional → Unconventional',
    competitors: [
      { name: 'Recliner', x: 25, y: 75 },
      { name: 'Futon', x: 60, y: 60 },
      { name: 'Bean Bag', x: 30, y: 40 },
      { name: 'Lounger Sofa', x: 45, y: 70 },
    ],
    tooftd: { x: 90, y: 15 },
  },
};
