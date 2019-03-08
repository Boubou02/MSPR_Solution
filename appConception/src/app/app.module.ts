import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { PlanComponent } from './plan/plan.component';
import { AppRoutingModule } from './app-routing.module';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    FourOhFourComponent
  ],

  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
