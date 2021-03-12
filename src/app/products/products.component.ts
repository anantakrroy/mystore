import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private httpservice: HttpService) { }
  ngOnInit(): void {
    this.httpservice.getProducts().subscribe(data => this.products = data);
  }

}
