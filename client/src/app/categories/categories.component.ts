import { Component, OnInit , Input} from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ProductService } from '../services/product.service';
import { Categories } from '../shared/models/categories.model';
import { Products, Product } from '../shared/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() title: string;
  @Input() onAdd: any;
  products: Product[] = [];
  categories: Categories[] = [];
  constructor(
    private productService: ProductService,
    private _route: ActivatedRoute,
    private cateService :CategoriesService,
    private cartService: CartService,
  ) { 
    
  }
  id_cat :any;
  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.id_cat = params.get('id');
      console.log(this.id_cat);
    });
    this.getProductCatId(this.id_cat);
  }
  getProductCatId(id_cat:any){
    this.cateService.getAllProductsByCatId(id_cat).subscribe((res:any)=>{
      this.products = res;
    })
  }
}
