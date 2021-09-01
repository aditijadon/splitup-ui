export interface Group {
    description:  string;
    groupName:    string;
    id:           number;
    member:       Member[];
    transactions: Transaction[];
}

export interface Member {
    email:    string;
    fullName: string;
    id:       number;
    phone:    string;
    userName: string;
}

export interface Transaction {
    amount:   number;
    billFor:  string;
    groupId:  number;
    id:       number;
    paidBy:   PaidBy;
    paidOn:   string;
    sharedBy: Member[];
}

export interface PaidBy {
    [key: string]: number;
}
