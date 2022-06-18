import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products,Product } from 'src/app/shared/models/product.model';
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
   
  ) { }

  ngOnInit(): void {}
  onAdd(){
    // this.errorMessage = '';
    // if (this.title && this.image && this.price && this.quantity) {
    //   if (this.title == '') {
    //     this.errorMessage = 'cần nhập đầy đủ thông tin';
    //   } else {
    //     this.loading = true;
        this._product
          .addProduct({
            title: this.title,
            image: this.image,
            description: this.description,
            price: this.price,
            quantity: this.quantity,
            cat_id: this.cat_id,
          })
  //  }
  // }
  // else {
  //   this.errorMessage = 'Make sure to fill everything ;)';
  // }
  }
  addProduct(){
    let obj={
    'title':this.title,
    'image':this.image,
    'description':this.description,
    'price':this.price,
    'quantity':this.quantity,
    'cat_id':this.cat_id,

    }
    this._product.createProduct(obj).subscribe(req =>{
      console.log(req);
    }
        );
    }
  
}
