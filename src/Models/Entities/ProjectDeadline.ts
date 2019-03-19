import { IProjectDeadline } from '../Interfaces/IProjectDeadline';

export class ProjectDeadline implements IProjectDeadline {
  public deadline_id: any;
  public deadline_name: string;
  public deadline_description: string;
  public deadline_one: Date;
  public deadline_two: Date;
}
