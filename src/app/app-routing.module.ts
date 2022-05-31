import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialFormComponent } from './initial-form/initial-form.component';

const routes: Routes = [
  { path: '', component: InitialFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
