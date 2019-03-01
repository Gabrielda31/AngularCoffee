import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/authentication.service';
import { AuthRoutingModule } from './authentication.routing';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [],
  declarations: [
    LoginComponent,
  ],
  providers: [
    AuthService
  ]
})
export class AuthenticationModule { }
