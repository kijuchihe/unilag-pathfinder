import { LocationBasicDetailsType } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const sportDetails: LocationBasicDetailsType[] = [
  {
    name: "Sports Center",
    commonName: "Sports Center",
    icon: "🏐",
    coordinates: { x: 250, y: 550 },
    connections: []
  }
]

export const sports = generateLocations({
  locations: sportDetails,
  locationType: "sports",
  idType: "suffix",
});