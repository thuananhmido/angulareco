import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './auth/login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginAdminComponent },
  { path: '', component: LoginAdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product_add', component: ProductAddComponent },
  { path: 'product_edit', component: ProductEditComponent },
  { path: 'product_edit/:id', component: ProductEditComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
