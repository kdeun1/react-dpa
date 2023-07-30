import { AxiosResponse } from 'axios';
import axiosInstance from '../instance';
import type {
  MovieNowPlayingQueryParams,
  MovieNowPlayingResponse,
  MovieTopRatedQueryParams,
  MovieTopRatedResponse,
} from './types';

const getMovieNowPlayingApi = (
  params?: MovieNowPlayingQueryParams,
): Promise<AxiosResponse<MovieNowPlayingResponse>> => {
  return axiosInstance.get('movie/now_playing', { params });
}

const getMovieTopRatedApi = (
  params?: MovieTopRatedQueryParams,
): Promise<AxiosResponse<MovieTopRatedResponse>> => {
  return axiosInstance.get('movie/top_rated', { params });
};

export {
  getMovieNowPlayingApi,
  getMovieTopRatedApi,
}