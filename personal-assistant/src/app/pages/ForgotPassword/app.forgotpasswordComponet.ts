import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './forgotpassword.html',
  styleUrls: ['./forgotpassword.css']
})
export class forgotpasswordComponent implements OnInit {

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

          this.router.navigate(['account']).then(function () {
            window.location.reload();
          });

          this.user = af.authState;
        }
      });
  }

  ngOnInit() {
  }


  sendpasswordreset() {

      this.af.auth.sendPasswordResetEmail(this.email)
      .then((result)=>{
        this.router.navigate(['login']).then(function(){
        window.location.reload();
        window.alert('successfully sent email!');
      });
      console.log('successfully sent email!');
    }).catch((error)=>{
      window.alert('Error sending email: ' + error);
      console.log('Error sending email: ',error);
    })

  }

}

