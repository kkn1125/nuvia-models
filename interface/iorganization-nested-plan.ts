import { PlanNameType } from '@share/enums/plan-name-type.enum';
import { IPlanGrantNested } from './iplan-grant-nested';

export interface IOrganizationNestedPlan {
  id: number;
  name: PlanNameType;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  planGrants: IPlanGrantNested[];
}
