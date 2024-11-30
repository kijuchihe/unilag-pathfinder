import { LocationBasicDetailsType } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const banksDetails: LocationBasicDetailsType[] = [
  {
    name: 'Wema Bank',
    commonName: 'Wema',
    icon: '🏦',
    coordinates: { x: 200, y: 400 },
    connections: [
      {
        to: 'education-bus-stop',
        distance: 100,
        description: 'Walk to Education Bus Stop',
        name: "Campus Road"
      }, {
        to: 'sports-center-bus-stop',
        distance: 100,
        description: 'Walk to Sports Center',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "First Bank",
    commonName: "First Bank",
    icon: '🏦',
    coordinates: { x: 200, y: 200 },
    connections: []
  },
  {
    name: "Access Bank",
    commonName: "Access",
    icon: '🏦',
    coordinates: { x: 300, y: 300 },
    connections: []
  }, {
    name: "GTBank",
    commonName: "GT",
    icon: '🏦',
    coordinates: { x: 400, y: 400 },
    connections: []
  },
  {
    name: "Zenith Bank",
    commonName: "Zenith",
    icon: '🏦',
    coordinates: { x: 500, y: 500 },
    connections: []
  }
]

export const banks = generateLocations({
  locations: banksDetails,
  locationType: "bank",
  idType: "suffix",
  defaultIcon: "🏦"
})