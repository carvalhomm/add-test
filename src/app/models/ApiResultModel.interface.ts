import { Character } from './Character.interface';
import { Comic } from './Comic.interface';

export interface ApiResultModel {
  mode?: 'initial' | 'aggregate';
  data?: Comic[] | Character[];
  error?: boolean;
}
