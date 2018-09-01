import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: 'crisis-center', component: NotFoundComponent },
  { path: 'hero/:id',      component: NotFoundComponent },
  {
    path: 'heroes',
    component: NotFoundComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];
