import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Post } from './post';

@Injectable()
export class PostsService {

	private postsUrl ='http://localhost:8888/vanessarusu/bower_components/vanessarusu/wp-json/wp/v2/';
	private customUrl = 'http://localhost:8888/vanessarusu/bower_components/vanessarusu/wp-json/acf/v3/';
	public post: any;
	constructor(private http: Http) { }
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
		// .merge(this.getPostsByCategory(2))
		.map((res: Response) => res.json());
	}
	getInstagramFeed(): Observable<any> {
		return this.http
		.get('https://api.instagram.com/v1/users/self/media/recent?access_token=235119356.78d1867.bca5c0bf8f004a38b5d11f7bd0fabac0&count=10')
		.map((res: Response) => res.json());
	}
}
