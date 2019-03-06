import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../services/order.service';
import { IFood } from '../interfaces/IFood';


@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrls: ['./summary-order.component.scss'],
})
export class SummaryOrderComponent implements OnInit {

  totalAmount: Number = 0;
  orderFoods: IFood[];
  showPopup: Boolean = false;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onOrder = new EventEmitter();
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.totalAmount.subscribe(data => {
      this.totalAmount = data;
    });
    this.orderService.orderFoods.subscribe(data => {
      this.orderFoods = data;
    });
  }
  order() {
    this.onOrder.emit();
  }
}
