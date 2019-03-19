import { Component, OnInit, Output } from '@angular/core';
import { TableService } from '../../content-page/table/services/table.service';
import { UserService } from '../../user/service/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    title: String = 'MENU';

    constructor(private tableSvc: TableService, private userSvc: UserService) { }

    ngOnInit() {
        this.tableSvc.currentTable.subscribe(newTitle => {
            this.title = newTitle;
            this.title = newTitle || 'Table';
        });
        this.userSvc.getCurrentUser().subscribe(res => {
        });
    }
}
