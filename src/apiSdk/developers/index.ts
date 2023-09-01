import axios from 'axios';
import queryString from 'query-string';
import { DeveloperInterface, DeveloperGetQueryInterface } from 'interfaces/developer';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDevelopers = async (
  query?: DeveloperGetQueryInterface,
): Promise<PaginatedInterface<DeveloperInterface>> => {
  const response = await axios.get('/api/developers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDeveloper = async (developer: DeveloperInterface) => {
  const response = await axios.post('/api/developers', developer);
  return response.data;
};

export const updateDeveloperById = async (id: string, developer: DeveloperInterface) => {
  const response = await axios.put(`/api/developers/${id}`, developer);
  return response.data;
};

export const getDeveloperById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/developers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDeveloperById = async (id: string) => {
  const response = await axios.delete(`/api/developers/${id}`);
  return response.data;
};
