import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [CommonModule, InicioRoutingModule, FormsModule, HttpModule],
    declarations: [InicioComponent],
    providers: [AuthService]
})
export class InicioModule {}
