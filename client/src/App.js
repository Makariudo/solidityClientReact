import { Container } from '@material-ui/core';
import Header from "./Header.js";
import './App.css';

function App() {
  return (
    <Container className="App" maxWidth="sm">
      <Header />
    </Container>
  );
}

export default App;
