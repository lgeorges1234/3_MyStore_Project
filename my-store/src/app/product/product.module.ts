import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductItemDetailComponent,
    ProductListComponent,
    ProductItemComponent
  ]
})
export class ProductModule { }
