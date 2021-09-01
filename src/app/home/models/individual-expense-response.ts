export interface Expense {
  amount:   number;
  billFor:  string;
  groupId:  number;
  id:       number;
  paidBy:   PaidBy;
  paidOn:   string;
  sharedBy: Member[];
}

export interface Member {
  email:    string;
  fullName: string;
  id:       number;
  phone:    string;
  userName: string;
}

export interface PaidBy {
  [key: string]: number;
}
