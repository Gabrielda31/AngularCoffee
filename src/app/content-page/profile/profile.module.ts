import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InfoComponent } from './info/info.component';
import { ProfileRoutingComponent } from './profile.routing';


@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingComponent
  ],
  declarations: [
    ProfileComponent,
    ScheduleComponent,
    InfoComponent
  ],
  exports: [],
  providers: []
})
export class ProfileModule { }
