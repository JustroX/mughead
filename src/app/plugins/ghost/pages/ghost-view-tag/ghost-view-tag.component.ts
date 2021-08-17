import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsOrPages, Tag } from '@tryghost/content-api';
import { GhostApiService } from '../../services/ghost-api.service';

@Component({
  selector: 'app-ghost-view-tag',
  templateUrl: './ghost-view-tag.component.html',
  styleUrls: ['./ghost-view-tag.component.scss'],
})
export class GhostViewTag implements OnInit {
  posts$: Promise<PostsOrPages>;
  tag$: Promise<Tag>;
  slug: string;

  constructor(private ghost: GhostApiService, private route: ActivatedRoute) {
    this.slug = this.route.snapshot.params['slug'];
    this.tag$ = this.ghost.api.tags.read({ slug: this.slug });
    this.posts$ = this.ghost.api.posts.browse({
      filter: [`tag:${this.slug}`],
      include: ['authors', 'tags'],
    });
  }

  ngOnInit(): void {}
}
