 export class Concert {
    name: string;
    artistName: string;
    venueName: string;
    venueId: number;
    id: number;
    status: string;
    uri: string;
    city: string;
    lat: number;
    lng: number;
    dateTime: string;
    date: string;
    artistId: number;
    endingDate: string;

    constructor (
        name: string,
        artistName: string,
        venueName: string,
        venueId: number,
        id: number,
        status: string,
        uri: string,
        city: string,
        lat: number,
        lng: number,
        dateTime: string,
        date?: string,
        artistId?: number,
        endingDate?: string
        ) {
        this.name = name;
        this.artistName = artistName;
        this.venueName = venueName;
        this.venueId = venueId;
        this.id = id;
        this.status = status;
        this.uri = uri;
        this.city = city;
        this.lat = lat;
        this.lng = lng;
        this.dateTime = dateTime;
        this.date = date;
        this.artistId = artistId;
        this.endingDate = endingDate;
     }
 }
