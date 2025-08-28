/* 초대 알림에 대한 액션 상태 */
export const NotificationActionStatus = {
  Rejected: 'rejected', // 초대 거절
  Joined: 'joined', // 초대 수락
} as const;
export type NotificationActionStatus = (typeof NotificationActionStatus)[keyof typeof NotificationActionStatus];
