import { Component, OnInit } from '@angular/core';
import { ILabelService } from '../../Services/Repository/RepositoryInterfaces/ILabelService';
import { ILabel } from '../../Models/Interfaces/ILabel';
import { ITaskStateService } from 'src/Services/Repository/RepositoryInterfaces/ITaskStateService';
import { ITaskPriorityStateService } from 'src/Services/Repository/RepositoryInterfaces/ITaskPriorityStateService';
import { ITaskService } from 'src/Services/Repository/RepositoryInterfaces/ITaskService';
import { ITaskState } from 'src/Models/Interfaces/ITaskState';
import { ITaskPriorityState } from 'src/Models/Interfaces/ITaskPriorityState';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  public taskStates: any;
  public selectedTask: any;
  public selectedPriority: any;
  public selectedLabel: any;
  public priorities: any;
  public labels: any;
  public filterTaskValue: string;

  /* #########   FILTER TASK PROPERTY   ########### */

  public Tasks: any;
  constructor(
    public LabelServices: ILabelService,
    public TaskStateServices: ITaskStateService,
    public TaskPriorityStateServices: ITaskPriorityStateService,
    public TaskServices: ITaskService
  ) {}

  ngOnInit() {
    this.taskStates = this.TaskStateServices.getTaskStates();
    this.priorities = this.TaskPriorityStateServices.getTaskPriorityStates();
    this.labels = this.LabelServices.getLabels();
    this.Tasks = this.TaskServices.getTasks();

    console.log(this.taskStates);
    console.log(this.priorities);
    console.log(this.labels);
    console.log(this.Tasks);

  }
}
