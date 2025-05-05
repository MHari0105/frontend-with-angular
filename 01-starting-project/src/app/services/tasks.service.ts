import { Injectable } from '@angular/core';
import { NewTask } from '../models/new-task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks = [
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

  constructor() { 
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId : string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask : NewTask, userId : string) {
    this.tasks.unshift({    // I USED array.unshift() INSTEAD OF array.push() BECAUSE unshift() ADDS THE DATA IN THE array[0] th INDEX
      id : new Date().getTime().toString(),   // AS OF NOW JUST TO GENERATE A UNIQUE ID
      userId : userId,
      title : newTask.title,
      summary : newTask.summary,
      dueDate : newTask.date
    });
    this.saveTasks();
  }

  removeTask(id : string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
