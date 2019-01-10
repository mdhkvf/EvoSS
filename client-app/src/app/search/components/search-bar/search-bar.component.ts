import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public myControl: FormControl = new FormControl();
  public options: string[];

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {  
    // this.myControl.registerOnChange(this.getSuggestions);
  }

  ngOnChanges() {
    
  }

  public getSuggestions(query: string) : void {
    this.options = this.searchService.getSearchSuggestions(query);  
  }

  public executeSearch(): void {
    if (this.myControl.value !== null) {
      this.router.navigateByUrl('/search/' + this.myControl.value);
    }
  }
}
