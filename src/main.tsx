import './styles/global.css';
import 'rc-dropdown/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppRouter.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
