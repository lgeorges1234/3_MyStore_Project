import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: '', pathMatch: 'full', redirectTo: 'product'},
  { path: '**', redirectTo: 'product'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
