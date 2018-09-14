import { Component } from '@angular/core';
// import { IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { IonicPage, NavController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { email: 'admin', password: 'admin' };

  constructor(
    public nav: NavController,
    private auth: AuthServiceProvider,
    // private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    if(this.registerCredentials.email == 'admin' && this.registerCredentials.password == 'admin'){
      this.nav.setRoot(TabsControllerPage);
    }else{
      this.showLoading()
      console.log(this.registerCredentials)
      this.auth.login(this.registerCredentials).subscribe(allowed => {
        console.log(allowed);
        if (allowed) {
          this.nav.setRoot(TabsControllerPage);
        } else {
          this.showError("These credentials do not match our records.");
        }
      },
      error => {
        this.showError(error);
      });
    }
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    // let alert = this.alertCtrl.create({
    //   title: 'Fail',
    //   subTitle: text,
    //   buttons: ['OK']
    // });
    //alert.present(prompt);
  }


}
