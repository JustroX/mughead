import GhostContentAPI, { GhostAPI, PostOrPage } from '@tryghost/content-api';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class GhostApiService {
  private ghost_api: GhostAPI;
  constructor(private meta: Meta, private title: Title) {
    this.ghost_api = new GhostContentAPI({
      url: environment.ghost.host,
      key: environment.ghost.key,
      version: 'v3',
    });
  }

  get api() {
    return this.ghost_api;
  }

  setTags(post: PostOrPage) {
    if (post.title) this.title.setTitle(post.title);

    if (post.meta_title)
      this.meta.addTag({
        name: 'title',
        content: post.meta_title,
      });

    if (post.meta_description)
      this.meta.addTag({
        name: 'description',
        content: post.meta_description,
      });

    if (post.twitter_description)
      this.meta.addTag({
        name: 'twitter:description',
        content: post.twitter_description,
      });

    if (post.twitter_title)
      this.meta.addTag({
        name: 'twitter:title',
        content: post.twitter_title,
      });

    if (post.twitter_image)
      this.meta.addTag({
        name: 'twitter:image',
        content: post.twitter_image,
      });

    if (post.og_title)
      this.meta.addTag({
        name: 'og:title',
        content: post.og_title,
      });

    if (post.og_image)
      this.meta.addTag({
        name: 'og:image',
        content: post.og_image,
      });

    if (post.og_description)
      this.meta.addTag({
        name: 'og:description',
        content: post.og_description,
      });
  }
}
