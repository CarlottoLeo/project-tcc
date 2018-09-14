import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { UserService } from '../buscar-profissional/user.service';

@IonicPage()
@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html',
})
export class ProfessionalPage {

  user = [];
  lat: any;
  log: any;
  cnpj: any;
  profession: any;
  valid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geo: Geolocation, public UserService: UserService) {
    let users = navParams.get('users');
    this.user.push(users[0]);
  }

  ionViewDidLoad() {
  }

  private geoProf(){
    this.geo.getCurrentPosition().then(res => {
      this.lat = '' + parseFloat(res.coords.latitude.toFixed(6));
      this.log = '' + parseFloat(res.coords.longitude.toFixed(6));
    }).catch(() => {
      alert("erro ao pegar geolocalizacao ");
    })
    this.valid = false;
    this.update(false);
  }

  update(variavel){
    console.log(this.valid)
    console.log('update..');
    this.user[0].function = 'prof';
    this.user[0].lat = this.lat;
    this.user[0].log = this.log;
    this.user[0].cnpj = this.cnpj;
    this.user[0].profession = this.profession;
    this.UserService.update(this.user[0]).subscribe(item => { })
    if(variavel){
      this.user[0].lat = '';
      this.user[0].log = '';
      this.UserService.update(this.user[0]).subscribe(item => { })
      return;
    }else{
      setTimeout( () => {
        if(!this.valid){
          this.geoProf()
        }else{
          return 0;
        }
      }, 1000 * 10);
    }
  }

  public notGeoProf(){
    this.update(true);
    this.valid = true;
  }

}
