import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  custName: string = '';
  custAddr: string = '';
  custCC:number = 0;

  constructor(private _cartservice: CartService, private _router:Router) { }

  ngOnInit(): void {
    this.cartItems = this._cartservice.getItems();
  }

  calculateAmount(): number {
    return +(this.cartItems.reduce((a, c) => a + c.price * c.qty, this.amount).toFixed(2));
  }

  updateAmount(event:Event) {
    let elem = (<HTMLParagraphElement>event.target).parentNode?.childNodes[0].textContent;
    let newQty = +(<HTMLInputElement>event.target).value;
    console.log('event >> ', elem,newQty);
    this.cartItems.map(e => {
      if(e.title === elem) {
        e.qty = newQty;
      }
    })
    this.calculateAmount();
  }

  onSubmit() {
    // alert('Form submitted!');
    this.custName = '';
    this.custAddr = '';
    this.custCC = 0;
    this._router.navigateByUrl('/success');
  }
}
