import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GameOwnerInterface {
  id?: string;
  user_id: string;
  game_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface GameOwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  game_id?: string;
}
