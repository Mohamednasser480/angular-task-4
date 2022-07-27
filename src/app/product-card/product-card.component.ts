import { Component, OnInit , Input} from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product:any = {};  // input decorator 

  addToCart(productId:number):void{
    this._ProductsService.addToCart(productId);
  }
  constructor(private _ProductsService:ProductsService){
  }
  ngOnInit(): void {
    this.product.description = this.product.description.substr(0,150);
    this.product.title = this.product.title.substr(0,30);
  }
  ngOnChange(){
 
  }


}
