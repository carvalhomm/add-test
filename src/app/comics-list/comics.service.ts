import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MARVEL_API, MARVEL_PUBLIC_KEY } from '../constants/marvel.constant';
import { encodeURI } from '../utils/encodeUri.util';
import { ApiResultModel } from '../models/ApiResultModel.interface';
import { MarvelResultModel } from '../models/MarvelResultModel.interface';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  private loading = false;
  constructor(private httpClient: HttpClient) {}
  public callComicsApi(titleStartsWith: string, offset: number, limit: number, orderBy: string, id?: string): Promise<ApiResultModel> {
    if (this.loading) { return Promise.resolve(null); }
    const apikey = MARVEL_PUBLIC_KEY;
    this.loading = true;
    return this.httpClient.get(MARVEL_API + 'comics' + encodeURI({titleStartsWith, offset, limit, apikey,
      orderBy, id})).toPromise().then((comics: MarvelResultModel) => {
      this.loading = false;
      if (comics.code === 200) {
        return { mode: offset === 0 ? 'initial' as 'initial' : 'aggregate' as 'aggregate', data: comics.data.results};
      } else {
        return { error: true };
      }
    }).catch(err => {
      console.log('error API Marvel --> ', err);
      return { error: true };
    });
  }
}
