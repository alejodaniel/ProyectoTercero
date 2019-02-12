import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Categoria1RoutingModule } from './categoria1-routing.module';
import { Categoria1Component } from './categoria1.component';

@NgModule({
  imports: [CommonModule, Categoria1RoutingModule],
  declarations: [Categoria1Component]
})
export class Categoria1Module {}
