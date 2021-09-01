import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/service/login/login.service';
import { BehaviorSubject, Observable,  } from 'rxjs';
import { UserDetails } from 'src/app/login/service/login/login.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userDetails: UserDetails = {} as UserDetails;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.user$.subscribe((data: UserDetails) => this.userDetails = data)
  }

  signOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);

    this.loginService.user$.next({} as UserDetails);

  }

}
