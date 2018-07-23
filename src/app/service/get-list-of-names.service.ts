import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAvatarService {

  constructor(private http : HttpClient) { }

  getAvatars(): Observable<any> {
      return this.http.get('https://randomuser.me/api/');
  }
}
