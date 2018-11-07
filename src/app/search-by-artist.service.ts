import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Artist } from './Artist';
import { Venue } from './Venue';
import { City } from './City';
import { Concert } from './Concert';
import { SimilarArtist } from './similar-artist';
import { Video } from './Video';

@Injectable({
  providedIn: 'root'
})
export class SearchByArtistService {

  public chosenArtist: Artist;
  public chosenVenue: Venue;
  public chosenCity: City;

  constructor(private http: HttpClient) { }

  setChosenArtist(chosenArtist) {
    this.chosenArtist = chosenArtist;
  }

  setChosenVenue(chosenVenue) {
    this.chosenVenue = chosenVenue;
  }

  setChosenCity(chosenCity) {
    this.chosenCity = chosenCity;
  }

  getChosenArtist() {
    return this.chosenArtist;
  }

  getOneArtist(artistId) {
    return this.http.get<any>(`http://api.songkick.com/api/3.0/artists/${artistId}.json?apikey=R82Hox7PJZDJyV0G`);
  }

  getChosenVenue() {
    return this.chosenVenue;
  }

  getOneVenue(venueId) {
    return this.http.get<any>(`https://api.songkick.com/api/3.0/venues/${venueId}.json?apikey=R82Hox7PJZDJyV0G`);
  }

  getChosenCity() {
    return this.chosenCity;
  }

  getOneCity(cityId) {
    return this.http.get<any>(`https://api.songkick.com/api/3.0/metro_areas/${cityId}/calendar.json?apikey=R82Hox7PJZDJyV0G`);
  }

  getArtists(userInput) {
    const artists: Artist[] = [];

    this.http.get<any>(`https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=${userInput}`)
      .subscribe((res: any) => {
        const artistes = res.resultsPage.results.artist;
        if (artistes) {
          for (const artist of artistes) {
            const unArtiste = new Artist(
              artist.displayName,
              artist.id,
              artist.onTourUntil,
              artist.uri
            );

            this.getImgDescr(unArtiste.name)
              .subscribe((data: any) => {
                if (data.artist) {
                  unArtiste.image = data.artist.image[3]['#text'];
                  unArtiste.summary = data.artist.bio.summary;
                  artists.push(unArtiste);
                }
              });
          }
        }
      });

    return artists;
  }

  getImgDescr(artistName) {
    return this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&autocorrect=1&api_key=9b7579d5f409106928353935ac0ab5ab&format=json`);
  }

  getVenues(userInput) {
    const venues: Venue[] = [];

    this.http.get<any>(`https://api.songkick.com/api/3.0/search/venues.json?query=${userInput}&apikey=R82Hox7PJZDJyV0G`)
      .subscribe((res: any) => {
        const venuess = res.resultsPage.results.venue;
        if (venuess) {
        for (const venue of venuess) {
          const aVenue = new Venue(
            venue.displayName,
            venue.city.displayName,
            venue.city.country.displayName,
            venue.street,
            venue.zip,
            venue.uri,
            venue.id,
            venue.lat,
            venue.lng,
            venue.website,
            venue.description
          );

          venues.push(aVenue);
        }
        }
      });

    return venues;
  }

  getCities(userInput) {
    const cities: City[] = [];
    this.http.get<any>(`https://api.songkick.com/api/3.0/search/locations.json?query=${userInput}&apikey=R82Hox7PJZDJyV0G`)
      .subscribe((data: any) => {
        const citiesTable = data.resultsPage.results.location;
        if (citiesTable) {
        for (const city of citiesTable) {
          const aCity = new City(
            city.metroArea.id,
            city.metroArea.uri,
            city.city.displayName,
            city.metroArea.country.displayName,
            city.metroArea.lat,
            city.metroArea.lng
          );
          cities.push(aCity);
        }
      }
      });

    return cities;
  }

   getVenueConcerts(venueId) {
     const concerts: Concert[] = [];

     this.http.get<any>(`https://api.songkick.com/api/3.0/venues/${venueId}/calendar.json?apikey=R82Hox7PJZDJyV0G`)
     .subscribe((reponse: any) => {
      const concertTable = reponse.resultsPage.results.event;
      if (concertTable) {
        for (const concert of concertTable) {
          if (concert.type === 'Concert') {
            const aConcert = new Concert(
              concert.displayName,
              concert.performance[0].displayName,
              concert.venue.displayName,
              concert.venue.id,
              concert.id,
              concert.status,
              concert.uri,
              concert.location.city,
              concert.venue.metroArea.id,
              concert.location.lat,
              concert.location.lng,
              concert.start.datetime,
              concert.start.date,
              concert.performance[0].artist.id,
            );
            concerts.push(aConcert);
          } else {
            const aConcert = new Concert(
              concert.displayName,
              concert.performance[0].displayName,
              concert.venue.displayName,
              concert.venue.id,
              concert.id,
              concert.status,
              concert.uri,
              concert.location.city,
              concert.venue.metroArea.id,
              concert.location.lat,
              concert.location.lng,
              concert.start.datetime,
              concert.start.date,
              concert.performance[0].artist.id,
              concert.end.date
            );
            concerts.push(aConcert);
          }

        }
      }
      });

    return concerts;
   }

   getCityConcerts(cityId) {
     const concerts: Concert[] = [];

     this.http.get<any>(`https://api.songkick.com/api/3.0/metro_areas/${cityId}/calendar.json?apikey=R82Hox7PJZDJyV0G`)
     .subscribe((reponse: any) => {
          const concertTable = reponse.resultsPage.results.event;
          if (concertTable) {
            for (const concert of concertTable) {
              if (concert.type === 'Concert') {
                const aConcert = new Concert(
                  concert.displayName,
                  concert.performance[0].displayName,
                  concert.venue.displayName,
                  concert.venue.id,
                  concert.id,
                  concert.status,
                  concert.uri,
                  concert.location.city,
                  concert.venue.metroArea.id,
                  concert.location.lat,
                  concert.location.lng,
                  concert.start.datetime,
                  concert.start.date,
                  concert.performance[0].artist.id,
                );
                concerts.push(aConcert);
              } else {
                const aConcert = new Concert(
                  concert.displayName,
                  concert.performance[0].displayName,
                  concert.venue.displayName,
                  concert.venue.id,
                  concert.id,
                  concert.status,
                  concert.uri,
                  concert.location.city,
                  concert.venue.metroArea.id,
                  concert.location.lat,
                  concert.location.lng,
                  concert.start.datetime,
                  concert.start.date,
                  concert.performance[0].artist.id,
                  concert.end.date
                );
                concerts.push(aConcert);
              }

            }
          }
          });
          return concerts;
        }

   getArtistConcerts(artistId) {
    const concerts: Concert[] = [];

     this.http.get<any>(`https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=R82Hox7PJZDJyV0G`)
     .subscribe((reponse: any) => {
              const concertTable = reponse.resultsPage.results.event;
              if (concertTable) {
              for (const concert of concertTable) {
                if (concert.type === 'Concert') {
                  const aConcert = new Concert(
                    concert.displayName,
                    concert.performance[0].displayName,
                    concert.venue.displayName,
                    concert.venue.id,
                    concert.id,
                    concert.status,
                    concert.uri,
                    concert.location.city,
                    concert.venue.metroArea.id,
                    concert.location.lat,
                    concert.location.lng,
                    concert.start.datetime,
                    concert.start.date,
                    concert.performance[0].artist.id,
                  );
                  concerts.push(aConcert);
                } else {
                  const aConcert = new Concert(
                    concert.displayName,
                    concert.performance[0].displayName,
                    concert.venue.displayName,
                    concert.venue.id,
                    concert.id,
                    concert.status,
                    concert.uri,
                    concert.location.city,
                    concert.venue.metroArea.id,
                    concert.location.lat,
                    concert.location.lng,
                    concert.start.datetime,
                    concert.start.date,
                    concert.performance[0].artist.id,
                    concert.end.date
                  );
                  concerts.push(aConcert);
                }

              }
            }
          });

    return concerts;
  }

  getSimilarArtists(artistId) {
    const SimilarArtists: SimilarArtist[] = [];

    this.http.get<any>(`https://api.songkick.com/api/3.0/artists/${artistId}/similar_artists.json?apikey=R82Hox7PJZDJyV0G&page=1`)
      .subscribe((res: any) => {
        const simArtistesTable = res.resultsPage.results.artist;
        if (simArtistesTable) {
          for (const simArtist of simArtistesTable) {
            const unSimilarArtiste = new SimilarArtist(
              simArtist.displayName,
              simArtist.id,
              simArtist.onTourUntil,
              simArtist.uri
            );
            if (simArtist.onTourUntil != null) {
              this.getImgDescr(unSimilarArtiste.name)
              .subscribe((data: any) => {
                if (data.artist) {
                  unSimilarArtiste.image = data.artist.image[2]['#text'];
                  SimilarArtists.push(unSimilarArtiste);
                }
              });
            }
          }
        }
      });
  return SimilarArtists;
  }

  getArtistVideo(artistName) {
    const Videos: Video[] = [];
      this.http.get<any>(`https://www.googleapis.com/youtube/v3/search?q=${artistName}&key=AIzaSyCKvW8IJW1k9S3Lh9gIIHsBmhid8FCvORo&part=snippet`)
      .subscribe((res: any) => {
        const videosTable = res.items;
        if (videosTable) {
          for (const video of videosTable) {
            if (video.id.kind === 'youtube#video') {
              const uneVideo = new Video(
                video.id.videoId,
                video.snippet.title,
                video.snippet.thumbnails.medium.url
              );
            Videos.push(uneVideo);
            }
          }
        }
      });
    return Videos;
  }


}
