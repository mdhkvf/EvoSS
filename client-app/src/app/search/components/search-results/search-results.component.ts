import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/product/interfaces/iproduct';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchQuery: string = null;
  public searchResults: IProduct[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
    ) { }

  ngOnInit() {
    this.searchQuery = this.activatedRoute.snapshot.params['query'];

    this.router.events.subscribe((val) =>{
      this.searchQuery = this.activatedRoute.snapshot.params['query'];
    });

    this.searchService.getSearchResults(this.searchQuery).subscribe(
      results => this.searchResults = results.data
    );    
  }
}
