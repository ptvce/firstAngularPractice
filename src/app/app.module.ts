import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './star/star.component';
import { HeaderComponent } from './header/header.component';
import { AdvancedHighlightDirective } from './advanced-highlight.directive';
import { StructuralDisplayOrNotDirective } from './structural-display-or-not.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarComponent,
    HeaderComponent,
    AdvancedHighlightDirective,
    StructuralDisplayOrNotDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
