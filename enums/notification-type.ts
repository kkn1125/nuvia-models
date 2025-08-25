export const NotificationType = {
  Notice: 'notice', // 공지사항
  Invitation: 'invitation', // 초대
  Reported: 'reported', // 신고
  Mention: 'mention', // 멘션
} as const;
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
