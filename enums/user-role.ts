/* 사용자 권한 */
export const UserRole = {
  Viewer: 'viewer', // R 권한
  Editor: 'editor', // CRU 권한
  Admin: 'admin', // CRUD 권한
  Owner: 'owner', // CRUD + Invite 권한
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export const UserRoleList = Object.values(UserRole);
