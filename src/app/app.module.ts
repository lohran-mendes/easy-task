import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';
import { TaskComponent } from './components/tasks/task/task.component';
import { NewTaskComponent } from './components/tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, TasksComponent, TaskComponent, NewTaskComponent],
  imports: [BrowserModule, AppRoutingModule, NgFor, NgIf, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
