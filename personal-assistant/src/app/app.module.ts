import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { accountComponent } from './pages/account/app.accountComponent';
import { mapsComponent } from './pages/Maps/app.mapsComponent'
//import { LoginComponent } from './pages/Loginpage/app.loginpageComponet';

import { AuthService } from './providers/auth.service'
import { AuthGuardService } from './providers/auth-guard.service'
import { environment } from '../environments/environment';


@NgModule({
  imports: [BrowserModule,
     AgmCoreModule.forRoot({
       apiKey: 'AIzaSyAdd5-uTaKwUlvS5lJGmQf-JMay2glb-Hw'
     }),
    RouterModule.forRoot([
      { path: '', component: contentAreaComponent },
      { path: 'account', component: accountComponent },
     // { path: 'login', component: LoginComponent },
      { path: 'maps', component: mapsComponent }
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
     // LoginComponent
    ],

  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }