import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {quotes} from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quotes:quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit() {
  }

}
