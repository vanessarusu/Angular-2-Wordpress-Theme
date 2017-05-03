import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
  animations: [
	  trigger('fadeInOut', [
	    transition(':enter', [   // :enter is alias to 'void => *'
	      style({opacity:0}),
	      animate(300, style({opacity:1})) 
	    ]),
	    transition(':leave', [   // :leave is alias to '* => void'
	      animate(300, style({opacity:0})) 
	    ])
	  ])
	]
})


export class SiteHeaderComponent implements OnInit {
	public navIsFixed: boolean = false;
  // public spacerHeight: boolean = false;
	isActive: boolean = false;
	show: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }

  ngOnInit() {
    // console.log('welcome :)');
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
  	let number = this.document.body.scrollTop;
  	if(number > 10) {
  		this.navIsFixed = true;
      // this.spacerHeight = true;
  	}
  	else if (this.navIsFixed && number < 10) {
  		this.navIsFixed = false;
  	}
  }

  animateNav() {
  	this.isActive = !this.isActive;
  	this.show = !this.show;
    }
    // scrollToDiv(div:HTMLElement) {
    //   this.router.navigate( [''], {fragment: 'featuredWork'});
    // }

    // might not need the scrollTo

     public scrollTo(element: any, speed: number = 80) {
      console.log(element);
      let to = document.getElementById(element).offsetTop;
      let yPos = window.scrollY;
      const scroll = () => {
        setTimeout(() => {
          yPos += speed;
          window.scrollTo(0, yPos);
          if (yPos < to) {
            scroll();
          }
        }, 10);
      };
      this.animateNav();
      scroll();
    }

}
