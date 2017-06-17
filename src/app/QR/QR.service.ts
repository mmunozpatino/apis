import{Injectable, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class QRService implements OnInit{
    url1 = 'https://codzz-qr-cods.p.mashape.com/getQrcode?type='
    url2= '&value='
    constructor(private http : Http){}
    ngOnInit(){}
    get(){
        var headers = new Headers()
        headers.append("X-Mashape-Key", "90Zg7Qqo56mshXz8UsNv5NWxK0Ypp1wuckOjsnnT9QGF0vwL0g")
        headers.append("Accept", "application/json")
        var option = new RequestOptions({headers: headers})
        return this.http.get(this.url1+'url'+this.url2+'www.google.com', option).map(res => res.json())
    }
    generar(opcion: string, value: string){
        var headers = new Headers()
        headers.append("X-Mashape-Key", "90Zg7Qqo56mshXz8UsNv5NWxK0Ypp1wuckOjsnnT9QGF0vwL0g")
        headers.append("Accept", "application/json")
        var option = new RequestOptions({headers: headers})
        return this.http.get(this.url1+opcion+this.url2+value, option).toPromise().then(res => res.json())
    }
}