import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-cart-confirmation',
  templateUrl: './cart-confirmation.component.html',
  styleUrls: ['./cart-confirmation.component.css']
})
export class CartConfirmationComponent implements OnInit {
  totalPrice: number = 0;
  fullname: string = '';
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.totalPrice = this.cartService.getCartTotal();
    this.route.params.subscribe(params => {
      this.fullname = params['fullname'];
    });
    this.cartService.clearCart();
  };
};
