import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <Auth0Provider
    domain="dev-kf-hf-91.us.auth0.com"
    clientId="1yOzYkda1aiLLVELFWX6kEtYAw1Br2xf"
    redirectUri={window.location.origin}
  >
  <Provider store={store}  >
    <App />
    </Provider>
  </Auth0Provider>
    
);


