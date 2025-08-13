import { GetCategoryResponse } from '@/models/GetCategoryResponse';
import { SurveyStatus } from '@share/enums/survey-status';

export interface SearchSurvey {
  id: number;
  title: string;
  description: string;
  hashedUniqueKey: string;
  category: GetCategoryResponse;
  isPublic: boolean;
  status: SurveyStatus;
  viewCount: number;
  estimatedTime: number;
  questionAmount: number;
  responseAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
