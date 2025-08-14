export const SubscriptionTargetType = {
  Individual: 'individual',
  Organization: 'organization',
} as const;
export type SubscriptionTargetType = (typeof SubscriptionTargetType)[keyof typeof SubscriptionTargetType];
