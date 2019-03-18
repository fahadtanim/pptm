import { IUserRole } from './IUserRole';

export interface IUser {
  user_email: string;
  user_name: string;
  user_password: string;
  user_role: IUserRole;
}
