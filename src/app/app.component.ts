import { Component, OnInit, animate, transition, style, trigger } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute  } from '@angular/router';

import { PageScrollConfig } from 'ng2-page-scroll';
import { PostsService } from './posts/posts.service';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  trigger('fadeInOut', [
    transition(':leave', [   // :leave is alias to '* => void'
      animate(500, style({opacity:0})) 
    ])
  ])
]

})
export class AppComponent implements OnInit {

  title = 'app works!';
  loaded: boolean = false;
  loadingHandler: Subscription = this.postService._isLoaded.subscribe((value) => {
    this.loaded = value;
  });

	constructor(private router: Router, private route: ActivatedRoute, private postService: PostsService) {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultDuration = 300;
  }
	ngOnInit() {
    console.log('%c Hot pink console logging ftw :)', 'font-size: 16px; color: #FC30AA');
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

    }
}

