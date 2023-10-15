export interface Character {
  id?: string;
  firstname: string;
  lastname: string;
  name: string;
  image: string;
  description:string ;
  role: Role;
}

export enum Role {
  HERO,
  VILLAIN,
}
