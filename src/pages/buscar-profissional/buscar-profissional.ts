import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FiltrarBuscaPage } from '../filtrar-busca/filtrar-busca';
import { IonicPage } from 'ionic-angular';
import { UserService } from './user.service';
import leaflet from 'leaflet';

// declare var google;

@IonicPage()
@Component({
  selector: 'page-buscar-profissional',
  templateUrl: 'buscar-profissional.html'
})

export class MapsPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  professionals: any;
  markers : any;
  timeout: any;


  constructor(public navCtrl: NavController, public UserService: UserService) {

  }

  goToFiltrarBusca(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrarBuscaPage);
  }
  public n: number = 1;
  ionViewDidLoad() {
    this.timeout = 1000 * 10//10 segundos
    this.professionals = new leaflet.LayerGroup([]);
    this.markers = [];
    this.loadmap();
  }

  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);

    this.professionals.addTo(this.map)

    this.map.locate({
      setView: true,
      maxZoom: 14
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();

      var myIcon = leaflet.icon({
        iconUrl: '../assets/img/eu.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });
      let marker: any = leaflet.marker([e.latitude, e.longitude], {icon: myIcon});

      marker.bindPopup("<p>Procurando Ajuda?</p><p>Selecione um profissional mais procimo e entre em contato!</p>");
      leaflet.circle([e.latitude, e.longitude], {radius: 800}).addTo(this.map);

      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);

      this.updateProfessionals()
    }).on('locationerror', (err) => {
      alert(err.message);
    })

  };

  updateProfessionals() {
    var user = [];
    var profIcon = leaflet.icon({
      iconUrl: '../assets/img/prof.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });

    this.UserService.list().subscribe(dados => {
      user = dados;
      this.professionals.clearLayers();
      for (let i = 0; i < user.length; i++) {
        if(user[i].function == 'prof'){
          let markerProf: any = leaflet.marker([user[i].lat, user[i].log], {icon: profIcon})
          markerProf.bindPopup("<p>Olá, sou o " + user[i].name + ".</p>" + "Se você precisa de um " + user[i].profession + ", clique no botão para entrar em contato.</p><br><button style='width: 100%; background-color: #4CAF50;     border: none;     color: white;     padding: 10px 10px;     text-align: center;     text-decoration: none;     display: inline-block;     font-size: 16px;     margin: 4px 2px;     cursor: pointer;' >Clique aqui para entrar em contato</button>")
          this.professionals.addLayer(markerProf)
        }
      }

      setTimeout( () => {
        this.updateProfessionals()
      }, this.timeout);
    })
    console.log("running...");
  }
}
