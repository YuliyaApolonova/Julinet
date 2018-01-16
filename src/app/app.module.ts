import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuthService} from './providers/auth.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';

import { HomePageComponent } from './home-page/home-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import {AppRoutingModule} from './app-routing.module';
import {StartPageModule} from './start-page/start-page.module';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StartPageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // call factory method
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    StartPageModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
