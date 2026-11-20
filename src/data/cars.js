import { commons, media } from './media'

// Figures are representative published specifications; trims, test methods and
// market specifications can differ. Keep this content isolated for API migration.
export const cars = [
  {
    id: 'aventador-svj', brand: 'Lamborghini', model: 'Aventador SVJ', short: 'The last word in naturally aspirated V12 theatre.',
    price: {
      amount: 517_770, currency: 'USD', year: 2019, basis: 'U.S. base price',
      note: 'U.S. pricing for the Aventador SVJ coupe.',
      publisher: 'MotorTrend first drive', source: 'https://www.motortrend.com/reviews/2019-lamborghini-aventador-svj-first-drive',
    },
    category: 'Track-focused', hp: 770, topSpeed: 350, acceleration: 2.8, torque: '720 Nm',
    engine: '6.5L naturally aspirated V12', transmission: '7-speed ISR', drivetrain: 'AWD', weight: '1,525 kg (dry)', years: '2018–2021',
    country: 'Italy', color: '#debd4e', image: media.aventador, images: [media.aventador, media.aventadorSide, media.aventadorAlt],
    story: 'The Aventador SVJ distills the Lamborghini idea into something visceral: twelve cylinders, a razor-edged silhouette and an aerodynamics system designed to make every surface work harder. Its ALA 2.0 active aerodynamics helps the car balance downforce and drag as conditions change.',
    design: 'Its aggressive aero channels, vast rear wing and striking Y-shaped design language exist for more than visual drama. Every surface helps channel air through and around an uncompromising V12 machine.',
    tags: ['V12', 'Naturally aspirated', 'Track icon'],
  },
  {
    id: 'sf90-stradale', brand: 'Ferrari', model: 'SF90 Stradale', short: 'Electrification without compromise.',
    price: {
      amount: 507_300, currency: 'USD', year: 2021, basis: 'U.S. base price',
      note: 'The starting price for the Stradale coupe excludes destination fees.',
      publisher: 'The Drive first drive', source: 'https://www.thedrive.com/new-cars/40948/2021-ferrari-sf90-stradale-first-drive-review-a-searingly-fast-hybrid-that-can-drive-without-gas',
    },
    category: 'Hybrid', hp: 986, topSpeed: 340, acceleration: 2.5, torque: '800 Nm (V8)',
    engine: '4.0L twin-turbo V8 + 3 electric motors', transmission: '8-speed dual-clutch', drivetrain: 'AWD', weight: '1,570 kg (dry)', years: '2019–2024',
    country: 'Italy', color: '#b52b24', image: media.ferrari, images: [media.ferrari, media.ferrariAlt],
    story: 'The SF90 Stradale marks a turning point in Ferrari road-car engineering. Three electric motors join a twin-turbo V8 in a plug-in hybrid system that delivers extraordinary response, electric-only capability and all-wheel-drive traction.',
    design: 'Aerodynamic innovation is woven into the sculptural body, where carefully managed airflow complements a cabin focused entirely on the driver.',
    tags: ['Plug-in hybrid', 'V8', 'Electric front axle'],
  },
  {
    id: 'mclaren-765lt', brand: 'McLaren', model: '765LT', short: 'Less weight. More sensation.',
    price: {
      amount: 358_000, currency: 'USD', year: 2021, basis: 'U.S. base MSRP',
      note: 'McLaren’s U.S. coupe price excludes taxes, registration and transportation.',
      publisher: 'McLaren retail price list (PDF)', source: 'https://www.exoticcarhacks.com/wp-content/uploads/2024/04/usa-mclaren-765lt-my21-price-list-retail-26-03-20-1.pdf',
    },
    category: 'Track-focused', hp: 755, topSpeed: 330, acceleration: 2.8, torque: '800 Nm',
    engine: '4.0L twin-turbo V8', transmission: '7-speed dual-clutch', drivetrain: 'RWD', weight: '1,229 kg (dry)', years: '2020–2021',
    country: 'United Kingdom', color: '#d38747', image: media.mclaren, images: [media.mclaren, media.mclarenAlt],
    story: 'The Longtail philosophy prioritizes lightness, downforce and involvement. The 765LT makes its intentions clear through purposeful aero, meticulous weight reduction and a rapid-response twin-turbo V8.',
    design: 'Extended aero surfaces, high-mounted exhausts and lightweight detailing turn engineering decisions into a striking visual identity.',
    tags: ['Longtail', 'Carbon fiber', 'Lightweight'],
  },
  {
    id: '911-gt3-rs', brand: 'Porsche', model: '911 GT3 RS', short: 'A road car shaped by the race track.',
    price: {
      amount: 223_800, currency: 'USD', year: 2023, basis: 'U.S. base MSRP',
      note: 'Porsche quoted a separate $1,450 processing, delivery and handling fee.',
      publisher: 'Porsche Newsroom USA', source: 'https://newsroom.porsche.com/en_US/2022/products/porsche-911-gt3-rs-world-premiere-29439.html',
    },
    category: 'Track-focused', hp: 518, topSpeed: 296, acceleration: 3.2, torque: '465 Nm',
    engine: '4.0L naturally aspirated flat-six', transmission: '7-speed PDK', drivetrain: 'RWD', weight: '1,450 kg (DIN)', years: '2022–present',
    country: 'Germany', color: '#d5d9dd', image: media.porsche, images: [media.porsche, media.porscheAlt],
    story: 'The modern 911 GT3 RS treats airflow as a central part of the driving experience. Its enormous active rear wing and front-axle aero systems deliver a level of track-focused engineering usually reserved for racing.',
    design: 'Louvres, ducts, sculpted bodywork and drag-reduction aerodynamics make this instantly recognizable 911 a masterclass in functional design.',
    tags: ['Flat-six', 'Active aero', 'Track engineering'],
  },
  {
    id: 'bugatti-chiron', brand: 'Bugatti', model: 'Chiron', short: 'An icon where artistry meets impossible numbers.',
    price: {
      amount: 2_400_000, currency: 'EUR', year: 2016, basis: 'Launch price before tax',
      note: 'Bugatti published this net base price for the original Chiron at its Geneva debut.',
      publisher: 'Bugatti Newsroom', source: 'https://newsroom.bugatti.com/press-releases/geneva-international-motor-show-2016',
    },
    category: 'Hypercar', hp: 1479, topSpeed: 420, acceleration: 2.4, torque: '1,600 Nm',
    engine: '8.0L quad-turbo W16', transmission: '7-speed dual-clutch', drivetrain: 'AWD', weight: '1,995 kg (DIN)', years: '2016–2024',
    country: 'France', color: '#537b9a', image: media.bugatti, images: [media.bugatti, media.bugattiAlt],
    story: 'The Chiron is an exercise in abundance and control. Its quad-turbo W16 reshaped expectations for hypercar power while the signature C-line and immaculate cabin express an entirely different dimension of luxury.',
    design: 'The sweeping side signature, sweeping surfaces and extraordinary cooling requirements come together in a body that is both unmistakable and deeply engineered.',
    tags: ['W16', 'Quad-turbo', 'Grand touring'],
  },
  {
    id: 'koenigsegg-jesko', brand: 'Koenigsegg', model: 'Jesko', short: 'A relentless pursuit of the absolute.',
    price: {
      amount: 3_000_000, currency: 'USD', year: 2019, basis: 'Starting price before tax',
      note: 'Koenigsegg quoted its starting price in U.S. dollars. Each build was configured individually, with taxes varying by market.',
      publisher: 'Koenigsegg spokesperson in AutoRAI', source: 'https://autorai.nl/koenigsegg-jesko-groot-verkoopsucces/',
    },
    category: 'Hypercar', hp: 1600, topSpeed: null, acceleration: null, torque: '1,500 Nm',
    engine: '5.0L twin-turbo V8 (E85 output)', transmission: '9-speed Light Speed Transmission', drivetrain: 'RWD', weight: '1,320 kg (dry, Attack)', years: '2021–present',
    country: 'Sweden', color: '#a5b3b9', image: media.jesko, images: [media.jesko, media.jeskoAlt],
    story: 'Named in honor of the founder’s father, the Jesko demonstrates an audacious approach to powertrain and transmission technology. Its nine-speed Light Speed Transmission can select gears with remarkable speed.',
    design: 'High downforce and careful airflow management define the Attack version, while the Absolut variant pursues low drag. Their differing missions reveal the depth of the Jesko platform.',
    tags: ['Hypercar', 'E85 capable', 'LST gearbox'],
  },
  {
    id: 'pagani-huayra', brand: 'Pagani', model: 'Huayra', short: 'Where bespoke craftsmanship becomes motion.',
    price: {
      amount: 849_000, currency: 'EUR', year: 2012, basis: 'Base price before tax',
      note: 'Pagani’s February 2012 coupe specification sheet lists a base price plus local taxes.',
      publisher: 'Pagani specification sheet via Motor1', source: 'https://ar.motor1.com/news/468874/oficial-el-pagani-huayra-vale-849-mil-euros-y-alcanza-los-360-kmh/',
    },
    category: 'Supercar', hp: 720, topSpeed: 370, acceleration: 3.2, torque: '1,000 Nm',
    engine: '6.0L twin-turbo V12', transmission: '7-speed automated manual', drivetrain: 'RWD', weight: '1,350 kg (dry)', years: '2012–2018',
    country: 'Italy', color: '#cbb89b', image: media.pagani, images: [media.pagani],
    story: 'The Huayra marries aerospace-inspired aerodynamics with the obsessive craftsmanship of a hand-built Italian atelier. Exposed mechanisms and tailored materials are celebrated instead of hidden.',
    design: 'Active aerodynamic flaps, organic body surfaces and jewel-like interior components create a machine that blurs the distinction between vehicle and sculpture.',
    tags: ['Art meets science', 'V12', 'Bespoke'],
  },
  {
    id: 'aston-martin-valkyrie', brand: 'Aston Martin', model: 'Valkyrie', short: 'Formula-level thinking, road-legal ambition.',
    price: {
      amount: 2_750_000, currency: 'GBP', year: 2020, basis: 'MSRP including options',
      note: 'Aston Martin reported this figure in pounds for the 150 allocated road cars in its 2020 offering memorandum.',
      publisher: 'Aston Martin offering memorandum (PDF)', source: 'https://www.astonmartin.com/-/media/corporate/corporatearchive/documents/bondholders/bond-offering-memorandum-final.pdf?rev=3f84dd5cb4d7404494f690636dafe3a9',
    },
    category: 'Hypercar', hp: 1139, topSpeed: null, acceleration: null, torque: '900 Nm (combined, approx.)',
    engine: '6.5L naturally aspirated V12 + hybrid', transmission: '7-speed sequential', drivetrain: 'RWD', weight: 'Approx. 1,270 kg', years: '2021–present',
    country: 'United Kingdom', color: '#6b8e79', image: media.valkyrie, images: [media.valkyrie],
    story: 'The Valkyrie is an almost unfiltered expression of racing principles adapted for the road. Aerodynamic tunnels dominate the underbody as the naturally aspirated V12 provides a distinctive soundtrack.',
    design: 'The dramatic teardrop cockpit and wide-open underfloor channels show how much of the car is shaped around downforce, airflow and the driver.',
    tags: ['V12 hybrid', 'Ground effect', 'Ultra-lightweight'],
  },
  {
    id: 'taycan-turbo-gt', brand: 'Porsche', model: 'Taycan Turbo GT', short: 'Electric acceleration with a track mentality.',
    price: {
      amount: 230_000, currency: 'USD', year: 2025, basis: 'U.S. base MSRP',
      note: 'Porsche quoted a separate $1,995 delivery, processing and handling fee. Taxes and dealer charges are additional.',
      publisher: 'Porsche Newsroom USA', source: 'https://newsroom.porsche.com/en_US/2024/products/Taycan-Turbo-GT-Attack-Mode-fastest-electric-series-production-car-Weathertech-Raceway-Laguna-Seca-35474.html',
    },
    category: 'Electric performance', hp: 1019, topSpeed: 290, acceleration: 2.3, torque: '1,340 Nm',
    engine: 'Dual-motor electric', transmission: '2-speed rear axle', drivetrain: 'AWD', weight: '2,290 kg (approx.)', years: '2024–present',
    country: 'Germany', color: '#98adbd', image: media.taycan, images: [media.taycan],
    story: 'The Taycan Turbo GT elevates the electric performance conversation with sustained track capability, powertrain management and chassis engineering developed around repeatable pace.',
    design: 'A low, sculpted form and a track-oriented aerodynamic package balance the clean lines of an EV with a purposeful motorsport identity.',
    tags: ['Electric', 'Dual-motor', 'Launch control'],
  },
  {
    id: 'mclaren-p1', brand: 'McLaren', model: 'P1', short: 'A hybrid pioneer that changed the conversation.',
    price: {
      amount: 1_150_000, currency: 'USD', year: 2013, basis: 'U.S. launch price',
      note: 'McLaren announced this U.S. base price in February 2013.',
      publisher: 'McLaren Automotive launch release', source: 'https://www.prnewswire.com/news-releases/mclaren-automotive-announces-performance-figures-for-the-mclaren-p1-193258031.html',
    },
    category: 'Hybrid', hp: 903, topSpeed: 350, acceleration: 2.8, torque: '900 Nm',
    engine: '3.8L twin-turbo V8 + electric motor', transmission: '7-speed dual-clutch', drivetrain: 'RWD', weight: '1,395 kg (dry)', years: '2013–2015',
    country: 'United Kingdom', color: '#e3a53a', image: media.p1, images: [media.p1],
    story: 'McLaren’s P1 was a landmark in the hybrid hypercar era, combining electric torque fill with a formidable V8 and race-derived aerodynamics.',
    design: 'Its winged silhouette, slender lighting signature and active aero devices made performance technology visually legible.',
    tags: ['Hybrid pioneer', 'Active aero', 'Limited production'],
  },
]

export const featuredCars = cars.slice(0, 6)
export const brands = [
  { name: 'Lamborghini', origin: 'Sant’Agata Bolognese, Italy', tagline: 'Unmistakably untamed.', image: media.aventador },
  { name: 'Ferrari', origin: 'Maranello, Italy', tagline: 'Passion with purpose.', image: media.ferrari },
  { name: 'Porsche', origin: 'Stuttgart, Germany', tagline: 'Precision through generations.', image: media.porsche },
  { name: 'McLaren', origin: 'Woking, United Kingdom', tagline: 'Born from the pursuit of speed.', image: media.mclaren },
  { name: 'Bugatti', origin: 'Molsheim, France', tagline: 'The extraordinary, mastered.', image: media.bugatti },
  { name: 'Koenigsegg', origin: 'Ängelholm, Sweden', tagline: 'Innovation without convention.', image: media.jesko },
  { name: 'Pagani', origin: 'San Cesario sul Panaro, Italy', tagline: 'The art of science.', image: media.pagani },
  { name: 'Aston Martin', origin: 'Gaydon, United Kingdom', tagline: 'Beauty and performance.', image: media.valkyrie },
]

export const formatSpeed = (car) => car.topSpeed ? `${car.topSpeed} km/h` : 'Undisclosed'
export const formatAcceleration = (car) => car.acceleration ? `${car.acceleration.toFixed(1)} s` : 'Undisclosed'
export const carImage = (car, width = 1600) => commons(car.image, width)
