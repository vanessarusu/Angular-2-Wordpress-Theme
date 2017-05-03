import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Post } from './post';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PostsService {

	// private postsUrl ='http://localhost:8888/vanessarusu/bower_components/vanessarusu/wp-json/wp/v2/';
	// private customUrl = 'http://localhost:8888/vanessarusu/bower_components/vanessarusu/wp-json/acf/v3/';
	private postsUrl ='http://vanessarusu.com/angular/wp-json/wp/v2/';
	private customUrl = 'http://vanessarusu.com/angular/wp-json/acf/v3/';
	public post: any;

	private isLoadedSource = new BehaviorSubject<boolean>(false);
	public _isLoaded: Observable<boolean> = this.isLoadedSource.asObservable();



	constructor(private http: Http) { 
	}
	storeSinglePost(post:Post) {
		return this.post = post;
	}
	getSinglePost() {
		return this.post;
	}

	getPosts(): Observable<Post[]> {
		return this.http
		.get(this.postsUrl + 'posts')
		.map((res: Response) => res.json());
	}
	getPost(slug): Observable<Post> {
		return this.http
		.get(this.postsUrl + `posts?slug=${slug}`)
		.map((res: Response) => res.json());
	}
	getPostsByCategory(id: number): Observable<Post[]> {
		return this.http
		.get(this.postsUrl + `posts?categories=${id}`)
		.map((res: Response) => res.json());
	}
	getCustomPosts(): Observable<Post[]> {
		return this.http
		.get(this.customUrl+ `posts/`)
		.map((res: Response) => res.json());
	}
	//cors issue with the below
	// getInstagramFeed(): Observable<any> {
	// 	return this.http
	// 	// .get('https://api.instagram.com/v1/users/self/media/recent?access_token=235119356.78d1867.bca5c0bf8f004a38b5d11f7bd0fabac0&count=10&callback=?')
	// 	// 5382817305.8cb2231.acfe6adb834446eb84d5d8d5f3b21ce2
	// 	.get('https://api.instagram.com/v1/users/self/media/recent?access_token=5382817305.8cb2231.acfe6adb834446eb84d5d8d5f3b21ce2&count=10&callback=?')
	// 	.map((res: Response) => res.json());
	// }
	checkLoaded(bool) {
		this.isLoadedSource.next(bool);
	}
}
