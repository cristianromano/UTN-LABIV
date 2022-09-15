import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { NombreComponent } from './carpeta/nombre/nombre.component';
import { FormsModule } from '@angular/forms';
import { SobreMiComponent } from './Vistas/sobre-mi/sobre-mi.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {provideAuth , getAuth} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { ReactiveFormsModule} from '@angular/forms' 
import { FormBuilder } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from './services/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    NombreComponent,
    SobreMiComponent,
    NotFoundComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(()=> initializeApp(environment.firebase)),
    provideAuth(()=>getAuth()),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
