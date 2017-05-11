import * as todos from './todos.actions';

export interface State {
  data: Array <string>,
  fetching: boolean
};

export const initialState: State = {
  data: ['Todo one'],
  fetching: false
};

export function reducer(state = initialState, action: todos.Actions): State {
  switch (action.type) {
  case todos.ADD:
    return { ...state,
      data: state.data.concat([action.payload])
    };
  default:
    return state
  }
}