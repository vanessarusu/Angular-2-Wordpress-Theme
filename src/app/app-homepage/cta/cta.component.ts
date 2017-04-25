import { Component, OnInit } from '@angular/core';
import { Post } from '../../posts/post';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
	services: Post;
  constructor(private postService: PostsService) { }

  ngOnInit() {
  	this.getComponentContent();
  }
  getComponentContent(){
  	this.postService
  	.getPost('services')
  	.subscribe(res => {
  		this.services = res[0];
  	});
  }

}