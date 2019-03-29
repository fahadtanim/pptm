import { IUserRole } from 'src/Models/Interfaces/IUserRole';

export abstract class IUserRoleService {
  abstract getUserRoles(): IUserRole[];
  abstract getUserRoleById(id): IUserRole;
}
