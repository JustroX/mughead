import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author, PostsOrPages } from '@tryghost/content-api';
import { GhostApiService } from '../../services/ghost-api.service';

@Component({
  selector: 'app-ghost-view-author',
  templateUrl: './ghost-view-author.component.html',
  styleUrls: ['./ghost-view-author.component.scss'],
})
export class GhostViewAuthor implements OnInit {
  slug: string;
  author$!: Promise<Author>;
  posts$!: Promise<PostsOrPages>;

  constructor(private route: ActivatedRoute, private ghost: GhostApiService) {
    this.slug = this.route.snapshot.params['slug'];
  }

  private loadAuthor() {
    this.author$ = this.ghost.api.authors.read(
      { slug: this.slug },
      { include: 'count.posts' }
    );
  }

  private loadPosts() {
    this.posts$ = this.ghost.api.posts.browse({
      filter: `primary_author:${this.slug}`,
      include: ['tags', 'authors'],
    });
  }

  ngOnInit() {
    this.loadAuthor();
    this.loadPosts();
  }
}
