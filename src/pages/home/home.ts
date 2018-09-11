import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinhaContaPage } from '../minha-conta/minha-conta';
import { MapsPage } from '../buscar-profissional/buscar-profissional';
import { FiltrarBuscaPage } from '../filtrar-busca/filtrar-busca';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToMinhaConta(params){
    if (!params) params = {};
    this.navCtrl.push(MinhaContaPage);
  }goToBuscarProfissional(params){
    if (!params) params = {};
    this.navCtrl.push(MapsPage);
  }goToFiltrarBusca(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrarBuscaPage);
  }
}
