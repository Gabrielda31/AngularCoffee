import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

    tableNumber: String = 'table 01';
    constructor() { }

    ngOnInit() {
    }

}
