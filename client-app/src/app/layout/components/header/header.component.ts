import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerLeftCol: number = 4;
  public headerRightCol: number = 8;
  public numCols: number = 12;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe(result => {
      if (result.matches) {
        this.activeMobileLayout();
      }
    });

    this.breakpointObserver.observe([
      Breakpoints.Small
    ]).subscribe(result => {
      if (result.matches) {
        this.activeDesktopLayout();
      }
    });    
  }

  public activeMobileLayout(): void {
    this.numCols = 1;
    this.headerLeftCol = 1;
    this.headerRightCol = 1;
  }

  public activeDesktopLayout(): void {
    this.numCols = 12;
    this.headerLeftCol = 4;
    this.headerRightCol = 8;
  }

}
