import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DragDirective } from './dragDrop.directive';
import { HelloComponent } from './hello.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, PageNotFoundComponent, WelcomeComponent, DragDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }

