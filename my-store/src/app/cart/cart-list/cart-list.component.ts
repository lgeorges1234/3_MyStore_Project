import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Product } from 'src/app/model/Product';
import { User } from 'src/app/model/User';
import { Router } from '@angular/router';

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
  creditCard: string= "";
  
  constructor(private cartService: CartService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.totalPrice = this.cartService.getCartTotal();
  }

  quantityUpdate():void {
    this.totalPrice = this.cartService.getCartTotal();
  }

  getToCartConfirmation(): void {
    this.router.navigateByUrl(`/cart/cart-success/${this.fullname}`);
  }

  onSubmit(): void {
    const newUser: User = {
      id: 0,
      fullname: this.fullname,
      address: this.address,
    }
    this.userService.addUser(newUser)
    this.router.navigateByUrl(`/cart/cart-success/${this.fullname}`)
  }
}
