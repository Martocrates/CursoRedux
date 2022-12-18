import { Action } from "@ngrx/store";


export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';

export class IncremetarAction implements Action {

  readonly type =INCREMENTAR;
}

export class DecrementarAction implements Action {

  readonly type =DECREMENTAR;
}
