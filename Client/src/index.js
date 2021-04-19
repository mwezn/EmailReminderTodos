
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import  {App } from './App.js'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

