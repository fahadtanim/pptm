import { IProjectConversation } from '../Interfaces/IProjectConversation';
import { IUser } from '../Interfaces/IUser';

export class ProjectConversations implements IProjectConversation {
  conversation_id: any;
  conversation_token: string;
  sent_from: IUser;
  sent_to: IUser;
  sent_time: Date;
  conversation_details: string;
  task_token: string[];
}
