import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { AllExpensesComponent } from './components/all-expenses/all-expenses.component';
import { FriendsComponent } from './components/friends/friends.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';
import { IndividualGroupComponent } from './components/individual-group/individual-group.component';


//routes to different components of home-page

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-expenses',
    pathMatch: 'full',
  },
  {
    path: 'add-expense',
    component: AddExpenseComponent
  },
  {
    path: 'add-group',
    component: AddGroupComponent
  },
  {
    path: 'all-expenses',
    component: AllExpensesComponent
  },
  {
    path: 'group',
    component: IndividualGroupComponent
  }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }
