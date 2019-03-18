import { IProject } from '../Interfaces/IProject';
import { IProjectDeadline } from '../Interfaces/IProjectDeadline';
import { IUser } from '../Interfaces/IUser';
import { IProjectConversation } from '../Interfaces/IProjectConversation';
import { IProjectProduction } from '../Interfaces/IProjectProduction';
import { IProjectPhase } from '../Interfaces/IProjectPhase';
import { IProjectState } from '../Interfaces/IProjectState';

export class Project implements IProject {

  project_id: string;
  cid: string;
  jid: string;
  redmine_jef: string;
  deadline: IProjectDeadline[];
  on_shore_developers: IUser[];
  off_shore_developers: IUser[];
  conversation: IProjectConversation[];
  production_details: IProjectProduction;
  project_phase: IProjectPhase;
  project_state: IProjectState;
  project_details: string;
}
