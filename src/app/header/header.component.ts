import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() itemCount:number = 0;

  constructor(private _cartservice:CartService) { }

  ngOnInit(): void {
    this.itemCount = this._cartservice.getItems().length;
  }

  ngDoCheck() {
    this.itemCount = this._cartservice.getItems().length;
  }

}
