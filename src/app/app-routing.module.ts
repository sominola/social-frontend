import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenExistsGuard} from "./guards/token-exists.guard";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>
      import('./modules/home/home.module').then(
        (m)=>m.HomeModule),
    canActivate:[LoginGuard]
  },
  {
    path:'',
    loadChildren: ()=>
      import('./modules/auth/auth.module').then(
        (m)=>m.AuthModule),
      canActivate:[TokenExistsGuard]
  },
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
