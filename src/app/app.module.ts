import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'swiper/angular';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    InfiniteScrollModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
