import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TableService } from './services/table.service';
import { TableRoutingModule } from './table.routing';
import { TableComponent } from './table/table.component';
import { ViewModeComponent } from './viewmode/viewmode.component';
import { StatusPipe } from './pipes/status.pipe';


@NgModule({
  imports: [
    SharedModule,
    TableRoutingModule
  ],
  exports: [],
  declarations: [
    TableComponent,
    ViewModeComponent,
    StatusPipe
  ],
  providers: [TableService]
})
export class TableModule { }
