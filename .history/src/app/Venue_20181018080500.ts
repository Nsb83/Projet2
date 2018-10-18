export class Venue {
  name: string;
  city: string;
  country: string;
  street: string;
  uri: string;

  constructor(name : string, city, country, street, uri) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.street = street;
    this.uri = uri;
  }
}
