import {  Movie } from "../../movies/movies-container/models/movie.model";

export interface Character {
  id?: string;
  name: string;
  firstName: string;
  lastName: string;
  actualFirstName: string;
  actualLastName: string;
  description: string;
  image: string;

  movies?:Movie[];

}


