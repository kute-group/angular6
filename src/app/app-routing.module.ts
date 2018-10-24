import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component'
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'blog', component: BlogComponent },
	{ path: 'blog/:id', component: BlogDetailComponent },
	{ path: 'testimonial', component: TestimonialComponent },
	{ path: '**', component: NotfoundComponent },

	{ path: 'heroes', component: HeroesComponent },
	{ path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
