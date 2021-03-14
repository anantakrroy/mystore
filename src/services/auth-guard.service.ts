import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {CartService} from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _router:Router, private _cartService:CartService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    const cartitems = this._cartService.cartItems.length;
    // console.log('Cart empty ??? ', typeof isCartEmpty);
    if(!cartitems) {
      return false;
    }else {
      return true;
    }
  }
}
