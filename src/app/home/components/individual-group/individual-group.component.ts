import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Expense } from '../../models/expense';
import { User } from '../../models/user';
import { HomeService } from '../../service/home/home.service';
import { Group, Member } from './../../models/group';

@Component({
  selector: 'app-individual-group',
  templateUrl: './individual-group.component.html',
  styleUrls: ['./individual-group.component.scss']
})
export class IndividualGroupComponent implements OnInit {

  groupId: number = 0;
  group: Group = {} as Group;
  expenses: Expense[] = [];
  allUsers: User[] = [];

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.groupId = +params.id;
      this.getGroupData(this.groupId);
    })

    this.homeService.getGroupByGroupId(this.groupId).subscribe((data: Group) => {
      this.group = data;
    });

    this.homeService.getAllUsers().subscribe((data : User[]) => this.allUsers = data)
  }

  getGroupData(id: number){
    this.homeService.getGroupByGroupId(id).subscribe((data: Group) => {
      this.group = data;
      this.expenses = data.transactions || [];
    });
  }

  getMembers(expense: Expense) {
    let paidByIds: number[] = [];
    let sharedByNames: string[] = [];
    if(expense.paidBy){
      paidByIds = Object.keys(expense.paidBy).map((key: string) => +key);
    }
    let paidByNames: string[] = this.allUsers
                                  .filter((user: User) => paidByIds.includes(user.id))
                                  .map((filteredUser: User) => filteredUser.fullName);
    if(expense.sharedBy){
      sharedByNames = expense.sharedBy.map((sharedUser: User) => sharedUser.fullName)
    }

    //MAGIC
    return Array.from(new Set([...paidByNames, ...sharedByNames]));
  }

  getTooltip(expense: Expense){
    const allMembersArray: string[] = this.getMembers(expense)
    return allMembersArray.slice(2, allMembersArray.length).join(', ');
  }

  routeBack() {
    this.location.back();
  }

}
