import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Categoria2RoutingModule } from './categoria2-routing.module';
import { Categoria2Component } from './categoria2.component';

@NgModule({
  imports: [CommonModule, Categoria2RoutingModule],
  declarations: [Categoria2Component]
})
export class Categoria2Module {}
