/* 구독 상태 (구독/구독취소/사용량초과) */
export const SubscriptionStatusType = {
  Active: 'active',
  Cancelled: 'cancelled',
  OverUsage: 'overUsage',
} as const;
export type SubscriptionStatusType = (typeof SubscriptionStatusType)[keyof typeof SubscriptionStatusType];
