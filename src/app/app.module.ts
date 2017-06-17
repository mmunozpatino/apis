import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AppRouter} from './app.route'

import { VerifMailComponent} from './VerifMail/verifMail.component'
import { VerifMailService} from './VerifMail/verifMail.service'

import {QRComponent} from './QR/QR.component'
import {QRService} from './QR/QR.service'

import {InicioComponent} from './Inicio/inicio.component'

import {LocalizacionComponent} from './Clima/localizacion.component'
import {LocalizacionService} from './Clima/localizacion.service'

import {ClimaService} from './Clima/clima.service'
import {IconoCarga} from './iconoCarga.component'
import {InfoComponent} from './Info/info.component'

 
@NgModule({
  declarations: [
    AppComponent,
    VerifMailComponent,
    QRComponent,
    InicioComponent,
    LocalizacionComponent,
    IconoCarga,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  providers: [
    VerifMailService,
    QRService,
    LocalizacionService,
    ClimaService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
