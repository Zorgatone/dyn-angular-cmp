import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleComponent, SlotModule } from './module/module.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModulesListComponent } from './modules-list/modules-list.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { ArticleComponent } from './article/article.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    HomepageComponent,
    CarouselComponent,
    ModulesListComponent,
    SlotModule,
    CarouselItemComponent,
    ArticleComponent,
    NewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
