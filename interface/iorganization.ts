import { SubscriptionStatusType } from '@share/enums/subscription-status-type';
import { SubscriptionTargetType } from '@share/enums/subscription-target-type';
import { UserRole } from '@share/enums/user-role';

export interface IOrganization {
  id: number;
  name: string;
  description: string | null;
  target: SubscriptionTargetType;
  status: SubscriptionStatusType;
  role: UserRole;
  createdAt: Date;
  // updatedAt: Date;
  // permission: IPermission;
}
