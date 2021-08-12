import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostApiService } from './services/ghost-api.service';
import { GhostPostComponent } from './pages/ghost-post/ghost-post.component';
import { ContentGhostComponent } from './components/content-ghost/content-ghost.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { GhostAuthorComponent } from './components/ghost-author/ghost-author.component';

@NgModule({
  declarations: [
    ContentGhostComponent,
    GhostPostComponent,
    GhostAuthorComponent,
  ],
  providers: [GhostApiService],
  imports: [CommonModule, PipesModule],
  exports: [ContentGhostComponent],
})
export class GhostModule {}
