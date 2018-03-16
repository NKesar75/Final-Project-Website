//needed imports
import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

//pages
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { accountComponent } from './pages/account/app.accountComponent'
import { mapsComponent } from './pages/Maps/app.mapsComponent'
import { LoginComponent } from './pages/Loginpage/app.loginpageComponet';
import { createaccountComponent } from './pages/CreateAccount/app.createaccountComponet';
import { forgotpasswordComponent } from './pages/Forgotpassword/app.forgotpasswordComponet';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  

}
