import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import * as marked from 'marked';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-md-content',
  templateUrl: './md-content.component.html',
  styleUrls: ['./md-content.component.scss'],
})
export class MdContentComponent implements OnInit {
  /** File path relative to `assetRoot` */
  @Input() path: string = '';

  /** Directory path of where the asset content is located */
  @Input() assetRoot = 'content';

  /** Route path of where the route page is presented */
  @Input() routeRoot = 'view';

  /** Whether to show page navigation */
  @Input() showNavigation = false;

  parent_route_path = '';
  parent_asset_path = '';

  md_route_path = '';
  md_asset_path = '';

  isMissing: boolean = false;

  md$!: Observable<string>;
  html$!: Observable<string>;

  private setUpMarked() {
    const is_abs_regex = new RegExp('^(?:[a-z]+:)?//', 'i');

    marked.use({
      renderer: {
        link: (href: string, title: string, text: string) => {
          const is_absolute_path = is_abs_regex.test(href);
          const is_root = href[0] == '/';

          let final_href = '';
          if (!is_absolute_path) {
            if (is_root) final_href = `/${this.routeRoot}${href}`;
            else final_href = `${this.parent_route_path}/${href}`;
          } else final_href = href;

          const titleLine = title ? `title=${title}` : '';

          return `<a ${titleLine} href=${final_href}>${text}</a>`;
        },
        heading: (text, level, raw, slugger) => {
          const slug = slugger.slug(text);
          const href = `${this.md_route_path}#${slug}`;
          return `
            <a 
              href='${href}'
              fragment='${slug}'
              ng-reflect-fragment='${slug}'
              routerlink='${this.md_route_path}'
              ng-reflect-router-link='${this.md_route_path}'
            >
              <h${level} id='${slug}'>
                ${text}
              </h${level}>
            </a>
          `;
        },
        image: (href: string, title: string, text: string) => {
          const is_absolute_path = is_abs_regex.test(href);
          const is_root = href[0] == '/';

          let final_href = '';
          if (!is_absolute_path) {
            if (is_root) final_href = `/${this.assetRoot}${href}`;
            else final_href = `${this.parent_asset_path}${href}`;
          }
          const titleLine = title ? `title=${title}` : '';
          return `<img src='${final_href}' ${titleLine} alt='${text}' />`;
        },
      },
    });
  }

  constructor(private http: HttpClient) {}

  ngOnChanges() {
    if (this.path == '') return;
    this.setUpMarked();
    const path_chunks = this.path.split('/').slice(2);
    const path = path_chunks.join('/');

    const parent = path_chunks.slice(0, path_chunks.length - 1).join('/');

    this.parent_asset_path = `/${this.assetRoot}/${parent}`;
    if (parent == '') this.parent_route_path = `/${this.routeRoot}`;
    else this.parent_route_path = `/${this.routeRoot}/${parent}`;

    this.md_route_path = `/${this.routeRoot}/${path}`;
    this.md_asset_path = `/${this.assetRoot}/${path}.md`;

    this.md$ = this.http.get(this.md_asset_path, { responseType: 'text' });
    this.html$ = this.md$.pipe(
      map((x) => marked(x)),
      catchError((err) => {
        if (err?.status == 404) this.isMissing = true;
        return [];
      })
    );
  }

  ngOnInit(): void {}
}
