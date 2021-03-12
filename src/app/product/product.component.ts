import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/Product';
import {ImageService} from './../../services/image.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() product: Product = new Product();

  constructor(private _imageservice:ImageService) {
  }

  ngOnInit(): void {
    console.log('Product from products GET api >> ',this.product);
    this._imageservice.getImage(this.product.image).subscribe(data => console.log(data));
  }

}
