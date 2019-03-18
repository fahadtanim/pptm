import { Component, OnInit } from '@angular/core';
import { ILabelService } from '../../Services/Repository/RepositoryInterfaces/ILabelService';
import { ILabel } from '../../Models/Interfaces/ILabel';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
})
export class TaskboardComponent implements OnInit {

  public taskStates: any;
  public selectedTask: any;
  public selectedPriority: any;
  public selectedLabel: any;
  public priorities: any;
  public labels: ILabel[];
  public filterTaskValue: string;

  /* #########   FILTER TASK PROPERTY   ########### */


  public Tasks: any;
  constructor(public LabelServices: ILabelService) {

  }

  ngOnInit() {
    this.taskStates = [
      { state : 'todo', viewState : 'To Do' },
      { state : 'doing', viewState : 'Doing' },
      { state : 'done', viewState : 'Done' }
    ];
    this.priorities = [
      { state : 'major', viewState : 'Major' },
      { state : 'minor', viewState : 'Minor' },
      { state : 'severe', viewState : 'Severe' },
    ];
    this.labels = this.LabelServices.getLabels();
    this.selectedTask = 'todo';
    this.selectedPriority = 'severe';
    this.selectedLabel = { id : '3', color : '#4a148c' };

    this.Tasks = [
      {
        name : 'Task 1',
        cid : 'AMAC',
        jid : 'ln4',
        short_note : 'Short Note for Task 1',
        priority_state : 'major',
        priority_view_state: 'Major',
        task_state : 'todo',
        label : { id : '3', color : '#4a148c' },
        deadline : '11/01/2019',
        schedule_notify_time: '08/01/2019 08:29:50',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      },
      {
        name : 'Task 2',
        cid : 'AMAC',
        jid : 'ln3',
        short_note : 'Short Note for Task 2',
        priority_state : 'minor',
        priority_view_state: 'Minor',
        task_state : 'doing',
        label : { id : '7', color : '#1b5e20' },
        deadline : '05/01/2019',
        schedule_notify_time: '11/01/2019 08:29:50',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      },
      {
        name : 'Task 3',
        cid : 'AMAC',
        jid : 'ln5',
        short_note : 'Short Note for Task 3',
        priority_state : 'severe',
        priority_view_state: 'Severe',
        task_state : 'doing',
        label : { id : '10', color : '#3e2723' },
        deadline : '06/01/2019',
        schedule_notify_time: '03/01/2019 08:29:50',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      },
      {
        name : 'Task 4',
        cid : 'AMAC',
        jid : 'ln6',
        short_note : 'Short Note for Task 4',
        priority_state : 'major',
        priority_view_state: 'Severe',
        task_state : 'done',
        label : { id : '2', color : '#880e4f' },
        deadline : '07/01/2019',
        schedule_notify_time: '04/01/2019 08:29:50',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      },
    ];
  }

}