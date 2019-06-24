import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=78118cc43abe4e189e9de9db06acd98e';
  constructor(private http: HttpClient) { }
  getUser() {
    return this.http.get<User[]>(this.url);
  }


}
