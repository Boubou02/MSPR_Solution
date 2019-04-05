import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calcul',
  templateUrl: 'calcul.html',
})
export class CalculPage {

  Remise : number = 0.0;
  AchatNet : number = 0.0;
  VenteNet : number = 0.0;
  Coef : number = 0.0;
  Taux : number = 0.0;
  AchatBrut : number = 0.0;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculPage');
  }

  compte(){
 
    let tRemise : number = 0.0;
    let tAchatNet : number = 0.0;
    let tVenteNet : number = 0.0;
    let tCoef : number = 0.0;
    let tTaux : number = 0.0;
    let tAchatBrut : number = 0.0;

    let tst : boolean = true;
    
    while(tst)
     {
      tVenteNet = this.VenteNet;
      tAchatNet = this.AchatNet;
      tCoef = this.Coef;
      tTaux = this.Taux;
      tAchatBrut = this.AchatBrut;
      tRemise = this.Remise;
     
      if (tAchatNet>0 && tCoef>0) tVenteNet = this.remplace(tVenteNet,(tAchatNet*tCoef));
      if (tVenteNet>0 && tCoef>0) tAchatNet = this.remplace(tAchatNet,(tVenteNet/tCoef));
      
      if (tVenteNet>0 && tAchatNet>0) tCoef = this.remplace(tCoef,(tVenteNet/tAchatNet));   
      if (tAchatNet>0 && tTaux>0) tAchatBrut = this.remplace(tAchatBrut,(tAchatNet/(1-tTaux)));
      
      if (tAchatNet>0 && tAchatBrut>0) tTaux = this.remplace(tTaux,(1-(tAchatNet/tAchatBrut))); 
      
      if (tAchatNet>0 && tTaux>0) tAchatNet = this.remplace(tAchatNet,(tAchatBrut*(1-tTaux)));
      if (tTaux>0 && tAchatBrut>0) tRemise = this.remplace(tRemise,((tTaux*tAchatBrut)/100));
      
      if (tRemise>0 && tAchatBrut>0) tTaux = this.remplace(tTaux,((tRemise*100)/tAchatBrut));
      
      if (tRemise>0 && tTaux>0) tAchatBrut = this.remplace(tAchatBrut,((tRemise*100)/tTaux));
    
      if (tVenteNet == this.VenteNet && tAchatNet == this.AchatNet && tCoef == this.Coef && tTaux == this.Taux && tAchatBrut == this.AchatBrut && tRemise == this.Remise) tst = false;
     }
     
     if (tVenteNet == -1 || tAchatNet == -1 || tCoef == -1 || tTaux == -1 || tAchatBrut == -1 || tRemise == -1)
     {
       this.VenteNet = this.AchatNet = this.Coef = this.Taux = this.Taux = this.AchatBrut = this.Remise = -1;
     }
     else 
     {
      this.VenteNet = tVenteNet;
      this.AchatNet = tAchatNet;
      this.Coef = tCoef;
      this.Taux = tTaux;
      this.AchatBrut = tAchatBrut;
      this.Remise = tRemise;
     }
    
    }

    remplace(ancien, nouveau)
    {
      if(ancien == 0 && nouveau >= 0) ancien = nouveau;

      else if (ancien > 0 && nouveau >= 0 && ancien != nouveau) ancien=-1;

      return ancien;
    }

}
