interface DiscoverMovieQueryParams {
  with_genres?: string;
}

interface DiscoverMovieResponseResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface DiscoverMovieResponse {
  page: number;
  results: DiscoverMovieResponseResult[];
  total_pages: number;
  total_results: number;
}

export type {
  DiscoverMovieQueryParams,
  DiscoverMovieResponse,
}