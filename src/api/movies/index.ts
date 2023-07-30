import { AxiosResponse } from 'axios';
import axiosInstance from '../instance';
import type {
  MovieDetailsQueryParams,
  MovieDetailResponse
} from './types';

const getMovieDetailsApi = (
  movie_id: number,
  params?: MovieDetailsQueryParams
): Promise<AxiosResponse<MovieDetailResponse>> => {
  return axiosInstance.get(`movie/${movie_id}`, { params });
}

export {
  getMovieDetailsApi,
}