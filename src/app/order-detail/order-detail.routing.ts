import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailComponent } from '../order-detail/order-detail/order-detail.component';


const routes: Routes = [
  {
    path: ':billId',
    component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class OrderDetailRoutingComponent {}
