import { store } from '@/state/store';
import { Provider } from 'react-redux';
import ThemeContext from './ThemeContext';
import { ReactNode, useEffect } from 'react';
import { updateSizes } from '@/state/inner-window-size/innerWindowSizeSlice';
import { useDispatch } from 'react-redux';

type Props = { children: ReactNode };

export default function AppContext({ children }: Props) {
  const dispatch = useDispatch();

  const computeInnerWindowSize = (): void => {
    dispatch(
      updateSizes({
        width: Number(window.innerWidth.toFixed(0)),
        height: Number(window.innerHeight.toFixed(0))
      })
    );
  };

  useEffect(() => {
    computeInnerWindowSize();
    window.addEventListener('resize', computeInnerWindowSize);
    return () => {
      window.removeEventListener('resize', computeInnerWindowSize);
    };
  }, []);

  return (
    <Provider store={store}>
      <ThemeContext>{children}</ThemeContext>
    </Provider>
  );
}
