import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { FriendsComponent } from './components/friends/friends.component';
import { GroupsComponent } from './components/groups/groups.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AllExpensesComponent } from './components/all-expenses/all-expenses.component';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HeaderModule } from '../shared/components/header/header.module';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { IndividualGroupComponent } from './components/individual-group/individual-group.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    FriendsComponent,
    GroupsComponent,
    AddGroupComponent,
    AddExpenseComponent,
    AllExpensesComponent,
    IndividualGroupComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    HeaderModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatDatepickerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    RouterModule
  ]
})
export class HomeModule { }
