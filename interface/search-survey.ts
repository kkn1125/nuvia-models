import { SurveyStatus } from '@share/enums/survey-status';
import { ICategory } from './icategory';

export interface SearchSurvey {
  id: number;
  title: string;
  description: string;
  hashedUniqueKey: string;
  category: ICategory;
  isPublic: boolean;
  status: SurveyStatus;
  viewCount: number;
  estimatedTime: number;
  questionAmount: number;
  responseAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
