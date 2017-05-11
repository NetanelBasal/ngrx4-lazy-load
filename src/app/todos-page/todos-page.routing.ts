import { TodosPageComponent } from './todos-page.component';
import { RouterModule } from '@angular/router';


const routes = [
  {
    path: '',
    component: TodosPageComponent
  }
]

export const routing = RouterModule.forChild(routes);