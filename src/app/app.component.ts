import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AddNewProjectComponent} from './projectboard/add-new-project/add-new-project.component';
import {AddNewTaskComponent} from './taskboard/add-new-task/add-new-task.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  constructor(public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.opened = true;

  }

  openAddNewProjectDialogue() {
    const dialogRef = this.dialog.open(AddNewProjectComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
    });
  }
  openAddNewTaskDialogue(){
    const dialogRef = this.dialog.open(AddNewTaskComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
    });
  }
}
