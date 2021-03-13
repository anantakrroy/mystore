import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() product: Product = new Product();
  qty:number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor() {
  }

  ngOnInit(): void {
    console.log('Product from products GET api >> ',this.product);
  }

}
