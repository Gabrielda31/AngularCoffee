import { Component, OnInit, Output } from '@angular/core';
import { TableService } from 'src/app/content-page/table/services/table.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: String = 'MENU';

  constructor(private tableSvc: TableService) {}

  ngOnInit() {
    this.tableSvc.currentTable.subscribe(newTitle => {
      this.title = newTitle;
      this.title = newTitle || 'Table';
    });
  }
}
