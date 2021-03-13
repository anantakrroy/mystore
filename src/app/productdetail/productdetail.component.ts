import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/Product';


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

  constructor(private _activatedRoute: ActivatedRoute, private http: HttpService) {
    this._activatedRoute.params.subscribe(params => this.id = +params.id);
  }

  ngOnInit(): void {
    this.http.getProducts().subscribe(data => {
      this.products = data;
      let prod = this.products.find(p => p.id === this.id);
      this.product = prod || new Product();
    });
  }



}
