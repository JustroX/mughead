import { Component, Input, OnInit } from '@angular/core';
import { Nullable } from '@tryghost/content-api';

@Component({
  selector: 'app-ghost-post-card',
  templateUrl: './ghost-post-card.component.html',
  styleUrls: ['./ghost-post-card.component.scss'],
})
export class GhostPostCardComponent implements OnInit {
  @Input() tag?: string = '';
  @Input() tag_slug?: string = '';
  @Input() title?: string = '';
  @Input() excerpt?: string = '';

  @Input() image?: Nullable<string> = '';
  @Input() name?: string = '';
  @Input() published_at?: Nullable<string> = null;
  @Input() reading_time?: number = 0;
  @Input() slug?: Nullable<string> = '';
  @Input() author_slug?: Nullable<string> = '';

  constructor() {}

  ngOnInit(): void {}
}
