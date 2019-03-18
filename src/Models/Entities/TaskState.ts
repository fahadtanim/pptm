import { ITaskState } from '../Interfaces/ITaskState';

export class TaskState implements ITaskState {
  task_state_id: any;
  task_token: string;
  conversation_token: string[];
  task_value: string;
}
