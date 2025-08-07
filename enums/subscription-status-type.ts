/* 구독 상태 (구독/구독취소/사용량초과) */
export const SubscriptionStatusType = {
  ACTIVE: 'active',
  CANCELLED: 'cancelled',
  OVER_USAGE: 'over_usage',
} as const;
export type SubscriptionStatusType = (typeof SubscriptionStatusType)[keyof typeof SubscriptionStatusType];