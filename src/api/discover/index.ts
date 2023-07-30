import { AxiosResponse } from 'axios';
import axiosInstance from '../instance';
import type {
  DiscoverMovieQueryParams,
  DiscoverMovieResponse,
} from './types';

const getDiscoverMovieApi = (
  params?: DiscoverMovieQueryParams
): Promise<AxiosResponse<DiscoverMovieResponse>> => {
  return axiosInstance.get(`discover/movie/`, { params });
}

export {
  getDiscoverMovieApi,
}