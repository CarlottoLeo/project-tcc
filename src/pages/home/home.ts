import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinhaContaPage } from '../minha-conta/minha-conta';
import { MapsPage } from '../buscar-profissional/buscar-profissional';
import { FiltrarBuscaPage } from '../filtrar-busca/filtrar-busca';
import { Usuario } from '../../models/usuario';
import { Sesstion } from '../../providers/sesstion/sesstion';
import { LoginPage } from '../login/login';
import { ClassificacaoPage } from '../classificacao/classificacao';
import { ServiOsPage } from '../servi-os/servi-os';
import { ContatosPage } from '../contatos/contatos';
import { ContatoPage } from '../contato/contato';
import { AjudaPage } from '../ajuda/ajuda';
import { ConfiguracaoPage } from '../configuracao/configuracao';
import { SobrePage } from '../sobre/sobre';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users;

  constructor(private navCtrl: NavController, private auth: AuthServiceProvider, public http:Http) {
    this.getUsers();
  }

  public getUsers() {
    let headers = new Headers(
    {
      'Authorization' : this.auth.getToken()
    });

    let options = new RequestOptions({ headers: headers });
    // Change to this http://ed43bb3b.ngrok.io/api/users
    let url = 'http://contoh.dev/api/users';
    this.http.get(url, options).map(res => res.json()).subscribe(
      data => {
        this.users = data.data;
      }
    );
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }
  goToMinhaConta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MinhaContaPage);
  }
}
