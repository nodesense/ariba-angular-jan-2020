import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:7070/delayed/api/products');
  }
}
