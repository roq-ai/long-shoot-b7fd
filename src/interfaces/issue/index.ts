import { CustomerSupportInterface } from 'interfaces/customer-support';
import { GetQueryInterface } from 'interfaces';

export interface IssueInterface {
  id?: string;
  description?: string;
  customer_support_id: string;
  created_at?: any;
  updated_at?: any;

  customer_support?: CustomerSupportInterface;
  _count?: {};
}

export interface IssueGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  customer_support_id?: string;
}
