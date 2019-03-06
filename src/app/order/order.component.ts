import { Component, OnInit } from '@angular/core';
import { MenuService } from '../content-page/menu/services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { IFood } from '../content-page/menu/interfaces/IFood';
import { ITable } from '../content-page/table/interfaces/ITable';
import { TableService } from '../content-page/table/services/table.service';
import { OrderService } from './services/order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  foods: Array<IFood> = [];
  orderFoods: Array<IFood> = [];
  table: ITable;
  customer: String;
  constructor(private menuSvc: MenuService,
    private tableSvc: TableService,
    private orderService: OrderService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.menuSvc.foods.subscribe((newData) => {
      this.foods = newData;
    });
    const id = this.route.snapshot.params.tableId;
    this.tableSvc.getTable(id).subscribe(data => {
      this.table = data;
    });
    this.menuSvc.getMenus();
    this.orderService.orderFoods.subscribe(data => {
      this.orderFoods = data;
    });
  }

  order() {
    this.orderService.createBill(this.table.id, this.customer, this.orderFoods).subscribe(data => {
      alert('Bill Created!');
    });
  }
}
