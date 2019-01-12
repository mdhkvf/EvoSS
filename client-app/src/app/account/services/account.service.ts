import { Injectable } from '@angular/core';
import { IAccount } from '../interfaces/iaccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  public getAccountDetail(): IAccount {
    return {
      AccountId: 0,
      UserName: 'John Wick',
      AccountImage: 'https://pixel.nymag.com/imgs/daily/vulture/2017/02/07/07-john-wick-2-2.w250.h250.jpg'
    }
  }
}
