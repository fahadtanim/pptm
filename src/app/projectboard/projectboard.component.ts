import { Component, OnInit } from '@angular/core';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-projectboard',
  templateUrl: './projectboard.component.html',
  styleUrls: ['./projectboard.component.scss']
})
export class ProjectboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
