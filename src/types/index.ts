export interface Driver {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  number: string;
  nationality: string;
  team: string;
  image: string;
  biography: string;
  dateOfBirth: string;
  placeOfBirth: string;
  championships: number;
  raceWins: number;
  podiums: number;
  points: number;
  socialMedia: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface Team {
  id: string;
  name: string;
  fullName: string;
  nationality: string;
  teamPrincipal: string;
  founded: number;
  base: string;
  logo: string;
  car: string;
  primaryColor: string;
  secondaryColor: string;
  drivers: string[];
  championships: {
    constructors: number;
    drivers: number;
  };
  stats: {
    raceWins: number;
    podiums: number;
    poles: number;
    fastestLaps: number;
    points: number;
  };
  description: string;
  website: string;
  social: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface Car {
  id: string;
  name: string;
  fullName: string;
  team: string;
  teamId: string;
  year: number;
  image: string;
  engine: {
    manufacturer: string;
    type: string;
    displacement: string;
    cylinders: number;
    maxRPM: number;
    powerOutput: string;
  };
  chassis: {
    manufacturer: string;
    model: string;
    construction: string;
    wheelbase: string;
    weight: string;
  };
  aerodynamics: {
    frontWing: string;
    rearWing: string;
    dragCoefficient: string;
    downforce: string;
  };
  transmission: {
    type: string;
    gears: number;
    manufacturer: string;
  };
  suspension: {
    front: string;
    rear: string;
  };
  brakes: {
    manufacturer: string;
    type: string;
    discDiameter: string;
  };
  tires: {
    supplier: string;
    compounds: string[];
    diameter: string;
  };
  fuel: {
    capacity: string;
    type: string;
  };
  electronics: {
    ecu: string;
    telemetry: string;
    drs: boolean;
    ers: {
      mguK: string;
      mguH: string;
      battery: string;
    };
  };
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  performance: {
    topSpeed: string;
    acceleration: string;
    lapRecord?: string;
    circuit?: string;
  };
  drivers: string[];
  primaryColor: string;
  secondaryColor: string;
}

export interface LogoHistory {
  year: number;
  logo: string;
  description: string;
}

export interface Race {
  id: string;
  name: string;
  country: string;
  circuit: string;
  date: string;
  time?: string;
  completed: boolean;
  winner?: string;
  winnerTime?: string;
  polePosition?: {
    driver: string;
    team: string;
    time: string;
  };
  results?: RaceResult[];
  coordinates: {
    lat: number;
    lng: number;
  };
  sessions?: {
    fp1: { date: string; time: string };
    fp2: { date: string; time: string };
    fp3: { date: string; time: string };
    qualifying: { date: string; time: string };
    race: { date: string; time: string };
  };
  trackInfo?: {
    length: string;
    turns: number;
    lapRecord: string;
    lapRecordHolder: string;
    drsZones: number;
  };
  weather?: {
    temperature: string;
    conditions: string;
  };
}

export interface RaceResult {
  position: number;
  driver: string;
  team: string;
  time?: string;
  gap?: string;
  points: number;
  laps: number;
  status: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishDate: string;
  image: string;
  category: 'driver' | 'team' | 'race' | 'general';
  tags: string[];
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  type: 'driver' | 'team' | 'race';
  description: string;
  url: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  year?: number;
  event?: string;
  category: string;
}