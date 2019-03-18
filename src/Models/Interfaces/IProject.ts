import { IUser } from './IUser';
import { IProjectDeadline } from './IProjectDeadline';
import { IProjectConversation } from './IProjectConversation';
import { IProjectProduction } from './IProjectProduction';
import { IProjectPhase } from './IProjectPhase';
import { IProjectState } from './IProjectState';


export interface IProject {
  project_id: string;
  cid: string;
  jid: string;
  redmine_jef: string;
  deadline: IProjectDeadline[];
  on_shore_developers: IUser[];
  off_shore_developers: IUser[];
  conversation: IProjectConversation[];
  production_details: IProjectProduction;
  project_details: string;
  project_phase: IProjectPhase;
  project_state: IProjectState;
}
