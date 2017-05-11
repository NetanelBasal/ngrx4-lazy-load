import * as blog from './blog.actions';

export interface State {
  data: Array <string>,
  fetching: boolean
};

export const initialState: State = {
  data: ['Post one'],
  fetching: false
};

export function reducer(state = initialState, action: blog.Actions): State {
  switch (action.type) {
  case blog.ADD:
    return { ...state,
      data: state.data.concat([action.payload])
    };
  default:
    return state
  }
}