import { Action } from "@ngrx/store";
import { DECREMENTAR, INCREMENTAR } from "./contador.action";

export function contadorReducer ( state: number = 10, action: Action){

  switch ( action.type){
    case INCREMENTAR:
      return state + 1;

    case DECREMENTAR:
      return state - 1;

    default:
      return state;
  }
}
