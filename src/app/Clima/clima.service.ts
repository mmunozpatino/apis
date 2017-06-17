import {Injectable} from '@angular/core'
import {Http, RequestOptions, Headers} from '@angular/http'

@Injectable()
export class ClimaService{    
    URL0 ='https://api.apixu.com/v1/forecast.json?key=2cbfc95f725342f284e141524171505&q='//lat,long
    URL1 = '&days=5&lang=es'
    constructor(private http: Http){}
    get(){
        return this.http.get(this.URL0).map(data => data.json())
    }
    consultarClima(lat: string, long:string){
        return this.http.get(this.URL0+lat+','+long+this.URL1).map(data => data.json())
    }
}