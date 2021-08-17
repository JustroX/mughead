import { Component, OnInit } from '@angular/core';
import { Authors } from '@tryghost/content-api';
import { GhostApiService } from '../../services/ghost-api.service';

@Component({
  selector: 'app-ghost-view-author-list',
  templateUrl: './ghost-view-author-list.component.html',
  styleUrls: ['./ghost-view-author-list.component.scss'],
})
export class GhostViewAuthorList implements OnInit {
  authors$: Promise<Authors>;

  constructor(private ghost: GhostApiService) {
    this.authors$ = this.ghost.api.authors.browse().then((x) => {
      console.log(x);
      return x;
    });
  }

  ngOnInit(): void {}
}
