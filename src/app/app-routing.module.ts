import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { GhostPostComponent } from './plugins/ghost/pages/ghost-post/ghost-post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view/main',
  },
  {
    path: 'view',
    children: [
      {
        path: '**',
        component: ContentComponent,
        runGuardsAndResolvers: 'always',
      },
    ],
  },
  {
    path: 'g',
    children: [
      {
        path: 'post',
        children: [
          {
            path: 'slug/:slug',
            component: GhostPostComponent,
          },
          {
            path: ':id',
            component: GhostPostComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
