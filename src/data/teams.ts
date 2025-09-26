import { Team } from '../types';

export const teamsData: Team[] = [
  {
    id: "red-bull",
    name: "Red Bull Racing",
    fullName: "Oracle Red Bull Racing",
    nationality: "Austrian",
    teamPrincipal: "Christian Horner",
    founded: 2005,
    base: "Milton Keynes, United Kingdom",
    logo: "https://logoeps.com/wp-content/uploads/2016/03/red-bull-racing-vector-logo.png",
    car: "https://cdn.formula1.com/content/dam/fom-website/teams/2025/red-bull-racing-car.png",
    primaryColor: "#3671C6",
    secondaryColor: "#FF1801",
    drivers: ["Max Verstappen", "Sergio Pérez"],
    championships: {
      constructors: 6,
      drivers: 7
    },
    stats: {
      raceWins: 118,
      podiums: 256,
      poles: 85,
      fastestLaps: 67,
      points: 3842
    },
    description: "Red Bull Racing is the most successful team of the modern era, dominating Formula 1 with their innovative approach and exceptional driver lineup led by four-time world champion Max Verstappen.",
    website: "https://www.redbullracing.com",
    social: {
      twitter: "@redbullracing",
      instagram: "@redbullracing",
      facebook: "redbullracing"
    }
  },
  {
    id: "ferrari",
    name: "Ferrari",
    fullName: "Scuderia Ferrari",
    nationality: "Italian",
    teamPrincipal: "Frédéric Vasseur",
    founded: 1950,
    base: "Maranello, Italy",
    logo: "https://cdn.worldvectorlogo.com/logos/ferrari-15.svg",
    car: "https://cdn.formula1.com/content/dam/fom-website/teams/2025/ferrari-car.png",
    primaryColor: "#E8002D",
    secondaryColor: "#000000",
    drivers: ["Lewis Hamilton", "Charles Leclerc"],
    championships: {
      constructors: 16,
      drivers: 15
    },
    stats: {
      raceWins: 243,
      podiums: 804,
      poles: 249,
      fastestLaps: 260,
      points: 6247
    },
    description: "Ferrari is the most iconic and successful team in Formula 1 history. The Prancing Horse continues to be a symbol of speed, passion, and Italian excellence, now with Lewis Hamilton joining Charles Leclerc.",
    website: "https://www.ferrari.com/formula1",
    social: {
      twitter: "@scuderiaferrari",
      instagram: "@scuderiaferrari",
      facebook: "ScuderiaFerrari"
    }
  },
  {
    id: "mercedes",
    name: "Mercedes",
    fullName: "Mercedes-AMG PETRONAS F1 Team",
    nationality: "German",
    teamPrincipal: "Toto Wolff",
    founded: 2010,
    base: "Brackley, United Kingdom",
    logo: "https://cdn.worldvectorlogo.com/logos/mercedes-amg-petronas-formula-one-team.svg",
    car: "https://cdn.formula1.com/content/dam/fom-website/teams/2025/mercedes-car.png",
    primaryColor: "#27F4D2",
    secondaryColor: "#000000",
    drivers: ["George Russell", "Kimi Antonelli"],
    championships: {
      constructors: 8,
      drivers: 9
    },
    stats: {
      raceWins: 125,
      podiums: 278,
      poles: 137,
      fastestLaps: 85,
      points: 4532
    },
    description: "Mercedes-AMG PETRONAS dominated the hybrid era with eight consecutive constructors' titles. Now entering a new chapter with rising star Kimi Antonelli alongside George Russell.",
    website: "https://www.mercedesamgf1.com",
    social: {
      twitter: "@mercedesamgf1",
      instagram: "@mercedesamgf1",
      facebook: "MercedesAMGF1"
    }
  },
  {
    id: "mclaren",
    name: "McLaren",
    fullName: "McLaren Formula 1 Team",
    nationality: "British",
    teamPrincipal: "Andrea Stella",
    founded: 1966,
    base: "Woking, United Kingdom",
    logo: "https://cdn.worldvectorlogo.com/logos/mclaren-1.svg",
    car: "https://cdn.formula1.com/content/dam/fom-website/teams/2025/mclaren-car.png",
    primaryColor: "#FF8000",
    secondaryColor: "#47C7FC",
    drivers: ["Lando Norris", "Oscar Piastri"],
    championships: {
      constructors: 8,
      drivers: 12
    },
    stats: {
      raceWins: 183,
      podiums: 522,
      poles: 156,
      fastestLaps: 164,
      points: 5234
    },
    description: "McLaren is one of Formula 1's most successful teams with a rich heritage. The team has returned to competitive form with their talented young driver pairing of Lando Norris and Oscar Piastri.",
    website: "https://www.mclaren.com/racing",
    social: {
      twitter: "@mclarenf1",
      instagram: "@mclarenf1",
      facebook: "McLarenF1"
    }
  },
  {
    id: "aston-martin",
    name: "Aston Martin",
    fullName: "Aston Martin Aramco F1 Team",
    nationality: "British",
    teamPrincipal: "Mike Krack",
    founded: 2021,
    base: "Silverstone, United Kingdom",
    logo: "https://cdn.worldvectorlogo.com/logos/aston-martin-f1.svg",
    car: "https://cdn.formula1.com/content/dam/fom-website/teams/2025/aston-martin-car.png",
    primaryColor: "#229971",
    secondaryColor: "#2D826D",
    drivers: ["Fernando Alonso", "Lance Stroll"],
    championships: {
      constructors: 0,
      drivers: 0
    },
    stats: {
      raceWins: 1,
      podiums: 13,
      poles: 1,
      fastestLaps: 3,
      points: 482
    },
    description: "Aston Martin represents British luxury and performance in Formula 1. With Fernando Alonso's experience and Lance Stroll's determination, the team continues to build towards championship success.",
    website: "https://www.astonmartinf1.com",
    social: {
      twitter: "@astonmartinf1",
      instagram: "@astonmartinf1",
      facebook: "AstonMartinF1"
    }
  },
  {
    id: "alpine",
    name: "Alpine",
    fullName: "BWT Alpine F1 Team",
    nationality: "French",
    teamPrincipal: "Oliver Oakes",
    founded: 2021,
    base: "Enstone, United Kingdom",
    logo: "https://cdn.worldvectorlogo.com/logos/alpine-f1-team.svg",
    car: "https://cdn.formula1.com/content/dam/fom-website/teams/2025/alpine-car.png",
    primaryColor: "#0093CC",
    secondaryColor: "#FF1801",
    drivers: ["Pierre Gasly", "Jack Doohan"],
    championships: {
      constructors: 2,
      drivers: 2
    },
    stats: {
      raceWins: 21,
      podiums: 98,
      poles: 20,
      fastestLaps: 15,
      points: 234
    },
    description: "Alpine represents French motorsport excellence in Formula 1. With Pierre Gasly's experience and newcomer Jack Doohan, the team aims to recapture their winning heritage.",
    website: "https://www.alpinecars.com/formula-1",
    social: {
      twitter: "@alpinef1team",
      instagram: "@alpinef1team",
      facebook: "AlpineF1Team"
    }
  },
  {
    id: "williams",
    name: "Williams",
    fullName: "Williams Racing",
    nationality: "British",
    teamPrincipal: "James Vowles",
    founded: 1977,
    base: "Grove, United Kingdom",
    logo: "https://cdn.worldvectorlogo.com/logos/williams-f1.svg",
    car: "https://cdn.formula1.com/content/dam/fom-website/teams/2025/williams-car.png",
    primaryColor: "#64C4FF",
    secondaryColor: "#012564",
    drivers: ["Alex Albon", "Carlos Sainz Jr."],
    championships: {
      constructors: 9,
      drivers: 7
    },
    stats: {
      raceWins: 114,
      podiums: 313,
      poles: 128,
      fastestLaps: 133,
      points: 3198
    },
    description: "Williams Racing is one of Formula 1's most successful and iconic teams. With Carlos Sainz Jr. joining Alex Albon, the team looks to return to their championship-winning ways.",
    website: "https://www.williamsf1.com",
    social: {
      twitter: "@williamsracing",
      instagram: "@williamsracing",
      facebook: "WilliamsRacing"
    }
  },
  {
    id: "racing-bulls",
    name: "Racing Bulls",
    fullName: "Visa Cash App RB F1 Team",
    nationality: "Italian",
    teamPrincipal: "Laurent Mekies",
    founded: 2006,
    base: "Faenza, Italy",
    logo: "https://cdn.worldvectorlogo.com/logos/visa-cashapp-rb-f1-team.svg",
    car: "https://cdn.formula1.com/content/dam/fom-website/teams/2025/racing-bulls-car.png",
    primaryColor: "#6692FF",
    secondaryColor: "#1E3A8A",
    drivers: ["Yuki Tsunoda", "Liam Lawson"],
    championships: {
      constructors: 0,
      drivers: 0
    },
    stats: {
      raceWins: 2,
      podiums: 7,
      poles: 1,
      fastestLaps: 2,
      points: 276
    },
    description: "Racing Bulls (formerly AlphaTauri) serves as Red Bull Racing's sister team. With Yuki Tsunoda and Liam Lawson, they continue to develop young talent while competing at the highest level.",
    website: "https://www.visacashapprb.com",
    social: {
      twitter: "@visacashapprb",
      instagram: "@visacashapprb",
      facebook: "VisaCashAppRB"
    }
  },
  {
    id: "haas",
    name: "Haas",
    fullName: "MoneyGram Haas F1 Team",
    nationality: "American",
    teamPrincipal: "Ayao Komatsu",
    founded: 2016,
    base: "Kannapolis, United States",
    logo: "https://cdn.worldvectorlogo.com/logos/haas-f1-team.svg",
    car: "https://cdn.formula1.com/content/dam/fom-website/teams/2025/haas-car.png",
    primaryColor: "#FF69B4",
    secondaryColor: "#000000",
    drivers: ["Nico Hülkenberg", "Ollie Bearman"],
    championships: {
      constructors: 0,
      drivers: 0
    },
    stats: {
      raceWins: 0,
      podiums: 0,
      poles: 0,
      fastestLaps: 2,
      points: 374
    },
    description: "Haas F1 Team represents American motorsport in Formula 1. With experienced Nico Hülkenberg mentoring rising talent Ollie Bearman, the team continues to establish itself in the sport.",
    website: "https://www.haasf1team.com",
    social: {
      twitter: "@haasf1team",
      instagram: "@haasf1team",
      facebook: "HaasF1Team"
    }
  },
  {
    id: "kick-sauber",
    name: "Kick Sauber",
    fullName: "Stake F1 Team Kick Sauber",
    nationality: "Swiss",
    teamPrincipal: "Alessandro Alunni Bravi",
    founded: 1993,
    base: "Hinwil, Switzerland",
    logo: "https://cdn.worldvectorlogo.com/logos/stake-f1-team-kick-sauber.svg",
    car: "https://cdn.formula1.com/content/dam/fom-website/teams/2025/kick-sauber-car.png",
    primaryColor: "#52E252",
    secondaryColor: "#000000",
    drivers: ["Valtteri Bottas", "Gabriel Bortoleto"],
    championships: {
      constructors: 0,
      drivers: 0
    },
    stats: {
      raceWins: 1,
      podiums: 26,
      poles: 1,
      fastestLaps: 7,
      points: 897
    },
    description: "Kick Sauber brings Swiss precision to Formula 1. With Valtteri Bottas' experience guiding rookie Gabriel Bortoleto, the team prepares for their transition to become Audi's factory team.",
    website: "https://www.sauber-group.com",
    social: {
      twitter: "@stakef1team",
      instagram: "@stakef1team",
      facebook: "StakeF1Team"
    }
  }
];