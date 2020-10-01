import { Comic } from './Comic.interface';
import { Character } from './Character.interface';
export interface MarvelResultModel {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: {offset: 20, limit: 30, total: 47697, count: 30, results: Comic[] | Character[]};
  etag: string;
  status: string;
}
