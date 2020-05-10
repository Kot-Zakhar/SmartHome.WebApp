import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  NotfoundComponent,
  LogInComponent,
  DevicesComponent,
} from './pages';

import { routes } from '@env/environment';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthGuard } from './helpers';

const appRoutes: Routes = [
  {
    path: routes.root,
    redirectTo: routes.home,
    pathMatch: 'full'
  },
  { path: routes.home, component: HomeComponent },
  { path: routes.notFound, component: NotfoundComponent },
  
  { path: routes.logIn, component: LogInComponent },
  { path: routes.signUp, component: SignUpComponent },

  { path: routes.devices, component: DevicesComponent, canActivate: [ AuthGuard ] },
  
  { path: ':notFoundPath', redirectTo: routes.notFound + '/:notFoundPath' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

