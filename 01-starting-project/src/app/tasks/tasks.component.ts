import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required : true }) userId! : string;
  @Input({ required : true }) name!: string;

  tasks = [
    {
      id : 't1',
      userId : 'u1',
      title : 'Angular 17 Crash Course',
      summary : 'Learn Angular Zero to Hero',
      dueDate : '2025-12-31'
    },
    {
      id : 't2',
      userId : 'u2',
      title : 'Spring boot 3 Crash Course',
      summary : 'Learn Java Spring boot Zero to Hero',
      dueDate : '2025-10-31'
    },
    {
      id : 't3',
      userId : 'u2',
      title : 'Mongo DB',
      summary : 'Learn Mongo DB Zero to Hero',
      dueDate : '2025-11-31'
    }
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

}
