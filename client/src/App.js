import {useState} from 'react'; 
import { generateStore, Drizzle } from '@drizzle/store';
import { Container, Box } from '@material-ui/core';
import { drizzleReactHooks} from '@drizzle/react-plugin';
import {changeName} from './redux/action';
import Header from "./Header.js";
import './App.css';


function App() {
  const { useDrizzle, useDrizzleState } = drizzleReactHooks;
  const drizzleState = useDrizzleState(state => ({...state}));
  const {drizzle} = useDrizzle();

  const [input, setInput] = useState('init');
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  const handleSubmit = () => {
    drizzle.store.dispatch(changeName(input))
  }
  return (
    <Container className="App" maxWidth="m">
      <Header />
      <Box>
        <input type='text' value={input} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Click change name</button>
      </Box>

    </Container>
  );
}

export default App;
