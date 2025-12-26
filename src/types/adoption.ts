export interface MedicalViewModel {
  vaccine: string;
  isDewormed: boolean;
  isSterilized: string;
  healthState: string;
}

export enum Compatibility {
  DOGS = "DOGS",
  CATS = "CATS",
  CHILDREN = "CHILDREN",
  OTHER = "OTHER",
}

export enum Personality {
  FRIENDLY = "FRIENDLY",
  SHY = "SHY",
  PLAYFUL = "PLAYFUL",
  CALM = "CALM",
}
export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum Size {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export enum AnimalStatus {
  AVAILABLE = "AVAILABLE",
  ADOPTED = "ADOPTED",
  PENDING = "PENDING",
}

export interface AnimalViewModel {
  id: string;
  ownerId: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  description: string;
  principalImageUrl: string;
  extraImagesUrls?: string[];
  medicalRecord: MedicalViewModel;
  adoptionRequirements: string[];
  compatibility: Compatibility[];
  personality: Personality[];
  sex: Sex;
  size: Size;
  status: AnimalStatus;
}
