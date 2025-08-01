/* 인풋 형태 */
export const InputType = {
  ShortText: 'shortText', // 짧은 텍스트
  LongText: 'longText', // 긴 텍스트
  SingleChoice: 'singleChoice', // 단일 선택
  MultipleChoice: 'multipleChoice', // 다중 선택
} as const;
export type InputType = (typeof InputType)[keyof typeof InputType];

/* 데이터 타입 */
export const DataType = {
  Text: 'text', // 텍스트
  Email: 'email', // 이메일
  Link: 'link', // 링크
  Date: 'date', // 일자 (YYYY-MM-dd)
  DateTime: 'dateTime', // 일시 (YYYY-MM-dd HH:mm:ss)
  Time: 'time', // 시간 (HH:mm:ss)
  Image: 'image', // 이미지
  Video: 'video', // 비디오
  File: 'file', // 파일
  Location: 'location', // 위치
  Rating: 'rating', // 평점
} as const;
export type DataType = (typeof DataType)[keyof typeof DataType];

export const QuestionType = {
  InputType,
  DataType,
} as const;
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];
