import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContatoPage } from '../contato/contato';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {

  constructor(public navCtrl: NavController) {
  }
  goToContato(params){
    if (!params) params = {};
    this.navCtrl.push(ContatoPage);
  }
}
