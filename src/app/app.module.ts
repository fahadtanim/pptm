import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './materialModule/material.module';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { ProjectboardComponent } from './projectboard/projectboard.component';
import { AddNewProjectComponent } from './projectboard/add-new-project/add-new-project.component';
import { FilterProjectComponent } from './projectboard/filter-project/filter-project.component';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddNewTaskComponent } from './taskboard/add-new-task/add-new-task.component';
import { FilterTaskComponent } from './taskboard/filter-task/filter-task.component';
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
    FilterTaskComponent
  ],
  entryComponents: [
    AppComponent,
    AddNewProjectComponent,
    AddNewTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },],
  bootstrap: [AppComponent]
})
export class AppModule { }
