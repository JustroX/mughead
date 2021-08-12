import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ghost-view-post',
  templateUrl: './ghost-view-post.component.html',
  styleUrls: ['./ghost-view-post.component.scss'],
})
export class GhostViewPost implements OnInit {
  id?: string;
  slug?: string;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.slug = this.route.snapshot.params['slug'];
  }

  ngOnInit(): void {}
}
