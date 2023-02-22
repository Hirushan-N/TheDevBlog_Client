import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { post } from '../models/post.model';
import { UpdatePostRequest } from '../models/UpdatePostRequest.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private readonly apiBaseUrl = environment.apiBaseUrl;

  getAllPosts():Observable<post[]> {
    return this.http.get<post[]>(this.apiBaseUrl + '/api/posts');
  }

  getPostById(id:string):Observable<post> {
    return this.http.get<post>(this.apiBaseUrl + '/api/posts/'+id);
  }

  updatePost(id:string | undefined,updatePostRequest:UpdatePostRequest|undefined):Observable<post> {
    return this.http.put<post>(this.apiBaseUrl + '/api/posts/'+id,updatePostRequest);
  }
}
