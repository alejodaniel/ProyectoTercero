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
export class LayoutRoutingModule {}
