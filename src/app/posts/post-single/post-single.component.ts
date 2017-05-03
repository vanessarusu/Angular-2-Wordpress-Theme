import { Component, HostListener, Inject, OnInit, OnDestroy , ViewChild, ElementRef } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss'],
  providers: []
})
export class PostSingleComponent implements OnInit, OnDestroy {
	public post: Post;
	@ViewChild('sidebar') sidebar: ElementRef;
	@ViewChild('parallax') parallax: ElementRef;

  constructor(private postsService: PostsService, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document ) {}


  getPost(slug: string) {
  	this.postsService
  	.getPost(slug)
  	.subscribe(res => {
  		return this.post = res[0];
  	});
  }
  ngOnInit() {
  	// if there is a post already stored in the service, use it
  	if(this.postsService.getSinglePost() != undefined && this.postsService.getSinglePost().id) {
  		this.post = this.postsService.getSinglePost();
  	}
  	else {
  		//otherwise make an http for the post by it's slug
  		this.route.params.forEach((params: Params) => {
	  		let slug = params['slug'];
	  		this.getPost(slug)
	  	});
  	}
    setTimeout(()=>{
      if(!this.post) {
        this.setLoaded();
      }
    }, 5000);
  }
  ngOnDestroy() {
    this.postsService.checkLoaded(false);
  }
  setLoaded(){
    this.postsService.checkLoaded(true);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
  	let parallax: any = document.querySelectorAll('.slowParallax');
  	let speed = 0.3;
  	let windowYOffset = window.pageYOffset;
    if(window.innerWidth >=600  && parallax) {
      this.parallax.nativeElement.style.backgroundPosition = 'left '+(Math.round(windowYOffset * speed))+'px';
    }
    else {
      // this.parallax.nativeElement.style.backgroundPosition = 'left top';
    }

  	}

}