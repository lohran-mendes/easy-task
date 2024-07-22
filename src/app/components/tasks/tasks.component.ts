import { Component, Input } from '@angular/core';
import { type NewTask } from './task/task.model';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;
  taskVisible: boolean = false;

  constructor(private taskService: TasksService) {}

  get selectUser() {
    return this.taskService.getUserTasks(this.userId);
  }

  removeTask(id: string) {
    this.taskService.removeTask(id);
  }
  onAddNewTask() {
    this.taskVisible = true;
  }
  closeNewTask() {
    this.taskVisible = false;
  }
}
