import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-item-detail/:id', component: ProductItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
