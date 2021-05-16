import { AppBar } from '@material-ui/core';

function Header() {
  return (
    <AppBar color="primary" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
      <h1 style= {{marginLeft: '6rem'}}>Bienvenue sur l'appli MindPin</h1>
      <h3 style= {{marginRight: '2rem'}} > Address: 0101sdf02sd0f2s0df</h3>
    </AppBar>
  );
}

export default Header;
