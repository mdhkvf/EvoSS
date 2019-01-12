import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountIconComponent } from './components/account-icon/account-icon.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [AccountDetailComponent, AccountIconComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'account-detail', component: AccountDetailComponent }
    ]),
    MatMenuModule,
  ],
  exports: [
    AccountDetailComponent,
    AccountIconComponent
  ]
})
export class AccountModule { }

