import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itemsInCart:number = 0;

  constructor(private _ProductsService:ProductsService) {
    this._ProductsService.cartProducts.subscribe(()=>{
      this.itemsInCart = this._ProductsService.cartProducts.value.length;
    })
  }
  ngOnInit(): void {
  }

}
