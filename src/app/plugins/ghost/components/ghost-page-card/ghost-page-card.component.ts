import { Component, Input, OnInit } from '@angular/core';
import { Nullable } from '@tryghost/content-api';

@Component({
  selector: 'app-ghost-page-card',
  templateUrl: './ghost-page-card.component.html',
  styleUrls: ['./ghost-page-card.component.scss'],
})
export class GhostPageCardComponent implements OnInit {
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
