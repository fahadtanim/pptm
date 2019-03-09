import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.component.html',
  styleUrls: ['./add-new-client.component.scss']
})
export class AddNewClientComponent implements OnInit {
  public clientName: any;
  public cid: any;
  constructor(public dialogRef: MatDialogRef<AddNewClientComponent>) { }

  ngOnInit() {
  }

}
