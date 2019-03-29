import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { IUser } from 'src/Models/Interfaces/IUser';
import { IUserService } from 'src/Services/Repository/RepositoryInterfaces/IUserService';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { IUserRoleService } from 'src/Services/Repository/RepositoryInterfaces/IUserRoleService';

@Component({
  selector: 'app-userboard',
  templateUrl: './userboard.component.html',
  styleUrls: ['./userboard.component.scss']
})
export class UserboardComponent implements OnInit {
  dataSource: MatTableDataSource<IUser>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public columnName = [
    'NAME', 'EMAIL', 'ROLE', 'EDIT', 'DELETE'
  ];

  constructor(public dialog: MatDialog, public userServices: IUserService, public userRoleServices: IUserRoleService) {

    this.dataSource = new MatTableDataSource(this.userServices.getUsers().sort( (left,right):number => {
      if (left.user_role_id > right.user_role_id) {
        return 1;
      } else if (left.user_role_id < right.user_role_id) {
        return -1;
      } else {
        return 0;
      }
    }));
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

  openAddNewUserDialogue(){
    const dialogRef = this.dialog.open(AddNewUserComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
    });
  }

}
