import { ParametersUri } from "../models/ParametersUri.interface";

export function encodeURI(params: ParametersUri): string {
  let textEncoded = '?';
  const keys = Object.keys(params);
  for (let i = 0; i <= keys.length - 1; i++) {
    if (params[keys[i]]) {
      textEncoded += keys[i] + '=' + params[keys[i]] + (i === keys.length - 1 ? ''  : '&');
    }
  }
  console.log('encoded url --> ', textEncoded);
  return textEncoded.length > 3 ? textEncoded : '';
}
