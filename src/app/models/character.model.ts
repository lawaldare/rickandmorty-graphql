export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender?: string;
  origin?: {
    name: string;
  };
  location?: {
    name: string;
  };
  episode?: {
    name: string;
  }[];
  image?: string;
}
