import { ICategory } from '@share/interface/icategory';
import { IQuestion } from '@share/interface/iquestion';

export interface IResponseSurvey {
  title: string;
  name: string;
  description: string | null;
  category: ICategory;
  expiresAt: Date | null;
  isPublic: boolean;
  participants: number;
  questions: Omit<IQuestion, 'answers' | 'isAnswered'>[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IResponseSurveyCategory extends Omit<IResponseSurvey, 'questions'> {
  questions: Omit<IQuestion, 'questionAnswers' | 'isAnswered'>[];
}

export interface IResponseSurveyQuestionWithAnswers extends Omit<IResponseSurvey, 'questions'> {
  questions: (Omit<IQuestion, 'questionAnswers' | 'isAnswered'> & { isAnswered?: boolean; questionAnswers?: Map<number, string> })[];
}
