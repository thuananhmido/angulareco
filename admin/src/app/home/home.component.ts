import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products,Product } from 'src/app/shared/models/product.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
  ) { }

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

onDelete(id:number){
  if(confirm("Are you sure to delete "+id)) {
    console.log(id);
  alert('Đã xóa sản phẩm thành công' + id);
  this.productService.delete(id).subscribe(res=>{
    this.getAll();
  })
  }
  
}

}
