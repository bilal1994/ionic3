import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InimportserviceProvider } from '../../providers/inimportservice/inimportservice';
import{Locations} from '../../modle/locations'
/**
 * Generated class for the InimportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inimport',
  templateUrl: 'inimport.html',
})
export class InimportPage {
  locations:Locations={
    latitude:'',
    longitude:'',
    info:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams , public inimportserviceProvider:InimportserviceProvider,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InimportPage');
  }



  addLocation(locations:Locations){
    this.inimportserviceProvider.addLocation(locations).then(ref=>{
  this.showAlert()
    })
    }
  
    showAlert() {
      const alert = this.alertCtrl.create({
        title: 'imports!',
        subTitle: 'Thanks for ionic people!',
        buttons: ['OK']
      });
      alert.present();
    }
  

}
