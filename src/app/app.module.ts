import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './materialModule/material.module';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { ProjectboardComponent } from './projectboard/projectboard.component';
import { AddNewProjectComponent } from './projectboard/add-new-project/add-new-project.component';
import { FilterProjectComponent } from './projectboard/filter-project/filter-project.component';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { AddNewTaskComponent } from './taskboard/add-new-task/add-new-task.component';
import { FilterTaskComponent } from './taskboard/filter-task/filter-task.component';
import { ClientboardComponent } from './clientboard/clientboard.component';
import { AddNewClientComponent } from './clientboard/add-new-client/add-new-client.component';
import { FilterClientComponent } from './clientboard/filter-client/filter-client.component';
import { UserboardComponent } from './userboard/userboard.component';
import { AddNewUserComponent } from './userboard/add-new-user/add-new-user.component';
import { FilterUserComponent } from './userboard/filter-user/filter-user.component';
import { TaskboardFilterPipe } from './taskboard/taskboard-filter.pipe';
import { MainHeaderComponent } from './main-header/main-header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoaderComponent } from './loader/loader.component';
import { ProjectComponent } from './project/project.component';

//Services

import { ILabelService } from '../Services/Repository/RepositoryInterfaces/ILabelService';
import { LabelService } from '../Services/Repository/RepositoryServices/LabelService'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    TaskboardComponent,
    ProjectboardComponent,
    AddNewProjectComponent,
    FilterProjectComponent,
    AddNewTaskComponent,
    FilterTaskComponent,
    ClientboardComponent,
    AddNewClientComponent,
    FilterClientComponent,
    UserboardComponent,
    AddNewUserComponent,
    FilterUserComponent,
    TaskboardFilterPipe,
    MainHeaderComponent,
    ProjectComponent,
    LoaderComponent
  ],
  entryComponents: [
    AppComponent,
    AddNewProjectComponent,
    AddNewTaskComponent,
    AddNewClientComponent,
    AddNewUserComponent,
    ProjectboardComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: ILabelService, useClass: LabelService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
