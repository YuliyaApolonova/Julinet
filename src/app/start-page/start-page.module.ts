import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StartPageComponent} from './start-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { SignUp } from './registration/registration.component';

import {StartPageRoutingModule} from './start-page-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    StartPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    StartPageComponent,
    SignInComponent
  ],
  providers: [
  ]
})
export class StartPageModule { }
