export const OrganizationRoleStatusType = {
  Joined: 'joined',
  Deactivated: 'deactivated',
  Deleted: 'deleted',
  Invited: 'invited',
  Rejected: 'rejected',
} as const;
export type OrganizationRoleStatusType = (typeof OrganizationRoleStatusType)[keyof typeof OrganizationRoleStatusType];
export const OrganizationRoleStatusTypeList = Object.values(OrganizationRoleStatusType);
