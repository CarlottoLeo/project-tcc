import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContatosPage } from '../pages/contatos/contatos';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { MinhaContaPage } from '../pages/minha-conta/minha-conta';
import { ClassificacaoPage } from '../pages/classificacao/classificacao';
import { PageHelpPage } from '../pages/page-help/page-help';
import { MapsPage } from '../pages/buscar-profissional/buscar-profissional';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { SobrePage } from '../pages/sobre/sobre';
import { ServiOsPage } from '../pages/servi-os/servi-os';
import { FiltrarBuscaPage } from '../pages/filtrar-busca/filtrar-busca';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ContatoPage } from '../pages/contato/contato';
import { UserService } from '../pages/buscar-profissional/user.service';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ProfessionalPage } from '../pages/professional/professional';
import { AppRate } from '@ionic-native/app-rate';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContatosPage,
    ConfiguracaoPage,
    MinhaContaPage,
    ClassificacaoPage,
    PageHelpPage,
    MapsPage,
    AjudaPage,
    SobrePage,
    ServiOsPage,
    FiltrarBuscaPage,
    TabsControllerPage,
    ContatoPage,
    DetalhesPage,
    ProfessionalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContatosPage,
    ConfiguracaoPage,
    MinhaContaPage,
    ClassificacaoPage,
    PageHelpPage,
    MapsPage,
    AjudaPage,
    SobrePage,
    ServiOsPage,
    FiltrarBuscaPage,
    TabsControllerPage,
    ContatoPage,
    DetalhesPage,
    ProfessionalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    UserService,
    AppRate,
    AuthServiceProvider
  ]
})
export class AppModule {}
