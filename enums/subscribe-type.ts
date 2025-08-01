/* 구독 타입 */
export const SubscribeType = {
  Free: 'free', // 무료 플랜
  Basic: 'basic', // 베이직 플랜
  Premium: 'premium', // 프리미엄 플랜
  /* 백로그 사항 */
  Enterprise: 'enterprise', // 기업 플랜
} as const;
export type SubscribeType = (typeof SubscribeType)[keyof typeof SubscribeType];
