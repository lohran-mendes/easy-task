import { Injectable } from '@angular/core';

import { type NewTask } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks = [
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

  getUserTasks(userId: string){
    return this.tasks.filter((task) => task.userId == userId);
  }

  addTask(evento:NewTask ,userId: string) {
    this.tasks.unshift(
      {
        id: new Date().getTime().toString(),
        userId: userId,
        title: evento.title,
        summary: evento.summary,
        dueDate: evento.date,
      }
    )
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

}
