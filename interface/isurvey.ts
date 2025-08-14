import { SurveyStatus } from '@share/enums/survey-status';
import { AllQuestion } from './iquestion';

export interface ISurvey {
  id?: number;
  subscriptionId: number;
  categoryId: number;
  userId: number;
  hashedUniqueKey: string;
  title: string;
  description: string | null;
  expiresAt: string | null;
  isPublic: boolean;
  questions: AllQuestion[];
  status: SurveyStatus;
  startDate: Date | null;
  endDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
