import { IQuestion } from '@share/interface/iquestion';

export interface IResponseSurvey {
  title: string;
  name: string;
  description: string | null;
  categoryId: number;
  expiresAt: Date | null;
  isPublic: boolean;
  participants: number;
  questions: Omit<IQuestion, 'answers' | 'isAnswered'>[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IResponseSurveyCategory extends Omit<IResponseSurvey, 'categoryId'> {
  category: string;
}
