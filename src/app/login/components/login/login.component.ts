import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


//userName and password variable sstoring the user's input

export class LoginComponent implements OnInit {
  hide=true;
  //setting login form group same as login request body
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })


  // constructor with dependency injection

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar) { }


  //on init function

  ngOnInit(): void {
  }


  //login method redirectiong to home page on seccessful login else throws error

  login() {
    this.loginService.login(this.loginForm.value).subscribe((data:any) => {
      this.loginService.user$.next(data); //setting global user object
      //setting items in localstorage presistent user data
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['/all-expenses'])
    }, (error) => {
        //showing error message on login fail
        this.snackBar.open('Wrong Credentials!', 'dismiss')
    });
  }

  goToRegister() {
    this.router.navigate(['/signup'])
  }

}
