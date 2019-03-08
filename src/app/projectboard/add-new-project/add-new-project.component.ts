import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.scss']
})
export class AddNewProjectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNewProjectComponent>) { }

  ngOnInit() {
  }

}
