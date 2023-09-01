import axios from 'axios';
import queryString from 'query-string';
import { GameTesterInterface, GameTesterGetQueryInterface } from 'interfaces/game-tester';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGameTesters = async (
  query?: GameTesterGetQueryInterface,
): Promise<PaginatedInterface<GameTesterInterface>> => {
  const response = await axios.get('/api/game-testers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGameTester = async (gameTester: GameTesterInterface) => {
  const response = await axios.post('/api/game-testers', gameTester);
  return response.data;
};

export const updateGameTesterById = async (id: string, gameTester: GameTesterInterface) => {
  const response = await axios.put(`/api/game-testers/${id}`, gameTester);
  return response.data;
};

export const getGameTesterById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/game-testers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGameTesterById = async (id: string) => {
  const response = await axios.delete(`/api/game-testers/${id}`);
  return response.data;
};
