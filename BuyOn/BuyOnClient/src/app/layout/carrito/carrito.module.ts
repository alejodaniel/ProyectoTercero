import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './carrito.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, CarritoRoutingModule, FormsModule],
  declarations: [CarritoComponent]
})
export class CarritoModule { }
