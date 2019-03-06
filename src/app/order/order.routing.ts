import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from '../order/order.component';

const routes: Routes = [
  {
    path: ':tableId',
    component: OrderComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class OrderRoutingModule { }
