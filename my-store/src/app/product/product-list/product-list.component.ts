import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/product/products.service';

import { Product } from 'src/app/model/Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = 'Products';
  productsList: Product[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res => {
      this.productsList = res;
    });
    this.productsService.getProducts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const product = res[index];
        product["quantity"] = 0;
      }
      this.productsList = res;
    });
  }

}
