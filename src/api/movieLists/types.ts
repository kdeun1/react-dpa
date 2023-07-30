interface MovieNowPlayingQueryParams {
  language?: string;
  page?: number;
  region?: string;
}

interface MovieNowPlayingResponseResult {
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

interface MovieNowPlayingResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieNowPlayingResponseResult[];
  total_pages: number;
  total_results: number;
}

export type {
  MovieNowPlayingQueryParams,
  MovieNowPlayingResponse,
}