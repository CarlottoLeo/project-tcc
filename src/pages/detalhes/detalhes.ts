import { Component, OnInit } from '@angular/core';

import { Storage } from "@ionic/storage";

import { Sesstion } from './../../providers/sesstion/sesstion';

import { Usuario } from '../../models/usuario';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})

export class DetalhesPage implements OnInit  {
  usuarioLogado: any;
  constructor(public sesstion: Sesstion, public storage: Storage){}

  //assim que o component existir capture a sseão do usuário
  ngOnInit() {
  this.sesstion.get()
  .then(res => {
    this.usuarioLogado = new Usuario(res);
    console.log('usuário logado  >>> ',this.usuarioLogado);
  });

  console.log(this.sesstion.exist());

  this.sesstion.remove();

  this.sesstion.get()
  .then(res => {
    this.usuarioLogado = new Usuario(res);
    console.log('USUARIO LOGADO  >>> ',this.usuarioLogado);
  });

  console.log(this.sesstion.exist());
}

}
