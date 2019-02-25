import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewModeComponent } from './viewmode/viewmode.component';

const routes: Routes = [
  {
    path: '',
    component: ViewModeComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class TableRoutingModule {}
