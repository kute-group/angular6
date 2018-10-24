import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeadlineComponent } from './shared/headline/headline.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    HeroDetailComponent,
    ProductsComponent,
    MessagesComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialComponent,
    NotfoundComponent,
    BlogDetailComponent,
    SidebarComponent,
    HeadlineComponent,

  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
