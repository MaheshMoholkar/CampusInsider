import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredArray: Array<any> = [];
  latestPostsArray: Array<any> = [];
  constructor(private postService: PostsService) {}

  @Input() postData: any;

  ngOnInit(): void {
    this.postService.loadFeatured().subscribe((data) => {
      this.featuredArray = data;
    });
    this.postService.loadLatest().subscribe((data) => {
      this.latestPostsArray = data;
    });
  }
}
