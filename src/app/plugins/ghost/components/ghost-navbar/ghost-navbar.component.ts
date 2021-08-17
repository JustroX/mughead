import { Component, OnInit } from '@angular/core';
import { GhostApiService } from '../../services/ghost-api.service';

@Component({
  selector: 'app-ghost-navbar',
  templateUrl: './ghost-navbar.component.html',
  styleUrls: ['./ghost-navbar.component.scss'],
})
export class GhostNavbarComponent implements OnInit {
  isOpen: boolean = false;

  navigation$: Promise<{ label: string; url: string }[] | undefined>;

  constructor(private ghost: GhostApiService) {
    this.navigation$ = this.ghost.api.settings
      .browse()
      .then((x) => x.navigation);
  }

  ngOnInit(): void {}
}
