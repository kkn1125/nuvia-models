export const SubscriptionTargetType = {
  USER: 'user',
  ORGANIZATION: 'organization',
} as const;
export type SubscriptionTargetType = (typeof SubscriptionTargetType)[keyof typeof SubscriptionTargetType];
