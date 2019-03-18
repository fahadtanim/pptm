import { ITask } from '../Interfaces/ITask';
import { IUser } from '../Interfaces/IUser';
import { IPriorityState } from '../Interfaces/IPriorityState';
import { ITaskState } from '../Interfaces/ITaskState';
import { ILabel } from '../Interfaces/ILabel';

export class Task implements ITask{
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
