import {Component} from '@angular/core'
import {VerifMailService} from './verifMail.service'
import {IconoCarga} from '../iconoCarga.component'
import {InfoComponent} from '../Info/info.component'
@Component({
    selector:'verif-mail',
    templateUrl: './verfiMail.component.html'
})

export class VerifMailComponent{
    respuesta; 
    cargando: boolean;
    data: boolean;
    apiOk: boolean;
    api= 'Email Validator';
    src= 'https://market.mashape.com/pozzad/email-validator-1';
    constructor(private service: VerifMailService){}
    verificar(m: string){
        this.cargando = true;
        this.service.verificar(m).subscribe(res => {this.respuesta = res.isValid;
                                                    this.cargando = false;
                                                    this.apiOk= true;})
        
    }
    
    info(){
        this.data = true;
    }
    cerrar(){
        this.data = false;
    }
}