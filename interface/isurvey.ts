import { SurveyStatus } from '@share/enums/survey-status';
import { AllQuestion } from './iquestion';

export interface ISurvey {
  id?: number;
  userId: number;
  hashedUniqueKey: string;
  title: string;
  description: string;
  expiresAt: string | null;
  isPublic: boolean;
  questions: AllQuestion[];
  status: SurveyStatus;
  startDate?: Date;
  endDate?: Date;
  category: string;
  managementPassword?: string;
  createdAt: Date;
  updatedAt: Date;
}
