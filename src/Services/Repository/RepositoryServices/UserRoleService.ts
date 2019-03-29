import { IUserRoleService } from '../RepositoryInterfaces/IUserRoleService';
import { IUserRole } from 'src/Models/Interfaces/IUserRole';

let userRoles = [
  { user_role_id: 1, user_role_name: 'Lead' },
  { user_role_id: 2, user_role_name: 'BA' },
  { user_role_id: 3, user_role_name: 'QA' },
  { user_role_id: 4, user_role_name: 'Developer' },
  { user_role_id: 5, user_role_name: 'Info Image' },
];


export class UserRoleService implements IUserRoleService{
  getUserRoles(): IUserRole[] {
    return userRoles;
  }

  getUserRoleById(id): IUserRole {
    return userRoles.find( role => role.user_role_id == id);
  }
}
