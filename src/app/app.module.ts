import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewsComponent } from './components/news/news.component';

// ⬇ Pastikan file routing memang bernama app.routes.ts
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
