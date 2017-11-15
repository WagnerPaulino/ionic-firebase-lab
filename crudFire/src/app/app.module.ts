import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaCarroPage } from '../pages/lista-carro/lista-carro';
import { CarroService } from '../services/carro.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDCPcmmeNym9Mqw8DIjLgD3LW8s_SjOdY0",
  authDomain: "crudfire-8d996.firebaseapp.com",
  databaseURL: "https://crudfire-8d996.firebaseio.com",
  projectId: "crudfire-8d996",
  storageBucket: "crudfire-8d996.appspot.com",
  messagingSenderId: "885624639494"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaCarroPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaCarroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CarroService,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
