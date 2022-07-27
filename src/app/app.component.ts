import { Component } from '@angular/core';
import { ProductsService } from './products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  itemsInCart:number = 0;

  constructor(private _ProductsService:ProductsService) { 
    this._ProductsService.cartProducts.subscribe(()=>{
      this.itemsInCart = this._ProductsService.cartProducts.value.length;
    })
  }
  title = 'my-app';
}
