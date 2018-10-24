export class City {
  id: number;
  uri: string;
  name: string;
  country: string;
  lat: number;
  lng: number;

  constructor(
    id: number,
    uri: string,
    name: string,
    country: string,
    lat: number,
    lng: number
  ) {
    this.id = id;
    this.uri = uri;
    this.name = name;
    this.country = country;
    this.lat = lat;
    this.lng = lng;
  }
}
