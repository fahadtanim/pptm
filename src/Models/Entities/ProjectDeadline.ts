import { IProjectDeadline } from '../Interfaces/IProjectDeadline';

export class ProjectDeadline implements IProjectDeadline {
  deadline_id: any;
  deadline_name: string;
  deadline_description: string;
  deadline_one: Date;
  deadline_two: Date;
}
