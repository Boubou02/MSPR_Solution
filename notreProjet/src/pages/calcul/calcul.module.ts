import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculPage } from './calcul';

@NgModule({
  declarations: [
    CalculPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculPage),
  ],
})
export class CalculPageModule {}
