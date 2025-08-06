import { SurveyStatus } from "@share/enums/survey-status";

export interface SearchSurvey {
  id: number;
  title: string;
  description: string;
  status: SurveyStatus;
  responses: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  estimatedTime: number;
  questions: number;
  category: string;
  isPublic: boolean;
}