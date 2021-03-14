import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/models/CartItem';
import { Product } from 'src/models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product();
  // cartItems: CartItem[] = [];
  qty: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  buyQty: number = 1;
  prod: CartItem = new CartItem();


  constructor(private _cartservice:CartService) {
  }

  ngOnInit(): void {
  }

  onChange(event: Event) {
    // console.log((<HTMLInputElement>event.target).value);
    this.buyQty = +(<HTMLInputElement>event.target).value;
  }

  addToCart(product: Product): void {
    this.prod.title = product.title;
    this.prod.image = product.image;
    this.prod.price = product.price;
    this.prod.qty = this.buyQty;
    console.log('Product to add >>> ', this.prod);
    this._cartservice.addCart(this.prod)
    // this.cartItems.push(this.prod);
    // return this.cartItems;
    window.alert(`Item ${product.title} added to cart!`);
  }

}
