import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SpotifyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpotifyServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SpotifyServiceProvider Provider');
  }

  searchByTrack(query: String){
    let params: String = [
      `q=${query}`
      ,`type=track`
    ].join("&");

    let queryUrl = `http//api.spotify.com/v1/search?=${params}`;
    return this.http.request(queryUrl).map(res => res.json());
    
  }

}
