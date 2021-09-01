import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule { }
