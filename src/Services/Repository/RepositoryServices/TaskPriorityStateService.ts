import { ITaskPriorityStateService } from '../RepositoryInterfaces/ITaskPriorityStateService';
import { ITaskPriorityState } from 'src/Models/Interfaces/ITaskPriorityState';


let priorityStates = [
  { priority_id : '1', priority_value : 'Major' },
  { priority_id : '2', priority_value : 'Minor' },
  { priority_id : '3', priority_value : 'Severe' },
];

export class TaskPriorityStateService implements ITaskPriorityStateService {
  getTaskPriorityStates(): ITaskPriorityState[] {
    return priorityStates;
  }
  getTaskPriorityStateById( id: any ): ITaskPriorityState {
    return priorityStates.find( x => x.priority_id == id );
  }
  getTaskPriorityStatesByValue( value: string ): ITaskPriorityState[]{
    return priorityStates.filter( x => x.priority_value.toLowerCase().includes(value.toLowerCase()) );
  }
}
