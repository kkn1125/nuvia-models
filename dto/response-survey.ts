import { IQuestion } from '@share/interface/iquestion';

export interface IResponseSurvey {
  title: string;
  name: string;
  description: string;
  category: string;
  expiresAt: Date | null;
  isPublic: boolean;
  participants: number;
  questions: IQuestion[];
  createdAt: Date;
  updatedAt: Date;
}
