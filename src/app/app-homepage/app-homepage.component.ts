import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Post } from '../posts/post';
import { PostListComponent } from '../posts/post-list/post-list.component';
import { Router } from '@angular/router';
import { PostsService } from '../posts/posts.service';
import { PageComponent } from '../pages/page/page.component';
import * as Vivus from "vivus";



@Component({
  selector: 'app-homepage',
  templateUrl: './app-homepage.component.html',
  styleUrls: ['./app-homepage.component.scss'],
  // entryComponents:[PostSingleComponent],
  providers: []
})
export class AppHomepageComponent implements OnInit, AfterViewInit {
	homepageHero: Post;
	heroSupport: Post;
	featuredPosts: any[];
	customPosts: any[];
	allPosts:any = [];
	mobile:boolean = false;
	order:string = 'id';
	loadSVG:boolean = false;

  constructor(private postService: PostsService, private router: Router) { 
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
	}

	selectProject(slug, post) {
		this.postService.storeSinglePost(post);
		this.router.navigate([slug]);
	}

}
