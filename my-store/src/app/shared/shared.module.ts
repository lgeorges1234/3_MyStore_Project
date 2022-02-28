import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AddToCartFormComponent } from './components/add-to-cart-form/add-to-cart-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    AddToCartFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FooterComponent,
    AddToCartFormComponent
  ]
})
export class SharedModule { }
