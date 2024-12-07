import { ILocation } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const hallsBasicDetails: Omit<ILocation, "id" | "type" | "isHidden">[] = [
  {
    name: "Multi Purpose Hall",
    commonName: "Multi Purpose",
    icon: "🏫",
    coordinates: { x: 400, y: 100 },
    connections: [
      {
        name: "University Road",
        to: "wema-bank",
        distance: 100,
        description: "Continue to Wema Bank"
      },
      {
        name: "University Road",
        to: "sports-center-bus-stop",
        distance: 200,
        description: "Continue to Sports Center Bus Stop"
      },
      {
        name: "University Road",
        to: "main-gate",
        distance: 150,
        description: "Continue to Main Gate"
      }
    ]
  },
  {
    name: "Jelili Adebisi Hall",
    commonName: "Jelili Adebisi",
    icon: "🏫",
    coordinates: { x: 400, y: 200 },
    connections: [
      {
        name: "University Road",
        to: "wema-bank",
        distance: 100,
        description: "Continue to Wema Bank"
      },
      {
        name: "University Road",
        to: "new-hall-junction",
        distance: 300,
        description: "Continue to New Hall Junction"
      },
      {
        name: "University Road",
        to: "faculty-of-arts",
        distance: 50,
        description: "Continue to Faculty of Arts"
      }
    ]
  },
  {
    name: "New Hall",
    commonName: "New Hall",
    icon: "🏫",
    coordinates: { x: 200, y: 1000 },
    connections: [
      {
        name: "University Road",
        to: "new-hall-bus-stop",
        distance: 50,
        description: "Continue to New Hall Bus Stop"
      },
      {
        name: "University Road",
        to: "cits-bus-stop",
        distance: 100,
        description: "Continue to CITS Bus Stop"
      },
      {
        name: "University Road",
        to: "new-hall-junction",
        distance: 50,
        description: "Continue to New Hall Junction"
      }
    ]
  }
]

export const halls: ILocation[] = generateLocations({
  locations: hallsBasicDetails,
  locationType: "hall",
  idType: "prefix",
  defaultIcon: "🏫",
  idAddition: "faculty-of"
})
