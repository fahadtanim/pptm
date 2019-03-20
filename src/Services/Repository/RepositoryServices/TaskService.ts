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
    conversation_token: ['#amacln4C1', '#amacln4C2'],
    priority_state_id: '1',
    task_state_id: '1',
    label_id: '1',
    assigned_users_email: [ 'fahadtanim@dsinnovators.com', 'anwarhossain@dsinnovators.com' ]
  },
  {
    task_id: '2',
    task_name: 'Sample Generate',
    shortnote: 'Generate sample of amac loan',
    description: 'All that written description for task Sample Generate',
    deadline: new Date(),
    created_time: new Date(),
    cid: 'amac',
    jid: 'ln4',
    task_token: '#amacln4T2',
    conversation_token: ['#amacln4C3', '#amacln4C5'],
    priority_state_id: '2',
    task_state_id: '2',
    label_id: '2',
    assigned_users_email: [ 'fahadtanim@dsinnovators.com', 'anwarhossain@dsinnovators.com' ]
  },
  {
    task_id: '3',
    task_name: 'Data Preprocessing',
    shortnote: 'Generate Formatted data of amac loan',
    description: 'All that written description for task Data Preprocessing',
    deadline: new Date(),
    created_time: new Date(),
    cid: 'amac',
    jid: 'ln4',
    task_token: '#amacln4T3',
    conversation_token: ['#amacln4C3', '#amacln4C5'],
    priority_state_id: '3',
    task_state_id: '2',
    label_id: '3',
    assigned_users_email: [ 'tohidul.islam@dsinnovators.com', 'mahbub.sakib@dsinnovators.com' ]
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
