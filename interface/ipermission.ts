import { UserRole } from '@share/enums/user-role';

export interface IPermissionGrant {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  permissionId: number;
  type: string;
  description: string | null;
  isAllowed: boolean;
}

export interface IPermission {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  role: UserRole;
  description: string | null;
  sequence: number;
  isDeprecated: boolean;
  isDefault: boolean;
  permissionGrants: IPermissionGrant[];
}
