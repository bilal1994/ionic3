import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{AddimportPage} from '../addimport/addimport';
import{InimportPage} from '../inimport/inimport';
import{MyimportPage} from '../myimport/myimport';
import{YouimportPage} from '../youimport/youimport';






@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  goToaddimportpage(){
  this.navCtrl.push(AddimportPage)
  console.log('goToaddimport')
}
goToinmportpage(){
  this.navCtrl.push(InimportPage)
  console.log('goToinmport')
}
goTomyimportpage(){
  this.navCtrl.push(MyimportPage)
  console.log('goTomyimport')
}
goToyouimportpage(){
  this.navCtrl.push(YouimportPage)
  console.log('goToyouimport')
}

}
