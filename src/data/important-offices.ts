import { LocationBasicDetailsType } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const officesDetails: LocationBasicDetailsType[] = [
  {
    name: "Vice Chancellor's Office",
    commonName: "VC Office",
    icon: "🏛️",
    coordinates: { x: 250, y: 150 },
    connections: [
      {
        to: 'main-gate',
        distance: 100,
        description: 'Walk to Main Gate',
        name: "Campus Road"
      },
      {
        to: 'faculty-of-science',
        distance: 200,
        description: 'Walk to Faculty of Science',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Registry",
    commonName: "Registry",
    icon: "📋",
    coordinates: { x: 300, y: 250 },
    connections: [
      {
        to: 'education-junction',
        distance: 100,
        description: 'Walk to Education Junction',
        name: "Campus Road"
      },
      {
        to: 'faculty-of-education',
        distance: 150,
        description: 'Walk to Faculty of Education',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Student Affairs Office",
    commonName: "Student Affairs",
    icon: "🎓",
    coordinates: { x: 450, y: 350 },
    connections: [
      {
        to: 'faculty-of-arts',
        distance: 50,
        description: 'Walk to Faculty of Arts',
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
    name: "Security Office",
    commonName: "Security",
    icon: "🛡️",
    coordinates: { x: 150, y: 300 },
    connections: [
      {
        to: 'main-gate',
        distance: 50,
        description: 'Walk to Main Gate',
        name: "Campus Road"
      },
      {
        to: 'faculty-of-engineering',
        distance: 100,
        description: 'Walk to Faculty of Engineering',
        name: "Campus Road"
      }
    ]
  }
];

export const importantOffices = generateLocations({
  locations: officesDetails,
  locationType: "office",
  idType: "prefix"
});
