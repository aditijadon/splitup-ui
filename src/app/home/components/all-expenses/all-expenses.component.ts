import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/service/login/login.service';

@Component({
  selector: 'app-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.scss']
})
export class AllExpensesComponent implements OnInit {

  totalBalance: number = 0;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
