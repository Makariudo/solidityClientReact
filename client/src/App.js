import {useState, useEffect, useCallback } from 'react'; 
import { Route } from 'react-router-dom';
import { Container} from '@material-ui/core';
import { drizzleReactHooks} from '@drizzle/react-plugin';
import Feed from './components/Feed';
import Home from './components/Home';
import MyMind from './components/MyMind';
import Profile from './components/Profile';
import Header from "./components/Header";
import {subscribeAllEntries} from './redux/action'
import './App.css';


function App() {
  const { useDrizzle, useDrizzleState} = drizzleReactHooks;
  const {drizzle} = useDrizzle();
  const drizzleState = useDrizzleState(state => ({...state}))



  useEffect(() => {
    if(drizzleState.drizzleStatus.initialized){
    console.log("lance subscribe depuis useEffect")
    drizzle.store.dispatch(subscribeAllEntries(drizzle))
    }
  }, [drizzleState.appStore.ui.nbMinds])


  return (
    <Container className="App" maxWidth="lg">
      <Header />
      
      <div className="mt-4">
        <Route exact path="/" component={Home} />
        <Route exact path="/Feed" component={Feed} />
        <Route exact path="/MyMind" component={MyMind} />
        <Route path="/Profile" component={Profile} />
      </div>
    </Container>
  );
}

export default App;
