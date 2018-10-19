export class Venue {
  name: string;
  city: string;
  country: string;
  street: string;
  uri: string;
  id: number;
  lat: number;
  lng: number;
  website: string;
  description: string;
  
  constructor(
    name: string,
    city: string,
    country: string,
    street: string,
    uri: string,
    id: number,
    lat: number,
    lng: number,
    website: string,
    description: string,
  ) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.street = street;
    this.uri = uri;
    this.id = id;
    this.lat = lat;
    this.lng = lng;
    this.website = website;
    this.description = description;
  }
}
