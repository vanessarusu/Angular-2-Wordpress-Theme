import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts/posts.service';
import { HttpModule, Jsonp, JsonpModule, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss']
})
export class InstagramFeedComponent implements OnInit {
	instagramFeed: Array<Object>;

  constructor(private postService: PostsService, private jsonp: Jsonp, private router: Router) { 
  }
  headers = new Headers();

  subscribe = () => {
    console.log('hi');
  var url = "'https://api.instagram.com/v1/users/self/media/recent?access_token=5382817305.8cb2231.acfe6adb834446eb84d5d8d5f3b21ce2&count=10&callback=?'";
  // this.isSuccess = false;


  this.jsonp.request(url, this.headers).subscribe(response => {
    console.log(response);
    // this.isSuccess = true; 
  });   
}

  ngOnInit() {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');

    var url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=5382817305.8cb2231.acfe6adb834446eb84d5d8d5f3b21ce2&count=10&callback=JSONP_CALLBACK';

    this.jsonp.request(url)
    .subscribe(res => {
      res.json();
      this.instagramFeed = res.json().data;
    });
  }
}