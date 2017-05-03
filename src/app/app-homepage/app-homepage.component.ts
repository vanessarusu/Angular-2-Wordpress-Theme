import { Component, OnInit, OnDestroy, HostListener, AfterViewInit, Inject } from '@angular/core';
import { Post } from '../posts/post';
import { PostListComponent } from '../posts/post-list/post-list.component';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Ng2PageScrollModule, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { PostsService } from '../posts/posts.service';
import { PageComponent } from '../pages/page/page.component';
import * as Vivus from "vivus";
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-homepage',
  templateUrl: './app-homepage.component.html',
  styleUrls: ['./app-homepage.component.scss'],
  // entryComponents:[PostSingleComponent],
  providers: []
})
export class AppHomepageComponent implements OnInit, AfterViewInit, OnDestroy {
	homepageHero: Post;
	heroSupport: Post;
	featuredPosts: any[];
	customPosts: any[];
	allPosts:any = [];
	mobile:boolean = false;
	order:string = 'id';
	loadSVG:boolean = false;
	busy: Subscription;
	preload: boolean = false;

  constructor(private pageScrollService: PageScrollService, private postService: PostsService, private router: Router, @Inject(DOCUMENT) private document: any) { 
  }
  ngOnInit() {
  		this.getComponentContent();
  		this.checkDeviceWidth();
  	}
  	ngAfterViewInit() {
  		new Vivus('lightbulb', {duration: 50, pathTimingFunction: Vivus.EASE});
  	}

  	@HostListener('window:resize', [])
  	onWindowResize() {
  		this.checkDeviceWidth();
  	}

  	checkDeviceWidth() {
  		if(window.innerWidth <= 800) {
  			this.mobile = true;
  		}
  		else {
  			this.mobile = false;
  		}
  	}
  	doSomething() {
  		this.postService.checkLoaded(true);
  		this.checkNavHash();
  	}
  	checkNavHash() {
  		if(this.document.location.href.indexOf('/#') > -1) {
  			let path = this.document.location.href.indexOf('#');
  			let link = this.document.location.href.slice(path);
  			let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, link);
         	this.pageScrollService.start(pageScrollInstance);
  		}
  	}
	getComponentContent() {
		this.postService
	  	.getPost('homepage-hero')
	  	.subscribe(res => {
	  		this.homepageHero = res[0];
	  	});
	  	this.postService
	  	.getPost('hero-support')
	  	.subscribe(res => {
	  		this.heroSupport = res[0];
	  	});
	  	this.postService
	  	.getPostsByCategory(2)
	  	.subscribe(res => {
	  		this.featuredPosts = res;
	  		this.allPosts.push(...this.featuredPosts);
	  	});
	  	this.postService
	  	.getCustomPosts()
		  	.subscribe(res => {
	  		this.customPosts = res;
	  		this.allPosts.push(...this.featuredPosts);
	  	});
		this.busy = this.postService.getPost('homepage-hero').subscribe()
	}

	selectProject(slug, post) {
		this.postService.storeSinglePost(post);
		this.router.navigate([slug]);
	}
	ngOnDestroy() {
    	this.postService.checkLoaded(false);
  	}

}
