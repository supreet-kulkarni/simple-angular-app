import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../Model/products';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
url="https://shopppingdb-default-rtdb.firebaseio.com/categories.json"
url1="https://shopppingdb-default-rtdb.firebaseio.com/products.json"
  constructor(private http:HttpClient) { }
  getcategory(){
    return this.http.get(this.url);
  }
  postcategory(Resourse:any){
    return this.http.post(this.url,JSON.stringify(Resourse));
  }
  getproduct(){
    return this.http.get<{[id:string]:products}>(this.url1).pipe(map(res=>{
      let product:products[]=[];
      for(let id in res){
        product.push({...res[id],id})
      }
      return product;
    }));
  }
  postproduct(Resourse:any){
    return this.http.post(this.url1,JSON.stringify(Resourse));
  }
}
