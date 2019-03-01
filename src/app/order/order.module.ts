import { NgModule } from '@angular/core';

import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order.routing';
import { SharedModule } from '../shared/shared.module';
import { OrderFoodComponent } from './order-food/order-food.component';
import { MenuService } from '../content-page/menu/services/menu.service';
import { OrderService } from './services/order.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        OrderRoutingModule
    ],
    exports: [
    ],
    declarations: [
        OrderFoodComponent,
        OrderComponent
      ],
    providers: [MenuService, OrderService],
})
export class OrderModule { }
