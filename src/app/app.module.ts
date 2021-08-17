import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './pages/content/content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationItemComponent } from './components/navigation-item/navigation-item.component';
import { MdContentComponent } from './components/md-content/md-content.component';
import { GhostModule } from './plugins/ghost/ghost.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavigationComponent,
    NavigationItemComponent,
    MdContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    GhostModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
