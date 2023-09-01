import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GameTesterInterface {
  id?: string;
  user_id: string;
  game_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface GameTesterGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  game_id?: string;
}
