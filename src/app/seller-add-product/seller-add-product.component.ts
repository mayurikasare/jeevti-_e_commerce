import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProserviceService } from '../services/proservice.service';
import { product } from '../data-type';
@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent  implements OnInit{
  addproductMeassage:string | undefined;
  product=new Product();
  
  constructor(private proser:ProserviceService){}
  ngOnInit(): void {
  }
  addbooks(data:product){
  this.proser.addProduct(data).subscribe((result)=>{
  console.log("result")
  if(result){
    this.addproductMeassage="Product Add Succesfuly added";
    //alert("Product Added Succesfuly added");
  }
  setTimeout(()=>this.addproductMeassage=undefined,3000)
  })
  }
}

