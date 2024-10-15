import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/navegation/home-view/home-view.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { ProductSectionComponent } from './components/products/product-section/product-section.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductViewComponent } from './views/navegation/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    NavbarComponent,
    HeroComponent,
    ProductSectionComponent,
    FooterComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
