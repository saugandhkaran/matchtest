import { Component, OnInit } from '@angular/core';
import{ GetAvatarService} from '../service/get-list-of-names.service';
import { Avatar } from '../model/avatars';
import { Like } from '../model/like';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers :[Avatar]
})

export class SearchComponent implements OnInit {
  constructor(private getAvatarService : GetAvatarService) { }
  avatars:Avatar[];
  
  

  ngOnInit() {
   

    this.getAvatarService.getAvatars().subscribe(
      avatars=> this.avatars= avatars
    );
    console.log(this.avatars)
  }

}
