import { Component, Input, OnInit } from '@angular/core';
import { PostOrPage } from '@tryghost/content-api';
import { GhostApiService } from '../../services/ghost-api.service';

@Component({
  selector: 'app-content-ghost',
  templateUrl: './content-ghost.component.html',
  styleUrls: ['./content-ghost.component.scss'],
})
export class ContentGhostComponent implements OnInit {
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
    this.post$.then((x) => console.log(x));
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
  }

  ngOnChanges() {
    this.loadPage();
  }

  ngOnInit() {
    this.loadPage();
  }
}
