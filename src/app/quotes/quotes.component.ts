import { Component, OnInit } from '@angular/core';
import { quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:quotes[] = [
    new quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2019,3,14)),
    new quotes(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new quotes(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,1,12)),
    new quotes(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new quotes(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new quotes(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2019,3,14)),
  ];
  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuotes(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

 

  constructor() { }

  ngOnInit() {
  }

}
