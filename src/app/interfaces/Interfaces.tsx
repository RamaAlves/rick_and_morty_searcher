export interface CharacterSchema {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface LocationSchema {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface EpisodeSchema {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
