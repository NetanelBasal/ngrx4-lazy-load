import {Store} from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'play-todos-page',
  templateUrl: './todos-page.component.html'
})
export class TodosPageComponent implements OnInit {
  todos$: Observable<any>
  
  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.todos$ = this.store.select(state => state.todosModule.todos);
  }

}
