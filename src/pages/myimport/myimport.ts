import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import{Locations} from '../../modle/locations'
import { InimportserviceProvider } from '../../providers/inimportservice/inimportservice';

// import { MyimportServiceProvider } from '../../providers/myimport-service/myimport-service';
import{Observable} from 'rxjs/observable'
import{ AngularFireDatabase , AngularFireObject} from 'angularfire2/database'
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the MyimportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myimport',
  templateUrl: 'myimport.html',
})
export class MyimportPage {
inimportList:AngularFireObject<any>; 
  locations:Locations={
    key :'',
    latitude:'',
    longitude:'',
    info:'',

  };
  itemArray=[];
  myObject =[]
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public inimportserviceProvider:InimportserviceProvider, db: AngularFireDatabase,public alertCtrl: AlertController ) {
    this.inimportList=db.object('inimportmap');
    this.inimportList.snapshotChanges().subscribe(action=>{
      if(action.payload.val()==null|| action.payload.val()==undefined){
        console.log('no data')
      }else{
        this.itemArray.push(action.payload.val() as Locations)
        console.log(this.itemArray)
        this.myObject=Object.entries(this.itemArray [0])
        console.log('myObject: '+ this.myObject)
      }

      });
    }
  

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyimportPage');
  }
updateLocation(locations:Locations){
  this.inimportserviceProvider.updateLocation(locations).then ( ()=>{
    this.navCtrl.setRoot(ContactPage)
    console.log('updated')
  })
}
removeLocation(locations:Locations){
   this.inimportserviceProvider.removeLocation(locations).then ( ()=>{
    this.navCtrl.setRoot(ContactPage)
    console.log('deleted')
   })
  console.log(locations)
}


showPrompt(key , info, latitude, longitude) {
  const prompt = this.alertCtrl.create({
    title: 'تعديل على الصفحة',
    message: "التعديل على المعلومات الحاليه ",
    inputs: [
      {
        name: 'Info',
        value:info
      },
      {
        name: 'Latitude',
        value: latitude
      },
      {
        name: 'Longitude',
        value: longitude
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          ///console.log('Saved clicked');
          this.locations.info = data.Info
          this.locations.latitude = data.Latitude
          this.locations.longitude = data.Longitude
          this.locations.key = key
          console.log(this.locations)
          this.updateLocation(this.locations)
        }
      }
    ]
  });
  prompt.present();
}
}
