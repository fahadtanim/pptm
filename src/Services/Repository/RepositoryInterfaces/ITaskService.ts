import { ITask } from 'src/Models/Interfaces/ITask';

export abstract class ITaskService {
  abstract getTasks(): ITask[];
  abstract getTaskById( id: any ): ITask;
  abstract getTasksByCid( cid: string ): ITask[];
  abstract getTasksByJid( jid: string ): ITask[];
}
