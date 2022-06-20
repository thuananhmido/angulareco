import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Products,Product } from 'src/app/shared/models/product.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
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
  product = [];
constructor(
  private _product: ProductService,
  private _location: Location,
  private _route: ActivatedRoute,
 
) { }
id:any;
ngOnInit(): void {
  this.loading = true;
    this._route.paramMap
      .pipe(
        map((param: any) => {
          return param.params.id;
        })
      )
      .subscribe((productId) => {
        // returns string so convert it to number
        this.id = parseInt(productId);
        this._product.getSingleProduct(productId).subscribe((product) => {
          console.log(product);
          let myPro = product;
          this.title = myPro.title;
          this.image = myPro.image;
          this.description = myPro.description;
          this.price = myPro.price.toString();
          this.quantity = myPro.quantity.toString();
          this.cat_id = myPro.cat_id.toString();
          
        });
        this.editProduct(this.id);
      });
        
}
editProduct(id){
  let obj={
  'title':this.title,
  'image':this.image,
  'description':this.description,
  'price':this.price,
  'quantity':this.quantity,
  'cat_id':this.cat_id,
  }
  this._product.updateProduct(obj,id).subscribe(req =>{
    console.log(req);
    alert('Chỉnh sửa thông tin sản phẩm Thành công');
    this.backClicked();
  }
      );
  }

  backClicked() {
    this._location.back();
  }
}
