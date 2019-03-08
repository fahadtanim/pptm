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
  public shortNote: string;
  public description: string;
  public priorities: any;
  public taskStates: any;
  constructor(public dialogRef: MatDialogRef<AddNewTaskComponent>) {
    this.taskName = '';
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
  }

  ngOnInit() {
  }

}
