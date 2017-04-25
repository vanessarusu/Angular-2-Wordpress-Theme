import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';
import { Post } from '../posts/post';
import * as Vivus from "vivus";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
	aboutContent: Post;
	techSpecs: Post;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  	this.getComponentContent();
  }

	ngAfterViewInit() {
  	new Vivus('hexAbout', {duration: 100, pathTimingFunction: Vivus.EASE}, this.myCallback);
  }
  getComponentContent() {
  	this.postService
  	.getPost('about-me-content')
  	.subscribe(res => {
  		this.aboutContent = res[0];
  	});
  	this.postService
  	.getPost('technical-specs')
  	.subscribe(res => {
  		this.techSpecs = res[0];
  	});
  }
  myCallback(obj) {
  	obj.el.classList.add('finished');
  }

}
