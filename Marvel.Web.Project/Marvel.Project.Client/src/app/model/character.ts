export interface Character {
  id?: string;
  firstName: string;
  lastName: string;
  name: string;
  image: string;
  description:string ;
  role: Role;
}

export enum Role {
  HERO,
  VILLAIN,
}
