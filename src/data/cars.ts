import { Car } from '../types';

export const carsData: Car[] = [
  {
    id: "rb21",
    name: "RB21",
    fullName: "Red Bull Racing RB21",
    team: "Red Bull Racing",
    teamId: "red-bull",
    year: 2025,
    image: "https://i.pinimg.com/1200x/62/44/4b/62444bee25821939526d294f44ff1a8e.jpg",
    engine: {
      manufacturer: "Honda RBPT",
      type: "1.6L V6 Turbo Hybrid",
      displacement: "1600cc",
      cylinders: 6,
      maxRPM: 15000,
      powerOutput: "1000+ HP (ICE + ERS)"
    },
    chassis: {
      manufacturer: "Red Bull Racing",
      model: "RB21",
      construction: "Carbon fiber monocoque",
      wheelbase: "3700mm",
      weight: "798kg (minimum)"
    },
    aerodynamics: {
      frontWing: "Multi-element adjustable",
      rearWing: "DRS-enabled adjustable",
      dragCoefficient: "0.7-1.0 (variable)",
      downforce: "High-downforce package"
    },
    transmission: {
      type: "Semi-automatic sequential",
      gears: 8,
      manufacturer: "Red Bull Technology"
    },
    suspension: {
      front: "Push-rod operated torsion springs",
      rear: "Pull-rod operated torsion springs"
    },
    brakes: {
      manufacturer: "Brembo",
      type: "Carbon fiber discs",
      discDiameter: "370mm front, 330mm rear"
    },
    tires: {
      supplier: "Pirelli",
      compounds: ["C1 (Hard)", "C2 (Medium)", "C3 (Soft)", "C4 (Supersoft)", "C5 (Ultrasoft)"],
      diameter: "670mm"
    },
    fuel: {
      capacity: "110kg maximum",
      type: "E10 sustainable fuel"
    },
    electronics: {
      ecu: "McLaren Applied ECU",
      telemetry: "Advanced real-time data",
      drs: true,
      ers: {
        mguK: "120kW Motor Generator Unit",
        mguH: "Unlimited Motor Generator Unit",
        battery: "4MJ energy storage"
      }
    },
    dimensions: {
      length: "5600mm",
      width: "2000mm",
      height: "950mm"
    },
    performance: {
      topSpeed: "370+ km/h",
      acceleration: "0-100 km/h in 2.6s",
      lapRecord: "1:18.097",
      circuit: "Silverstone 2024"
    },
    drivers: ["Max Verstappen", "Sergio Pérez"],
    primaryColor: "#3671C6",
    secondaryColor: "#FF1801"
  },
  {
    id: "sf25",
    name: "SF-25",
    fullName: "Ferrari SF-25",
    team: "Ferrari",
    teamId: "ferrari",
    year: 2025,
    image: "https://i.pinimg.com/1200x/63/03/da/6303dadda18dca26cadf9b35b5a85bcc.jpg",
    engine: {
      manufacturer: "Ferrari",
      type: "1.6L V6 Turbo Hybrid",
      displacement: "1600cc",
      cylinders: 6,
      maxRPM: 15000,
      powerOutput: "1000+ HP (ICE + ERS)"
    },
    chassis: {
      manufacturer: "Scuderia Ferrari",
      model: "SF-25",
      construction: "Carbon fiber monocoque",
      wheelbase: "3700mm",
      weight: "798kg (minimum)"
    },
    aerodynamics: {
      frontWing: "Multi-element adjustable",
      rearWing: "DRS-enabled adjustable",
      dragCoefficient: "0.7-1.0 (variable)",
      downforce: "High-efficiency package"
    },
    transmission: {
      type: "Semi-automatic sequential",
      gears: 8,
      manufacturer: "Ferrari"
    },
    suspension: {
      front: "Push-rod operated torsion springs",
      rear: "Pull-rod operated torsion springs"
    },
    brakes: {
      manufacturer: "Brembo",
      type: "Carbon fiber discs",
      discDiameter: "370mm front, 330mm rear"
    },
    tires: {
      supplier: "Pirelli",
      compounds: ["C1 (Hard)", "C2 (Medium)", "C3 (Soft)", "C4 (Supersoft)", "C5 (Ultrasoft)"],
      diameter: "670mm"
    },
    fuel: {
      capacity: "110kg maximum",
      type: "E10 sustainable fuel"
    },
    electronics: {
      ecu: "McLaren Applied ECU",
      telemetry: "Advanced real-time data",
      drs: true,
      ers: {
        mguK: "120kW Motor Generator Unit",
        mguH: "Unlimited Motor Generator Unit",
        battery: "4MJ energy storage"
      }
    },
    dimensions: {
      length: "5600mm",
      width: "2000mm",
      height: "950mm"
    },
    performance: {
      topSpeed: "365+ km/h",
      acceleration: "0-100 km/h in 2.6s",
      lapRecord: "1:19.312",
      circuit: "Monza 2024"
    },
    drivers: ["Lewis Hamilton", "Charles Leclerc"],
    primaryColor: "#E8002D",
    secondaryColor: "#000000"
  },
  {
    id: "w16",
    name: "W16",
    fullName: "Mercedes-AMG F1 W16",
    team: "Mercedes",
    teamId: "mercedes",
    year: 2025,
    image: "https://i.pinimg.com/736x/92/d3/ea/92d3ea82aaa87c2258aeb93faaea3de2.jpg",
    engine: {
      manufacturer: "Mercedes-AMG High Performance Powertrains",
      type: "1.6L V6 Turbo Hybrid",
      displacement: "1600cc",
      cylinders: 6,
      maxRPM: 15000,
      powerOutput: "1000+ HP (ICE + ERS)"
    },
    chassis: {
      manufacturer: "Mercedes-AMG Petronas F1 Team",
      model: "W16",
      construction: "Carbon fiber monocoque",
      wheelbase: "3700mm",
      weight: "798kg (minimum)"
    },
    aerodynamics: {
      frontWing: "Multi-element adjustable",
      rearWing: "DRS-enabled adjustable",
      dragCoefficient: "0.7-1.0 (variable)",
      downforce: "Balanced efficiency package"
    },
    transmission: {
      type: "Semi-automatic sequential",
      gears: 8,
      manufacturer: "Mercedes-AMG HPP"
    },
    suspension: {
      front: "Push-rod operated torsion springs",
      rear: "Pull-rod operated torsion springs"
    },
    brakes: {
      manufacturer: "Brembo",
      type: "Carbon fiber discs",
      discDiameter: "370mm front, 330mm rear"
    },
    tires: {
      supplier: "Pirelli",
      compounds: ["C1 (Hard)", "C2 (Medium)", "C3 (Soft)", "C4 (Supersoft)", "C5 (Ultrasoft)"],
      diameter: "670mm"
    },
    fuel: {
      capacity: "110kg maximum",
      type: "E10 sustainable fuel"
    },
    electronics: {
      ecu: "McLaren Applied ECU",
      telemetry: "Advanced real-time data",
      drs: true,
      ers: {
        mguK: "120kW Motor Generator Unit",
        mguH: "Unlimited Motor Generator Unit",
        battery: "4MJ energy storage"
      }
    },
    dimensions: {
      length: "5600mm",
      width: "2000mm",
      height: "950mm"
    },
    performance: {
      topSpeed: "368+ km/h",
      acceleration: "0-100 km/h in 2.6s",
      lapRecord: "1:18.887",
      circuit: "Barcelona 2024"
    },
    drivers: ["George Russell", "Kimi Antonelli"],
    primaryColor: "#27F4D2",
    secondaryColor: "#000000"
  },
  {
    id: "mcl39",
    name: "MCL39",
    fullName: "McLaren MCL39",
    team: "McLaren",
    teamId: "mclaren",
    year: 2025,
    image: "https://i.pinimg.com/1200x/4c/d7/b7/4cd7b7f5a0393fac4258b56da5cbf5d2.jpg",
    engine: {
      manufacturer: "Mercedes-AMG High Performance Powertrains",
      type: "1.6L V6 Turbo Hybrid",
      displacement: "1600cc",
      cylinders: 6,
      maxRPM: 15000,
      powerOutput: "1000+ HP (ICE + ERS)"
    },
    chassis: {
      manufacturer: "McLaren F1 Team",
      model: "MCL39",
      construction: "Carbon fiber monocoque",
      wheelbase: "3700mm",
      weight: "798kg (minimum)"
    },
    aerodynamics: {
      frontWing: "Multi-element adjustable",
      rearWing: "DRS-enabled adjustable",
      dragCoefficient: "0.7-1.0 (variable)",
      downforce: "High-efficiency package"
    },
    transmission: {
      type: "Semi-automatic sequential",
      gears: 8,
      manufacturer: "McLaren Applied"
    },
    suspension: {
      front: "Push-rod operated torsion springs",
      rear: "Pull-rod operated torsion springs"
    },
    brakes: {
      manufacturer: "Brembo",
      type: "Carbon fiber discs",
      discDiameter: "370mm front, 330mm rear"
    },
    tires: {
      supplier: "Pirelli",
      compounds: ["C1 (Hard)", "C2 (Medium)", "C3 (Soft)", "C4 (Supersoft)", "C5 (Ultrasoft)"],
      diameter: "670mm"
    },
    fuel: {
      capacity: "110kg maximum",
      type: "E10 sustainable fuel"
    },
    electronics: {
      ecu: "McLaren Applied ECU",
      telemetry: "Advanced real-time data",
      drs: true,
      ers: {
        mguK: "120kW Motor Generator Unit",
        mguH: "Unlimited Motor Generator Unit",
        battery: "4MJ energy storage"
      }
    },
    dimensions: {
      length: "5600mm",
      width: "2000mm",
      height: "950mm"
    },
    performance: {
      topSpeed: "366+ km/h",
      acceleration: "0-100 km/h in 2.6s",
      lapRecord: "1:19.467",
      circuit: "Hungary 2024"
    },
    drivers: ["Lando Norris", "Oscar Piastri"],
    primaryColor: "#FF8000",
    secondaryColor: "#47C7FC"
  },
  {
    id: "amr25",
    name: "AMR25",
    fullName: "Aston Martin AMR25",
    team: "Aston Martin",
    teamId: "aston-martin",
    year: 2025,
    image: "https://i.pinimg.com/1200x/91/c6/d3/91c6d33632dafb324a4a5890e7ae89c4.jpg",
    engine: {
      manufacturer: "Mercedes-AMG High Performance Powertrains",
      type: "1.6L V6 Turbo Hybrid",
      displacement: "1600cc",
      cylinders: 6,
      maxRPM: 15000,
      powerOutput: "1000+ HP (ICE + ERS)"
    },
    chassis: {
      manufacturer: "Aston Martin F1 Team",
      model: "AMR25",
      construction: "Carbon fiber monocoque",
      wheelbase: "3700mm",
      weight: "798kg (minimum)"
    },
    aerodynamics: {
      frontWing: "Multi-element adjustable",
      rearWing: "DRS-enabled adjustable",
      dragCoefficient: "0.7-1.0 (variable)",
      downforce: "Balanced downforce package"
    },
    transmission: {
      type: "Semi-automatic sequential",
      gears: 8,
      manufacturer: "Aston Martin"
    },
    suspension: {
      front: "Push-rod operated torsion springs",
      rear: "Pull-rod operated torsion springs"
    },
    brakes: {
      manufacturer: "Brembo",
      type: "Carbon fiber discs",
      discDiameter: "370mm front, 330mm rear"
    },
    tires: {
      supplier: "Pirelli",
      compounds: ["C1 (Hard)", "C2 (Medium)", "C3 (Soft)", "C4 (Supersoft)", "C5 (Ultrasoft)"],
      diameter: "670mm"
    },
    fuel: {
      capacity: "110kg maximum",
      type: "E10 sustainable fuel"
    },
    electronics: {
      ecu: "McLaren Applied ECU",
      telemetry: "Advanced real-time data",
      drs: true,
      ers: {
        mguK: "120kW Motor Generator Unit",
        mguH: "Unlimited Motor Generator Unit",
        battery: "4MJ energy storage"
      }
    },
    dimensions: {
      length: "5600mm",
      width: "2000mm",
      height: "950mm"
    },
    performance: {
      topSpeed: "364+ km/h",
      acceleration: "0-100 km/h in 2.7s",
      lapRecord: "1:20.125",
      circuit: "Baku 2024"
    },
    drivers: ["Fernando Alonso", "Lance Stroll"],
    primaryColor: "#229971",
    secondaryColor: "#2BBC96"
  },
  {
    id: "a525",
    name: "A525",
    fullName: "Alpine A525",
    team: "Alpine",
    teamId: "alpine",
    year: 2025,
    image: "https://i.pinimg.com/1200x/0f/72/36/0f7236ee1e797ea80f61863235d389a6.jpg",
    engine: {
      manufacturer: "Renault E-Tech",
      type: "1.6L V6 Turbo Hybrid",
      displacement: "1600cc",
      cylinders: 6,
      maxRPM: 15000,
      powerOutput: "1000+ HP (ICE + ERS)"
    },
    chassis: {
      manufacturer: "Alpine F1 Team",
      model: "A525",
      construction: "Carbon fiber monocoque",
      wheelbase: "3700mm",
      weight: "798kg (minimum)"
    },
    aerodynamics: {
      frontWing: "Multi-element adjustable",
      rearWing: "DRS-enabled adjustable",
      dragCoefficient: "0.7-1.0 (variable)",
      downforce: "Medium-downforce package"
    },
    transmission: {
      type: "Semi-automatic sequential",
      gears: 8,
      manufacturer: "Alpine"
    },
    suspension: {
      front: "Push-rod operated torsion springs",
      rear: "Pull-rod operated torsion springs"
    },
    brakes: {
      manufacturer: "Brembo",
      type: "Carbon fiber discs",
      discDiameter: "370mm front, 330mm rear"
    },
    tires: {
      supplier: "Pirelli",
      compounds: ["C1 (Hard)", "C2 (Medium)", "C3 (Soft)", "C4 (Supersoft)", "C5 (Ultrasoft)"],
      diameter: "670mm"
    },
    fuel: {
      capacity: "110kg maximum",
      type: "E10 sustainable fuel"
    },
    electronics: {
      ecu: "McLaren Applied ECU",
      telemetry: "Advanced real-time data",
      drs: true,
      ers: {
        mguK: "120kW Motor Generator Unit",
        mguH: "Unlimited Motor Generator Unit",
        battery: "4MJ energy storage"
      }
    },
    dimensions: {
      length: "5600mm",
      width: "2000mm",
      height: "950mm"
    },
    performance: {
      topSpeed: "362+ km/h",
      acceleration: "0-100 km/h in 2.7s",
      lapRecord: "1:21.339",
      circuit: "Paul Ricard 2024"
    },
    drivers: ["Pierre Gasly", "Jack Doohan"],
    primaryColor: "#0093CC",
    secondaryColor: "#FF1801"
  },
  {
    id: "fw47",
    name: "FW47",
    fullName: "Williams FW47",
    team: "Williams",
    teamId: "williams",
    year: 2025,
    image: "https://i.pinimg.com/1200x/df/8c/e7/df8ce74ae49ba67d3d309e7f0f520a9e.jpg",
    engine: {
      manufacturer: "Mercedes-AMG High Performance Powertrains",
      type: "1.6L V6 Turbo Hybrid",
      displacement: "1600cc",
      cylinders: 6,
      maxRPM: 15000,
      powerOutput: "1000+ HP (ICE + ERS)"
    },
    chassis: {
      manufacturer: "Williams Racing",
      model: "FW47",
      construction: "Carbon fiber monocoque",
      wheelbase: "3700mm",
      weight: "798kg (minimum)"
    },
    aerodynamics: {
      frontWing: "Multi-element adjustable",
      rearWing: "DRS-enabled adjustable",
      dragCoefficient: "0.7-1.0 (variable)",
      downforce: "Balanced downforce package"
    },
    transmission: {
      type: "Semi-automatic sequential",
      gears: 8,
      manufacturer: "Williams Advanced Engineering"
    },
    suspension: {
      front: "Push-rod operated torsion springs",
      rear: "Pull-rod operated torsion springs"
    },
    brakes: {
      manufacturer: "Brembo",
      type: "Carbon fiber discs",
      discDiameter: "370mm front, 330mm rear"
    },
    tires: {
      supplier: "Pirelli",
      compounds: ["C1 (Hard)", "C2 (Medium)", "C3 (Soft)", "C4 (Supersoft)", "C5 (Ultrasoft)"],
      diameter: "670mm"
    },
    fuel: {
      capacity: "110kg maximum",
      type: "E10 sustainable fuel"
    },
    electronics: {
      ecu: "McLaren Applied ECU",
      telemetry: "Advanced real-time data",
      drs: true,
      ers: {
        mguK: "120kW Motor Generator Unit",
        mguH: "Unlimited Motor Generator Unit",
        battery: "4MJ energy storage"
      }
    },
    dimensions: {
      length: "5600mm",
      width: "2000mm",
      height: "950mm"
    },
    performance: {
      topSpeed: "361+ km/h",
      acceleration: "0-100 km/h in 2.7s",
      lapRecord: "1:22.456",
      circuit: "Silverstone 2024"
    },
    drivers: ["Alex Albon", "Carlos Sainz Jr."],
    primaryColor: "#37BEDD",
    secondaryColor: "#FFFFFF"
  },
  {
    id: "rb21b",
    name: "RB21",
    fullName: "Racing Bulls RB21",
    team: "Racing Bulls",
    teamId: "racing-bulls",
    year: 2025,
    image: "https://i.pinimg.com/736x/87/1e/53/871e53fe30cbc2f04fa9d36df7279f72.jpg",
    engine: {
      manufacturer: "Honda RBPT",
      type: "1.6L V6 Turbo Hybrid",
      displacement: "1600cc",
      cylinders: 6,
      maxRPM: 15000,
      powerOutput: "1000+ HP (ICE + ERS)"
    },
    chassis: {
      manufacturer: "Racing Bulls",
      model: "RB21",
      construction: "Carbon fiber monocoque",
      wheelbase: "3700mm",
      weight: "798kg (minimum)"
    },
    aerodynamics: {
      frontWing: "Multi-element adjustable",
      rearWing: "DRS-enabled adjustable",
      dragCoefficient: "0.7-1.0 (variable)",
      downforce: "Medium-downforce package"
    },
    transmission: {
      type: "Semi-automatic sequential",
      gears: 8,
      manufacturer: "Red Bull Technology"
    },
    suspension: {
      front: "Push-rod operated torsion springs",
      rear: "Pull-rod operated torsion springs"
    },
    brakes: {
      manufacturer: "Brembo",
      type: "Carbon fiber discs",
      discDiameter: "370mm front, 330mm rear"
    },
    tires: {
      supplier: "Pirelli",
      compounds: ["C1 (Hard)", "C2 (Medium)", "C3 (Soft)", "C4 (Supersoft)", "C5 (Ultrasoft)"],
      diameter: "670mm"
    },
    fuel: {
      capacity: "110kg maximum",
      type: "E10 sustainable fuel"
    },
    electronics: {
      ecu: "McLaren Applied ECU",
      telemetry: "Advanced real-time data",
      drs: true,
      ers: {
        mguK: "120kW Motor Generator Unit",
        mguH: "Unlimited Motor Generator Unit",
        battery: "4MJ energy storage"
      }
    },
    dimensions: {
      length: "5600mm",
      width: "2000mm",
      height: "950mm"
    },
    performance: {
      topSpeed: "359+ km/h",
      acceleration: "0-100 km/h in 2.7s",
      lapRecord: "1:23.012",
      circuit: "Imola 2024"
    },
    drivers: ["Yuki Tsunoda", "Liam Lawson"],
    primaryColor: "#6692FF",
    secondaryColor: "#1E5BC6"
  },
  {
    id: "vf25",
    name: "VF-25",
    fullName: "Haas VF-25",
    team: "Haas",
    teamId: "haas",
    year: 2025,
    image: "https://i.pinimg.com/736x/02/b1/40/02b140b1e1869e3d47d2016ca6ed8fad.jpg",
    engine: {
      manufacturer: "Ferrari",
      type: "1.6L V6 Turbo Hybrid",
      displacement: "1600cc",
      cylinders: 6,
      maxRPM: 15000,
      powerOutput: "1000+ HP (ICE + ERS)"
    },
    chassis: {
      manufacturer: "Haas F1 Team",
      model: "VF-25",
      construction: "Carbon fiber monocoque",
      wheelbase: "3700mm",
      weight: "798kg (minimum)"
    },
    aerodynamics: {
      frontWing: "Multi-element adjustable",
      rearWing: "DRS-enabled adjustable",
      dragCoefficient: "0.7-1.0 (variable)",
      downforce: "Medium-downforce package"
    },
    transmission: {
      type: "Semi-automatic sequential",
      gears: 8,
      manufacturer: "Ferrari"
    },
    suspension: {
      front: "Push-rod operated torsion springs",
      rear: "Pull-rod operated torsion springs"
    },
    brakes: {
      manufacturer: "Brembo",
      type: "Carbon fiber discs",
      discDiameter: "370mm front, 330mm rear"
    },
    tires: {
      supplier: "Pirelli",
      compounds: ["C1 (Hard)", "C2 (Medium)", "C3 (Soft)", "C4 (Supersoft)", "C5 (Ultrasoft)"],
      diameter: "670mm"
    },
    fuel: {
      capacity: "110kg maximum",
      type: "E10 sustainable fuel"
    },
    electronics: {
      ecu: "McLaren Applied ECU",
      telemetry: "Advanced real-time data",
      drs: true,
      ers: {
        mguK: "120kW Motor Generator Unit",
        mguH: "Unlimited Motor Generator Unit",
        battery: "4MJ energy storage"
      }
    },
    dimensions: {
      length: "5600mm",
      width: "2000mm",
      height: "950mm"
    },
    performance: {
      topSpeed: "358+ km/h",
      acceleration: "0-100 km/h in 2.8s",
      lapRecord: "1:24.123",
      circuit: "Austin 2024"
    },
    drivers: ["Nico Hülkenberg", "Ollie Bearman"],
    primaryColor: "#B6BABD",
    secondaryColor: "#E10600"
  },
  {
    id: "c45",
    name: "C45",
    fullName: "Kick Sauber C45",
    team: "Kick Sauber",
    teamId: "kick-sauber",
    year: 2025,
    image: "https://i.pinimg.com/1200x/85/91/68/859168090e0e78b755275cd936dbe274.jpg",
    engine: {
      manufacturer: "Ferrari",
      type: "1.6L V6 Turbo Hybrid",
      displacement: "1600cc",
      cylinders: 6,
      maxRPM: 15000,
      powerOutput: "1000+ HP (ICE + ERS)"
    },
    chassis: {
      manufacturer: "Kick Sauber F1 Team",
      model: "C45",
      construction: "Carbon fiber monocoque",
      wheelbase: "3700mm",
      weight: "798kg (minimum)"
    },
    aerodynamics: {
      frontWing: "Multi-element adjustable",
      rearWing: "DRS-enabled adjustable",
      dragCoefficient: "0.7-1.0 (variable)",
      downforce: "Low-medium downforce package"
    },
    transmission: {
      type: "Semi-automatic sequential",
      gears: 8,
      manufacturer: "Ferrari"
    },
    suspension: {
      front: "Push-rod operated torsion springs",
      rear: "Pull-rod operated torsion springs"
    },
    brakes: {
      manufacturer: "Brembo",
      type: "Carbon fiber discs",
      discDiameter: "370mm front, 330mm rear"
    },
    tires: {
      supplier: "Pirelli",
      compounds: ["C1 (Hard)", "C2 (Medium)", "C3 (Soft)", "C4 (Supersoft)", "C5 (Ultrasoft)"],
      diameter: "670mm"
    },
    fuel: {
      capacity: "110kg maximum",
      type: "E10 sustainable fuel"
    },
    electronics: {
      ecu: "McLaren Applied ECU",
      telemetry: "Advanced real-time data",
      drs: true,
      ers: {
        mguK: "120kW Motor Generator Unit",
        mguH: "Unlimited Motor Generator Unit",
        battery: "4MJ energy storage"
      }
    },
    dimensions: {
      length: "5600mm",
      width: "2000mm",
      height: "950mm"
    },
    performance: {
      topSpeed: "357+ km/h",
      acceleration: "0-100 km/h in 2.8s",
      lapRecord: "1:25.678",
      circuit: "Monaco 2024"
    },
    drivers: ["Valtteri Bottas", "Gabriel Bortoleto"],
    primaryColor: "#52E252",
    secondaryColor: "#000000"
  }
];