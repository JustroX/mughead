import { Component, OnInit } from '@angular/core';
import { PostsOrPages, Tag } from '@tryghost/content-api';
import { GhostApiService } from '../../services/ghost-api.service';

@Component({
  selector: 'app-ghost-view-post-list',
  templateUrl: './ghost-view-post-list.component.html',
  styleUrls: ['./ghost-view-post-list.component.scss'],
})
export class GhostViewPostList implements OnInit {
  posts$: Promise<PostsOrPages>;

  constructor(private ghost: GhostApiService) {
    this.posts$ = this.ghost.api.posts.browse({
      include: ['authors', 'tags'],
    });
  }

  ngOnInit(): void {}
}
