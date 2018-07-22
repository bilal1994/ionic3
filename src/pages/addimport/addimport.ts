import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import{Locations} from '../../modle/locations'
import{AddimportserviceProvider} from '../../providers/addimportservice/addimportservice'

/**
 * Generated class for the AddimportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addimport',
  templateUrl: 'addimport.html',
})
export class AddimportPage {
locations:Locations={
  latitude:'',
  longitude:'',
  info:''
}
  constructor(public navCtrl: NavController, public navParams: NavParams,public AddimportserviceProvider:AddimportserviceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddimportPage');
  }

  addLocation(locations:Locations){
  this.AddimportserviceProvider.addLocation(locations).then(ref=>{
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
