import { Component, OnInit } from '@angular/core';
import { ILabelService } from '../../Services/Repository/RepositoryInterfaces/ILabelService';
import { ILabel } from '../../Models/Interfaces/ILabel';
import { ITaskStateService } from 'src/Services/Repository/RepositoryInterfaces/ITaskStateService';
import { ITaskPriorityStateService } from 'src/Services/Repository/RepositoryInterfaces/ITaskPriorityStateService';
import { ITaskService } from 'src/Services/Repository/RepositoryInterfaces/ITaskService';
import { ITaskState } from 'src/Models/Interfaces/ITaskState';
import { ITaskPriorityState } from 'src/Models/Interfaces/ITaskPriorityState';
import { takeLast } from 'rxjs/operators';
import { ITask } from 'src/Models/Interfaces/ITask';
import { Task } from 'src/Models/Entities/Task';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  public taskStates: any;
  public priorities: any;
  public labels: any;
  public filterTaskValue: string;
  public filteredTasks: any;
  public filterVisibility: any;
  /* #########   FILTER TASK PROPERTY   ########### */

  public customCidFilter: string;
  public customJidFilter: string;
  public customTaskNameFilter: string;
  public customShortNoteFilter: string;
  public customDescriptionFilter: string;
  public customTaskTokenFilter: string;
  public customConversationTokenFilter: string;
  public customPriorityStateFilter: any;
  public customTaskStateFilter: any;
  public customLabelFilter: any;

  public Tasks: any;
  constructor(
    public LabelServices: ILabelService,
    public TaskStateServices: ITaskStateService,
    public TaskPriorityStateServices: ITaskPriorityStateService,
    public TaskServices: ITaskService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  menuToggleButton() {
    this.filterVisibility = this.filterVisibility ? false : true;
  }

  ngOnInit() {
    this.filterVisibility = false;
    this.taskStates = this.TaskStateServices.getTaskStates();
    this.priorities = this.TaskPriorityStateServices.getTaskPriorityStates();
    this.labels = this.LabelServices.getLabels();
    this.Tasks = this.TaskServices.getTasks();
    this.filteredTasks = this.customFilterTasks();
  }
  onChangeFilter() {
    this.filteredTasks = this.customFilterTasks();
  }

  filterFullTasks(value): ITask[] {
    if (value == null || value === '') {
      console.log('all Task');
      return this.filteredTasks;
    } else {
      console.log('filter task');
      //console.log( this.filteredTask[0].conversation_token.filter( x => x.toLowerCase().includes(value.toLowerCase()) ));
      return this.filteredTasks.filter(
        task =>
          task.task_name.toLowerCase().includes(value.toLowerCase()) ||
          task.shortnote.toLowerCase().includes(value.toLowerCase()) ||
          task.description.toLowerCase().includes(value.toLowerCase()) ||
          task.deadline
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          task.cid.toLowerCase().includes(value.toLowerCase()) ||
          task.jid.toLowerCase().includes(value.toLowerCase()) ||
          task.task_token.toLowerCase().includes(value.toLowerCase()) ||
          task.conversation_token.filter(x =>
            x.toLowerCase().includes(value.toLowerCase())
          ).length > 0 ||
          this.priorities
            .find(x => x.priority_id == task.priority_state_id)
            .priority_value.toLowerCase()
            .includes(value.toLowerCase()) ||
          this.labels
            .find(x => x.label_id == task.label_id)
            .label_value.toLowerCase()
            .includes(value.toLowerCase()) ||
          this.taskStates
            .find(x => x.task_state_id == task.task_state_id)
            .task_state_value.toLowerCase()
            .includes(value.toLowerCase())
      );
    }
  }
  customFilterTasks(): ITask[] {
    if (
      (this.customCidFilter == null ||
      this.customCidFilter == '') &&
      (this.customJidFilter == null ||
      this.customJidFilter == '') &&
      (this.customTaskNameFilter == null ||
      this.customTaskNameFilter == '') &&
      (this.customDescriptionFilter == null ||
      this.customDescriptionFilter == '') &&
      (this.customShortNoteFilter == null ||
      this.customShortNoteFilter == '') &&
      (this.customTaskStateFilter == null ||
      this.customTaskStateFilter == '') &&
      (this.customPriorityStateFilter == null ||
      this.customPriorityStateFilter == '') &&
      (this.customTaskTokenFilter == null ||
      this.customTaskTokenFilter == '') &&
      (this.customConversationTokenFilter == null ||
      this.customConversationTokenFilter == '') &&
      (this.customPriorityStateFilter == null ||
      this.customPriorityStateFilter == '')
    ) {
      return this.Tasks;
    }

    let customTask = this.Tasks;

    if ( this.customCidFilter != null && this.customCidFilter != '' ) {
      customTask =  this.filterTasksByCid( this.customCidFilter, customTask );
    }

    if ( this.customJidFilter != null && this.customJidFilter != '' ) {
      customTask =  this.filterTasksByJid( this.customJidFilter, customTask );
    }

    if ( this.customTaskNameFilter != null && this.customTaskNameFilter != '' ) {
      customTask =  this.filterTasksByTaskName( this.customTaskNameFilter, customTask );
    }

    if ( this.customDescriptionFilter != null && this.customDescriptionFilter != '' ) {
      customTask =  this.filterTasksByDescription( this.customDescriptionFilter, customTask );
    }

    if ( this.customShortNoteFilter != null && this.customShortNoteFilter != '' ) {
      customTask =  this.filterTasksByShortNote( this.customShortNoteFilter, customTask );
    }
    if ( this.customTaskStateFilter != null && this.customTaskStateFilter != '' ) {
      customTask =  this.filterTasksByTaskState( this.customTaskStateFilter, customTask );
    }

    if ( this.customPriorityStateFilter != null && this.customPriorityStateFilter != '' ) {
      customTask =  this.filterTasksByPriorityState( this.customPriorityStateFilter, customTask );
    }

    if ( this.customTaskTokenFilter != null && this.customTaskTokenFilter != '' ) {
      customTask =  this.filterTasksByTaskToken( this.customTaskTokenFilter, customTask );
    }
    if ( this.customConversationTokenFilter != null && this.customConversationTokenFilter != '' ) {
      customTask =  this.filterTasksByConversationToken( this.customConversationTokenFilter, customTask );
    }

    if ( this.customLabelFilter != null && this.customLabelFilter != '' ) {
      customTask =  this.filterTasksByLabel( this.customLabelFilter, customTask );
    }

    return customTask;
  }

  filterTasksByCid(value, tasks): ITask[] {
    if (value == null || value == '') {
      return tasks;
    } else {
      let customTask = tasks.filter(task =>
        task.cid.toLowerCase().includes(value.toLowerCase())
      );
      return customTask;
    }
  }
  filterTasksByJid(value, tasks): ITask[] {
    if (value == null || value == '') {
      return tasks;
    } else {
      let customTask = tasks.filter(task =>
        task.jid.toLowerCase().includes(value.toLowerCase())
      );
      return customTask;
    }
  }

  filterTasksByTaskName(value, tasks): ITask[] {
    if (value == null || value == '') {
      return tasks;
    } else {
      let customTask = tasks.filter(task =>
        task.task_name.toLowerCase().includes(value.toLowerCase())
      );
      return customTask;
    }
  }

  filterTasksByShortNote(value, tasks): ITask[] {
    if (value == null || value == '') {
      return tasks;
    } else {
      let customTask = tasks.filter(task =>
        task.shortnote.toLowerCase().includes(value.toLowerCase())
      );
      return customTask;
    }
  }

  filterTasksByDescription(value, tasks): ITask[] {
    if (value == null || value == '') {
      return tasks;
    } else {
      let customTask = tasks.filter(task =>
        task.description.toLowerCase().includes(value.toLowerCase())
      );
      return customTask;
    }
  }

  filterTasksByTaskToken(value, tasks): ITask[] {
    if (value == null || value == '') {
      return tasks;
    } else {
      let customTask = tasks.filter(task =>
        task.task_token.toLowerCase().includes(value.toLowerCase())
      );
      return customTask;
    }
  }

  filterTasksByConversationToken(value, tasks): ITask[] {
    if (value == null || value == '') {
      return tasks;
    } else {
      let customTask = tasks.filter(task =>
        task.conversation_token.filter(x =>
          x.toLowerCase().includes(value.toLowerCase())
        ).length > 0
      );
      return customTask;
    }
  }

  filterTasksByTaskState(value, tasks): ITask[] {
    if (value == null || value == '') {
      return tasks;
    } else {
      let customTask = tasks.filter(task => task.task_state_id == value);
      return customTask;
    }
  }

  filterTasksByPriorityState(value, tasks): ITask[] {
    if (value == null || value == '') {
      return tasks;
    } else {
      let customTask = tasks.filter(task => task.priority_state_id == value);
      return customTask;
    }
  }
  filterTasksByLabel(value, tasks): ITask[] {
    if (value == null || value == '') {
      return tasks;
    } else {
      let customTask = tasks.filter(task => task.label_id == value);
      return customTask;
    }
  }

  openAddNewTaskDialogue(){
    const dialogRef = this.dialog.open(AddNewTaskComponent, {
      width: '100vw',
      height: 'auto',
      maxWidth: '500px',
    });
  }

}
