import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/App';
import { MyContextProvider } from './context/globalCoxtext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
      
    </MyContextProvider>
 
  </React.StrictMode>
);

