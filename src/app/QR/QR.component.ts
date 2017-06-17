import {Component, OnInit} from '@angular/core'
import { QRService} from './QR.service'
import { Observable } from "rxjs/Observable";
import { FormsModule }   from '@angular/forms';
import {IconoCarga} from '../iconoCarga.component';
import {InfoComponent} from '../Info/info.component';

@Component({
    selector: 'qr',
    templateUrl: './QR.component.html',
    styleUrls: ['./QR.component.css']
})
export class QRComponent implements OnInit{
    imagen: string;
    esta: boolean;
    opcion: string;
    loading : boolean;
    data : boolean;
    api = 'QR code generator with multiple datatypes ';
    src = 'https://market.mashape.com/ajith/qr-code-generator-with-multiple-datatypes-'
    constructor(private service: QRService){}
    ngOnInit(){}
    generar(value: string){
        this.loading = true;
        this.service.generar(this.opcion, value).then(res => {this.imagen = res.url;this.loading = false; this.esta= true});
    }
    info(){
        this.data= true;
    }
    cerrar(){
        this.data = false
    }
}