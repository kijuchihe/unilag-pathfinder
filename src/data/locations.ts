import { ILocation } from '../types';
import { banks } from './banks';
import { busStops } from './bus-stops';
import { faculties } from './faculties';
import { importantOffices } from './important-offices';
import { junctions } from './junctions';
import { sports } from './sports';

export const UNILAG_BOUNDS = {
  northEast: { lat: 6.5220, lng: 3.4020 },
  southWest: { lat: 6.5150, lng: 3.3900 },
  center: { lat: 6.5180, lng: 3.3950 },
};

// Helper function to calculate distance between two points
// const calculateDistance = (coord1: { x: number; y: number }, coord2: { x: number; y: number }): number => {
//   const dx = coord2.x - coord1.x;
//   const dy = coord2.y - coord1.y;
//   return Math.sqrt(dx * dx + dy * dy);
// };

export const locations: ILocation[] = [
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
  ...faculties,
  ...importantOffices,
  ...banks,
  ...busStops,
  ...junctions,
  ...sports
];

export const otherLocations = []