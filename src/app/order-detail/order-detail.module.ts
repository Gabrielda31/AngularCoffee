import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderedFoodComponent } from './ordered-food/ordered-food.component';
import { SharedModule } from '../shared/shared.module';
import { OrderDetailRoutingComponent } from './order-detail.routing';

@NgModule({
  declarations: [OrderDetailComponent, OrderedFoodComponent],
  imports: [
    SharedModule,
    OrderDetailRoutingComponent
  ],
  providers: []
})
export class OrderDetailModule { }
