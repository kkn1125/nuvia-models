export const SurveyGraphType = {
  Weekly: 'weekly',
  Monthly: 'monthly',
  Yearly: 'yearly',
} as const;
export type SurveyGraphType = (typeof SurveyGraphType)[keyof typeof SurveyGraphType];
