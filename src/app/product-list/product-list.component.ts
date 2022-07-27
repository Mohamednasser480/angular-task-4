import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private _ProductsService:ProductsService) { }
  products:any[] = [];
  ngOnInit(): void {
   this.products = this._ProductsService.products;
  }

}
