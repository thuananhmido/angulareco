import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Products,Product } from 'src/app/shared/models/product.model';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  title = '';
  image = '';
  description = '';
  price = '' ;
  quantity = '';
  cat_id= '';
  errorMessage = '';
  loading = false;
constructor(
  private _product: ProductService,
  private _location: Location,
 
) { }

ngOnInit(): void {}
addProduct(formAdd:NgForm){
  let obj={
  'title':this.title,
  'image':this.image,
  'description':this.description,
  'price':this.price,
  'quantity':this.quantity,
  'cat_id':this.cat_id,

  }
  this._product.createProduct(obj,).subscribe(req =>{
    formAdd.resetForm();
    console.log(req);
  }
      );
  }

  backClicked() {
    this._location.back();
  }
}
