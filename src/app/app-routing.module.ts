import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationPageComponent } from './creation-page/creation-page.component';
import { LinksComponent } from './creation-page/links/links.component';
import { ProfileComponent } from './creation-page/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'creation',
    pathMatch: 'full',
  },
  {
    path: 'creation',
    component: CreationPageComponent,
    children: [
      { path: 'links', component: LinksComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
