import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
  @Input() subRoute = 'view';

  md_url = '';
  md_parent = '';
  parent_url = '';
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
            if (is_root) final_href = `/${this.subRoute}${href}`;
            else final_href = `${this.md_parent}/${href}`;
          } else final_href = href;

          const titleLine = title ? `title=${title}` : '';

          return `<a ${titleLine} href=${final_href}>${text}</a>`;
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
        image: (href: string, title: string, text: string) => {
          let final_href = '';
          const is_absolute_path = is_abs_regex.test(href);
          const is_root = href[0] == '/';

          if (!is_absolute_path) {
            if (is_root) final_href = `/content${href}`;
            else final_href = `${this.parent_url}/${href}`;
          }
          const titleLine = title ? `title=${title}` : '';
          return `<img src='${final_href}' ${titleLine} alt='${text}' />`;
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
    this.parent_url = `/content/${parent_path}`;

    if (parent_path == '') this.md_parent = `/${this.subRoute}`;
    else this.md_parent = `/${this.subRoute}/${parent_path}`;

    this.current_path = `/${this.subRoute}/${file_path}`;
    this.md_url = `/content/${file_path}.md`;
    this.md$ = this.http.get(this.md_url, { responseType: 'text' });
    this.html$ = this.md$.pipe(map((x) => marked(x)));
  }
}
