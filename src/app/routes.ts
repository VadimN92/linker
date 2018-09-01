import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {MainComponent} from './pages/main/main.component';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {LinksComponent} from './pages/links/links.component';
import {LinkComponent} from './pages/link/link.component';
import {LinkModefyComponent} from './pages/link-modefy/link-modefy.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'links', component: LinksComponent },
      { path: 'link/:id', component: LinkComponent },
      { path: 'link/add', component: LinkModefyComponent },
      { path: 'link/:id/edit', component: LinkModefyComponent },
      { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ]
  },
  { path: '**', component: NotFoundComponent }
];
