import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationPageComponent } from './creation-page/creation-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'creation',
    pathMatch: 'full',
  },
  { path: 'creation', component: CreationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
