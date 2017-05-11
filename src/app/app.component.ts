import { Component } from '@angular/core';

@Component({
  selector: 'play-root',
  template: `
    <h1>ngrx version 4 - lazy load reducers</h1>
    <button routerLink="/blog">Blog</button>
    <button routerLink="/todos">Todos</button>
    
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
