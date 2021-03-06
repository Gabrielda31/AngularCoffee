import { Component, OnInit } from '@angular/core';
import { IFood } from '../../content-page/menu/interfaces/IFood';
import { OrderService } from '../../order/services/order.service';
import { Location } from '@angular/common';
import { MenuService } from '../../content-page/menu/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from '../../content-page/table/services/table.service';
import { ITable } from '../../content-page/table/interfaces/ITable';
import { BillService } from '../../order/services/bill.service';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orderFoods: Array<IFood> = [];
  table: ITable;

  constructor(
    private orderService: OrderService,
    private location: Location,
    private billService: BillService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    const id = this.route.snapshot.params.billId;
    this.billService.getBill(id).subscribe(data => {
      this.orderFoods = data.details as any;
      this.table = data.table;
    });
  }
  goBack() {
    this.location.back();
  }
  goTables() {
    this.router.navigate(['tables']);
  }
  editOrder(id) {
    const billId = this.route.snapshot.params.billId;
    this.router.navigate([`order/${id}`, {billId: billId}]);
  }

  done() {
    const id = this.route.snapshot.params.billId;
    this.orderService.updateBill(id, this.table.id, this.table.customerName, this.orderFoods, 4).subscribe(data => {
      this.router.navigate(['/tables']);
    });
  }
}
