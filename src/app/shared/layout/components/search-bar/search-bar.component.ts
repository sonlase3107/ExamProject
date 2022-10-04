import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchText = new EventEmitter<string>();
  placeholder:string = '#human,#cry,#women,#carton,#tree,#children,#man,#cute,#weather,#storm,#animal'
  constructor() { }
  ngOnInit(): void {
  }
  valueText: string = ''
  doSearch() {
    this.transferOutput()
  }
  //sending event (text search) to parent component to process searching
  transferOutput() {
    this.searchText.emit(this.valueText)
  }
  
}
