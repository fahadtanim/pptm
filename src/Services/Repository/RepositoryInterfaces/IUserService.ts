import { IUser } from 'src/Models/Interfaces/IUser';

export abstract class IUserService {
  abstract getUsers(): IUser[];
  abstract getUserByUserId(id): IUser;
  abstract getUsersByUserRoleId(id): IUser[];
  abstract getUserByUserEmail(email): IUser;
}
