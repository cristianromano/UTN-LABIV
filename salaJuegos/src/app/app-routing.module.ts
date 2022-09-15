import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistroComponent } from './registro/registro.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { SobreMiComponent } from './Vistas/sobre-mi/sobre-mi.component';

const routes: Routes = [
{path: 'sobremi',component:SobreMiComponent},
{path: 'juegos',component:JuegoComponent , children:[
  {path: 'nuevo',component:SobreMiComponent},
]},
{path: '',component:LoginComponent},
{path: 'login',component:LoginComponent},
{path: 'registro',component:RegistroComponent},
{path: 'menu',component:MenuComponent},
{path: '**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
