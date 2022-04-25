import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatButtonModule} from "@angular/material/button";
import {RegisterPageComponent} from "./register-page/register-page.component";

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        MatButtonModule,
    ],
})
export class AuthModule {}
