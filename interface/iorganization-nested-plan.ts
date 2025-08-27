import { PlanNameType } from '@share/enums/plan-name-type.enum';

export interface IOrganizationNestedPlan {
  id: number;
  name: PlanNameType;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  planGrants: IOrganizationNestedPlan[];
}
