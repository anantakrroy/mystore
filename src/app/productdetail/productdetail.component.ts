import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/Product';
import {CartItem} from './../../models/CartItem';
import {CartService} from './../../services/cart.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  products: Product[] = [];
  id: number = 0;
  product:Product = new Product();
  qty:number[] = [1,2,3,4,5,6,7,8,9,10];
  cartProduct: CartItem = new CartItem();
  buyQty: number = 1;

  constructor(private _activatedRoute: ActivatedRoute, private http: HttpService, private _cartservice:CartService) {
    this._activatedRoute.params.subscribe(params => this.id = +params.id);
  }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data => {
      this.products = data;
      let prod = this.products.find(p => p.id === this.id);
      this.product = prod || new Product();
    });
  }

  onChange(event:Event) {
    this.buyQty = +(<HTMLInputElement>event.target).value;
  }

  addToCart(prod: Product) {
    this.cartProduct.title = prod.title;
    this.cartProduct.image = prod.image;
    this.cartProduct.price = prod.price;
    this.cartProduct.qty = this.buyQty;
    this._cartservice.addCart(this.cartProduct);
    alert(`Item ${this.cartProduct.title} added to cart !`);
  }

}
