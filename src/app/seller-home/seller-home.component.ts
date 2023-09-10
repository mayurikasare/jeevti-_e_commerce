import { Component, OnInit } from '@angular/core';
import { ProserviceService } from '../services/proservice.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent  implements OnInit{
  constructor(private proservice:ProserviceService){}
 productList:undefined | product[]

ngOnInit(): void {
  this.proservice.productList().
  subscribe((result)=>{
    console.log(result)
    this.productList=result;
  })    
  }

  DeleteProduct(id:number){
    console.log("test",id);
    this.proservice.Deletepro(id).subscribe((result)=>{
      if(result){
        alert("Delete Product Succesfully");
      }
    })
  }

}
