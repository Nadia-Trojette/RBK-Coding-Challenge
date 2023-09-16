import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreationPageComponent } from './creation-page/creation-page.component';
import { PreviewPageComponent } from './preview-page/preview-page.component';

import { MatButtonModule } from '@angular/material/button';
import { LinksComponent } from './creation-page/links/links.component';
import { PhoneComponent } from './creation-page/phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreationPageComponent,
    PreviewPageComponent,
    LinksComponent,
    PhoneComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
