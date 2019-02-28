import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tables',
        loadChildren: './content-page/table/table.module#TableModule'
      },
      {
        path: 'menu',
        loadChildren: './content-page/menu/menu.module#MenuModule'
      },
      {
        path: 'profile',
        loadChildren: './content-page/profile/profile.module#ProfileModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
