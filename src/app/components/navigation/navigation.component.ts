import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { lexer, Slugger } from 'marked';

export interface NavItem {
  text: string;
  depth: number;
  slug: string;
  children: NavItem[];
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnChanges {
  @Input() markdown: string = '';
  navigation: NavItem = { text: 'root', depth: 0, children: [], slug: 'root' };
  constructor() {}

  private parse() {
    const slugger = new Slugger();
    const tokens = lexer(this.markdown);
    const headings = tokens.filter(
      (x) => x.type == 'heading' || x.type == 'hr'
    );

    let item;
    let is_divide = false;
    while ((item = headings.shift())) {
      const head =
        this.navigation.children[this.navigation.children.length - 1];

      if (item.type == 'heading') {
        if (!head || is_divide) {
          is_divide = false;
          this.navigation.children.push({
            text: item.text,
            slug: slugger.slug(item.text),
            children: [],
            depth: item.depth,
          });
        } else {
          let parent = this.navigation;
          while (true) {
            const child = parent.children[parent.children.length - 1];
            if (!child) break;
            if (child.depth >= item.depth) break;
            parent = child;
          }
          parent.children.push({
            text: item.text,
            children: [],
            slug: slugger.slug(item.text),
            depth: item.depth,
          });
        }
      }

      if (item.type == 'hr') {
        is_divide = true;
      }
    }
  }

  ngOnChanges(): void {
    this.parse();
  }
}
