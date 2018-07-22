import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import{Locations} from '../../modle/locations'
import{AddimportserviceProvider} from '../../providers/addimportservice/addimportservice'
import{Observable} from 'rxjs/observable'
import{ AngularFireDatabase , AngularFireObject} from 'angularfire2/database'

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
MyimportList:AngularFireObject<any>; 
  locations:Locations={
    key :'',
    latitude:'',
    longitude:'',
    info:'',

  };
  itemArray=[];
  myObject =[]
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public addimportserviceProvider:AddimportserviceProvider, db: AngularFireDatabase,public alertCtrl: AlertController ) {
    this.MyimportList=db.object('giftmap');
    this.MyimportList.snapshotChanges().subscribe(action=>{
      let y=action.payload.toJSON()
      y['key']=action.key
  this.itemArray.push(action.payload.val() as Locations)
  console.log(this.itemArray)
  this.myObject= Object.entries(this.itemArray [0])
        console.log(this.myObject)
      });
    }
  

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyimportPage');
  }
updateLocation(locations:Locations){
  this.addimportserviceProvider.updateLocation(locations).then ( ()=>{
    console.log('updated')
  })
}
removeLocation(locations:Locations){
  this.addimportserviceProvider.removeLocation(locations).then ( ()=>{
    console.log('deleted')
  })

}



showPrompt(key , info, latitude, longitude) {
  const prompt = this.alertCtrl.create({
    title: 'تعديل على الصفحة',
    message: "التعديل على المعلومات الحاليه ",
    inputs: [
      {
        name: 'Info',
        placeholder:info
      },
      {
        name: 'Latitude',
        placeholder: latitude
      },
      {
        name: 'Longitude',
        placeholder: longitude
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
          //console.log('Saved clicked');
          this.locations.info = data.Info
          this.locations.latitude = data.Latitude
          this.locations.longitude = data.Longitude
          this.locations.key = key
          console.log(this.locations)
          //this.updateLocation(this.locations)
        }
      }
    ]
  });
  prompt.present();
}
}
