export class Artist {
  name: string;
  image: string;
  id: number;
  onTourUntil: string;
  summary: string;
  uri: string;


  constructor (name: string, id: number, onTourUntil:string, uri: string, image?: string, summary?: string){
    this.name = name;
    this.image = image;
    this.id= id;
    this.onTourUntil = onTourUntil;
    this.summary = summary;
    this.uri = uri;
  }

}
