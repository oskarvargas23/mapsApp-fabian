import { AfterViewInit, Component } from '@angular/core';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken = 'pk.eyJ1Ijoib3NrYXJ2YXJnYXMyMyIsImEiOiJjbHQ1eXJ2NnIwNmJjMmptbGZ2cDdjNTBoIn0.1N8wkmTK7jvuZ68tkxyn8w';


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

  }


}

