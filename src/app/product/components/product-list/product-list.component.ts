import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  subscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log('product list init')
     
    this.subscription =  this.productService
        .getProducts()
        .subscribe ( products => {
          this.products = products;
        });
  }

  // invoked when component destroyed
  ngOnDestroy() {
    console.log('product list destoryed')
    
    this.subscription.unsubscribe();
  }

}
