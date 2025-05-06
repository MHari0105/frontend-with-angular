import { Component, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required : true }) userId! : string;
  @Input({ required : true }) name!: string;
  isAddingTasks = false;

  constructor(private tasksService : TasksService) { }  // DEPENDENCY INJECTION

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  addNewTasks() {
    this.isAddingTasks = true;
  }

  onCloseTask() {
    this.isAddingTasks = false;
  }

}
