import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent  implements OnInit{
  product=new Product();
  ngOnInit(): void {
  }
  addbooks(data:object){
  console.log(data);
  }
}
