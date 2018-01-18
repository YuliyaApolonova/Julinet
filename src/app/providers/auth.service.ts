import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;

  constructor(private afa: AngularFireAuth, private router: Router ) {
    this.user = afa.authState;
  }
  signInWithFacebook() {

  }
  // loginWithGoogle() {
  //   return this.afa.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider);
  // }
}
