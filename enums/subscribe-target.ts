/* 구독 대상 타입 */
export const SubscribeTarget = {
  Team: 'team', // 팀
  Individual: 'individual', // 개인
} as const;
export type SubscribeTarget = (typeof SubscribeTarget)[keyof typeof SubscribeTarget];
