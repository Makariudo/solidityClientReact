import {useState} from 'react'; 
import { Route } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import { drizzleReactHooks} from '@drizzle/react-plugin';
import {changeName} from './redux/action';
import Feed from './components/Feed';
import Home from './components/Home';
import MyMind from './components/MyMind';
import Profile from './components/Profile';

import Header from "./components/Header";
import './App.css';


function App() {
  const { useDrizzle} = drizzleReactHooks;
  const {drizzle} = useDrizzle();

  const [input, setInput] = useState('init');
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  const handleSubmit = () => {
    drizzle.store.dispatch(changeName(input))
  }
  return (
    <Container className="App" maxWidth="lg">
      <Header />
      <Box>
        <input type='text' value={input} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Click change name</button>
      </Box>
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
