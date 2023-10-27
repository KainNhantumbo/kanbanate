import {
  ReactNode,
  useContext,
  useReducer,
  Dispatch,
  createContext,
  useEffect
} from 'react';
import actions from '@/shared/actions';
import { Action, State } from '@/types';
import ThemeContext from './ThemeContext';
import compareObjects from 'lodash.isequal';
import { initialState, reducer } from '@/shared/reducer';
import { NavigateFunction, useNavigate } from 'react-router-dom';

type Props = { children: ReactNode };

type Context = { state: State; dispatch: Dispatch<Action> };

const context = createContext<Context>({
  state: initialState,
  dispatch: () => {}
});

export default function AppContext({ children }: Props) {
  const navigate: NavigateFunction = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const computeInnerWindowSize = (): void => {
    dispatch({
      type: actions.WINDOW_INNER_SIZE,
      payload: {
        ...state,
        windowInnerSize: {
          width: Number(window.innerWidth.toFixed(0)),
          height: Number(window.innerHeight.toFixed(0))
        }
      }
    });
  };

  useEffect(() => {
    computeInnerWindowSize();
    window.addEventListener('resize', computeInnerWindowSize);
    return () => {
      window.removeEventListener('resize', computeInnerWindowSize);
    };
  }, []);

  return (
    <context.Provider value={{ state, dispatch }}>
      <ThemeContext>{children}</ThemeContext>
    </context.Provider>
  );
}

export function useAppContext() {
  return useContext<Context>(context);
}
