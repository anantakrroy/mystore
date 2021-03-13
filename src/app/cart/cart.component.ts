import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/CartItem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  amount: number = 0;
  @Output() cartItem = new EventEmitter();

  constructor(private _cartservice: CartService) { }

  ngOnInit(): void {
    this.cartItems = this._cartservice.getItems();
  }

  calculateAmount(): number {
    return this.cartItems.reduce((a, c) => a + c.price * c.qty, this.amount);
  }
}
