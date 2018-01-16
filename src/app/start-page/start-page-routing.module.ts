/**
 * Created by user on 15.01.18.
 */

/**
 * Created by user on 17.07.17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SignInComponent} from './sign-in/sign-in.component';
// import {SignUpComponent} from './sign-up/sign-up.component';
import {StartPageComponent} from './start-page.component';

const startRoutes: Routes = [
  {
    path: 'start',
    component: StartPageComponent,
    children: [
      {
        path: '',
        component: SignInComponent},
      // {
      //   path: 'registration',
      //   component: SignUpComponent
      // },
      {
        path: 'sign_in',
        component: SignInComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(startRoutes) ],
  exports: [ RouterModule ]
})
export class StartPageRoutingModule {}
