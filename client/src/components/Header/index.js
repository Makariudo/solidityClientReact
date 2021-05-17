import { AppBar, Toolbar } from '@material-ui/core';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import { Link } from 'react-router-dom';


function Header() {
  const { useDrizzleState } = drizzleReactHooks;
  const account = useDrizzleState(({accounts}) => (accounts))
  return (
    <AppBar color="primary" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', position: 'relative', width:'100%'}}>
      <h1 style= {{marginLeft: '6rem'}}><Link to="/">MindPin</Link></h1>
      <Toolbar>
        <ul>
          <li><Link style={{ color: "white", textDecoration: "none" }} to="/Feed">Feed</Link></li>
          <li><Link style={{ color: "white", textDecoration: "none" }} to="/MyMind">Your Mind</Link></li>
          <li><Link style={{ color: "white", textDecoration: "none" }} to="/Profile">Profile</Link></li>
        </ul>
      </Toolbar>
      <h3 style= {{marginRight: '2rem'}} > Bienvenue {account[0]} !</h3>
    </AppBar>
  );
}

export default Header;
