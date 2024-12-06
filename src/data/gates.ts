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
    ]
  },
]