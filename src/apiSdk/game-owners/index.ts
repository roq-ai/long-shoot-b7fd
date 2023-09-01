import axios from 'axios';
import queryString from 'query-string';
import { GameOwnerInterface, GameOwnerGetQueryInterface } from 'interfaces/game-owner';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGameOwners = async (
  query?: GameOwnerGetQueryInterface,
): Promise<PaginatedInterface<GameOwnerInterface>> => {
  const response = await axios.get('/api/game-owners', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGameOwner = async (gameOwner: GameOwnerInterface) => {
  const response = await axios.post('/api/game-owners', gameOwner);
  return response.data;
};

export const updateGameOwnerById = async (id: string, gameOwner: GameOwnerInterface) => {
  const response = await axios.put(`/api/game-owners/${id}`, gameOwner);
  return response.data;
};

export const getGameOwnerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/game-owners/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGameOwnerById = async (id: string) => {
  const response = await axios.delete(`/api/game-owners/${id}`);
  return response.data;
};
