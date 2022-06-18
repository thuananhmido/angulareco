import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Products,Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent implements OnInit {
  products: Product[] = [];
  productPageCounter = 1;
 


  constructor(
    private productService: ProductService,
   
  )
   {}
     getAll(){
      this.productService.getAllProductsAdmin().subscribe(
        (res: any) => {
          console.log(res);
          this.products = res;
        },
        (err) => {
          console.log(err);
        }
      );
     }
  ngOnInit(): void {
    this.getAll()
    
  }
  onEdit(id:number){
    alert('Clixk on buttuon' + id);
  }
  onDelete(id:number){
    console.log(id);
    this.productService.delete(id).subscribe(res=>{
      this.getAll();
      alert('Đã xóa sản phẩm thành công' + id);
      

    })
  }

}
