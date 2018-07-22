import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons={
name: 'bilal',
lname:'fawaz',
depertment:'ionic',
age:22
  }



 
constructor(public navCtrl: NavController ) {

}

}

