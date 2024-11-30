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
        description: "Turn to Sports Center",
        name: "Campus Road"
      },
      {
        to: 'new-hall-junction',
        distance: 400,
        description: 'Continue to New Hall Junction',
        name: "Campus Road"
      }
    ]
  }, {
    name: "New Hall Junction",
    commonName: "New Hall",
    icon: "T",
    coordinates: { x: 200, y: 950 },
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
        description: "Turn to New Hall",
        name: "Campus Road"
      }
    ]
  }
]

export const junctions = generateLocations({
  locations: junctionsDetails,
  locationType: "junction",
  idType: "suffix"
});