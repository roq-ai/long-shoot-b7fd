import { IssueInterface } from 'interfaces/issue';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerSupportInterface {
  id?: string;
  user_id: string;
  issue_id: string;
  created_at?: any;
  updated_at?: any;
  issue?: IssueInterface[];
  user?: UserInterface;
  _count?: {
    issue?: number;
  };
}

export interface CustomerSupportGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  issue_id?: string;
}
