import { Component, OnInit } from '@angular/core';
import { IFood } from '../../content-page/menu/interfaces/IFood';
import { OrderService } from '../../order/services/order.service';
import { Location } from '@angular/common';
import { MenuService } from '../../content-page/menu/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from '../../content-page/table/services/table.service';
import { ITable } from '../../content-page/table/interfaces/ITable';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  foods: Array<IFood> = [];
  orderFoods: Array<IFood> = [];
  table: ITable;

  constructor(
    private orderSvc: OrderService,
    private location: Location,
    private menuSvc: MenuService,
    private route: ActivatedRoute,
    private tableSvc: TableService,
    private router: Router
    ) { }

  ngOnInit() {
    this.menuSvc.foods.subscribe((newData) => {
      this.foods = newData;
    });
    const id = this.route.snapshot.params.tableId;
    this.tableSvc.getTable(id).subscribe(data => {
      this.table = data;
    });
    this.menuSvc.getMenus();
    this.orderSvc.orderFoods.subscribe(data => {
      this.orderFoods = data;
    });
  }
  goBack() {
    this.location.back();
  }
  goTables() {
    this.router.navigate(['tables']);
  }
  editOrder(id) {
    this.router.navigate(['order', id]);
  }
}
