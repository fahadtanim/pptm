import { IUser } from '../Interfaces/IUser';
import { IUserRole } from '../Interfaces/IUserRole';

export class User implements IUser{
  user_email: string;  user_name: string;
  user_password: string;
  user_role: IUserRole;
}
