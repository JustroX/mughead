import { Component, OnInit } from '@angular/core';
import { PostsOrPages } from '@tryghost/content-api';
import { GhostApiService } from '../../services/ghost-api.service';

@Component({
  selector: 'app-ghost-view-page-list',
  templateUrl: './ghost-view-page-list.component.html',
  styleUrls: ['./ghost-view-page-list.component.scss'],
})
export class GhostViewPageList implements OnInit {
  pages$: Promise<PostsOrPages>;

  constructor(private ghost: GhostApiService) {
    this.pages$ = this.ghost.api.pages.browse({
      include: ['authors', 'tags'],
    });
  }

  ngOnInit(): void {}
}
