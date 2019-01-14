import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TagSearchComponent } from './components/tag-search/tag-search.component';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [SearchResultsComponent, SearchBarComponent, TagSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'search/:query', component: SearchResultsComponent },
      { path: 'search', component: SearchResultsComponent }
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ProductModule
  ],
  exports: [
    SearchBarComponent,
    SearchResultsComponent,
    TagSearchComponent
  ]
})
export class SearchModule { }
