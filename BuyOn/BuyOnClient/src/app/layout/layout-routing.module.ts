import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'index'
      },
      {
        path: 'index',
        loadChildren: './inicio/index.module#IndexModule'
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      },
      {
        path: 'carrito',
        loadChildren: './carrito/carrito.module#CarritoModule'
      },
      {
        path: 'categoria1',
        loadChildren: './categoria1/categoria1.module#Categoria1Module'
      },
      {
        path: 'categoria2',
        loadChildren: './categoria2/categoria2.module#Categoria2Module'
      },
      {
        path: 'blank',
        loadChildren: './blank-page/blank-page.module#BlankPageModule'
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
