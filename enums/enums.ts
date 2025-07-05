export const QuestionType = {
  ShortText: 'shortText',
  LongText: 'longText',
  SingleChoice: 'singleChoice',
  MultipleChoice: 'multipleChoice',
  Email: 'email',
  Link: 'link',
  Location: 'location',
  Media: 'media',
  Rating: 'rating',
  Date: 'date',
} as const;
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];

