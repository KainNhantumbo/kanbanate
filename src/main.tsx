import './styles/reset.css';
import 'rc-dropdown/assets/index.css';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// import AppContext from './context/AppContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader';

const AppRouter = lazy(() => import('./AppRouter'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Router>
        <AppRouter />
      </Router>
    </Suspense>
  </React.StrictMode>
);
