interface TrendingAllQueryParams {
  language?: string;
}

interface TredingAllResponseResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface TredingAllResponse {
  page: number;
  results: TredingAllResponseResult[];
  total_pages: number;
  total_results: number;
}

export type {
  TrendingAllQueryParams,
  TredingAllResponse,
}