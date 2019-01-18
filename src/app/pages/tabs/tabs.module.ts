import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductsPageModule } from '../products/products.module';
import { FavouritesPageModule } from '../favourites/favourites.module';
import { CartPageModule } from '../cart/cart.module';
import { TabsPage } from './tabs.page';
import { TabsRoutingModule } from './tabs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRoutingModule,
    ProductsPageModule,
    CartPageModule,
    FavouritesPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {} 
