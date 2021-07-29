import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../navigation/navigation.component';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
})
export class NavigationItemComponent implements OnInit {
  @Input() navigation!: NavItem;

  constructor() {}

  ngOnInit(): void {}
}
