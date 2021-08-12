import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostApiService } from './services/ghost-api.service';
import { GhostPagePostComponent } from './pages/ghost-page-post/ghost-page-post.component';
import { GhostPostComponent } from './components/ghost-post/ghost-post.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { GhostAuthorComponent } from './components/ghost-author/ghost-author.component';

@NgModule({
  declarations: [
    GhostPostComponent,
    GhostPagePostComponent,
    GhostAuthorComponent,
  ],
  providers: [GhostApiService],
  imports: [CommonModule, PipesModule],
  exports: [GhostPostComponent],
})
export class GhostModule {}
