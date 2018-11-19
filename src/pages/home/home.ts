import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinhaContaPage } from '../minha-conta/minha-conta';
import { ProfessionalPage } from '../professional/professional';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
//import { Http, RequestOptions, Headers } from '@angular/http';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users = [];

  constructor(private navCtrl: NavController, private auth: AuthServiceProvider, public http:Http, public alertCtrl: AlertController) {
    this.getUsers();
  }

  doPrompt() {
    const alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
        buttons: ['OK']
      });
      alert.present();
  }

  public getUsers() {
    // let headers = new Headers(
    // {
    //   'Authorization' : this.auth.getToken()
    // });

    //let options = new RequestOptions({ headers: headers });
    // Change to this http://ed43bb3b.ngrok.io/api/users
    let url = 'https://my-json-server.typicode.com/CarlottoLeo/json-serve/register';
    var id = 1;
    this.http.get(url+"/"+id).map(res => res.json()).subscribe(
      data => {
        this.users.push(data);
      }
    );
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage');
    });
  }
  goToMinhaConta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MinhaContaPage);
  }
  goToProfessional(params){
    if (!params) params = {};
    this.navCtrl.push(ProfessionalPage, {users: this.users});
  }
}
