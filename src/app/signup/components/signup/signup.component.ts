import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupService } from '../../service/signup/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {
  hide=true;
  signupForm: FormGroup = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    fullName: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  constructor(private signupService: SignupService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  signup() {
    this.signupService.signup(this.signupForm.value).subscribe((data:any) => {
      this.router.navigate(['/login']) //routing to login-page on successful signup
    }, (error) => {
        console.error(error)
        this.snackBar.open('Email already exists!', 'dismiss')
    });
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }

}
