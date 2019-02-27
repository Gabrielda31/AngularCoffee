import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FoodComponent } from './food/food.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { MenuComponent } from './menu/menu.component';
import { MenuRoutingModule } from './menu.routing';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [
    FoodComponent,
    FoodDetailsComponent,
    MenuComponent
  ],
  imports: [
    SharedModule,
    MenuRoutingModule
  ],
  providers: [
    MenuService
  ]
})
export class MenuModule { }
