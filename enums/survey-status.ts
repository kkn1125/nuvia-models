export const SurveyStatus = {
  Draft: 'draft',
  Active: 'active',
  Closed: 'closed',
} as const;
export type SurveyStatus = (typeof SurveyStatus)[keyof typeof SurveyStatus];
