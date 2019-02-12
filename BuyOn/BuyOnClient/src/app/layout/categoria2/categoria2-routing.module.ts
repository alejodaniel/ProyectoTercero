import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Categoria2Component } from './categoria2.component';

const routes: Routes = [
  {
    path: '',
    component: Categoria2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Categoria2RoutingModule {}
