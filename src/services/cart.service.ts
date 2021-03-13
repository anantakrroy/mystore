import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() { }

  addCart(item: CartItem) {
    if (this.cartItems.findIndex(e => e.title === item.title) === -1)
      this.cartItems.push(item);
    else {
      let idx = this.cartItems.findIndex(e => e.title === item.title);
      console.log('Item qty > ', item.qty);
      this.cartItems[idx].qty = this.cartItems[idx].qty + item.qty;
      console.log('Index >> ', idx, this.cartItems[idx]);
    }
  }

  getItems() {
    return this.cartItems;
  }

  updateCart(item: CartItem) {
    if (item.qty === 0) {
      this.cartItems = this.cartItems.filter(e => e.title !== item.title)
    } else {
      this.cartItems.map(e => {
        if (e.title === item.title) {
          e = item;
        }
      })
    }
    return this.getItems();
  }
}
