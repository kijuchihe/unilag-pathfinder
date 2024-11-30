export type LocationType =
  | 'hostel'
  | 'food'
  | 'hall'
  | 'busStop'
  | 'gate'
  | 'sports'
  | 'faculty'
  | 'department'
  | 'junction'
  | 'waypoint'
  | 'bank'
  | 'carPark'
  | 'office';

export interface IConnection {
  to: string;
  distance: number;
  description: string;
  name?: string; // Optional road/path name
}

export type LocationBasicDetailsType = Omit<ILocation, 'id' | 'type' | 'isHidden'>

export interface ILocation {
  id: string;
  name: string;
  commonName: string;
  coordinates: {
    x: number;
    y: number;
  };
  type: LocationType;
  icon?: string; // Made optional since hidden junctions don't need icons
  connections: IConnection[];
  isHidden?: boolean; // For waypoints that shouldn't be shown in the UI
}

export interface RouteSegment {
  from: ILocation;
  to: ILocation;
  connection: IConnection;
}

export interface RouteDetails {
  path: string[];
  segments: RouteSegment[];
  totalDistance: number;
  directions: string[];
}

export interface TravelTimes {
  walking: number;
  running: number;
  cycling: number;
  driving: number;
}

export interface MapBounds {
  northEast: {
    lat: number;
    lng: number;
  };
  southWest: {
    lat: number;
    lng: number;
  };
}
