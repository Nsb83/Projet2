 export class Concert {
    name: string;
    artistName: string;
    venueName: string;
    id: number;
    uri: string;
    city: string;
    lat: number;
    lng: number;
    dateTime: string;
    date: string;

    constructor (
        name: string,
        artistName: string,
        venueName: string,
        id: number,
        uri: string,
        city: string,
        lat: number,
        lng: number,
        dateTime: string,
        date?: string
        ) {
        this.name = name;
        this.artistName = artistName;
        this.venueName = venueName;
        this.id = id;
        this.uri = uri;
        this.city = city;
        this.lat = lat;
        this.lng = lng;
        this.dateTime = dateTime;
        this.date = date;
     }
 }
