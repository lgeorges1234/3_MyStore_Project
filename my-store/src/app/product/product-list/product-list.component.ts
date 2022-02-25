import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';


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
  }

}
