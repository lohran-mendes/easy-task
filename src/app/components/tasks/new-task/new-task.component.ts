import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  private taskService = inject(TasksService);

  onCloseNewTask() {
    this.close.emit();
  }
  onAddNewTask() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        date: this.enteredDate,
        summary: this.enteredSummary,
      },
      this.userId
    );
    this.onCloseNewTask();
  }
}
