export const MetadataStatusType = {
  SurveyList: 'surveyList',
  Dashboard: 'dashboard',
} as const;
export type MetadataStatusType = (typeof MetadataStatusType)[keyof typeof MetadataStatusType];
