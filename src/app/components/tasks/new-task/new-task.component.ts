import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type NewTask } from '../task/task.model';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  @Input() taskVisible: boolean = false;
  @Output() removeNewTask = new EventEmitter();
  @Output() addNewTask = new EventEmitter<NewTask>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onRemoveNewTask() {
    this.removeNewTask.emit();
  }
  onAddNewTask() {
    this.addNewTask.emit({
      title: this.enteredTitle,
      date: this.enteredDate,
      summary: this.enteredSummary,
    });
  }
}
