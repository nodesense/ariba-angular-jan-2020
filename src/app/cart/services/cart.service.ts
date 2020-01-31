import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItems: CartItem[] = [];
  private _amount = 0;
  private _totalItems = 0;

  constructor() { 
    console.log('CartService created');
  }

  get amount() {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get totalItems() {
    return this._totalItems;
  }

  set totalItems(value: number) {
    this._totalItems = value;
  }

  get cartItems() {
    return this._cartItems;
  }

  calculate() {
    let amount = 0;
    let total = 0;
    for (let item of this._cartItems) {
      amount += item.qty * item.price;
      total += item.qty;
    }
  }

  addItem(item: CartItem) {
    this._cartItems.push(item);
  }

  empty() {
    this._cartItems.splice(0, this._cartItems.length);
  }

}
