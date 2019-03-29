import { IUser } from '../Interfaces/IUser';

export class User implements IUser{
  user_id: number;
  user_email: string;
  user_name: string;
  user_password: string;
  user_role_id: number;
}
