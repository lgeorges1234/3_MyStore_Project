import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  @Input() item: Product;
  cartItems: Product[] = [];
  @Output() quantityUpdate: EventEmitter<Product> = new EventEmitter;

  constructor(private cartService: CartService) { 
    this.item = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1,
  }
   }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  quantityChanged(newQuantity: number) {
    const newItem: Product = {
      id: this.item.id,
      name: this.item.name,
      price: this.item.price,
      url: this.item.url,
      description: this.item.description,
      quantity: newQuantity,
    }
    this.cartService.addToCart(newItem);
    this.quantityUpdate.emit();
  }

}
