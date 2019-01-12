import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from '../search/search.module';
import { AccountModule } from '../account/account.module';
import { MatGridListModule } from '@angular/material/grid-list';

MatIconModule
@NgModule({
  declarations: [HeaderComponent, FooterComponent, LeftNavComponent, HamburgerMenuComponent, HomePageComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    SearchModule,
    AccountModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavComponent,
  ]
})
export class LayoutModule { }
