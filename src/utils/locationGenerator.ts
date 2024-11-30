import { ILocation, LocationType } from "@/types"

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // remove non-word, non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // replace whitespace and underscores with hyphens
    .replace(/^-+/, '') // trim leading hyphens
    .replace(/-+$/, ''); // trim trailing hyphens
}

interface IGenerateIdParams {
  idType: "prefix" | "suffix";
  idAddition?: string;
  commonName: string;
}

function generateId({ idType, idAddition, commonName }: IGenerateIdParams) {
  return idType === "prefix" ? slugify(`${idAddition || "location"}-${slugify(commonName)}`) : slugify(`${slugify(commonName)}-${idAddition || "location"}`)
}

interface GenerateLocationsParams {
  idType: "prefix" | "suffix";
  locations: Omit<ILocation, "id" | "type" | "isHidden">[];
  locationType: LocationType;
  defaultIcon?: string;
  idAddition?: string
}

export const generateLocations = (
  {
    idType,
    locations,
    locationType,
    defaultIcon,
    idAddition
  }: GenerateLocationsParams): ILocation[] => {

  const newLocations: ILocation[] = locations.map(location => {
    return {
      ...location,
      id: generateId({ idType, idAddition: idAddition || locationType, commonName: location.commonName }),
      type: locationType,
      icon: location.icon || defaultIcon || ''

    }
  })

  return newLocations
}