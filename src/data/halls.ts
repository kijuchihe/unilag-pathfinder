import { ILocation } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const hallsBasicDetails: Omit<ILocation, "id" | "type" | "isHidden">[] = [
  {
    name: "Multi Purpose Hall",
    commonName: "Multi Purpose",
    icon: "🔬",
    coordinates: { x: 400, y: 100 },
    connections: [
      {
        name: "University Road",
        to: "wema-bank",
        distance: 100,
        description: "Continue to Wema Bank"
      }
    ]
  },
  {
    name: "Jelili Adebisi Hall",
    commonName: "Jelili Adebisi",
    icon: "🔬",
    coordinates: { x: 400, y: 100 },
    connections: [
      {
        name: "University Road",
        to: "wema-bank",
        distance: 100,
        description: "Continue to Wema Bank"
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
