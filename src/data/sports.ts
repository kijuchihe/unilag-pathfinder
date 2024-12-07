import { LocationBasicDetailsType } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const sportDetails: LocationBasicDetailsType[] = [
  {
    name: "Sports Center",
    commonName: "Sports Center",
    icon: "🏐",
    coordinates: { x: 250, y: 550 },
    connections: [
      {
        to: "sports-center-junction",
        distance: 50,
        description: "Walk to Sports Center Junction",
        name: "Campus Road"
      },
      {
        to: "sports-center-bus-stop",
        distance: 50,
        description: "Walk to Sports Center Bus Stop",
        name: "Campus Road"
      },
      {
        to: "faculty-of-arts",
        distance: 200,
        description: "Walk to Faculty of Arts",
        name: "Campus Road"
      },
      {
        to: "student-affairs-office",
        distance: 150,
        description: "Walk to Student Affairs Office",
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Swimming Pool",
    commonName: "Swimming Pool",
    icon: "🏊",
    coordinates: { x: 300, y: 600 },
    connections: [
      {
        to: "sports-center",
        distance: 100,
        description: "Walk to Sports Center",
        name: "Campus Road"
      },
      {
        to: "sports-center-junction",
        distance: 150,
        description: "Walk to Sports Center Junction",
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Tennis Court",
    commonName: "Tennis Court",
    icon: "🎾",
    coordinates: { x: 200, y: 500 },
    connections: [
      {
        to: "sports-center",
        distance: 50,
        description: "Walk to Sports Center",
        name: "Campus Road"
      },
      {
        to: "sports-center-bus-stop",
        distance: 100,
        description: "Walk to Sports Center Bus Stop",
        name: "Campus Road"
      }
    ]
  }
]

export const sports = generateLocations({
  locations: sportDetails,
  locationType: "sports",
  idType: "suffix",
});