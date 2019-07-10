import { FooterComponent } from './../core/footer/footer.component';
import { HeaderComponent } from './../core/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AwesomeBicComponent } from './home/awesome-bic/awesome-bic.component';
import { WhoWeAreComponent } from './home/who-we-are/who-we-are.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';



@NgModule({
  declarations: [HomeComponent, AwesomeBicComponent, WhoWeAreComponent, FeaturedProductsComponent, HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
