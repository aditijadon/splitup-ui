import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
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
export class SignupModule { }
