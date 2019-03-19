import { ITask } from '../Interfaces/ITask';
import { IUser } from '../Interfaces/IUser';
import { ITaskState } from '../Interfaces/ITaskState';
import { ILabel } from '../Interfaces/ILabel';
import { ITaskPriorityState } from '../Interfaces/ITaskPriorityState';

export class Task implements ITask{
  task_id: any;
  task_name: string;
  shortnote: string;
  description: string;
  deadline: Date;
  cid: string;
  jid: string;
  created_time: Date;
  task_token: string;
  conversation_token: string[];
  assigned_users_email: any[];
  priority_state_id: any;
  task_state_id: any;
  label_id: any;


}
