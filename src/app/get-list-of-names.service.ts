import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetListOfNamesService {

  constructor() { }

  personCharachteristics = [{
    name: 'Vivek Vishal',
    likes : [{
      activity : 'Sports',
      rating : 5
     },{
      activity : 'Movies',
      rating : 3
    },{
      activity : 'Travel',
      rating : 1
    },{
      activity : 'Romantic',
      rating : 3
    },{
      activity : 'Work',
      rating : 4
    }],
    location : 'Lelylaan'
  },
  {
    name: 'Akshay Bapusaheb',
    likes : [{
      activity : 'Sports',
      rating : 3
     },{
      activity : 'Movies',
      rating : 4
    },{
      activity : 'Travel',
      rating : 4
    },{
      activity : 'Romantic',
      rating : 0
    },{
      activity : 'Work',
      rating : 4
    }],
    location : 'Lelylaan'
  }, 
  {
    name: 'Avinash Tomar',
    likes : [{
      activity : 'Sports',
      rating : 3
     },{
      activity : 'Movies',
      rating : 1
    },{
      activity : 'Travel',
      rating : 3
    },{
      activity : 'Romantic',
      rating : 2
    },{
      activity : 'Work',
      rating : 4
    }],
    location : 'Ganzenhoef'
  },
  {
    name: 'Sathish Babu T',
    likes : [{
      activity : 'Sports',
      rating : 5
     },{
      activity : 'Movies',
      rating : 3
    },{
      activity : 'Travel',
      rating : 1
    },{
      activity : 'Romantic',
      rating : 0
    },{
      activity : 'Work',
      rating : 4
    }],
    location : 'Amstelveen'
  }];

  getNames(){

  }
}
