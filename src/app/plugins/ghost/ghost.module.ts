import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostApiService } from './services/ghost-api.service';
import { GhostViewPost } from './pages/ghost-view-post/ghost-view-post.component';
import { GhostPostComponent } from './components/ghost-post/ghost-post.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { GhostAuthorComponent } from './components/ghost-author/ghost-author.component';
import { GhostViewPage } from './pages/ghost-view-page/ghost-view-page.component';
import { GhostPageComponent } from './components/ghost-page/ghost-page.component';
import { GhostViewAuthor } from './pages/ghost-view-author/ghost-view-author.component';
import { GhostPostCardComponent } from './components/ghost-post-card/ghost-post-card.component';
import { RouterModule } from '@angular/router';
import { GhostNavbarComponent } from './components/ghost-navbar/ghost-navbar.component';
import { GhostViewPageList } from './pages/ghost-view-page-list/ghost-view-page-list.component';
import { GhostViewPostList } from './pages/ghost-view-post-list/ghost-view-post-list.component';
import { GhostViewAuthorList } from './pages/ghost-view-author-list/ghost-view-author-list.component';
import { GhostViewTagList } from './pages/ghost-view-tag-list/ghost-view-tag-list.component';
import { GhostViewTag } from './pages/ghost-view-tag/ghost-view-tag.component';
import { GhostPageCardComponent } from './components/ghost-page-card/ghost-page-card.component';

@NgModule({
  declarations: [
    GhostPostComponent,
    GhostViewPost,
    GhostAuthorComponent,
    GhostViewPage,
    GhostPageComponent,
    GhostViewAuthor,
    GhostPostCardComponent,
    GhostNavbarComponent,
    GhostViewPageList,
    GhostViewPostList,
    GhostViewAuthorList,
    GhostViewTagList,
    GhostViewTag,
    GhostPageCardComponent,
  ],
  providers: [GhostApiService],
  imports: [CommonModule, PipesModule, RouterModule],
  exports: [
    GhostPostComponent,
    GhostViewPost,
    GhostAuthorComponent,
    GhostViewPage,
    GhostPageComponent,
    GhostViewAuthor,
    GhostPostCardComponent,
    GhostNavbarComponent,
  ],
})
export class GhostModule {}
