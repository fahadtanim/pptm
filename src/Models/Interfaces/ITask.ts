import { IUser } from './IUser';
import { ITaskState } from './ITaskState';
import { ILabel } from './ILabel';
import { ITaskPriorityState } from './ITaskPriorityState';

export interface ITask {
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
