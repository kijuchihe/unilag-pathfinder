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
      }, 
      {
        to: 'sports-center-bus-stop',
        distance: 100,
        description: 'Walk to Sports Center',
        name: "Campus Road"
      },
      {
        to: 'education-junction',
        distance: 150,
        description: 'Walk to Education Junction',
        name: "Campus Road"
      },
      {
        to: 'faculty-of-engineering',
        distance: 200,
        description: 'Walk to Faculty of Engineering',
        name: "Campus Road"
      },
      {
        to: 'multi-purpose-hall',
        distance: 250,
        description: 'Walk to Multi Purpose Hall',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "First Bank",
    commonName: "First Bank",
    icon: '🏦',
    coordinates: { x: 200, y: 200 },
    connections: [
      {
        to: 'education-junction',
        distance: 100,
        description: 'Walk to Education Junction',
        name: "Campus Road"
      },
      {
        to: 'main-gate',
        distance: 150,
        description: 'Walk to Main Gate',
        name: "Campus Road"
      },
      {
        to: 'vc-office',
        distance: 200,
        description: 'Walk to Vice Chancellor\'s Office',
        name: "Campus Road"
      },
      {
        to: 'faculty-of-science',
        distance: 250,
        description: 'Walk to Faculty of Science',
        name: "Campus Road"
      }
    ]
  },
  {
    name: "Access Bank",
    commonName: "Access",
    icon: '🏦',
    coordinates: { x: 300, y: 300 },
    connections: [
      {
        to: 'faculty-of-education',
        distance: 50,
        description: 'Walk to Faculty of Education',
        name: "Campus Road"
      },
      {
        to: 'sports-center-junction',
        distance: 100,
        description: 'Walk to Sports Center Junction',
        name: "Campus Road"
      },
      {
        to: 'registry',
        distance: 150,
        description: 'Walk to Registry',
        name: "Campus Road"
      },
      {
        to: 'student-affairs-office',
        distance: 200,
        description: 'Walk to Student Affairs Office',
        name: "Campus Road"
      }
    ]
  }, 
  {
    name: "GTBank",
    commonName: "GT",
    icon: '🏦',
    coordinates: { x: 400, y: 400 },
    connections: [
      {
        to: 'faculty-of-law',
        distance: 50,
        description: 'Walk to Faculty of Law',
        name: "Campus Road"
      },
      {
        to: 'sports-center-bus-stop',
        distance: 100,
        description: 'Walk to Sports Center Bus Stop',
        name: "Campus Road"
      },
      {
        to: 'faculty-of-arts',
        distance: 150,
        description: 'Walk to Faculty of Arts',
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
    name: "Zenith Bank",
    commonName: "Zenith",
    icon: '🏦',
    coordinates: { x: 500, y: 500 },
    connections: [
      {
        to: 'faculty-of-management-science',
        distance: 50,
        description: 'Walk to Faculty of Management Science',
        name: "Campus Road"
      },
      {
        to: 'new-hall-junction',
        distance: 200,
        description: 'Walk to New Hall Junction',
        name: "Campus Road"
      },
      {
        to: 'cits-bus-stop',
        distance: 250,
        description: 'Walk to CITS Bus Stop',
        name: "Campus Road"
      },
      {
        to: 'ecobank-junction',
        distance: 300,
        description: 'Walk to Ecobank Junction',
        name: "Campus Road"
      }
    ]
  }
]

export const banks = generateLocations({
  locations: banksDetails,
  locationType: "bank",
  idType: "suffix",
  defaultIcon: "🏦"
})