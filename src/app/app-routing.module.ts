import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteHeaderComponent } from './global/site-header/site-header.component';
import { AppHomepageComponent } from './app-homepage/app-homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { BlogComponent } from './blog/blog.component';

import { Ng2PageScrollModule } from 'ng2-page-scroll';



const routes: Routes = [
  {
    path: '',
    component: AppHomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog',
    component: BlogComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
  	path: ':slug',
  	component: PostSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), Ng2PageScrollModule.forRoot()],
  exports: [RouterModule],
  providers: []
})
export class mainRouter { }