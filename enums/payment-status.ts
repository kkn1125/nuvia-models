export const PaymentStatus = {
  PENDING: 'pending', // 결제 대기
  PAID: 'paid', // 결제 완료
  FAILED: 'failed', // 결제 실패
  CANCELLED: 'cancelled', // 결제 취소
  REFUNDED: 'refunded', // 환불 완료
} as const;
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
