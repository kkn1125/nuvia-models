import { SubscriptionStatusType } from '@share/enums/subscription-status-type';
import { SubscriptionTargetType } from '@share/enums/subscription-target-type';
import { IPermission } from './ipermission';

export interface IOrganization {
  id: number;
  name: string;
  description: string | null;
  target: SubscriptionTargetType;
  status: SubscriptionStatusType;
  createdAt: Date;
  updatedAt: Date;
  permission: IPermission;
}
