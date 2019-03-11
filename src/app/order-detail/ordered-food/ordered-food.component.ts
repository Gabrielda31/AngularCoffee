import { Component, OnDestroy, Input } from '@angular/core';
import { OrderService } from '../../order/services/order.service';
import { MenuService } from '../../content-page/menu/services/menu.service';
import { IFood } from '../../content-page/menu/interfaces/IFood';

@Component({
  selector: 'app-ordered-food',
  templateUrl: './ordered-food.component.html',
  styleUrls: ['./ordered-food.component.scss']
})
export class OrderedFoodComponent implements OnDestroy {
  @Input() food: IFood = {
    id: '',
    name: 'Coffee',
    price: 1,
    cover: '',
    categories: [{
      id: '',
      name: ''
    }],
    orderNumber: 1
  };
  constructor(private orderSvc: OrderService, private menu: MenuService) { }

  ngOnDestroy() {
  }
}
