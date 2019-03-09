import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {

  public userName: string;
  public userRoles: any;
  public userEmail: string;
  constructor(public dialogRef: MatDialogRef<AddNewUserComponent>) { }

  ngOnInit() {
    this.userRoles = [
      { role : 'LEAD' },
      { role : 'BA' },
      { role : 'QA' },
      { role : 'Developer' },
      { role : 'InfoImage' },
    ];
  }

}
