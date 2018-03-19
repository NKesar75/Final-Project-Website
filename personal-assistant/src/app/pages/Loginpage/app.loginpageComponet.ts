import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './Loginpage.html',
  styleUrls: ['./loginpage.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;



  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  user: Observable<firebase.User>;


  constructor(public af: AngularFireAuth, private router: Router) {

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


  signInWithGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {

        this.router.navigate(['/']).then(function () {
          window.location.reload();
        });
        console.log('Signed in successfully!');
      }).catch((error) => {
        console.log('Error signing in: ', error);
      })
  }

  signInWithEmail() {

      this.af.auth.signInWithEmailAndPassword(this.email,this.password)
      .then((result)=>{
        this.router.navigate(['/']).then(function(){
        window.location.reload();
      });
      console.log('Signed in successfully!');
    }).catch((error)=>{
      window.alert('Error signing in: ' + error);
      console.log('Error signing in: ',error);
    })

  }

}

