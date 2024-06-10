import { Component, Input } from '@angular/core';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Mestre Angular',
      summary:
        'Aprenda todos os recursos básicos e avançados do Angular e como aplicá-los',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Construa o primeiro protótipo',
      summary: 'Construa o primeiro protótipo de um site de uma loja online',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare modelo de problemas',
      summary:
        'Prepare e descreva uma modelo de problemas no qual vai ajudar com o gerenciamento de projetos',
      dueDate: '2024-06-15',
    },
  ];
  get selectUser() {
    return this.tasks.filter((task) => task.userId == this.userId);
  }
  trackByID(index: number, task: Task) {
    return task.id;
  }
}
