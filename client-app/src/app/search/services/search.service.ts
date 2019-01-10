import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  public getSearchSuggestions(query: string): string[] {
    //TODO implement real logic
    let strList: string[] = [
      "is this it?",
      "how bout this?",
      "thats all i got"
    ]

    let rtnList: string[] = [];
    for (let x = 0; x < strList.length; x++) {
      if (strList[x].includes(query))
      {
        rtnList.push(strList[x]);
      }
    }

    return rtnList;
  }
}
