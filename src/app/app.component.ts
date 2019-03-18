import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddNewProjectComponent } from './projectboard/add-new-project/add-new-project.component';
import { AddNewTaskComponent } from './taskboard/add-new-task/add-new-task.component';
import { AddNewClientComponent } from './clientboard/add-new-client/add-new-client.component';
import { AddNewUserComponent } from './userboard/add-new-user/add-new-user.component';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterEvent
} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: boolean;
  showLoadingIndicator = true;
  constructor(public dialog: MatDialog, private _router: Router) {
    this._router.events.subscribe((routerEvent: RouterEvent) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || NavigationError) {
        this.showLoadingIndicator = false;
      }
    });
  }

  ngOnInit(): void {
    this.opened = true;
  }

  openAddNewProjectDialogue() {
    const dialogRef = this.dialog.open(AddNewProjectComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px'
    });
  }
  openAddNewTaskDialogue() {
    const dialogRef = this.dialog.open(AddNewTaskComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px'
    });
  }

  openAddNewClientDialogue() {
    const dialogRef = this.dialog.open(AddNewClientComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px'
    });
  }
  openAddNewUserDialogue() {
    const dialogRef = this.dialog.open(AddNewUserComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px'
    });
  }
}
