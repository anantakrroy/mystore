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
      this.cartItems[idx].qty = this.cartItems[idx].qty + item.qty;
    }
  }

  getItems(): CartItem[] {
    return this.cartItems;
  }

  getBill():number {
    return this.cartItems.reduce((a,c) => a + c.price * c.qty,0);
  }

  updateCart(item: CartItem):CartItem[] {
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

  clearCart():void {
    this.cartItems = [];
  }
}
