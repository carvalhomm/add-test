export interface Character {
  comics: { available: number, collectionURI: string, items: { name: string; resourceURI: string; }[]; };
  description: string;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  thumbnail: { path: string; extension: string; };
}
