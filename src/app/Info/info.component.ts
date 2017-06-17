import { Component, Input } from '@angular/core'

@Component({
    selector: 'info',
    templateUrl: 'info.component.html',
    styleUrls: ['info.component.css']
})

export class InfoComponent{
    @Input() api: string;
    @Input() src: string;
    @Input() api2: string;
    @Input() src2: string;
    data: boolean;
    info(){
        this.data= true;
    }
    cerrar(){
        this.data = false;
    }
}