import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html'
})
export class ContatoPage {
  paramsUser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.paramsUser = this.navParams.get('params')
  }

}
