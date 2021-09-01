import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
import { Expense } from '../../models/expense'



@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})


export class AddExpenseComponent implements OnInit {

  @ViewChild('memberInput')
  memberInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto')
  matAutocomplete!: MatAutocomplete;

  addExpenseForm: FormGroup = this.fb.group({
    billFor : ['',[Validators.required]],
    amount : ['',[Validators.required]],
    paidOn : ['',[Validators.required]],
  })

  groupId: number = 0;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  memberCtrl = new FormControl();
  filteredMembers!: Observable<User[]>;
  members: User[] = []
  allMembers: User[] = [];


  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private location: Location,
    private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.filteredMembers = this.memberCtrl.valueChanges.pipe(
      startWith(null),
      map((value: User) => (typeof value === 'string' ? value : value.fullName)),
      map((name: string) => name ? this._filter(name) : this.allMembers.slice()));

    this.homeService.getAllUsersInGroup(this.groupId).subscribe((data: User[]) => {
      this.allMembers = data;
      this.memberCtrl.setValue(null);
    })
  }
  autoCompleteDisplay = (option: User) => (option && option.fullName ? option.fullName : '');

  addExpense() {
    try {
      let newExpense: Expense = {} as Expense;
      newExpense.billFor = this.addExpenseForm.get('billFor')?.value;
      newExpense.amount = this.addExpenseForm.get('amount')?.value;
      newExpense.paidOn = this.addExpenseForm.get('paidOn')?.value;
      // newExpense.paidBy = this.;
      newExpense.sharedBy = this.members;
      this.homeService.createExpense(newExpense).subscribe()
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
    this.members.push(this.allMembers.find((member: User) => member.fullName === event.option.viewValue)!);
    this.memberInput.nativeElement.value = '';
    this.memberCtrl.setValue(null);
  }

  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase();

    return this.allMembers.filter((member: User) => member.fullName.toLowerCase().indexOf(filterValue) === 0);
  }

  routeBack(){

  }
  isSelected(member: User){

  }

}
