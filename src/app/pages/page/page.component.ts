import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [PageService]
})
export class PageComponent implements OnInit {
	page: Page[];
  constructor(private pageService: PageService) { }

  getPage() {
  	this.pageService
  	.getPage()
  	.subscribe(res => {
  		this.page = res;
  	});
  }
  

  ngOnInit() {
  	this.getPage();
  }

}
