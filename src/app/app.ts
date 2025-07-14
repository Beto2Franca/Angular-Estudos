import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import {HelloWorldComponent} from './helloworld/helloworld.component'
// import { Minhapagina } from "./minhapagina/minhapagina";
import {Calculadora} from './calculadora/calculadora'
import {ListaCompras} from './lista-compras/lista-compras'

@Component({
  selector: 'app-root',
  imports: [ListaCompras],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'conceitos-basicos';
}
