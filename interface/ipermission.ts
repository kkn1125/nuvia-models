import { UserRole } from '@share/enums/user-role';

export interface IPermissionGrant {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  permissionId: number;
  type: string;
  description: string;
  isAllowed: boolean;
}

export interface IPermission {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  role: UserRole;
  description: string;
  sequence: number;
  isDeprecated: number;
  isDefault: number;
  permissionGrants: IPermissionGrant[];
}
