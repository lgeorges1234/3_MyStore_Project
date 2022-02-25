import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  id: number = 0;
  productItem: Product = {
    "id": 0,
    "name": '',
    "price": 0,
    "url": '',
    "description": '',
  }
  ;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.productsService.getProducts().subscribe(res => {
      this.productItem = res.find(product => product.id == this.id) as unknown as Product;
    });
  }

  onSubmit(): void { }
}
