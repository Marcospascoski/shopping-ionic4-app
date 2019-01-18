import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductsService } from './pages/services/products.service';
import { FavouritesService } from './pages/services/favourites.service';
import { CartService } from './pages/services/cart.service';
import { AuthService } from './pages/services/auth.service';
import { SortPipe } from './pages/products/sort.pipe';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
  	AppComponent
  	],
  entryComponents: [
  ],
  imports: [
  	BrowserModule, 
  	IonicModule.forRoot(), 
  	AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    Ng2SearchPipeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProductsService,
    FavouritesService,
    CartService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
