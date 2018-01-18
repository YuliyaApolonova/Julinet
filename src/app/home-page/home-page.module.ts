/**
 * Created by user on 16.01.18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomePageComponent} from './home-page.component';

// import { SignUp } from './registration/registration.component';

import {HomePageRoutingModule} from './home-page-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HomePageComponent,
  ],
  providers: [
  ]
})
export class HomePageModule { }
