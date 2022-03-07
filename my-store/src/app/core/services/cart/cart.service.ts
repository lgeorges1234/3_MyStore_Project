import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/Product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(cartItem: Product) {
    let newCart: Product[] = [];
    newCart = this.cart.filter(item => item.id !== cartItem.id)
    this.cart = newCart;
    if(cartItem.quantity != 0) {this.cart.push(cartItem);}
    else {alert(`You removed "${cartItem.name}" item form your cart`)}
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  };

  getCartTotal(): number {
    let total = 0;
    this.cart.forEach(item => total += item.price * item.quantity);
    return total;
  }
}
