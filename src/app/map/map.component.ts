import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude = 45.5155;
  longitude = 122.6793;
  mapType = 'satellite';
  constructor() { }

  ngOnInit() {
  }

}
