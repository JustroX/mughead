import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ghost-view-page',
  templateUrl: './ghost-view-page.component.html',
  styleUrls: ['./ghost-view-page.component.scss'],
})
export class GhostViewPage implements OnInit {
  id?: string;
  slug?: string;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.slug = this.route.snapshot.params['slug'];
  }

  ngOnInit(): void {}
}
