import { media } from './media'

export const articles = [
  {
    slug: 'the-last-of-the-v12', category: 'History', readTime: '06 MIN READ', date: '18 NOV 2026',
    title: 'The last of the V12.', teaser: 'Why the naturally aspirated twelve-cylinder engine remains an enduring symbol of automotive emotion.',
    image: media.aventador, featured: true,
    paragraphs: [
      'There is something wonderfully defiant about a naturally aspirated V12. Its response is immediate, its character unmistakable and its sound as much a part of the experience as the acceleration itself.',
      'For generations, twelve-cylinder engines represented the pinnacle of grand touring and exotic performance. Manufacturers used them not simply for power but for a distinctive blend of smoothness, drama and mechanical refinement.',
      'As emissions regulation and electrification reshape automotive engineering, the V12 is increasingly rare. That scarcity has transformed its status from an engineering choice into an emotional statement.',
      'Cars such as the Aventador SVJ show what happens when a large-displacement engine is paired with a highly developed chassis and modern aerodynamic thinking. The resulting experience feels both contemporary and timeless.',
    ],
  },
  {
    slug: 'a-new-era-of-hybrid-performance', category: 'Technology', readTime: '05 MIN READ', date: '12 NOV 2026',
    title: 'A new era of hybrid performance.', teaser: 'Electric torque and combustion power are redefining what a performance car can feel like.',
    image: media.ferrari,
    paragraphs: [
      'Hybrid performance no longer means making a compromise. In a supercar, an electric motor can fill torque gaps, improve traction and transform how a combustion engine delivers its power.',
      'The Ferrari SF90 Stradale demonstrates this shift. Electric motors support the twin-turbo V8 and allow a new level of control over power delivery and all-wheel-drive traction.',
      'Systems that manage energy, braking and deployment are becoming as important as the engines themselves. The future of speed is as much about software and calibration as cylinders and boost.',
      'What makes this new chapter compelling is how distinctive the results can be. Hybridization creates new design possibilities rather than a single formula.',
    ],
  },
  {
    slug: 'air-is-the-new-horsepower', category: 'Engineering', readTime: '07 MIN READ', date: '07 NOV 2026',
    title: 'Air is the new horsepower.', teaser: 'How downforce, drag and active aerodynamics are shaping the fastest cars on the planet.',
    image: media.porsche,
    paragraphs: [
      'At speed, air becomes a material designers have to sculpt. It presses against the body, flows through cooling systems and determines how confidently a car can attack a corner.',
      'Downforce can create extra grip, but it often comes with extra drag. Engineers must navigate a constant compromise between straight-line speed and cornering performance.',
      'The 911 GT3 RS makes aerodynamic engineering unusually visible. Its wings, vents and ducts demonstrate how thoroughly a road car can be optimized around the circuit.',
      'Active aerodynamics adds another dimension, adapting components to the demands of acceleration, braking and turning. The fastest solution is rarely simply a bigger engine.',
    ],
  },
  {
    slug: 'the-carbon-fiber-obsession', category: 'Automotive Design', readTime: '04 MIN READ', date: '29 OCT 2026',
    title: 'The carbon fiber obsession.', teaser: 'Inside the material that helped rewrite the rules of supercar construction.',
    image: media.mclaren,
    paragraphs: [
      'Carbon fiber combines low mass with exceptional strength when it is engineered and manufactured correctly. For performance cars, those properties create tremendous opportunity.',
      'Monocoque structures can be both extremely rigid and lightweight, improving crash protection and making suspension behavior more predictable.',
      'The material also allows complex aerodynamic forms. Lightness, however, comes at the cost of intensive production methods and expensive repairs.',
      'For enthusiasts, the visible weave has become an aesthetic symbol of engineering. The most compelling applications are the ones that do real work.',
    ],
  },
  {
    slug: 'the-quest-for-ultimate-speed', category: 'Performance', readTime: '06 MIN READ', date: '21 OCT 2026',
    title: 'The quest for ultimate speed.', teaser: 'What it takes to build a car that lives at the edge of possibility.',
    image: media.jesko,
    paragraphs: [
      'The pursuit of extreme speed demands much more than horsepower. Tires, cooling, stability, gearing and aerodynamic behavior must all work within exceptionally narrow margins.',
      'The Koenigsegg Jesko family reflects two different solutions: one version emphasizes downforce, while another is optimized for low drag.',
      'A projected maximum speed is not the same as a measured record. Responsible performance comparisons should distinguish manufacturer estimates from independently demonstrated results.',
      'This is what makes the engineering so fascinating: extraordinary performance emerges only when every system is considered together.',
    ],
  },
  {
    slug: 'beauty-in-the-details', category: 'Automotive Design', readTime: '05 MIN READ', date: '16 OCT 2026',
    title: 'Beauty in the details.', teaser: 'Discover why craftsmanship remains an essential dimension of the modern hypercar.',
    image: media.pagani,
    paragraphs: [
      'The finest automotive design often reveals itself slowly, through the precision of a switch, the finish of a surface or the engineering visible through a glass panel.',
      'Pagani embraces this philosophy with an almost watchmaking approach to interior components and material choices.',
      'A vehicle designed this way is an emotional object as well as a machine. Its details invite the owner to look more closely and understand how it was made.',
      'Craftsmanship can be as distinctive as acceleration, providing character that cannot be captured by a single number.',
    ],
  },
]

export const storyCategories = ['All', 'Engineering', 'Automotive Design', 'History', 'Technology', 'Performance']
