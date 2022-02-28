import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-add-to-cart-form',
  templateUrl: './add-to-cart-form.component.html',
  styleUrls: ['./add-to-cart-form.component.css']
})
export class AddToCartFormComponent implements OnInit {
  quantity: number = 0;
  @Input() product: Product;

  constructor(private cartService: CartService) {
    this.product = {
      "id": 0,
      "name": '',
      "price": 0,
      "url": '',
      "description": '',
      "quantity": 0,
    }
   }

  ngOnInit(): void {
     let number = this.getQuantity();
     if(number) {this.quantity = number;}
     else {this.quantity = 0;}
  }

  getQuantity(): number {
    const cartItem = this.cartService.getCart().filter(item => item.id === this.product.id).map(item => item.quantity);
    if (cartItem) { return cartItem[0]; } 
    return 0;
  }

  onSubmit(): void {
    const product = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      url: this.product.url,
      description: this.product.description,
      quantity: this.quantity,
    };
    this.cartService.addToCart (product)
  }
}
