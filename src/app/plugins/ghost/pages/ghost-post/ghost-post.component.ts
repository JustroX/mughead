import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ghost-post',
  templateUrl: './ghost-post.component.html',
  styleUrls: ['./ghost-post.component.scss'],
})
export class GhostPostComponent implements OnInit {
  id?: string;
  slug?: string;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.slug = this.route.snapshot.params['slug'];
  }

  ngOnInit(): void {}
}
