import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{
  @Input()
  contador!: number;

  @Output()
  cambioContador = new EventEmitter<number>();

  constructor(){ }

  ngOnInit(){

  }

  Multiplicar(){
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  Dividir(){
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  resetNieto(cambioContador: number){
    this.contador = cambioContador;
    this.cambioContador.emit(this.contador);
  }

}
