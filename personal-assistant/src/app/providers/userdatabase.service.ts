import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { QueryFn } from 'angularfire2/database/interfaces';
import { user } from '../user/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class userDatabaseService {

  private dbPath = '/users';
  clientref: AngularFireList<user> = null;
  userid: string = "";


  constructor(private db: AngularFireDatabase, private af: AngularFireAuth) {
    this.clientref = this.db.list(this.dbPath);
  }

  createuser(client:user): void {
    this.userid = this.af.auth.currentUser.uid;
    this.db.database.ref("users").child(this.userid).child("userinfo").push(client.mLastname);
    
  }

  updateuser(key: string, value: any): void {
    this.clientref.update(key, value).catch(error => this.handleError(error));
  }


  deleteuser(key: string): void {
    this.clientref.remove(key).catch(error => this.handleError(error));
  }

  getuserList(): AngularFireList<user> {
    return this.clientref;
  }

  deleteAll(): void {
    this.clientref.remove().catch(error => this.handleError(error));
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
