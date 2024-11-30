import { ILocation } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const facultiesBasicDetails: Omit<ILocation, "id" | "type" | "isHidden">[] = [
  {
    name: "Faculty of Science",
    commonName: "Science",
    icon: "🔬",
    coordinates: { x: 400, y: 100 },
    connections: []
  },
  {
    name: "Faculty of Arts",
    commonName: "Arts",
    icon: "🎨",
    coordinates: { x: 400, y: 400 },
    connections: []
  },
  {
    name: "Faculty of Engineering",
    commonName: "Engineering",
    icon: "🔧",
    coordinates: { x: 100, y: 400 },
    connections: []
  },
  {
    name: "Faculty of Environmental Science",
    commonName: "Environmental Science",
    icon: "🌳",
    coordinates: { x: 0, y: 400 },
    connections: []
  },
  {
    name: "Faculty of Education",
    commonName: "Education",
    icon: "📚",
    coordinates: { x: 300, y: 300 },
    connections: []
  },
  {
    name: "Faculty of Law",
    commonName: "Law",
    icon: "👨‍⚖️",
    coordinates: { x: 500, y: 300 },
    connections: []
  },
  {
    name: "Faculty of Management Science",
    commonName: "Management Science",
    icon: "💼",
    coordinates: { x: 700, y: 300 },
    connections: []
  }
]

export const faculties: ILocation[] = generateLocations({
  locations: facultiesBasicDetails,
  locationType: "faculty",
  idType: "prefix",
  defaultIcon: "🏫",
  idAddition: "faculty-of"
})