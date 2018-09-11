import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MinhaContaPage } from '../minha-conta/minha-conta';
import { MapsPage } from '../buscar-profissional/buscar-profissional';
import { FiltrarBuscaPage } from '../filtrar-busca/filtrar-busca';
import { ContatosPage } from '../contatos/contatos';
import { ContatoPage } from '../contato/contato';


@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = MapsPage;
  tab2Root: any = HomePage;
  tab3Root: any = ContatosPage;
  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToMinhaConta(params){
    if (!params) params = {};
    this.navCtrl.push(MinhaContaPage);
  }
  goToBuscarProfissional(params){
    if (!params) params = {};
    this.navCtrl.push(MapsPage);
  }
  goToFiltrarBusca(params){
    if (!params) params = {};
    this.navCtrl.push(FiltrarBuscaPage);
  }
  goToContatos(params){
    if (!params) params = {};
    this.navCtrl.push(ContatosPage);
  }
  goToContato(params){
    if (!params) params = {};
    this.navCtrl.push(ContatoPage);
  }
}
