import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _ProductsService:ProductsService) { }
users:any = [];
currentPage= 1;
  ngOnInit(): void {
    this.getAllUsers(1);
    console.log(this.users);
    
  }
  getAllUsers(pageNum:number):any{
    let users;
    this._ProductsService.getUsers(pageNum).subscribe((response)=>{
      users = response;
      this.currentPage = pageNum;
      this.users = users;
      
    });

  }

}
