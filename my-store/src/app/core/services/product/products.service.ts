import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._jsonURL);
  };

};
