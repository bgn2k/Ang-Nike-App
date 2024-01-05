import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyApp';

  // This search text is the result of the Child to Parent comp communitcation which was being done with Output()
  searchText: string = '';

  setSearchText(val: string) {
    this.searchText = val;
  }
}
