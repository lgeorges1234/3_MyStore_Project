import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartConfirmationComponent } from './cart-confirmation/cart-confirmation.component';
import { CartListComponent } from './cart-list/cart-list.component';

const routes: Routes = [
  { path: '', component: CartListComponent },
  { path: 'cart-success/:fullname', component:  CartConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
