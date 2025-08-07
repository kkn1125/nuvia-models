import { Survey } from '@/surveys/entities/survey.entity';
import { IUserSecret } from './iuser-secret';

export interface IUser {
  id: number;
  name: string;
  email: string;
  nickname: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  userSecret: IUserSecret;
  surveys: Survey[];
}
