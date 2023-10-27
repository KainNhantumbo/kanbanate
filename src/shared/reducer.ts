import actions from './actions';
import { Action, State } from '@/types';

export const initialState: State = {};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    default:
      return { ...state };
  }
}
