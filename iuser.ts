export interface IUser {
  id: number;
  username: string;
  nickname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
