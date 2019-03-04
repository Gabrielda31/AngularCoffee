import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { LoginGuard } from './services/login-guard.service';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'onboarding',
    loadChildren: './content-page/onboarding/onboarding.module#OnboardingModule'
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: './content-page/authentication/authentication.module#AuthenticationModule'
  },
  {
    path: '',
    canActivate: [AuthGuard],
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
