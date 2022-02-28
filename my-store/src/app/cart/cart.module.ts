import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { FormsModule } from '@angular/forms';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartComponent } from './cart.component';
import { CartConfirmationComponent } from './cart-confirmation/cart-confirmation.component';


@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent,
    CartListComponent,
    CartConfirmationComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ],
  exports: [
    CartItemsComponent,
    CartListComponent,
    CartConfirmationComponent
  ]
})
export class CartModule { }
