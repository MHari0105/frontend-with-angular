import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from '../../models/task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  
  @Input({ required: true }) task! : Task;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

}
