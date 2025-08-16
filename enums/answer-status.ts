export const AnswerStatus = {
  Started: 'started', // 설문 링크 진입 시
  InProgress: 'inProgress', // 설문 질문 1개 응답 또는 다음 문항 시
  Saved: 'saved', // 설문 저장 시
  Completed: 'completed', // 설문 모든 질문 응답 후 제출 시
  Aborted: 'aborted', // 설문 중단/취소 시
} as const;
export type AnswerStatus = (typeof AnswerStatus)[keyof typeof AnswerStatus];
