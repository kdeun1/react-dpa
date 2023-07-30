import { AxiosResponse } from 'axios';
import axiosInstance from '../instance';
import type {
  SearchMultiQueryParams,
  SearchMultiResponse,
} from './types';

const getSearchMultiApi = (
  params: SearchMultiQueryParams,
): Promise<AxiosResponse<SearchMultiResponse>> => {
  return axiosInstance.get('search/multi', { params });
}

export {
  getSearchMultiApi,
}