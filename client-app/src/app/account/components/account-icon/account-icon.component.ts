import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { IAccount } from '../../interfaces/iaccount';

@Component({
  selector: 'app-account-icon',
  templateUrl: './account-icon.component.html',
  styleUrls: ['./account-icon.component.scss']
})
export class AccountIconComponent implements OnInit {
  public account: IAccount = null;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.account = this.accountService.getAccountDetail();
  }

}
