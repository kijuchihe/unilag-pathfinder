import { LocationBasicDetailsType } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const busStopsDetails: LocationBasicDetailsType[] = [
  {
    name: "Eduction Bus Stop",
    commonName: "Education",
    icon: "🚏",
    coordinates: { x: 200, y: 300 },
    connections: [
      {
        name: "Campus Road",
        to: "education-junction",
        distance: 100,
        description: "Continue to Education Junction"
      },
      {
        name: "Campus Road",
        to: "wema-bank",
        distance: 100,
        description: "Continue to Wema Bank"
      },
      {
        name: "Campus Road",
        to: "sports-center-junction",
        distance: 250,
        description: "Continue to Sports Center Junction"
      },
      {
        name: "Campus Road",
        to: "faculty-of-environmental-science",
        distance: 200,
        description: "Continue to Faculty of Environmental Science"
      },
      {
        name: "Campus Road",
        to: "main-gate",
        distance: 300,
        description: "Continue to Main Gate"
      }
    ]
  },
  {
    name: "Sports Center Bus Stop",
    commonName: "Sports Center",
    icon: "🚏",
    coordinates: { x: 200, y: 500 },
    connections: [
      {
        name: "Campus Road",
        to: "sports-center-junction",
        distance: 50,
        description: "Continue to Sports Center Junction"
      },
      {
        name: "Campus Road",
        to: "cits-bus-stop",
        distance: 100,
        description: "Continue to CITS Bus Stop"
      },
      {
        name: "Campus Road",
        to: "gtbank",
        distance: 100,
        description: "Continue to GT Bank"
      },
      {
        name: "Campus Road",
        to: "faculty-of-arts",
        distance: 200,
        description: "Continue to Faculty of Arts"
      },
      {
        name: "Campus Road",
        to: "tennis-court",
        distance: 50,
        description: "Continue to Tennis Court"
      }
    ]
  },
  {
    name: "New Hall Bus Stop",
    commonName: "New Hall",
    icon: "🚏",
    coordinates: { x: 200, y: 1000 },
    connections: [
      {
        name: "Campus Road",
        to: "new-hall-junction",
        distance: 50,
        description: "Continue to New Hall Junction"
      },
      {
        name: "Campus Road",
        to: "cits-bus-stop",
        distance: 100,
        description: "Continue to CITS Bus Stop"
      },
      {
        name: "Campus Road",
        to: "new-hall",
        distance: 50,
        description: "Continue to New Hall"
      },
      {
        name: "Campus Road",
        to: "zenith-bank",
        distance: 250,
        description: "Continue to Zenith Bank"
      }
    ]
  },
  {
    name: "CITS Bus Stop",
    commonName: "CITS",
    icon: "🚏",
    coordinates: { x: 200, y: 600 },
    connections: [
      {
        name: "Campus Road",
        to: "cits-junction",
        distance: 50,
        description: "Continue to CITS Junction"
      },
      {
        name: "Campus Road",
        to: "ecobank-junction",
        distance: 100,
        description: "Continue to Ecobank Junction"
      },
      {
        name: "Campus Road",
        to: "new-hall-bus-stop",
        distance: 50,
        description: "Continue to New Hall Bus Stop"
      },
      {
        name: "Campus Road",
        to: "sports-center-bus-stop",
        distance: 100,
        description: "Continue to Sports Center Bus Stop"
      },
      {
        name: "Campus Road",
        to: "zenith-bank",
        distance: 250,
        description: "Continue to Zenith Bank"
      }
    ]
  }
]

export const busStops = generateLocations({
  locations: busStopsDetails,
  locationType: "busStop",
  idType: "suffix",
  idAddition: "bus-stop"
});