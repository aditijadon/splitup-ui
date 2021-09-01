import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { User } from '../../models/user';
import { HomeService } from '../../service/home/home.service';
import { Location } from '@angular/common'
import { Group } from '../../models/group'




@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})


export class AddGroupComponent implements OnInit {

  @ViewChild('memberInput')
  memberInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto')
  matAutocomplete!: MatAutocomplete;


  addGroupForm: FormGroup = new FormGroup({
    groupName: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required])
  })

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  memberCtrl = new FormControl();
  filteredMembers!: Observable<User[]>;
  members: User[] = []
  allMembers: User[] = [];

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private location: Location,
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.filteredMembers = this.memberCtrl.valueChanges.pipe(
      startWith(''),
      map((value: User) => (typeof value === 'string' ? value : value.fullName)),
      map((name: string) => name ? this._filter(name) : this.allMembers.slice()));

    this.homeService.getAllUsers().subscribe((data: User[]) => {
      this.allMembers = data;
      this.memberCtrl.setValue('');
    })
  }
  autoCompleteDisplay = (option: User) => (option && option.fullName ? option.fullName : '');


  addGroup() {
    try {
      let newGroup: Group = {} as Group;
      newGroup.groupName = this.addGroupForm.get('groupName')?.value;
      newGroup.description = this.addGroupForm.get('description')?.value;
      newGroup.member = this.members;
      this.homeService.createGroup(newGroup).subscribe()
    } catch(error) {

    }

  }

  cancel() {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();


    console.log(this.members)
    console.log(this.members.find((member: User) => member.fullName === value))
    // Add our member
    if (value && !this.members.find((member: User) => member.fullName === value) ) {
      this.members.push(this.allMembers.find((member: User) => member.fullName === value) as User);
      this.members = this.members.filter(member => member !== undefined);
    }
    console.log('77',this.members)

    // Clear the input value
    event.chipInput!.clear();

    this.memberCtrl.setValue('');
  }

  remove(memberName: string): void {
    const index = this.members.findIndex((member: User) => member.fullName === memberName);

    if (index >= 0) {
      this.members.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if(this.members.find((member: User) => member.fullName === event.option.viewValue) === undefined){
      this.members.push(this.allMembers.find((member: User) => member.fullName === event.option.viewValue) as User);
    }
    this.members = this.members.filter(member => member !== undefined);
    this.memberInput.nativeElement.value = '';
    this.memberCtrl.setValue('');
  }

  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase();

    return this.allMembers.filter((member: User) =>
          member.fullName.toLowerCase().includes(value.toLowerCase()) ||
          member.email.toLowerCase().includes(value.toLowerCase()) ||
          member.phone.toLowerCase().includes(value.toLowerCase())
    );
  }

  isSelected(member: User){
    let listMember: User = member;
    return this.members.findIndex(selectedMember => selectedMember.id === listMember.id) !==-1
  }

  routeBack(){
    this.location.back();
  }

}
