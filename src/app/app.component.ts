import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'md-site';
  constructor(private meta: Meta) {
    this.meta.addTags([
      {
        name: 'description',
        content: 'A Mughead.js website',
      },
      {
        name: 'theme-color',
        content: 'hsl(171, 100%, 41%)',
      },
    ]);
  }
}
