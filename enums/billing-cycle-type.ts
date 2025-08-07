export const BillingCycleType = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
} as const;
export type BillingCycleType = (typeof BillingCycleType)[keyof typeof BillingCycleType];
