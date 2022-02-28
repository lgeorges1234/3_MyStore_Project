import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Product } from 'src/app/model/Product';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;
  fullname: string = "";
  address: string = "";
  creditCard: number= 0;
  
  constructor(private cartService: CartService, private userService: UserService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.totalPrice = this.cartService.getCartTotal();
  }

  quantityUpdate():void {
    this.totalPrice = this.cartService.getCartTotal();
  }

  onSubmit(): void {
    const newUser: User = {
      id: 0,
      fullname: this.fullname,
      address: this.address,
    }
    this.userService.addUser(newUser)
  }
}
