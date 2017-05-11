import { Component } from '@angular/core';
import { BlogPageComponent } from './blog-page.component';
import { RouterModule } from '@angular/router';


const routes = [
  {
    path: '',
    component: BlogPageComponent
  }
]

export const routing = RouterModule.forChild(routes);