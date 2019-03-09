import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.scss']
})
export class AddNewProjectComponent implements OnInit {
  public projectName: any;
  public cid: any;
  public jid: any;
  public clientNameVisibility: boolean;
  public clientName: string;
  public projectStates: any;
  public snackBarRef: any;
  constructor(public dialogRef: MatDialogRef<AddNewProjectComponent>,  private snackBar: MatSnackBar) {
    this.clientNameVisibility = false;
    this.clientName = '';

    this.projectStates = [
      {state : 'startSoon', viewState: 'Start Soon'},
      {state : 'running', viewState: 'Running'},
      {state : 'delivered', viewState: 'Delivered'},
      {state : 'ended', viewState: 'Ended'},
    ];
  }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBarRef = this.snackBar.open('Project Added !!!', 'close', {
      duration: 2000,
    });

    this.snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
    });


    this.snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });

    //this.snackBarRef.dismiss();
  }

}
