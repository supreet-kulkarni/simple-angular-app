import { Component, OnInit } from '@angular/core';
import { products } from '../Model/products';
import { ApiservicesService } from '../Services/apiservices.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
 categories={}
 products:products[]=[];
  constructor(private services:ApiservicesService) { }
  postproduct(data:any){
    this.services.postproduct(data).subscribe(res=>{
      console.log(res);
    })
  }
  ngOnInit(): void {
  this.services.getproduct().subscribe(data=>{
  //console.log(data);
  this.products=data;
  })

    this.services.getcategory().subscribe(res=>{
      this.categories=res;
   })
 }
 
}
