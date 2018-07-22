import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Locations} from '../../modle/locations'
import{AngularFireDatabase} from 'angularfire2/database'


@Injectable()
export class MyimportServiceProvider {
private gpsListRef =this.db.list<Locations>('myimportmap')
  constructor(public db:AngularFireDatabase) {
    console.log('Hello MyimportServiceProvider Provider');
  }
getLocationList(){
  return this.gpsListRef;
  
}
addLocation(locations:Locations){
  return this.gpsListRef.push(locations)
}
updateLocation(locations:Locations){
  return this.gpsListRef.update(locations.key,locations)
}
removeLocation(locations){
  return this.gpsListRef.remove(locations)
}

}
