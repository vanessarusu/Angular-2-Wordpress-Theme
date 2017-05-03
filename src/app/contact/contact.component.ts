import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from './../posts/posts.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private postService: PostsService) { }

  ngOnInit() {
  	this.postService.checkLoaded(true);
  }
  ngOnDestroy() {
    this.postService.checkLoaded(false);
  }

}
