import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { PageScrollConfig } from 'ng2-page-scroll';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(private router: Router, private route: ActivatedRoute){
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultDuration = 300;
    // PageScrollConfig.pageScrollFinish(){}
  }
	ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

      //   this.route.fragment.subscribe(f => {
      //     // if(f) {
      //       console.log('in here');
      //       const element = document.querySelector(f);
      //       if (element) element.scrollIntoView(element);
      //       // }
      //   });
      // }

    }

  title = 'app works!';
  public baseURL : string =  'http://localhost:8888/vanessarusu/bower_components/vanessarusu/wp-json/wp/v2/';
}

