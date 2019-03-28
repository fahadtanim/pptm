import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectboardComponent } from './projectboard/projectboard.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { ProjectComponent } from './project/project.component';
import { ClientboardComponent } from './clientboard/clientboard.component';
import { ClientComponent } from './clientboard/client/client.component';
const routes: Routes = [
  { path: '', redirectTo: '/projectboard', pathMatch: 'full' },
  { path: 'projectboard', component: ProjectboardComponent },
  { path: 'project/:cid/:jid', component: ProjectComponent },
  { path: 'taskboard', component: TaskboardComponent },
  { path: 'clientboard', component: ClientboardComponent },
  { path: 'clientboard/client/:cid', component: ClientComponent },
  { path: '*', component: ProjectboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
