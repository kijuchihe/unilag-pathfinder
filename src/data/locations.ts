import { ILocation } from '../types';
import { banks } from './banks';
import { busStops } from './bus-stops';
import { faculties } from './faculties';
import { gates } from './gates';
import { halls } from './halls';
import { importantOffices } from './important-offices';
import { junctions } from './junctions';
import { sports } from './sports';

export const locations: ILocation[] = [
  ...gates,
  ...faculties,
  ...importantOffices,
  ...banks,
  ...busStops,
  ...junctions,
  ...sports,
  ...halls
];