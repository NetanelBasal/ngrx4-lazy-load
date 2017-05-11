import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'play-home-page',
  templateUrl: './blog-page.component.html'
})
export class BlogPageComponent implements OnInit {
  posts$: Observable<any>
  
  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.posts$ = this.store.select(state => state.blogModule.posts);
  }

}
