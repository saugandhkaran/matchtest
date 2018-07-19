import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { FormControl } from '../../../node_modules/@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
    
  }

}
