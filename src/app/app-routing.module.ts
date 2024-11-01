import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/navegation/home-view/home-view.component';
import { ProductViewComponent } from './views/navegation/product-view/product-view.component';
import { GarmentViewComponent } from './views/products/garment-view/garment-view.component';
import { ContactViewComponent } from './views/navegation/contact-view/contact-view.component';
import { AboutUsViewComponent } from './views/navegation/about-us-view/about-us-view.component';

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
