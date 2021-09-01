import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/components/login/login.component';


//routes to different components of login-page

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LoginRoutingModule { }
