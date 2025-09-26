import { Race } from '../types';

export const raceCalendarData: Race[] = [
  {
    id: "bahrain-gp",
    name: "Bahrain Grand Prix",
    country: "Bahrain",
    circuit: "Bahrain International Circuit",
    date: "2025-03-02",
    time: "15:00",
    completed: true,
    winner: "Max Verstappen",
    winnerTime: "1:33:14.982",
    polePosition: {
      driver: "Max Verstappen",
      team: "Red Bull Racing",
      time: "1:29.179"
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:33:14.982",
        gap: "Winner",
        points: 25,
        laps: 57,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:33:22.157",
        gap: "+7.175",
        points: 18,
        laps: 57,
        status: "Finished"
      },
      {
        position: 3,
        driver: "George Russell",
        team: "Mercedes",
        time: "1:33:35.821",
        gap: "+20.839",
        points: 15,
        laps: 57,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 26.0325,
      lng: 50.5106
    },
    sessions: {
      fp1: { date: "2025-02-28", time: "11:30" },
      fp2: { date: "2025-02-28", time: "15:00" },
      fp3: { date: "2025-03-01", time: "12:30" },
      qualifying: { date: "2025-03-01", time: "16:00" },
      race: { date: "2025-03-02", time: "15:00" }
    },
    trackInfo: {
      length: "5.412 km",
      turns: 15,
      lapRecord: "1:31.447",
      lapRecordHolder: "Pedro de la Rosa (2005)",
      drsZones: 3
    },
    weather: {
      temperature: "28°C",
      conditions: "Clear"
    }
  },
  {
    id: "saudi-arabia-gp",
    name: "Saudi Arabian Grand Prix",
    country: "Saudi Arabia",
    circuit: "Jeddah Corniche Circuit",
    date: "2025-03-09",
    time: "18:00",
    completed: true,
    winner: "Charles Leclerc",
    winnerTime: "1:24:58.736",
    polePosition: {
      driver: "Charles Leclerc",
      team: "Ferrari",
      time: "1:27.928"
    },
    results: [
      {
        position: 1,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:24:58.736",
        gap: "Winner",
        points: 25,
        laps: 50,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Sergio Pérez",
        team: "Red Bull Racing",
        time: "1:25:03.421",
        gap: "+4.685",
        points: 18,
        laps: 50,
        status: "Finished"
      },
      {
        position: 3,
        driver: "George Russell",
        team: "Mercedes",
        time: "1:25:12.893",
        gap: "+14.157",
        points: 15,
        laps: 50,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 21.6319,
      lng: 39.1044
    },
    sessions: {
      fp1: { date: "2025-03-07", time: "13:30" },
      fp2: { date: "2025-03-07", time: "17:00" },
      fp3: { date: "2025-03-08", time: "14:30" },
      qualifying: { date: "2025-03-08", time: "18:00" },
      race: { date: "2025-03-09", time: "18:00" }
    },
    trackInfo: {
      length: "6.174 km",
      turns: 27,
      lapRecord: "1:30.734",
      lapRecordHolder: "Lewis Hamilton (2021)",
      drsZones: 3
    },
    weather: {
      temperature: "26°C",
      conditions: "Clear"
    }
  },
  {
    id: "australia-gp",
    name: "Australian Grand Prix",
    country: "Australia",
    circuit: "Albert Park Circuit",
    date: "2025-03-16",
    time: "05:00",
    completed: true,
    winner: "Lewis Hamilton",
    winnerTime: "1:20:58.894",
    polePosition: {
      driver: "George Russell",
      team: "Mercedes",
      time: "1:16.824"
    },
    results: [
      {
        position: 1,
        driver: "Lewis Hamilton",
        team: "Mercedes",
        time: "1:20:58.894",
        gap: "Winner",
        points: 25,
        laps: 58,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:21:05.617",
        gap: "+6.723",
        points: 18,
        laps: 58,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Lando Norris",
        team: "McLaren",
        time: "1:21:18.491",
        gap: "+19.597",
        points: 15,
        laps: 58,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: -37.8497,
      lng: 144.9681
    },
    sessions: {
      fp1: { date: "2025-03-14", time: "01:30" },
      fp2: { date: "2025-03-14", time: "05:00" },
      fp3: { date: "2025-03-15", time: "01:30" },
      qualifying: { date: "2025-03-15", time: "05:00" },
      race: { date: "2025-03-16", time: "05:00" }
    },
    trackInfo: {
      length: "5.278 km",
      turns: 14,
      lapRecord: "1:20.260",
      lapRecordHolder: "Charles Leclerc (2024)",
      drsZones: 4
    },
    weather: {
      temperature: "22°C",
      conditions: "Partly Cloudy"
    }
  },
  {
    id: "china-gp",
    name: "Chinese Grand Prix",
    country: "China",
    circuit: "Shanghai International Circuit",
    date: "2025-03-30",
    time: "07:00",
    completed: true,
    winner: "Lando Norris",
    winnerTime: "1:36:58.294",
    polePosition: {
      driver: "Charles Leclerc",
      team: "Ferrari",
      time: "1:32.749"
    },
    results: [
      {
        position: 1,
        driver: "Lando Norris",
        team: "McLaren",
        time: "1:36:58.294",
        gap: "Winner",
        points: 25,
        laps: 56,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:37:06.891",
        gap: "+8.597",
        points: 18,
        laps: 56,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:37:14.523",
        gap: "+16.229",
        points: 15,
        laps: 56,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 31.3389,
      lng: 121.2197
    },
    sessions: {
      fp1: { date: "2025-03-28", time: "03:30" },
      fp2: { date: "2025-03-28", time: "07:00" },
      fp3: { date: "2025-03-29", time: "03:30" },
      qualifying: { date: "2025-03-29", time: "07:00" },
      race: { date: "2025-03-30", time: "07:00" }
    },
    trackInfo: {
      length: "5.451 km",
      turns: 16,
      lapRecord: "1:32.238",
      lapRecordHolder: "Michael Schumacher (2004)",
      drsZones: 2
    },
    weather: {
      temperature: "18°C",
      conditions: "Overcast"
    }
  },
  {
    id: "japan-gp",
    name: "Japanese Grand Prix",
    country: "Japan",
    circuit: "Suzuka International Racing Course",
    date: "2025-04-13",
    time: "06:00",
    completed: true,
    winner: "Oscar Piastri",
    winnerTime: "1:44:28.751",
    polePosition: {
      driver: "Max Verstappen",
      team: "Red Bull Racing",
      time: "1:28.197"
    },
    results: [
      {
        position: 1,
        driver: "Oscar Piastri",
        team: "McLaren",
        time: "1:44:28.751",
        gap: "Winner",
        points: 25,
        laps: 53,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:44:35.992",
        gap: "+7.241",
        points: 18,
        laps: 53,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:44:48.157",
        gap: "+19.406",
        points: 15,
        laps: 53,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 34.8431,
      lng: 136.5407
    },
    sessions: {
      fp1: { date: "2025-04-11", time: "02:30" },
      fp2: { date: "2025-04-11", time: "06:00" },
      fp3: { date: "2025-04-12", time: "02:30" },
      qualifying: { date: "2025-04-12", time: "06:00" },
      race: { date: "2025-04-13", time: "06:00" }
    },
    trackInfo: {
      length: "5.807 km",
      turns: 18,
      lapRecord: "1:30.983",
      lapRecordHolder: "Lewis Hamilton (2019)",
      drsZones: 2
    },
    weather: {
      temperature: "16°C",
      conditions: "Light Rain"
    }
  },
  {
    id: "miami-gp",
    name: "Miami Grand Prix",
    country: "United States",
    circuit: "Miami International Autodrome",
    date: "2025-05-04",
    time: "20:00",
    completed: true,
    winner: "Max Verstappen",
    winnerTime: "1:31:47.594",
    polePosition: {
      driver: "Lando Norris",
      team: "McLaren",
      time: "1:27.938"
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:31:47.594",
        gap: "Winner",
        points: 25,
        laps: 57,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Lando Norris",
        team: "McLaren",
        time: "1:31:55.829",
        gap: "+8.235",
        points: 18,
        laps: 57,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Oscar Piastri",
        team: "McLaren",
        time: "1:32:12.456",
        gap: "+24.862",
        points: 15,
        laps: 57,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 25.9581,
      lng: -80.2389
    },
    sessions: {
      fp1: { date: "2025-05-02", time: "16:30" },
      fp2: { date: "2025-05-02", time: "20:00" },
      fp3: { date: "2025-05-03", time: "16:30" },
      qualifying: { date: "2025-05-03", time: "20:00" },
      race: { date: "2025-05-04", time: "20:00" }
    },
    trackInfo: {
      length: "5.412 km",
      turns: 19,
      lapRecord: "1:29.708",
      lapRecordHolder: "Max Verstappen (2024)",
      drsZones: 3
    },
    weather: {
      temperature: "29°C",
      conditions: "Sunny"
    }
  },
  {
    id: "emilia-romagna-gp",
    name: "Emilia Romagna Grand Prix",
    country: "Italy",
    circuit: "Autodromo Enzo e Dino Ferrari",
    date: "2025-05-18",
    time: "13:00",
    completed: true,
    winner: "Charles Leclerc",
    winnerTime: "1:27:22.534",
    polePosition: {
      driver: "Max Verstappen",
      team: "Red Bull Racing",
      time: "1:14.746"
    },
    results: [
      {
        position: 1,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:27:22.534",
        gap: "Winner",
        points: 25,
        laps: 63,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:27:28.691",
        gap: "+6.157",
        points: 18,
        laps: 63,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Lando Norris",
        team: "McLaren",
        time: "1:27:42.829",
        gap: "+20.295",
        points: 15,
        laps: 63,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 44.3439,
      lng: 11.7167
    },
    sessions: {
      fp1: { date: "2025-05-16", time: "11:30" },
      fp2: { date: "2025-05-16", time: "15:00" },
      fp3: { date: "2025-05-17", time: "10:30" },
      qualifying: { date: "2025-05-17", time: "14:00" },
      race: { date: "2025-05-18", time: "13:00" }
    },
    trackInfo: {
      length: "4.909 km",
      turns: 19,
      lapRecord: "1:15.484",
      lapRecordHolder: "Lewis Hamilton (2020)",
      drsZones: 2
    },
    weather: {
      temperature: "21°C",
      conditions: "Partly Cloudy"
    }
  },
  {
    id: "monaco-gp",
    name: "Monaco Grand Prix",
    country: "Monaco",
    circuit: "Circuit de Monaco",
    date: "2025-05-25",
    time: "13:00",
    completed: true,
    winner: "Charles Leclerc",
    winnerTime: "1:42:17.894",
    polePosition: {
      driver: "Charles Leclerc",
      team: "Ferrari",
      time: "1:11.729"
    },
    results: [
      {
        position: 1,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:42:17.894",
        gap: "Winner",
        points: 25,
        laps: 78,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Oscar Piastri",
        team: "McLaren",
        time: "1:42:25.347",
        gap: "+7.453",
        points: 18,
        laps: 78,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Carlos Sainz",
        team: "Ferrari",
        time: "1:42:38.629",
        gap: "+20.735",
        points: 15,
        laps: 78,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 43.7347,
      lng: 7.4206
    },
    sessions: {
      fp1: { date: "2025-05-23", time: "11:30" },
      fp2: { date: "2025-05-23", time: "15:00" },
      fp3: { date: "2025-05-24", time: "10:30" },
      qualifying: { date: "2025-05-24", time: "14:00" },
      race: { date: "2025-05-25", time: "13:00" }
    },
    trackInfo: {
      length: "3.337 km",
      turns: 19,
      lapRecord: "1:12.909",
      lapRecordHolder: "Lewis Hamilton (2021)",
      drsZones: 1
    },
    weather: {
      temperature: "24°C",
      conditions: "Sunny"
    }
  },
  {
    id: "canada-gp",
    name: "Canadian Grand Prix",
    country: "Canada",
    circuit: "Circuit Gilles Villeneuve",
    date: "2025-06-15",
    time: "18:00",
    completed: true,
    winner: "George Russell",
    winnerTime: "1:25:47.893",
    polePosition: {
      driver: "George Russell",
      team: "Mercedes",
      time: "1:12.000"
    },
    results: [
      {
        position: 1,
        driver: "George Russell",
        team: "Mercedes",
        time: "1:25:47.893",
        gap: "Winner",
        points: 25,
        laps: 70,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:25:52.464",
        gap: "+4.571",
        points: 18,
        laps: 70,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Lando Norris",
        team: "McLaren",
        time: "1:26:04.892",
        gap: "+16.999",
        points: 15,
        laps: 70,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 45.5075,
      lng: -73.5264
    },
    sessions: {
      fp1: { date: "2025-06-13", time: "17:30" },
      fp2: { date: "2025-06-13", time: "21:00" },
      fp3: { date: "2025-06-14", time: "16:30" },
      qualifying: { date: "2025-06-14", time: "20:00" },
      race: { date: "2025-06-15", time: "18:00" }
    },
    trackInfo: {
      length: "4.361 km",
      turns: 14,
      lapRecord: "1:13.078",
      lapRecordHolder: "Valtteri Bottas (2019)",
      drsZones: 3
    },
    weather: {
      temperature: "23°C",
      conditions: "Overcast"
    }
  },
  {
    id: "spain-gp",
    name: "Spanish Grand Prix",
    country: "Spain",
    circuit: "Circuit de Barcelona-Catalunya",
    date: "2025-06-29",
    time: "13:00",
    completed: true,
    winner: "Max Verstappen",
    winnerTime: "1:28:20.457",
    polePosition: {
      driver: "Lando Norris",
      team: "McLaren",
      time: "1:15.227"
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:28:20.457",
        gap: "Winner",
        points: 25,
        laps: 66,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Lando Norris",
        team: "McLaren",
        time: "1:28:23.178",
        gap: "+2.721",
        points: 18,
        laps: 66,
        status: "Finished"
      },
      {
        position: 3,
        driver: "George Russell",
        team: "Mercedes",
        time: "1:28:41.329",
        gap: "+20.872",
        points: 15,
        laps: 66,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 41.5700,
      lng: 2.2614
    },
    sessions: {
      fp1: { date: "2025-06-27", time: "11:30" },
      fp2: { date: "2025-06-27", time: "15:00" },
      fp3: { date: "2025-06-28", time: "10:30" },
      qualifying: { date: "2025-06-28", time: "14:00" },
      race: { date: "2025-06-29", time: "13:00" }
    },
    trackInfo: {
      length: "4.675 km",
      turns: 16,
      lapRecord: "1:18.149",
      lapRecordHolder: "Max Verstappen (2023)",
      drsZones: 2
    },
    weather: {
      temperature: "27°C",
      conditions: "Sunny"
    }
  },
  {
    id: "austria-gp",
    name: "Austrian Grand Prix",
    country: "Austria",
    circuit: "Red Bull Ring",
    date: "2025-07-06",
    time: "13:00",
    completed: true,
    winner: "Max Verstappen",
    winnerTime: "1:20:14.894",
    polePosition: {
      driver: "Max Verstappen",
      team: "Red Bull Racing",
      time: "1:04.314"
    },
    results: [
      {
        position: 1,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:20:14.894",
        gap: "Winner",
        points: 25,
        laps: 71,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Oscar Piastri",
        team: "McLaren",
        time: "1:20:21.567",
        gap: "+6.673",
        points: 18,
        laps: 71,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:20:35.129",
        gap: "+20.235",
        points: 15,
        laps: 71,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 47.2197,
      lng: 14.7647
    },
    sessions: {
      fp1: { date: "2025-07-04", time: "11:30" },
      fp2: { date: "2025-07-04", time: "15:00" },
      fp3: { date: "2025-07-05", time: "10:30" },
      qualifying: { date: "2025-07-05", time: "14:00" },
      race: { date: "2025-07-06", time: "13:00" }
    },
    trackInfo: {
      length: "4.318 km",
      turns: 10,
      lapRecord: "1:05.619",
      lapRecordHolder: "Carlos Sainz (2020)",
      drsZones: 3
    },
    weather: {
      temperature: "25°C",
      conditions: "Clear"
    }
  },
  {
    id: "britain-gp",
    name: "British Grand Prix",
    country: "United Kingdom",
    circuit: "Silverstone Circuit",
    date: "2025-07-13",
    time: "14:00",
    completed: true,
    winner: "Lewis Hamilton",
    winnerTime: "1:22:27.430",
    polePosition: {
      driver: "George Russell",
      team: "Mercedes",
      time: "1:25.819"
    },
    results: [
      {
        position: 1,
        driver: "Lewis Hamilton",
        team: "Mercedes",
        time: "1:22:27.430",
        gap: "Winner",
        points: 25,
        laps: 52,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:22:29.894",
        gap: "+2.464",
        points: 18,
        laps: 52,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Lando Norris",
        team: "McLaren",
        time: "1:22:37.582",
        gap: "+10.152",
        points: 15,
        laps: 52,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 52.0786,
      lng: -1.0169
    },
    sessions: {
      fp1: { date: "2025-07-11", time: "12:30" },
      fp2: { date: "2025-07-11", time: "16:00" },
      fp3: { date: "2025-07-12", time: "11:30" },
      qualifying: { date: "2025-07-12", time: "15:00" },
      race: { date: "2025-07-13", time: "14:00" }
    },
    trackInfo: {
      length: "5.891 km",
      turns: 18,
      lapRecord: "1:27.097",
      lapRecordHolder: "Max Verstappen (2020)",
      drsZones: 2
    },
    weather: {
      temperature: "20°C",
      conditions: "Partly Cloudy"
    }
  },
  {
    id: "hungary-gp",
    name: "Hungarian Grand Prix",
    country: "Hungary",
    circuit: "Hungaroring",
    date: "2025-07-27",
    time: "13:00",
    completed: true,
    winner: "Oscar Piastri",
    winnerTime: "1:38:01.989",
    polePosition: {
      driver: "Lando Norris",
      team: "McLaren",
      time: "1:15.227"
    },
    results: [
      {
        position: 1,
        driver: "Oscar Piastri",
        team: "McLaren",
        time: "1:38:01.989",
        gap: "Winner",
        points: 25,
        laps: 70,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Lando Norris",
        team: "McLaren",
        time: "1:38:15.392",
        gap: "+13.403",
        points: 18,
        laps: 70,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Lewis Hamilton",
        team: "Mercedes",
        time: "1:38:23.147",
        gap: "+21.158",
        points: 15,
        laps: 70,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 47.5789,
      lng: 19.2486
    },
    sessions: {
      fp1: { date: "2025-07-25", time: "11:30" },
      fp2: { date: "2025-07-25", time: "15:00" },
      fp3: { date: "2025-07-26", time: "10:30" },
      qualifying: { date: "2025-07-26", time: "14:00" },
      race: { date: "2025-07-27", time: "13:00" }
    },
    trackInfo: {
      length: "4.381 km",
      turns: 14,
      lapRecord: "1:16.627",
      lapRecordHolder: "Lewis Hamilton (2020)",
      drsZones: 2
    },
    weather: {
      temperature: "29°C",
      conditions: "Hot"
    }
  },
  {
    id: "belgium-gp",
    name: "Belgian Grand Prix",
    country: "Belgium",
    circuit: "Circuit de Spa-Francorchamps",
    date: "2025-08-31",
    time: "13:00",
    completed: true,
    winner: "Charles Leclerc",
    winnerTime: "1:24:11.061",
    polePosition: {
      driver: "Charles Leclerc",
      team: "Ferrari",
      time: "1:41.252"
    },
    results: [
      {
        position: 1,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:24:11.061",
        gap: "Winner",
        points: 25,
        laps: 44,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Oscar Piastri",
        team: "McLaren",
        time: "1:24:19.283",
        gap: "+8.222",
        points: 18,
        laps: 44,
        status: "Finished"
      },
      {
        position: 3,
        driver: "George Russell",
        team: "Mercedes",
        time: "1:24:31.769",
        gap: "+20.708",
        points: 15,
        laps: 44,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 50.4372,
      lng: 5.9714
    },
    sessions: {
      fp1: { date: "2025-08-29", time: "11:30" },
      fp2: { date: "2025-08-29", time: "15:00" },
      fp3: { date: "2025-08-30", time: "10:30" },
      qualifying: { date: "2025-08-30", time: "14:00" },
      race: { date: "2025-08-31", time: "13:00" }
    },
    trackInfo: {
      length: "7.004 km",
      turns: 19,
      lapRecord: "1:46.286",
      lapRecordHolder: "Valtteri Bottas (2018)",
      drsZones: 2
    },
    weather: {
      temperature: "19°C",
      conditions: "Variable"
    }
  },
  {
    id: "netherlands-gp",
    name: "Dutch Grand Prix",
    country: "Netherlands",
    circuit: "Circuit Zandvoort",
    date: "2025-09-07",
    time: "13:00",
    completed: true,
    winner: "Lando Norris",
    winnerTime: "1:30:45.519",
    polePosition: {
      driver: "Lando Norris",
      team: "McLaren",
      time: "1:09.673"
    },
    results: [
      {
        position: 1,
        driver: "Lando Norris",
        team: "McLaren",
        time: "1:30:45.519",
        gap: "Winner",
        points: 25,
        laps: 72,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Max Verstappen",
        team: "Red Bull Racing",
        time: "1:30:58.927",
        gap: "+13.408",
        points: 18,
        laps: 72,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:31:07.664",
        gap: "+22.145",
        points: 15,
        laps: 72,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 52.3888,
      lng: 4.5409
    },
    sessions: {
      fp1: { date: "2025-09-05", time: "11:30" },
      fp2: { date: "2025-09-05", time: "15:00" },
      fp3: { date: "2025-09-06", time: "10:30" },
      qualifying: { date: "2025-09-06", time: "14:00" },
      race: { date: "2025-09-07", time: "13:00" }
    },
    trackInfo: {
      length: "4.259 km",
      turns: 14,
      lapRecord: "1:11.097",
      lapRecordHolder: "Lewis Hamilton (2021)",
      drsZones: 3
    },
    weather: {
      temperature: "17°C",
      conditions: "Windy"
    }
  },
  {
    id: "italy-gp",
    name: "Italian Grand Prix",
    country: "Italy",
    circuit: "Autodromo Nazionale Monza",
    date: "2025-09-14",
    time: "13:00",
    completed: true,
    winner: "Charles Leclerc",
    winnerTime: "1:14:21.782",
    polePosition: {
      driver: "Lando Norris",
      team: "McLaren",
      time: "1:19.327"
    },
    results: [
      {
        position: 1,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:14:21.782",
        gap: "Winner",
        points: 25,
        laps: 53,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Oscar Piastri",
        team: "McLaren",
        time: "1:14:24.567",
        gap: "+2.785",
        points: 18,
        laps: 53,
        status: "Finished"
      },
      {
        position: 3,
        driver: "Lando Norris",
        team: "McLaren",
        time: "1:14:31.429",
        gap: "+9.647",
        points: 15,
        laps: 53,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 45.6156,
      lng: 9.2811
    },
    sessions: {
      fp1: { date: "2025-09-12", time: "11:30" },
      fp2: { date: "2025-09-12", time: "15:00" },
      fp3: { date: "2025-09-13", time: "10:30" },
      qualifying: { date: "2025-09-13", time: "14:00" },
      race: { date: "2025-09-14", time: "13:00" }
    },
    trackInfo: {
      length: "5.793 km",
      turns: 11,
      lapRecord: "1:21.046",
      lapRecordHolder: "Rubens Barrichello (2004)",
      drsZones: 3
    },
    weather: {
      temperature: "24°C",
      conditions: "Clear"
    }
  },
  {
    id: "azerbaijan-gp",
    name: "Azerbaijan Grand Prix",
    country: "Azerbaijan",
    circuit: "Baku City Circuit",
    date: "2025-09-21",
    time: "11:00",
    completed: true,
    winner: "Oscar Piastri",
    winnerTime: "1:32:58.007",
    polePosition: {
      driver: "Charles Leclerc",
      team: "Ferrari",
      time: "1:40.445"
    },
    results: [
      {
        position: 1,
        driver: "Oscar Piastri",
        team: "McLaren",
        time: "1:32:58.007",
        gap: "Winner",
        points: 25,
        laps: 51,
        status: "Finished"
      },
      {
        position: 2,
        driver: "Charles Leclerc",
        team: "Ferrari",
        time: "1:33:08.652",
        gap: "+10.645",
        points: 18,
        laps: 51,
        status: "Finished"
      },
      {
        position: 3,
        driver: "George Russell",
        team: "Mercedes",
        time: "1:33:15.394",
        gap: "+17.387",
        points: 15,
        laps: 51,
        status: "Finished"
      }
    ],
    coordinates: {
      lat: 40.3725,
      lng: 49.8533
    },
    sessions: {
      fp1: { date: "2025-09-19", time: "09:30" },
      fp2: { date: "2025-09-19", time: "13:00" },
      fp3: { date: "2025-09-20", time: "08:30" },
      qualifying: { date: "2025-09-20", time: "12:00" },
      race: { date: "2025-09-21", time: "11:00" }
    },
    trackInfo: {
      length: "6.003 km",
      turns: 20,
      lapRecord: "1:43.009",
      lapRecordHolder: "Charles Leclerc (2019)",
      drsZones: 2
    },
    weather: {
      temperature: "22°C",
      conditions: "Windy"
    }
  },
  {
    id: "singapore-gp",
    name: "Singapore Grand Prix",
    country: "Singapore",
    circuit: "Marina Bay Street Circuit",
    date: "2025-10-05",
    time: "12:00",
    completed: false,
    coordinates: {
      lat: 1.2914,
      lng: 103.8640
    },
    sessions: {
      fp1: { date: "2025-10-03", time: "09:30" },
      fp2: { date: "2025-10-03", time: "13:00" },
      fp3: { date: "2025-10-04", time: "09:30" },
      qualifying: { date: "2025-10-04", time: "13:00" },
      race: { date: "2025-10-05", time: "12:00" }
    },
    trackInfo: {
      length: "5.063 km",
      turns: 23,
      lapRecord: "1:35.867",
      lapRecordHolder: "Lewis Hamilton (2023)",
      drsZones: 3
    },
    weather: {
      temperature: "31°C",
      conditions: "Humid"
    }
  },
  {
    id: "usa-gp",
    name: "United States Grand Prix",
    country: "United States",
    circuit: "Circuit of the Americas",
    date: "2025-10-19",
    time: "19:00",
    completed: false,
    coordinates: {
      lat: 30.1328,
      lng: -97.6411
    },
    sessions: {
      fp1: { date: "2025-10-17", time: "17:30" },
      fp2: { date: "2025-10-17", time: "21:00" },
      fp3: { date: "2025-10-18", time: "17:30" },
      qualifying: { date: "2025-10-18", time: "21:00" },
      race: { date: "2025-10-19", time: "19:00" }
    },
    trackInfo: {
      length: "5.513 km",
      turns: 20,
      lapRecord: "1:36.169",
      lapRecordHolder: "Charles Leclerc (2019)",
      drsZones: 2
    },
    weather: {
      temperature: "26°C",
      conditions: "Clear"
    }
  },
  {
    id: "mexico-gp",
    name: "Mexican Grand Prix",
    country: "Mexico",
    circuit: "Autodromo Hermanos Rodriguez",
    date: "2025-10-26",
    time: "19:00",
    completed: false,
    coordinates: {
      lat: 19.4042,
      lng: -99.0907
    },
    sessions: {
      fp1: { date: "2025-10-24", time: "17:30" },
      fp2: { date: "2025-10-24", time: "21:00" },
      fp3: { date: "2025-10-25", time: "16:30" },
      qualifying: { date: "2025-10-25", time: "20:00" },
      race: { date: "2025-10-26", time: "19:00" }
    },
    trackInfo: {
      length: "4.304 km",
      turns: 17,
      lapRecord: "1:17.774",
      lapRecordHolder: "Valtteri Bottas (2021)",
      drsZones: 3
    },
    weather: {
      temperature: "23°C",
      conditions: "Clear"
    }
  },
  {
    id: "brazil-gp",
    name: "Brazilian Grand Prix",
    country: "Brazil",
    circuit: "Autodromo Jose Carlos Pace",
    date: "2025-11-09",
    time: "17:00",
    completed: false,
    coordinates: {
      lat: -23.7036,
      lng: -46.6997
    },
    sessions: {
      fp1: { date: "2025-11-07", time: "15:30" },
      fp2: { date: "2025-11-07", time: "19:00" },
      fp3: { date: "2025-11-08", time: "14:30" },
      qualifying: { date: "2025-11-08", time: "18:00" },
      race: { date: "2025-11-09", time: "17:00" }
    },
    trackInfo: {
      length: "4.309 km",
      turns: 15,
      lapRecord: "1:10.540",
      lapRecordHolder: "Valtteri Bottas (2018)",
      drsZones: 2
    },
    weather: {
      temperature: "27°C",
      conditions: "Variable"
    }
  },
  {
    id: "las-vegas-gp",
    name: "Las Vegas Grand Prix",
    country: "United States",
    circuit: "Las Vegas Street Circuit",
    date: "2025-11-23",
    time: "06:00",
    completed: false,
    coordinates: {
      lat: 36.1146,
      lng: -115.1728
    },
    sessions: {
      fp1: { date: "2025-11-21", time: "02:30" },
      fp2: { date: "2025-11-21", time: "06:00" },
      fp3: { date: "2025-11-22", time: "02:30" },
      qualifying: { date: "2025-11-22", time: "06:00" },
      race: { date: "2025-11-23", time: "06:00" }
    },
    trackInfo: {
      length: "6.201 km",
      turns: 17,
      lapRecord: "1:35.490",
      lapRecordHolder: "Max Verstappen (2023)",
      drsZones: 3
    },
    weather: {
      temperature: "15°C",
      conditions: "Clear"
    }
  },
  {
    id: "qatar-gp",
    name: "Qatar Grand Prix",
    country: "Qatar",
    circuit: "Lusail International Circuit",
    date: "2025-11-30",
    time: "16:00",
    completed: false,
    coordinates: {
      lat: 25.4900,
      lng: 51.4542
    },
    sessions: {
      fp1: { date: "2025-11-28", time: "14:30" },
      fp2: { date: "2025-11-28", time: "18:00" },
      fp3: { date: "2025-11-29", time: "13:30" },
      qualifying: { date: "2025-11-29", time: "17:00" },
      race: { date: "2025-11-30", time: "16:00" }
    },
    trackInfo: {
      length: "5.380 km",
      turns: 16,
      lapRecord: "1:24.319",
      lapRecordHolder: "Max Verstappen (2023)",
      drsZones: 2
    },
    weather: {
      temperature: "30°C",
      conditions: "Hot"
    }
  },
  {
    id: "abu-dhabi-gp",
    name: "Abu Dhabi Grand Prix",
    country: "United Arab Emirates",
    circuit: "Yas Marina Circuit",
    date: "2025-12-07",
    time: "13:00",
    completed: false,
    coordinates: {
      lat: 24.4672,
      lng: 54.6031
    },
    sessions: {
      fp1: { date: "2025-12-05", time: "11:30" },
      fp2: { date: "2025-12-05", time: "15:00" },
      fp3: { date: "2025-12-06", time: "10:30" },
      qualifying: { date: "2025-12-06", time: "14:00" },
      race: { date: "2025-12-07", time: "13:00" }
    },
    trackInfo: {
      length: "5.281 km",
      turns: 16,
      lapRecord: "1:26.103",
      lapRecordHolder: "Max Verstappen (2021)",
      drsZones: 2
    },
    weather: {
      temperature: "29°C",
      conditions: "Clear"
    }
  }
];