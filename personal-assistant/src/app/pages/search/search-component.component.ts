import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponent implements OnInit {
  searchfor = "";
  constructor() { }

  ngOnInit() {
  }

}
