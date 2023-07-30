interface MovieDetailsQueryParams {
  append_to_response?: string;
  language?: string;
}

interface MovieDetailResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: unknown;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type {
  MovieDetailsQueryParams,
  MovieDetailResponse,
}