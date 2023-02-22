import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from 'src/app/models/post.model';
import { UpdatePostRequest } from 'src/app/models/UpdatePostRequest.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

  /**
   *
   */
  constructor(private route:ActivatedRoute,private postService: PostService) {}

  post:post | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');

        if(id){
          this.postService.getPostById(id).subscribe(
            response =>{
              this.post = response;
            }
          )
        }
      }
    );
  }

  onSubmit():void{
    console.log('hariiiiiiiii')
    const updatePostRequest : UpdatePostRequest ={
      title: this.post?.title,
      content: this.post?.content,
      summary: this.post?.summary,
      urlHandle: this.post?.urlHandle,
      author: this.post?.author,
      visible: this.post?.visible,
      publishDate: this.post?.publishDate,
      updatedDate: this.post?.updatedDate,
      featuredImageUrl: this.post?.featuredImageUrl
    }

    if(this.post){
      this.postService.updatePost(this.post.id,updatePostRequest).subscribe(
        response => {
          alert('Successful!');
        }
      )
    }

  }
}
