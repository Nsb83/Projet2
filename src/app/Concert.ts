 export class Concert {
    name: string;
    artistName: string;
    venueName: string;
    id: number;
    uri: string;
    city: string;
    lat: number;
    lng: number;
    date: string;
    time: string;

      
    constructor (name: string, artistName: string, venueName: string, id: number, uri: string, city: string, lat: number, lng: number, date: string, time: string){
        this.name = name;
        this.artistName = artistName;
        this.venueName = venueName;
        this.id= id;
        this.uri = uri;
        this.city = city;
        this.lat = lat;
        this.lng = lng;
        this.date = date;
        this.time = time;
     }
 }
