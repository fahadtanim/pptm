import { ITaskPriorityState } from 'src/Models/Interfaces/ITaskPriorityState';

export abstract class ITaskPriorityStateService {
  abstract getTaskPriorityStates(): ITaskPriorityState[];
  abstract getTaskPriorityStateById( id: any ): ITaskPriorityState;
  abstract getTaskPriorityStatesByValue( value: string ): ITaskPriorityState[];
}
