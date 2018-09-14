import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { UserService } from '../buscar-profissional/user.service';

/**
* Generated class for the ProfessionalPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html',
})
export class ProfessionalPage {

  id: string;
  cnpj: string;
  user = [];
  lat: any;
  log: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geo: Geolocation, public UserService: UserService) {
    let users = navParams.get('users');
    this.user.push(users[0]);
    console.log(this.user);
  }

  ionViewDidLoad() {

  }

  geoProf(){
    this.geo.getCurrentPosition().then(res => {
      this.lat = '' + parseFloat(res.coords.latitude.toFixed(6));
      this.log = '' + parseFloat(res.coords.longitude.toFixed(6));
    }).catch(() => {
      alert("erro ao pegar geolocalizacao ");
    })
    this.update();
  }
  update(){
    this.user[0].function = 'prof';
    this.user[0].lat = this.lat;
    this.user[0].log = this.log;
    console.log(this.user[0]);
    this.UserService.update(this.user[0]).subscribe(item => { })
    setTimeout( () => {
      this.geoProf()
    }, 1000);
  }

}
