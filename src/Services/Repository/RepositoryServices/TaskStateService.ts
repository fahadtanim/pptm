import { ITaskStateService } from '../RepositoryInterfaces/ITaskStateService';
import { ITaskState } from 'src/Models/Interfaces/ITaskState';

let taskStates = [
  { task_state_id : '1', task_state_value : 'To Do' },
  { task_state_id : '2', task_state_value : 'Doing' },
  { task_state_id : '3', task_state_value : 'Done' }
];


export class TaskStateService implements ITaskStateService {
  getTaskStates(): ITaskState[] {
    return taskStates;
  }
  getTaskStateById(id: any): ITaskState {
    return taskStates.find( x => x.task_state_id == id);
  }
  getTaskStatesByValue( value: string ): ITaskState[] {
    return taskStates.filter( x => x.task_state_value.toLowerCase().includes(value.toLowerCase()));
  }


}
