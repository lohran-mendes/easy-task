import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  @Input() taskVisible: boolean = false;
  @Output() removeNewTask = new EventEmitter();

  onRemoveNewTask() {
    this.removeNewTask.emit();
  }
}
