import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() taskComplete = new EventEmitter<string>();

  onTaskComplete() {
    this.taskComplete.emit(this.task.id);
  }
}
