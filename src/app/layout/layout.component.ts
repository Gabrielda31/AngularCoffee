import { Component, OnInit } from '@angular/core';
import { ITable } from '../content-page/table/interfaces/ITable';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = 'angularcoffee';
  tables: Array<ITable> = [];
  displayMode: Number = 0;
  constructor() { }

  ngOnInit() {
  }

}
