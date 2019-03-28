import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddNewProjectComponent } from '../projectboard/add-new-project/add-new-project.component';
import { AddNewTaskComponent } from '../taskboard/add-new-task/add-new-task.component';
import { AddNewClientComponent} from '../clientboard/add-new-client/add-new-client.component';
import { AddNewUserComponent } from '../userboard/add-new-user/add-new-user.component';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  public visibleMenu: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {
    this.visibleMenu = true;
  }
  menuToggleButton(){}
  ngOnInit() {
    this.visibleMenu = true;
  }
  openAddNewProjectDialogue() {
    const dialogRef = this.dialog.open(AddNewProjectComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
    });
  }
  openAddNewTaskDialogue(){
    const dialogRef = this.dialog.open(AddNewTaskComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
    });
  }

  openAddNewClientDialogue(){
    const dialogRef = this.dialog.open(AddNewClientComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
    });
  }
  openAddNewUserDialogue(){
    const dialogRef = this.dialog.open(AddNewUserComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
    });
  }
}
