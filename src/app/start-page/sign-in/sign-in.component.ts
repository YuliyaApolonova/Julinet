import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../providers/auth.service';
import {Router} from '@angular/router';
// import * as firebase from 'firebase/app';
// import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // private user: Observable<firebase.User>;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .subscribe((res) => {
        this.router.navigate(['home']);
      })
      .catch((err) => console.log(err));
  }

}
