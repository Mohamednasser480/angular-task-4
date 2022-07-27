import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  
  constructor(private _ProductsService:ProductsService) { }
  
  cartProducts:any[] = [];
  removeFromCart(productId:number):void{
    this._ProductsService.removeFromCart(productId);
  }
  ngOnInit(): void {
    this._ProductsService.cartProducts.subscribe(()=>{
      this.cartProducts =this._ProductsService.cartProducts.value;
    });
  }

}
