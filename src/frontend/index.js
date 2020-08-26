import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStore, compose } from 'redux';
import App from './routes/App';
import './assets/styles/app.scss';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState, composeEnhancers());
const history = createBrowserHistory();

delete window.__PRELOADED_STATE__;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fbd13b',
      main: '#fbc60a',
      dark: '#af8a07',
      contrastText: '#000',
    },
    secondary: {
      light: '#333333',
      main: '#000000',
      dark: '#000000',
      contrastText: '#fff',
    },
  },
});

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
