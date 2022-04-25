import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import {RegisterPageComponent} from "./register-page/register-page.component";



const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: "register",
    component: RegisterPageComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
