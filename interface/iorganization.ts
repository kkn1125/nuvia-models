import { PlanNameType } from '@share/enums/plan-name-type.enum';
import { SubscriptionStatusType } from '@share/enums/subscription-status-type';
import { SubscriptionTargetType } from '@share/enums/subscription-target-type';
import { UserRole } from '@share/enums/user-role';

export interface IOrganization {
  id: number;
  organizationId: number;
  name: string;
  description: string | null;
  target: SubscriptionTargetType;
  status: SubscriptionStatusType;
  role: UserRole;
  plan: PlanNameType;
  createdAt: Date;
  // updatedAt: Date;
  // permission: IPermission;
}
