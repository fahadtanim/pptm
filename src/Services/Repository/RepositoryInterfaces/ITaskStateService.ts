import { ITaskState } from 'src/Models/Interfaces/ITaskState';

export abstract class ITaskStateService{
  abstract getTaskStates(): ITaskState[];
  abstract getTaskStateById( id: any ): ITaskState;
  abstract getTaskStatesByValue( value: string ): ITaskState[];
}
