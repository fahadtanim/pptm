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

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {
  public taskStates: any;
  public selectedTask: any;
  public selectedPriority: any;
  public selectedLabel: any;
  public priorities: any;
  public labels: any;
  public filterTaskValue: string;
  public customFilterProperty: any;
  public customFilterValue: any;
  public filteredTasks: any;
  /* #########   FILTER TASK PROPERTY   ########### */

  public Tasks: any;
  constructor(
    public LabelServices: ILabelService,
    public TaskStateServices: ITaskStateService,
    public TaskPriorityStateServices: ITaskPriorityStateService,
    public TaskServices: ITaskService
  ) {}

  ngOnInit() {
    this.taskStates = this.TaskStateServices.getTaskStates();
    this.priorities = this.TaskPriorityStateServices.getTaskPriorityStates();
    this.labels = this.LabelServices.getLabels();
    this.Tasks = this.TaskServices.getTasks();
    this.filteredTasks = this.customFilterTasks(this.customFilterValue, this.customFilterProperty);
  }
  onChangeFilter(){
    this.filteredTasks = this.customFilterTasks(this.customFilterValue, this.customFilterProperty);
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
          task.deadline.toString().toLowerCase().includes(value.toLowerCase()) ||
          task.cid.toLowerCase().includes(value.toLowerCase()) ||
          task.jid.toLowerCase().includes(value.toLowerCase()) ||
          task.task_token.toLowerCase().includes(value.toLowerCase()) ||
          task.conversation_token.filter( x =>
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

  customFilterTasks(customValue, prop): ITask[] {
    console.log('custom value = ' + customValue + ' prop : ' + prop);
    if (prop == null || prop == '' || customValue == null || customValue == ''){
      return this.Tasks;
    }
    if(prop == 'task_name') {
      let customTask = this.Tasks.filter(task=> task.task_name.toLowerCase().includes(customValue.toLowerCase()));
      return customTask;
    }
    if(prop == 'cid') {
      let customTask = this.Tasks.filter(task => task.cid.toLowerCase().includes(customValue.toLowerCase()));
      return customTask;
    }
    if(prop == 'jid') {
      let customTask = this.Tasks.filter(task => task.jid.toLowerCase().includes(customValue.toLowerCase()));
      return customTask;
    }
    if(prop == 'shortnote'){
      let customTask = this.Tasks.filter(task => task.shortnote.toLowerCase().includes(customValue.toLowerCase()));
      return customTask;
    }
    if(prop == 'description') {
      let customTask = this.Tasks.filter(task => task.description.toLowerCase().includes(customValue.toLowerCase()));
      return customTask;
    }
    if(prop == 'task_state') {
      let customTask = this.Tasks.filter(task => this.taskStates
                        .find(x => x.task_state_id == task.task_state_id)
                        .task_state_value.toLowerCase()
                        .includes(customValue.toLowerCase())
                        );
      return customTask;
    }
    if(prop == 'priority_state') {
      let customTask = this.Tasks.filter(task => this.priorities
                        .find(x => x.priority_id == task.priority_state_id)
                        .priority_value.toLowerCase()
                        .includes(customValue.toLowerCase())
                        );
      return customTask;
    }
    if(prop == 'task_token') {
      let customTask = this.Tasks.filter(task => task.task_token.toLowerCase().includes(customValue.toLowerCase()));
      return customTask;
    }
    if(prop == 'conversation_token') {
      let customTask = this.Tasks.filter(task => task.conversation_token.filter( x =>
        x.toLowerCase().includes(customValue.toLowerCase())
      ).length > 0);
      return customTask;
    }
  }
}
