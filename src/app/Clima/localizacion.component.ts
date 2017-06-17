import {Component} from '@angular/core'
import {LocalizacionService} from './localizacion.service'
import {ClimaService} from './clima.service'
import {IconoCarga} from '../iconoCarga.component'
import {InfoComponent} from '../Info/info.component'

@Component({
    selector: 'localizacion',
    templateUrl: 'localizacion.component.html',
    styleUrls: ['location.component.css']
})

export class LocalizacionComponent{
    rta: any;
    loading: boolean;
    lat:string;
    long: string;
    select: any;
    respuestas: boolean;
    tiempo: any;
    ta: number;
    data: boolean;
    consulta: boolean;
    mostrar: boolean;
    api = 'City Geo-Location Lookup';
    src = 'https://market.mashape.com/dev132/city-geo-location-lookup';
    api2= 'Apixu Weather API';
    src2= 'https://www.apixu.com/doc/';
    constructor (private service: LocalizacionService,
                private clima: ClimaService){}
    Mostrar(){
        if(this.mostrar){
            this.mostrar = false;
        }else{
            this.mostrar = true;
        }
        
    }
    mostrar2: boolean;
    Mostrar2(){
        if(this.mostrar2){
            this.mostrar2 = false;
        }else{
            this.mostrar2 = true;
        }
    }    
    mostrar3: boolean;
    Mostrar3(){
        if(this.mostrar3){
            this.mostrar3 = false;
        }else{
            this.mostrar3 = true;
        }
    }    
    mostrar4: boolean;
    Mostrar4(){
        if(this.mostrar4){
            this.mostrar4 = false;
        }else{
            this.mostrar4 = true;
        }
    }    
    get(){
        console.log('GET')
        this.loading = true;
        this.service.get().subscribe( data => {this.rta = data;
                                                this.loading = false})
    }
    noResults(){
        this.consulta = false;

    }
     selectCity(c: any){
        console.log('entro a fc')
        this.select = this.rta.Results.filter(d => d.name == c.name);
        console.log(JSON.stringify(this.select[0]))
        this.lat = this.select[0].lat;
        this.long = this.select[0].lon;
        console.log(this.lat, this.long);
        this.respuestas= false;        
        this.constultarClima()
    }
    buscarCity(c: string){
        
        this.loading = true;
        this.consulta = false;
        
        this.service.buscarCity(c).subscribe( data => {this.rta = data;
                                                        this.respuestas= true;
                                                    this.loading= false;})
        
    }
    constultarClima(){
        this.loading = true;
        this.clima.consultarClima(this.lat,this.long).subscribe(data => {this.tiempo = data;
            console.log(JSON.stringify(this.tiempo));
                                                                        this.loading = false;
                                                                    this.respuestas= false;
                                                                this.consulta = true;})
                                                                    
        //this.ta = this.convertirTemp(this.tiempo.main.temp)
    }
}