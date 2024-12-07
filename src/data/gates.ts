import { ILocation } from "@/types";

export const gates: ILocation[] = [
  {
    id: "main-gate",
    name: "Unilag Main Gate",
    commonName: "Gate",
    coordinates: { x: 200, y: 0 },
    type: "gate",
    icon: "🏛️",
    connections: [
      {
        to: "education-junction",
        distance: 200,
        description: "Walk to Education Junction",
        name: "Campus Road"
      },
      {
        to: "faculty-of-science",
        distance: 250,
        description: "Walk to Faculty of Science",
        name: "Campus Road"
      },
      {
        to: "first-bank",
        distance: 150,
        description: "Walk to First Bank",
        name: "Campus Road"
      },
      {
        to: "security-office",
        distance: 50,
        description: "Walk to Security Office",
        name: "Campus Road"
      },
      {
        to: "vc-office",
        distance: 100,
        description: "Walk to Vice Chancellor's Office",
        name: "Campus Road"
      }
    ]
  },
  {
    id: "secondary-gate",
    name: "Unilag Secondary Gate",
    commonName: "Secondary Gate",
    coordinates: { x: 50, y: 300 },
    type: "gate",
    icon: "🚪",
    connections: [
      {
        to: "faculty-of-environmental-science",
        distance: 100,
        description: "Walk to Faculty of Environmental Science",
        name: "Campus Road"
      },
      {
        to: "faculty-of-engineering",
        distance: 200,
        description: "Walk to Faculty of Engineering",
        name: "Campus Road"
      },
      {
        to: "main-gate",
        distance: 300,
        description: "Walk to Main Gate",
        name: "Campus Road"
      }
    ]
  }
];