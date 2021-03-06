import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ITable } from '../../content-page/table/interfaces/ITable';
import { IFood } from '../interfaces/IFood';
@Injectable({ providedIn: 'root' })
export class BillService {
  constructor(private httpClient: HttpClient) { }

  getBill(id: String) {
    return this.httpClient.get(`bills/${id}`).pipe(map((res: any) => {
      // tslint:disable-next-line:prefer-const
      let bill: {
        table: ITable,
        customer: String,
        status: Number,
        total: Number,
        details: IFood[]
      } = {
        table: {
          id: res.table.id,
          tableName: res.table.name,
          tableStatus: res.status,
          customerName: res.customer
        },
        customer: res.customer,
        status: res.status,
        total: res.total,
        details: res.details.map(f => {
          const x: IFood = {
            id: f.foodId,
            name: f.foodName,
            cover: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRATHACHVAI.png',
            price: f.price,
            orderNumber: f.quatity,
          };
          return x;
        })
      };
      return bill;
    }));
  }
}
