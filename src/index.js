import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import store from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
