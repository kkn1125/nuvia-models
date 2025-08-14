import { SubscriptionStatusType } from '@share/enums/subscription-status-type';
import { SubscriptionTargetType } from '@share/enums/subscription-target-type';

export interface IOrganization {
  id: number;
  name: string;
  target: SubscriptionTargetType;
  status: SubscriptionStatusType;
  createdAt: Date;
  updatedAt: Date;
}
