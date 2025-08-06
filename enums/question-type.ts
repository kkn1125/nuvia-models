/* 인풋 형태 */
export const QuestionType = {
  ShortText: 'shortText', // 짧은 텍스트
  LongText: 'longText', // 긴 텍스트
  SingleChoice: 'singleChoice', // 단일 선택
  MultipleChoice: 'multipleChoice', // 다중 선택
} as const;
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];
