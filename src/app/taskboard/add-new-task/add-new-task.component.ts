import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})




export class AddNewTaskComponent implements OnInit {

  public taskName: string;
  public cid: string;
  public jid: string;
  public projectNameVisibility: boolean;
  public projectName: string;
  public shortNote: string;
  public description: string;
  public priorities: any;
  public taskStates: any;
  public scheduleStartNotifyTime: any;
  public labels: any;
  constructor(public dialogRef: MatDialogRef<AddNewTaskComponent>) {
    this.taskName = '';
    this.projectName = 'test';
    this.projectNameVisibility = false;
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
  }

  ngOnInit() {
  }

}
