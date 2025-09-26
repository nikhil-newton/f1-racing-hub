export interface Circuit {
  id: string;
  name: string;
  venue: string;
  grandPrix: string;
  country: string;
  city: string;
  firstGrandPrix: number;
  trackLength: number; // in kilometers
  numberOfLaps: number;
  raceDistance: number; // in kilometers
  lapRecord: {
    time: string;
    driver: string;
    team: string;
    year: number;
  };
  trackType: 'Street Circuit' | 'Permanent Circuit' | 'Semi-Permanent';
  direction: 'Clockwise' | 'Counterclockwise';
  corners: number;
  drsZones: number;
  elevation: {
    highest: number; // in meters
    lowest: number; // in meters
    variation: number; // in meters
  };
  averageSpeed: number; // km/h
  description: string;
  characteristics: string[];
  notableFeatures: string[];
  image: string; // Circuit layout image
  flag: string; // Country flag
}

export const circuits: Circuit[] = [
  {
    id: 'bahrain',
    name: 'Bahrain International Circuit',
    venue: 'Sakhir',
    grandPrix: 'Bahrain Grand Prix',
    country: 'Bahrain',
    city: 'Sakhir',
    firstGrandPrix: 2004,
    trackLength: 5.412,
    numberOfLaps: 57,
    raceDistance: 308.238,
    lapRecord: {
      time: '1:31.447',
      driver: 'Pedro de la Rosa',
      team: 'McLaren',
      year: 2005
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 15,
    drsZones: 3,
    elevation: {
      highest: 35,
      lowest: 32,
      variation: 3
    },
    averageSpeed: 205.8,
    description: 'The Bahrain International Circuit is known for its challenging layout in the desert, featuring long straights and technical corners.',
    characteristics: ['High-speed straights', 'Technical corners', 'Desert conditions', 'Night race'],
    notableFeatures: ['Desert setting', 'State-of-the-art facilities', 'Multiple track configurations'],
    image: '/circuits/bahrain.svg',
    flag: '🇧🇭'
  },
  {
    id: 'saudi-arabia',
    name: 'Jeddah Corniche Circuit',
    venue: 'Jeddah',
    grandPrix: 'Saudi Arabian Grand Prix',
    country: 'Saudi Arabia',
    city: 'Jeddah',
    firstGrandPrix: 2021,
    trackLength: 6.174,
    numberOfLaps: 50,
    raceDistance: 308.450,
    lapRecord: {
      time: '1:30.734',
      driver: 'Lewis Hamilton',
      team: 'Mercedes',
      year: 2021
    },
    trackType: 'Street Circuit',
    direction: 'Counterclockwise',
    corners: 27,
    drsZones: 3,
    elevation: {
      highest: 15,
      lowest: 5,
      variation: 10
    },
    averageSpeed: 252.8,
    description: 'The fastest street circuit on the F1 calendar, featuring high speeds and challenging walls close to the track.',
    characteristics: ['High-speed street circuit', 'Night race', 'Coastal setting', 'Challenging barriers'],
    notableFeatures: ['Fastest street circuit', 'Red Sea coastline', 'Modern facilities'],
    image: '/circuits/saudi-arabia.svg',
    flag: '🇸🇦'
  },
  {
    id: 'australia',
    name: 'Melbourne Grand Prix Circuit',
    venue: 'Albert Park',
    grandPrix: 'Australian Grand Prix',
    country: 'Australia',
    city: 'Melbourne',
    firstGrandPrix: 1996,
    trackLength: 5.278,
    numberOfLaps: 58,
    raceDistance: 306.124,
    lapRecord: {
      time: '1:20.260',
      driver: 'Charles Leclerc',
      team: 'Ferrari',
      year: 2024
    },
    trackType: 'Semi-Permanent',
    direction: 'Clockwise',
    corners: 14,
    drsZones: 4,
    elevation: {
      highest: 15,
      lowest: 2,
      variation: 13
    },
    averageSpeed: 223.8,
    description: 'A semi-permanent circuit around Albert Park Lake, known for its challenging layout and scenic surroundings.',
    characteristics: ['Park setting', 'Lake views', 'High-speed sections', 'Technical corners'],
    notableFeatures: ['Albert Park Lake', 'City skyline views', 'Traditional season opener'],
    image: '/circuits/australia.svg',
    flag: '🇦🇺'
  },
  {
    id: 'japan',
    name: 'Suzuka International Racing Course',
    venue: 'Suzuka',
    grandPrix: 'Japanese Grand Prix',
    country: 'Japan',
    city: 'Suzuka',
    firstGrandPrix: 1987,
    trackLength: 5.807,
    numberOfLaps: 53,
    raceDistance: 307.471,
    lapRecord: {
      time: '1:30.983',
      driver: 'Lewis Hamilton',
      team: 'Mercedes',
      year: 2019
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 18,
    drsZones: 2,
    elevation: {
      highest: 45,
      lowest: 15,
      variation: 30
    },
    averageSpeed: 218.9,
    description: 'One of the most challenging and respected circuits on the calendar, featuring the famous figure-8 layout.',
    characteristics: ['Figure-8 layout', 'Challenging corners', 'Elevation changes', 'Technical driving'],
    notableFeatures: ['130R corner', 'Spoon Curve', 'Degner curves', 'Casio Triangle'],
    image: '/circuits/japan.svg',
    flag: '🇯🇵'
  },
  {
    id: 'china',
    name: 'Shanghai International Circuit',
    venue: 'Shanghai',
    grandPrix: 'Chinese Grand Prix',
    country: 'China',
    city: 'Shanghai',
    firstGrandPrix: 2004,
    trackLength: 5.451,
    numberOfLaps: 56,
    raceDistance: 305.066,
    lapRecord: {
      time: '1:32.238',
      driver: 'Michael Schumacher',
      team: 'Ferrari',
      year: 2004
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 16,
    drsZones: 2,
    elevation: {
      highest: 25,
      lowest: 5,
      variation: 20
    },
    averageSpeed: 205.3,
    description: 'A modern circuit with long straights and challenging corner combinations, designed by Hermann Tilke.',
    characteristics: ['Long main straight', 'Technical infield', 'Modern facilities', 'Challenging turns'],
    notableFeatures: ['1.2km main straight', 'Turn 1 hairpin', 'Snail shell design'],
    image: '/circuits/china.svg',
    flag: '🇨🇳'
  },
  {
    id: 'miami',
    name: 'Miami International Autodrome',
    venue: 'Miami Gardens',
    grandPrix: 'Miami Grand Prix',
    country: 'United States',
    city: 'Miami',
    firstGrandPrix: 2022,
    trackLength: 5.41,
    numberOfLaps: 57,
    raceDistance: 308.326,
    lapRecord: {
      time: '1:31.361',
      driver: 'Max Verstappen',
      team: 'Red Bull Racing',
      year: 2023
    },
    trackType: 'Semi-Permanent',
    direction: 'Counterclockwise',
    corners: 19,
    drsZones: 3,
    elevation: {
      highest: 8,
      lowest: 3,
      variation: 5
    },
    averageSpeed: 223.9,
    description: 'A new addition to the F1 calendar, built around the Hard Rock Stadium with a unique layout.',
    characteristics: ['Stadium integration', 'High-speed sections', 'Technical corners', 'Modern facilities'],
    notableFeatures: ['Hard Rock Stadium', 'Unique elevation changes', 'Florida atmosphere'],
    image: '/circuits/miami.svg',
    flag: '🇺🇸'
  },
  {
    id: 'emilia-romagna',
    name: 'Autodromo Enzo e Dino Ferrari',
    venue: 'Imola',
    grandPrix: 'Emilia Romagna Grand Prix',
    country: 'Italy',
    city: 'Imola',
    firstGrandPrix: 1980,
    trackLength: 4.909,
    numberOfLaps: 63,
    raceDistance: 309.049,
    lapRecord: {
      time: '1:15.484',
      driver: 'Lewis Hamilton',
      team: 'Mercedes',
      year: 2020
    },
    trackType: 'Permanent Circuit',
    direction: 'Counterclockwise',
    corners: 19,
    drsZones: 2,
    elevation: {
      highest: 50,
      lowest: 35,
      variation: 15
    },
    averageSpeed: 205.6,
    description: 'A historic circuit with challenging corners and elevation changes, named after Ferrari founder Enzo Ferrari.',
    characteristics: ['Historic venue', 'Challenging layout', 'Elevation changes', 'Technical corners'],
    notableFeatures: ['Tamburello corner', 'Villeneuve chicane', 'Tosa corner'],
    image: '/circuits/imola.svg',
    flag: '🇮🇹'
  },
  {
    id: 'monaco',
    name: 'Circuit de Monaco',
    venue: 'Monte Carlo',
    grandPrix: 'Monaco Grand Prix',
    country: 'Monaco',
    city: 'Monte Carlo',
    firstGrandPrix: 1950,
    trackLength: 3.337,
    numberOfLaps: 78,
    raceDistance: 260.286,
    lapRecord: {
      time: '1:12.909',
      driver: 'Lewis Hamilton',
      team: 'Mercedes',
      year: 2021
    },
    trackType: 'Street Circuit',
    direction: 'Clockwise',
    corners: 19,
    drsZones: 1,
    elevation: {
      highest: 42,
      lowest: 7,
      variation: 35
    },
    averageSpeed: 161.3,
    description: 'The most prestigious race on the F1 calendar, featuring narrow streets and challenging barriers.',
    characteristics: ['Narrow streets', 'Prestigious history', 'Elevation changes', 'Challenging overtaking'],
    notableFeatures: ['Casino corner', 'Swimming pool section', 'Tunnel', 'Rascasse corner'],
    image: '/circuits/monaco.svg',
    flag: '🇲🇨'
  },
  {
    id: 'canada',
    name: 'Circuit Gilles-Villeneuve',
    venue: 'Montreal',
    grandPrix: 'Canadian Grand Prix',
    country: 'Canada',
    city: 'Montreal',
    firstGrandPrix: 1978,
    trackLength: 4.361,
    numberOfLaps: 70,
    raceDistance: 305.270,
    lapRecord: {
      time: '1:13.078',
      driver: 'Valtteri Bottas',
      team: 'Mercedes',
      year: 2019
    },
    trackType: 'Semi-Permanent',
    direction: 'Clockwise',
    corners: 14,
    drsZones: 3,
    elevation: {
      highest: 25,
      lowest: 18,
      variation: 7
    },
    averageSpeed: 230.1,
    description: 'Located on Île Notre-Dame, known for its high-speed straights and challenging chicanes.',
    characteristics: ['Island circuit', 'High-speed straights', 'Wall of Champions', 'Technical chicanes'],
    notableFeatures: ['Wall of Champions', 'Casino hairpin', 'Long back straight'],
    image: '/circuits/canada.svg',
    flag: '🇨🇦'
  },
  {
    id: 'spain',
    name: 'Circuit de Barcelona-Catalunya',
    venue: 'Montmeló',
    grandPrix: 'Spanish Grand Prix',
    country: 'Spain',
    city: 'Barcelona',
    firstGrandPrix: 1991,
    trackLength: 4.675,
    numberOfLaps: 66,
    raceDistance: 308.424,
    lapRecord: {
      time: '1:18.149',
      driver: 'Max Verstappen',
      team: 'Red Bull Racing',
      year: 2023
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 16,
    drsZones: 2,
    elevation: {
      highest: 130,
      lowest: 95,
      variation: 35
    },
    averageSpeed: 195.4,
    description: 'A technical circuit with a mix of high and low-speed corners, traditionally used for pre-season testing.',
    characteristics: ['Technical layout', 'Testing venue', 'Elevation changes', 'Challenging corners'],
    notableFeatures: ['Turn 3 uphill', 'Stadium section', 'Long main straight'],
    image: '/circuits/spain.svg',
    flag: '🇪🇸'
  },
  {
    id: 'austria',
    name: 'Red Bull Ring',
    venue: 'Spielberg',
    grandPrix: 'Austrian Grand Prix',
    country: 'Austria',
    city: 'Spielberg',
    firstGrandPrix: 1970,
    trackLength: 4.318,
    numberOfLaps: 71,
    raceDistance: 306.452,
    lapRecord: {
      time: '1:05.619',
      driver: 'Carlos Sainz',
      team: 'Ferrari',
      year: 2020
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 10,
    drsZones: 3,
    elevation: {
      highest: 678,
      lowest: 650,
      variation: 28
    },
    averageSpeed: 237.3,
    description: 'A short, fast circuit in the Austrian mountains with stunning alpine scenery.',
    characteristics: ['Mountain setting', 'Short lap', 'High altitude', 'Fast corners'],
    notableFeatures: ['Alpine scenery', 'Steep elevation changes', 'Red Bull branding'],
    image: '/circuits/austria.svg',
    flag: '🇦🇹'
  },
  {
    id: 'britain',
    name: 'Silverstone Circuit',
    venue: 'Silverstone',
    grandPrix: 'British Grand Prix',
    country: 'United Kingdom',
    city: 'Silverstone',
    firstGrandPrix: 1950,
    trackLength: 5.891,
    numberOfLaps: 52,
    raceDistance: 306.198,
    lapRecord: {
      time: '1:27.097',
      driver: 'Max Verstappen',
      team: 'Red Bull Racing',
      year: 2020
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 18,
    drsZones: 2,
    elevation: {
      highest: 160,
      lowest: 140,
      variation: 20
    },
    averageSpeed: 233.3,
    description: 'The home of British motorsport, featuring high-speed corners and a rich F1 history.',
    characteristics: ['High-speed corners', 'Historic venue', 'Challenging layout', 'Home of F1'],
    notableFeatures: ['Copse corner', 'Maggotts and Becketts', 'Stowe corner', 'Club corner'],
    image: '/circuits/britain.svg',
    flag: '🇬🇧'
  },
  {
    id: 'hungary',
    name: 'Hungaroring',
    venue: 'Mogyoród',
    grandPrix: 'Hungarian Grand Prix',
    country: 'Hungary',
    city: 'Budapest',
    firstGrandPrix: 1986,
    trackLength: 4.381,
    numberOfLaps: 70,
    raceDistance: 306.630,
    lapRecord: {
      time: '1:16.627',
      driver: 'Lewis Hamilton',
      team: 'Mercedes',
      year: 2020
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 14,
    drsZones: 2,
    elevation: {
      highest: 200,
      lowest: 160,
      variation: 40
    },
    averageSpeed: 195.4,
    description: 'A twisty, technical circuit that is challenging for overtaking, often compared to Monaco.',
    characteristics: ['Technical layout', 'Difficult overtaking', 'Dusty surface', 'Hot conditions'],
    notableFeatures: ['Turn 1 uphill', 'Amphitheater setting', 'Natural bowl'],
    image: '/circuits/hungary.svg',
    flag: '🇭🇺'
  },
  {
    id: 'belgium',
    name: 'Circuit de Spa-Francorchamps',
    venue: 'Spa-Francorchamps',
    grandPrix: 'Belgian Grand Prix',
    country: 'Belgium',
    city: 'Spa',
    firstGrandPrix: 1950,
    trackLength: 7.004,
    numberOfLaps: 44,
    raceDistance: 308.052,
    lapRecord: {
      time: '1:46.286',
      driver: 'Valtteri Bottas',
      team: 'Mercedes',
      year: 2018
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 19,
    drsZones: 2,
    elevation: {
      highest: 480,
      lowest: 380,
      variation: 100
    },
    averageSpeed: 234.9,
    description: 'One of the most challenging and respected circuits in F1, known for its length and elevation changes.',
    characteristics: ['Longest circuit', 'Weather variations', 'High-speed corners', 'Elevation changes'],
    notableFeatures: ['Eau Rouge/Raidillon', 'Blanchimont', 'Kemmel straight', 'Pouhon'],
    image: '/circuits/belgium.svg',
    flag: '🇧🇪'
  },
  {
    id: 'netherlands',
    name: 'Circuit Zandvoort',
    venue: 'Zandvoort',
    grandPrix: 'Dutch Grand Prix',
    country: 'Netherlands',
    city: 'Zandvoort',
    firstGrandPrix: 1952,
    trackLength: 4.259,
    numberOfLaps: 72,
    raceDistance: 306.587,
    lapRecord: {
      time: '1:11.097',
      driver: 'Lewis Hamilton',
      team: 'Mercedes',
      year: 2021
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 14,
    drsZones: 2,
    elevation: {
      highest: 56,
      lowest: 5,
      variation: 51
    },
    averageSpeed: 228.8,
    description: 'A historic seaside circuit with banked corners and challenging layout near the North Sea.',
    characteristics: ['Seaside location', 'Banked corners', 'Narrow track', 'Orange Army support'],
    notableFeatures: ['Banked Turn 3', 'Hugenholtzbocht', 'Tarzan corner'],
    image: '/circuits/netherlands.svg',
    flag: '🇳🇱'
  },
  {
    id: 'italy',
    name: 'Autodromo Nazionale Monza',
    venue: 'Monza',
    grandPrix: 'Italian Grand Prix',
    country: 'Italy',
    city: 'Monza',
    firstGrandPrix: 1950,
    trackLength: 5.793,
    numberOfLaps: 53,
    raceDistance: 306.720,
    lapRecord: {
      time: '1:21.046',
      driver: 'Rubens Barrichello',
      team: 'Ferrari',
      year: 2004
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 11,
    drsZones: 3,
    elevation: {
      highest: 162,
      lowest: 146,
      variation: 16
    },
    averageSpeed: 263.2,
    description: 'The Temple of Speed, known for its high-speed straights and passionate Italian fans.',
    characteristics: ['High speeds', 'Long straights', 'Historic venue', 'Ferrari heritage'],
    notableFeatures: ['Parabolica', 'Lesmo corners', 'Ascari chicane', 'Monza banking'],
    image: '/circuits/italy.svg',
    flag: '🇮🇹'
  },
  {
    id: 'azerbaijan',
    name: 'Baku City Circuit',
    venue: 'Baku',
    grandPrix: 'Azerbaijan Grand Prix',
    country: 'Azerbaijan',
    city: 'Baku',
    firstGrandPrix: 2016,
    trackLength: 6.003,
    numberOfLaps: 51,
    raceDistance: 306.049,
    lapRecord: {
      time: '1:43.009',
      driver: 'Charles Leclerc',
      team: 'Ferrari',
      year: 2019
    },
    trackType: 'Street Circuit',
    direction: 'Counterclockwise',
    corners: 20,
    drsZones: 2,
    elevation: {
      highest: 35,
      lowest: 7,
      variation: 28
    },
    averageSpeed: 215.8,
    description: 'A unique street circuit combining historic old town with modern city sections and long straights.',
    characteristics: ['Street circuit', 'Historic sections', 'Long straight', 'Narrow castle section'],
    notableFeatures: ['Longest straight', 'Castle section', 'Turn 15 hairpin', 'Modern city backdrop'],
    image: '/circuits/azerbaijan.svg',
    flag: '🇦🇿'
  },
  {
    id: 'singapore',
    name: 'Marina Bay Street Circuit',
    venue: 'Marina Bay',
    grandPrix: 'Singapore Grand Prix',
    country: 'Singapore',
    city: 'Singapore',
    firstGrandPrix: 2008,
    trackLength: 5.063,
    numberOfLaps: 61,
    raceDistance: 308.828,
    lapRecord: {
      time: '1:35.867',
      driver: 'Lewis Hamilton',
      team: 'Mercedes',
      year: 2023
    },
    trackType: 'Street Circuit',
    direction: 'Counterclockwise',
    corners: 23,
    drsZones: 3,
    elevation: {
      highest: 18,
      lowest: 12,
      variation: 6
    },
    averageSpeed: 172.1,
    description: 'The original night race in F1, featuring a challenging street circuit through Singapore\'s city center.',
    characteristics: ['Night race', 'Street circuit', 'High humidity', 'City lights'],
    notableFeatures: ['Singapore Sling', 'Anderson Bridge', 'Marina Bay', 'City skyline'],
    image: '/circuits/singapore.svg',
    flag: '🇸🇬'
  },
  {
    id: 'usa',
    name: 'Circuit of the Americas',
    venue: 'Austin',
    grandPrix: 'United States Grand Prix',
    country: 'United States',
    city: 'Austin',
    firstGrandPrix: 2012,
    trackLength: 5.513,
    numberOfLaps: 56,
    raceDistance: 308.405,
    lapRecord: {
      time: '1:36.169',
      driver: 'Charles Leclerc',
      team: 'Ferrari',
      year: 2019
    },
    trackType: 'Permanent Circuit',
    direction: 'Counterclockwise',
    corners: 20,
    drsZones: 2,
    elevation: {
      highest: 287,
      lowest: 230,
      variation: 57
    },
    averageSpeed: 195.8,
    description: 'A modern circuit with significant elevation changes and challenging corner combinations.',
    characteristics: ['Elevation changes', 'Turn 1 uphill', 'Stadium section', 'Modern facilities'],
    notableFeatures: ['Turn 1 climb', 'Esses section', 'Stadium complex', 'Observation tower'],
    image: '/circuits/usa.svg',
    flag: '🇺🇸'
  },
  {
    id: 'mexico',
    name: 'Autódromo Hermanos Rodríguez',
    venue: 'Mexico City',
    grandPrix: 'Mexico City Grand Prix',
    country: 'Mexico',
    city: 'Mexico City',
    firstGrandPrix: 1963,
    trackLength: 4.304,
    numberOfLaps: 71,
    raceDistance: 305.354,
    lapRecord: {
      time: '1:17.774',
      driver: 'Valtteri Bottas',
      team: 'Mercedes',
      year: 2021
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 17,
    drsZones: 3,
    elevation: {
      highest: 2240,
      lowest: 2230,
      variation: 10
    },
    averageSpeed: 206.5,
    description: 'Located at high altitude in Mexico City, affecting aerodynamics and engine performance.',
    characteristics: ['High altitude', 'Thin air', 'Stadium section', 'Long straight'],
    notableFeatures: ['Foro Sol stadium', 'Peraltada corner', 'High altitude effects'],
    image: '/circuits/mexico.svg',
    flag: '🇲🇽'
  },
  {
    id: 'brazil',
    name: 'Autódromo José Carlos Pace',
    venue: 'Interlagos',
    grandPrix: 'São Paulo Grand Prix',
    country: 'Brazil',
    city: 'São Paulo',
    firstGrandPrix: 1973,
    trackLength: 4.309,
    numberOfLaps: 71,
    raceDistance: 305.909,
    lapRecord: {
      time: '1:10.540',
      driver: 'Valtteri Bottas',
      team: 'Mercedes',
      year: 2018
    },
    trackType: 'Permanent Circuit',
    direction: 'Counterclockwise',
    corners: 15,
    drsZones: 2,
    elevation: {
      highest: 800,
      lowest: 760,
      variation: 40
    },
    averageSpeed: 213.8,
    description: 'A challenging circuit with elevation changes and unpredictable weather, often producing exciting races.',
    characteristics: ['Elevation changes', 'Weather variations', 'Passionate fans', 'Historic venue'],
    notableFeatures: ['Senna S', 'Juncão corner', 'Curva do Sol', 'Arquibancadas'],
    image: '/circuits/brazil.svg',
    flag: '🇧🇷'
  },
  {
    id: 'las-vegas',
    name: 'Las Vegas Strip Circuit',
    venue: 'Las Vegas Strip',
    grandPrix: 'Las Vegas Grand Prix',
    country: 'United States',
    city: 'Las Vegas',
    firstGrandPrix: 2023,
    trackLength: 6.201,
    numberOfLaps: 50,
    raceDistance: 310.05,
    lapRecord: {
      time: '1:35.490',
      driver: 'Oscar Piastri',
      team: 'McLaren',
      year: 2023
    },
    trackType: 'Street Circuit',
    direction: 'Counterclockwise',
    corners: 17,
    drsZones: 3,
    elevation: {
      highest: 610,
      lowest: 605,
      variation: 5
    },
    averageSpeed: 240.8,
    description: 'A spectacular night race through the famous Las Vegas Strip with high speeds and glamorous setting.',
    characteristics: ['Night race', 'Strip location', 'High speeds', 'Entertainment capital'],
    notableFeatures: ['Strip straight', 'Sphere corner', 'Casino backdrop', 'High roller views'],
    image: '/circuits/las-vegas.svg',
    flag: '🇺🇸'
  },
  {
    id: 'qatar',
    name: 'Lusail International Circuit',
    venue: 'Lusail',
    grandPrix: 'Qatar Grand Prix',
    country: 'Qatar',
    city: 'Lusail',
    firstGrandPrix: 2021,
    trackLength: 5.419,
    numberOfLaps: 57,
    raceDistance: 308.611,
    lapRecord: {
      time: '1:24.319',
      driver: 'Max Verstappen',
      team: 'Red Bull Racing',
      year: 2023
    },
    trackType: 'Permanent Circuit',
    direction: 'Clockwise',
    corners: 16,
    drsZones: 2,
    elevation: {
      highest: 25,
      lowest: 15,
      variation: 10
    },
    averageSpeed: 214.7,
    description: 'A modern circuit in the desert with challenging medium and high-speed corners.',
    characteristics: ['Desert setting', 'Modern facilities', 'Technical layout', 'Hot conditions'],
    notableFeatures: ['Desert backdrop', 'Modern architecture', 'Stadium section'],
    image: '/circuits/qatar.svg',
    flag: '🇶🇦'
  },
  {
    id: 'abu-dhabi',
    name: 'Yas Marina Circuit',
    venue: 'Yas Island',
    grandPrix: 'Abu Dhabi Grand Prix',
    country: 'United Arab Emirates',
    city: 'Abu Dhabi',
    firstGrandPrix: 2009,
    trackLength: 5.281,
    numberOfLaps: 58,
    raceDistance: 306.183,
    lapRecord: {
      time: '1:26.103',
      driver: 'Max Verstappen',
      team: 'Red Bull Racing',
      year: 2021
    },
    trackType: 'Permanent Circuit',
    direction: 'Counterclockwise',
    corners: 16,
    drsZones: 2,
    elevation: {
      highest: 10,
      lowest: 3,
      variation: 7
    },
    averageSpeed: 195.8,
    description: 'The season finale venue featuring a twilight race with stunning architecture and marina views.',
    characteristics: ['Twilight race', 'Marina setting', 'Modern architecture', 'Season finale'],
    notableFeatures: ['Yas Hotel', 'Marina section', 'Modern facilities', 'Twilight atmosphere'],
    image: '/circuits/abu-dhabi.svg',
    flag: '🇦🇪'
  }
];

export const getCircuitById = (id: string): Circuit | undefined => {
  return circuits.find(circuit => circuit.id === id);
};

export const getCircuitsByCountry = (country: string): Circuit[] => {
  return circuits.filter(circuit => 
    circuit.country.toLowerCase().includes(country.toLowerCase())
  );
};

export const getCircuitsByType = (type: Circuit['trackType']): Circuit[] => {
  return circuits.filter(circuit => circuit.trackType === type);
};

export const searchCircuits = (query: string): Circuit[] => {
  const searchTerm = query.toLowerCase();
  return circuits.filter(circuit =>
    circuit.name.toLowerCase().includes(searchTerm) ||
    circuit.venue.toLowerCase().includes(searchTerm) ||
    circuit.grandPrix.toLowerCase().includes(searchTerm) ||
    circuit.country.toLowerCase().includes(searchTerm) ||
    circuit.city.toLowerCase().includes(searchTerm) ||
    circuit.lapRecord.driver.toLowerCase().includes(searchTerm) ||
    circuit.lapRecord.team.toLowerCase().includes(searchTerm)
  );
};