import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

//import {MovieComponent} from './MovieAPI/movie.component'
import {VerifMailComponent} from './VerifMail/verifMail.component'
import {QRComponent} from './QR/QR.component'
import {InicioComponent} from './Inicio/inicio.component'
import {LocalizacionComponent} from './Clima/localizacion.component'

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path: 'inicio', component: InicioComponent},
    //{path: 'movie', component: MovieComponent},
    {path: 'mail', component: VerifMailComponent},
    {path: 'qr', component: QRComponent},
    {path: 'localizacion', component: LocalizacionComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouter{}