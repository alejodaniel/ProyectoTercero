import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Categoria1Component } from './categoria1.component';

const routes: Routes = [
  {
    path: '',
    component: Categoria1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Categoria1RoutingModule {}
