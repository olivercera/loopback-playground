import { Component, OnInit } from '@angular/core';
import { PostApi } from '../../../apiclient/services/index';
import { LoopBackConfig } from '../../../apiclient/index';
@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PostListComponent implements OnInit {

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
        console.log(data);
      }
    );
  }

}
