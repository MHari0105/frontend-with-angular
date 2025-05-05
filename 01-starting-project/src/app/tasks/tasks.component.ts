import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from '../models/new-task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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
