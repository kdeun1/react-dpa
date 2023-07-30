import { AxiosResponse } from 'axios';
import axiosInstance from '../instance';
import type {
  TrendingAllQueryParams,
  TredingAllResponse
} from './types';

const getTrendingAllApi = (
  time_window: 'day' | 'week' = 'day',
  params?: TrendingAllQueryParams
): Promise<AxiosResponse<TredingAllResponse>> => {
  return axiosInstance.get(`trending/all/${time_window}`, { params });
}

export {
  getTrendingAllApi,
}