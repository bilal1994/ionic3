import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyimportPage } from './myimport';

@NgModule({
  declarations: [
    MyimportPage,
  ],
  imports: [
    IonicPageModule.forChild(MyimportPage),
  ],
})
export class MyimportPageModule {}
