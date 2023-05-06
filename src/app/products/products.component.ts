import { Component, OnInit } from '@angular/core';
import { products } from '../Model/products';
import { ApiservicesService } from '../Services/apiservices.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories={}
  products:products[]=[];
  public filtercatgory:any;
  constructor(private services:ApiservicesService) { }
 

  ngOnInit(): void {
    this.services.getproduct().subscribe(data=>{
      this.products=data;
      })
     
        this.services.getcategory().subscribe(res=>{
          this.categories=res;
          this.filtercatgory=res;
       })
     }

     
  filter(category:string){
    this.filtercatgory=this.products.filter((a:any)=>{
      if(a.category==category || category==''){
       return a;
      }
    })
  }
  }

