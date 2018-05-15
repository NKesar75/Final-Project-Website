import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
// import { ApiAiClient } from "api-ai-javascript";
import 'rxjs/add/operator/map';

@Injectable()

export class WeatherJson{

  // readonly token = environment.dialogflow.angualrbot;
  // readonly client = new ApiAiClient({accessToken: this.token})
  
  constructor() { }

  // talk(){
  //   this.client.textRequest('Whats the weather').then(res => console.log(res));
  // }
}