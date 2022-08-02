import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { LoginComponent } from './login/login.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'cart',component:ProductCartComponent},
  {path:'allproduct',component:ProductListComponent},
  {path:'product-details/:id',component:CardDetailsComponent},
  {path:'users',component:UsersComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'allproduct', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
