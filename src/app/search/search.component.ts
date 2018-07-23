import { Component, OnInit } from '@angular/core';
import{ GetAvatarService} from '../service/get-list-of-names.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers :[]
})

export class SearchComponent implements OnInit {
  constructor(private getAvatarService : GetAvatarService) { }
  avatars;
  ngOnInit() {
    this.avatars = this.getAvatarService.getAvatars().subscribe(data => {
      this.avatars = data.results;
      console.log(this.avatars);
    });
  }
};