import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Products,Product } from 'src/app/shared/models/product.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
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
