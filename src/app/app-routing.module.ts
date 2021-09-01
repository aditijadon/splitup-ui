import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('../app/signup/signup.module').then((m) => m.SignupModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../app/home/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
