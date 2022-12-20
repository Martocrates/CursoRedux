import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { DecrementarAction, IncremetarAction } from './contador/contador.action';
import { PokemonService } from './services/pokemon.service';

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

  name!: string;
  urlImage: any;

  constructor(private store: Store<AppState>, private pokemonService : PokemonService) {
    this.store.subscribe(state=> {
      this.contador = state.contador;
      this.urlImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
      //console.log(state);
    })
    ngOnInit(); void {
    }
  }

  incrementar(){
    this.contador ++;

   const accion = new IncremetarAction();

   this.pokemonService.getPokemonPorId(this.contador).subscribe((data:any)=> {
    this.urlImage = data.sprites.front_default
    this.name = data.name;

    console.log(data);

  });

   this.store.dispatch (accion);
  }
/*   -------=============================================== */
  decrementar(){
   this.contador --;
    const accion = new DecrementarAction();
    this.pokemonService.getPokemonPorId(this.contador).subscribe((data:any)=> {
      this.urlImage = data.sprites.front_default
      this.name = data.name;

      console.log(data);

    });

   this.store.dispatch (accion);
  }
}
function ngOnInit() {

}

