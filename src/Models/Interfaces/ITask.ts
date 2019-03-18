import { IUser } from './IUser';
import { IPriorityState } from './IPriorityState';
import { ITaskState } from './ITaskState';
import { ILabel } from './ILabel';

export interface ITask {
  task_name: string;
  shortnote: string;
  description: string;
  deadline: Date;
  cid: string;
  jid: string;
  ceated_time: Date;
  task_token: string;
  conversation_token: string[];
  Assigned_users: IUser[];
  priority_state: IPriorityState;
  task_state: ITaskState;
  label: ILabel;
}
