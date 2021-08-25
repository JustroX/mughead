import { Component, Input, OnInit } from '@angular/core';
import { PostOrPage } from '@tryghost/content-api';
import { GhostApiService } from '../../services/ghost-api.service';

@Component({
  selector: 'app-ghost-post',
  templateUrl: './ghost-post.component.html',
  styleUrls: ['./ghost-post.component.scss'],
})
export class GhostPostComponent implements OnInit {
  @Input() id?: string;
  @Input() slug?: string;
  isMissing: boolean = false;
  post$!: Promise<PostOrPage>;

  constructor(private ghost: GhostApiService) {}

  private loadPageById(id: string) {
    this.post$ = this.ghost.api.posts.read(
      { id },
      { include: ['authors', 'tags'] }
    );
  }

  private loadPageBySlug(slug: string) {
    this.post$ = this.ghost.api.posts.read(
      { slug },
      { include: ['authors', 'tags'] }
    );
    this.post$.catch((err) => {
      if (err.message == 'Post not found.') this.isMissing = true;
    });
  }

  private loadPage() {
    if (this.id) this.loadPageById(this.id);
    if (this.slug) this.loadPageBySlug(this.slug);
    this.post$.then((p) => this.ghost.setTags(p));
  }

  ngOnChanges() {
    this.loadPage();
  }

  ngOnInit() {
    this.loadPage();
  }
}
