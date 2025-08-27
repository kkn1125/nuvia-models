import { PlanGrantType } from '@share/enums/plan-grant-type.enum';

export interface IPlanGrantNested {
  id: number;
  planId: number;
  type: PlanGrantType;
  description: string | null;
  constraints: string | null;
  amount: number | null;
  isRenewable: boolean;
  isAllowed: boolean;
}
