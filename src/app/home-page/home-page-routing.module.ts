/**
 * Created by user on 16.01.18.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomePageComponent} from './home-page.component';

const startRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'},
      // {
      //   path: 'registration',
      //   component: SignUpComponent
      // },
      // {
      //   path: 'sign_in',
      //   component: SignInComponent
      // }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(startRoutes) ],
  exports: [ RouterModule ]
})
export class HomePageRoutingModule {}
