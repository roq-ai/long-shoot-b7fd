import { DeveloperInterface } from 'interfaces/developer';
import { GetQueryInterface } from 'interfaces';

export interface GameInterface {
  id?: string;
  name: string;
  description?: string;
  developer_id: string;
  created_at?: any;
  updated_at?: any;

  developer?: DeveloperInterface;
  _count?: {};
}

export interface GameGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  developer_id?: string;
}
