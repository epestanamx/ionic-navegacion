import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AjustesPage } from "../pages/ajustes/ajustes";
import { Ajustes2Page } from "../pages/ajustes2/ajustes2";
import { ModalPage } from "../pages/modal/modal";
import { Pagina1Page } from "../pages/pagina1/pagina1";
import { Pagina2Page } from "../pages/pagina2/pagina2";
import { Pagina3Page } from "../pages/pagina3/pagina3";
import { PrincipalPage } from "../pages/principal/principal";
import { TabsPage } from "../pages/tabs/tabs";

@NgModule({
  declarations: [
    MyApp,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina1Page,
    Pagina2Page,
    Pagina3Page,
    PrincipalPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText:'Atras'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina1Page,
    Pagina2Page,
    Pagina3Page,
    PrincipalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
