import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Page } from './page';

@Injectable()
export class PageService {
	private pageUrl = "http://localhost:8888/vanessarusu/bower_components/vanessarusu/wp-json/wp/v2/";
	constructor(private http: Http) { }

	getPage(): Observable<Page[]> {
		return this.http
		.get(this.pageUrl + 'pages')
		.map((res: Response) => res.json());
	}

}
