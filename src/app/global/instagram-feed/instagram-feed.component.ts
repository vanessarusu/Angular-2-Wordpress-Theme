import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss']
})
export class InstagramFeedComponent implements OnInit {
	instagramFeed: Array<Object>;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  	// this.postService
  	// .getInstagramFeed()
  	// .subscribe(res => {
  	// 	this.instagramFeed = res.data;
  	// });

  }

}
