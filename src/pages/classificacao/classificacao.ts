import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-classificacao',
  templateUrl: 'classificacao.html'
})
export class ClassificacaoPage {

  buttonColor1: string = '#000';
  buttonColor2: string = '#000';
  buttonColor3: string = '#000';
  buttonColor4: string = '#000';
  buttonColor5: string = '#000';

  constructor(public navCtrl: NavController) {
  }

  addEvent(number){
    console.log(number)
    if(number == 1){
      this.buttonColor1 = 'rgba(255, 255, 0, 1)';
      this.buttonColor2 = '#000';
      this.buttonColor3 = '#000';
      this.buttonColor4 = '#000';
      this.buttonColor5 = '#000';
    }else if(number == 2){
      this.buttonColor1 = 'rgba(255, 255, 0, 1)';
      this.buttonColor2 = 'rgba(255, 255, 0, 1)';
      this.buttonColor3 = '#000';
      this.buttonColor4 = '#000';
      this.buttonColor5 = '#000';
    }else if (number == 3){
      this.buttonColor1 = 'rgba(255, 255, 0, 1)';
      this.buttonColor2 = 'rgba(255, 255, 0, 1)';
      this.buttonColor3 = 'rgba(255, 255, 0, 1)';
      this.buttonColor4 = '#000';
      this.buttonColor5 = '#000';
    }else if (number == 4){
      this.buttonColor1 = 'rgba(255, 255, 0, 1)';
      this.buttonColor2 = 'rgba(255, 255, 0, 1)';
      this.buttonColor3 = 'rgba(255, 255, 0, 1)';
      this.buttonColor4 = 'rgba(255, 255, 0, 1)';
      this.buttonColor5 = '#000';
    }else{
      this.buttonColor1 = 'rgba(255, 255, 0, 1)';
      this.buttonColor2 = 'rgba(255, 255, 0, 1)';
      this.buttonColor3 = 'rgba(255, 255, 0, 1)';
      this.buttonColor4 = 'rgba(255, 255, 0, 1)';
      this.buttonColor5 = 'rgba(255, 255, 0, 1)';
    }
  }

}
