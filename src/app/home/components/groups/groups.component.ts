import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService, UserDetails } from 'src/app/login/service/login/login.service';
import { Group, Member } from '../../models/group';
import { User } from '../../models/user';
import { HomeService } from '../../service/home/home.service';
import { IndividualGroupComponent } from '../individual-group/individual-group.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  user: UserDetails = {} as UserDetails;
  groups: Group[] = [];
  @Output() totalBalance: EventEmitter<number> = new EventEmitter();
  constructor(
    private homeService: HomeService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.totalBalance.emit(4000)
    this.loginService.user$.subscribe((data: UserDetails) => this.user=data);
    this.homeService.getGroupsByUserId(this.user.id).subscribe((data: Group[]) => this.groups = data);

  }

  getMembers(members: Member[]) {
    let memberNames: string[] = members.map(data => data.fullName);
    return `${memberNames.slice(0,2).join(', ')}`
  }

  getTooltip(group: Group){
    return group.member.slice(2, group.member.length).map((member: User) => member.fullName).join(', ');
  }

}
