import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MARVEL_API, MARVEL_PUBLIC_KEY } from '../constants/marvel.constant';
import { encodeURI } from '../utils/encodeUri.util';
import { ApiResultModel } from '../models/ApiResultModel.interface';
import { MarvelResultModel } from '../models/MarvelResultModel.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private loading = false;
  constructor(private httpClient: HttpClient) {}
  public callCharactersApi(nameStartsWith: string, offset: number, limit: number, orderBy: string, name?: string):
  Promise<ApiResultModel> {
    if (this.loading) { return Promise.resolve(null); }
    const apikey = MARVEL_PUBLIC_KEY;
    this.loading = true;
    return this.httpClient.get(MARVEL_API + 'characters' + encodeURI({nameStartsWith, offset, limit, apikey,
    orderBy, name})).toPromise().then((characters: MarvelResultModel) => {
      this.loading = false;
      if (characters.code === 200) {
        return { mode: offset === 0 ? 'initial' as 'initial' : 'aggregate' as 'aggregate', data: characters.data.results};
      } else {
        return { error: true };
      }
    }).catch(err => {
      console.log('error API Marvel --> ', err);
      return { error: true };
    });
  }
}
