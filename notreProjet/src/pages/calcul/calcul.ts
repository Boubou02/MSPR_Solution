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

  csAchatNet : String = "neutre";
  csRemise : String = "neutre";
  csVenteNet : String = "neutre";
  csCoef : String = "neutre";
  csTaux : String = "neutre";
  csAchatBrut : String = "neutre";



  donnee = {remise:"",achatnet:"",ventenet:"",coef:"",taux:"",achatbrut:""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculPage');
  }

  compte(){


    if (isNaN(parseInt(this.donnee.remise.valueOf()))) this.Remise = 0;
    else this.Remise = parseInt(this.donnee.remise.valueOf());

    if (isNaN(parseInt(this.donnee.achatnet.valueOf()))) this.AchatNet = 0;
    else this.AchatNet = parseInt(this.donnee.achatnet.valueOf());

    if (isNaN(parseInt(this.donnee.ventenet.valueOf()))) this.VenteNet = 0;
    else this.VenteNet = parseInt(this.donnee.ventenet.valueOf());

    if (isNaN(parseInt(this.donnee.coef.valueOf()))) this.Coef = 0;
    else this.Coef = parseInt(this.donnee.coef.valueOf());

    if (isNaN(parseInt(this.donnee.taux.valueOf()))) this.Taux = 0;
    else this.Taux = parseInt(this.donnee.taux.valueOf());

    if (isNaN(parseInt(this.donnee.achatbrut.valueOf()))) this.AchatBrut = 0;
    else this.AchatBrut = parseInt(this.donnee.achatbrut.valueOf());
 
    let tRemise : number = 0.0;
    let tAchatNet : number = 0.0;
    let tVenteNet : number = 0.0;
    let tCoef : number = 0.0;
    let tTaux : number = 0.0;
    let tAchatBrut : number = 0.0;

    for(let i=0 ; i<=3;i++)
     {
      tVenteNet = this.VenteNet;
      tAchatNet = this.AchatNet;
      tCoef = this.Coef;
      tTaux = this.Taux;
      tAchatBrut = this.AchatBrut;
      tRemise = this.Remise;
     

      //tVenteNet = this.calcVenteNet(tAchatNet, tCoef, tVenteNet);
      if (tAchatNet>0 && tCoef>0)  tVenteNet = this.calcVenteNet(tAchatNet,tCoef,tVenteNet);
      
      if (tVenteNet>0 && tCoef>0) tAchatNet = this.calcAchatNet(tVenteNet,tCoef,tAchatNet,tAchatBrut,tTaux,true);
      
      //tCoef = this.calcCoef(tVenteNet, tAchatNet, tCoef);
      if (tVenteNet>0 && tAchatNet>0) tCoef = this.calcCoef(tVenteNet,tAchatNet,tCoef)
      //this.remplace(tCoef,(tVenteNet/tAchatNet));
      //tAchatBrut = this.calcAchatBrut(tAchatNet, tTaux, tAchatBrut, tRemise, true); 
      //if (tAchatNet>0 && tTaux>0) tAchatBrut = this.calcAchatBrut(tAchatNet,tTaux,tAchatBrut,tRemise,true)
      //this.remplace(tAchatBrut,(tAchatNet/(1-tTaux)));
      
      //tTaux = this.calcTaux(tAchatNet, tAchatBrut, tTaux, tRemise, true);
      if (tAchatNet>0 && tAchatBrut>0) tTaux = this.calcTaux(tAchatNet,tAchatBrut,tTaux,tRemise,true)
      //this.remplace(tTaux,(1-(tAchatNet/tAchatBrut))); 
      
      //tAchatNet = this.calcAchatNet(tVenteNet, tCoef, tAchatNet, tAchatBrut, tTaux, false);
      if (tAchatNet>0 && tTaux>0) tAchatNet = this.calcAchatNet(tVenteNet,tCoef,tAchatNet,tAchatBrut,tTaux,false)
      //this.remplace(tAchatNet,(tAchatBrut*(1-tTaux)));
      //tRemise = this.calcRemise(tTaux, tAchatBrut, tRemise);
      if (tTaux>0 && tAchatBrut>0) tRemise = this.calcRemise(tTaux,tAchatBrut,tRemise)
      //this.remplace(tRemise,((tTaux*tAchatBrut)/100));
      
      //tTaux = this.calcTaux(tAchatNet, tAchatBrut, tTaux, tRemise, false);
      if (tRemise>0 && tAchatBrut>0) tTaux = this.calcTaux(tAchatNet,tAchatBrut,tTaux,tRemise,false)
      //this.remplace(tTaux,((tRemise*100)/tAchatBrut));
      
      //tAchatBrut = this.calcAchatBrut(tAchatNet, tTaux, tAchatBrut, tRemise, false);
      if (tRemise>0 && tTaux>0) tAchatBrut = this.calcAchatBrut(tAchatNet,tTaux,tAchatBrut,tRemise,false)
      //this.remplace(tAchatBrut,((tRemise*100)/tTaux));
    
     }
     
     if (tAchatBrut==-1||tAchatNet==-1||tCoef==-1||tRemise==-1||tTaux==-1||tVenteNet==-1){
       tAchatBrut=tAchatNet=tCoef=tRemise=tTaux=tVenteNet=-1;
     }
     
      this.VenteNet = tVenteNet;
      this.AchatNet = tAchatNet;
      this.Coef = tCoef;
      this.Taux = tTaux;
      this.AchatBrut = tAchatBrut;
      this.Remise = tRemise;
     
    
    }

    remplace(ancien, nouveau)
    {
      if(ancien == 0 && nouveau >= 0) ancien = nouveau;

      else if (ancien > 0 && nouveau > 0 && ancien != nouveau) ancien=-1;

      return ancien;
    }

    
    achatBrut(){

      this.csAchatBrut = "neutre";
      this.csCoef = "neutre";
      this.csVenteNet = "neutre";
      this.csRemise = "neutre";

      this.csAchatNet = "evidence";
      this.csTaux = "evidence";
    }

    calcVenteNet(achatNet, coef, venteNet){
      let result : number;

      if (achatNet>0 && coef>0)  result = this.formulVenteNet(achatNet,coef);
      
      venteNet = this.remplace(venteNet,result);

      return venteNet;
    }

    formulVenteNet(achatNet,coef){
      return achatNet*coef
    }

    calcAchatNet(venteNet, coef, achatNet, achatBrut, taux, flag){
      let result : number;

      if (flag){//utilisation de la premiere formule

        if (venteNet>0 && coef>0) result = this.formulAchatNet1(venteNet, coef);
        achatNet = this.remplace(achatNet,result);

        return achatNet;
      }
      else{//utilisation de la deuxieme formule

        if (achatNet>0 && taux>0) result = this.formulAchatNet2(achatBrut, taux);
        achatNet = this.remplace(achatNet,result);

        return achatNet;
      }
    }

    formulAchatNet1(venteNet, coef){
      return (venteNet/coef);
    }

    formulAchatNet2(achatBrut, taux){
      return (achatBrut*(1-taux));
    }

    calcCoef(venteNet, achatNet, coef){
      let result : number;

      if (venteNet>0 && achatNet>0) result = this.formulCoef(venteNet, achatNet);
       coef = this.remplace(coef,result);

       return coef;
    }

    formulCoef(venteNet, achatNet){
      return (venteNet/achatNet);
    }

    calcAchatBrut(achatNet, taux, achatBrut, remise, flag){
      let result : number;

      if (flag){//utilisation de la premiere formule

        if (achatNet>0 && taux>0) result = this.formulAchatBrut1(achatNet, taux);
        
        achatBrut = this.remplace(achatBrut,result);

        return achatBrut
      }
      else{//utilisation de la deuxieme formule

        if (remise>0 && taux>0) result = this.formulAchatBrut2(remise, taux);
        achatBrut = this.remplace(achatBrut,result);

        return achatBrut;
      }
    }

    formulAchatBrut1(achatNet, taux){
      return (achatNet/(1-(taux/100)));
    }

    formulAchatBrut2(remise, taux){
      return ((remise*100)/taux);
    }

    calcTaux(achatNet, achatBrut, taux, remise, flag){
      let result : number;

      if (flag){//utilisation de la premiere formule
        if (achatNet>0 && achatBrut>0) result = this.formulTaux1(achatNet, achatBrut);
        taux = this.remplace(taux,result);

        return taux;
      }
      else{//utilisation de la deuxieme formule

        if (remise>0 && achatBrut>0) result = this.formulTaux2(remise, achatBrut);
        taux = this.remplace(taux,result);

        return taux;
      }
    }

    formulTaux1(achatNet, achatBrut){
      return (1-(achatNet/achatBrut));
    }

    formulTaux2(remise, achatBrut){
      return ((remise*100)/achatBrut);
    }

    calcRemise(taux, achatBrut, remise){
      let result : number;

      if (taux>0 && achatBrut>0) result = this.formulRemise(taux, achatBrut);
      remise = this.remplace(remise,result);

      return remise;
    }

    formulRemise(taux, achatBrut){
      return ((taux*achatBrut)/100);
    }
}


/* ***************************************************************************************************************

let result : number = 0;

****************************************** calcVenteNet **********************************************************
result = this.calcVenteNet(80, 1.25, 0); //test tout fonctionne
result dois etre 100
******************************************************************************************************************
result = this.calcVenteNet(80, 1.25, 1);//test pour entré incohérente
result dois etre -1
******************************************************************************************************************
result = this.calcVenteNet(80, 0, 0); //test pour entré incomplete
result dois etre 0
***************************************** calcAchatNet ***********************************************************
result = this.calcAchatNet(100, 1.25, 0, 0, 0, true);//test tout fonctionne fonction 1
result dois etre 80
******************************************************************************************************************
result = this.calcAchatNet(0, 0, 0, 100, 20, false)//test tout fonctionne fonction 2
result dois etre 80
******************************************************************************************************************
result = this.calcAchatNet(100, 1.25, 10, 10, 10, true);//test pour entré incohérente fonction 1
result dois etre -1
******************************************************************************************************************
result = this.calcAchatNet(10, 10, 10, 100, 20, false)//test pour entré incohérente fonction 2
result dois etre -1
******************************************************************************************************************
result = this.calcAchatNet(100, 0, 0, 0, 0, true);//test pour entré incomplete fonction 1
result dois etre 0
******************************************************************************************************************
result = this.calcAchatNet(0, 0, 0, 0, 20, false)//test pour entré incomplete fonction 2
result dois etre 0
***************************************** calcCoef ***************************************************************
result = this.calcCoef(100, 80, 0)//test tout fonctionne
result dois etre 1.25
******************************************************************************************************************
result = this.calcCoef(100, 80, 10)//test pour entré incohérente
result dois etre -1
******************************************************************************************************************
result = this.calcCoef(100, 0, 0)//test pour entré incomplete
result dois etre 0
***************************************** calcAchatBrut **********************************************************
result = this.calcAchatBrut(0, 20, 0, 20, false);//test tout fonctionne fonction 2
result dois etre 100
******************************************************************************************************************
result = this.calcAchatBrut(0, 20, 10, 20, false);//test pour entré incohérente fonction 2
result dois etre 100
******************************************************************************************************************
result = this.calcAchatBrut(80, 0, 0, 0, true);//test pour entré incomplete fonction 1
result dois etre 0
******************************************************************************************************************
result = this.calcAchatBrut(0, 0, 0, 20, false);//test pour entré incomplete fonction 2
result dois etre 0
***************************************** calcTaux ***************************************************************
result = this.calcTaux(80, 100, 0, 0, true);//test tout fonctionne fonction 1
result dois etre 20
******************************************************************************************************************
result = this.calcTaux(0, 100, 0, 20, false);//test tout fonctionne fonction 2
result dois etre 20
******************************************************************************************************************
result = this.calcTaux(80, 100, 10, 0, true);//test pour entré incohérente fonction 1
result dois etre -1
******************************************************************************************************************
result = this.calcTaux(0, 100, 10, 20, false);//test pour entré incohérente fonction 2
result dois etre -1
******************************************************************************************************************
result = this.calcTaux(80, 0, 0, 0, true);//test pour entré incomplete fonction 1
result dois etre 0
******************************************************************************************************************
result = this.calcTaux(0, 0, 0, 20, false);//test pour entré incomplete fonction 2
result dois etre 0
**************************************** calcRemise **************************************************************
result = this.calcRemise(20, 100, 0);//test tout fonctionne
result dois etre 20
******************************************************************************************************************
result = this.calcRemise(20, 100, 10);//test pour entré incohérente
result dois etre -1
******************************************************************************************************************
result = this.calcRemise(20, 0, 0);//test pour entré incomplete
result dois etre 0
**************************************** Remplace **************************************************************
result = this.remplace()
 */
remplace(ancien, nouveau)
    {
      if(ancien == 0 && nouveau >= 0) ancien = nouveau;

      else if (ancien > 0 && nouveau > 0 && ancien != nouveau) ancien=-1;

      return ancien;
    }