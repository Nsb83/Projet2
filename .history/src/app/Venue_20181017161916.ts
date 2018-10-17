export class Venue {
  name: string;
  city: string;
  country: string;
  uri: string;

  constructor(name, city, country, uri) {
    (this.name = name), (this.city = city), (this.country = country);
    (this.uri = uri);
  }
}
