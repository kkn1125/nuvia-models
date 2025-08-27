import { SubscriptionStatusType } from '@share/enums/subscription-status-type';
import { SubscriptionTargetType } from '@share/enums/subscription-target-type';
import { UserRole } from '@share/enums/user-role';
import { IOrganizationNestedPlan } from './iorganization-nested-plan';

export interface IOrganization {
  id: number;
  organizationId: number;
  name: string;
  description: string | null;
  target: SubscriptionTargetType;
  status: SubscriptionStatusType;
  role: UserRole;
  plan: IOrganizationNestedPlan;
  createdAt: Date;
  // updatedAt: Date;
  // permission: IPermission;
}
