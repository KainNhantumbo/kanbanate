import Header from './Header';
import Footer from './Footer';
import Toast from './Toast';
import Cookies from './Cookies';
import Prompt from './Prompt';
import type { ReactNode } from 'react';
import { useAppContext } from '../context/AppContext';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

interface Props {
  children: ReactNode;
  renderHeader?: boolean;
  renderFooter?: boolean;
}

function Layout({ children, renderHeader, renderFooter }: Props) {
  const { state } = useAppContext();

  return (
    <MotionConfig reducedMotion='user'>
      <LazyMotion strict={true} features={domAnimation}>
        {renderHeader ? <Header /> : null}
        <Cookies />
        <Toast key={state.toast.title.split(' ').join('') || undefined} />
        <Prompt key={state.prompt.title.split(' ').join('') || undefined} />
        {children}
        {renderFooter ? <Footer /> : null}
      </LazyMotion>
    </MotionConfig>
  );
}

export default Layout;
