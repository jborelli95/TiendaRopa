import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/navegation/home-view/home-view.component';
import { ProductViewComponent } from './views/navegation/product-view/product-view.component';
import { GarmentViewComponent } from './views/products/garment-view/garment-view.component';
import { ContactViewComponent } from './views/navegation/contact-view/contact-view.component';
import { AboutUsViewComponent } from './views/navegation/about-us-view/about-us-view.component';
import { UserLoginViewComponent } from './views/navegation/users/user-login-view/user-login-view.component';
import { UserRegisterViewComponent } from './views/navegation/users/user-register-view/user-register-view.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeViewComponent
  },
  {
    path: "item-shop",
    component: ProductViewComponent
  },
  {
    path: "garment-view",
    component:GarmentViewComponent
  },
  {
    path: "about-us",
    component:AboutUsViewComponent
  },
  {
    path:"contact",
    component:ContactViewComponent
  },
  {
    path:"user-register",
    component:UserRegisterViewComponent
  },
  {
    path:"user-login",
    component:UserLoginViewComponent
  },
  {
    path: "**",
    redirectTo: "home"
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
