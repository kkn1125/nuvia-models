/* 인풋 형태 */
export const InputType = {
  ShortText: 'shortText', // 짧은 텍스트
  LongText: 'longText', // 긴 텍스트
  SingleChoice: 'singleChoice', // 단일 선택
  MultipleChoice: 'multipleChoice', // 다중 선택
} as const;
export type InputType = (typeof InputType)[keyof typeof InputType];
