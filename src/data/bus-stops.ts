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