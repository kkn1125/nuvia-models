import { DataType } from './data-type';
import { InputType } from './input-type';

export const QuestionType = {
  InputType,
  DataType,
} as const;
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];
