import { Component, OnInit, ViewChild } from '@angular/core';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

class Project {
  public ID: number;
  public Name: string;
  public CID: string;
  public JID: string;
  constructor( Name: string, CID: string, JID: string ) {
    this.Name = Name;
    this.JID = JID;
    this.CID = CID;
  }
}

const projects = [
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'defg', 'abcd'),
  new Project('AMAC', 'ijkl', 'defg'),
  new Project('AMAC', 'abcd', 'abcd'),
  new Project('AMAC', 'ijkl', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
  new Project('AMAC', 'abcd', 'defg'),
];

@Component({
  selector: 'app-projectboard',
  templateUrl: './projectboard.component.html',
  styleUrls: ['./projectboard.component.scss']
})
export class ProjectboardComponent implements OnInit {

  dataSource: MatTableDataSource<Project>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public columnName = [
    'Name', 'CID', 'JID', 'EDIT', 'DELETE'
  ];

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(projects);
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialogue() {
    const dialogRef = this.dialog.open(AddNewProjectComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
    });
  }

}
