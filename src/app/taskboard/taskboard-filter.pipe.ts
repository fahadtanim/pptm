import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskboardFilter'
})
export class TaskboardFilterPipe implements PipeTransform {

  transform(tasks: any, filterTaskValue: string): any {
    if ( !filterTaskValue ) {
      return tasks;
    } else {
      return tasks.filter( (task) => {
        console.log('tested');
        return task.name.toLowerCase().includes(filterTaskValue.toLowerCase())
        || task.priority_view_state.toLowerCase().includes(filterTaskValue.toLowerCase())
        || task.task_state.toLowerCase().includes(filterTaskValue.toLowerCase())
        || task.jid.toLowerCase().includes(filterTaskValue.toLowerCase())
        || task.deadline.toLowerCase().includes(filterTaskValue.toLowerCase())
        || task.cid.toLowerCase().includes(filterTaskValue.toLowerCase())
        || task.schedule_notify_time.toLowerCase().includes(filterTaskValue.toLowerCase())
        || task.description.toLowerCase().includes(filterTaskValue.toLowerCase());
        } );
    }
  }

}
