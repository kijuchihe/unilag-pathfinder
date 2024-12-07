import { LocationBasicDetailsType } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const junctionsDetails: LocationBasicDetailsType[] = [
  {
    name: "Eduction Junction",
    commonName: "Education",
    icon: "T",
    coordinates: { x: 200, y: 200 },
    connections: [
      {
        to: "main-gate",
        distance: 200,
        description: "Continue to Main Gate",
        name: "Campus Road"
      },
      {
        to: "education-bus-stop",
        distance: 100,
        description: "Go straight towards Education Bus Stop",
        name: "Campus Road"
      },
      {
        to: "wema-bank",
        distance: 150,
        description: "Continue to Wema Bank",
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Sports Center Junction",
    commonName: "Sports Center",
    icon: "T",
    coordinates: { x: 200, y: 550 },
    connections: [
      {
        to: "main-gate",
        distance: 200,
        description: "Continue to Main Gate",
        name: "Campus Road"
      },
      {
        to: "sports-center-sports",
        distance: 50,
        description: "Turn to Sports Center",
        name: "Campus Road"
      },
      {
        to: "sports-center-bus-stop",
        distance: 50,
        description: "Turn to Sports Center Bus Stop",
        name: "Campus Road"
      },
      {
        to: "new-hall-junction",
        distance: 400,
        description: "Continue to New Hall Junction",
        name: "Campus Road"
      },
      {
        to: "cits-bus-stop",
        distance: 100,
        description: "Continue to CITS Bus Stop",
        name: "Campus Road"
      }
    ]
  },
  {
    name: "New Hall Junction",
    commonName: "New Hall",
    icon: "T",
    coordinates: { x: 200, y: 1050 },
    connections: [
      {
        to: "main-gate",
        distance: 200,
        description: "Continue to Main Gate",
        name: "Campus Road"
      },
      {
        to: "new-hall-bus-stop",
        distance: 50,
        description: "Turn to New Hall Bus Stop",
        name: "Campus Road"
      },
      {
        to: "cits-bus-stop",
        distance: 100,
        description: "Continue to CITS Bus Stop",
        name: "Campus Road"
      },
      {
        to: "ecobank-junction",
        distance: 100,
        description: "Continue to Ecobank Junction",
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Ecobank Junction",
    commonName: "Ecobank",
    icon: "T",
    coordinates: { x: 250, y: 1150 },
    connections: [
      {
        to: "cits-bus-stop",
        distance: 100,
        description: "Continue to CITS Bus Stop",
        name: "Campus Road"
      },
      {
        to: "new-hall-junction",
        distance: 100,
        description: "Continue to New Hall Junction",
        name: "Campus Road"
      }
    ]
  },
  {
    name: "CITS Junction",
    commonName: "CITS",
    icon: "T", 
    coordinates: { x: 200, y: 650 },
    connections: [
      {
        to: "cits-bus-stop",
        distance: 50,
        description: "Continue to CITS Bus Stop",
        name: "Campus Road"
      },
      {
        to: "sports-center-junction",
        distance: 100,
        description: "Continue to Sports Center Junction",
        name: "Campus Road"
      }
    ]
  }
];

export const junctions = generateLocations({
  locations: junctionsDetails,
  locationType: "junction",
  idType: "suffix"
});