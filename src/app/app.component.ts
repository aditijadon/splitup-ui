import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/service/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'splitup-ui';

  constructor(private loginService: LoginService){  }

  //get user credentials if the user is already logged-in
  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn === 'true') {
      //converting stringiified object to user object and setting the global user object
      this.loginService.user$.next(JSON.parse(localStorage.getItem('user')!));
    }
  }
}
