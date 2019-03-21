import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from '@angular/material';
import { ITaskStateService } from 'src/Services/Repository/RepositoryInterfaces/ITaskStateService';
import { ITaskPriorityStateService } from 'src/Services/Repository/RepositoryInterfaces/ITaskPriorityStateService';
import { ILabelService } from 'src/Services/Repository/RepositoryInterfaces/ILabelService';
import { Task } from 'src/Models/Entities/Task';
import { TaskService } from 'src/Services/Repository/RepositoryServices/TaskService';
import { ITaskService } from 'src/Services/Repository/RepositoryInterfaces/ITaskService';
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
  public taskStateId: any;
  public priorityStateId: any;
  public labelId: any;
  public taskDeadline: any;
  public priorities: any;
  public taskStates: any;
  public scheduleStartNotifyTime: any;
  public labels: any;
  public snackBarRef: any;
  constructor(
    public dialogRef: MatDialogRef<AddNewTaskComponent>,
    private snackBar: MatSnackBar,
    public taskStateServices: ITaskStateService,
    public priorityServices: ITaskPriorityStateService,
    public labelServices: ILabelService,
    public taskServices: ITaskService
  ) {
    this.taskName = '';
    this.projectName = 'test';
    this.projectNameVisibility = false;
    this.taskStates = this.taskStateServices.getTaskStates();
    this.priorities = this.priorityServices.getTaskPriorityStates();
    this.labels = this.labelServices.getLabels();
  }

  ngOnInit() {}

  submitTaskData() {
    this.taskServices.addNewTask(
      this.cid,
      this.jid,
      this.taskName,
      this.shortNote,
      this.description,
      this.taskDeadline,
      this.priorityStateId,
      this.taskStateId,
      this.labelId
    );
    this.snackBarRef = this.snackBar.open(
      'Task Added Successfully !!!',
      'close',
      {
        duration: 2000
      }
    );

    this.snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
    });

    this.snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });

    //this.snackBarRef.dismiss();
  }
}
