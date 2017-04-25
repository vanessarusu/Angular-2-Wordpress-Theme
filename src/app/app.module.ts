import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { mainRouter } from './app-routing.module';
import { PostsService } from './posts/posts.service';

import { Ng2PageScrollModule } from 'ng2-page-scroll';
// import {Ng2SimplePageScrollModule} from 'ng2-simple-page-scroll';
import { Ng2OrderModule } from 'ng2-order-pipe';

// import { RouterModule, Routes } from '@angular/router';
import { SiteHeaderComponent } from './global/site-header/site-header.component';
import { AppHomepageComponent } from './app-homepage/app-homepage.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PageComponent } from './pages/page/page.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { SiteFooterComponent } from './global/site-footer/site-footer.component';
import { CtaComponent } from './app-homepage/cta/cta.component';
import { InstagramFeedComponent } from './global/instagram-feed/instagram-feed.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    AppHomepageComponent,
    PostListComponent,
    PageComponent,
    PostSingleComponent,
    SiteFooterComponent,
    CtaComponent,
    InstagramFeedComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    mainRouter,
    Ng2PageScrollModule.forRoot(),
    Ng2OrderModule
    // Ng2SimplePageScrollModule.forRoot()
  ],
  providers: [PostsService,
  {provide: APP_BASE_HREF, useValue: '/vanessarusu/bower_components/vanessarusu/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
