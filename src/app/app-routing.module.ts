import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'onboarding',
    loadChildren: './content-page/onboarding/onboarding.module#OnboardingModule'
  },
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
  },
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
