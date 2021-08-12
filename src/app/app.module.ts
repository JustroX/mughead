import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './pages/content/content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationItemComponent } from './components/navigation-item/navigation-item.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { MdContentComponent } from './components/md-content/md-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavigationComponent,
    NavigationItemComponent,
    SafeHTMLPipe,
    MdContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
