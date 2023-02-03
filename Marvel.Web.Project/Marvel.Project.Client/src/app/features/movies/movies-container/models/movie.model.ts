export interface Movie {
  id?: string;
  name: string;
  releaseDate: Date;
  description: string;
  image: string;
}

export interface FeaturedMovie extends Movie {}
