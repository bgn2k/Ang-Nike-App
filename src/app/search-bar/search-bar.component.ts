import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
setSearchText(val : HTMLInputElement) {
  // console.log(val.value)
  this.searchInput = val.value
  this.onSearchTextChange.emit(this.searchInput);

}
  searchInput: string = '';
  // To pass data from child to Parent
  // first we need to create an event.
  @Output()
  onSearchTextChange: EventEmitter<string> = new EventEmitter<string>();

  //After creating an event we need to create a func when that event is being triggered.
  //Create a trigger handler func
  handleSearchChange() {
    this.onSearchTextChange.emit(this.searchInput);
  }
}
