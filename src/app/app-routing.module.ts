import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './success/success.component';
import { AuthGuardService } from 'src/services/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductsComponent },
  { path: 'product-list', component: ProductsComponent },
  { path: 'product-detail/:id', component: ProductdetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'success', component: SuccessComponent, canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuardService]
})
export class AppRoutingModule { }
