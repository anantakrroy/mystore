import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  amount:number = 0;
  constructor(private _cartservice:CartService) { }

  ngOnInit(): void {
    this.amount = this._cartservice.getBill();
    this._cartservice.clearCart();
  }
}
