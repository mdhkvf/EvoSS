import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchQuery: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.searchQuery = this.activatedRoute.snapshot.params['query'];

    this.router.events.subscribe((val) =>{
      this.searchQuery = this.activatedRoute.snapshot.params['query'];
    })
  }
}
