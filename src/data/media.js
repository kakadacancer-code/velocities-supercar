// Photographs are served at a browser-friendly width from Wikimedia Commons.
// Credits and licensing links are displayed in /credits and CREDITING.md.
export const commons = (file, width = 1600) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file).replace(/%2F/g, '/')}?width=${width}`

export const media = {
  aventador: 'Lamborghini Aventador SVJ.jpg',
  aventadorAlt: '2020 Lamborghini Aventador SVJ.jpg',
  aventadorSide: 'Lamborghini Aventador SVJ (94228).jpg',
  ferrari: 'FERRARI SF90 Stradale.jpg',
  ferrariAlt: '2023 Ferrari SF90 Stradale.jpg',
  mclaren: 'McLaren 765LT.jpg',
  mclarenAlt: '2021 McLaren 765LT.jpg',
  porsche: 'Porsche 911 GT3 RS 992.jpg',
  porscheAlt: 'Porsche 911 GT3 RS 992 1.jpg',
  bugatti: 'A Bugatti Chiron.jpg',
  bugattiAlt: 'Blue Bugatti Chiron.jpg',
  jesko: 'Koenigsegg Jesko.jpg',
  jeskoAlt: 'Koenigsegg Jesko 19.jpg',
  pagani: 'Pagani Huayra.jpg',
  valkyrie: 'Aston Martin Valkyrie.jpg',
  taycan: '2024 Porsche Taycan Turbo GT.jpg',
  p1: 'McLaren P1.jpg',
}

export const photoCredits = [
  ['Lamborghini Aventador SVJ.jpg', 'MrWalkr', 'CC BY-SA 4.0'],
  ['2020 Lamborghini Aventador SVJ.jpg', 'Calreyn88', 'CC BY-SA 4.0'],
  ['Lamborghini Aventador SVJ (94228).jpg', 'Calreyn88', 'CC BY-SA 4.0'],
  ['FERRARI SF90 Stradale.jpg', 'Tokumeigakarinoaoshima', 'CC BY-SA 4.0'],
  ['2023 Ferrari SF90 Stradale.jpg', 'Calreyn88', 'CC BY-SA 4.0'],
  ['McLaren 765LT.jpg', 'Calreyn88', 'CC BY-SA 4.0'],
  ['2021 McLaren 765LT.jpg', 'Calreyn88', 'CC BY-SA 4.0'],
  ['Porsche 911 GT3 RS 992.jpg', 'Calreyn88', 'CC BY-SA 4.0'],
  ['Porsche 911 GT3 RS 992 1.jpg', 'Calreyn88', 'CC BY-SA 4.0'],
  ['A Bugatti Chiron.jpg', 'MrWalkr', 'CC BY-SA 4.0'],
  ['Blue Bugatti Chiron.jpg', 'MrWalkr', 'CC BY-SA 4.0'],
  ['Koenigsegg Jesko.jpg', 'MrWalkr', 'CC BY-SA 4.0'],
  ['Koenigsegg Jesko 19.jpg', 'Calreyn88', 'CC BY-SA 4.0'],
  ['Pagani Huayra.jpg', 'ian mcwilliams', 'CC BY 2.0'],
  ['Aston Martin Valkyrie.jpg', 'MrWalkr', 'CC BY-SA 4.0'],
  ['2024 Porsche Taycan Turbo GT.jpg', 'Calreyn88', 'CC BY-SA 4.0'],
  ['McLaren P1.jpg', 'Axion23 / Tony Patt (crop)', 'CC BY 2.0'],
].map(([file, author, license]) => ({
  file, author, license,
  url: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replace(/%20/g, '_')}`,
}))

// Commission-style generated illustrations are bundled separately from credited photographs.
const artwork = new Map([
  [media.aventador, 'aventador-svj'], [media.ferrari, 'sf90-stradale'],
  [media.mclaren, 'mclaren-765lt'], [media.porsche, '911-gt3-rs'],
  [media.bugatti, 'bugatti-chiron'], [media.jesko, 'koenigsegg-jesko'],
  [media.pagani, 'pagani-huayra'], [media.valkyrie, 'aston-martin-valkyrie'],
  [media.taycan, 'taycan-turbo-gt'], [media.p1, 'mclaren-p1'],
])

export function editorialImage(file, width) {
  const model = artwork.get(file)
  return model ? `/images/${model}.webp` : commons(file, width)
}
