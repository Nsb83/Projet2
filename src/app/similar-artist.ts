export class SimilarArtist {
    name: string;
    image: string;
    id: number;
    onTourUntil: string;
    uri: string;
  
  
    constructor (name: string,
      id: number,
      onTourUntil: string,
      uri: string,
      image?: string,
      ) {
      this.name = name;
      this.image = image;
      this.id = id;
      this.onTourUntil = onTourUntil;
      this.uri = uri;
    }
}