import { Component, OnInit } from '@angular/core';
import { Post } from '../../../apiclient/models';
import { PostApi } from '../../../apiclient/services';
import { LoopBackConfig } from '../../../apiclient';

@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: any;

  constructor(private postApi: PostApi) {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.postApi.find().subscribe(
      data => {
        this.posts = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
