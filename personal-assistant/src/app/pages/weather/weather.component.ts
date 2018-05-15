import { Component, OnInit } from '@angular/core';
import { WeatherJson } from '../../JsonParsers/WeatherJson.service';
import { Weatherobj } from './Weatherobjclass';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherjson:WeatherJson) { }

  currentweather: any;
  values:any;

  ngOnInit() {
  //  this.weatherjson.talk();
  }

}
