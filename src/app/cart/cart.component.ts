import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() value:string = '0';
  constructor() { }

  ngOnInit(): void {
  }

  // onChange(val:Event) {
  //   console.log('New value >> ', val.target);
  //   // this.value = val.target.value;
  // }

}
