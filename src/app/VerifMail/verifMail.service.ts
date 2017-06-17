import { Injectable, OnInit } from '@angular/core'
import { Http, RequestOptions, Headers} from '@angular/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class VerifMailService implements OnInit{
    url = 'https://pozzad-email-validator.p.mashape.com/emailvalidator/validateEmail/'
    mail ='john@gmail.com'

    constructor(private http : Http){}
    ngOnInit(){}


    verificar(m: string){
        var headers = new Headers()
        headers.append("X-Mashape-Key", "90Zg7Qqo56mshXz8UsNv5NWxK0Ypp1wuckOjsnnT9QGF0vwL0g")
        headers.append("Accept", "application/json")
        var option = new RequestOptions({headers: headers})
        return this.http.get(this.url+m, option).map(res => res.json())
    }
    
}