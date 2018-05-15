import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { userDatabaseService } from '../../providers/userdatabase.service';
import { user } from '../../user/user';

@Component({
  templateUrl: './createaccount.html',
  styleUrls: ['./createaccount.css']
})
export class createaccountComponent implements OnInit {

  public form: FormGroup;
  client: user;
  email = '';
  password = '';
  Firstname = '';
  Lastname = '';
  Dob = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  user: Observable<firebase.User>;
  constructor(public af: AngularFireAuth, public db: userDatabaseService, private router: Router) {
    this.client = new user();
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.router.navigate(['/']).then(function () {
            window.location.reload();
          });

          this.user = af.authState;
        }
      });
  }

  ngOnInit() {
  }

  createaccount() {
    this.af.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        this.db.createuser(this.client);
        this.router.navigate(['/']).then(function () {
          window.location.reload();
        });
        console.log('Account Created!');
      }).catch((error) => {
        window.alert('Error Creating account: ' + error);
        console.log('Error Creating account: ', error);
      })

  }

}

