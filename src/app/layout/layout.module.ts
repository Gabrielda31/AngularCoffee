import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LayoutComponent } from './layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [],
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    MenuBarComponent,
    LayoutComponent
  ],
  providers: [],
})
export class LayoutModule { }
