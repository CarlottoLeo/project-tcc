import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapsPage } from '../buscar-profissional/buscar-profissional';

@Component({
  selector: 'page-filtrar-busca',
  templateUrl: 'filtrar-busca.html'
})
export class FiltrarBuscaPage {

  km: 2000;
  select: any;

  constructor(public navCtrl: NavController) {
  }

  goToBuscarProfissional(params){
    if(!this.km){
      this.km = 2000;
    }
    params = [];
    params.push (this.km, this.select);
    if (!params) params = {};
    this.navCtrl.setRoot(MapsPage, {params});
  }

}
