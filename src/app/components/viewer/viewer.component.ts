import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as marked from 'marked';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnChanges {
  @Input() url: string = '';
  @Input() showNavigation = false;
  md_url = '';
  md_parent = '';
  current_path = '';

  md$!: Observable<string>;
  html$!: Observable<string>;

  private setUpMarked() {
    const is_abs_regex = new RegExp('^(?:[a-z]+:)?//', 'i');

    marked.use({
      renderer: {
        link: (href: string, title: string, text: string) => {
          let final_href = '';
          const is_absolute_path = is_abs_regex.test(href);
          const is_root = href[0] == '/';

          if (!is_absolute_path) {
            if (is_root) final_href = `/view${href}`;
            else final_href = `${this.md_parent}/${href}`;
          }

          return `<a title=${title} href=${final_href}>${text}</a>`;
        },
        heading: (text, level, raw, slugger) => {
          const slug = slugger.slug(text);
          const href = `${this.current_path}#${slug}`;
          return `
            <a 
              href='${href}'
              fragment='${slug}'
              ng-reflect-fragment='${slug}'
              routerlink='${this.current_path}'
              ng-reflect-router-link='${this.current_path}'
            >
              <h${level} id='${slug}'>
                ${text}
              </h${level}>
            </a>
          `;
        },
      },
    });
  }

  constructor(private http: HttpClient) {}

  ngOnChanges() {
    if (this.url == '') return;
    this.setUpMarked();
    const url = this.url;
    const url_chunks = url.split('/').slice(2);
    const file_path = url_chunks.join('/');
    const parent_path = url_chunks.slice(0, url_chunks.length - 1).join('/');

    if (parent_path == '') this.md_parent = `/view`;
    else this.md_parent = `/view/${parent_path}`;

    this.current_path = `/view/${file_path}`;
    this.md_url = `/content/${file_path}.md`;
    this.md$ = this.http.get(this.md_url, { responseType: 'text' });
    this.html$ = this.md$.pipe(map((x) => marked(x)));
  }
}
