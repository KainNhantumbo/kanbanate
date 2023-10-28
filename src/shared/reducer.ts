import actions from './actions';
import { Action, State } from '@/types';

export const initialState: State = {
  windowInnerSize: { width: 0, height: 0 },
  isAboutModal: false,
  prompt: { title: '', status: false, message: '' }
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actions.ABOUT_MODAL:
      return { ...state, isAboutModal: action.payload.isAboutModal };

    case actions.PROMPT:
      return { ...state, prompt: action.payload.prompt };

    case actions.WINDOW_INNER_SIZE:
      return { ...state, windowInnerSize: action.payload.windowInnerSize };

    default:
      return { ...state };
  }
}
