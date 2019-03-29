import { IUserService } from '../RepositoryInterfaces/IUserService';
import { IUser } from 'src/Models/Interfaces/IUser';

let users = [
  { user_id: 1, user_name: 'Md. Fahad-Uz-Zaman Khan', user_email: 'fahad.khan@gmail.com', user_role_id: 4, user_password: '2234' },
  { user_id: 2, user_name: 'Anwar Hossen', user_email: 'anwar.hossen@gmail.com', user_role_id: 4, user_password: '4234' },
  { user_id: 3, user_name: 'Amir Ebrahim Rahat', user_email: 'amir.rahat@gmail.com', user_role_id: 4, user_password: '6234' },
  { user_id: 4, user_name: 'Mahbubur Rahman Tanmay', user_email: 'mahbubur.tanmay@gmail.com', user_role_id: 4, user_password: '8234' },
  { user_id: 5, user_name: 'Rony Das', user_email: 'rony.das@gmail.com', user_role_id: 1, user_password: '10234' },
  { user_id: 6, user_name: 'Nazia Afroz', user_email: 'nazia.afroz@gmail.com', user_role_id: 2, user_password: '10234' },
  { user_id: 7, user_name: 'Mousumi Akter Sumi', user_email: 'mousumi.sumi@gmail.com', user_role_id: 3, user_password: '10234' },
  { user_id: 8, user_name: 'Touhidul Islam', user_email: 'touhidul.islam@gmail.com', user_role_id: 4, user_password: '10234' },
  { user_id: 9, user_name: 'Mahbubul Sakib', user_email: 'mahbubul.sakib@gmail.com', user_role_id: 4, user_password: '10234' },
]

export class UserService implements IUserService {
  getUsers(): IUser[]{
    return users;
  }
  getUserByUserId(id): IUser{
    return users.find( user => user.user_id == id );
  }

  getUserByUserEmail(email): IUser{
    return users.find( user => user.user_email == email );
  }

  getUsersByUserRoleId(id): IUser[]{
    return users.filter( user => user.user_role_id == id );
  }
}
