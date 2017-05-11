import {
  Action
} from '@ngrx/store';

export const ADD = '[Post] Add';

export class AddAction implements Action {
  readonly type = ADD;

  constructor(public payload: string) {}
}

export type Actions = AddAction