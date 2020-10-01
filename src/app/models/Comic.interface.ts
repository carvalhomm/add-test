export interface Comic {
  characters: { available: number; collectionURI: string; items: { name: string; resourceURI: string; }[] };
  creators: { available: number; collectionURI: string;  items: { name: string; resourceURI: string; }[] };
  dates: { date: string; type: 'onsaleDate' | 'focDate'; }[];
  description: string;
  digitalId: number;
  format: string;
  id: number;
  images: { extension: string; path: string; }[];
  modified: string;
  pageCount: number;
  prices: { price: number; type: 'printPrice' }[];
  resourceURI: string;
  series: { resourceURI: string; name: string; };
  stories: { available: number; collectionURI: string; };
  thumbnail: { path: string; extension: string; };
  title: string;
  urls: { type: 'detail'; url: string; }[];
}
