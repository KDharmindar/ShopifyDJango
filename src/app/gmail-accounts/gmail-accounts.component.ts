import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmail-accounts',
  templateUrl: './gmail-accounts.component.html',
  styleUrls: ['./gmail-accounts.component.css']
})
export class GmailAccountsComponent implements OnInit {

  rows: Array<Object> = [{
    email: '',
    password: ''
  }];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.rows.push({email: '', password: ''});
  }

}
