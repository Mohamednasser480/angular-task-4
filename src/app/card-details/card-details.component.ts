import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
id:any
itemDetails:any ={};
constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
this.id = this._ActivatedRoute.snapshot.params['id']; 
this.itemDetails= this._ProductsService.products.filter(x=>x.id==this.id)[0];

  }
  addToCart(productId:number):void{
    this._ProductsService.addToCart(productId);
  }
}
