import { AxiosResponse } from 'axios';
import axiosInstance from '../instance';
import type {
  MovieNowPlayingQueryParams,
  MovieNowPlayingResponse
} from './types';

const getMovieNowPlayingApi = (
  params?: MovieNowPlayingQueryParams,
): Promise<AxiosResponse<MovieNowPlayingResponse>> => {
  return axiosInstance.get('movie/now_playing', { params });
}

export {
  getMovieNowPlayingApi,
}