import { LocationBasicDetailsType } from "@/types";
import { generateLocations } from "@/utils/locationGenerator";

const officesDetails: LocationBasicDetailsType[] = []

export const importantOffices = generateLocations({
  locations: officesDetails,
  locationType: "office",
  idType: "prefix"
});
