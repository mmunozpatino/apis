import {Injectable} from '@angular/core'
import {Http, RequestOptions, Headers} from '@angular/http'

@Injectable()
export class LocalizacionService {
    url = "https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=";
    lat: string;
    long: string;
    constructor(private http : Http){}
    get(){
        var headers = new Headers({
                                    "X-Mashape-Key": "SR9rf78HUwmshpE0gNasELFpNjSap1GocjSjsnlqAv8J8XE8wc",
                                    "Accept": "application/json"
                                });
        var option = new RequestOptions({headers: headers});
        return this.http.get(this.url+'Mendoza',option).map(res => res.json())
    }
    buscarCity(c: string){
        var headers = new Headers({
                                    "X-Mashape-Key": "SR9rf78HUwmshpE0gNasELFpNjSap1GocjSjsnlqAv8J8XE8wc",
                                    "Accept": "application/json"
                                });
        var option = new RequestOptions({headers: headers});
        return this.http.get(this.url+c,option).map(res => res.json())
    }
   
}