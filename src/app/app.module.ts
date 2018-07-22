import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavController } from 'ionic-angular';
import{AddimportPage} from '../pages/addimport/addimport';
import{InimportPage} from '../pages/inimport/inimport';
import{MyimportPage} from '../pages/myimport/myimport';
import{YouimportPage} from '../pages/youimport/youimport';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IampoorPage } from '../pages/iampoor/iampoor';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{AngularFireModule} from 'angularfire2'
import{AngularFireDatabaseModule} from 'angularfire2/database'
import { AddimportserviceProvider } from '../providers/addimportservice/addimportservice';
import { InimportserviceProvider } from '../providers/inimportservice/inimportservice';

import { MyimportServiceProvider } from '../providers/myimport-service/myimport-service';

export  const  firebaseConfig = {
  apiKey: "AIzaSyDc__qclxqwK8fc4z5XRABbgwIAc1KG7Qg",
  authDomain: "ionicas-397ad.firebaseapp.com",
  databaseURL: "https://ionicas-397ad.firebaseio.com",
  storageBucket: "ionicas-397ad.appspot.com",
  messagingSenderId: "670260969228"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IampoorPage,
    AddimportPage,
    InimportPage,
    MyimportPage,
    YouimportPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IampoorPage,
    IampoorPage,
    AddimportPage,
    InimportPage,
    MyimportPage,
    YouimportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AddimportserviceProvider,
    InimportserviceProvider,

    MyimportServiceProvider
  ]
})
export class AppModule {}
