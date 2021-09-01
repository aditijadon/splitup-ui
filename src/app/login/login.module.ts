import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})

export class LoginModule { }
