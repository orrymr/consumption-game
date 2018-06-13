import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ItemService {

  private heroesUrl = 'http://localhost:8080/story?page=0';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
  	return this.http.get<Item[]>(this.heroesUrl)
  }

}
