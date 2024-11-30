import { locations } from '../data/locations';
import { ILocation, RouteDetails, TravelTimes, RouteSegment } from '../types';

interface Distance {
  [key: string]: number;
}

interface Previous {
  [key: string]: string | null;
}

interface QueueItem {
  id: string;
  priority: number;
}

class PriorityQueue {
  private items: QueueItem[];

  constructor() {
    this.items = [];
  }

  enqueue(id: string, priority: number) {
    this.items.push({ id, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): string | null {
    return this.items.length > 0 ? this.items.shift()?.id || null : null;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

export function findPathWithDirections(startId: string, endId: string): RouteDetails {
  const distances: { [key: string]: number } = {};
  const previous: { [key: string]: string | null } = {};
  const queue = new PriorityQueue();

  // Initialize distances
  locations.forEach(loc => {
    distances[loc.id] = loc.id === startId ? 0 : Infinity;
    previous[loc.id] = null;
  });

  queue.enqueue(startId, 0);

  // Find shortest path
  while (!queue.isEmpty()) {
    const currentId = queue.dequeue();
    if (!currentId) continue;

    const current = locations.find(loc => loc.id === currentId);
    if (!current) continue;

    // Check all connections
    for (const connection of current.connections) {
      const newDistance = distances[currentId] + connection.distance;
      
      if (newDistance < distances[connection.to]) {
        distances[connection.to] = newDistance;
        previous[connection.to] = currentId;
        queue.enqueue(connection.to, newDistance);
      }
    }
  }

  // Build the path
  const path: string[] = [];
  let current = endId;

  // Check if path exists
  if (distances[endId] === Infinity) {
    return {
      path: [],
      segments: [],
      directions: ['No path found between these locations'],
      totalDistance: 0
    };
  }

  // Reconstruct path
  while (current) {
    path.unshift(current);
    current = previous[current] || null;
  }

  // Create segments and directions
  const segments: RouteSegment[] = [];
  const directions: string[] = [];
  let totalDistance = 0;
  let directionCount = 1;

  // Add start location
  const startLoc = locations.find(loc => loc.id === startId);
  if (startLoc && !startLoc.isHidden) {
    directions.push(`${directionCount}. Start at ${startLoc.name}`);
    directionCount++;
  }

  // Build segments and directions
  for (let i = 0; i < path.length - 1; i++) {
    const fromLoc = locations.find(loc => loc.id === path[i]);
    const toLoc = locations.find(loc => loc.id === path[i + 1]);

    if (fromLoc && toLoc) {
      const connection = fromLoc.connections.find(conn => conn.to === toLoc.id);
      
      if (connection) {
        // Always add segment for continuous path
        segments.push({
          from: fromLoc,
          to: toLoc,
          connection: connection
        });

        // Add direction for visible locations
        if (!toLoc.isHidden) {
          const isLast = i === path.length - 2;
          const action = isLast ? 'Get to' : 'Move to';
          directions.push(`${directionCount}. ${action} ${toLoc.name}`);
          directionCount++;
        }

        totalDistance += connection.distance;
      }
    }
  }

  return {
    path,
    segments,
    directions,
    totalDistance
  };
}

export function calculateTravelTime(distance: number): TravelTimes {
  // Average speeds (meters per minute)
  const walkingSpeed = 83;  // 5 km/h
  const runningSpeed = 167; // 10 km/h
  const cyclingSpeed = 250; // 15 km/h

  return {
    walking: Math.round(distance / walkingSpeed),
    running: Math.round(distance / runningSpeed),
    cycling: Math.round(distance / cyclingSpeed)
  };
}
