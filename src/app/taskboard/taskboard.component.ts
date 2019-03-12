import { Component, OnInit } from '@angular/core';
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
  public labels: any;
  public filterTaskValue: string;



  /* #########   FILTER TASK PROPERTY   ########### */


  public Tasks: any;
  constructor() { }

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
    this.labels = [
      { id : '1', color : '#b71c1c' },
      { id : '2', color : '#880e4f' },
      { id : '3', color : '#4a148c' },
      { id : '4', color : '#1a237e' },
      { id : '5', color : '#2962ff' },
      { id : '6', color : '#004d40' },
      { id : '7', color : '#1b5e20' },
      { id : '8', color : '#827717' },
      { id : '9', color : '#ff5722' },
      { id : '10', color : '#3e2723' },
      { id : '11', color : '#212121' },
    ];
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
