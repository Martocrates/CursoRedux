import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { DecrementarAction, IncremetarAction } from './contador/contador.action';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador!: number;

  constructor(private store: Store<AppState>) {
    //this.contador = 10;

    this.store.subscribe(state=> {
      this.contador = state.contador;
      //console.log(state);
    })


  }

  incrementar(){
   // this.contador ++;

   const accion = new IncremetarAction();

   this.store.dispatch (accion);
  }
  decrementar(){
   // this.contador --;
    const accion = new DecrementarAction();
   this.store.dispatch (accion);
  }
}
