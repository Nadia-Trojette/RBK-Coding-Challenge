import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreationPageComponent } from './creation-page/creation-page.component';
import { PreviewPageComponent } from './preview-page/preview-page.component';
import { LinksComponent } from './creation-page/links/links.component';
import { PhoneComponent } from './creation-page/phone/phone.component';
import { LinkCardComponent } from './creation-page/links/link-card/link-card.component';
import { AddLinkModalComponent } from './creation-page/add-link-modal/add-link-modal.component';

import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProfileComponent } from './creation-page/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreationPageComponent,
    PreviewPageComponent,
    LinksComponent,
    PhoneComponent,
    LinkCardComponent,
    AddLinkModalComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
    MatButtonModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
