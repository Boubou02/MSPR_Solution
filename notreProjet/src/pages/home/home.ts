import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalculPage } from '../calcul/calcul';
import { FormulairePage } from '../formulaire/formulaire';
import { PlansPage } from '../plans/plans';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToCalculPage(){
    this.navCtrl.push(CalculPage);
  }

  goToFormulairePage(){
    this.navCtrl.push(FormulairePage);
  }

  goToPlansPage(){
    this.navCtrl.push(PlansPage);
  }


}
