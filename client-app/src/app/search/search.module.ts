import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TagSearchComponent } from './components/tag-search/tag-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchResultsComponent, SearchBarComponent, TagSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'search/:query', component: SearchResultsComponent },
      { path: 'search', component: SearchResultsComponent }
    ])    
  ],
  exports: [
    SearchBarComponent,
    SearchResultsComponent,
    TagSearchComponent
  ]
})
export class SearchModule { }
