import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

usuario:Usuario = new Usuario();

  constructor() {
    // this.usuario.nombre = ''; 
    // this.usuario.apellido = '';
  }


  ngOnInit():void{
    this.usuario.nombre =  "";
    console.log(this.usuario);
  }

  // cambiarNombre():void{
  //   this.usuario.nombre = "Cambiado";
  //   this.usuario.apellido = "Variables";
  // }



}
