export class Venue {
  name: string;
  city: string;
  country: string;
  street: string;
  zip: string;
  uri: string;
  id: number;
  lat: number;
  lng: number;
  website: string;
  description: string;
  cityId: number;

  constructor(
    name: string,
    city: string,
    country: string,
    street: string,
    zip: string,
    uri: string,
    id: number,
    lat: number,
    lng: number,
    website: string,
    description: string,
    cityId: number
  ) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.street = street;
    this.zip = zip;
    this.uri = uri;
    this.id = id;
    this.lat = lat;
    this.lng = lng;
    this.website = website;
    this.description = description;
    this.cityId = cityId;
  }
}
