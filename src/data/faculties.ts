import { ILocation } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const facultiesBasicDetails: Omit<ILocation, "id" | "type" | "isHidden">[] = [
  {
    name: "Faculty of Science",
    commonName: "Science",
    icon: "🔬",
    coordinates: { x: 400, y: 100 },
    connections: [
      {
        to: 'main-gate',
        distance: 200,
        description: 'Walk to Main Gate',
        name: "Campus Road"
      },
      {
        to: 'sports-center-bus-stop',
        distance: 300,
        description: 'Walk to Sports Center Bus Stop',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Faculty of Arts",
    commonName: "Arts",
    icon: "🎨",
    coordinates: { x: 400, y: 400 },
    connections: [
      {
        to: 'gtbank',
        distance: 100,
        description: 'Walk to GT Bank',
        name: "Campus Road"
      },
      {
        to: 'sports-center-junction',
        distance: 200,
        description: 'Walk to Sports Center Junction',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Faculty of Engineering",
    commonName: "Engineering",
    icon: "🔧",
    coordinates: { x: 100, y: 400 },
    connections: [
      {
        to: 'main-gate',
        distance: 150,
        description: 'Walk to Main Gate',
        name: "Campus Road"
      },
      {
        to: 'wema-bank',
        distance: 200,
        description: 'Walk to Wema Bank',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Faculty of Environmental Science",
    commonName: "Environmental Science",
    icon: "🌳",
    coordinates: { x: 0, y: 400 },
    connections: [
      {
        to: 'main-gate',
        distance: 250,
        description: 'Walk to Main Gate',
        name: "Campus Road"
      },
      {
        to: 'education-bus-stop',
        distance: 200,
        description: 'Walk to Education Bus Stop',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Faculty of Education",
    commonName: "Education",
    icon: "📚",
    coordinates: { x: 300, y: 300 },
    connections: [
      {
        to: 'access-bank',
        distance: 50,
        description: 'Walk to Access Bank',
        name: "Campus Road"
      },
      {
        to: 'education-junction',
        distance: 100,
        description: 'Walk to Education Junction',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Faculty of Law",
    commonName: "Law",
    icon: "👨‍⚖️",
    coordinates: { x: 500, y: 300 },
    connections: [
      {
        to: 'gtbank',
        distance: 50,
        description: 'Walk to GT Bank',
        name: "Campus Road"
      },
      {
        to: 'new-hall-junction',
        distance: 300,
        description: 'Walk to New Hall Junction',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Faculty of Management Science",
    commonName: "Management Science",
    icon: "💼",
    coordinates: { x: 700, y: 300 },
    connections: [
      {
        to: 'zenith-bank',
        distance: 50,
        description: 'Walk to Zenith Bank',
        name: "Campus Road"
      },
      {
        to: 'new-hall-junction',
        distance: 400,
        description: 'Walk to New Hall Junction',
        name: "Campus Road"
      }
    ]
  }
]

export const faculties: ILocation[] = generateLocations({
  locations: facultiesBasicDetails,
  locationType: "faculty",
  idType: "prefix",
  defaultIcon: "🏫",
  idAddition: "faculty-of"
})
