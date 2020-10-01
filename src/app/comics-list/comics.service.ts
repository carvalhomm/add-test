import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MARVEL_API, MARVEL_PUBLIC_KEY } from '../constants/marvel.constant';
import { encodeURI } from '../utils/encodeUri.util';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  constructor(private httpClient: HttpClient) {}
  public callComicsApi(titleStartsWith: string, offset: number, limit: number, orderBy: string): Promise<any> {
    const apikey = MARVEL_PUBLIC_KEY;
    return this.httpClient.get(MARVEL_API + 'comics' + encodeURI({titleStartsWith, offset, limit, apikey, orderBy})).toPromise();
  }
}
