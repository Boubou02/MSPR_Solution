import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcule',
  templateUrl: './calcule.page.html',
  styleUrls: ['./calcule.page.scss'],
})
export class CalculePage implements OnInit {

  remise : number = 0;
  achat : number = 0;
  vente : number = 0;
  co : number = 0;
  unattribut : string = "formulaire de contacte";
  donnee = {prixbrut:"",tauxremise:"",achatnet:"",ventenet:"",coeff:""};
  nbCaractere : string;

  constructor() { }

  ngOnInit() {

    
  }


compte(){

/*
tVentNet, tAchatNet, tCoeff, tTaux, tAchatBrut, tRemise : number;
bool tst = true;

while(tst)
 {
  tVentNet = VentNet;
  tAchatNet = AchatNet;
  tCoeff = Coeff;
  tTaux = Taux;
  tAchatBrut = AchatBrut;
  tRemise = Remise;
 
  if (AchatNet>0 && Coeff>0) VentNet = remplace(VentNet,(AchatNet*Coeff));
  if (VentNet>0 && Coeff>0) AchatNet = remplace(AchatNet,(VentNet/Coeff));
  
  if (VentNet>0 && AchatNet>0) Coeff = remplace(Coeff,(VentNet/AchatNet));   
  if (AchatNet>0 && Taux>0) AchatBrut = remplace(AchatBrut,(AchatNet/(1-Taux)));
  
  if (AchatNet>0 && AchatBrut>0) Taux = remplace(Taux,(1-(AchatNet/AchatBrut))); 
  
  if (AchatNet>0 && Taux>0) AchatNet = remplace(AchatNet,(AchatBrut*(1-Taux)));
  if (Taux>0 && AchatBrut>0) Remise = remplace(Remise,((Taux*AchatBrut)/100));
  
  if (Remise>0 && AchatBrut>0) Taux = remplace(Taux,((Remise*100)/AchatBrut));
  
  if (Remise>0 && Taux>0) AchatBrut = remplace(AchatBrut,((Remise*100)/Taux));

  if (tVentNet == VentNet && tAchatNet == AchatNet && tCoeff == Coeff && tTaux = Taux && tAchatBrut = AchatBrut && tRemise = Remise) tst = false;
 }
*/






  //this.nbCaractere = this.donnee.prixbrut.valueOf();
  //if (this.donnee.tauxremise.valueOf()=="0")
  this.remise = this.TauxRemise(this.donnee.achatnet.valueOf(),this.donnee.prixbrut.valueOf());

  //if (this.donnee.achatnet.valueOf()=="0")
  this.achat = this.PrixAchat(this.donnee.prixbrut.valueOf(),this.donnee.tauxremise.valueOf());

  //if (this.donnee.ventenet.valueOf()=="0")
  this.vente = this.PrixVente(this.donnee.achatnet.valueOf(),this.donnee.coeff.valueOf());

  //if (this.donnee.coeff.valueOf()=="0")
  this.co = this.Coeff(this.donnee.ventenet.valueOf(),this.donnee.achatnet.valueOf());
}

  Affichage(){

      this.remise = this.TauxRemise(0,0);
      /*this.achat = this.PrixAchat(0,0);
      this.vente = this.PrixVente(0,0);
      this.co = this.Coeff(0,0);
      document.getElementById("CoeffMul").nodeValue*/
      alert("fff");

  }

  TauxRemise(prixachat, prixbrut){
    var result = 0;

    if(prixachat==0 && this.achat !=0)
      prixachat=this.achat;

    if (prixbrut!=0 && prixachat!=0)
    result = (1-prixachat/prixbrut)*100;

    return result;  
  }

  PrixAchat(prixbrut, tauxremise){
    var result = 0;

    if(tauxremise==0 && this.remise!=0)
      tauxremise=this.remise;

    if (prixbrut!=0 && tauxremise!=0)
    result = prixbrut*(1-tauxremise);

    return result;
  }

  PrixVente(prixachat, coeff){
    var result = 0;

    if(prixachat==0 && this.achat !=0)
      prixachat=this.achat;
    if(coeff==0 && this.co!=0)
      coeff=this.co;

    if (prixachat!=0 && coeff!=0)
    result = prixachat*coeff;

    return result;
  }

  Coeff(prixvente, prixachat){
    var result = 0;

    if(prixvente==0 && this.vente !=0)
      prixvente=this.vente;
    if(prixachat==0 && this.achat !=0)
      prixachat=this.achat;

    if (prixvente!=0 && prixachat!=0)
    result = prixvente/prixachat;

    return result;
  }

  remplace(ancien, nouveau)
  {
    if(ancien == 0)
    {
      if (nouveau >= 0)
      {
        ancien = nouveau;
      }
    }
  }

}
