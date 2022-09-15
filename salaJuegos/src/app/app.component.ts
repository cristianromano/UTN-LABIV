import { Component, OnInit } from '@angular/core';
import { Usuario } from './Entidades/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  usuario:Usuario = new Usuario();
  title = 'salaJuegos';



  ngOnInit():void{
    this.usuario.nombre = "CRISTIAN";
    localStorage.setItem("usuario",JSON.stringify(this.usuario));
  }

 
}

