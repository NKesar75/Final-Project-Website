//needed imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//firebase and google
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//pages
import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { accountComponent } from './pages/account/app.accountComponent';
import { mapsComponent } from './pages/Maps/app.mapsComponent'
import { LoginComponent } from './pages/Loginpage/app.loginpageComponet';
import { createaccountComponent } from './pages/CreateAccount/app.createaccountComponet';
import { forgotpasswordComponent } from './pages/Forgotpassword/app.forgotpasswordComponet';

//routers
import { AuthService } from './providers/auth.service'
import { AuthGuardService } from './providers/auth-guard.service'
import { environment } from '../environments/environment';


@NgModule({
  imports: [BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
     AgmCoreModule.forRoot({
       apiKey: 'AIzaSyAdd5-uTaKwUlvS5lJGmQf-JMay2glb-Hw'
     }),
    RouterModule.forRoot([
      //no authecication needed pages
      { path: '', component: contentAreaComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgotpassword', component: forgotpasswordComponent },
      { path: 'createaccount', component: createaccountComponent },
      
      //authecaition needed
      { path: 'account', canActivate: [AuthGuardService], component: accountComponent },
      { path: 'maps', canActivate: [AuthGuardService], component: mapsComponent },

      //bad routes
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: '**', redirectTo: 'login', pathMatch: 'full'
    }

    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],

  declarations:
    [AppComponent,
      headerComponent,
      navComponent,
      contentAreaComponent,
      footerComponent,
      accountComponent,
      mapsComponent,
      LoginComponent,
      createaccountComponent,
      forgotpasswordComponent
    ],

  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

