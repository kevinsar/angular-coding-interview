import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShapesPageComponent } from './pages/shapes-page/shapes-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShapesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
