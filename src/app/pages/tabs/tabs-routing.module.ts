import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { TabsPage } from './tabs.page';
import { ProductsPage } from '../products/products.page';
import { FavouritesPage } from '../favourites/favourites.page';
import { CartPage } from '../cart/cart.page';

const routes: Routes = [
	{
		path: 'tabs', 
		component: TabsPage,
		children: [
			{
				path: 'products',
				outlet: 'products',
				component: ProductsPage
			},
			{
				path: 'favourites',
				outlet: 'favourites',
				component: FavouritesPage
			},
			{
				path: 'cart',
				outlet: 'cart',
				component: CartPage
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/(products:products)',
		pathMatch: 'full'
	}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TabsRoutingModule { }
