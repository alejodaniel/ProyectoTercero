import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './carrito.component';

@NgModule({
  imports: [CommonModule, CarritoRoutingModule],
  declarations: [CarritoComponent]
})
export class CarritoModule {}
