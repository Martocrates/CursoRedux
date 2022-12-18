import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  @Input()
  contador!: number;

  @Output()
  reinicioContador = new EventEmitter<number>();

  constructor(){ }

  ngOnInit(){

  }

  Reset(){
    this.contador = 0;
    this.reinicioContador.emit(this.contador);
  }
}
