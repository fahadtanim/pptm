import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { IClientService } from 'src/Services/Repository/RepositoryInterfaces/IClientService';
import { IClient } from 'src/Models/Interfaces/IClient';
import { AddNewClientComponent } from './add-new-client/add-new-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';




@Component({
  selector: 'app-clientboard',
  templateUrl: './clientboard.component.html',
  styleUrls: ['./clientboard.component.scss']
})
export class ClientboardComponent implements OnInit {

  dataSource: MatTableDataSource<IClient>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public columnName = [
    'CID', 'NAME', 'DESCRIPTION', 'EDIT', 'DELETE'
  ];

  constructor(public dialog: MatDialog, public clientServices: IClientService) {
    this.dataSource = new MatTableDataSource(this.clientServices.getClients());
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

  openAddNewClientDialogue(){
    const dialogRef = this.dialog.open(AddNewClientComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
    });
  }

  openEditClientDialogue( client: IClient ){
    const dialogRef = this.dialog.open(EditClientComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
      data: client,
    });
  }

}
