import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  NotfoundComponent,
} from './pages';

export const routes = {
  root: '',
  home: 'home',
  devices: 'devices',
  login: 'login',
  register: 'register',
  notFound: '404'
};

const appRoutes: Routes = [
  {
    path: routes.root,
    redirectTo: routes.home,
    pathMatch: 'full'
  },
  { path: routes.home, component: HomeComponent },
  { path: routes.notFound, component: NotfoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

