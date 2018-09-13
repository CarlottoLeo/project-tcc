import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MinhaContaPage } from '../pages/minha-conta/minha-conta';
import { MapsPage } from '../pages/buscar-profissional/buscar-profissional';
import { FiltrarBuscaPage } from '../pages/filtrar-busca/filtrar-busca';
import { LoginPage } from '../pages/login/login';
import { ClassificacaoPage } from '../pages/classificacao/classificacao';
import { ServiOsPage } from '../pages/servi-os/servi-os';
import { ContatosPage } from '../pages/contatos/contatos';
import { ContatoPage } from '../pages/contato/contato';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { SobrePage } from '../pages/sobre/sobre';



import { HomePage } from '../pages/home/home';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToMinhaConta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MinhaContaPage);
  }
  goToBuscarProfissional(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MapsPage);
  }
  goToFiltrarBusca(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FiltrarBuscaPage);
  }
  goToClassificacao(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ClassificacaoPage);
  }
  goToServiOs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ServiOsPage);
  }
  goToContatos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContatosPage);
  }
  goToContato(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContatoPage);
  }
  goToAjuda(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AjudaPage);
  }
  goToConfiguracao(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConfiguracaoPage);
  }
  goToSobre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SobrePage);
  }
}
