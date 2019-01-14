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

    this.searchResults = [{"Id":1,"Name":"Fallout 76","ImageUrl":"https:\/\/games-b26f.kxcdn.com\/wp-content\/uploads\/2018\/09\/5b2d06a95bafe3b3e236f834.jpg","ShortDesc":"A post apocolyptic action RPG.","OfficialUrl":"www.fallout.com","Manufacturer":"Bethesda","OwnerAccountId":null,"CreatedAccountId":null,"CreatedDate":null,"Description":null,"IsActive":null,"IsPrivate":null},{"Id":2,"Name":"EvoSS","ImageUrl":"http:\/\/cdn.24.co.za\/files\/Cms\/General\/d\/7522\/0da8a7337c5c41d4aac23ff28dfca464.jpg","ShortDesc":"A tool to connect products to their audience.","OfficialUrl":"evoss.daakon.com","Manufacturer":"EvoSS","OwnerAccountId":null,"CreatedAccountId":null,"CreatedDate":null,"Description":null,"IsActive":null,"IsPrivate":null},{"Id":3,"Name":"Playstation 4 Pro","ImageUrl":"https:\/\/www.telegraph.co.uk\/content\/dam\/technology\/2016\/11\/09\/ps4-pro_1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450","ShortDesc":"Sony's 4K gaming console.","OfficialUrl":"https:\/\/www.playstation.com\/en-us\/explore\/ps4-pro\/","Manufacturer":"Sony","OwnerAccountId":null,"CreatedAccountId":null,"CreatedDate":null,"Description":null,"IsActive":null,"IsPrivate":null},{"Id":4,"Name":"Xbox One X","ImageUrl":"https:\/\/cdn.vox-cdn.com\/thumbor\/w-Q-EY2bJUU9GJFsAqBVYKGvusE=\/0x0:950x623\/1200x800\/filters:focal(399x236:551x388)\/cdn.vox-cdn.com\/uploads\/chorus_image\/image\/59946211\/Xbox_One_X_Screenshot_05.0.jpg","ShortDesc":"Microsoft's 4K gaming console.","OfficialUrl":"https:\/\/www.xbox.com\/en-us\/xbox-one-x","Manufacturer":"Microsoft","OwnerAccountId":null,"CreatedAccountId":null,"CreatedDate":null,"Description":null,"IsActive":null,"IsPrivate":null}];
    // this.searchService.getSearchResults(this.searchQuery).subscribe(
    //   results => this.searchResults = results.data
    // );    
  }
}
