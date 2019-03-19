import { ITaskService } from '../RepositoryInterfaces/ITaskService';
import { ITask } from 'src/Models/Interfaces/ITask';

let tasks = [
  {
    task_id: '1',
    task_name: 'Data Analaysis',
    shortnote: 'Do the Data Analaysis for amac loan',
    description: 'All that written description for task data analysis',
    deadline: new Date(),
    created_time: new Date(),
    cid: 'amac',
    jid: 'ln4',
    task_token: '#amacln4T1',
    conversation_token: ['#amancln4C1', '#amancln4C2'],
    priority_state_id: '1',
    task_state_id: '1',
    label_id: '1',
    assigned_users_email: [ 'fahadtanim@dsinnovators.com', 'anwarhossain@dsinnovators.com' ]
  }
];

export class TaskService implements ITaskService {
  getTasks(): ITask[] {
    return tasks;
  }
  getTaskById( id: any ): ITask {
    return tasks.find( x => x.task_id == id );
  }
  getTasksByCid( cid: string ): ITask[]{
    return tasks.filter( x => x.cid.toLowerCase().includes( cid.toLowerCase() ) );
  }
  getTasksByJid( jid: string ): ITask[]{
    return tasks.filter( x => x.jid.toLowerCase().includes( jid.toLowerCase() ) );
  }
}
