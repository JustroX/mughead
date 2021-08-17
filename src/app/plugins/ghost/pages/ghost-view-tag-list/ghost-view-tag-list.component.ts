import { Component, OnInit } from '@angular/core';
import { Tags } from '@tryghost/content-api';
import { GhostApiService } from '../../services/ghost-api.service';

@Component({
  selector: 'app-ghost-view-tag-list',
  templateUrl: './ghost-view-tag-list.component.html',
  styleUrls: ['./ghost-view-tag-list.component.scss'],
})
export class GhostViewTagList implements OnInit {
  tags$: Promise<Tags>;

  constructor(private ghost: GhostApiService) {
    this.tags$ = this.ghost.api.tags.browse();
  }

  ngOnInit(): void {}
}
