export interface ICountry {
  name: {
    common: string;
  };
  alpha3Code: string;
  capital: string;
  subregion: string;
  region: string;
  population: number;
  borders?: string[];
  nativeName: string;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  };
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  };
  flags: {
    svg: string;
    png: string;
  };
}
