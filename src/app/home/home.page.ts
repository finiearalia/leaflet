import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map! : L.Map;
  marker!: L.Marker;
  basemaps!: any;

  constructor() {}
  ngOnInit() {

  }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-6.175253728264677, 106.82706696492357], 13);
    this.marker = L.marker([-6.175253728264677, 106.82706696492357]).addTo(this.map);
    this.marker.bindPopup('Ini Monas').openPopup();



    this.basemaps = {
      Topography: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }),

      Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
          layers: 'OSM-Overlay-WMS'
      }),

      Terrestris: L.tileLayer.wms('https://ows.terrestris.de/osm/service?', {
          layers: 'OSM-WMS'
      })
  };

  L.control.layers(this.basemaps).addTo(this.map);

  this.basemaps.Topography.addTo(this.map);
  }


}
