import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "app/todos-page/todos-page.routing";
import { TodosPageComponent } from './todos-page.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './todos.reducer';

@NgModule({
  imports: [
    CommonModule,
    routing,
    StoreModule.forFeature('todosModule', {
      todos: fromTodos.reducer
    })
  ],
  declarations: [TodosPageComponent]
})
export class TodosPageModule { }
