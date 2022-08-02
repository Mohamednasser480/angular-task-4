import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  // Title , description , imageUrl ,price are required   
  product:FormGroup = new FormGroup({
    title:new FormControl(null , [Validators.required]),
    description:new FormControl(null , [Validators.required]),
    imagesURL:new FormControl(null , [Validators.required]),
    price:new FormControl(null , [Validators.required]),
  });
   error:string = '';

   submitLoginForm(product:FormGroup){
    let newProduct = product.value;
    newProduct = { ...newProduct, id:this._ProductsService.products.length + 1};
    this._ProductsService.products.push(newProduct);
    this._Router.navigate(['allproduct']);
  }
   
  constructor(private _ProductsService:ProductsService, private _Router:Router) { 

  }

  ngOnInit(): void {
  }

}
