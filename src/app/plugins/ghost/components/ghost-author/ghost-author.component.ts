import { Component, Input, OnInit } from '@angular/core';
import { Nullable } from '@tryghost/content-api';

@Component({
  selector: 'app-ghost-author',
  templateUrl: './ghost-author.component.html',
  styleUrls: ['./ghost-author.component.scss'],
})
export class GhostAuthorComponent implements OnInit {
  @Input() name?: Nullable<string> = '';
  @Input() image?: Nullable<string> = '';
  @Input() published_at?: Nullable<string> = null;
  @Input() reading_time?: number = 0;
  @Input() slug?: Nullable<string> = '';

  published_date: Date = new Date();

  constructor() {}

  ngOnChanges() {
    const date = new Date();
    this.published_date = new Date(this.published_at ?? date.toString());
  }

  ngOnInit(): void {}
}
