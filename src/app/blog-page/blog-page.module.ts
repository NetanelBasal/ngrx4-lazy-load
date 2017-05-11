import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "app/blog-page/blog-page.routing";
import { BlogPageComponent } from './blog-page.component';
import * as fromBlog from './blog.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    routing,
    StoreModule.forFeature('blogModule', {
      posts: fromBlog.reducer
    })
  ],
  declarations: [BlogPageComponent]
})
export class BlogPageModule { }
