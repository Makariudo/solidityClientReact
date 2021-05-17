import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { generateStore, Drizzle } from '@drizzle/store';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import contractEventNotifier from "./eventMW";
import interactProvider from './redux/interactMW';
import drizzleOptions from "./utils/drizzleOptions";
import reducer from "./redux/reducer";
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import './index.css';
import App from './App';


const appMiddlewares = [ contractEventNotifier, interactProvider ]

const store = generateStore(({
  drizzleOptions,
  appReducers: {appStore: reducer},
  appMiddlewares,
  disableReduxdevTools: false,
}))

const drizzle = new Drizzle(drizzleOptions, store);
const { DrizzleProvider, Initializer } = drizzleReactHooks;

const rootReactElement = (
  <BrowserRouter>
    <DrizzleProvider drizzle={drizzle}>
      <Initializer
      error="There was an error."
      loadingContractsAndAccounts="loading contracts & accounts..."
      loadingWeb3="loading web3..."
    >
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Initializer>
    </DrizzleProvider>
  </BrowserRouter>
);

const target = document.getElementById("root");
render(rootReactElement, target);
